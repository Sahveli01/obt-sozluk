---
term: "Fork (Git)"
tr: ""
aliases: ["git fork"]
category: araclar
subcategory: "Git ve GitHub"
level: orta
short: "Bir deponun, sunucuda kendi hesabına alınan bağımsız kopyası; katkı göndermenin ve kendi yoluna gitmenin yolu."
related: [clone, pull-request-pr, repository, remote, open-source]
disambiguation: [fork-blockchain]
tags: []
status: taslak
reviewedBy: []
dateSensitive: false
sources: []
added: 2026-09-21
updated: 2026-09-22
---

## Nedir?

Fork, başkasının [[repository|deposunun]] sunucudaki kendi hesabına alınmış kopyasıdır. Yazma yetkin olmayan bir projeye katkı vermenin standart yoludur: asıl depoya dokunamazsın ama kendi kopyanda istediğini yaparsın.

İkinci bir kullanımı da vardır: bir projeyi kendi yoluna götürmek. Asıl proje durduğunda ya da yön ayrılığı olduğunda fork bağımsız bir projeye dönüşebilir; [[open-source|açık kaynak]] dünyasında bu bir hak olarak kabul edilir.

## Nasıl çalışır?

Fork sunucu tarafında bir kopya oluşturur ve o kopyada tam yetkin olur. Tipik katkı akışı şöyle işler: depoyu fork'larsın, kendi kopyanı [[clone|klonlarsın]], bir dal açıp commit'lerini atarsın, kendi kopyana gönderirsin ve asıl depoya bir [[pull-request-pr|pull request]] açarsın.

Kopyan zamanla eskir. Bunun için asıl depo `upstream` adıyla ikinci bir [[remote|remote]] olarak eklenir ve güncellemeler oradan alınır.

## Örnek

```
git clone https://github.com/kullanici/proje.git
git remote add upstream https://github.com/asil/proje.git
git fetch upstream
git merge upstream/main
```

## Dikkat

Blockchain'deki [[fork-blockchain|fork]] ile aynı kelime, bambaşka iş: orada canlı bir ağın ortak geçmişi bir noktadan sonra ikiye ayrılır; Git'te ise kimsenin geçmişi bölünmez, yalnızca deponun bir kopyası çıkarılır. Türkçedeki "çatallanma" karşılığı da ağırlıkla blockchain anlamı için kullanılır; Git tarafında "fork" olduğu gibi söylenir.

Fork ile klon da karıştırılır: fork sunucuda durur ve senin adına kayıtlıdır, klon ise kendi bilgisayarındaki kopyadır.
