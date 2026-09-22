---
term: "Tendermint (CometBFT)"
tr: ""
aliases: ["cometbft"]
category: konsensus
subcategory: "Mekanizmalar"
level: ileri
short: "Blok zincirleri için yazılmış BFT konsensüs motoru; uygulamadan ayrı çalışır ve blok yeterli oyu topladığında kesinlik anında ilan edilir."
related: [practical-byzantine-fault-tolerance-pbft, byzantine-fault-tolerance-bft, deterministic-finality, cosmos, proof-of-stake-pos, validator]
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

Tendermint, [[practical-byzantine-fault-tolerance-pbft|PBFT]] ailesindeki fikirleri blok zincirlerine uyarlayan bir konsensüs motorudur. İki şeyi birleştirir: doğrulayıcı kümesini kilitli teminata göre belirleyen bir [[proof-of-stake-pos|pay ispatı]] ve blokları oylama turlarıyla kesinleştiren bir BFT protokolü. Yazılımın sürdürülen hâli sonradan **CometBFT** adını aldı; iki ad çoğu zaman aynı protokolü kasteder. Özel ad olduğu için Türkçeye çevrilmez.

## Nasıl çalışır?

Her blok kendi turunda karara bağlanır. Sırası gelen doğrulayıcı bloğu önerir, diğerleri iki oylama turundan geçirir. Teminat ağırlığının üçte ikisinden fazlası aynı blokta buluştuğunda blok kesinleşir ve bir daha geri alınmaz; normal şartlarda zincirde geçici çatallanma bile oluşmaz ([[deterministic-finality|deterministik kesinlik]]).

Yeterli oy toplanamazsa tur boş geçer ve sıra bir sonraki önericiye gider. Çelişen iki blok için oy veren doğrulayıcı ise kanıtlanabilir biçimde suçludur; teminatı kesilir ([[slashing|slashing]]). Kesinliğin ekonomik karşılığı budur: kesinleşmiş bir bloğu geri almak, oy ağırlığının büyük bir kısmının teminatını yakmayı göze almayı gerektirir.

Motorun ikinci özelliği uygulamadan ayrı durmasıdır. Konsensüs ve ağ katmanı işlemleri sıralar; bu işlemlerin ne anlama geldiğine karar veren uygulama ayrı bir arayüzle bağlanır. [[cosmos|Cosmos]] ekosistemindeki [[appchain|uygulama zincirlerinin]] kendi kurallarını yazıp konsensüsü hazır alması bu ayrım sayesindedir.

## Dikkat

Anında kesinlik bedavaya gelmez. Doğrulayıcı kümesinin bilinmesi ve sayısının sınırlı tutulması gerekir; küme büyüdükçe her turda dolaşan oy trafiği artar.

İkincisi, takas [[liveness|liveness]] tarafındadır: oy ağırlığının üçte birinden fazlası çevrimdışı kalırsa ağ yanlış blok üretmez, hiç blok üretmez. Durmak, çelişkili karar vermeye tercih edilmiştir — bunu bir arıza değil, tasarım kararı olarak okumak gerekir.
