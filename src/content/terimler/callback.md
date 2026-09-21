---
term: "Callback"
tr: ""
aliases: ["geri çağırma"]
category: programlama
subcategory: "Çalışma zamanı ve bellek"
level: baslangic
short: "Başka bir fonksiyona 'şu iş olduğunda bunu çalıştır' diye verilen fonksiyon."
related: [promise, event-loop, function, async-await]
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

Callback, başka bir [[function|fonksiyona]] parametre olarak verdiğin fonksiyondur. Onu sen çağırmazsın: "şu iş bitince" ya da "şu olay olunca" diye bırakırsın, çağırma işini karşı taraf yapar. Bir düğmeye tıklandığında çalışacak kod ya da dosya okunup bittiğinde devreye girecek kod böyle yazılır.

Türkçede "geri çağırma" denendi ama yerleşmedi; kodda da İngilizcesi geçtiği için o hâliyle kullanılıyor.

## Benzetme

Apartman görevlisine bıraktığın not gibi. "Ben yokken kargo gelirse alıp kapımın önüne bırak." Notu yazan sensin ama ne zaman uygulanacağına sen karar vermezsin; kargo geldiğinde talimatı görevli uygular. Kargo hiç gelmezse de hiçbir şey olmaz, not öylece bekler.

## Örnek

Aşağıdaki örnek JavaScript ile yazıldı, çünkü bu kavram en çok tarayıcı dünyasında karşına çıkar:

```js
const dugme = document.querySelector('button');

dugme.addEventListener('click', () => {
  console.log('tıklandı');
});
```

## Dikkat

Callback'ler birbirine bağlandıkça iç içe girer ve kod okunmaz hâle gelir. [[promise|Promise]] ve [[async-await|async/await]] tam olarak bu sorunu çözmek için çıktı; üçünün tarihsel sırası promise maddesinde anlatılıyor.
