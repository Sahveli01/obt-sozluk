---
term: "API Key"
tr: "API Anahtarı"
aliases: ["api anahtarı"]
category: web
subcategory: "API'ler"
level: orta
short: "Bir servise yapılan isteklerin hangi hesaba ait olduğunu gösteren, gizli tutulması gereken uzun dizgi."
related: [api, authentication, rate-limiting, secrets-management, environment-variable, rpc-provider]
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

API key, bir servise "bu istek benim hesabıma ait" demeni sağlayan uzun ve rastgele bir dizgidir. Servis onunla isteklerini sayar, faturalandırır ve gerekirse keser.

[[authentication|Kimlik doğrulamanın]] en basit biçimidir: kullanıcıyı değil, uygulamayı ya da hesabı tanır. Kimin ne yapabileceğinin ayrı ayrı belirlenmesi gerektiğinde anahtar yetmez, oturum ve yetki taşıyan token'lara geçilir.

## Nasıl çalışır?

Anahtar genellikle isteğin başlığında gönderilir. Kimi servisler adresin sorgu kısmında da kabul eder ama bu kötü bir alışkanlıktır: adresler sunucu kayıtlarına, ara katmanlara ve tarayıcı geçmişine düz metin olarak yazılır.

Anahtar bir parola gibi davranır, ama parolanın aksine bir insana değil bir programa aittir. Bu yüzden kodun içine değil, programın çalıştığı ortama ([[environment-variable|environment variable]]) konur ve sürüm kontrolüne hiç girmez. Bu konunun tamamı [[secrets-management|gizli bilgi yönetimi]] başlığı altındadır.

## Örnek

```js
const cevap = await fetch('https://example.com/api/veri', {
  headers: { Authorization: `Bearer ${process.env.API_ANAHTARI}` },
});
```

Anahtar kodun içinde değil, çalıştığı ortamda durur. Dosyayı paylaştığında ya da deponu herkese açtığında anahtarı paylaşmamış olursun.

## Dikkat

En sık yapılan hata anahtarı tarayıcıda çalışan koda gömmektir. Tarayıcıya giden her şey kullanıcıya da gider: sayfanın kaynağına ya da geliştirici araçlarının ağ sekmesine bakan herkes anahtarı okur. Bir [[rpc-provider|RPC sağlayıcısının]] anahtarı böyle sızdığında faturası da, dolan [[rate-limiting|istek sınırı]] da senin hesabına işler. Anahtar gerektiren çağrılar kendi sunucun üzerinden geçmelidir.

Sızdığından şüphelendiğin anahtarı iptal edip yenisini üretmek, "kimse fark etmez" diye beklemekten her zaman ucuzdur.
