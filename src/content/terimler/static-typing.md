---
term: "Static Typing"
tr: "Statik tipleme"
aliases: ["statik tipleme"]
category: programlama
subcategory: "Çalışma zamanı ve bellek"
level: orta
short: "Değerlerin türlerinin kod hiç çalışmadan, derleme anında belirlenip denetlendiği yaklaşım."
related: [dynamic-typing, type-safety, type-checker, typescript, compiler]
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

Statik tipleme, her değerin türünün kod çalışmadan önce belli olduğu ve denetlendiği yaklaşımdır. Bir fonksiyon metin bekliyorsa, ona sayı veren çağrı derlenmez bile. Denetimi [[type-checker|tip denetleyicisi]] yapar; bu ya [[compiler|derleyicinin]] içindedir ya da yanına eklenen ayrı bir araçtır.

## Benzetme

Fişin prize uyup uymaması gibi. Yanlış fişi prize sokmaya çalıştığında elektriği açmana gerek kalmaz; uyumsuzluk daha ilk temasta, hiçbir şey çalışmadan anlaşılır. [[dynamic-typing|Dinamik tiplemede]] ise bütün fişler aynı deliğe girer ve uymadıklarını ancak düğmeye bastığında öğrenirsin.

## Nasıl çalışır?

Tipler iki yoldan belli olur: ya sen yazarsın (`ad: string`), ya araç çıkarım yapar — `const n = 5` yazdığında kimse ona "bu bir sayıdır" demez, kendisi anlar. Elde ettiği haritayla bütün çağrıları tek tek denetler.

İki yaklaşımın karşılaştırması, taraf tutmadan, şöyle: statik tipleme bir hata sınıfını daha kod çalışmadan kapatır, düzenleme araçlarına sağlam bilgi verir (otomatik tamamlama, güvenli yeniden adlandırma) ve kodu kendi kendini belgeler hâle getirir. Bedeli yazım yükü ve bazen tip sistemiyle güreşmektir; ifade etmesi zor bir yapıyı derleyiciye anlatmak zaman alır. Dinamik tipleme ise küçük betikleri ve hızlı denemeleri kolaylaştırır, karşılığında aynı hataları çalışma anına bırakır.

Tercih çoğu zaman dilin "iyiliğiyle" değil, projenin ömrüyle ve koda kaç kişinin dokunduğuyla ilgilidir.

## Örnek

Aşağıdaki örnek TypeScript ile yazıldı, çünkü tipleri var olan bir dilin üstüne ekleyen bir dil olduğu için farkı en çıplak hâliyle gösteriyor:

```ts
function topla(a: number, b: number): number {
  return a + b;
}

topla(2, 3);    // 5
topla('2', 3);  // Derlenmez: 'string' tipi 'number' parametresine atanamaz
```

## Dikkat

Statik tipleme ile [[type-safety|tip güvenliği]] aynı şey değildir. Birincisi denetimin *ne zaman* yapıldığını, ikincisi dilin bir değeri yanlış türmüş gibi yorumlamana *izin verip vermediğini* anlatır. C statik tiplidir ama tip sistemini delmen için önünde açık kapılar bırakır; ikisi bağımsız özelliklerdir.
