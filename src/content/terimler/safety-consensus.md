---
term: "Safety (Consensus)"
tr: ""
aliases: []
category: konsensus
subcategory: "Kesinlik ve güvenlik özellikleri"
level: ileri
short: "Konsensüste birbiriyle çelişen iki sonucun asla ikisi birden kesinleşmemesi güvencesi."
related: [liveness, byzantine-fault-tolerance-bft, deterministic-finality, finality, inactivity-leak, consensus-mechanism]
disambiguation: [memory-safety, ai-safety]
tags: []
status: taslak
reviewedBy: []
dateSensitive: false
sources: []
added: 2026-09-21
updated: 2026-09-22
---

## Nedir?

Dağıtık sistemler teorisinde bir protokolün iki temel özelliğinden biri. **Safety**, kısaca "kötü bir şey asla olmaz" der: birbiriyle çelişen iki sonuç aynı anda geçerli sayılmaz.

Blok zincirindeki karşılığı somuttur. Aynı yükseklikteki iki farklı blok hiçbir zaman ikisi birden [[finality|kesinleşmez]]; kesinleşmiş bir işlem geri alınmaz. Güvenlik bozulduğunda ortaya çıkan tablo bir yavaşlama değildir — iki grup kullanıcı, birbirini yalanlayan iki bakiyeye bakıyordur.

Türkçede hem "safety" hem "security" güvenlik diye çevrilir. İkisi aynı şey olmadığı için bu terim İngilizce yazılır.

## Benzetme

Yeter sayı kuralı olan bir kurul gibi. Toplantı ancak üyelerin belirli bir kısmı salondayken karar alabilir. Kural, ortada olmayanların adına karar verilmesini engeller: salondan iki farklı karar çıkmaz. Bedeli de aynı kuraldır — yeterince üye gelmediği gün kurul hiçbir karar alamaz ve dosyalar bekler.

## Nasıl çalışır?

Güvenlik hiçbir zaman tek başına istenmez; yanında [[liveness|canlılık]] vardır ve ikisi bir yere kadar birlikte sağlanır. Ağ ikiye bölündüğünde, yani düğümlerin bir kısmı diğer kısmına ulaşamadığında, tasarımcı seçmek zorunda kalır:

- **Güvenliği koru, ilerlemeyi bırak.** Kesinleştirme eşiği toplanmadığı için zincir yeni blok kesinleştirmez. Yanlış sonuç çıkmaz ama bölünme sürdükçe sistem bekler ([[deterministic-finality|deterministik kesinlik]] bu tarafta durur).
- **İlerlemeyi koru, güvenliği ertele.** Her iki taraf da blok üretmeye devam eder. Bölünme kapandığında dallardan biri elenir ve o dalda "olmuş" görünen işlemler geri döner ([[chain-reorganization-reorg|reorg]]).

Uzun süren bölünmelerde ilk seçeneği yapan ağların bazıları, çevrimdışı kalan tarafın ağırlığını kademeli olarak azaltan düzeneklerle kilidi açar ([[inactivity-leak|inactivity leak]]).

## Dikkat

Güvenlik koşulludur. "Doğrulayıcıların belirli bir kısmından fazlası kuralları çiğnemediği sürece" diye başlayan bir cümledir; o varsayım çökerse özellik de çöker. Bir protokolün güvenli olduğunu söylemek, onun her koşulda doğru çalışacağını söylemek değildir.

Adı karıştırılmaya açıktır: programlamadaki [[memory-safety|bellek güvenliği]] bir programın belleği yanlış kullanmamasıdır, [[ai-safety|AI safety]] bir modelin zarar vermemesidir. Konsensüsteki safety ise yalnızca sonucun tutarlılığıyla ilgilidir; kodun hatasız olmasıyla değil.
