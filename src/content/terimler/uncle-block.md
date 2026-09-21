---
term: "Uncle Block"
tr: ""
aliases: ["amca blok", "ommer", "ommer block"]
category: temeller
subcategory: "Bloklar ve işlemler"
level: ileri
short: "Ana zincire giremeyen ama sonraki bir blok tarafından referans verilerek kısmen ödüllendirilen geçerli blok."
related: [orphan-block, block-reward, ghost-protocol, chain-reorganization-reorg, block-time]
disambiguation: []
tags: []
status: taslak
reviewedBy: []
dateSensitive: false
sources: []
added: 2026-09-21
updated: 2026-09-21
---

## Nedir?

Amca blok, geçerli biçimde üretilmiş ama ana zincire giremeyen bir bloğun, sonraki bloklardan biri tarafından referans verilerek kayda geçmiş hâlidir. Terk edilen blokları tamamen çöpe atmak yerine kısmen saymayı seçen bir tasarım tercihidir. İngilizcede "uncle", cinsiyetten bağımsız biçimiyle "ommer" denir. Türkçede yerleşik bir karşılığı yok: "amca blok" birebir çeviri olarak duyulsa da yaygınlaşmadığı için terim İngilizce hâliyle kullanılır.

## Nasıl çalışır?

Bloklar sık üretildiğinde iki üreticinin neredeyse aynı anda blok yayınlaması sıradan bir olaydır; kaybeden taraf [[orphan-block|öksüz blok]] üretmiş olur. Bu emek tamamen boşa giderse iki sorun doğar. Birincisi, ağın harcadığı güvenlik emeğinin bir kısmı hiçbir şeye yaramaz. İkincisi, bloklarını ağa daha hızlı yayabilen büyük üreticiler küçüklere karşı sistematik bir avantaj kazanır ve üretim merkezîleşmeye yönelir.

[[ghost-protocol|GHOST]] fikrinden gelen çözümde, sonraki bloklardan biri kaybeden bloğun başlığını kendi içine alır. Referansı veren blok küçük bir ek [[block-reward|ödül]] alır, referans verilen bloğun üreticisi de tam ödülün bir kısmını; bu pay genellikle aradaki mesafe arttıkça azalır ve belli bir mesafeden sonra sıfırlanır.

Kritik ayrıntı şudur: amca bloğun içindeki işlemler işlenmez. Zincire katkısı işlem kapasitesi değil güvenliktir; ağın toplam çalışmasının hesaba katılması [[chain-reorganization-reorg|yeniden düzenlemelere]] karşı direnci artırır.

## Dikkat

Amca blok mekanizması her zincirde yoktur ve bulunduğu zincirlerde de uzlaşı mekanizması değiştikçe anlamını yitirebilir. Bir ağda bu kuralın hâlâ geçerli olup olmadığını protokolün güncel belgelerinden doğrula.

Amca bloğu "ikinci bir zincir" sanma: ana zincirin durumu üzerinde hiçbir etkisi yoktur, yalnızca ödül dağıtımını ve güvenlik muhasebesini etkiler.
