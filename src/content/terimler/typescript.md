---
term: "TypeScript"
tr: ""
aliases: ["ts"]
category: programlama
subcategory: "Diller ve formatlar"
level: orta
short: "JavaScript'in üzerine tip bilgisi ekleyen, derlendiğinde yeniden sade JavaScript'e dönüşen dil."
related: [javascript, static-typing, type-checker, transpiler, type-safety, node-js]
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

TypeScript, [[javascript|JavaScript]]'in üzerine bir tip katmanı ekleyen dildir. Geçerli her JavaScript dosyası aynı zamanda geçerli bir TypeScript dosyasıdır; eklenen şey, değişkenlerin ve fonksiyonların hangi tür veriyle çalıştığını yazabilmendir. Yeni bir çalışma ortamı, yeni bir standart kütüphane ya da yeni bir dil mantığı getirmez.

## Nasıl çalışır?

Tarayıcı ve [[node-js|Node.js]] TypeScript'i olduğu gibi çalıştırmaz. `tsc` derleyicisi önce tipleri denetler, sonra tip bilgisini tamamen silip sade JavaScript üretir; bu yüzden TypeScript çoğu zaman derleyiciden çok bir [[transpiler|transpiler]] olarak anılır.

Buradan önemli bir sonuç çıkar: tipler çalışma anında yoktur. Çalışan program hız ya da güvenlik bakımından JavaScript'ten farklı değildir, kazanç tamamen yazma anındadır. Editörün hangi alanların var olduğunu bilir, bir fonksiyonun imzasını değiştirdiğinde kırılan bütün çağrı yerlerini [[type-checker|tip denetleyicisi]] anında gösterir. Bu, [[static-typing|statik tiplemenin]] sağladığı klasik kazançtır.

## Örnek

```typescript
let deger: number = 5;
deger = "beş";
```

Derleyici bu dosyayı reddeder ve şunu söyler: `Type 'string' is not assignable to type 'number'.` Aynı iki satır JavaScript'te sorunsuz çalışırdı.

## Dikkat

Tip denetimi yalnızca senin yazdığın kodun sınırları içinde geçerlidir. Dışarıdan gelen veri — bir API yanıtı, bir zincir sorgusunun sonucu, kullanıcı girdisi — derleme anında denetlenemez. `const veri = yanit as Kullanici` yazdığında derleyiciye "bana güven" demiş olursun; veri beklediğin şekilde gelmezse hata yine çalışma anında çıkar. [[type-safety|Tip güvenliği]] sınırda yapılan doğrulamanın yerini tutmaz.
