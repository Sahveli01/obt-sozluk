---
term: "ASIC"
tr: ""
aliases: []
category: konsensus
subcategory: "Madencilik"
level: orta
short: "Tek bir işi olabilecek en verimli biçimde yapmak üzere üretilmiş, başka hiçbir işte kullanılamayan özel amaçlı çip."
related: [mining, hashrate, miner, gpu, proof-of-work-pow, decentralization]
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

ASIC, "application-specific integrated circuit" ifadesinin kısaltmasıdır: belirli bir uygulama için tasarlanmış tümleşik devre. Kısaltma Türkçeye çevrilmeden kullanılır; açılımının karşılığı ("uygulamaya özel tümleşik devre") elektronik metinlerinde geçse de sektörde kimse böyle demez.

Genel amaçlı bir işlemci her türlü komutu çalıştırabilsin diye tasarlanır. ASIC'te böyle bir esneklik yoktur: devre tek bir hesabı yapacak şekilde yerleştirilmiştir ve o hesabın dışında hiçbir işe yaramaz. [[mining|Madencilikte]] ASIC, ağın kullandığı özet fonksiyonunu hesaplamak için üretilmiş çip anlamına gelir.

## Benzetme

Yalnızca simit pişirmek için yapılmış bir fırın gibi. Ev fırınında börek de pişer, kek de, simit de — hepsi ağır ağır. Simit fırını başka hiçbir şey pişiremez, buna karşılık saatte çıkardığı simit sayısı kıyaslanacak gibi değildir. Mahalle simitten vazgeçerse elde başka işe yaramayan bir demir yığını kalır.

## Nasıl çalışır?

Genel amaçlı bir işlemcinin harcadığı enerjinin çoğu asıl hesaba gitmez: komutu okumak, çözmek, veriyi yerinden alıp yerine koymak da pay alır. ASIC tasarımında bu katmanlar atılır ve özet fonksiyonunun adımları doğrudan devreye gömülür. Sonuç, aynı enerjiyle kat kat fazla deneme yapabilmektir; [[hashrate|hash gücü]] bu yüzden [[gpu|genel amaçlı donanımın]] yetişemeyeceği seviyelere çıkar.

Bunun bedeli esnekliktir. Ağ özet fonksiyonunu değiştirirse çip bir daha kullanılamaz, başka bir ağda da çalışmaz — çünkü başka bir hesabı yapmayı bilmez.

## Dikkat

ASIC'lerin varlığı [[proof-of-work-pow|iş ispatı]] madenciliğini sermaye yoğun bir işe çevirir: rekabet edebilmek için önceden büyük bir donanım yatırımı yapmak ve bunu cihaz eskimeden çıkarmak gerekir. Bu, [[miner|madenci]] olabilecek kişilerin çemberini fiilen daraltır.

Ayrı bir yoğunlaşma noktası üretim tarafındadır. Bu çipleri tasarlatıp ürettirebilen şirket sayısı azdır; kimin hangi cihaza ne zaman erişebildiği birkaç şirketin kararına bağlı kalır.

Bazı ağlar bunu dengelemek için ASIC üretmesi zor özet fonksiyonları seçer; genellikle bol bellek isteyen tasarımlardır, çünkü bellek çip üzerinde ucuza çoğaltılamaz. Bu kalıcı bir çözüm değildir: ödül yeterince büyüdüğünde o fonksiyon için de özel donanım üretmek kârlı hâle gelir.

Son olarak ASIC yalnızca madenciliğe ait bir terim değildir. Telefonlardan ağ cihazlarına kadar pek çok üründe özel amaçlı çipler bulunur; kavram elektronikten gelir.
