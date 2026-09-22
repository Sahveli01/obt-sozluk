---
term: "Liveness"
tr: "Canlılık"
aliases: ["canlılık"]
category: konsensus
subcategory: "Kesinlik ve güvenlik özellikleri"
level: ileri
short: "Sistemin durmaması; geçerli bir işlemin eninde sonunda işlenmesi ve zincirin ilerlemeye devam etmesi."
related: [safety-consensus, inactivity-leak, leader-election, censorship-resistance, consensus-mechanism, validator]
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

**Liveness**, güvenliğin ikiz kardeşidir ve tam tersini söyler: "iyi bir şey eninde sonunda olur." Zincir yeni blok üretmeye devam eder, geçerli bir işlem sonunda bir bloğa girer, bekleyen karar sonunda verilir.

Canlılığı olmayan bir sistem yanlış bir şey yapmaz — hiçbir şey yapmaz. Kullanıcı için ikisi arasındaki fark küçüktür: parası ne kaybolmuştur ne de hareket ediyordur.

Türkçede "canlılık" karşılığı dağıtık sistem metinlerinde kullanılır.

## Nasıl çalışır?

Canlılık üç yerden bozulur.

**Üretici gelmiyor.** Sırası gelen [[validator|doğrulayıcı]] çevrimdışıysa o aralık boş geçer. Tasarımlar buna zaman aşımı ve sıranın otomatik olarak bir sonrakine devredilmesiyle cevap verir ([[leader-election|lider seçimi]]).

**Ağ bölünmüş.** Karar için gereken çoğunluk bir araya gelemiyorsa zincir ilerlemeyi durdurur. Bu bir arıza değil, bilinçli bir tercihtir: [[safety-consensus|güvenlik]] uğruna canlılıktan vazgeçilmiştir. Bölünme uzarsa bazı ağlar, katılmayan tarafın ağırlığını kademeli azaltarak eşiği yeniden ulaşılabilir kılar ([[inactivity-leak|inactivity leak]]).

**İşlem dışarıda bırakılıyor.** Zincir blok üretiyor ama belirli bir işlem hiçbirine alınmıyorsa, o kullanıcı için canlılık fiilen yoktur. Bu yüzden canlılık ile [[censorship-resistance|sansür direnci]] aynı sorunun iki ucudur.

## Dikkat

Canlılık "hemen" demez, "eninde sonunda" der. İşlemin ne kadar beklediği bir performans meselesidir; hiç işlenmeyeceği kesinleştiğinde mesele canlılığa dönüşür. Ağ tıkalı olduğu için ücreti düşük bir işlemin beklemesi, bu anlamda canlılık ihlali değildir.

İki özelliği birden mutlak biçimde isteyemezsin. Bir ağın "hem asla durmaz hem asla çelişmez" diye anlatılması, bölünme hâlinde hangisinden vazgeçtiğinin söylenmemiş olması demektir — ve her tasarım bu sorunun bir cevabını vermek zorundadır.
