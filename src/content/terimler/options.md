---
term: "Options"
tr: "Opsiyon"
aliases: ["opsiyon"]
category: defi
subcategory: "Türevler"
level: orta
short: "Bir varlığı belirli bir fiyattan alma ya da satma hakkı veren, ama bu hakkı kullanma zorunluluğu getirmeyen sözleşme."
related: [derivatives, hedging, volatility, futures, delta-neutral-strategy]
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

Opsiyon, bir varlığı önceden belirlenmiş bir fiyattan alma ya da satma **hakkı** veren sözleşmedir. Hak, zorunluluk değildir: işine gelmezse kullanmazsın.

Dört kavramla tanımlanır. **Kullanım fiyatı**, hakkın geçerli olduğu fiyattır. **Vade**, hakkın son kullanma tarihidir. **Prim**, hakkı satın almak için ödenen bedeldir. Alma hakkı veren sözleşmeye alım opsiyonu (call), satma hakkı verene satım opsiyonu (put) denir.

Sözleşmenin iki tarafı aynı konumda değildir. Alan taraf hakkı satın alır; satan taraf primi alır ve karşılığında karşı taraf hakkını kullanırsa yükümlülüğü yerine getirmeyi kabul eder.

## Benzetme

Bir eve kapora bırakmak gibi. Kapora, evi belirli bir fiyattan alma hakkını belirli bir süre için sana saklar. Vazgeçersen kaybın kaporayla sınırlıdır. Almaya karar verirsen, ev bu arada ne kadar pahalanmış olursa olsun anlaşılan fiyattan alırsın. Ev sahibi ise o süre boyunca evi başkasına satamaz; kapora onun bu beklemeye razı olmasının bedelidir.

## Dikkat

Alan ile satan arasındaki asimetri bu terimin en önemli kısmıdır. **Alan** taraf için kayıp ödenen primle sınırlıdır — en kötü ihtimalle hak kullanılmadan söner. **Satan** taraf için böyle bir sınır yoktur; primi almıştır ama yükümlülüğü fiyat nereye giderse oraya kadar sürer ve zarar aldığı primin çok üstüne çıkabilir.

İkinci nokta zaman değeridir. Opsiyonun fiyatında, vadeye kalan süre için ödenen bir pay vardır ve o pay vade yaklaştıkça erir. Dayanak varlığın fiyatı hiç hareket etmese bile opsiyon her gün biraz değer kaybeder.

Opsiyon fiyatlaması ayrıca dayanak varlığın beklenen [[volatility|oynaklığına]] bağlıdır; bu yüzden fiyat, yalnızca "yukarı mı gidecek" sorusunun cevabı değildir.
