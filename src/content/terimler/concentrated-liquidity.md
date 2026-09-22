---
term: "Concentrated Liquidity"
tr: "Yoğunlaştırılmış likidite"
aliases: []
category: defi
subcategory: "Takas ve likidite"
level: ileri
short: "Likiditeyi bütün fiyat skalasına yaymak yerine seçilen dar bir fiyat aralığına koyma yöntemi."
related: [liquidity-pool, liquidity-provider-lp, impermanent-loss, automated-market-maker-amm, price-impact, lp-token]
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

Klasik bir [[liquidity-pool|havuzda]] yatırdığın sermaye bütün fiyatlara yayılır. Fiyatın pratikte hiç uğramayacağı bölgelerde bile likidite bekler; yani sermayenin büyük kısmı boş durur.

Yoğunlaştırılmış likidite bu dağılımı senin seçmene izin verir: "sermayem yalnızca şu iki fiyat arasında çalışsın" dersin. Aynı parayla o aralıkta çok daha derin bir piyasa kurulur, dolayısıyla o aralıkta yapılan takasların ücretinden aldığın pay büyür.

## Benzetme

Bahçenin tamamını fışkırtma başlıkla sulamakla, yalnızca fidelerin bulunduğu sıraya damlama hattı çekmek arasındaki fark gibi. Aynı su dar bir şeride verildiğinde oradaki etkisi kat kat fazladır. Ama fideler başka bir sıraya taşınırsa hat olduğu yerde kalır ve sulayacak bir şey bulamaz.

## Nasıl çalışır?

Fiyat senin aralığının içindeyken pozisyonun iki varlıktan oluşur ve fiyat aralıkta gezindikçe bu bileşim kayar: bir sınıra yaklaştıkça elinde bir varlıktan daha çok, diğerinden daha az birikir. Her pozisyonun kendi aralığı olduğu için pay, bölünebilir bir [[lp-token|LP token]] yerine çoğu zaman devredilebilir bir NFT olarak tutulur.

## Dikkat

Fiyat aralığının dışına çıkarsa pozisyonun tamamen tek varlığa döner ve o andan itibaren ücret kazanmayı durdurur: takaslar artık senin likiditenin bulunduğu yerde geçmiyordur.

Bu düzenek [[impermanent-loss|geçici kaybı]] yumuşatmaz, keskinleştirir. Aynı fiyat hareketinde dar aralıklı bir pozisyonun uğradığı fark, aynı sermayenin geniş aralıkta uğrayacağından büyüktür; çünkü havuz senin adına yaptığı alım satımı küçük bir bölgeye sıkıştırmıştır. Aralığı takip edip taşımak da her seferinde işlem ücreti demektir.
