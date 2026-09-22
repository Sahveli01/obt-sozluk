---
term: "Lightning Network"
tr: ""
aliases: ["LN"]
category: olceklenme
subcategory: "Diğer yaklaşımlar"
level: orta
short: "Ödeme kanallarını birbirine bağlayarak, doğrudan kanalı olmayan taraflar arasında da zincir dışı ödeme yönlendiren ağ."
related: [payment-channel, state-channel, bitcoin, layer-2, off-chain]
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

Lightning Network, 2015'te yayımlanan bir teknik makaleyle önerilen ve başta [[bitcoin|Bitcoin]] olmak üzere kullanılan bir zincir dışı ödeme ağıdır.

Tek bir [[payment-channel|ödeme kanalı]] yalnızca iki tarafı birbirine bağlar. Lightning'in eklediği şey yönlendirmedir: aralarında kanalı olmayan iki kişi, ortadaki kanallar zinciri üzerinden birbirine ödeme yapabilir. Böylece ayrı ayrı kanallar tek bir ağa dönüşür.

## Nasıl çalışır?

Ali ile Burak arasında, Burak ile Ceren arasında birer kanal varsa, Ali Ceren'e Burak üzerinden ödeme yapabilir. Sorun şudur: Burak parayı alıp Ceren'e iletmeyebilir.

Çözüm, ödemeyi bir sırra ve bir zaman kilidine bağlamaktır. Ceren bir sır seçer ve onun [[hash|hash'ini]] Ali'ye verir. Ali, Burak'a "bu hash'in sırrını bana getirirsen parayı alırsın" diye şartlı bir taahhüt verir; Burak aynı şartı Ceren'e aktarır. Ceren sırrı açıklayıp parayı alınca, aynı sır zincirin geri kalanını da otomatik olarak açar. Kimse kimseye güvenmek zorunda kalmaz; ödeme ya baştan sona gerçekleşir ya da hiç gerçekleşmez ve zaman kilidi dolunca herkesin parası yerine döner.

## Dikkat

Ağın asıl kısıtı likidite ve yönlendirmedir. Bir ödemenin geçebilmesi için yol üzerindeki her kanalın, o yönde yeterli kapasitesi olması gerekir; kapasite tek yöne akınca o yol kapanır ve ödeme başka bir yol arar ya da başarısız olur.

Bu kısıt, çok sayıda kanalı olan büyük düğümlerden geçmeyi kolaylaştırır; ağın merkezîleşme eğilimi buradan doğar. Ayrıca kanal tarafları, eski bir kanal durumunun zincire sunulmasına itiraz edebilmek için zinciri izlemek ya da izlemeyi bir vekile devretmek zorundadır.
