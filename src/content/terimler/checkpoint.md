---
term: "Checkpoint"
tr: "Kontrol Noktası"
aliases: ["kontrol noktası"]
category: konsensus
subcategory: "Kesinlik ve güvenlik özellikleri"
level: orta
short: "Zincirin üzerinde uzlaşılmış bir referans noktası; öncesi artık tartışmaya açılmaz."
related: [epoch-blockchain, weak-subjectivity, finality, node-synchronization, long-range-attack]
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

**Checkpoint**, zincirin belirli bir noktasındaki bloğun "buraya kadarı tamam" diye işaretlenmesidir. İşaret konduktan sonra düğümler o noktanın öncesini yeniden değerlendirmez; gelen alternatif bir geçmiş, ne kadar tutarlı görünürse görünsün dinlenmez.

Çoğu tasarımda aday bloklar rastgele seçilmez: [[epoch-blockchain|dönem]] sınırındaki bloklar bu iş için kullanılır. Böylece herkes hangi bloktan bahsedildiği konusunda anlaşır.

## Benzetme

Uzun bir oyundaki kayıt noktası gibi. Her başarısız denemeden sonra seni oyunun başına değil, geçtiğin son kayda döndürür. O kaydın öncesi kapanmıştır; bir daha oynanmaz, bir daha tartışılmaz.

## Nasıl çalışır?

İki farklı kaynaktan gelebilir ve aradaki fark önemlidir.

**Protokolün kendi üzerinde uzlaştığı checkpoint.** Doğrulayıcıların nitelikli çoğunluğu aynı bloğu işaretler ve bu, toplanan imzalarla ispatlanabilir. Burada referans dışarıdan gelmez, ağın kendi oylamasından çıkar; birçok tasarımda [[finality|kesinlik]] ilanı tam olarak bu adımdır.

**İstemciye gömülen checkpoint.** Yazılımın içine elle konmuş bir blok kimliğidir. İşi görür ama bir güven ekler: o satırı koyan ekibe güveniyorsundur.

Her iki durumda da amaç aynıdır — geçmişin bir yerden sonra kapanması.

## Dikkat

Checkpoint, ağa yeni katılan ya da uzun süre kapalı kalmış bir düğüm için başlangıç noktasıdır ve onu nereden aldığın güvenliğinin parçasıdır ([[node-synchronization|senkronizasyon]]). Yanlış kaynaktan alınmış bir referans, düğümü başından itibaren uydurma bir geçmişe bağlar ([[long-range-attack|long-range attack]]).

Bu yüzden checkpoint kullanan sistemler tam anlamıyla nesnel değildir; bir kez, katılma anında dışarıdan bir bilgiye güvenmeyi gerektirirler. Bunun adı [[weak-subjectivity|zayıf öznelliktir]] ve gizlenecek bir eksiklik değil, açıkça kabul edilen bir tasarım koşuludur.
