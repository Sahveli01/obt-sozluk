---
term: "Abilities (Move)"
tr: ""
aliases: ["move abilities", "ability (move)"]
category: programlama
subcategory: "Move kavramları"
level: ileri
short: "Move'da bir tipin hangi işlemlere açık olduğunu belirleyen dört etiket: copy, drop, store ve key."
related: [resource-move, resource-oriented-programming, move, struct, type-safety]
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

[[move|Move]]'da her tip, kendisiyle ne yapılabileceğini bildiriminin içinde ilan eder. Bu ilana ability denir ve dört tanedir: `copy`, `drop`, `store`, `key`. Tip hangilerini taşıyorsa derleyici yalnızca onlara izin verir; listede olmayan her işlem derleme hatasıdır.

Terimin yerleşmiş bir Türkçe karşılığı yok — anlatırken "yetenek" deniyor ama bildirimdeki `has` listesinde İngilizce yazıldığı için terim İngilizce kullanılıyor.

## Benzetme

Kıyafetin yakasındaki bakım etiketi gibi. Etikette makinede yıkama, kurutucu, ütü ve kuru temizleme simgeleri vardır. Kumaş hepsinde aynı kumaştır; değişen, o kumaşa ne yapılmasına izin verildiğidir. Üstelik asıl bilgi orada olmayan simgededir: kurutucu simgesi yoksa o kıyafet kurutucuya girmez.

## Nasıl çalışır?

Dördü şunu söyler:

- **`copy`** — değerden kopya üretilebilir; bir sayıyı iki değişkene atadığında olan budur.
- **`drop`** — değer kullanılmadan bırakılabilir, kapsam bitince kendiliğinden yok olur.
- **`store`** — değer, zincirin deposunda bir başka yapının içinde durabilir.
- **`key`** — değer, zincir deposunda kendi kimliğiyle adreslenen üst düzey bir kayıt olabilir.

İlk ikisi asıl ayrımı kurar. [[resource-move|Kaynak]] dediğimiz şey pratikte `copy` ve `drop` taşımayan bir tiptir: kopyalanamaz, çünkü `copy` yok; sessizce atılamaz, çünkü `drop` yok. [[resource-oriented-programming|Kaynak odaklı programlamanın]] bütün güvencesi bu iki eksikten çıkar.

Yetenekler iç içe de geçer: bir yapının `copy` taşıyabilmesi için bütün alanlarının `copy` taşıması gerekir. Böylece bir kaynağı başka bir yapının içine saklayıp kısıtlarından kurtulmak mümkün olmaz.

## Örnek

`store` taşıyan ama `copy` taşımayan bir para nesnesini kopyalamayı denediğini düşün. Derleyici satırı reddeder, hataya `ability constraint not satisfied` adını verir ve eksik yeteneğin hangi tipe eklenmesi gerektiğini gösterir.

Aynı nesneyi bir fonksiyonun içinde kullanmadan bırakırsan bu kez `unused value without 'drop'` hatasını alırsın: değer geride kaldı, kimse sahiplenmedi. İkisi de çalışma anında değil derleme anında olur; kod zincire hiç çıkmaz.

## Dikkat

Yetenekler bir yetkilendirme mekanizması değil, bir [[type-safety|tip güvenliği]] aracıdır. Kimin çağırdığına bakmazlar, ne yapılmaya çalışıldığına bakarlar; "bu fonksiyonu yalnızca yönetici çağırabilsin" kontrolünü hâlâ sen yazarsın.

Bir de `store` ile `key` sık karıştırılır. `store` "bir başkasının içinde durabilirim", `key` "kendi başıma durabilirim" demektir. Bir tip ikisini birden taşıyabilir, hiçbirini taşımayabilir de.
