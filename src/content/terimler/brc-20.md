---
term: "BRC-20"
tr: ""
aliases: []
category: nft
subcategory: ""
level: ileri
short: "Bitcoin'de inscription'ların içine yazılan basit JSON komutlarıyla jeton taklit eden, akıllı sözleşme kullanmayan bir deney."
related: [inscription, ordinals, token-standard, indexer, fungible-token]
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

BRC-20, Bitcoin üzerinde [[inscription|inscription]]'ların içine yazılan basit JSON komutlarıyla değiştirilebilir jeton taklit eden bir deneydir. Ad [[erc-20|ERC-20]]'ye benzetilerek konmuştur ama benzerlik isimde kalır: ortada çalışan bir akıllı sözleşme, hatta çalışan bir kod bile yoktur.

## Benzetme

Bir okul kantininde oynanan gayriresmî turnuva gibi. Kantin maçlardan haberdar değildir; kimin kaç maç kazandığını kenarda birkaç kişi kendi defterine yazar. Turnuva, defterler birbirini tuttuğu sürece vardır. İki defter ayrışırsa iki ayrı puan durumu ortaya çıkar ve hangisinin geçerli olduğunu söyleyecek bir hakem yoktur.

## Nasıl çalışır?

Üç komut vardır: bir jeton tanımlamak, üretmek ve göndermek. Her biri kısa bir JSON metni olarak zincire yazılır — jetonun kısa adı, toplam arzı, tek seferde üretilebilecek miktar gibi alanlarla.

Bitcoin bu metinleri okumaz. Bakiyeler, aynı kural setini uygulayan [[indexer|indeksleyicilerin]] zinciri baştan tarayıp komutları sırayla değerlendirmesiyle ortaya çıkar: hangi üretimin arzı aştığı, hangi gönderimin karşılıksız olduğu bu tarama sırasında belirlenir.

Sonuç şudur: muhasebe zincirde değil, yorumda tutulur. İki indeksleyici bir uç durumu farklı değerlendirirse iki farklı bakiye tablosu oluşur ve aradaki farkı çözecek bir protokol kuralı yoktur.

## Dikkat

"Standart" kelimesi yanıltıcıdır. [[token-standard|Token standardı]] dendiğinde kastedilen, sözleşmelerin uyduğu bir arayüzdür; burada uyulan şey, yazılım geliştiricilerinin aralarında anlaştığı bir okuma biçimidir.

Her komut ayrı bir işlem olarak zincire yazıldığı için, bir [[fungible-token|değiştirilebilir token]] gönderiminin maliyeti ve hızı sıradan bir Bitcoin işleminin maliyeti ve hızıdır.

Yazıldığı tarih itibarıyla bu deneyin zincirde kapladığı yer Bitcoin topluluğunda tartışma konusudur; tartışma teknik tasarımdan çok, blok alanının nasıl kullanılması gerektiği üzerinedir.
