---
term: "Leader Election"
tr: "Lider seçimi"
aliases: []
category: konsensus
subcategory: "Staking ve validator'lar"
level: ileri
short: "Sıradaki bloğu kimin önereceğinin, önceden kestirilemeyecek ama sonradan doğrulanabilecek biçimde belirlenmesi."
related: [proposer, verifiable-random-function-vrf, validator, committee, proof-of-stake-pos, consensus-mechanism]
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

Lider seçimi, her turda blok önerme hakkının kime düşeceğini belirleyen mekanizmadır. Dağıtık bir ağda bu işi yapan bir merci yoktur; seçim, herkesin kendi başına aynı sonuca varabileceği bir kuralla yürümek zorundadır.

Mekanizmadan iki şey birden istenir ve bu ikisi birbirini zorlar: sonuç önceden kestirilememeli, ama açıklandığında herkesçe doğrulanabilmelidir.

## Benzetme

Herkesin elinde bir kazı-kazan kartı olması gibi. Kartını kendi başına kazırsın; kazanıp kazanmadığını o anda yalnız sen bilirsin. Kazanan öne çıkıp kartını gösterir, kimsenin ilan edene güvenmesi gerekmez. Kartı gizlice hazırlayan ve kimin kazandığını baştan bilen bir masa da yoktur.

## Nasıl çalışır?

İki yaygın aile vardır.

Birincisinde ağ, ortak bir rastgelelik kaynağından bir sıra listesi üretir. Herkes aynı listeyi hesaplar ve sıranın kimde olduğu bellidir. Koordinasyon kolaydır, ama sıradaki önerici önceden bilindiği için hedefli bir [[denial-of-service-dos|servis dışı bırakma]] denemesinin ya da teklifin adresi hâline gelir.

İkincisinde seçim kişiseldir. Her katılımcı kendi anahtarıyla bir çıktı üretir, belirlenen eşiği tutturuyorsa kazanmıştır ve hakkını yanında getirdiği kanıtla ispatlar ([[verifiable-random-function-vrf|VRF]]). Kazanan kendini açıklayana kadar kimse onu bilemez.

Her iki ailede de seçilme şansı [[proof-of-stake-pos|pay ispatı]] ağlarında kilitli miktarla orantılıdır.

## Dikkat

Zayıf halka seçim kuralı değil, beslendiği rastgelelik kaynağıdır. Kaynağı etkileyebilen bir katılımcı, kendi bloğunu yayımlayıp yayımlamamayı seçerek sonraki turların sonucunu deneyebilir ve seçimi kendi lehine eğebilir. Tasarımların çoğu bu yüzden rastgeleliği tek bir katılımcının son anda oynayamayacağı biçimde toplar; konunun genel hâli [[weak-randomness|zayıf rastgelelik]] maddesindedir.

Seçilmek bir yetki değil, bir sıradır: seçilen kişi kurala aykırı bir blok öneremez, yalnızca [[proposer|önerme]] hakkını kullanır.
