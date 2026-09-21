---
term: "Error Handling"
tr: "Hata yönetimi"
aliases: ["hata yönetimi"]
category: programlama
subcategory: "Çalışma zamanı ve bellek"
level: orta
short: "Bir programın işler yolunda gitmediğinde ne yapacağına önceden karar vermesi."
related: [exception, result, logging, debugging]
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

Hata yönetimi, işler yolunda gitmediğinde programın ne yapacağına önceden karar vermektir. Ağ kopabilir, dosya bulunamayabilir, kullanıcı boş form gönderebilir. Bunların hepsi öngörülebilir durumlardır; hata yönetimi "hata olmasın" demek değil, "olduğunda ne olacak" sorusunu cevaplamaktır.

## Nasıl çalışır?

İki yaygın yaklaşım var ve hangisinin kullanıldığı dilin tasarımıyla ilgilidir.

**Hatayı dönüş değeri olarak taşımak.** Fonksiyon ya sonucu ya hatayı döndürür, çağıran taraf ikisini de ele almak zorunda kalır. Go ve Rust böyle çalışır ([[result|Result]]). Kazancı görünürlüktür: hangi satırın başarısız olabileceğini kodu okurken görürsün. Bedeli, kontrolün her çağrıda tekrar tekrar yazılmasıdır.

**Hatayı fırlatmak.** Sorun olduğunda normal akış kesilir ve durum yukarıya devredilir ([[exception|istisna]]). Kazancı, ana akışın kontrol satırlarıyla dolmamasıdır. Bedeli, bir fonksiyonun hangi hataları üretebileceğinin imzasından anlaşılmamasıdır.

Yaklaşım ne olursa olsun her hata için aynı üç soru sorulur: burada çözebilir miyim, yukarıya mı devretmeliyim, yoksa program gerçekten durmalı mı? En çok atlanan şık sonuncusudur — bazı durumlarda yanlış veriyle devam etmek, durmaktan daha pahalıdır.

## Dikkat

En yaygın kötü alışkanlık hatayı yakalayıp hiçbir şey yapmamaktır. Boş bir `catch` bloğu sorunu çözmez, yalnızca görünmez yapar; sorun günler sonra bambaşka bir yerde, sebebi anlaşılmaz biçimde ortaya çıkar.

İkinci sık hata, tek bir mesajı iki ayrı okura birden yazmaya çalışmaktır. Kullanıcıya ne yapacağını söyleyen kısa bir cümle gerekir; geliştiriciye ise bağlamı taşıyan ayrıntılı bir [[logging|kayıt]]. Aynı metni ikisine birden göstermek hem kullanıcıyı korkutur hem [[debugging|hata ayıklamayı]] zorlaştırır. Teknik ayrıntı kayda gider, ekrana değil.
