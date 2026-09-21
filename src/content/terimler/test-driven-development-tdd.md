---
term: "Test-Driven Development (TDD)"
tr: "Test Odaklı Geliştirme"
aliases: ["tdd", "test odaklı geliştirme"]
category: araclar
subcategory: "Test ve kalite"
level: orta
short: "Kodu yazmadan önce o kodun testini yazma disiplini: önce kırmızı, sonra yeşil, sonra temizlik."
related: [software-testing, unit-test, refactoring, test-coverage, clean-code]
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

Test Odaklı Geliştirme (TDD), kodu yazmadan önce o kodun testini yazma disiplinidir. Alışılmış sıra tersine çevrilir: önce "bu fonksiyon şunu yapmalı" diyen bir test yazılır, test başarısız olur, sonra testi geçirecek en basit kod yazılır, en sonunda kod temizlenir.

Bu üç adım kırmızı–yeşil–temizle döngüsü diye anılır ve bir tur dakikalarla ölçülür. TDD'nin vaadi test yazdırmak değil; ne yapacağını koda başlamadan önce net bir cümleyle söylemeye zorlamaktır.

## Benzetme

Oku attıktan sonra düştüğü yerin etrafına daire çizmekle, hedefi önce çizip sonra atmak arasındaki fark. İkisinde de sonunda ok hedefin ortasındadır. Ama yalnızca ikincisi nereyi vurmak istediğini önceden söylemiştir — ve ıskaladığında bunu kendine itiraf etmek zorundadır.

## Nasıl çalışır?

**Kırmızı.** Henüz var olmayan davranışın testini yaz ve çalıştır. Test başarısız olmalıdır. Bu adım atlanamaz: kırmızı yanmayan bir test, yazdığın koddan bağımsız olarak her zaman geçiyor olabilir.

**Yeşil.** Testi geçirecek en basit kodu yaz. Zarif olması gerekmez; bu adımın tek ölçütü testin geçmesidir. Fazladan özellik eklemek, "ileride lazım olur" diye genelleme yapmak bu adımın dışındadır.

**Temizle.** Testler yeşilken kodu düzelt: tekrarları kaldır, isimleri düzelt, yapıyı sadeleştir. Bu [[refactoring|refactoring]] adımıdır ve testler ağ görevi görür — davranışı bozduğun anda kırmızı yanar.

Sonra döngü baştan başlar; bir sonraki davranış için yeni bir [[unit-test|birim test]] yazılır.

## Dikkat

TDD bir test tekniği olduğu kadar bir tasarım tekniğidir. Test yazması zor bir kod, genelde kullanması da zor bir koddur; TDD bu rahatsızlığı en başta hissettirir.

Her duruma uymaz. Ne yapacağını henüz bilmediğin keşif aşamasında, arayüz denemelerinde ya da davranışı hızla değişen bir prototipte önce test yazmak boşa emek olabilir. Bu aşamada deneyip sonra testleri yazmak da geçerli bir yoldur.

Son olarak TDD yüksek [[test-coverage|kapsama]] oranını yan ürün olarak getirir; ama oranı hedef hâline getirmek TDD'nin amacı değildir ve döngünün işe yaradığının ölçüsü de bu oran değildir.
