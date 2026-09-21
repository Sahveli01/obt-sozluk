---
term: "Layer 1"
tr: "Katman 1"
aliases: ["katman 1", "l1", "ana zincir"]
category: temeller
subcategory: "Temel kavramlar"
level: orta
short: "Kendi konsensüsünü ve güvenliğini kendisi sağlayan temel blockchain ağı."
related: [layer-0, layer-2, consensus-mechanism, scalability, bitcoin]
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

Layer 1, güvenliğini başka bir zincirden ödünç almayan temel ağdır. İşlemleri kendi doğrulayıcıları işler, sırayı kendi [[consensus-mechanism|konsensüs mekanizması]] belirler ve nihai kayıt kendi bloklarında tutulur. [[bitcoin|Bitcoin]] ve [[ethereum|Ethereum]] bu tanımın karşılığıdır.

Terim ancak [[layer-2|Layer 2]] çözümleri yaygınlaştıktan sonra anlam kazandı: bir zincirin "üstüne" başka bir katman çıkınca alttakine bir isim gerekti. Bu yüzden eski metinlerde aynı ağlar için yalnızca "blockchain" ya da "ana zincir" denildiğini görürsün.

## Nasıl çalışır?

Bir Layer 1'in üstlendiği iş üç başlıkta toplanır. **Yürütme**: işlemleri çalıştırıp yeni durumu hesaplar. **Konsensüs**: hangi işlemin hangi sırayla geçerli olduğuna karar verir. **Veri erişilebilirliği**: kayıtları herkesin indirip doğrulayabileceği biçimde saklar.

Üçünü birden tek bir katmanda yapmak, güvenliği toplar ama [[blockchain-trilemma|trilemmanın]] sıkıştırdığı yerdir: her [[node]] her işlemi tekrar işlediği için kapasite sınırlıdır. Bu yüzden bugünkü yaygın yaklaşım, yürütmenin bir kısmını üst katmanlara devredip Layer 1'i mutabakat ve veri katmanı olarak konumlandırmaktır.

Bu bölünme bir zinciri gereksiz kılmaz, rolünü değiştirir. Üst katmanlar işlemleri kendi aralarında toplar ama sonucu Layer 1'e yazmak zorundadır; anlaşmazlık çıktığında başvurulacak nihai kayıt hâlâ oradadır.

## Dikkat

"Layer 1" bir kalite işareti değil, mimarideki konumun adıdır. Bir ağın Layer 1 olması onu daha güvenli ya da daha merkeziyetsiz yapmaz; kendi güvenliğini kendisi sağladığı için o güvenliğin ne kadar güçlü olduğu tamamen doğrulayıcı sayısına ve dağılımına bakar.
