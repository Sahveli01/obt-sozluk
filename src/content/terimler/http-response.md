---
term: "HTTP Response"
tr: "HTTP yanıtı"
aliases: []
category: web
subcategory: "İnternet temelleri"
level: orta
short: "Sunucunun bir isteğe karşılık gönderdiği; durum kodu, başlıklar ve çoğu zaman bir gövde içeren mesaj."
related: [http, http-request, http-status-code, json, cache]
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

HTTP yanıtı, [[server|sunucunun]] bir [[http-request|isteğe]] karşılık gönderdiği mesajdır. Üç parçadan oluşur: isteğin nasıl sonuçlandığını söyleyen [[http-status-code|durum kodu]], yanıtı tarif eden başlıklar ve çoğu zaman bir gövde.

## Nasıl çalışır?

İlk satırda protokol sürümü ve durum kodu bulunur. Başlıklar yanıtın nasıl yorumlanacağını söyler: gövdenin türü ve karakter kodlaması (`Content-Type`), uzunluğu (`Content-Length`), ne kadar süre saklanabileceği (`Cache-Control`). İstemcinin gövdeyi sayfa olarak mı göstereceğini yoksa indirme olarak mı sunacağını da başlıklardan anlarız.

Gövde, istenen kaynağın kendisidir: bir [[html|HTML]] sayfası, bir görsel ya da bir [[json|JSON]] belgesi. Her yanıtta gövde olmak zorunda değildir; yönlendirme yanıtlarında gövde yerine yeni adresi gösteren bir `Location` başlığı bulunur.

Başlıkların bir kısmı yanıtın kendisiyle değil, ona sonradan ne olacağıyla ilgilidir. [[cache|Önbellekleme]] başlıkları, aynı kaynak tekrar istendiğinde tarayıcının yeni bir istek gönderip göndermeyeceğini belirler; iyi ayarlanmış bir yanıt çoğu zaman ikinci kez hiç istenmez.

## Örnek

```text
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
Content-Length: 41
Cache-Control: max-age=300

{"terim":"HTTP Response","seviye":"orta"}
```

## Dikkat

Durum kodunun `200` olması içeriğin doğru olduğu anlamına gelmez; yalnızca isteğin sunucu tarafında sorunsuz karşılandığını söyler. Bir [[api|API]] pekâlâ `200` ile birlikte gövdesinde bir hata mesajı gönderebilir. Bu yüzden istemci tarafında hem durum koduna hem gövdenin içeriğine bakmak gerekir; yalnızca birine güvenen kod, sessizce yanlış veriyle çalışmaya devam eder.
