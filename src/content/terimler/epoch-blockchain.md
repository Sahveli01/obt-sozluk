---
term: "Epoch (Blockchain)"
tr: ""
aliases: []
category: konsensus
subcategory: "Kesinlik ve güvenlik özellikleri"
level: baslangic
short: "Belirli sayıda slottan oluşan, sonunda hesapların kapatılıp görevlerin yeniden dağıtıldığı dönem."
related: [slot, checkpoint, validator, committee, attestation]
disambiguation: [epoch-ml]
tags: []
status: taslak
reviewedBy: []
dateSensitive: false
sources: []
added: 2026-09-21
updated: 2026-09-22
---

## Nedir?

**Epoch**, art arda gelen belirli sayıda [[slot|slotun]] oluşturduğu dönemdir. Bazı ağlar zamanı tek tek bloklarla değil, bu dönemlerle takip eder.

Sebebi pratiktir: her blokta tekrarlanması pahalı olan işler dönem sınırına toplanır. Kimin hangi göreve atanacağı, ödül ve ceza muhasebesinin nasıl kapatılacağı, zincirin hangi noktasının referans sayılacağı genellikle orada karara bağlanır.

Türkçede "dönem" anlamına gelir ama yerleşmiş bir karşılığı yoktur; protokollerde epoch diye geçer.

## Benzetme

Bir iş yerinde ay sonu gibi. Gün gün kimin ne yaptığı ayrı ayrı hesaplanmaz; ay kapanınca devam çizelgesi toplanır, hak edişler tek seferde hesaplanır ve yeni ayın nöbet listesi asılır. Sınır, yapılan işi değiştirmez — hesabın ne zaman görüleceğini belirler.

## Dikkat

Epoch sınırı çoğu tasarımda bir referans noktası üretir ([[checkpoint|checkpoint]]); [[validator|doğrulayıcı]] görevleri de burada yeniden dağıtılır.

Bir epoch'un kaç slottan oluştuğu ve ne kadar sürdüğü ağdan ağa değişir, ağ yükseltmeleriyle de değişebilir. Sabit bir sayı yoktur.

Aynı kelime yapay zekâda bambaşka bir şeyi anlatır: [[epoch-ml|eğitim verisinin baştan sona bir kez işlenmesi]]. İkisinin ortak yanı yalnızca "tekrar eden dönem" fikridir.
