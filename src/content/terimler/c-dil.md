---
term: "C (Dil)"
tr: ""
aliases: ["C dili"]
category: programlama
subcategory: "Diller ve formatlar"
level: orta
short: "Donanıma yakın çalışan, belleği doğrudan programcının yönettiği, sonraki birçok dilin sözdizimini biçimlendirmiş dil."
related: [pointer, memory-management, cpp, memory-safety, compiler, rust]
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

C, donanıma yakın çalışan programlar yazmak için tasarlanmış bir dildir. İşletim sistemi çekirdekleri, aygıt sürücüleri, gömülü cihaz yazılımları ve başka dillerin yorumlayıcıları C ile yazılır. Dilin kendisi küçüktür: az sayıda anahtar kelime, küçük bir standart kütüphane ve neredeyse hiç gizli davranış. Yazdığın satırın makinede kabaca neye dönüşeceğini tahmin edebilirsin.

Bedeli, işi senin yapmandır. Belleği ayırmak ve bırakmak sana aittir; bir dizinin sınırını aşıp aşmadığını dil kontrol etmez. [[pointer|İşaretçi]] kavramı çoğu kişinin karşısına ilk kez burada çıkar ve dili zorlaştıran şey de, ne olup bittiğini görünür kılan şey de odur.

Süslü parantezler, `if` ve `for` yazımı, satır sonundaki noktalı virgül sonraki birçok dile miras kaldı; bu yüzden C okuyabilen biri kendini başka pek çok dilde yarı yarıya evinde hisseder.

## Nasıl çalışır?

Kaynak kod önce ön işlemciden geçer — `#include` gibi satırlar burada çözülür. Sonra [[compiler|derleyici]] her dosyayı ayrı ayrı çevirir ve bağlayıcı (linker) çıkan parçaları tek bir çalıştırılabilir dosyada birleştirir. Üretilen dosya belirli bir işletim sistemine ve işlemci mimarisine aittir; aynı kaynağı başka bir hedef için yeniden derlemek gerekir.

## Dikkat

C ile [[cpp|C++]] ayrı dillerdir. C kodunun büyük kısmı bir C++ derleyicisinden geçer ama tersi doğru değildir ve ikisinin önerdiği çözüm biçimleri birbirinden uzaklaşmıştır; "C/C++" yazımı bu farkı gizlediği için yanıltıcıdır.

Bellek hatalarının çoğu sessizdir: program bazen çöker, bazen yanlış veriyle çalışmaya devam eder. Bu hata sınıfı yeterince yaygın olduğu için [[rust|Rust]] gibi diller [[memory-safety|bellek güvenliğini]] doğrudan dilin içinde çözmeyi hedefler.
