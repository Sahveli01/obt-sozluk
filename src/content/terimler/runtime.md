---
term: "Runtime"
tr: "Çalışma zamanı"
aliases: ["çalışma zamanı"]
category: programlama
subcategory: "Çalışma zamanı ve bellek"
level: orta
short: "Bir programın çalıştığı süre; aynı zamanda program çalışırken ona eşlik eden destek katmanının adı."
related: [compilation, garbage-collection, event-loop, memory-management, node-js]
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

"Runtime" iki ayrı şeye birden ad olur.

Birincisi bir zaman dilimidir: programın çalıştığı an. "Çalışma zamanı hatası" derken bu kastedilir — kod [[compilation|derlemeden]] geçmiştir, kimse şikâyet etmemiştir, ama çalışırken bir yerde patlamıştır.

İkincisi bir yazılım katmanıdır: dilin, sen yazmadığın hâlde programınla birlikte çalışan destek parçası. [[garbage-collection|Çöp toplayıcı]], [[exception|istisna]] mekanizması ve iş parçacığı yönetimi burada durur.

## Nasıl çalışır?

İkinci anlamdaki runtime, dille işletim sistemi arasındaki ince katmandır. Program başlatıldığında ilk çalışan odur: belleği hazırlar, başlangıç yapılarını kurar, sonra senin ana fonksiyonunu çağırır. Program bittiğinde de son sözü o söyler.

Bu katmanın büyüklüğü dilden dile çok değişir ve bu bir tasarım tercihidir. JavaScript'in çalışma zamanı büyüktür; bellek yönetimi, [[event-loop|olay döngüsü]] ve ağ erişimi hep içindedir — [[node-js|Node.js]] bu ortamın tarayıcı dışındaki hâlidir. Rust ve C'de ise runtime kasıtlı olarak minik tutulur, işin çoğu derleme anında halledilir.

Sonuç doğrudan pratiktir: büyük çalışma zamanı olan diller yazması rahat ama her ortama sığmayan diller olur; küçük olanlar gömülü cihazdan sanal makineye kadar dar yerlere girebilir.

## Dikkat

Kelimeyi duyduğunda hangi anlamda kullanıldığını bağlamdan çıkarman gerekir: "runtime hatası" zamanı, "Node.js runtime'ı" katmanı anlatır.

Derleme zamanı – çalışma zamanı ayrımı ise bu alt başlıktaki pek çok konunun temelidir. Tip denetimi, kapsam çözümü ve pek çok optimizasyon derleme anında olur; bellek ayırma, kullanıcı girdisi ve ağdan gelen her şey çalışma anına aittir. Bir hatayı ararken önce hangi tarafta olduğuna karar vermek, aramayı yarı yarıya kısaltır.
