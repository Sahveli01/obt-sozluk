---
term: "Plutocracy"
tr: "Plütokrasi"
aliases: []
category: yonetisim
subcategory: ""
level: orta
short: "Karar gücünün servetle orantılı dağıldığı yönetim biçimi; jeton ağırlıklı oylamanın doğal sonucu."
related: [token-weighted-voting, voting-power, quadratic-voting, voter-apathy, whale, governance]
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

Plütokrasi, kararların servet sahipleri tarafından alındığı düzeni anlatan eski bir siyaset terimidir; Yunanca *ploutos* (servet) ve *kratos* (iktidar) kelimelerinden gelir.

Zincir üstü yönetişimde bu durum bir arıza olarak ortaya çıkmaz. Oy gücü jeton sayısıyla ölçülüyorsa, en çok jetonu olan en çok oya sahiptir — bu, sistemin bozulması değil, seçilen kuralın tanımı gereği sonucudur ([[token-weighted-voting|jeton ağırlıklı oylama]]).

## Nasıl çalışır?

Asıl soru, bu kuralın neden seçildiğidir. Açık bir ağda kimlik yoktur: "kişi başına bir oy" demek, bir kişinin bin adres açmasını engelleyemediğin sürece hiçbir şey demektir ([[sybil-attack|Sybil saldırısı]]). Jeton ise kıt ve edinmesi maliyetlidir; bu yüzden sahteciliğe karşı işe yarayan, uygulaması kolay bir ölçü olur. Bedeli, ölçtüğü şeyin servet olmasıdır.

İkinci etken katılımdır. Oyların büyük bölümü hiç kullanılmadığında çoğunluk, dolaşımdaki arzın küçük bir diliminden oluşur; birkaç büyük adres tek başına eşiği aşar ([[voter-apathy|seçmen kayıtsızlığı]]). Yani plütokrasi çoğu zaman yalnızca dağılımın değil, katılımın da sonucudur.

## Dikkat

Plütokrasi "kötü karar" demek değildir. Çok jetonu olan kişinin kendi zararına karar alması beklenmez ve çıkarları çoğu zaman protokolün sürmesiyle örtüşür. Sorun başka yerdedir: azınlıkta kalanların çıkarları sistematik olarak hafif kalır ve bunu düzeltecek bir mekanizma kendiliğinden doğmaz.

Denenen dengeleyiciler etkinin eğrisini değiştirir, serveti oyundan çıkarmaz: [[quadratic-voting|quadratic voting]], vekâlet yoluyla küçük oyların toplanması, seçilmiş kurullar, azınlığa tanınan çıkış hakkı ([[ragequit|ragequit]]).

Bir sistemi değerlendirirken jeton dağılımından daha bilgilendirici olan soru şudur: geçmiş oylamalarda sonucu fiilen kaç adres belirledi?
