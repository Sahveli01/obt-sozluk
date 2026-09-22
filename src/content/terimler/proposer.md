---
term: "Proposer"
tr: ""
aliases: []
category: konsensus
subcategory: "Staking ve validator'lar"
level: orta
short: "Sırası geldiğinde yeni bloğu hazırlayıp ağa öneren doğrulayıcı."
related: [validator, leader-election, attestation, committee, proposer-builder-separation-pbs, block-builder]
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

Proposer, belirli bir turda yeni bloğu önerme hakkı kendisine düşen doğrulayıcıdır. Her turda tek bir proposer vardır: işlemleri seçer, bloğu kurar, imzalar ve yayımlar. Geri kalan doğrulayıcılar o bloğa bakıp görüşünü bildirir.

Türkçede "blok önerici" gibi karşılıklar denense de yerleşen bir terim yok; İngilizcesi kullanılıyor.

## Nasıl çalışır?

Sıranın kimde olduğu [[leader-election|lider seçimiyle]] belirlenir; seçilme şansı çoğu tasarımda kilitli stake ile orantılıdır. Sırası gelen proposer bekleyen işlemleri [[mempool|işlem havuzundan]] alır, kendi seçtiği sırayla bloğa dizer ve imzasıyla ağa gönderir.

Blok yayımlandıktan sonra söz, o tur görevli olan [[committee|komitedeki]] doğrulayıcılara geçer: bloğu kurallara göre denetler ve [[attestation|oylarını]] yayımlarlar. Proposer sırasını kaçırırsa ne olacağı tasarıma bağlıdır: slot tabanlı ağlarda o tur boş geçer ve zincir bir sonraki turdan devam eder, sıra tabanlı BFT ağlarında ise bir zaman aşımının ardından sıra bir sonraki adaya devredilir.

Blok önermek, oy vermekten daha yüksek ödül getirir. Sebebi yalnızca ödül tablosu değil, elindeki yetkidir: bloğun içine hangi işlemlerin hangi sırayla gireceğine proposer karar verir. Bu yetki [[maximal-extractable-value-mev|MEV]] gelirinin kaynağıdır ve bloğu kurma işinin ayrı bir role devredilmesini gündeme getirmiştir ([[proposer-builder-separation-pbs|PBS]]).

## Dikkat

Proposer "neyin doğru olduğuna" karar vermez. Kurala aykırı bir blok önerirse diğerleri onu reddeder ve blok zincire girmez. Elindeki gerçek güç, geçerli işlemler arasından hangisini hangi sırayla alacağını seçmektir.

Bu güç küçük de değildir: bir işlemi bloğuna almamayı seçebilir. Ama tek bir proposer bir işlemi kalıcı olarak dışarıda tutamaz, çünkü bir sonraki tur başka birinindir.
