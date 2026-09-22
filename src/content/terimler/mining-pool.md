---
term: "Mining Pool"
tr: "Madencilik havuzu"
aliases: ["madencilik havuzu", "maden havuzu"]
category: konsensus
subcategory: "Madencilik"
level: orta
short: "Madencilerin hash gücünü birleştirip bulunan blok ödülünü katkı payına göre bölüştüğü yapı."
related: [miner, mining, hashrate, block-reward, staking-pool, decentralization]
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

Tek başına çalışan bir [[miner|madencinin]] geliri son derece düzensizdir: blok bulduğu gün büyük bir ödül alır, bulmadığı günlerde hiçbir şey alamaz. Küçük bir madenci için "bulmadığı günler" aylar sürebilir, oysa elektrik faturası her ay gelir.

Madencilik havuzu bu düzensizliği ortadan kaldırmak için kurulmuş bir yapıdır. Havuza katılan madenciler [[hashrate|hash güçlerini]] tek bir arama için birleştirir; havuz blok bulduğunda [[block-reward|ödül]], herkesin koyduğu emek kadar bölüşülür.

## Benzetme

Pay usulü çalışan bir balıkçı teknesi gibi. Tek başına açılan biri kimi gün dolu, çoğu gün boş döner. Teknede ise av kimin elinden çıkarsa çıksın ortaya konur ve emeğe göre bölüşülür; kimse ayın sonunu şansa bırakmaz. Buna karşılık ağın nereye atılacağına tek bir kişi karar verir: reis.

## Nasıl çalışır?

Yaygın havuz protokollerinde bloğun içeriğini — hangi işlemler, hangi sırayla — operatör belirler ve şablonu havuzdaki bütün madencilere dağıtır; madenciler kendilerine düşen sayı aralığını dener. Şablonu madencinin kendisinin kurmasına izin veren daha yeni protokoller de vardır, ve hangisinin kullanıldığı aşağıdaki söz hakkı meselesini doğrudan belirler.

Kimin ne kadar çalıştığını ölçmek için havuz, ağın hedefinden çok daha gevşek kendi eşiğini koyar. Bu eşiği geçen sonuçlar operatöre gönderilir; bunlara **pay** (share) denir. Pay, ağ için bir işe yaramaz ama yapılan denemelerin kanıtıdır. Blok bulunduğunda ödül gönderilen pay sayısına göre dağıtılır, havuz da hizmeti için bir komisyon alır.

## Dikkat

Havuzlar tek tek madencinin gelirini düzenli hâle getirir; karşılığında blok içeriğine karar verme gücünü az sayıda operatörde toplar. Madenci havuza hash gücünü verirken blokta ne olacağına dair söz hakkını da vermiş olur.

Bu ayrım, hash gücü dağılımına bakarken görülmesi gereken asıl noktadır. Gücü üreten cihazlar binlerce ayrı kişinin elinde olabilir; ama o cihazlar birkaç havuza bağlıysa, "blokları kim diziyor" sorusunun cevabı birkaç kişidir. İki soru aynı rakama bakarak farklı cevaplar verir ve genellikle yalnızca birincisi konuşulur.

Madenciler havuz değiştirmekte serbesttir. Bu, toplanan gücün kalıcı olmadığı anlamına gelir; o an kimde olduğunu değiştirmez. Aynı gerilim hisse ispatı tarafında [[staking-pool|stake havuzları]] için de geçerlidir.
