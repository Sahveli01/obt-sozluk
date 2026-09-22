---
term: "Cargo.toml"
tr: ""
aliases: []
category: programlama
subcategory: "Rust kavramları"
level: orta
short: "Bir Rust paketinin adını, sürümünü ve bağımlılıklarını tutan, Cargo'nun ilk okuduğu yapılandırma dosyası."
related: [cargo, toml, dependency, semantic-versioning, crate]
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

Cargo.toml, bir Rust paketinin kimlik ve bağımlılık dosyasıdır. [[cargo|Cargo]] bir klasöre girdiğinde önce bunu okur: paketin adı ne, hangi sürümde, dilin hangi sürüm ailesiyle (edition) yazılmış ve dışarıdan hangi kütüphaneler gerekiyor.

Biçimi [[toml|TOML]]'dur: köşeli parantez içindeki başlıklar bölüm açar, altındaki satırlar `anahtar = değer` şeklinde yazılır.

Python tarafındaki en yakın karşılığı `pyproject.toml`'dur; orada da paket bilgisi ve bağımlılıklar aynı dosyada durur. Eski `requirements.txt` alışkanlığından farkı, Cargo.toml'un yalnızca bir liste değil, paketin kendisinin tanımı olmasıdır.

## Benzetme

Doktorun kâğıda yazdığı ile eczaneden çıkan kutu arasındaki fark gibi. Kâğıtta "günde iki kez ağrı kesici" yazar; kutunun üstünde tek bir markanın tek bir parti numarası vardır. Cargo.toml kâğıttır, `Cargo.lock` kutudur: biri ne istediğini, diğeri tam olarak neyin geldiğini söyler.

## Nasıl çalışır?

`rand = "0.10"` yazdığında Cargo'ya "0.10 ile uyumlu en yeni sürümü getir" demiş olursun; bu uyumluluk kuralı [[semantic-versioning|semantik sürümleme]]den gelir. Cargo isteği çözdükten sonra sonucu `Cargo.lock` dosyasına yazar: hangi [[crate|crate]]'in tam olarak hangi sürümünün, hangi sağlama değeriyle indirildiği oradadır.

Aradaki iş bölümü önemli: Cargo.toml'u sen yazarsın, Cargo.lock'u Cargo üretir. Lock dosyası depoda durduğu sürece, projeyi altı ay sonra başka bir bilgisayarda derleyen kişi birebir aynı [[dependency|bağımlılıkları]] alır. Çalıştırılabilir uygulamalarda bu dosya depoya eklenir.

## Örnek

```toml
[package]
name = "merhaba"
version = "0.1.0"
edition = "2024"

[dependencies]
rand = "0.10"
```

## Dikkat

Bağımlılık satırlarını elle yazmak yerine `cargo add rand` komutunu kullanmak daha güvenlidir: komut uygun sürümü kendisi bulup dosyaya doğru biçimde yazar.

`Cargo.lock`'u elle düzenlemeye çalışma. Değiştirmek istediğin şey neredeyse her zaman Cargo.toml'dadır; lock dosyası onun sonucudur ve bir sonraki komutta yeniden üretilir.
