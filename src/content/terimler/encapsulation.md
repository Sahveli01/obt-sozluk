---
term: "Encapsulation"
tr: "Kapsülleme"
aliases: ["kapsülleme"]
category: programlama
subcategory: "Paradigmalar ve tasarım"
level: orta
short: "Bir nesnenin iç verisini dışarıya kapatıp ona yalnızca izin verilen işlemler üzerinden dokundurma."
related: [abstraction, class, object, method, clean-code]
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

Kapsülleme, bir [[object|nesnenin]] iç verisini dışarıya kapatıp ona yalnızca izin verilen işlemler üzerinden dokundurmaktır. Dışarıdaki kod bakiyeyi doğrudan yazamaz; "para yatır" der ve bakiyeyi nesnenin kendi [[method|metodu]] değiştirir.

Asıl amaç gizlilik değil, **kuralı ayakta tutmaktır**. Bakiye eksiye düşmesin, kapanmış bir oylamaya oy eklenmesin, indirim yüzde yüzü geçmesin... Bu kurallar tek bir yerde, verinin hemen yanında yazılıysa bozulmaları zordur. Veri herkese açıksa kural elli ayrı yerde tekrar tekrar kontrol edilmek zorunda kalır ve bir gün biri unutulur.

## Benzetme

Otel odasının mini barı gibi. Dolabın içini görürsün, neyin kaç tane kaldığını bilirsin; ama fiyatı sen belirleyemez, stoğu sen değiştiremezsin. Yapabileceğin tek şey bir ürünü almaktır ve o an hesabına işlenir. Sayımın tutmasının sebebi budur: dolaba başka bir yoldan erişilemez.

## Nasıl çalışır?

Diller bunu erişim belirteçleriyle yapar: `private` ile işaretlenen alan sınıfın dışından okunamaz ya da yazılamaz, `public` olanlar dışarıya açıktır. Dışarının ihtiyaç duyduğu değerler için okuma ve yazma metotları bırakılır; yazma metodu kontrolü içeride yapar.

Python'un zorlayıcı bir `private`'ı yoktur. Alan adının başına konan alt çizgi ("_bakiye") "buraya dışarıdan dokunma" anlamına gelen bir anlaşmadır; dil engellemez, ekip uyar. `@property` ile bir alan okunur gibi görünüp aslında metot üzerinden verilebilir.

## Örnek

```python
class Oylama:
    def __init__(self):
        self._oylar = 0
        self._acik = True

    def oy_ver(self):
        if not self._acik:
            raise RuntimeError("oylama kapandı")
        self._oylar += 1

    def kapat(self):
        self._acik = False
```

## Dikkat

Kapsülleme ile [[abstraction|soyutlama]] en sık karıştırılan çifttir. Fark şu: kapsülleme **erişimi** kısıtlar, soyutlama **ayrıntıyı** dışarıda bırakır. Kapsülleme "buraya dokunamazsın" der, soyutlama "bunu bilmene gerek yok" der. Otomatın camı şeffaf olsa bile elini sokamazsın — gördüğün hâlde erişemiyorsan orada kapsülleme vardır.

Her alanı `private` yapıp her biri için bir okuma ve bir yazma metodu yazmak ise kapsülleme değildir; sadece veriyi iki satır uzaktan açmaktır. Ölçü şudur: metot bir kuralı koruyor mu, yoksa değeri olduğu gibi geçiriyor mu?
