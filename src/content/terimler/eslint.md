---
term: "ESLint"
tr: ""
aliases: ["es lint"]
category: araclar
subcategory: "Test ve kalite"
level: orta
short: "JavaScript ve TypeScript için yaygın kullanılan, kuralları değiştirilebilen bir linter."
related: [linter, prettier, javascript, typescript, formatter]
disambiguation: []
tags: []
status: taslak
reviewedBy: []
dateSensitive: true
sources: []
added: 2026-09-21
updated: 2026-09-22
---

## Nedir?

ESLint, [[javascript|JavaScript]] ve [[typescript|TypeScript]] dünyasında yaygın kullanılan bir [[linter|linter]]'dır. Kodu çalıştırmadan okur, tanımlı kurallara uymayan yerleri dosya ve satır numarasıyla bildirir, bir kısmını da kendiliğinden düzeltebilir.

Gücü kural setinin tamamen senin elinde olmasından gelir. Çekirdek kuralların yanına eklentiler kurulur; her eklenti kendi alanına ait kuralları getirir (bir arayüz kütüphanesi, sunucu tarafı, erişilebilirlik gibi). Proje hangi kuralları hangi sertlikte uygulayacağına kendisi karar verir.

## Nasıl çalışır?

ESLint kodu önce bir sözdizimi ağacına çevirir. Her kural bu ağacın üzerinde gezinip kendi aradığı deseni arar; bulduğunda kural adıyla birlikte rapor eder. Kural "otomatik düzeltilebilir" diye işaretliyse `--fix` seçeneği dosyayı doğrudan düzeltir.

Kurallar üç seviyede ayarlanır: kapalı, uyarı ve hata. Hata seviyesindeki bir kural [[ci-cd|CI]] üzerinde çalışmayı durdurur; uyarı yalnızca listede görünür. Bu ayrım, yeni bir kuralı önce uyarı olarak açıp ekip alıştıkça hataya çevirmeyi mümkün kılar.

Yazıldığı tarih itibarıyla yapılandırma, proje kökündeki `eslint.config.js` dosyasıyla yapılıyor. ESLint'in yapılandırma biçimi geçmişte değiştiği için, internette bulduğun bir örneği kopyalamadan önce kendi projendeki sürümün belgesine bakman gerekir.

## Örnek

Yazıldığı tarih itibarıyla geçerli olan biçimde küçük bir yapılandırma:

```js
// eslint.config.js
export default [
  {
    files: ['**/*.js'],
    rules: {
      'no-unused-vars': 'error',
      eqeqeq: 'warn',
    },
  },
];
```

Burada kullanılmayan değişken hata sayılır, gevşek eşitlik karşılaştırması ise yalnızca uyarı üretir.

## Dikkat

ESLint ile [[prettier|Prettier]] rakip değildir, farklı işler yaparlar: ESLint kodun ne yaptığına, Prettier nasıl göründüğüne bakar. Karışıklık ESLint'in biçimle ilgili kurallar da içerebilmesinden doğar; ikisi aynı anda biçime karışırsa birbirlerinin çıktısını bozarlar. Yaygın kurulum biçim işini tamamen [[formatter|formatter]]'a bırakıp ESLint'i mantık kurallarına ayırmaktır.
