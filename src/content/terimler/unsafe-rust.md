---
term: "Unsafe Rust"
tr: ""
aliases: ["unsafe"]
category: programlama
subcategory: "Rust kavramları"
level: ileri
short: "Derleyicinin denetleyemediği birkaç işleme izin veren, bu işlemlerin güvenliğini programcının üstlendiği blok."
related: [memory-safety, ownership, borrow-checker, rust, smart-pointer]
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

Rust'ın ayırt edici özelliği [[memory-safety|bellek güvenliğini]] derleme anında denetlemesidir. `unsafe` anahtar kelimesi, bu denetimin küçük bir bölümünü kapattığın kapıdır.

Kapının ardında yalnızca beş işlem vardır: ham işaretçinin gösterdiği yeri okumak veya yazmak, `unsafe` olarak işaretlenmiş bir fonksiyonu çağırmak, değiştirilebilir bir `static` değişkene erişmek, `unsafe` bir [[trait-rust|trait]]'i uygulamak ve bir `union`'ın alanını okumak. Bunların dışındaki her kural — sahiplik, ödünç alma, tip denetimi — `unsafe` bloğunun içinde de aynen işlemeye devam eder.

`unsafe` bir anahtar kelimedir ve Türkçeye çevrilmeden kullanılır.

## Nasıl çalışır?

Böyle bir kapı neden var? Çünkü bazı doğru programlar derleyicinin kurallarıyla ifade edilemez: işletim sistemiyle ya da bir C kütüphanesiyle konuşmak, donanım adresine doğrudan yazmak, derleyicinin güvenliğini kanıtlayamadığı bir veri yapısı kurmak gibi. Kapı olmasaydı bu işler Rust'ta hiç yapılamazdı.

Yerleşik yöntem şudur: `unsafe`'i mümkün olan en küçük bloğa hapset, etrafına güvenli bir arayüz ör. Standart kütüphanenin içi `unsafe` doludur; ama sen `Vec` kullanırken hiç `unsafe` yazmazsın, çünkü riskli kısmın doğruluğu bir kez, o kütüphanenin içinde gerekçelendirilmiştir. Bu yüzden topluluğun yazılı olmayan kuralı, her `unsafe` bloğunun üstüne o bloğun neden güvenli olduğunu açıklayan bir yorum koymaktır.

## Örnek

Sınır kontrolünü bir kez yapıp dilimi kontrolsüz okuyan küçük bir sarmalayıcı:

```rust
fn ilk_eleman(v: &[i32]) -> Option<i32> {
    if v.is_empty() {
        return None;
    }
    // GÜVENLİK: yukarıdaki kontrol v'nin boş olmadığını garantiledi,
    // dolayısıyla 0. indeks her zaman geçerli.
    Some(unsafe { *v.get_unchecked(0) })
}
```

Dışarıdan bakan biri için bu fonksiyon tamamen güvenlidir: yanlış kullanmanın bir yolu yoktur.

## Dikkat

`unsafe`, "kural yok" demek değildir. "Bu birkaç işlemin güvenliğini derleyici yerine sen garanti ediyorsun" demektir. Kurallar aynı kurallardır; değişen tek şey, onları kimin denetlediğidir.

Buradan iki alışkanlık çıkar. Birincisi kapsam: bloğu gereken satırlarla sınırla, bütün fonksiyonu `unsafe` ilan etme. İkincisi gerekçe: bloğun güvenli olduğunu neye dayanarak söylediğini yaz — o satıra altı ay sonra bakan kişi çoğu zaman sen olursun ve o an gerekçeyi hatırlamazsın.

Bir de yaygın bir yanlış anlama: `unsafe` yazmak kodu hızlandırmaz. Derleyici güvenli kodu da aynı sıkılıkta en iyileştirir. `unsafe` bir performans düğmesi değil, bir sorumluluk devridir.
