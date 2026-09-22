---
term: "Inscription"
tr: ""
aliases: []
category: nft
subcategory: ""
level: orta
short: "Bir dosyanın doğrudan bir Bitcoin işleminin içine gömülerek zincire yazılması; içerik ayrı bir yerde değil, kaydın kendisinde durur."
related: [ordinals, brc-20, on-chain-metadata, blockspace, bitcoin]
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

Inscription, bir dosyayı doğrudan bir [[bitcoin|Bitcoin]] işleminin içine gömerek zincire yazma işlemidir. Metin, görsel ya da küçük bir dosya işlemin içinde taşınır ve zincire girdiği andan itibaren orada kalır. Türkçede yerleşik bir karşılığı yoktur — "kazıma" ya da "yazıt" denemeleri tutmadığı için terim İngilizce kullanılır.

Alışılmış yaklaşımdan farkı burada. Çoğu NFT'de zincirde yalnızca bir adres durur, görsel başka yerdedir. Inscription'da içerik ile kayıt aynı şeydir.

## Benzetme

Bir banka havalesinin açıklama kutucuğuna koca bir metin sığdırmak gibi. O metin ayrı bir arşivde tutulmaz; havalenin kaydının içindedir. Kaydı saklayan herkes, istese de istemese de metni de saklamış olur.

## Nasıl çalışır?

Veri, işlemin imza ve tanık verisi için ayrılmış bölümüne yerleştirilir; bu bölüm için geçerli olan kurallar görece büyük verinin taşınmasını mümkün kılar.

Bitcoin bu veriyi çalıştırmaz ve yorumlamaz; onun için orada anlamsız baytlar vardır. Anlam, [[ordinals|ordinal]] kurallarını uygulayan yazılımlarda oluşur: bu yazılımlar veriyi belirli bir satoshi'ye iliştirilmiş sayar ve o satoshi el değiştirdiğinde içeriğin de el değiştirdiğini kabul eder. Yani buradaki "sahiplik" zincirin değil, o yorumun kuralıdır.

## Dikkat

Yazılan şey geri alınamaz ve silinemez. Zincire konan her bayt bütün düğümlerin diskinde çoğalır ve sınırlı olan [[blockspace|blok alanını]] tüketir; yazıldığı tarih itibarıyla bu kullanımın uygun olup olmadığı Bitcoin topluluğunda tartışılmaktadır.

Bir de karıştırma riski var. [[on-chain-metadata|Zincir üstü metadata]] ile inscription aynı fikri paylaşır — içeriği zincirde tutmak — ama içerik farklı yerlerde durur. İlkinde içerik bir akıllı sözleşmenin depolamasındadır ve sözleşme onu okuyabilir; inscription'da içerik hiçbir sözleşmenin göremediği bir alandadır.
