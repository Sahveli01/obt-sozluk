---
term: "Clippy"
tr: ""
aliases: []
category: programlama
subcategory: "Rust kavramları"
level: orta
short: "Rust'ın resmî linter'ı; derlenen kodu okuyup daha doğrudan yazılabilecek yerleri işaretler."
related: [linter, rustfmt, cargo, rustup, static-analysis]
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

Clippy, Rust'ın resmî [[linter|linter]]'ıdır. [[rustup|rustup]] ile kurulan bir bileşendir ve `cargo clippy` komutuyla çalışır.

Söyledikleri derleyicinin söylediklerinin üstüne gelir. Derleyici "bu kod derlenmez" der; Clippy "bu kod derlenir, çalışır, ama Rust'ta bunu yazmanın daha doğrudan bir yolu var" der. Bu yüzden Clippy çıktısı çoğu zaman bir hata listesi değil, bir dil öğrenme aracıdır: yeni başlayan biri kendi yazdığı satırın topluluk tarafından nasıl yazıldığını burada görür.

## Nasıl çalışır?

Her uyarının bir adı vardır — `clippy::needless_range_loop` gibi — ve uyarılar gruplara ayrılır: `correctness` (neredeyse kesin hata), `style`, `complexity`, `perf` ve varsayılan olarak kapalı gelen `pedantic`. Varsayılan kümede çıkan her uyarıyı okumak iyi bir alışkanlıktır.

Tek bir kuralı kapatmak için ilgili satırın ya da fonksiyonun üstüne `#[allow(clippy::needless_range_loop)]` [[attribute|özniteliği]] konur. [[ci-cd|CI]] tarafında ise `cargo clippy -- -D warnings` bütün uyarıları hataya çevirir; böylece uyarılı kod birleştirilemez.

Önerilerin bir kısmı otomatik uygulanabilir: `cargo clippy --fix` bunları kendisi düzeltir, geri kalanını sana bırakır.

## Örnek

Aşağıdaki kod derlenir ve doğru sonucu verir:

```rust
let sayilar = vec![1, 2, 3];
let mut toplam = 0;
for i in 0..sayilar.len() {
    toplam += sayilar[i];
}
```

Clippy yine de itiraz eder:

```text
warning: the loop variable `i` is only used to index `sayilar`
help: consider using an iterator
4 -     for i in 0..sayilar.len() {
4 +     for <item> in &sayilar {
```

Söylediği şu: bir [[iterator|iterator]] ile yazarsan kod hem kısalır hem de her adımda yapılan sınır kontrolünden kurtulur.

## Dikkat

Clippy ile [[rustfmt|rustfmt]] birbirinin yerine geçmez; biri kodun ne yaptığına, diğeri nasıl göründüğüne bakar. Aradaki fark linter maddesinde ayrıntılandırılıyor.

Ve her uyarı bir emir değildir. `pedantic` grubunu açtığında çıkan yüzlerce uyarının bir kısmı senin projen için anlamsız olacaktır; kapatmak meşru bir karardır. Kötü olan, uyarıları görmeye o kadar alışmaktır ki aralarındaki gerçek olanı bir gün kaçırmak.
