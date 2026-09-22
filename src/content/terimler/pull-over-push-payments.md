---
term: "Pull over Push Payments"
tr: ""
aliases: ["pull payment"]
category: akilli-sozlesmeler
subcategory: "Tasarım kalıpları"
level: orta
short: "Sözleşmenin parayı alıcılara kendi göndermesi yerine, herkesin kendi payını kendisinin çekmesi ilkesi."
related: [denial-of-service-dos, checks-effects-interactions, fallback-function, reentrancy-attack, gas]
disambiguation: []
tags: []
status: taslak
reviewedBy: []
dateSensitive: false
sources: []
added: 2026-09-21
updated: 2026-09-22
---

## Nedir?

İki ödeme biçimi var. **Push**: sözleşme parayı hak edenlere kendisi gönderir, genelde bir döngü içinde. **Pull**: sözleşme yalnızca kimin ne kadar alacağı olduğunu yazar; herkes kendi payını ayrı bir işlemle çeker.

Kalıp, ikincisini tercih etmeni söyler. Sebebi kolaylık değil, **dayanıklılıktır**: push'ta tek bir alıcı yüzünden dağıtımın tamamı çöker.

Kalıbın adı çevrilerek kullanılmaz; "pull payment" ya da "çekme kalıbı" diye geçer.

## Benzetme

İptal edilen bir etkinliğin bilet iadesi gibi. Organizatör bin kişinin kapısına tek tek gidip parayı elden vermez; bir iade masası açar, gelen hesabını kapatır. Elden dağıtmayı denese, kapısını açmayan ya da adresi yanlış yazılmış tek bir kişi bütün sırayı durdururdu. Masa kurulduğunda ise kimin ne zaman geldiği diğerlerini ilgilendirmez.

## Nasıl çalışır?

Push kurgusunda sözleşme bir liste üzerinde dönerek her adrese transfer yapar. Bu transferlerden biri başarısız olursa işlemin tamamı geri alınır — ve saldırgan, listeye kasten başarısız olan bir sözleşme sokarak dağıtımı kalıcı olarak kilitleyebilir ([[denial-of-service-dos|hizmet reddi]]).

Pull kurgusunda sözleşme yalnızca bir eşlemeyi günceller: `alacak[adres] += pay`. Para çekme, kullanıcının kendi başlattığı ayrı bir işlemdir. Biri hiç çekmezse yalnızca kendi payı bekler, sistem çalışmaya devam eder. Çekme fonksiyonu da [[checks-effects-interactions|kontrol-etki-etkileşim]] sırasına uyar: önce alacak sıfırlanır, sonra para gönderilir.

## Örnek

```solidity
mapping(address => uint256) public alacak;
// push: tek bir alıcı başarısız olursa döngünün tamamı geri alınır
function dagit(address[] calldata kime, uint256 tutar) external {
    for (uint256 i = 0; i < kime.length; i++) {
        payable(kime[i]).transfer(tutar);
    }
}

// pull: herkes kendi payını kendi işlemiyle alır
function cek() external {
    uint256 tutar = alacak[msg.sender];
    alacak[msg.sender] = 0;
    (bool ok, ) = msg.sender.call{value: tutar}("");
    require(ok, "odeme basarisiz");
}
```

## Dikkat

Push'un başarısız olmasının iki yolu var: alıcı bir sözleşmedir ve [[fallback-function|`fallback`]]'i işlemi geri alır; ya da `transfer` ile gönderdiğin ETH'de karşı tarafa verilen 2300 [[gas]] alıcının koduna yetmez. İkisi de senin kodunda bir hata olmadan seni kilitler.

Pull da bedava değildir. Çekme işleminin gazını kullanıcı öder, bu yüzden küçük tutarlar çoğu zaman hiç alınmaz ve sözleşmede sahipsiz bakiye birikir. Bu yüzden çekme fonksiyonunun kendisi de [[reentrancy-attack|yeniden giriş]] açısından en dikkatli yazılması gereken yerdir.
