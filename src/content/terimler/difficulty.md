---
term: "Difficulty"
tr: "Zorluk"
aliases: ["zorluk", "madencilik zorluğu"]
category: konsensus
subcategory: "Madencilik"
level: orta
short: "Bir bloğun geçerli sayılabilmesi için başlığının özetinin ne kadar küçük çıkması gerektiğini belirleyen ayar."
related: [difficulty-adjustment, mining, hashrate, proof-of-work-pow, block-time, hash]
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

Zorluk, bir bloğun geçerli sayılması için başlığının [[hash|özetinin]] ne kadar küçük olması gerektiğini söyleyen ayardır. Protokol bir hedef belirler; [[mining|madencinin]] bulduğu özet bu hedefin altındaysa blok geçerlidir, üstündeyse hiçbir işe yaramaz ve arama sürer.

Hedef daraldıkça uygun çıktı bulmak zorlaşır, çünkü rastgele bir özetin o dar aralığa düşme ihtimali küçülür. Zorluk bu ilişkiyi tersten ifade eder: zorluk büyüdükçe hedef daralır, dolayısıyla ortalama deneme sayısı artar.

## Benzetme

Eleğin gözü gibi. Elek ne kadar ince olursa üstünden o kadar az tane geçer — eleğe dökülen tanelerin hızı hiç değişmese bile. Her deneme eline rastgele irilikte bir tane verir; geçerli sayılan, yalnızca gözden geçecek kadar küçük olanıdır.

## Nasıl çalışır?

Zorluk bir madencinin tercihi değildir. Ağdaki herkes aynı anda aynı zorluğu kullanır ve bu değer blok başlığına yazıldığı için her düğüm bağımsız olarak doğrular. Kendine daha kolay bir hedef seçip blok üretmek mümkün değildir; böyle bir blok, onu üreten ne kadar güçlü olursa olsun reddedilir.

Bu, [[proof-of-work-pow|iş ispatının]] neden ölçülebilir bir maliyet ürettiğinin de cevabıdır: zorluk, bir bloğun ortalama kaç denemeye mal olduğunu herkesin hesaplayabildiği bir sayıya çevirir. Zorluğun zaman içinde nasıl değiştiğini ise [[difficulty-adjustment|zorluk ayarı]] belirler.

## Dikkat

Zorluk, ağa yönelen gücün sebebi değil sonucudur. Protokol zorluğu yükselttiği için madenciler daha çok donanım kurmaz; daha çok donanım kurulduğu için zorluk yükselir. Bu yön karıştırıldığında zorluk, ağın kendi kendine sıktığı bir vida gibi görünür — oysa yalnızca dışarıdan gelen [[hashrate|hash gücüne]] verilen bir tepkidir.

Zorluk ile [[transaction-fee|işlem ücreti]] de karıştırılır. Zorluk bloğun tamamı için geçerli tek bir kuraldır ve tek tek işlemlerin maliyetiyle ilgisi yoktur: ağ tıkandığında ücretler yükselir, zorluk bundan etkilenmez.
