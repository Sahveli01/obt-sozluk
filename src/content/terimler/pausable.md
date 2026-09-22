---
term: "Pausable"
tr: ""
aliases: []
category: akilli-sozlesmeler
subcategory: "Tasarım kalıpları"
level: orta
short: "Acil bir durumda sözleşmenin seçilmiş fonksiyonlarını geçici olarak durdurmaya yarayan anahtar."
related: [access-control, ownable, circuit-breaker, smart-contract-audit, multisig]
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

Pausable, sözleşmeye bir "dur" anahtarı ekleyen kalıptır. Anahtar çevrildiğinde belirlenmiş fonksiyonlar çağrılamaz hâle gelir; sorun giderilince aynı anahtarla açılır. Amaç, bir açık fark edildiğinde ya da bağlı olunan başka bir sistem bozulduğunda kanamayı durdurmaktır.

Bir kütüphane sözleşmesinin adı olduğu için çevrilmez; kodda `Pausable` diye geçer.

## Benzetme

Yürüyen merdivenin yanındaki kırmızı durdurma düğmesi gibi. Merdiven normalde durmaz, kimse ona bakmaz. Biri düşerse düğmeye basılır ve her şey olduğu yerde kalır — düşen kişi kalkmaz, merdiven tamir olmaz, sadece durum daha kötüye gitmez. Düğme çoğu binada herkesin erişebileceği yerdedir ve tam da bu yüzden kimin bastığı sorusu önemlidir.

## Nasıl çalışır?

Sözleşmede durumu tutan bir boolean değişken bulunur. Korunacak fonksiyonların başına "durdurulmuş değilse devam et" anlamına gelen bir modifier eklenir; durdurulmuşsa işlem geri alınır. Durdurma ve açma fonksiyonları da [[access-control|erişim denetimiyle]] korunur, yoksa herkes uygulamayı kapatabilirdi.

Hangi fonksiyonların duracağı bir tasarım kararıdır ve her şeyi durdurmak iyi bir varsayılan değildir. Yerleşik yaklaşım, para girişini ve alışverişi durdurup **çekme yolunu açık bırakmaktır**; böylece kullanıcılar sorun sürerken parasını alabilir.

## Örnek

```solidity
bool public durduruldu;

modifier calisiyorken() {
    require(!durduruldu, "sozlesme durduruldu");
    _;
}

function yatir() external payable calisiyorken {
    // yalnızca durdurulmamışken çalışır
}
```

## Dikkat

Durdurma yetkisi bir **merkezîlik noktasıdır**. Onu elinde tutan adres, uygulamayı istediği an kilitleyebilir; kötü kurgulanmış bir sözleşmede bu, kullanıcıların kendi parasına erişemez hâle gelmesi demektir. Sözleşmeye bakarken sorulacak soru "duraklatma var mı" değil, "kim duraklatabiliyor, ne kadar süre kapalı kalabilir, ben bu sırada paramı çekebiliyor muyum" olmalıdır. Yetkinin bir [[multisig|çoklu imza]] cüzdanında durması bu riski azaltır.

İkinci nokta: duraklatma bir çözüm değil, zaman kazanma aracıdır. Çalınan para geri gelmez, açık kapanmaz; yalnızca [[smart-contract-audit|inceleme]] ve düzeltme için nefes alınır. Ayrıca insan kararına bağlıdır — eşik aşılınca kendi kendine devreye giren otomatik durdurmalar için [[circuit-breaker|devre kesici]] kalıbına bak.
