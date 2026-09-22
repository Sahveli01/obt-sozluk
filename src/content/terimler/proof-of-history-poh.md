---
term: "Proof of History (PoH)"
tr: ""
aliases: ["poh"]
category: konsensus
subcategory: "Mekanizmalar"
level: ileri
short: "Olayların sırasını ve aralarında geçen hesap süresini kanıtlayan sıralı özet zinciri; tek başına bir konsensüs mekanizması değildir."
related: [consensus-mechanism, proof-of-stake-pos, hash-function, slot, solana, leader-election]
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

**PoH bir konsensüs mekanizması değildir.** Olayların hangi sırayla gerçekleştiğini ve aralarında ne kadar hesap süresi geçtiğini kanıtlayan bir zaman kanıtıdır ve her zaman bir konsensüs mekanizmasının yanında kullanılır. Çözmeye çalıştığı sorun şudur: dağıtık bir ağda ortak bir saat yoktur, bu yüzden düğümlerin "bu işlem şundan önce geldi" konusunda ayrıca anlaşması gerekir. Türkçede yerleşik bir karşılığı yok.

## Benzetme

Birinden 1'den başlayarak yüksek sesle, tek tek saymasını istediğini düşün. "Yetmiş bin" dediğini duyduğunda aradan belirli bir sürenin geçtiğini bilirsin; kimse atlayarak oraya varamaz. Sayarken kapı çalarsa "bu, altmış bin ile altmış bin bir arasında oldu" diyebilirsin. Saymak emek ister, doğru sayıldığını kontrol etmek ise kolaydır ve kayıt parçalara bölünüp aynı anda dinlenebilir.

## Nasıl çalışır?

Üretici bir [[hash-function|özet fonksiyonunu]] kendi çıktısına durmadan yeniden uygular: her adımın girdisi, bir önceki adımın çıktısıdır. Zincir paralelleştirilemez, çünkü bir adımı hesaplamak için bir öncekinin sonucu gerekir; N adım ilerlemenin tek yolu N kez hesaplamaktır. Sayaç belli bir değere ulaşmışsa, geriye dönük olarak o kadar hesabın yapıldığı anlaşılır.

Bir olay kaydedilirken verisi o anki adımın girdisine karıştırılır. Böylece olay iki adım arasına çivilenir ve sonradan araya bir şey sıkıştırılamaz. Doğrulama üretimden ucuzdur: zincir parçalara bölünüp aynı anda kontrol edilebilir.

Kazanç şudur: doğrulayıcıların "önce hangisi geldi" sorusunu mesajlaşarak tartışmasına gerek kalmaz. Sıra üretilmiş kanıttan okunur; konsensüs mekanizmasına blokların geçerliliğine ve hangi dalın seçileceğine karar vermek kalır.

## Dikkat

PoH sık sık "Solana'nın konsensüs mekanizması" diye anılır; değildir. [[solana|Solana]]'da blokların onaylanması bir [[proof-of-stake-pos|pay ispatı]] mekanizmasıyla yürür, PoH ise o mekanizmanın üzerinde çalıştığı ortak zaman kaynağıdır.

İkincisi, PoH güvenilir bir saat değildir. Ölçtüğü şey duvardaki saat değil, yapılmış adım sayısıdır; daha hızlı bir makine aynı adımları daha kısa sürede üretir. Geçen gerçek zamanla ilişkisi, üretenin hızı hakkındaki varsayıma dayanır.
