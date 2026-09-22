---
term: "Token-weighted Voting"
tr: "Token ağırlıklı oylama"
aliases: []
category: yonetisim
subcategory: ""
level: orta
short: "Oy ağırlığının kişi başına değil, tutulan token miktarına göre sayıldığı oylama kuralı."
related: [voting-power, governance-token, plutocracy, quadratic-voting, vote-escrowed-token-vetoken, quorum]
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

Token ağırlıklı oylamada bir adresin ağırlığı, tuttuğu token miktarıdır: bin token tutan, bir token tutanın bin katı kadar belirleyicidir. Token'la yönetilen protokollerde varsayılan kural budur.

## Nasıl çalışır?

Tercihin sebebi teknik bir zorunluluktur. İzinsiz bir ağda "bir kişi" diye ölçülebilen bir birim yoktur; isteyen istediği kadar adres açabilir ([[sybil-attack|Sybil saldırısı]]). Kopyalanamayan ve edinmesi maliyetli olan tek ölçü token olduğu için sayım kişilere değil varlığa bağlanır. Sonuçta ortaya çıkan [[voting-power|oy gücü]] de doğrudan servetle orantılıdır.

Bu bir hata değil, seçilen ölçünün kaçınılmaz çıktısıdır — ama sonucu bellidir ve [[plutocracy|plütokrasiye]] çıkar. Modelin savunması genelde çıkar hizalamasıdır: en çok tutan, protokol zarar görürse en çok kaybeder. Bu varsayım her zaman tutmaz; ağırlık kısa süreliğine ödünç alınabilir, aynı taraf rakip protokollerde de pozisyon tutuyor olabilir ve kısa vadeli bir kazanç uzun vadeli zararı telafi edebilir.

## Dikkat

En çok eleştirilen yanı servet dağılımı değil, küçük tutucu için oy vermenin hiçbir şey kazandırmamasıdır. Ağırlığın sonucu değiştirmeyecek kadar küçükse, öneriyi okumak için harcadığın zaman karşılıksız kalır. Kural bu yüzden kayıtsızlığı kendi eliyle üretir ve katılım düştükçe [[quorum|yeter sayıyı]] aşan kalan ağırlık daha da belirleyici hâle gelir.

Alternatifler var ve her biri farklı bir şeyi çözer: [[quadratic-voting]] büyük bakiyelerin ağırlığını bastırır ama kimlik sorununu geri getirir; [[vote-escrowed-token-vetoken|veToken]] ağırlığı bağlılık süresine bağlar ama büyük tutucunun avantajını artırır; [[conviction-voting]] ise zamanla biriken desteği ölçer. Hiçbiri için "doğrusu budur" denemez; her biri neyin ölçüldüğünü değiştirir.
