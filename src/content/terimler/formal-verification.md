---
term: "Formal Verification"
tr: "Biçimsel doğrulama"
aliases: ["biçimsel doğrulama"]
category: guvenlik
subcategory: "Güvenlik test yöntemleri"
level: ileri
short: "Kodun, yazıyla belirtilen bir özelliği bütün olası durumlarda sağladığının matematiksel olarak kanıtlanması."
related: [symbolic-execution, invariant-testing, fuzzing, smart-contract-audit, defense-in-depth]
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

Biçimsel doğrulama, bir özelliğin bütün olası girdilerde ve bütün olası durumlarda doğru olduğunu kanıtlamaktır. Diğer yöntemler örnek arar; bu yöntem örneklerin bittiği yerde durmaz, "artık hiçbir örnek bunu bozamaz" cümlesini kurar.

Bedeli de buradan gelir. Kanıtlanacak şeyi matematiksel bir dille yazman gerekir: "hiçbir kullanıcının bakiyesi, kendi yaptığı işlemler dışında azalamaz" cümlesinin makinenin anlayacağı biçime çevrilmesi ayrı bir uzmanlık ve ayrı bir bütçe ister. Bu yüzden genellikle kodun tamamına değil, en kritik birkaç işlevine uygulanır.

## Benzetme

Üçgenin iç açılarının 180 derece olduğunu bilmek gibi. Bunu binlerce üçgen çizip iletkiyle ölçerek de deneyebilirsin; ölçtüğün her üçgen seni biraz daha ikna eder ama listeyi asla bitiremezsin. Kanıt bunu bir kerede halleder: artık ölçülecek üçgen kalmaz.

Ama kanıtın bir şartı vardır — düzlemde çizilmiş olmak. Küre üstünde çizilen üçgende açılar toplamı 180 çıkmaz ve kanıt yanlışlanmış olmaz; sadece kanıtın konuştuğu dünyanın dışına çıkılmıştır.

## Nasıl çalışır?

İki şey verirsin: kodun bir modeli ve kanıtlanacak özellik. Araç bunları alır ve ya özelliğin her durumda sağlandığını gösterir, ya bir karşı örnek üretir, ya da sonuca varamadan durur.

Alt tabakada çoğunlukla [[symbolic-execution|sembolik yürütme]] ve çözücüler çalışır; çözücünün baş edemediği yerlerde ara adımları insanın yazdığı, kanıtı makinenin denetlediği ispat asistanları devreye girer. Karşı örnek çıkması da değerli bir sonuçtur: kanıt denemesi, ihlalin gerçekleştiği tam durumu eline verir.

## Dikkat

**Kanıt, yalnızca yazdığın özellik kadar iyidir.** Yanlış şeyi kusursuzca kanıtlamak mümkündür: özellik dar yazılmışsa kanıt geçerlidir, kod yine de hedeflediğin şeyi yapmıyordur. Bu, [[invariant-testing|değişmez testlerindeki]] gevşek koşul sorununun daha pahalı hâlidir.

İkinci sınır modelin kendisidir. Kanıt, kodun bir modeli üzerinde kurulur; derleyicinin ürettiği bayt kod, zincirin gerçek davranışı, kullanılan kütüphaneler ve zincir dışında duran parçalar o modelin dışında kalabilir. Model ile gerçek arasındaki fark, kanıtın göremediği yerdir.

Bu yüzden "biçimsel olarak doğrulandı" ifadesi bir güvenlik garantisi gibi okunmamalı — hangi özelliğin, hangi varsayımlar altında kanıtlandığı sorulmalıdır.

Beş yöntemin hiçbiri ötekinin yerine geçmez; ucuz ve yüzeysel olan çoğu hatayı erken eler, pahalı ve derin olan geriye kalan az sayıda kritik iddiayı taşır. Üst üste konurlar ([[defense-in-depth|derinlemesine savunma]]).
