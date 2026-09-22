---
term: "Layer 2"
tr: "Katman 2"
aliases: ["katman 2", "l2"]
category: olceklenme
subcategory: "Temeller"
level: orta
short: "İşlemleri ana zincirin dışında işleyip güvenliğini ondan alan üst katman; ucuzluğun bedeli yeni güven varsayımlarıdır."
related: [layer-1, rollup, sequencer, challenge-period, forced-withdrawal-escape-hatch, scalability]
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

Layer 2, işlemleri ana zincirin dışında işleyen ama güvenliğini yine o zincirden alan üst katmandır. Kullanıcı işlemini üst katmana gönderir; katman yüzlerce işlemi toplayıp sonucu [[layer-1|Layer 1]]'e özet hâlinde yazar. Ücretin düşmesinin sebebi budur: ana zincirin pahalı alanı tek tek işlemler için değil, toplu özet için harcanır.

Bir sistemin gerçekten Layer 2 sayılmasının ölçütü ucuzluk değildir: üst katmanı işleten taraf kötü davrandığında bile kullanıcının parasını ana zincire geri çekebilmesi gerekir.

## Benzetme

Otoyol ile yanındaki servis yolu gibi. Servis yolunda ilerlemek ucuzdur ve otoyolun kuyruğuna takılmazsın; ama otoyola çıkış rampaları seyrektir, ne zaman çıkabileceğin belirli noktalara bağlıdır ve yolun ışıklarını kimin yönettiğine göre sıran değişir.

## Nasıl çalışır?

Üç soru bir Layer 2'nin gerçek niteliğini ortaya çıkarır.

**Sıralamayı kim yapıyor?** Çoğu tasarımda işlemleri sıraya dizen tek bir taraf vardır ([[sequencer|sıralayıcı]]). Bu taraf imzanı taklit edip paranı alamaz, ama işlemini geciktirebilir, sıraya koymayı reddedebilir ya da sıralamadan kazanç sağlayabilir.

**Ana zincir sonucun doğru olduğunu nereden biliyor?** [[rollup|Rollup]]'larda iki yol vardır: sonuç önce kabul edilir ve itiraza açık bırakılır ([[fraud-proof|hile ispatı]]), ya da sonuçla birlikte doğruluğunun matematiksel kanıtı gönderilir ([[validity-proof|geçerlilik ispatı]]).

**Paranı geri çekmek ne kadar sürer?** İtirazla çalışan tasarımlarda araya günlerle ölçülen bir [[challenge-period|itiraz süresi]] girer. Sıralayıcı seni görmezden gelirse işlemini doğrudan ana zincire yazdırıp çıkış yolunu açman gerekir ([[forced-withdrawal-escape-hatch|zorunlu çıkış]]); böyle bir yolu olmayan sistemde ucuzluk pahalıya patlar.

## Dikkat

"Layer 2 ucuz ve hızlıdır" cümlesi yarım bir cümledir. Ucuzluk, güvenin bir kısmını ana zincirden alıp bir kısmını yeni taraflara vermekten gelir; hangi kısmın nereye gittiğini bilmeden riski göremezsin.

Ayrıca "L2" etiketi taşıyan her sistem tanımı karşılamaz: işlem verisini ana zincire yazmayan ya da çıkışı bir grubun iznine bağlı olan yapılar ([[validium|validium]], [[sidechain|yan zincirler]]) başka güven varsayımlarıyla çalışır.
