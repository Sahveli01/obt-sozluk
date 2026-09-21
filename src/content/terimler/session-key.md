---
term: "Session Key"
tr: "Oturum anahtarı"
aliases: ["oturum anahtarı", "session key"]
category: cuzdanlar
subcategory: "Hesap soyutlama"
level: orta
short: "Bir cüzdana geçici ve sınırlı yetki veren yardımcı anahtar; belirli işlemleri belirli süre boyunca her seferinde onay sormadan yapar."
related: [account-abstraction, smart-contract-wallet, private-key, blind-signing, access-control]
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

Oturum anahtarı, ana anahtarın yerine geçmeyen, ona bağlı olarak üretilmiş sınırlı yetkili bir [[private-key|özel anahtardır]]. Çözmeye çalıştığı sorun basit: her küçük hamle için kullanıcıyı imza penceresine göndermek. Zincir üstü bir oyunda her hareket, bir uygulamada arka arkaya yapılan her işlem ayrı onay isterse kimse o uygulamayı kullanmaz. Oturum anahtarıyla kullanıcı bir kez "şu işlemleri, şu sınırlar içinde, şu süre boyunca benim adıma yapabilirsin" der.

## Benzetme

Spor salonunun misafir kartı gibi. On gün geçerlidir, yalnızca belirli bölümlere sokar, dolabındaki eşyaya erişim vermez; kaybedersen salon kartı listeden siler ve iş biter. Asıl üyeliğin sende kalmıştır.

## Nasıl çalışır?

Oturum anahtarı ancak hesabın doğrulama kuralını kendi kodu belirlediğinde mümkündür; yani [[account-abstraction|hesap soyutlamaya]] dayanır. Kullanıcı ana anahtarıyla bir kez imza atar ve [[smart-contract-wallet|cüzdan sözleşmesine]] yeni anahtarı sınırlarıyla birlikte tanıtır. Sınırlar tipik olarak şunlardır: hangi sözleşme adreslerine çağrı yapılabilir, hangi fonksiyonlar çağrılabilir, en fazla ne kadar harcanabilir, geçerlilik ne zaman biter.

Sonrasında uygulama işlemleri bu anahtarla imzalar. Cüzdan sözleşmesi her gelen istekte imzanın oturum anahtarına ait olduğunu görür ve izin listesine bakar; kapsam dışındaki bir çağrı reddedilir. Süre dolduğunda anahtar kendiliğinden geçersiz hale gelir, kullanıcı isterse daha erken de iptal edebilir. Ana anahtar bu süre boyunca hiç kullanılmaz — çoğu zaman hiç çevrimiçi olmaz bile.

## Dikkat

Oturum anahtarı genellikle ana anahtar kadar korunmaz; tarayıcıda ya da uygulamanın belleğinde durur. Güvenliği saklandığı yerden değil, kapsamının darlığından gelir. Sınırsız yetkiyle verilmiş bir oturum anahtarı, cüzdanı teslim etmekle aynı şeydir — onay ekranında "hangi sözleşme, ne kadar, ne kadar süre" yazmıyorsa imzalama.

Bir de kriptografideki "session key" ile karıştırma: orada iki tarafın tek bir iletişim oturumu için ürettiği geçici şifreleme anahtarı kastedilir. Buradaki anahtar bir şifreleme aracı değil, bir yetki devri aracıdır.
