---
term: "Type Safety"
tr: "Tip güvenliği"
aliases: ["tip güvenliği"]
category: programlama
subcategory: "Çalışma zamanı ve bellek"
level: orta
short: "Bir dilin, bir değeri ait olmadığı türmüş gibi yorumlamana izin vermemesi."
related: [static-typing, dynamic-typing, memory-safety, type-checker, rust]
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

Tip güvenliği, dilin bir değeri başka bir türmüş gibi kullanmana izin vermemesidir. Bellekteki aynı dört baytı bir yerde sayı, başka bir yerde adres gibi okuyabiliyorsan o dil tip güvenli değildir.

Bunu tiplerin ne zaman denetlendiğiyle karıştırma. [[static-typing|Statik tipleme]] "ne zaman" sorusunun, tip güvenliği "ne kadar sıkı" sorusunun cevabıdır ve ikisi bağımsızdır: C statik tiplidir ama serbest dönüşümlerle tip sistemi delinebilir; [[python|Python]] dinamik tiplidir ama bir metni sessizce sayı gibi yorumlamana izin vermez.

## Nasıl çalışır?

Güvence iki noktada verilir. Derleme anında uyumsuz atamalar reddedilir ([[type-checker|tip denetleyicisi]] bu işi yapar). Çalışma anında ise türü ancak o an bilinebilen işlemler denetlenir ve uymuyorsa program durdurulur — sessizce yanlış bir sonuç üretmek yerine.

Asıl kritik nokta kaçış kapılarıdır. Neredeyse her dilde tip sistemini bilerek devre dışı bırakan bir yol vardır: C'deki serbest dönüşümler, TypeScript'teki `any` ve tip iddiaları, [[rust|Rust]]'taki `unsafe`. Bu kapılar kapalı kaldığı sürece dilin sözü geçerlidir; açtığın anda sorumluluk sana geçer. İyi tasarlanmış dillerde bu kapılar dar, görünür ve kodda aranması kolaydır — güvenliği sağlayan şey kapının olmaması değil, nerede açıldığının belli olmasıdır.

## Örnek

Aşağıdaki örnek TypeScript ile yazıldı, çünkü tip iddiasının nasıl delik açtığını tek satırda gösteriyor:

```ts
const veri: unknown = JSON.parse('{"yas": "kırk"}');

const kisi = veri as { yas: number };
console.log(kisi.yas + 1);  // "kırk1" — kimse bu iddiayı denetlemedi
```

## Dikkat

Tip güvenli bir dil seni yanlış türde okumaktan korur, mantık hatalarından korumaz: doğru türde yanlış değer her dilde sorunsuz derlenir.

Bir de tip güvenliğiyle [[memory-safety|bellek güvenliği]] akrabadır ama aynı şey değildir. Biri bir değerin nasıl yorumlandığını, öteki hangi belleğe dokunulduğunu dert eder; pratikte tip sistemi delindiğinde ikincisi de çoğu zaman birlikte delinir.
