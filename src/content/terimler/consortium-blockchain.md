---
term: "Consortium Blockchain"
tr: "Konsorsiyum blok zinciri"
aliases: ["konsorsiyum blok zinciri", "konsorsiyum blockchain"]
category: temeller
subcategory: "Temel kavramlar"
level: orta
short: "Tek bir kurumun değil, önceden belirlenmiş bir kurumlar grubunun birlikte yönettiği blockchain."
related: [private-blockchain, permissioned-blockchain, public-blockchain, proof-of-authority-poa, governance]
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

Konsorsiyum blockchain'de kontrol tek bir kurumda değil, birlikte hareket eden bir kurumlar grubundadır. Her üye kendi [[node|node'unu]] çalıştırır, blok üretimine katılır ve kural değişikliklerinde söz sahibidir. [[private-blockchain|Özel]] ile [[public-blockchain|açık]] zincirin arasında durur: kapı herkese açık değildir ama anahtar da tek kişide değildir.

Tipik kullanım alanı, aynı sektörde rekabet eden ama ortak bir kayda ihtiyaç duyan kurumlardır — bankalar arası mutabakat, tedarik zinciri izleme, sigorta hasar kayıtları.

## Nasıl çalışır?

Doğrulayıcı kümesi üyelerden oluşur ve genellikle [[proof-of-authority-poa|Proof of Authority]] ya da BFT ailesinden bir mekanizma kullanılır. Bir bloğun geçerli sayılması için üyelerin belirlenmiş bir çoğunluğunun imzası aranır; böylece tek bir üye kendi başına kayda müdahale edemez.

Asıl zor kısım teknik değil [[governance|yönetişimdir]]: yeni üye nasıl alınır, çıkarılacak üyeye kim karar verir, anlaşmazlıkta oy nasıl sayılır. Bu sorular kodda değil, üyeler arasındaki sözleşmede çözülür.

## Dikkat

Konsorsiyumun en kırılgan yeri çoğu zaman kuruluş anından sonra ortaya çıkar. Ağ kurulurken üyeler heveslidir; asıl sınav, bir üyenin çıkarına aykırı bir kararın oylandığı gündür. Kuralların ne olacağı kadar, kural değiştirmenin ne kadar zor olduğu da önceden belirlenmelidir.

Güvenlik, üyelerin çıkarlarının ne kadar ayrıştığına bağlıdır. Birbirinden gerçekten bağımsız kurumlar birleşmekte zorlanır ve bu iyi bir şeydir. Ama üyelerin hepsi aynı holdingin şirketleriyse ya da biri diğerleri üzerinde baskı kurabiliyorsa yapı, adı konsorsiyum olsa da fiilen özel zincire döner.
