---
term: "Serverless"
tr: ""
aliases: ["faas"]
category: web
subcategory: "Yayınlama"
level: orta
short: "Sunucuyu sen yönetmeden, kodun yalnızca istek geldiğinde çalışıp bittiği ve çalıştığı süre kadar ücretlendirildiği model."
related: [cloud-computing, hosting, backend, api, dapp]
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

Serverless, sunucuyu senin yönetmediğin ve kodunun yalnızca istek geldiğinde çalıştığı modeldir. Yazdığın şey sürekli açık duran bir program değil, tek bir işi yapan bir fonksiyondur: istek gelince sağlayıcı onu ayağa kaldırır, cevap döner, fonksiyon kapanır. İşletim sistemini kurmak, güncellemek ve makinenin açık kaldığına bakmak sende değildir.

Türkçede "sunucusuz" denince sunucunun büsbütün ortadan kalktığı anlaşıldığı için bu sözlükte terimin İngilizcesi kullanılıyor.

## Benzetme

Koridordaki hareket sensörlü lamba gibi. Kimse yokken yanmaz, biri girince yanar, çıkınca kendiliğinden söner; sen yalnızca yandığı saniyelerin elektriğini ödersin. Buna karşılık kapıdan girdiğin anla ışığın gelmesi arasında küçük bir gecikme olur.

## Nasıl çalışır?

Fonksiyon bir olaya bağlanır: bir adrese gelen istek, bir zamanlayıcı ya da kuyruğa düşen bir mesaj. Çağrı geldiğinde sağlayıcı izole bir ortam açar, fonksiyonu çalıştırır ve kapatır. Aynı anda bin istek gelirse bin kopya birden çalışır; kapasiteyi ayarlamak senin işin değildir.

Bir [[dapp|dApp]]'te bu model sık tercih edilir, çünkü uygulamanın sunucuda kalan kısmı küçüktür: imza kullanıcının cüzdanında atılır, kalıcı veri zincirde durur, geriye zincirden okuma ve bunu [[frontend|arayüze]] hazır hâlde sunma gibi kısa işler kalır.

## Örnek

```js
export async function handler(request) {
  const { adres } = await request.json();
  if (!adres) {
    return new Response("adres gerekli", { status: 400 });
  }
  const cevap = await fetch(`https://ornek-api.test/bakiye/${adres}`);
  return Response.json(await cevap.json());
}
```

Fonksiyonun bir başlangıcı ve bir sonu vardır; cevabı döndürdüğü anda işi biter.

## Dikkat

Ad yanıltıcıdır: sunucu vardır, yalnızca onu sen görmez ve yönetmezsin.

İki somut sınırı olur. Birincisi soğuk başlangıç: uzun süre çağrılmayan bir fonksiyon ilk istekte ortamı yeniden kurulduğu için gecikir. İkincisi çalışma süresi sınırı: sağlayıcı fonksiyonu belirli bir süre sonra keser, dolayısıyla uzun süren işler bu modele uymaz.

Ayrıca fonksiyonun çağrılar arasında hiçbir şey hatırlamayacağını varsayman gerekir; hatırlanması gereken her şey dışarıda, bir veritabanında ya da zincirde durur.
