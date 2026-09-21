---
term: "Context Compaction"
tr: ""
aliases: []
category: yapay-zeka
subcategory: "Prompt ve kullanım"
level: orta
short: "Dolmak üzere olan bağlamı özetleyip kırparak konuşmayı sürdürülebilir hâlde tutma."
related: [context-window, memory-ai, context-engineering, token-pricing, prompt-caching]
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

Uzun bir sohbet ya da saatlerce çalışan bir ajan görevi er geç [[context-window|bağlam penceresini]] doldurur. Compaction, biriken geçmişi olduğu gibi taşımak yerine küçültür: eski turlar bir özete indirilir, tekrar eden ve artık gereksiz olan kısımlar atılır, kritik kararlarla açık kalan işler korunur. Konuşma kaldığı yerden devam eder ama çok daha az [[token-ai|token]] ile. Türkçede yerleşmiş bir karşılığı yok; "bağlam sıkıştırma" diye tarif edilse de terim İngilizce kullanılıyor.

## Benzetme

Çok ciltli bir romanın yeni cildine "önceki ciltte neler olmuştu" özetiyle başlamak gibi. Her satırı taşımazsın; hikâyenin tutarlı devam etmesi için gerekenleri taşırsın.

## Nasıl çalışır?

Yaygın strateji şöyle: pencere belli bir doluluğa gelince son birkaç tur olduğu gibi korunur, daha eskisi tek bir özet bloğuna indirilir ve bu blok sabit bir yere yerleştirilir.

Neyin korunacağı göreve göre değişir ama bir sıralama hemen her yerde geçerli: kararlar, kısıtlar ve henüz bitmemiş işler korunur; uzun araç çıktıları ile ham dosya içerikleri ilk atılanlardır, çünkü gerektiğinde yeniden okunabilirler.

Her sıkıştırma bir bilgi kaybıdır. Özet zayıfsa model az önce hallettiği işi baştan yapar ya da vazgeçilmiş bir yolu tekrar dener; bu yüzden özetin kalitesi, sıkıştırma sıklığından daha önemlidir.

## Dikkat

Compaction ile [[memory-ai|memory]] aynı şey değildir: compaction o oturumun bağlamını küçültür, amacı yer açmaktır; memory oturumlar arasında bilgi taşır, amacı hatırlamaktır. Bir ajanın "unutması" genelde compaction'ın, "yanlış hatırlaması" ise memory'nin işidir.

Gizli bir maliyeti de var: sıkıştırma prompt'un başını değiştirdiği için [[prompt-caching|önbellek]] ıskalar ve sonraki istek beklediğinden pahalıya gelebilir ([[token-pricing]]). Ne zaman ve neyi attığı kullanıcıya görünür olsun.
