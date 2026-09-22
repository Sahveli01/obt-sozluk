---
term: "Stealth Address"
tr: ""
aliases: []
category: guvenlik
subcategory: "Gizlilik"
level: ileri
short: "Alıcının tek bir adres yayımlayıp gelen her ödemeyi o adresten türetilen başka bir adreste aldığı yöntem."
related: [wallet-address, pseudonymity, anonymity-set, privacy-coin, public-key]
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

Stealth address, alıcı herkese tek bir adres yayımlasa bile gelen her ödemenin zincirde farklı bir adrese düşmesini sağlayan yöntemdir. Yayımlanan şey doğrudan ödeme alan bir adres değildir; gönderen ondan yalnızca o ödemeye özgü yeni bir adres türetir ve parayı oraya yollar.

Çözdüğü sorun şu: yayımlanmış tek bir [[wallet-address|adrese]] gelen bütün ödemeler aynı yerde birikir. Bağış topluyorsan kimin ne verdiğini herkes görür; maaşını oraya alıyorsan hem tutar hem geçmiş açıktır.

Türkçede yerleşik bir karşılığı yok. "Gizli adres" demek yanıltıcı olurdu, çünkü adresin kendisi gizli değildir — zincirde açıkça görünür, görünmeyen şey kime ait olduğudur.

## Nasıl çalışır?

Alıcı, kendi gizli anahtarlarından türettiği bir meta adres yayımlar. Gönderen buna kendi ürettiği geçici bir anahtarı katarak tek seferlik bir adres hesaplar, ödemeyi oraya yapar ve geçici [[public-key|açık anahtarını]] işleme iliştirir.

Alıcı zinciri tarar: her aday ödeme için aynı hesabı kendi gizli anahtarıyla yapar ve sonuç tuttuğunda o ödemenin kendisine geldiğini anlar. Dışarıdan bakan biri aynı hesabı yapamaz, çünkü iki taraftan birinin gizli anahtarına ihtiyaç vardır. Sonuçta gönderen ödemeyi yapabilir, alıcı parasını bulabilir, ama üçüncü bir kişi iki ödemenin aynı kişiye gittiğini göremez.

## Dikkat

Stealth adres yalnızca alıcı tarafını dağıtır. Tutarlar ve paranın nereden geldiği açık kalmaya devam eder; tutarı gizlemek ayrı bir problemdir ve ayrı yöntemler ister.

Kazanılan gizlilik harcamada kaybedilebilir. Biriken ödemeleri tek bir işlemde toplayıp harcarsan o işlem hepsini birbirine geri bağlar ve o ana kadar büyüttüğün [[anonymity-set|anonimlik kümesi]] çöker.

Bir de tarama maliyeti vardır: alıcının gelen ödemeleri bulmak için zinciri sürekli kontrol etmesi gerekir. Bu yüzden yöntem cüzdan desteği olmadan elle kullanılabilecek bir şey değildir.
