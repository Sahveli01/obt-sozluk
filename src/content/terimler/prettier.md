---
term: "Prettier"
tr: ""
aliases: ["prettier formatter"]
category: araclar
subcategory: "Test ve kalite"
level: orta
short: "Kodu kendi kurallarına göre baştan yazan, ayar seçeneği bilinçli olarak az tutulmuş bir formatter."
related: [formatter, eslint, linter, javascript, code-review]
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

Prettier, kodu belirli bir biçime göre yeniden yazan bir [[formatter|formatter]]'dır. [[javascript|JavaScript]], TypeScript, CSS, HTML, JSON ve Markdown gibi birçok dosya türünü biçimlendirir; hangi türleri desteklediği zamanla genişlediği için kesin liste kendi belgesindedir.

Ayırt edici yanı "görüşlü" (opinionated) olmasıdır: ayarlanabilir seçeneklerin sayısı bilinçli olarak az tutulmuştur. Amaç her ekibin kendi biçim kurallarını kurabilmesi değil, biçim tartışmasının tamamen ortadan kalkmasıdır.

## Nasıl çalışır?

Prettier dosyayı okur, anlamını temsil eden bir ağaca çevirir ve o ağacı sıfırdan yazar. Yani senin koyduğun satır sonlarını düzeltmez; onları tamamen unutup kendi kurallarına göre yeniden üretir. Kararın büyük kısmını tek bir şey belirler: satır genişliği. İfade sığıyorsa tek satırda kalır, sığmıyorsa belirli bir düzene göre bölünür.

Çoğu ekip Prettier'ı iki yerde çalıştırır. Editörde kaydetme anında, böylece kimse elle uğraşmaz; bir de [[ci-cd|CI]] üzerinde kontrol adımı olarak, böylece biçimlendirilmemiş bir dosya projeye sızmaz.

## Örnek

Aynı kodun Prettier'dan önceki ve sonraki hâli — davranış aynı, yalnızca görünüş değişir:

```js
// önce
const ayarlar = {tema:"koyu",   dil:'tr'}

// sonra
const ayarlar = { tema: 'koyu', dil: 'tr' };
```

Çıktının tırnak ve noktalı virgül tercihi yapılandırmaya göre değişir; değişmeyen şey, aynı projedeki her dosyanın aynı tercihe uymasıdır.

## Dikkat

Prettier kodun doğruluğuna bakmaz. Hatalı mantık, kullanılmayan değişken, riskli karşılaştırma onun konusu değildir; bunlar [[linter|linter]]'ın işidir ve [[eslint|ESLint]] ile Prettier çoğu projede birlikte kurulur.

İkinci nokta: Prettier'ın seçimleri tartışılabilir ve herkesin hoşuna gitmez. Kazanç tek tek kararların "doğru" olmasından değil, hepsinin her yerde aynı olmasından gelir — bu yüzden tercihleri projede tek tek pazarlık etmeye çalışmak aracın faydasını ortadan kaldırır.
