---
term: "Collateral"
tr: "Teminat"
aliases: ["teminat"]
category: defi
subcategory: "Borç verme ve alma"
level: baslangic
short: "Borcun karşılığı olarak kilitlenen varlık; borç ödenmezse satılmak üzere tutulur, ödenirse serbest kalır."
related: [borrowing-defi, overcollateralization, collateral-ratio, liquidation, lending-protocol, collateralized-debt-position-cdp]
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

Teminat, borcun karşılığında sözleşmeye kilitlenen varlıktır. Sahibi sensindir; kimse ona el koymaz, kimse harcamaz. Ama borç açık kaldığı sürece serbest değildir: çekemez, başka yerde kullanamazsın.

Zincirde teminatın tek bir işlevi vardır: borç geri ödenmezse satılabilir olmak. Bu yüzden her varlık teminat sayılmaz. Bir varlığın kabul edilmesi için fiyatının güvenilir biçimde okunabilmesi ve baskı anında hızla satılabilmesi gerekir.

## Benzetme

Araba kiralarken şirketin senden aldığı güvence bedeli gibi. O para harcanmaz, bir kenarda tutulur. Arabayı sağlam getirirsen tamamı sana döner; bir hasar çıkarsa şirket kimseye sormadan oradan keser. Şirketin seni tanımasına, sana güvenmesine ya da sonradan senin peşine düşmesine gerek kalmaz — çünkü karşılığı zaten elinde durmaktadır.

## Dikkat

Teminat yatırdığın varlığın fiyatı hareket etmeye devam eder ve bu hareket senin kontrolünde değildir. Değeri yükselirse borç limitin genişler, düşerse [[liquidation|tasfiyeye]] yaklaşırsın.

Ayrıca her varlık aynı teminat gücünü vermez: fiyatı oynak bir varlıkta aynı büyüklük karşılığında daha az [[borrowing-defi|borçlanabilirsin]]. Protokol bu farkı varlık başına ayrı ayrı belirler.
