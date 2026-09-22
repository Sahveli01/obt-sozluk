---
term: "Weak Randomness"
tr: "Zayıf rastgelelik"
aliases: ["zayıf rastgelelik"]
category: guvenlik
subcategory: "Sözleşme açıkları"
level: orta
short: "Zincir üstündeki veriler herkese açık olduğu için onlardan üretilen rastgele sayı önceden hesaplanabilir ya da seçilebilir."
related: [randomness, verifiable-random-function-vrf, commit-reveal-scheme, timestamp-dependence, block-timestamp, chainlink]
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

Bir akıllı sözleşmenin okuyabildiği her şey, herkesin okuyabildiği şeydir. Blok numarası, zaman damgası, önceki blok özetleri, sözleşmenin bakiyesi, çağıran adres — hepsi işlem gönderilmeden önce bilinir ya da hesaplanabilir. Bunları birbirine karıştırıp [[keccak-256|özetlemek]] rastgelelik üretmez; yalnızca hesaplaması biraz zahmetli ama yine de **hesaplanabilir** bir sayı üretir.

İki ayrı sorun vardır ve karıştırılmamaları gerekir.

**Öngörülebilirlik.** Sonucu önceden hesaplayan biri yalnızca kazanacağı anda katılır, diğer zamanlarda hiç katılmaz. Dışarıdan bakan kimse bir şeyin bozulduğunu görmez; yalnızca şanslı bir kullanıcı görür.

**Seçilebilirlik.** Sonucu bloğu üreten taraf etkileyebiliyorsa, istemediği sonucu veren bloğu hiç yayımlamayabilir. Bu, çekilişi yaptıktan sonra beğenmediği sonucu iptal etmek gibidir.

## Benzetme

Sınıfta kura çekmek için "bugünün tarihi" kullanılsa ne olur? Kimsenin hile yapmasına gerek kalmaz: herkes sonucu bir gün önceden hesaplar. Yöntem gizli değildir, sayı da gizli değildir — ve kura, herkesin baştan bildiği bir sonucu tören havasında ilan etmekten ibaret kalır.

## Nasıl çalışır?

Zincir üstünde gerçek rastgelelik üretilemeyeceği için çözüm hep dışarıdan gelir.

**Doğrulanabilir rastgelelik.** Sayı zincirin dışında üretilir, yanında da o sayının kurallara uygun üretildiğini kanıtlayan bir kanıt gelir; sözleşme kanıtı doğrular ([[verifiable-random-function-vrf|VRF]]). Ne isteyen sonucu önceden bilir, ne de üreten sonucu seçebilir. [[chainlink|Chainlink]] gibi sağlayıcıların sunduğu hizmetlerin çoğu bu yapıdadır.

**Commit-reveal.** Katılımcılar önce kapalı bir taahhüt verir, sonra açıklar ([[commit-reveal-scheme|commit-reveal]]). Tek başına yeterli değildir: en son açıklayan kişi sonucu görüp açıklamaktan vazgeçebilir. Bu yüzden teminat ve ceza mekanizmalarıyla birlikte kurulur.

Ethereum'da bloklara ağın kendi ürettiği bir rastgelelik değeri işlenir ve sözleşmeler bunu `block.prevrandao` ile okuyabilir. Eski yöntemlerden iyidir ama blok üreticisi tarafından sınırlı ölçüde etkilenebilir; düşük değerli kararlarda kullanılabilir, yüksek değerli kararlarda kullanılmaz.

## Dikkat

"Birkaç kaynağı birleştirirsem güvenli olur" yanılgısı yaygındır. Öngörülebilir kaynakları karıştırmak öngörülebilirliği yok etmez, yalnızca hesabı uzatır; hesabı yapmak birinin işine geliyorsa yapar.

`private` işaretlenmiş bir değişken de gizli değildir. Görünürlük yalnızca başka sözleşmelerin doğrudan okumasını engeller; zincirdeki veriyi isteyen herkes okur. Bir tohum değerini sözleşmenin içinde saklamak bir çözüm değildir ([[randomness|rastgelelik]]).
