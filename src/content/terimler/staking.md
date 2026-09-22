---
term: "Staking"
tr: ""
aliases: []
category: konsensus
subcategory: "Staking ve validator'lar"
level: orta
short: "Ağın kayıt tutma işine katılmak için varlığını protokol kurallarıyla kilitleme ve karşılığında ödül alma süreci."
related: [stake, validator, staking-rewards, slashing, unbonding-period, proof-of-stake-pos]
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

Staking, bir [[proof-of-stake-pos|pay ispatı]] ağında varlığını protokolün kurallarına göre kilitleme işidir. Kilitli varlık sana ağın kayıt tutma işine katılma hakkı verir: görevini yaparsan ödül alırsın, kuralları çiğnersen kilitli varlığının bir kısmını kaybedersin.

Kilitte duran varlığın kendisine [[stake]] denir; staking ise o varlığı kilitleme ve işletme sürecidir. Türkçede yerleşik bir karşılığı yok, "stake etmek" diye çekimlenerek kullanılıyor.

## Nasıl çalışır?

İki yol vardır. Ya kendi [[validator|doğrulayıcını]] çalıştırırsın ([[solo-staking|solo staking]]), ya da işi başkasına bırakırsın: bir [[staking-pool|havuza]] katılır ya da stake'ini işleten birine yönlendirirsin ([[delegator|delegasyon]]).

Ağ kimin ne kadar kilitlediğini kendi kayıtlarında tutar. Görev dağıtımı ve söz ağırlığı çoğu tasarımda kilitli miktarla orantılıdır: daha çok stake, daha sık görev demektir. Görevler yapıldıkça [[staking-rewards|ödül]] birikir, kaçırıldıkça eksilir; kanıtlanabilir bir ihlalde ise [[slashing|kesinti]] uygulanır.

Çıkış anlık değildir. Stake'i çözdüğünü bildirdikten sonra varlık, protokolün belirlediği bir [[unbonding-period|bekleme süresi]] boyunca erişilemez kalır.

## Dikkat

Staking bir faiz hesabı gibi işlemez. Ödül ağın kendi biriminden ödenir, kilitli olduğun sürece o birimi satamazsın ve stake'i fiilen işleten taraf sen değilsen onun hatası senin bakiyene yansır. Yapılan iş bir yatırım değil, ağa verilen bir hizmettir; ödül de o hizmetin karşılığıdır.

İkinci nokta adlandırmayla ilgilidir. Merkezî bir platformun "staking" diye sunduğu ürünlerin bir kısmında varlık ağda gerçekten kilitlenmez; kilitlense bile doğrulayıcı da anahtarlar da platformdadır. Orada elindeki şey ağa kilitlenmiş bir stake değil, platforma karşı bir alacaktır.
