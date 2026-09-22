---
term: "Nakamoto Consensus"
tr: "Nakamoto konsensüsü"
aliases: ["nakamoto konsensüsü"]
category: konsensus
subcategory: "Mekanizmalar"
level: ileri
short: "Katılımcıların önceden bilinmediği bir ağda, blok üretimini pahalı kılıp en çok iş birikmiş zinciri seçerek anlaşmayı zamanla pekiştiren yaklaşım."
related: [proof-of-work-pow, longest-chain-rule, fork-choice-rule, probabilistic-finality, byzantine-fault-tolerance-bft, bitcoin]
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

Bitcoin ile ortaya çıkan konsensüs yaklaşımının adı; [[satoshi-nakamoto|Satoshi Nakamoto]] takma adından gelir. İki parçadan oluşur: blok üretmeyi pahalı kılan bir [[proof-of-work-pow|iş ispatı]] ve çatallanma olduğunda arkasında en çok iş birikmiş dalı seçen bir [[fork-choice-rule|dal seçim kuralı]]. Tek başına hiçbiri yetmez; anlaşmayı ikisinin birleşimi kurar.

## Nasıl çalışır?

Klasik konsensüs protokolleri katılımcı listesini bilir ve oy turlarıyla karar verir. Nakamoto konsensüsünde böyle bir liste yoktur: isteyen katılır, isteyen ayrılır, kimse toplam katılımcı sayısını bilmez. Anlaşma açıkça oylanmaz; üreticiler hangi zincirin üstüne blok koyduklarıyla oy vermiş olur.

Aynı anda iki blok çıkarsa ağ kısa süreliğine ikiye ayrılır. Bir sonraki blok dallardan birinin üzerine geldiğinde diğer dal terk edilir ve içindeki blok [[orphan-block|öksüz blok]] sayılır. Karar böylece bir anda değil, zamanla pekişir: bir blok ne kadar derine gömülürse onu geri almak için harcanması gereken iş o kadar büyür, ama ihtimal hiçbir zaman tam olarak sıfırlanmaz ([[probabilistic-finality|olasılıksal kesinlik]]).

Buna karşılık ağ, katılımcıların gelip gitmesine ve mesajların gecikmesine dayanır. İkiye bölünen bir ağın iki parçası ayrı ayrı çalışmaya devam eder; bağlantı geri geldiğinde biri diğerinin zincirini benimser.

## Dikkat

Nakamoto konsensüsü ile [[byzantine-fault-tolerance-bft|BFT]] ailesinden protokoller aynı işi farklı varsayımlarla yapar. BFT protokolleri kimin oy kullandığını bilir ve yeterli oy toplandığında kararı [[deterministic-finality|kesin]] ilan eder; Nakamoto konsensüsü kimin katıldığını bilmediği için böyle bir ilan yapamaz, karşılığında katılımcı listesi tutmadan çalışabilir.

İkinci bir karışıklık: Nakamoto konsensüsü iş ispatıyla aynı şey değildir. Aynı dal seçim mantığı, blok üretme hakkını başka bir kıt kaynağa bağlayan ağlarda da kullanılabilir.
