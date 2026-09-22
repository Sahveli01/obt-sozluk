---
term: "Deterministic Finality"
tr: "Deterministik Kesinlik"
aliases: ["deterministik kesinlik"]
category: konsensus
subcategory: "Kesinlik ve güvenlik özellikleri"
level: orta
short: "Doğrulayıcıların oylaması tamamlandığında protokolün geri alınamaz ilan ettiği kesinlik türü."
related: [finality, byzantine-fault-tolerance-bft, tendermint-cometbft, safety-consensus, liveness, probabilistic-finality]
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

**Deterministik kesinlikte** bir bloğun kaderi olasılığa bırakılmaz. Doğrulayıcılar o blok hakkında oy verir; oylar belirli bir eşiği geçtiğinde protokol bloğu kesin ilan eder. O andan sonra kurallara uyan hiçbir düğüm, içinde o bloğun bulunmadığı bir zinciri kabul etmez.

Fark net: [[probabilistic-finality|olasılıksal kesinlikte]] "geri alınması çok zor" dersin, burada "geri alınması kural dışı" dersin.

## Nasıl çalışır?

Mekanizma [[byzantine-fault-tolerance-bft|Bizans hatası toleransı]] ailesinden gelir ve iki şey ister.

**Doğrulayıcı kümesinin bilinmesi.** Kimin oy hakkı olduğu ve her oyun ne kadar ağır saydığı önceden bellidir; aksi hâlde "eşik geçildi" cümlesi ölçülemez.

**Oyların toplanması.** Düğümler bir tur boyunca imzalarını birbirine yayar. Nitelikli çoğunluk (BFT ailesinde bu eşik genellikle üçte ikidir) aynı blokta buluştuğunda blok kesinleşmiş sayılır ve bu, toplanan imzalarla herkese ispatlanabilir.

Bedeli de buradadır: oy toplamak iletişim gerektirir. Doğrulayıcıların yeterli kısmı çevrimdışıysa ya da ağ ikiye bölünmüşse eşik hiç toplanmaz. Bu durumda zincir yanlış bir blok kesinleştirmez ama hiçbir blok da kesinleştiremez — [[safety-consensus|güvenliği]] koruyup [[liveness|canlılıktan]] vazgeçmiş olur.

## Dikkat

"Deterministik" kelimesi "anında" demek değildir. Oylamanın kendisi zaman alır; bazı tasarımlarda blok üretimiyle aynı turda biter, bazılarında blok üretiminin üstüne ayrı bir kesinleştirme katmanı olarak gelir.

Kesinlik mutlak değil, koşulludur: kural, doğrulayıcıların yeterince büyük bir kısmı dürüst davrandığı sürece geçerlidir. Bu eşiğin üstünde bir kesim çelişkili oy verirse iki farklı blok kesin ilan edilebilir. Tasarım bunu imkânsız saymaz; yakalanabilir ve cezalandırılabilir kılar ([[economic-finality|ekonomik kesinlik]]).
