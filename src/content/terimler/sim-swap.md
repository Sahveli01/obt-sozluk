---
term: "SIM Swap"
tr: ""
aliases: []
category: guvenlik
subcategory: "Kullanıcıyı hedef alan dolandırıcılıklar"
level: orta
short: "Telefon numaranın saldırgana ait bir SIM karta taşınması; SMS ile gelen doğrulama kodları artık ona gider."
related: [social-engineering, phishing, passkey, hardware-wallet, authentication]
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

SIM swap, telefon numaranın senin rızan olmadan başka bir SIM karta taşınmasıdır. Hattın bir anda çekmeyi bırakır; aynı anda numaran başka birinin telefonunda çalışmaya başlar.

Hedef telefonun değil, numaranın sana açtığı kapılardır. SMS ile gelen doğrulama kodları ve "şifremi unuttum" bağlantıları artık ona gider. Terimin yerleşik bir Türkçe karşılığı yok; operatörler ve basın çoğunlukla "SIM kart dolandırıcılığı" gibi tanımlayıcı ifadeler kullanıyor.

## Benzetme

Posta kutunun kilidini kırmak yerine postaneye gidip adres değişikliği yaptırmak gibi. Kilit sağlam durur, kutu yerindedir, evin kapısına dokunulmaz. Yalnızca sana gelmesi gereken her şey başka bir adrese gider — bankanın gönderdiği yeni şifre de dâhil.

## Nasıl çalışır?

Numaranın hangi karta bağlı olduğuna operatör karar verir. Devir işlemi de normalde meşru bir ihtiyaç içindir: kart kaybolur, telefon çalınır, numara yeni karta taşınır.

Saldırı bu meşru süreci hedefler. Elde edilen kişisel bilgilerle ya da süreçteki bir zayıflıkla numara devredilir; bu bir [[social-engineering|sosyal mühendislik]] işidir, teknik bir kırma değil. Öncesinde çoğu zaman bilgi toplama aşaması vardır ve o bilgi genellikle bir [[phishing|oltalama]] denemesinden ya da sızmış bir veritabanından gelir.

Devir tamamlandığında saldırgan sırayla hesapları açar: önce e-posta, sonra ona bağlı her şey.

## Dikkat

Burada kaybedilen şey cüzdanının anahtarları değil, hesaplarındır — ama borsa hesabın oradaysa sonuç aynıdır.

- SMS doğrulamadan uygulama tabanlı koda ya da fiziksel güvenlik anahtarına geç; SMS, iki adımlı doğrulamanın en zayıf biçimidir ([[authentication|kimlik doğrulama]], [[passkey|passkey]]).
- Operatörünün hat işlemleri için sunduğu ek koruma seçeneklerini aç ve hesabına ayrı bir parola koy.
- Telefon numaranı kurtarma yöntemi olarak kullanan hesapları tek tek gözden geçir; e-posta hesabından başla, çünkü diğerlerinin anahtarı odur.
- Kripto varlıklarını, telefon numarasıyla geri alınabilen bir hesapta değil kendi saklamanda tut ([[hardware-wallet|donanım cüzdanı]]).
- Hattın sebepsiz yere çekmeyi keserse bunu arıza sayıp beklemeden operatörünü başka bir telefondan ara.
