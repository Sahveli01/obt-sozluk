---
term: "Slashing"
tr: ""
aliases: []
category: konsensus
subcategory: "Staking ve validator'lar"
level: orta
short: "Kanıtlanabilir bir kural ihlali yapan doğrulayıcının kilitli varlığının bir kısmının protokolce kesilmesi."
related: [validator, stake, staking, unbonding-period, delegator, proof-of-stake-pos]
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

Slashing, kuralları çiğnediği kanıtlanan bir [[validator|doğrulayıcının]] kilitli varlığının bir bölümünün protokol tarafından kesilmesidir. Amacı zararı tazmin etmek değil, ihlali baştan pahalı hâle getirmektir: saldırının maliyeti dışarıda bir yerde değil, saldıranın kendi [[stake|stake'indedir]].

Türkçede yerleşik bir karşılığı yok; "kesinti" ya da "slashing cezası" diye anlatılıyor.

## Nasıl çalışır?

İki durumu ayırmak gerekir, çünkü ağlar da ayırır.

**Kanıtlanabilir ihlal.** Aynı sıra için iki farklı bloğu imzalamak ya da birbiriyle çelişen iki [[attestation|oy]] yayımlamak tipik örnekleridir. İki imza da ağda durduğu için ihlal geriye dönük olarak ispatlanabilir: herhangi bir katılımcı kanıtı zincire sunar, kesinti kimsenin takdirine kalmadan uygulanır. Ceza ağırdır ve çoğu tasarımda doğrulayıcı kümeden çıkarılır.

**İhmal ve erişilemezlik.** Çevrimdışı kalıp görevini yapmamak bambaşka bir kategoridir. Burada ortada bir kanıt değil, bir eksik vardır; bazı ağlar buna slashing bile demez, yalnızca yapılmayan görevin ödülünü vermez ya da çok daha küçük bir kesinti uygular. Aradaki fark keyfî değil: biri ağın kayıtlarını çelişkili hâle getirme girişimidir, diğeri yalnızca işe gelmemektir.

## Dikkat

Stake'ini başkasına bıraktığında ceza riski seninle kalmaya devam eder. [[delegator|Delegasyonda]] birçok ağ kesintiyi delege edilmiş miktara da uygular; [[staking-pool|havuzda]] ise zarar bütün paylara yayılır. "İşi bilen biri yapıyor" cümlesi riski devretmez, yalnızca başka birinin eline verir.

Bir de sezgiye ters bir tuzak var. Başka sistemlerde doğru olan "yedeğini de çalıştır" alışkanlığı burada tehlikelidir: aynı doğrulayıcı anahtarı iki makinede birden çalışırsa ikisi de imza atar ve ortaya kasıtlı bir saldırıyla tıpatıp aynı şekilde ispatlanan bir çifte imza çıkar. Ağ niyeti değil, imzayı görür.
