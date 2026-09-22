---
term: "Zero-cost Abstraction"
tr: "Sıfır maliyetli soyutlama"
aliases: ["sıfır maliyetli soyutlama"]
category: programlama
subcategory: "Rust kavramları"
level: ileri
short: "Soyutlamayı derleme anında eritip, elle yazılmış koda göre çalışma anında fazladan yük bırakmama ilkesi."
related: [abstraction, iterator, generics, compiler, rust]
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

Sıfır maliyetli soyutlama, bir dilin şu iki sözü birden vermesidir: kullanmadığın özellik sana hiçbir şeye mal olmaz, kullandığın özellik de elle yazsan elde edeceğinden daha pahalı olmaz. Kural C++ dünyasından gelir, Rust onu tasarımının ortasına koymuştur.

"Sıfır maliyet" buradaki anlamıyla **çalışma anı** maliyetidir; derleme süresi ve ikili dosya boyutu bu sözün dışındadır.

## Benzetme

Çizerin kılavuz çizgileri gibi. Ressam oranı tutturmak için önce ince yardımcı çizgiler çeker; iş bitince onları siler. Nihai çizimde o çizgilerden tek bir iz kalmaz — ama sen çizerken onlar olmadan oranı tutturamazdın. Yardım tamamen senin tarafındadır, sonucu taşıyan kâğıda hiç geçmez.

## Nasıl çalışır?

Python'da soyutlamanın bedeli çalışma anında ödenir: sınıf çağrısı, dekoratör katmanı, generator'ın her `next()` adımı gerçek birer iştir. Rust'ta ise katmanlar derleme sırasında eritilir. [[generics|Generic]] bir fonksiyon, kullandığın her tip için ayrı ayrı özelleştirilerek derlenir (monomorphization); [[closure|closure]] gövdesi çağrıldığı yere gömülür; [[iterator|iterator]] zincirinin `filter` ve `map` katmanları tek bir döngüye iner.

Aşağıdaki iki fonksiyonu `-O` ile derleyip ürettikleri makine koduna baktığımızda, zincirli sürümde ne bir yineleyici nesnesi ne de closure için bir fonksiyon çağrısı kalıyor: geriye tek bir döngü kalıyor, derleyici üstüne bir de onu vektörleştiriyor.

## Örnek

```rust
pub fn zincirle(v: &[u64]) -> u64 {
    v.iter().map(|x| x * 2).sum()
}

pub fn elle(v: &[u64]) -> u64 {
    let mut toplam = 0;
    for x in v { toplam += x * 2; }
    toplam
}
```

## Dikkat

Her soyutlama sıfır maliyetli değildir ve Rust bunu gizlemez. `dyn Trait` ile yapılan çağrı çalışma anında bir tablo üzerinden gider; [[smart-pointer|`Rc` ve `RefCell`]] sayaç tutar ve kontrol yapar. Bunlar kusur değil, açıkça seçilmiş maliyetlerdir — anahtar kelimeyi sen yazarsın, bedelini de bilerek kabul edersin.

Ödemediğin bir bedel de yok değil: monomorphization aynı fonksiyonun onlarca sürümünü üretebilir, bu da derleme süresini ve ikili dosya boyutunu büyütür. Rust'ın derlemesinin yavaş oluşunun sebeplerinden biri tam olarak budur.
