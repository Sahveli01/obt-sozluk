---
term: "Local Storage"
tr: ""
aliases: ["localstorage"]
category: web
subcategory: "İnternet temelleri"
level: orta
short: "Tarayıcının her alan adı için ayrı tuttuğu, sayfa kapansa da içindekiler kalan basit anahtar–değer deposu."
related: [browser, cookie, session, javascript, browser-extension-wallet]
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

Local Storage, [[browser|tarayıcının]] her alan adı için ayrı tuttuğu basit bir anahtar–değer deposudur. Sayfayı kapatsan da, tarayıcıyı kapatıp açsan da içindekiler kalır. Bir tarayıcı arayüzünün adı (`localStorage`) olduğu için Türkçeye çevrilmez.

## Nasıl çalışır?

Yalnızca metin saklar. Bir nesne saklayacaksan önce [[json|JSON]] metnine çevirir, okurken geri çözersin. Erişim senkrondur: okuma ve yazma işlemi bitene kadar sayfa bekler, bu yüzden büyük verilere uygun değildir.

[[cookie|Çerezden]] iki önemli farkı vardır. Local Storage'daki veri sunucuya kendiliğinden gönderilmez; yalnızca sayfadaki kod okuyup göndermeyi seçerse gider. Ayrıca saklanabilecek alan çerezlerinkinden belirgin biçimde geniştir. Veri alan adı başına ayrılır: bir sitenin yazdığını başka bir site okuyamaz.

## Örnek

```js
localStorage.setItem('tema', 'koyu');
const tema = localStorage.getItem('tema'); // "koyu"

localStorage.setItem('ayarlar', JSON.stringify({ dil: 'tr' }));
const ayarlar = JSON.parse(localStorage.getItem('ayarlar'));

localStorage.removeItem('tema');
```

## Dikkat

Aynı alan adında çalışan her betik — sayfaya sonradan giren bir reklam ya da ele geçirilmiş bir bağımlılık dâhil — Local Storage'ı okuyabilir. Bu yüzden oraya [[private-key|özel anahtar]] ya da kurtarma cümlesi yazılmaz.

[[browser-extension-wallet|Cüzdan eklentilerinin]] anahtarı sayfanın erişemediği ayrı bir alanda tutmasının sebebi tam olarak budur: site cüzdandan imza isteyebilir, ama anahtarın kendisini göremez.
