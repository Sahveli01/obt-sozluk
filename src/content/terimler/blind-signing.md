---
term: "Blind Signing"
tr: "Kör İmzalama"
aliases: ["kör imzalama", "blind sign"]
category: cuzdanlar
subcategory: "Bağlanma ve imzalama"
level: orta
short: "Ne imzaladığını göremeden ya da okumadan bir imza isteğini onaylamak; imza yine de altında yazana göre geçerli olur."
related: [signing-request, eip-712, hardware-wallet, ice-phishing, digital-signature]
disambiguation: []
tags: []
status: taslak
reviewedBy: []
dateSensitive: false
sources: []
added: 2026-09-21
updated: 2026-09-21
---

## Nedir?

Kör imzalama, ne imzaladığını göremeden bir [[signing-request|imza isteğini]] onaylamaktır. İki şekilde olur: cüzdan ya da cihaz veriyi anlamlı bir özete çeviremez, ekranda yalnızca uzun bir sayı dizisi görünür; ya da ekran gayet okunaklıdır ama kullanıcı okumadan onaylar.

Sonuç ikisinde de aynıdır. İmza, senin ne anladığına göre değil, altında ne yazıyorsa ona göre geçerlidir.

## Benzetme

Boş bir kâğıdı imzalayıp masada bırakmak gibi. Üstündeki satırları sonradan başkası doldurur; senin attığın imza yine de gerçektir ve altında ne yazdığından sorumlu olan sensin.

## Nasıl çalışır?

Cüzdanın imzaladığı şey aslında bir bayt yığınıdır. Bunu "şu sözleşmeye şu yetkiyi veriyorsun" diye gösterebilmesi için veriyi çözebilmesi gerekir: çağrılan fonksiyonun tanımını bilmesi ya da verinin [[eip-712|EIP-712]] gibi yapılandırılmış bir biçimde gelmesi gerekir. Çözemezse gösterebileceği tek şey kalır, verinin ham hâli ya da özeti.

[[hardware-wallet|Donanım cüzdanlarında]] bu durumla daha sık karşılaşılır; küçük ekranlı bir cihazın içinde her sözleşmenin tanımı bulunmaz. Bazı cihazlar bu yüzden çözemedikleri veriyi imzalamayı, ayrıca açılması gereken bir ayara bağlar.

## Dikkat

Kör imzalamak her zaman bir saldırı işareti değildir; bazen elindeki araçlarla o isteği okumanın yolu yoktur. Riskli olan, bunun farkında olmadan alışkanlık hâline gelmesidir.

Pratik karşılığı sade: ekran sana ne olacağını söylemiyorsa, reddetmenin bedeli yoktur, onaylamanınki geri alınamayabilir. İsteğin nereden geldiğini, hangi adımın ardından çıktığını ve beklediğin bir şey olup olmadığını sormak, ham veriyi çözmeye çalışmaktan çok daha hızlı bir kontroldür.
