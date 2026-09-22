---
term: "Consensus Mechanism"
tr: "Uzlaşı mekanizması"
aliases: ["uzlaşı mekanizması", "konsensüs mekanizması"]
category: konsensus
subcategory: "Mekanizmalar"
level: baslangic
short: "Birbirini tanımayan katılımcıların, hangi işlemlerin hangi sırayla geçerli sayılacağı konusunda aracısız anlaşmasını sağlayan kurallar bütünü."
related: [trustless, double-spending, byzantine-generals-problem, sybil-resistance, finality, proof-of-work-pow]
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

Bir blockchain'de kayıt tutan tek bir merkez yoktur. Binlerce [[node]] aynı defterin kopyasını tutar ve hepsinin aynı sırayı görmesi gerekir. **Konsensüs mekanizması**, birbirini tanımayan ve bir kısmı kötü niyetli olabilen bu katılımcıların, hangi işlemlerin hangi sırayla geçerli sayılacağı konusunda aracısız anlaşmasını sağlayan kurallar bütünüdür.

Çözdüğü asıl sorun sıradır. Aynı parayı iki ayrı adrese gönderen iki işlem ağa neredeyse aynı anda düşerse ikisi de tek başına geçerli görünür; hangisinin önce geldiğine karar veren bir merci yoksa [[double-spending|çifte harcama]] mümkün olur. Mekanizma bu kararı bir otoriteye değil, herkesin kendi başına doğrulayabildiği bir kurala bağlar; [[trustless|güven gerektirmeden]] çalışmak budur.

## Benzetme

Elektrikleri kesilmiş, lambaları sönmüş bir kavşak. Trafik yine de akar: araçlar sırayla geçer, herkes aynı yazısız kurala uyar, kimse polis beklemez. Kuralı ayakta tutan şey, herkesin ona uymasıdır. İçlerinden biri sırayı takmazsa akış aksar; on araç birden "sıra bende" diye dalarsa kavşak kilitlenir.

## Dikkat

Konsensüs mekanizması bir oylama değildir. İnternette yeni kimlik üretmek bedavadır; oy kimliğe bağlansaydı çoğunluk binlerce sahte düğümle satın alınırdı ([[sybil-attack|Sybil saldırısı]]). Bu yüzden söz hakkı kimliğe değil, taklidi pahalı bir kaynağa bağlanır: harcanan işleme gücüne, kilitlenen teminata ya da önceden yetkilendirilmiş bir doğrulayıcı listesine. Mekanizmaları birbirinden ayıran şey, bu kaynağın ne olduğu ve anlaşmanın ne zaman geri alınamaz sayıldığıdır ([[finality|kesinlik]]).
