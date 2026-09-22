---
term: "Merkle Root"
tr: "Merkle kökü"
aliases: ["merkle koku"]
category: kriptografi
subcategory: "Veri yapıları"
level: orta
short: "Bir Merkle ağacının tepesinde kalan tek özet değer; altındaki bütün veri kümesini temsil eden kısa kayıt."
related: [merkle-tree, merkle-proof, block-header, world-state, data-availability]
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

Merkle kökü, bir [[merkle-tree|Merkle ağacının]] tepesinde kalan tek özet değerdir. Altındaki küme bin kayıt da olsa bir milyon da olsa, temsilcisi bu tek değerdir.

Değerin kendisi kısa bir sayıdır ve içinden hiçbir şey okunamaz. Söylediği tek şey vardır: "altımdaki veri şuydu." Kümede tek bir karakter değişirse kök tanınmayacak kadar başka bir değere döner.

## Nasıl çalışır?

Kök, ağacın en üstteki düğümüdür; kendisi de altındaki iki dalın özetinin özetidir. Bu yüzden en aşağıdaki her kaydın etkisi seviye seviye yukarı taşınır ve kökte toplanır.

Zincirde kök, verinin yerine geçer. [[block-header|Blok başlığı]] o bloktaki işlemlerin tamamını değil, işlemlerin kökünü taşır: başlık birkaç yüz bayttır, işlemler çok daha büyüktür. Hesap tabanlı zincirlerde ayrıca bir durum kökü tutulur; o da [[world-state|dünya durumunun]] o andaki hâlini tek değere indirir.

Bunun iki pratik sonucu var. Birincisi, iki düğüm aynı veriye sahip olup olmadığını devasa dosyaları karşılaştırarak değil, tek bir değeri karşılaştırarak anlar. İkincisi, elinde güvendiğin bir kök varsa o kümedeki herhangi bir parçayı kısa bir [[merkle-proof|kanıtla]] sınayabilirsin.

## Dikkat

Kök, verinin **doğru** olduğunu söylemez; yalnızca **değişmediğini** söyler. Ağaca baştan hatalı ya da kötü niyetli bir kayıt konmuşsa kök onu da sadakatle özetler. Kökün güvencesi bütünlüktür, içeriğin denetimi değil.

Bir de kök, verinin hâlâ birilerinde durduğunu garanti etmez. Kök elindeyken veriyi kimse vermiyorsa kanıt üretemezsin; [[data-availability|veri erişilebilirliği]] ayrı bir problemdir ve kökü yayımlamakla çözülmez.
