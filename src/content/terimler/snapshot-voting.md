---
term: "Snapshot Voting"
tr: ""
aliases: []
category: yonetisim
subcategory: ""
level: orta
short: "Oy ağırlığının geçmiş bir bloktaki bakiyelere göre donduğu, oyların zincir dışında imzayla toplandığı oylama yöntemi."
related: [off-chain-governance, snapshot-token, voting-power, governance-proposal, multisig]
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

Snapshot voting, oyların zincire yazılmadan, cüzdanla atılan imzalarla toplandığı bir oylama yöntemidir. Oy vermek işlem göndermek olmadığı için ücretsizdir; bu yüzden küçük bakiyeli adresler de katılabilir ve katılım genelde yüksek çıkar.

Yöntemin adı, ağırlığın hesaplanma biçiminden gelir: ağırlıklar, oylama açılmadan önce seçilmiş bir bloktaki bakiyelere göre belirlenir. Sözlükteki [[snapshot-token|anlık görüntü]] tam olarak bu kesitin adıdır. Yöntemin yerleşik bir Türkçe karşılığı yok; bu adla anılıyor.

## Nasıl çalışır?

Bir [[governance-proposal|öneri]] açılırken bir blok numarası sabitlenir. O bloktan sonra kim token alırsa alsın ya da satarsa satsın, o oylamadaki ağırlığı değişmez.

Ağırlığın geçmiş bir ana sabitlenmesinin sebebi basittir. Sayım o anki bakiyeye baksaydı, oylama sürerken büyük bir miktar ödünç alınıp oy verilebilir ve token hemen geri verilebilirdi. Geçmiş bir kesit, oyun bedelini gerçekten o token'ı tutmuş olmaya bağlar.

Oylama kapandığında imzalar sayılır, ağırlıklar kesitten okunur ve sonuç ilan edilir. Sonucun uygulanması ayrı bir iştir: kararı zincire taşımak genelde bir [[multisig|çoklu imza]] grubuna düşer.

## Dikkat

Bu bir [[off-chain-governance|zincir dışı yönetişim]] yöntemidir; çıkan sonuç kendiliğinden yürürlüğe girmez.

İmzalar bir hizmette toplanır ve sayım orada yapılır. O hizmet kapanır, bir öneriyi listelemez ya da sayımı hatalı yaparsa bunu zincirde ispatlayacak bir kayıt yoktur. Ucuzluğun karşılığında güven, sayımı yapan tarafa duyulur.

Son olarak ad karışıklığına dikkat: buradaki "snapshot" bir oylama yönteminin adıdır. Aynı kelimenin diğer anlamı, herhangi bir zincirde alınabilen bir bakiye kesitidir ve [[voting-power|oy gücü]] dışındaki dağıtımlarda da kullanılır.
