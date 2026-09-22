---
term: "Quorum"
tr: "Yeter sayı"
aliases: []
category: yonetisim
subcategory: ""
level: orta
short: "Bir oylamanın sonucunun geçerli sayılabilmesi için katılması gereken asgari oy gücü eşiği."
related: [governance-proposal, voting-power, token-weighted-voting, governance-attack, on-chain-governance]
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

Yeter sayı, bir oylamanın geçerli sayılabilmesi için katılması gereken asgari [[voting-power|oy gücüdür]]. Eşik sağlanmazsa öneri, katılanların çoğunluğu "evet" demiş olsa bile düşer.

Var olma sebebi açıktır: eşik olmadan, kimsenin bakmadığı sıradan bir hafta sonunda birkaç adresin oyu protokolün kurallarını değiştirmeye yeterdi.

## Nasıl çalışır?

Eşik genellikle toplam oy gücünün ya da [[circulating-supply|dolaşımdaki arzın]] bir yüzdesi olarak yazılır. Sabit bir sayı yerine oran kullanılmasının sebebi, arzın zamanla değişmesidir.

Asıl dikkat edilecek nokta, yeter sayının yalnızca **katılımı** ölçmesidir, sonucu değil. Evet oranı ayrı bir eşiktir. Tasarımlar tam burada ayrışır: kimi sistem çekimser oyları katılıma sayar, kimi saymaz. Aynı öneri, sayım kuralına göre bir tasarımda geçer, ötekinde düşer.

Evrensel olarak doğru bir eşik de yoktur, çünkü doğru sayı topluluğun gerçek katılım alışkanlığına bağlıdır ve o alışkanlık zamanla değişir. Bu yüzden eşiğin kendisi de arada bir güncellenen bir yönetişim parametresidir.

## Dikkat

Eşik iki yönlü bir sorun üretir. Düşük tutulursa küçük ve organize bir grup protokolü tek başına yönetebilir; bu, bir [[governance-attack|yönetişim saldırısının]] maliyetini doğrudan ucuzlatır. Yüksek tutulursa hiçbir [[governance-proposal|öneri]] geçmez: katılım eşiğe ulaşamadığı için protokol donar ve acil bir parametre değişikliği bile yapılamaz hâle gelir.

Bir de yaygın bir yanlış okuma var. Yeter sayının sağlanması kararın isabetli olduğunu göstermez; gösterdiği tek şey, o kararın geçerli sayılacak kadar ilgi görmüş olmasıdır.
