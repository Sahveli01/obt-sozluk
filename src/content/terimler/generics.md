---
term: "Generics"
tr: ""
aliases: ["jenerik", "generic tip"]
category: programlama
subcategory: "Temel kavramlar"
level: ileri
short: "Aynı kodun farklı veri tipleriyle çalışabilmesi için tipin, değer gibi parametre olarak verilmesi."
related: [data-type, type-safety, static-typing, trait-rust, typescript]
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

Generics, bir kod parçasını belirli bir [[data-type|veri tipine]] bağlamadan yazmanın yoludur. Tip, tıpkı bir sayı gibi, dışarıdan verilen bir parametre hâline gelir. "Bir listenin ilk elemanını döndür" işlemi sayı listesi için de metin listesi için de aynıdır; generics sayesinde bu fonksiyonu bir kez yazarsın.

Türkçede "jenerik" biçimi konuşma dilinde duyulsa da yazılı kullanımda terim İngilizce kalır, bu yüzden burada çevrilmedi.

## Nasıl çalışır?

Fonksiyonu ya da tipi tanımlarken bir tip parametresi açarsın — geleneksel olarak `T` harfi. Gövdede artık somut bir tipten değil, "her ne verilirse o"dan söz edilir. Çağrı yerinde derleyici, verilen değere bakıp `T`'nin ne olduğuna karar verir ve bu kararı sonuna kadar hatırlar: metin listesi verdiysen dönen değer de metindir.

Asıl kazanç buradadır. Generics olmasaydı iki seçeneğin olurdu: aynı fonksiyonu her tip için kopyalamak, ya da her şeyi "her tip olabilir" diyen genel bir tipe çevirip [[type-safety|tip güvenliğini]] kaybetmek. İkincisinde derleyici seni koruyamaz; hata çalışma zamanına ertelenir.

Generic kod tipin ne olduğunu bilmediği için ona her işlemi de yapamaz. Bu yüzden diller kısıt koymaya izin verir: "T her şey olabilir ama karşılaştırılabilir olmalı" gibi. Rust'ta bu kısıtlar [[trait-rust|trait]] ile yazılır.

## Benzetme

Bir dolum makinesi gibi. Aynı makine şişeye su da doldurur, zeytinyağı da, sirke de; hattın başına ne verdiysen sonunda o çıkar. Makinenin içine bakan hiç kimse "burada ne akıyor" diye merak etmez, çünkü hat boyunca değişmediği baştan garantidir. Suyu koyup çıkışa yağ etiketi yapıştıran bir makine ise bozuk sayılır.

## Örnek

TypeScript kullandım, çünkü tip parametresinin nasıl verildiği ve dönen tipin nasıl korunduğu tek bakışta görünüyor:

```ts
function ilkEleman<T>(liste: T[]): T | undefined {
  return liste[0];
}

const s = ilkEleman(["a", "b"]);  // tipi: string | undefined
const n = ilkEleman([1, 2, 3]);   // tipi: number | undefined
```

## Dikkat

Her şeyi generic yapmak iyi bir refleks değildir. Üç harfli tip parametreleriyle dolu bir imza, çözdüğü sorundan daha fazla okuma yükü getirebilir; ikinci bir tip ihtiyacı gerçekten doğmadan genelleştirme.

Generics'in bedelinin ne olduğu da dile göre değişir. Bazı diller her somut tip için kodu ayrıca üretir — hızlıdır ama derleme çıktısı büyür; bazıları tek bir ortak kod kullanır. Performans konuşurken hangi dilde olduğunu belirtmeden hüküm verme.
