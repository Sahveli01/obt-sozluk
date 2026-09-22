---
term: "HTTP Request"
tr: "HTTP isteği"
aliases: []
category: web
subcategory: "İnternet temelleri"
level: orta
short: "İstemcinin sunucudan bir şey istemek için gönderdiği; metot, yol, başlıklar ve isteğe bağlı bir gövdeden oluşan mesaj."
related: [http, http-response, http-methods, fetch, browser]
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

HTTP isteği, bir [[client-web|istemcinin]] — [[browser|tarayıcının]] ya da senin yazdığın bir programın — uzaktaki [[server|sunucudan]] bir şey istemek için gönderdiği mesajdır. Dört parçası vardır: ne yapılmasını istediğini söyleyen [[http-methods|metot]], hangi kaynağın istendiğini söyleyen yol, ek bilgileri taşıyan başlıklar ve varsa gövde.

## Nasıl çalışır?

İlk satır metodu ve yolu taşır. Ardından gelen başlıklar `Ad: değer` biçimindedir ve isteğin bağlamını anlatır: hangi sunucuya gidiyor (`Host`), ne tür bir cevap bekleniyor (`Accept`), istemci kendini nasıl tanıtıyor (`User-Agent`), elinde bir kimlik var mı (`Authorization`) ya da bir [[cookie|çerez]] taşınıyor mu.

`GET` gibi metotlarda gövde yoktur; gönderilecek ek bilgi varsa yolun sonundaki sorgu kısmına yazılır. `POST` ve `PUT` gibi metotlarda ise veri gövdede taşınır ve türü `Content-Type` başlığıyla bildirilir. Boş bir satır başlıkların bittiğini, gövdenin başladığını gösterir.

## Örnek

```text
GET /terimler/url?dil=tr HTTP/1.1
Host: ornek.com.tr
Accept: text/html
Accept-Language: tr
Cookie: tema=koyu
```

## Dikkat

İstek metninin tamamı istemci tarafından üretilir; sunucunun eline geçen hiçbir başlık kendiliğinden doğrulanmış değildir. Bu yüzden sunucu tarafında "istemci böyle gönderdiyse doğrudur" varsayımı kurulmaz: kimlik bilgisi ayrıca [[authentication|doğrulanır]], gövdedeki veri ayrıca kontrol edilir.
