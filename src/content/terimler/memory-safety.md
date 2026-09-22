---
term: "Memory Safety"
tr: "Bellek güvenliği"
aliases: ["bellek güvenliği"]
category: programlama
subcategory: "Çalışma zamanı ve bellek"
level: ileri
short: "Bir programın yalnızca kendisine ayrılmış ve o an hâlâ geçerli olan belleğe erişebilmesi güvencesi."
related: [memory-management, pointer, rust, stack-and-heap, type-safety]
disambiguation: [safety-consensus]
tags: []
status: taslak
reviewedBy: []
dateSensitive: false
sources: []
added: 2026-09-21
updated: 2026-09-22
---

## Nedir?

Bellek güvenliği, bir programın yalnızca kendisine ayrılmış ve o an hâlâ geçerli olan belleğe erişebilmesidir. Bu güvencenin olmadığı yerde program, dokunmaması gereken bir yeri okuyabilir ya da yazabilir — ve bunu yaparken çoğu zaman hata bile vermez.

Dört klasik ihlal vardır: dizinin sınırını aşmak, serbest bırakılmış belleği kullanmaya devam etmek, aynı yeri iki kez serbest bırakmak ve hiçbir yeri göstermeyen bir [[pointer|işaretçiyi]] izlemek.

## Nasıl çalışır?

Güvence iki noktadan birinde verilir.

**Çalışma anında.** Dil her erişimde sınır kontrolü yapar ve uymayan erişimde programı kontrollü biçimde durdurur. Java, Python ve Go böyle çalışır; bedeli her erişimde ödenen küçük bir maliyettir.

**Derleme anında.** Dil, geçersiz erişim üretebilecek kodu baştan reddeder. [[rust|Rust]]'ın sahiplik ve ödünç alma kuralları bunu hedefler: kontrolün büyük kısmı derleyicide biter, çalışırken üstüne yük binmez. Karşılığında derleyiciyi ikna etmek öğrenmesi zaman alan bir iştir.

C ve C++'ta ise dilin verdiği bir güvence yoktur; kuralları programcı aklında tutar. Bunun sonucu teorik değildir — bulunan güvenlik açıklarının önemli bir bölümü bu sınıftan çıkar ve bellek güvenli dillere geçmek son yıllarda bir güvenlik konusu olarak konuşulur.

## Örnek

```c
#include <stdio.h>

int main(void) {
    int dizi[3] = {1, 2, 3};
    printf("%d\n", dizi[5]);  // dizinin dışı: derlenir, çalışır,
    return 0;                 // ne okuduğu belirsizdir
}
```

Buradaki asıl nokta çıktının ne olduğu değil, **belirli bir çıktısının olmaması**: C standardı bu erişimi tanımsız davranış sayar. Program çöpe denk gelen bir sayı basabilir, çökebilir, derleyicinin eniyileştirmesine göre bambaşka davranabilir. Aynı erişim Python'da `IndexError` verip programı durdurur; Rust'ta derleme sırasında ya da çalışırken yakalanır. Hiçbirinde rastgele belleğin içeriği sessizce yazdırılmaz.

## Dikkat

Bellek güvenli bir dil seçmek programı güvenli yapmaz, yalnızca bir hata sınıfını kapatır. Mantık hataları, eksik yetki kontrolü ve dışarıdan gelen veriye güvenmek her dilde mümkündür ([[type-safety|tip güvenliği]] de ayrı bir eksendir).

Ayrıca çoğu bellek güvenli dilin bir kaçış kapısı vardır — Rust'ta [[unsafe-rust|`unsafe`]] blokları gibi. Güvence o blokların içinde askıya alınır; bu yüzden kod incelemesinde oralar ayrı ve dikkatli ele alınır.

Aynı kelime konsensüste bambaşka bir şeydir: orada [[safety-consensus|güvenlik]], ağın birbiriyle çelişen iki sonucu asla birden kesinleştirmemesi demektir.
