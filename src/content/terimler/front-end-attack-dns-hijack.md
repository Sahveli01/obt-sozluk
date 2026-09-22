---
term: "Front-end Attack (DNS Hijack)"
tr: ""
aliases: []
category: guvenlik
subcategory: "Kullanıcıyı hedef alan dolandırıcılıklar"
level: orta
short: "Sözleşme sağlam kalırken kullanıcının gördüğü arayüzün ya da o arayüze giden yolun ele geçirilmesi."
related: [dns, frontend, dapp, blind-signing, ipfs, contract-verification]
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

Bir [[dapp|merkeziyetsiz uygulamanın]] zincir üstündeki kısmı denetlenmiş ve değiştirilemez olabilir. Senin gördüğün kısım ise sıradan bir web sitesidir: bir alan adı, bir sunucu, bir yığın JavaScript ([[frontend|frontend]]).

Front-end saldırısı bu ikinci kısmı hedefler. Sözleşmeye hiç dokunulmaz; değiştirilen şey, o sözleşmeye hangi işlemin gönderileceğini hazırlayan koddur. Terimin yerleşik bir Türkçe karşılığı yok.

## Benzetme

Lokantanın masasındaki karekodun üstüne başka bir etiket yapıştırmak gibi. Lokanta gerçektir, mutfak gerçektir, garson gerçektir. Değişen tek şey, telefonunun hangi sayfayı açtığıdır.

## Nasıl çalışır?

İki yerden girilir.

**Yol:** alan adını hangi sunucunun karşılayacağını [[dns|DNS]] kayıtları söyler. Alan adı hesabı ya da bu kayıtlar ele geçirilirse, sen doğru adresi yazsan bile başka bir sunucuya gidersin. Tarayıcıda gördüğün adres doğrudur; arkasındaki bina değişmiştir.

**Arayüzün kendisi:** siteyi barındıran sunucuya, yayın akışına ya da sitenin kullandığı bir dış kaynağa değiştirilmiş kod sokulur. Adres de sunucu da doğrudur, sayfanın içeriği değildir.

Sonuç iki durumda da aynıdır: sayfa normal görünür, sen bildiğin adımı izlersin, cüzdanına gelen istek ise başka bir hedefe ya da başka bir yetkiye aittir.

## Dikkat

"Sözleşme denetlendi" cümlesi bu riski kapsamaz; [[contract-verification|doğrulanmış kod]] arayüzün bugün ne gönderdiği hakkında bir şey söylemez. [[ipfs|IPFS]] üzerinden yayımlanan sabit sürümler bu yüzden tercih edilir, ama ona götüren alan adı yine sıradan bir alan adıdır.

- Uygulamalara yer iminden gir; arama sonuçlarındaki reklam bağlantılarına tıklama.
- Her imzadan önce cüzdanın gösterdiği hedef adresi ve işlemi oku ([[blind-signing|kör imzalama]]).
- Beklemediğin bir onay isteği çıktıysa dur. Bağlanır bağlanmaz izin isteyen bir sayfa, bir süre önce izin istemiyordu.
- Tanıdık bir site aniden farklı davranıyorsa — yeni bir onay, yeni bir adım, yeni bir uyarı — o gün işlem yapmayı ertele.
- Büyük tutarlı işlemleri, o uygulamanın resmî duyuru kanalına bir bakmadan yapma.
