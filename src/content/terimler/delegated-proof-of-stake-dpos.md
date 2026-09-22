---
term: "Delegated Proof of Stake (DPoS)"
tr: ""
aliases: ["dpos"]
category: konsensus
subcategory: "Mekanizmalar"
level: orta
short: "Token sahiplerinin oy gücünü adaylara verdiği ve blok üretiminin en çok oy alan küçük bir doğrulayıcı kümesinde toplandığı pay ispatı türü."
related: [proof-of-stake-pos, delegator, validator, staking, on-chain-governance, slashing]
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

**DPoS**, [[proof-of-stake-pos|pay ispatının]] doğrulayıcı kümesini oylamayla belirleyen ve o kümeyi bilerek küçük tutan bir türüdür. Token sahipleri kendileri blok üretmez; oy güçlerini adaylara verir ([[delegator|delegator]]) ve en çok oy alan belirli sayıda aday blok üretme hakkını kazanır. Türkçede yerleşik bir karşılığı yok; terim kısaltmasıyla, DPoS olarak geçer.

## Nasıl çalışır?

Oy gücü kişi başına değil, sahip olunan ya da kilitlenen token miktarına göre sayılır. Seçilen üreticiler blokları önceden belli bir sırayla üretir; küme küçük ve kimin ne zaman üreteceği baştan bilindiği için bloklar sık gelir ve anlaşma az mesajla kapanır.

Denetim seçmen tarafındadır. Çevrimdışı kalan ya da kötü davranan üretici bir sonraki oylamada listeden düşürülebilir; ağa göre teminatı da kesilebilir ([[slashing|slashing]]). Ama bu, kuralı çiğneyeni o anda durduran bir mekanizma değil, sonradan işleyen bir yaptırımdır: aradaki bloklar zaten üretilmiştir.

Oylama çoğu zaman zincir üstünde yürür ve [[on-chain-governance|zincir üstü yönetişimin]] bir parçasıdır; bazı ağlarda seçilmiş üreticiler protokol değişikliklerine de aynı sıfatla karar verir.

## Dikkat

Doğrulayıcı sayısının küçük tutulması bir kusur değil, açıkça yapılmış bir takastır: küme küçüldükçe iletişim yükü azalır ve blok aralığı kısalır, buna karşılık üretim hakkı az sayıda elde toplanır. Seçim bu baskıyı kendiliğinden çözmez; oy ağırlığı token dağılımını izlediği için büyük sahipler listeyi belirleyebilir, üreticiler de oy toplamak için birbirleriyle ittifak kurabilir.

Bir DPoS ağına bakarken sorulacak soru "merkezî mi değil mi" değildir. Kaç üretici var, listeye girmek ne kadar zor, oylar ne kadar dağınık ve kural ihlalinin karşılığı ne — cevabı bunlar verir.
