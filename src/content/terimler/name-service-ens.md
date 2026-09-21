---
term: "Name Service (ENS)"
tr: ""
aliases: ["ens", "ethereum name service", "ad servisi"]
category: cuzdanlar
subcategory: "Anahtarlar ve adresler"
level: orta
short: "Okunabilir adları zincirdeki adreslere ve kaynaklara bağlayan, kaydı zincirde tutulan ad sistemi."
related: [wallet-address, dns, domain-name, phishing, smart-contract]
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

Ad servisi, insanın okuyabildiği bir adı zincirdeki bir [[wallet-address|adrese]] ya da başka bir kaynağa bağlayan sistemdir. İnternette [[domain-name|alan adlarının]] sayısal adresleri gizlemesine benzer bir iş yapar ([[dns|DNS]]); farkı, kaydın merkezî bir kuruluşun veritabanında değil zincirdeki [[smart-contract|akıllı sözleşmelerde]] tutulmasıdır.

ENS (Ethereum Name Service) bu fikrin en bilinen örneğidir; başka zincirlerde de benzer servisler vardır. ENS özel bir ad olduğu için çevrilmez.

## Nasıl çalışır?

Bir ad kaydedildiğinde kaydı zincire yazılır ve adın sahibi belli olur. Adın neye karşılık geldiğini ise ayrı bir çözümleyici sözleşme tutar: ad hangi adrese çözümlenecek, ona bağlı hangi metin kayıtları olacak, hangi içeriğe işaret edecek. Bir cüzdan ya da uygulama, gönderme ekranına yazdığın adı bu sözleşmeye sorar ve dönen adrese gönderir.

Ters yönde de çalışabilir: bir adres kendini bir ada bağladıysa arayüzler uzun adres yerine o adı gösterebilir. Kayıtlar genellikle süreli olur ve yenilenmeleri gerekir; süresi dolan bir ad sahibinden çıkabilir.

## Dikkat

Ad kimlik değil, sahipliktir. Bir adın tanıdık bir markaya benzemesi onun o markaya ait olduğunu göstermez; benzer yazılışlarla kurulan [[phishing|oltalama]] denemeleri yaygındır.

Ad bir kere kurulup unutulacak bir şey de değildir. Sahibi değişebilir, gösterdiği adres sonradan başka bir yere çevrilebilir. Büyük bir transfer öncesinde adın o an hangi adrese çözümlendiğini görmek, adı görmekten daha anlamlıdır.

Her uygulama ad çözümlemeyi desteklemez. Desteklemeyen bir arayüzde ad yazmak işe yaramaz; orada adresin kendisi gerekir.
