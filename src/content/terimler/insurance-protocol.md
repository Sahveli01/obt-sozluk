---
term: "Insurance Protocol"
tr: ""
aliases: []
category: defi
subcategory: "Türevler"
level: orta
short: "Belirli bir olayın gerçekleşmesi hâlinde ödeme yapmayı taahhüt eden, sermayesi bir havuzda toplanan zincir üstü protokol."
related: [smart-contract-audit, liquidity-pool, governance, depeg, bad-debt, oracle]
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

Sigorta protokolü, zincir üstünde tanımlanmış belirli bir olay gerçekleşirse ödeme yapmayı taahhüt eden bir yapıdır. Kullanıcı bir prim öder ve karşılığında dar tanımlı bir kapsam alır: şu protokolün şu tarihe kadar hacklenmesi, şu stablecoin'in bağını kaybetmesi ([[depeg]]) gibi.

Ödemeyi yapacak parayı protokol üretmez. Sermaye, o riski üstlenmeyi kabul eden kişilerin bir havuza koyduğu paradan gelir; ödenen primler de bu kişiler arasında paylaşılır. Türkçede "sigorta" kelimesi hukuki bir kuruma işaret ettiği için bu protokoller genelde İngilizce adlarıyla anılır — aradaki fark yalnızca isimden ibaret değildir.

## Benzetme

Mahallenin yardımlaşma sandığı gibi. Herkes düzenli olarak sandığa katkı koyar; birinin başına iş gelince sandıktan ödenir. Üç şey buradan çıkar: sandıkta ne kadar para varsa o kadar ödenir, ödeme yapılıp yapılmayacağına sandığı yönetenler karar verir ve kimin hangi durumda başvurabileceği baştan yazılmış bir listeye bağlıdır.

## Nasıl çalışır?

Üç taraf vardır: poliçeyi alan kullanıcı, havuza sermaye koyan taraf ve olayın gerçekleşip gerçekleşmediğine karar veren mekanizma.

Karar mekanizması iki biçimde kurulur. **Parametrik** düzende ölçülebilir bir koşul tanımlanır ve koşulun sağlanıp sağlanmadığı bir veri kaynağından okunur ([[oracle]]); ödeme koşul sağlanınca kendiliğinden yapılır. **Değerlendirmeli** düzende talep insanlara gider: token sahiplerinin oyu ya da seçilmiş bir komite talebin kapsama girip girmediğine karar verir ([[governance|yönetişim]]).

## Dikkat

Bu yapı klasik sigortanın hukuki güvencesini taşımaz. Ödenmeyen bir talebi götürecek bir düzenleyici, sigorta fonu ya da mahkeme yoktur; elindeki tek şey protokolün kurallarıdır.

Üç somut kırılma noktası var. **Karar:** ödemeyi çoğu zaman bir oylama ya da komite onaylar; oy verenlerin parası da o havuzdadır, yani ödeme kararı onların aleyhinedir. **Kapsam:** poliçede "hack" ya da "kayıp" kelimesinin tanımı dardır; bir açıktan zarar görmüş olman o tanıma girdiğin anlamına gelmez. **Havuz:** ödeme sermayenin tamamıyla sınırlıdır. Aynı riski birçok kişi sigortalattıysa ve olay gerçekleşirse havuz tükenir; kalan taleplerin karşılığı yoktur.

Bir noktayı da atlamamak gerekir: sigorta protokolü de bir akıllı sözleşmedir. Denetlenmiş olması ([[smart-contract-audit]]) onu riskin dışında bırakmaz; havuzun kendisi de saldırıya açık bir yerdir.
