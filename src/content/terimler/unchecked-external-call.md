---
term: "Unchecked External Call"
tr: "Kontrol edilmeyen dış çağrı"
aliases: ["kontrol edilmeyen dış çağrı"]
category: guvenlik
subcategory: "Sözleşme açıkları"
level: orta
short: "Dış çağrının başarısız olduğunu bildiren dönüş değerini okumamak; sözleşme işi yapılmış gibi yoluna devam eder."
related: [call-low-level, require, cross-contract-call, denial-of-service-dos, pull-over-push-payments, revert]
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

Solidity'de bir başka sözleşmeyi iki yoldan çağırabilirsin. Arayüz üzerinden yapılan yüksek seviyeli çağrı başarısız olursa senin işlemini de kendiliğinden geri alır. Düşük seviyeli çağrılar ([[call-low-level|`call`]], `delegatecall`, `staticcall`, `send`) **bunu yapmaz**: başarıyı bir dönüş değeri olarak sana bildirir ve karar senindir.

O değeri okumazsan başarısızlık sessizce yutulur. Para gitmemiştir ama sözleşmen "gönderdim" diye devam eder, defterine "ödendi" yazar, olayını yayımlar. Ortaya çıkan zarar hırsızlık değil, **gerçekle tutmayan bir muhasebedir** — ve fark edildiğinde geri sarmak çoğu zaman mümkün olmaz.

## Benzetme

Kasiyerin kartı POS cihazına okutup ekrana bakmadan fişi uzatması gibi. Cevap orada duruyordur: ekranda "işlem reddedildi" yazıyor olabilir. Kimse bilgiyi saklamamıştır, kimse yalan söylememiştir — yalnızca kimse bakmamıştır. Müşteri çıkar, kasa gün sonunda tutmaz.

## Nasıl çalışır?

Derleyici bu durumu uyarı olarak bildirir ama kodu yine derler; uyarıların arasında kaybolması çok kolaydır.

Doğru davranış "her zaman geri al" değildir, duruma bağlıdır. Tek bir ödeme yapıyorsan dönüş değerini [[require|`require`]] ile kontrol et ve başarısızlıkta işlemi geri al. Bir listeye toplu ödeme yapıyorsan tam tersi gerekir: tek bir alıcının reddi bütün dağıtımı kilitlememeli ([[denial-of-service-dos|hizmet reddi]]). Orada doğru kurgu, sonucu yine okuyup başarısız olanı kenara yazmak ve parayı sözleşmenin dağıtması yerine alıcının çekmesini sağlamaktır ([[pull-over-push-payments|pull over push]]).

İki seçenek arasında ne seçersen seç, ikisi de "hiç bakmamak"tan iyidir.

## Örnek

```solidity
// AÇIK: dönüş değeri yok sayılıyor, başarısız transfer fark edilmiyor
function ode(address kime, uint256 tutar) external {
    kime.call{value: tutar}("");
}
```

```solidity
// DÜZELTİLMİŞ: sonuç okunuyor ve başarısızlıkta işlem geri alınıyor
function ode(address kime, uint256 tutar) external {
    (bool ok, ) = kime.call{value: tutar}("");
    require(ok, "odeme basarisiz");
}
```

## Dikkat

Düşük seviyeli bir çağrı, hedef adreste **hiç kod yoksa** başarılı döner. Yani `true` almak "işlem yapıldı" demek değildir; bir sözleşmeyi çağırdığını varsayıyorsan hedefte gerçekten kod olduğunu ayrıca kontrol etmen gerekir.

Token transferlerinde ek bir tuzak var: bazı sözleşmeler standardın beklediği dönüş değerini hiç döndürmez, bazıları `false` döndürüp hata fırlatmaz. Bu yüzden token transferleri elle değil, her iki davranışı da doğru ele alan denetlenmiş kütüphanelerle yapılır.

Bir de ters yönü unutma: her başarısızlıkta işlemin tamamını geri almak, bir başkasına senin sözleşmeni kilitleme gücü verebilir ([[cross-contract-call|sözleşmeler arası çağrı]]). Kontrol etmek zorunludur; her zaman geri almak değil.
