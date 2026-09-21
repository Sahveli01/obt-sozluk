---
term: "Cold Wallet"
tr: "Soğuk cüzdan"
aliases: ["soguk cuzdan", "cold storage"]
category: cuzdanlar
subcategory: "Cüzdan türleri"
level: baslangic
short: "Özel anahtarı hiç internete bağlanmayan bir ortamda tutan, uzun süreli saklama için kullanılan cüzdan."
related: [hot-wallet, hardware-wallet, paper-wallet, seed-phrase, self-custody]
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

Soğuk cüzdanda anahtar çevrimdışı bir ortamda durur ve imzalama da orada yapılır; internete bağlı cihaza yalnızca imzalanmış işlem geçer. Uzaktan çalışan bir saldırganın anahtara ulaşması için önce o çevrimdışı ortama fiziksel olarak erişmesi gerekir.

En yaygın biçimi [[hardware-wallet|donanım cüzdanıdır]]. Hiç internete bağlanmamış bir bilgisayar ya da [[paper-wallet|kâğıt cüzdan]] da bu tanıma girer.

## Benzetme

Mevsimlik eşyanın tavan arasında durması gibi: ihtiyacın olduğunda merdiveni kurup çıkman gerekir. Bu zahmet bir kusur değil, tasarımın kendisidir — kolay ulaşılamayan şeye aceleyle de ulaşılamaz.

## Dikkat

Soğukluk, yedekleme sorununu çözmez. Cihaz kaybolur ya da bozulursa geri dönüş yine [[seed-phrase|kurtarma ifadesine]] bağlıdır; o ifadenin bir ekran görüntüsünde veya bulut notunda bir kopyası varsa saklama artık soğuk sayılmaz.

Soğuk cüzdan, neyi imzaladığını anlamanı da sağlamaz: cihazın ekranında ne yazdığını okumak yine sana düşer ([[blind-signing|kör imzalama]]). Soğuk saklama uzaktan hırsızlığa karşı koruma sağlar, yanlış karara karşı değil.
