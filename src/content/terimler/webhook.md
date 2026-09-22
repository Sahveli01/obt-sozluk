---
term: "Webhook"
tr: ""
aliases: []
category: web
subcategory: "API'ler"
level: orta
short: "Bir olay gerçekleştiğinde servisin, senin önceden verdiğin adrese istek atarak haber vermesi."
related: [api, endpoint, websocket, http-methods, server]
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

Webhook, isteğin yönünü tersine çevirir. Normalde sen bir servise sorarsın; webhook'ta servise bir adres bırakırsın ve ilgilendiğin olay gerçekleştiğinde servis senin adresine istek gönderir. Kısacası "sen sorma, olunca haber veririz" düzenidir.

Türkçede yerleşmiş bir karşılığı yok — "web kancası" gibi çeviriler hiçbir yerde tutmadığı için terim İngilizce anılır.

## Benzetme

Mağazada aradığın beden yoksa "gelince haber verelim mi?" diye sorarlar, sen de numaranı bırakırsın. Her gün gidip sormana gerek kalmaz; ürün geldiği gün onlar seni arar. Ama haberin gelmesi için bir numara bırakmış olman şarttır ve numarayı yanlış yazdıysan haber başkasına gider.

## Nasıl çalışır?

Servisin ayarlarına kendi [[server|sunucundaki]] bir [[endpoint|uç noktanın]] adresini yazarsın. Olay gerçekleştiğinde servis o adrese genellikle `POST` ([[http-methods|HTTP metodu]]) ile istek atar; gövdede olayın ayrıntıları bulunur. Senin tarafın kısa sürede "aldım" anlamına gelen bir cevap döndürmelidir, yoksa çoğu servis aynı haberi tekrar tekrar dener.

Adres herkese açık olduğu için isteğin gerçekten o servisten geldiğini doğrulamak gerekir. Servisler bunun için gövdeyi paylaşılan gizli bir anahtarla imzalar ve imzayı başlıkta yollar; sen de aynı hesabı yapıp tutup tutmadığına bakarsın.

Blockchain tarafındaki tipik kullanım şudur: izlediğin bir adrese para geldiğinde ya da bir işlem onaylandığında veri sağlayıcı senin sunucuna haber verir, sen de kullanıcıya bildirimi gönderirsin. Böylece zinciri sürekli yoklamak zorunda kalmazsın.

## Dikkat

Aynı olayın haberi birden fazla kez gelebilir; servis cevabını alamadığında yeniden deneyecektir. Bu yüzden haberi işleyen kodun aynı olayı ikinci kez gördüğünde hiçbir şeyi değiştirmemesi gerekir — yoksa tek ödemeyi iki kez işleyen bir sistem çıkar ortaya.

[[websocket|WebSocket]] ile karıştırılır. Farkı şurada: webhook'ta açık tutulan bir hat yoktur, her haber karşı tarafın senin adresine açtığı yeni ve tek seferlik bir istektir.
