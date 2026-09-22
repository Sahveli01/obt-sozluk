---
term: "Liquid Staking"
tr: ""
aliases: []
category: defi
subcategory: "Getiri"
level: orta
short: "Stake edilip kilitlenen varlığın, karşılığında verilen devredilebilir bir token sayesinde kullanılabilir kalması."
related: [liquid-staking-token-lst, staking, validator, slashing, unbonding-period, restaking]
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

Liquid staking, [[staking|stake edilen]] varlığın kilitli olduğu sürece hiçbir işe yaramaması sorununu çözme yöntemidir. Varlığını bir protokole yatırırsın; protokol senin adına [[validator|validator]] işletir ya da işleten operatörlere dağıtır ve karşılığında sana devredilebilir bir token verir. Zincirdeki varlık kilitli kalır, elindeki token serbestçe dolaşır.

Türkçede yerleşik bir karşılığı yok; günlük konuşmada "likit staking" denir, bu da çeviri değil okunuşudur.

## Benzetme

İçinde kiracı oturan bir daireyi satmaya benzer. Daireye giremezsin, kiracıyı bu akşam çıkaramazsın; ama daire senindir ve satabilirsin. Alan kişi hem kirayı hem kiracıyı devralır. Tam da bu yüzden kiracılı dairenin fiyatı boş dairenin fiyatıyla aynı olmak zorunda değildir: sözleşme ne kadar uzunsa, çıkış ne kadar zorsa alıcı o kadar az verir.

## Nasıl çalışır?

Yatırılan varlık bir havuzda toplanır ve validator işleten operatörlere dağıtılır. Kazanılan ödüller havuza döner, kesilen cezalar havuzdan düşer. Karşılığında verilen token iki biçimden biriyle değer taşır: ya bakiyen kendiliğinden artar ([[rebase-token|rebase]]), ya bakiye sabit kalır ve token'ın dayanak varlık karşısındaki oranı yükselir. Ayrıntısı [[liquid-staking-token-lst|LST]] maddesinde.

Çıkarken iki yol vardır. Protokolden doğrudan çekersen ağın [[unbonding-period|bekleme süresi]] ve varsa protokolün kendi kuyruğu işler. Token'ı ikincil piyasada satarsan çıkış anında olur, ama fiyatı o andaki piyasa belirler.

## Dikkat

Stake işini fiilen başkası yapar. Operatör çevrimdışı kalırsa ödül düşer; kural ihlali yaparsa [[slashing|ceza]] kesilir ve bu ceza tek tek suçlunun değil, havuzdaki herkesin payından çıkar. Operatör listesini kimin belirlediği ve stake'in kaç operatöre dağıldığı bu yüzden ayrıntı değil, doğrudan risk sorusudur.

İkinci nokta ağ düzeyindedir: bir ağdaki stake'in büyük bölümü tek bir liquid staking protokolünde toplanırsa, o protokolün yönetişim kararları ağın güvenliğini ilgilendiren kararlar hâline gelir. Kullanıcı için tek bir cüzdan işlemi olan şey, ağ için yoğunlaşma anlamına gelebilir.
