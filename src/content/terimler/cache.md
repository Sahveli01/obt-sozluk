---
term: "Cache"
tr: "Önbellek"
aliases: []
category: web
subcategory: "Backend"
level: orta
short: "Pahalı bir işlemin sonucunu, aynı şey tekrar istendiğinde yeniden üretmemek için geçici olarak saklamak."
related: [latency, cdn, database-index, rpc-provider, local-storage]
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

Önbellek, bir kez üretilmiş sonucu elinin altında tutmaktır. Aynı soru ikinci kez geldiğinde veritabanına gitmek, hesabı yeniden yapmak ya da ağ üzerinden veri çekmek yerine saklanan cevap verilir. Kazanç doğrudan [[latency|gecikmeye]] yansır: milisaniyelerce süren bir iş, bellekten okumaya iner.

## Benzetme

Termos gibi. Her çay isteyende ocağı yakıp beklemek yerine bir kere demler, termosa doldurursun; sonraki bardak saniyeler içinde gelir. Ama termostaki çayın tazeliği sınırlıdır — bu yüzden her önbelleğe "ne kadar süre geçerli" bilgisi konur.

## Nasıl çalışır?

İstek bir anahtara çevrilir. Anahtarın karşılığı saklanmışsa doğrudan döner (isabet), saklanmamışsa asıl kaynak çalışır ve sonuç bir sonraki için kenara konur (ıska).

Önbellek tek bir yerde durmaz, katmanlar hâlinde bulunur: tarayıcının kendisi, [[cdn|CDN]], sunucunun belleği, veritabanının kendi önbelleği. Saklanan cevap ya süresi dolunca ya da veri değiştiğinde temizlenir.

## Dikkat

Önbelleğin zor kısmı doldurmak değil, zamanında boşaltmaktır. Veri değiştiği hâlde eski cevap dönmeye devam ediyorsa kullanıcı "değişikliğim kaydedilmedi" diye düşünür.

İkinci tuzak, kullanıcıya özel veriyi herkesin paylaştığı bir önbellekte tutmaktır: birinin sayfası başkasına servis edilir.

Zincir tarafında önbellek neredeyse zorunludur; aynı veriyi her sorguda [[rpc-provider|RPC sağlayıcısından]] çekmek hem yavaştır hem de kotayı tüketir. Ama bakiye ve fiyat gibi hızla değişen değerlerde bayat cevap kullanıcıyı yanıltır — bu verilerde süre kısa tutulur ya da önbellek hiç kullanılmaz.
