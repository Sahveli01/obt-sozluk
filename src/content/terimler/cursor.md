---
term: "Cursor"
tr: ""
aliases: ["cursor editör"]
category: araclar
subcategory: "Geliştirme ortamı"
level: orta
short: "VS Code tabanı üzerine kurulu, yapay zekâ ile kod yazmayı arayüzün merkezine alan kod editörü."
related: [vs-code, code-editor, ai-pair-programming, code-completion, vibecoding]
disambiguation: []
tags: []
status: taslak
reviewedBy: []
dateSensitive: true
sources: []
added: 2026-09-21
updated: 2026-09-22
---

## Nedir?

Cursor, [[vs-code|VS Code]] tabanı üzerine kurulmuş bir [[code-editor|kod editörü]]dür. Arayüzü, kısayolları ve eklenti mantığı tanıdık gelir; ayrıldığı nokta, dil modelleriyle çalışmanın sonradan eklenen bir panel değil, editörün ana akışı olmasıdır.

Yazıldığı tarih itibarıyla sunduğu işler şunlardır: proje hakkında sohbet, seçili kodu tarif ederek düzenletme, birden çok dosyaya yayılan değişiklik önerileri ve satır satır [[code-completion|tamamlama]]. Bu alandaki araçlar hızlı değiştiği için özellik listesi kısa sürede eskiyebilir.

## Nasıl çalışır?

Editör, sorunla birlikte modele bağlam gönderir: açık dosyalar, seçtiğin satırlar, bazen projede ilgili bulduğu başka parçalar. Model cevabı metin olarak üretir, editör bunu bir fark (diff) hâline getirip önüne koyar; kabul edip etmemek sana kalır.

Buradan iki sonuç çıkar. Birincisi, kodunun bir kısmı bilgisayarından çıkıp bir modele gider. İkincisi, gelen öneri doğru olduğu için değil, olası olduğu için gelir — derleyici değil, tahmin üreten bir sistemdir.

## Dikkat

Bu tür editörler [[ai-pair-programming|eş programlama]] hissi verir ama sorumluluğu devralmaz. Üretilen kodu okumadan kabul etmek, [[vibecoding]] denen alışkanlığa ve sonradan anlaşılması güç hatalara götürür.

Özel anahtar, `.env` dosyası ya da kurum içi kodla çalışıyorsan hangi verinin dışarı gönderildiğini ayarlardan kontrol et; bu, aracın markasından bağımsız olarak yapay zekâ destekli her editör için geçerlidir.
