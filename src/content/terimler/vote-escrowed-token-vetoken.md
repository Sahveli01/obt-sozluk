---
term: "Vote-Escrowed Token (veToken)"
tr: ""
aliases: []
category: tokenlar
subcategory: "Token türleri"
level: ileri
short: "Token'ı belirli bir süre kilitleyerek oy gücü kazanma modeli; kilit ne kadar uzunsa oy gücü o kadar yüksek olur."
related: [governance-token, voting-power, token-weighted-voting, vote-incentives-bribes, governance-attack]
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

veToken, bir [[governance-token|yönetişim token'ını]] belirli bir süre kilitleyip karşılığında oy gücü veren modeldir. Kilitlenen token süre dolana kadar geri alınamaz; sen de karşılığında devredilemeyen bir bakiye alırsın. Bu bakiye oy kullanmak ve bazı protokollerde ödül dağıtımının nereye akacağını yönlendirmek için kullanılır.

Fikir şudur: ağırlığı yalnızca "ne kadar tutuyorsun" sorusuna değil, "ne kadar süre bağlanmayı göze alıyorsun" sorusuna da bağlamak. Bugün alıp yarın satabilen biriyle dört yıllığına kilitlemiş biri aynı sayılmaz.

"Vote-escrowed" için yerleşik bir Türkçe karşılık yok; "oy için kilitlenmiş" diye açıklanıyor.

## Benzetme

Vadeli mevduat gibi. Parayı üç ay yerine üç yıllığına bağlarsan sana verilen karşılık artar, ama o süre boyunca paraya dokunamazsın. Bir de şu vardır: vade doldukça "kalan süre" kısalır. Üç yıllık hesabın son ayında elinde artık üç yıllık bir taahhüt yoktur, bir aylık bir taahhüt vardır.

## Nasıl çalışır?

Kilitlerken iki şey belirlenir: miktar ve süre. Oy gücü genelde bu ikisinin çarpımıyla hesaplanır ve sürenin bir üst sınırı olur. Aynı miktarı azami süreyle kilitleyen en yüksek gücü alır; yarısı kadar süreyle kilitleyen kabaca yarısını.

Asıl nokta bu gücün sabit olmamasıdır: kilidin bitişine yaklaştıkça doğrusal olarak azalır ve vade dolduğunda sıfırlanır. Ağırlığını korumak isteyen kişi kilidi tekrar uzatmak zorundadır; model bu yüzden sürekli yenilenen bir bağlılık üretir.

Elde edilen bakiye çoğunlukla transfer edilemez, yani oy gücü doğrudan satılamaz. Buna rağmen etrafında bir pazar oluşur: ödüllerin belirli bir yöne akmasını isteyen taraflar, kilitleyenlere [[vote-incentives-bribes|oy teşviki]] ödeyerek oylarını yönlendirmeye çalışır.

## Dikkat

Kilit süresince likidite yoktur. Token kilitliyken satamaz, teminat gösteremez, başka yere taşıyamazsın ve kararı vade dolmadan geri alamazsın. Oy gücün de zamanla erir; "bir kez kilitle ve unut" bu modelde işlemez.

Yapısal olarak model, çok token tutanın yönetişimdeki ağırlığını azaltmaz, artırır. Uzun kilide dayanabilecek taraf genelde büyük ve uzun vadeli tutucudur; küçük tutucu aynı fedakârlığı yapmakta zorlanır. [[token-weighted-voting|Token ağırlıklı oylamanın]] bilinen sorunu burada süreyle çarpılarak büyür ve yeterince güç tek elde toplanırsa sonuç bir [[governance-attack|yönetişim saldırısına]] dönüşebilir.
