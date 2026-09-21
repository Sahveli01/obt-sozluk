---
term: "Promise"
tr: ""
aliases: []
category: programlama
subcategory: "Çalışma zamanı ve bellek"
level: orta
short: "Henüz elde olmayan bir sonucu temsil eden nesne; sonunda ya bir değerle tamamlanır ya bir hatayla başarısız olur."
related: [callback, async-await, event-loop, javascript, error-handling]
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

Promise, henüz elde olmayan bir sonucu temsil eden nesnedir. Bir ağ isteği başlattığında sana hemen verilen şey cevap değil, "cevap geldiğinde burada olacak" diyen bu nesnedir.

Üç hâli vardır: bekliyor, bir değerle tamamlandı, bir hatayla başarısız oldu. Son ikisinden birine geçtikten sonra bir daha değişmez. [[javascript|JavaScript]] dünyasının nesne adı olduğu için Türkçeye çevrilmez; "söz" karşılığı denenmemiş bile değildir.

## Nasıl çalışır?

Bu kavramın neden var olduğunu anlamak için üçlünün tarihine bakmak gerekir.

Önce [[callback|callback]] vardı: "bu iş bitince şu fonksiyonu çağır." İşler birbirine bağlandıkça çağrılar iç içe girdi, hata kontrolü her katta ayrı ayrı yazıldı ve kod sağa doğru kaydıkça okunmaz hâle geldi. Bu duruma "callback cehennemi" dendi.

Promise bunu düzleştirdi. Sonuç artık elden ele geçirilebilen bir nesne olduğu için "bittiğinde şunu yap" adımları alt alta zincirlenebildi ve bütün zincirin hatası tek bir yerde yakalanabildi.

Ardından [[async-await|async/await]] geldi. Promise'i ortadan kaldırmadı, üstüne bir söz dizimi koydu: `await` yazdığın satırda beklenen şey hâlâ bir promise'tir, yalnızca zincir sıradan kod gibi yukarıdan aşağı okunur.

Üçünün altında dönen mekanizma ise tektir: [[event-loop|olay döngüsü]].

## Örnek

```js
fetch('https://example.com/veri.json')
  .then((cevap) => cevap.json())
  .then((veri) => console.log(veri))
  .catch((hata) => console.error('istek başarısız:', hata));
```

Her `then` bir öncekinin sonucunu alır; zincirin herhangi bir yerindeki hata doğrudan `catch`'e düşer.

## Dikkat

Promise oluşturulduğu anda iş başlamıştır. `then` yazmasan da istek gider; promise "istenince çalışan" bir yapı değil, "çoktan başlamış işin makbuzu"dur.

Zincirin sonuna `catch` koymayı unutmak ise hatanın sessizce kaybolmasına yol açar — [[error-handling|hata yönetiminin]] kuralları burada da aynen geçerlidir.
