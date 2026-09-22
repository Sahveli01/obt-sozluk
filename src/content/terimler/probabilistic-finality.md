---
term: "Probabilistic Finality"
tr: "Olasılıksal Kesinlik"
aliases: ["olasılıksal kesinlik"]
category: konsensus
subcategory: "Kesinlik ve güvenlik özellikleri"
level: orta
short: "Geri alınma ihtimali her yeni blokla küçülen ama teorik olarak hiç sıfırlanmayan kesinlik türü."
related: [finality, confirmation, longest-chain-rule, proof-of-work-pow, deterministic-finality, chain-reorganization-reorg]
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

Bazı ağlar "bu işlem artık geri alınamaz" cümlesini hiçbir zaman kurmaz. Bunun yerine şunu söyleyebilirler: geri alınma ihtimali her geçen blokla küçülüyor. **Olasılıksal kesinlik** budur — kesinlik bir an değil, gittikçe daralan bir olasılıktır.

Bu, [[finality|kesinliğin]] zayıf bir türü değildir; farklı bir temele dayanan bir türüdür. Güvence protokolün ilanından değil, birikmiş işten gelir.

## Nasıl çalışır?

[[longest-chain-rule|En uzun zincir kuralıyla]] işleyen ağlarda hangi geçmişin geçerli olduğuna, arkasında en çok üretim işi birikmiş zincir karar verir. Bir işlemi geri almak isteyen tarafın, o işlemi içermeyen alternatif bir dalı üretip ana zincirin önüne geçirmesi gerekir.

İşlemin üstüne eklenen her blok bu işi büyütür. Saldırganın elindeki üretim gücü ağın tamamının altındaysa, aradaki farkı kapatma ihtimali blok başına hızla düşer.

Hızla düşer ama sıfır olmaz. Az güce sahip bir üreticinin şans eseri arka arkaya birkaç blok bulma ihtimali daima sıfırın üstündedir. Bu yüzden ihtimal "çok küçük" olur, "yok" olmaz.

## Örnek

Bir borsa, yatırdığın parayı hemen kullanıma açmak yerine işlemin üstüne blok birikmesini bekler. Beklediği şey bir onay yazısı değil, ihtimalin kendi kabul ettiği eşiğin altına inmesidir. Tutar büyüdükçe o eşik de sıkılaşır.

## Dikkat

Onay sayısı saymak ([[confirmation|onay]]) tam olarak bu ihtimali tahmin etmeye çalışmaktır; evrensel bir sayı yoktur, çünkü doğru sayı ağın gücüne ve tutara bağlıdır.

Diğer iki türden farkı burada: [[deterministic-finality|deterministik kesinlikte]] bir oylama tamamlandığı anda sonuç kurala bağlanır ve ihtimal hesabı biter. Ekonomik kesinlikte ise geri almak mümkündür ama bir bedele bağlanmıştır. Olasılıksal kesinlikte ne ilan vardır ne ceza — yalnızca gittikçe pahalılaşan bir iş.

Üzerine yeterince blok birikmemiş işlemler [[chain-reorganization-reorg|yeniden düzenlemeyle]] zincirden düşebilir; bu istisnai bir arıza değil, tasarımın olağan davranışıdır.
