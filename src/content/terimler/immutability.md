---
term: "Immutability"
tr: "Değiştirilemezlik"
aliases: ["degistirilemezlik", "degismezlik"]
category: temeller
subcategory: "Temel kavramlar"
level: baslangic
short: "Zincire yazılmış bir kaydın sonradan sessizce değiştirilememesi ya da silinememesi."
related: [blockchain, block, hash-function, finality, censorship-resistance]
disambiguation: []
tags: []
status: taslak
reviewedBy: []
dateSensitive: false
sources: []
added: 2026-09-21
updated: 2026-09-21
---

## Nedir?

Değiştirilemezlik, bir kaydın zincire girdikten sonra fark edilmeden düzeltilememesidir. Kaydı fiziksel olarak değiştirmek imkânsız değildir; imkânsız olan, değiştirip kimseye belli etmemektir.

Bunu sağlayan şey [[hash-function|hash fonksiyonudur]]. Her [[block|blok]] bir öncekinin özetini taşır. Tek bir harfi değiştirsen özet baştan aşağı başkalaşır, sonraki bloktaki kayıt tutmaz ve zincir görünür biçimde kopar. Değişikliği gizlemek için o bloktan sonraki bütün blokları yeniden üretmen, üstelik bunu ağın geri kalanından daha hızlı yapman gerekir.

## Benzetme

Kurşun kalemle deftere yazmakla ıslak betona yazmak arasındaki fark gibi. Betonu kırıp yeniden dökebilirsin ama yaması belli olur; üstelik aynı betondan mahallede kırk kopya daha varsa yamanı kimseye yutturamazsın.

## Dikkat

Değiştirilemezlik doğruluk garantisi değildir. Zincire yanlış, eksik ya da kötü niyetli bir veri yazıldıysa o veri de aynı sağlamlıkla orada kalır — hatta artık silinemez.

Bir de mutlak değildir. Yeterince büyük bir çoğunluk anlaşırsa geçmiş değiştirilebilir; küçük ve yeni ağlarda bu maliyet şaşırtıcı derecede düşüktür. Bir kaydın ne kadar kalıcı olduğu, onu koruyan ağın ne kadar güçlü olduğuna bağlıdır.
