---
term: "Node.js"
tr: ""
aliases: ["nodejs"]
category: web
subcategory: "Backend"
level: orta
short: "JavaScript'i tarayıcı dışında, doğrudan bilgisayarda çalıştıran çalışma ortamı."
related: [javascript, npm, server, backend, typescript]
disambiguation: [node]
tags: []
status: taslak
reviewedBy: []
dateSensitive: false
sources: []
added: 2026-09-21
updated: 2026-09-22
---

## Nedir?

Node.js, [[javascript|JavaScript]] kodunu tarayıcıya ihtiyaç duymadan çalıştıran ortamdır. Tarayıcının JavaScript motoru alınmış, üzerine tarayıcıda bulunmayan yetenekler eklenmiştir: dosya okuyup yazmak, ağ bağlantısı dinlemek, işletim sistemiyle konuşmak.

Bunun neden önemli olduğu şuradan anlaşılır: Node.js'ten önce JavaScript yalnızca sayfanın içinde yaşayan bir dildi. Sonrasında aynı dille sunucu da yazılabilir hâle geldi, arayüz ile [[backend|backend]] aynı dili paylaşmaya başladı. Web geliştirme araçlarının çoğu da bu ortamın üstünde çalışır.

## Nasıl çalışır?

Node.js kodu tek bir iş parçacığında, [[event-loop|olay döngüsüyle]] yürütür: dosya ya da ağ beklerken durup beklemez, işi kenara koyar, sıradakine geçer, cevap gelince kaldığı yerden devam eder. Bu yüzden çok sayıda bağlantıyı aynı anda taşıyabilir. Karşılığında, uzun süren tek bir hesap sıranın tamamını bekletir.

Dilin kendisiyle gelmeyen her şey paket olarak kurulur; paketleri kuran araç [[npm|npm]]'dir.

## Örnek

```js
import { createServer } from 'node:http';

const sunucu = createServer((istek, cevap) => {
  cevap.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
  cevap.end('Merhaba');
});

sunucu.listen(3000);
```

Bu kadarı çalışır bir [[server|sunucudur]]: 3000 numaralı kapıyı dinler ve gelen her isteğe aynı cevabı verir.

## Dikkat

Node.js ile npm aynı şey değildir. Biri kodu çalıştıran ortam, diğeri paketleri kuran araçtır; npm Node.js kurulumuyla birlikte gelse de ayrı bir programdır.

Bir de adaş karışıklığı var: [[node|node]] bu sözlükte aynı zamanda blockchain ağına bağlanıp blokları doğrulayan bilgisayar anlamına gelir; ikisinin birbiriyle hiçbir ilgisi yoktur. "Node çalıştırıyorum" cümlesi bu yüzden bağlama göre bambaşka iki iş anlatır.
