---
term: "Distributed Ledger Technology (DLT)"
tr: "Dağıtık Defter Teknolojisi"
aliases: ["dlt", "dagitik defter teknolojisi"]
category: temeller
subcategory: "Temel kavramlar"
level: orta
short: "Aynı kaydın birbirinden bağımsız çok sayıda kopyada tutulup ortak kurallarla güncellendiği teknolojilerin genel adı."
related: [blockchain, ledger, consensus-mechanism, decentralization, permissioned-blockchain]
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

DLT, aynı [[ledger|defterin]] birden çok bağımsız katılımcıda kopyalandığı ve bu kopyaların ortak bir kural setiyle senkron tutulduğu sistemlerin şemsiye adıdır. [[blockchain|Blockchain]] bir DLT türüdür ama tek türü değildir: kayıtları bloklar hâlinde zincire dizmeyen, örneğin yönlü çizge yapıları kullanan başka DLT tasarımları da vardır.

Terim özellikle kurumsal ve düzenleyici metinlerde "blockchain" yerine tercih edilir; çünkü blockchain kelimesi çoğu kişinin zihninde doğrudan kripto paraya bağlanırken DLT daha nötr durur.

## Nasıl çalışır?

Üç parça her DLT'de ortaktır. Birincisi **çoğaltma**: kaydın kopyası her katılımcıda durur, merkezde değil. İkincisi **paylaşılan kural**: bir güncellemenin geçerli sayılması için neyin sağlanması gerektiği önceden tanımlıdır. Üçüncüsü bir [[consensus-mechanism|konsensüs mekanizması]]: kopyalar ayrıştığında hangisinin doğru kabul edileceğine karar veren yöntem.

Bu üçü sabit kalırken katılımın kime açık olduğu değişebilir. Herkese açık ağlarda kimlik aranmaz; [[permissioned-blockchain|izinli]] ağlarda katılımcılar önceden bellidir ve bu, konsensüsü çok daha ucuz hâle getirir.

Bloklara bölmenin zorunlu olmadığı yer de burasıdır. Kayıtları zincir yerine birbirine atıfta bulunan bir çizge olarak dizen tasarımlarda işlemler paralel onaylanabilir; karşılığında "şu anda geçerli sıra nedir" sorusunun cevabı daha karmaşık hâle gelir.

## Dikkat

"DLT kullanıyoruz ama blockchain değil" cümlesi çoğu zaman "katılımcıları biz seçiyoruz" demenin kibar hâlidir. Bu kendiliğinden kötü bir şey değildir; bankalar arası mutabakat gibi işlerde makul bir tercihtir. Ama o sistemde [[decentralization|merkeziyetsizlik]] ve sansüre direnç beklemek yanlış olur: kontrol hâlâ belirli bir grubun elindedir.
