---
term: "Chain Abstraction"
tr: ""
aliases: ["zincir soyutlama"]
category: olceklenme
subcategory: "Köprüler ve zincirler arası"
level: orta
short: "Kullanıcının hangi zincirde olduğunu bilmek zorunda kalmadan işlem yapabilmesini hedefleyen tasarım yaklaşımı."
related: [account-abstraction, intent, solver, paymaster, omnichain, interoperability]
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

Bugün kullanıcı bir sürü şeyi kendi çözmek zorunda: doğru ağa geçmek, o ağın jetonundan gas için bulundurmak, varlığını köprüden geçirmek, hangi zincirde ne kadarı olduğunu takip etmek. Zincir soyutlama, bunların hiçbirinin kullanıcıya sorulmadığı bir kurgunun adıdır: sen ne olmasını istediğini söylersin, hangi zincirde nasıl olacağına arka taraf karar verir.

Türkçede yerleşik bir karşılığı yok; "zincir soyutlama" diye anılsa da metinlerde çoğunlukla İngilizce geçer.

## Benzetme

Yurt dışında kartını uzatıp ödeme yapmak gibi. Sen kendi para biriminden tek bir tutar görürsün. Arkada bir çevrim, bir kur ve bir komisyon vardır; görünmemeleri ortadan kalktıkları anlamına gelmez, faturayı yine sen ödersin.

## Nasıl çalışır?

Birkaç parçanın üst üste binmesiyle kurulur. Hesap tarafında [[account-abstraction|hesap soyutlama]] ve oturum anahtarları imza deneyimini basitleştirir; [[paymaster|paymaster]] gas ücretinin başka bir tokenla ya da başkası tarafından ödenmesini sağlar.

İşlem tarafında kullanıcı bir [[intent|niyet]] beyan eder: "şu varlıktan şu kadarı şurada olsun." Bunu yerine getirmeyi [[solver|solver]]'lar üstlenir; hangi zincirden hangi yolla getireceklerini kendileri çözer, çoğu zaman riski alıp kullanıcıya önden teslim ederler.

Altta ise değişen bir şey yoktur: hâlâ bir köprü, bir [[cross-chain-messaging|mesajlaşma katmanı]] ve onun doğrulama yöntemi çalışır. Arayüzün gösterdiği "tek bakiye" de birleştirilmiş bir görünümdür; varlık hâlâ birden fazla zincirde durur.

## Dikkat

Soyutlama riski yok etmez, görünmez yapar. Kullanıcı hangi köprünün ve hangi güven varsayımının devrede olduğunu artık göremediği için soruyu sorma imkânını da kaybeder. İyi bir uygulama bu bilgiyi gizlemek yerine isteyene gösterir.

İkinci mesele merkezîleşmedir: işi çözen solver ve yönlendirici katmanı dar bir gruba indiğinde, kullanıcının bağımlı olduğu yeni bir tekil nokta doğar.
