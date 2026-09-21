---
term: "Container"
tr: "Kapsayıcı"
aliases: ["konteyner", "kapsayici"]
category: araclar
subcategory: "Derleme ve dağıtım süreci"
level: orta
short: "Uygulamayı kendi dosya sistemiyle yalıtılmış biçimde çalıştıran, işletim sistemi çekirdeğini makineyle paylaşan hafif paket."
related: [docker, docker-image, virtual-machine-bilgisayar, operating-system, environment]
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

Konteyner, bir uygulamanın kendi dosya sistemi, kendi kütüphaneleri ve kendi ağ ayarlarıyla, aynı makinedeki diğer işlerden yalıtılmış olarak çalışan hâlidir. İçeriden bakıldığında ayrı bir bilgisayar gibi görünür; dışarıdan bakıldığında makinenin işletim sistemi üzerindeki sıradan bir süreçtir. Türkçede "kapsayıcı" denir, konuşma dilinde "konteyner" daha çok tutunmuştur.

## Benzetme

Nakliye konteyneri gibi. İçine ne koyduğun sana kalmış, ama dış ölçüleri, kilidi ve tutamakları standarttır; liman da vinç de gemi de içindekini bilmeden onu taşıyabilir. Değeri içindekinden değil, her yerde aynı biçimde taşınabilmesinden gelir.

## Nasıl çalışır?

Konteyner bir [[docker-image|imajdan]] başlatılır: imaj değişmez şablondur, konteyner o şablonun çalışan örneğidir ve aynı imajdan onlarca konteyner açılabilir. Yalıtımı [[operating-system|işletim sistemi]] sağlar; süreçler, dosya sistemi ve ağ ayrı görünür, ama hepsi makinenin tek çekirdeğini paylaşır.

Asıl ayrım burada. Bir [[virtual-machine-bilgisayar|sanal makine]] kendi işletim sistemini baştan çalıştırır, bu yüzden çok daha fazla yer kaplar ve açılması dakikaları bulabilir. Konteyner çekirdeği paylaştığı için çok daha küçük kalır ve saniyeler içinde başlar. Buna karşılık sanal makinenin yalıtımı daha güçlüdür ve ana makineden bambaşka bir işletim sistemi çalıştırabilir; konteyner ise çekirdekle uyumlu olmak zorundadır. Birden çok müşterinin kodunu aynı donanımda çalıştıran yerlerde bu tercih ciddi bir güvenlik kararıdır.

## Dikkat

Konteyner "küçük sanal makine" değildir: içinde tam bir işletim sistemi çalışmaz, çoğu zaman tek bir süreç çalışır ve o süreç bittiğinde konteyner de biter. Yalıtım mutlak da değildir; çekirdek paylaşıldığı için çekirdekteki bir açık ana makineye uzanabilir. Bu yüzden hiç güvenilmeyen kodu yalnızca konteynere koyarak güvende saymak yanlıştır.
