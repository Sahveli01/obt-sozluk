---
term: "Figma"
tr: ""
aliases: []
category: web
subcategory: "Frontend"
level: baslangic
short: "Arayüzlerin kod yazılmadan önce çizildiği, tarayıcıda çalışan ve birden çok kişinin aynı dosyada çalışabildiği tasarım aracı."
related: [design-system, design-token, wireframe, user-interface-ui, prototype]
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

Figma, arayüzlerin kod yazılmadan önce çizildiği bir tasarım aracıdır. Ekranlar, düğmeler ve kullanıcının izleyeceği akış burada hazırlanır. Tarayıcıda çalışır ve dosya tek bir bilgisayarda durmadığı için tasarımcı, geliştirici ve ekibin geri kalanı aynı anda aynı dosyaya bakar.

## Nasıl çalışır?

Arayüz işinde iki özelliği öne çıkar. Birincisi bileşen mantığıdır: bir düğmeyi bir kez tanımlar, her yerde onun kopyasını kullanırsın; aslını değiştirdiğinde bütün kopyalar değişir. Bu, koddaki [[component|bileşen]] fikrinin tasarım tarafındaki karşılığıdır. İkincisi ekranları birbirine bağlayıp tıklanabilir bir [[prototype|prototip]] üretmektir: [[user-interface-ui|arayüz]] daha yazılmadan elde denenir.

Geliştirici için dosya bir referanstır; ölçüler, renkler ve yazı boyutları oradan okunur. [[design-token|Token]] adları tasarım dosyasıyla kodda aynı tutulduğunda iki taraf aynı dili konuşur ve [[design-system|tasarım sistemi]] ikiye bölünmez.

## Dikkat

Tasarım dosyası koddan bağımsız yaşar: biri güncellenip diğeri güncellenmediğinde hangisinin doğru olduğu belirsizleşir. Dosyanın kendisi de son söz değildir — gerçek cihazda, gerçek metinle ve yavaş bağlantıda nasıl durduğunu yalnızca çalışan arayüz gösterir. Kaba bir [[wireframe|taslak]] yeterliyken cilalı ekran çizmek de erken harcanan emektir.
