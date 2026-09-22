---
term: "Snapshot (Token)"
tr: "Anlık görüntü"
aliases: []
category: tokenlar
subcategory: "Dağıtım ve lansman"
level: orta
short: "Belirli bir blok yüksekliğinde cüzdan bakiyelerinin kayda geçirilmesi; dağıtım ve oylama bu kayda göre yapılır."
related: [airdrop, block-height, snapshot-voting, allowlist, retroactive-airdrop]
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

Snapshot, zincirin belirli bir [[block-height|blok yüksekliğindeki]] durumunun kayda geçirilmesidir. Pratikte şu demektir: "şu numaralı blokta hangi cüzdanda ne kadar token vardı" sorusunun cevabı bir listeye yazılır, dağıtım ya da oylama o listeye göre yapılır.

Zincirde her bloğun durumu zaten duruyor, dolayısıyla snapshot yeni bir veri üretmez; var olandan bir kesit alır. O bloktan sonra token'ı satsan da, alsan da listedeki satırın değişmez.

## Benzetme

Nüfus sayımı gibi. Sayım gecesi nerede bulunduysan kayıt odur; ertesi gün taşınman defteri değiştirmez. Ama sayımın hangi gece yapılacağı önceden duyurulursa bazı insanlar o gece başka bir yerde bulunmayı ayarlar.

## Nasıl çalışır?

Ekip bir blok numarası seçer, o blok için bakiyeleri okur, sonucu adres–miktar çiftlerinden oluşan bir listeye yazar. Liste bir [[airdrop|dağıtımın]], bir [[allowlist|erişim listesinin]] ya da bir oylamanın girdisi olur.

Blok numarası genellikle olay geçtikten sonra açıklanır. Sebebi benzetmedeki gece: tarih önceden bilinirse insanlar yalnızca o an için pozisyon alır, snapshot ölçmek istediği şeyi ölçemez.

## Dikkat

Snapshot tek bir anı bilir, süreci bilmez. Bir hafta önce ve bir hafta sonra ne yaptığın kayıtta yoktur; bu yüzden "uzun süredir kullanan" ile "o gün cüzdanını dolduran" arasındaki farkı tek başına göremez. Ekipler bunu birden çok snapshot alarak ya da ortalama bakiyeye bakarak azaltır.

Bir de ad karışıklığı var: yönetişimdeki [[snapshot-voting|Snapshot Voting]] bununla aynı şey değildir. O, oyların zincir dışında ve ücretsiz toplandığı bir oylama yönteminin adıdır; buradaki snapshot ise herhangi bir zincirde alınabilen bir bakiye kesitidir.
