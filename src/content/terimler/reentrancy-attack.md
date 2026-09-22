---
term: "Reentrancy Attack"
tr: "Yeniden giriş saldırısı"
aliases: ["reentrancy", "yeniden giriş saldırısı"]
category: guvenlik
subcategory: "Sözleşme açıkları"
level: orta
short: "Sözleşme dışarıya para gönderirken kontrolü karşı tarafa bırakır; o kod, iş bitmeden aynı fonksiyonu yeniden çağırır."
related: [reentrancy-guard, checks-effects-interactions, call-low-level, fallback-function, cross-contract-call, pull-over-push-payments]
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

Yeniden giriş saldırısı, bir sözleşmenin **işini bitirmeden kontrolü dışarıya bırakmasına** dayanır. Sözleşme bir adrese para gönderdiğinde ya da başka bir sözleşmeyi çağırdığında, o çağrı süresince karşı tarafın kodu çalışır. Karşı taraf bir sözleşmeyse, senin fonksiyonun daha bitmemişken sana geri dönüp aynı fonksiyonu yeniden çağırabilir.

Asıl sorun çağrıda değil, **defterin ne zaman güncellendiğindedir**. Bakiyeyi transferden sonra sıfırlıyorsan, ikinci girişte defterde hâlâ eski rakam yazılıdır ve sözleşme aynı parayı bir kez daha öder. Üçüncü, dördüncü kez de öder.

2016'da The DAO sözleşmesinde kullanılan açık buydu; bu olay yeniden giriş kavramını bütün ekosisteme tanıttı.

## Nasıl çalışır?

Ether göndermenin düşük seviyeli yolu ([[call-low-level|`call`]]) karşı tarafa geniş bir [[gas]] bütçesi bırakır. Alıcı bir sözleşmeyse gelen para onun [[fallback-function|`receive`/`fallback`]] fonksiyonunu tetikler; o fonksiyon istediği kodu çalıştırabilir — hem de senin fonksiyonunun tam ortasında.

O ana kadar güncellediğin değişkenleri yeni çağrı doğru görür, güncellemediklerini eski hâliyle görür. Saldırının bütün gücü bu tutarsızlık penceresinden gelir. Pencere ne kadar geniş kalırsa — yani dış çağrıdan sonra yapacak ne kadar çok işin varsa — risk o kadar büyüktür.

Bu yüzden savunma da bir sıralama meselesidir: dış çağrıyı fonksiyonun **son** adımı yap ve çağrıdan önce kendi defterini kapatmış ol.

## Örnek

```solidity
// AÇIK: bakiye, para gönderildikten sonra sıfırlanıyor
mapping(address => uint256) public bakiye;

function cek() external {
    uint256 tutar = bakiye[msg.sender];
    (bool ok, ) = msg.sender.call{value: tutar}("");
    require(ok, "transfer basarisiz");
    bakiye[msg.sender] = 0; // cagri suresince hala eski deger
}
```

```solidity
// DÜZELTİLMİŞ: önce kontrol, sonra durum, en son dış çağrı
mapping(address => uint256) public bakiye;

function cek() external {
    uint256 tutar = bakiye[msg.sender];
    require(tutar > 0, "bakiye yok");
    bakiye[msg.sender] = 0;
    (bool ok, ) = msg.sender.call{value: tutar}("");
    require(ok, "transfer basarisiz");
}
```

## Dikkat

Birinci savunma sıralamadır ([[checks-effects-interactions|Checks-Effects-Interactions]]), kilit değil. Doğru sırayla yazılmış bir fonksiyon zaten yeniden girişten etkilenmez; [[reentrancy-guard|kilit]] gözden kaçan durumlar için ikinci savunmadır.

Kilidin sınırını bil: yalnızca **aynı kilidi paylaşan** fonksiyonlara girişi engeller. Saldırgan aynı bakiyeye dokunan kilitsiz bir başka fonksiyona girerse kilit iş görmez — buna çapraz fonksiyon yeniden girişi denir ve aynı veriye dokunan bütün fonksiyonların birlikte düşünülmesini gerektirir.

Sadece okuma yapan bir fonksiyon bile bu pencerede tutarsız bir değer döndürür. Başka bir protokol senin `view` fonksiyonuna bakarak karar veriyorsa zarar sende değil onda oluşur; [[cross-contract-call|sözleşmeler arası çağrılarda]] zincirin tamamını düşünmen gerekir.
