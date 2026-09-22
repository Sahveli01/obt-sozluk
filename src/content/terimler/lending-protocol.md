---
term: "Lending Protocol"
tr: "Borç verme protokolü"
aliases: ["borç verme protokolü"]
category: defi
subcategory: "Borç verme ve alma"
level: baslangic
short: "Teminat karşılığı borç almayı ve boştaki varlığı faiz karşılığı ödünç vermeyi aracısız yürüten akıllı sözleşme takımı."
related: [money-market, borrowing-defi, collateral, liquidation, interest-rate-model, decentralized-finance-defi]
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

Lending protocol, borç vermek isteyenle borç almak isteyeni buluşturan ama arada bir banka bulundurmayan [[smart-contract|akıllı sözleşme]] takımıdır. Kimse başvurunu değerlendirmez, gelir belgesi istemez, sicilini sormaz. Kurallar sözleşmede yazılıdır ve herkese aynı biçimde işler.

Verdiğin varlık ortak bir havuza girer, orada durduğu sürece faiz kazanır ve istediğin an çekilebilir. Borç almak istersen önce [[collateral|teminat]] kilitlersin; ancak ondan sonra havuzdan çekebilirsin. Teminatının değeri fazla düşerse pozisyonun [[liquidation|tasfiye]] edilir.

Bu genel yapının en yaygın kurulumu [[money-market|para piyasası]] modelidir; kullanıcı tarafındaki eyleme ise [[borrowing-defi|borçlanma]] denir.

## Benzetme

Şehre kurulan kiralık bisiklet istasyonları gibi. Direkte görevli yoktur, kimse seninle pazarlık etmez, kimse seni tanımaz. Bisikleti bırakan da alan da aynı direğe gelir, kurallar ekranda yazılıdır ve herkes için aynıdır. İstasyondaki bisiklet sayısı azaldıkça almak zorlaşır — sisteme kimin ne zaman ne bıraktığı, sıradakinin ne bulacağını doğrudan belirler.

## Dikkat

Bu protokoller banka değildir: yatırdığın varlık için mevduat güvencesi yoktur. Havuzun sağlamlığı üç şeye bağlıdır — sözleşmenin hatasızlığına, fiyat verisinin doğruluğuna ve tasfiyelerin zamanında yapılmasına. Üçünden biri aksarsa havuzda [[bad-debt|kötü borç]] kalır ve bunu kimse senin adına karşılamak zorunda değildir.
