---
term: "CORS"
tr: ""
aliases: ["cross-origin resource sharing"]
category: web
subcategory: "API'ler"
level: orta
short: "Bir sayfanın başka bir alan adındaki API'den cevap okuyabilmesini, o API'nin izin başlığına bağlayan tarayıcı kuralı."
related: [browser, http, api, endpoint, frontend, rpc-provider]
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

CORS ("cross-origin resource sharing"), bir web sayfasının kendi alan adı dışındaki bir adrese istek atıp cevabını okumasını düzenleyen kuraldır. Varsayılan davranış yasaklamadır: `a.example.com` üzerinde çalışan bir sayfanın JavaScript'i, `b.example.com`'dan gelen cevabı okuyamaz. CORS, sunucunun "bu adresten erişilebilir" diyerek açtığı istisnadır.

Kuralı uygulayan [[browser|tarayıcı]]dır ve amacı [[api|API]]'yi korumak değil, kullanıcıyı korumaktır: oturumun açık olduğu bir siteden, ziyaret ettiğin rastgele bir sayfanın senin adına veri okumasını engeller.

## Nasıl çalışır?

Tarayıcı isteği gönderir, sonra cevabın başlıklarına bakar. `Access-Control-Allow-Origin` başlığı sayfanın adresini kapsamıyorsa cevap gelmiş olsa bile [[frontend|arayüz]] koduna teslim edilmez; konsola hata düşer.

Bazı isteklerden önce tarayıcı `OPTIONS` metoduyla bir "ön uçuş" (preflight) isteği yapar: şu adresten, şu metotla, şu başlıklarla istek atabilir miyim? Sunucu izin verdiklerini sayar, ancak ondan sonra asıl istek gider.

## Örnek

Tarayıcı konsolunda görünen tipik hata:

```text
Access to fetch at 'https://example.com/api' from origin
'http://localhost:3000' has been blocked by CORS policy:
No 'Access-Control-Allow-Origin' header is present.
```

Çözüm istemcide değil, sunucunun cevabına eklenen bir başlıktadır:

```text
Access-Control-Allow-Origin: http://localhost:3000
```

## Dikkat

Hata tarayıcıda göründüğü için sorun da orada sanılır; oysa düzeltilecek yer neredeyse her zaman sunucudur. Tarayıcı dışındaki istemcilerde — terminalden atılan bir istek ya da kendi sunucunda çalışan kod — CORS diye bir engel yoktur. `curl` ile sorunsuz çalışan bir isteğin tarayıcıda engellenmesinin sebebi budur.

Blockchain tarafındaki en sık karşılaşılan hâli şudur: kendi düğümünü çalıştırıp bir [[dapp|dApp]]'ten doğrudan bağlanmaya çalışırsın ve istek engellenir. Düğümlerin RPC arayüzü tarayıcıdan gelen isteklere varsayılan olarak kapalıdır; izin verilecek adresleri düğümün ayarlarında açıkça belirtmen gerekir. Hazır bir [[rpc-provider|RPC sağlayıcısı]] kullandığında bu iş senin için çoktan yapılmıştır.
