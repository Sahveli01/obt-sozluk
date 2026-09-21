---
term: "Pointer"
tr: "İşaretçi"
aliases: ["işaretçi"]
category: programlama
subcategory: "Çalışma zamanı ve bellek"
level: ileri
short: "Bir değerin kendisini değil, o değerin bellekte durduğu adresi tutan değer."
related: [reference, memory-management, stack-and-heap, memory-safety, c-dil]
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

İşaretçi, bir değerin kendisini değil, o değerin bellekte durduğu adresi tutan değerdir. Elinde nesne yoktur; nesnenin nerede olduğu bilgisi vardır. Adresi izleyip oradaki değere ulaşmaya "dereference" denir.

[[python|Python]]'da işaretçi yoktur — dil sana adresleri hiç göstermez ve göstermemesi kasıtlıdır. Bu yüzden buradaki örnek [[c-dil|C]] ile yazıldı; işaretçiyi çıplak hâliyle gösteren dil odur.

## Benzetme

Metnin ortasındaki bir dipnot numarası gibi. Numaranın kendisi hiçbir şey anlatmaz; "arkadaki listede 37'ye bak" der. Aynı numarayı başka bir cümleye de koyabilirsin, ikisi de aynı nota gider — not çoğalmaz. Asıl tehlike ise şudur: arkadaki liste yeniden düzenlenmişse 37 numara artık bambaşka bir şeyi gösterir, ama sen bunu ancak oraya gidip baktığında anlarsın.

## Nasıl çalışır?

Bellek numaralanmış hücrelerden oluşur ve işaretçinin tuttuğu şey bu numaralardan biridir. Numaranın yanında bir bilgi daha taşınır: orada duran şeyin türü. Derleyici türü bilmeden kaç bayt okuyacağını bilemez, bu yüzden `int*` ile `char*` aynı adresi tutsalar bile farklı şeyler okur.

İşaretçiler üç işi mümkün kılar: büyük veriyi kopyalamadan fonksiyona geçirmek, bir fonksiyonun çağıranın değişkenini değiştirebilmesi ve boyutu ancak çalışırken belli olan yapıları [[stack-and-heap|heap]] üzerinde kurabilmek. Üçü de adresi elden ele dolaştırmakla olur.

## Örnek

```c
#include <stdio.h>

int main(void) {
    int sayi = 42;
    int *p = &sayi;         // p, sayi'nin adresini tutar
    *p = 7;                 // adresteki değeri değiştir
    printf("%d\n", sayi);   // 7
    return 0;
}
```

## Dikkat

İki klasik tehlike vardır: hiçbir yeri göstermeyen (`NULL`) bir işaretçiyi izlemek ve ömrü bitmiş belleği gösteren bir işaretçiyi kullanmak. İkincisi daha sinsidir, çünkü program çoğu zaman çökmez — eski adreste artık başka bir veri durur ve sen onu sessizce okursun. [[memory-safety|Bellek güvenli]] diller tam olarak bu iki durumu imkânsız kılmaya çalışır.

İşaretçiyle [[reference|referansın]] farkı da sık sorulur; o ayrım referans maddesinde duruyor.
