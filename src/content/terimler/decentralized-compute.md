---
term: "Decentralized Compute"
tr: "Dağıtık hesaplama"
aliases: ["decentralized compute", "dagitik hesaplama"]
category: yapay-zeka
subcategory: "Yapay zekâ ve blockchain"
level: orta
short: "Hesaplama gücünün tek bir bulut sağlayıcısından değil, bağımsız makine sahiplerinden oluşan bir pazardan alınması."
related: [depin, decentralized-ai, gpu, inference, verifiable-inference, decentralized-storage]
disambiguation: []
tags: []
status: taslak
reviewedBy: []
dateSensitive: true
sources: []
added: 2026-09-21
updated: 2026-09-22
---

## Nedir?

Bir yapay zekâ modelini eğitmek ya da çalıştırmak güçlü donanım ister ve bu donanım ağırlıkla birkaç büyük bulut sağlayıcısının elindedir. Dağıtık hesaplama, aynı işi tek bir sağlayıcıdan değil, makinesini kiraya veren çok sayıda bağımsız sahipten oluşan bir pazardan satın almayı önerir.

Arz tarafında boşta duran [[gpu|GPU]]'lar vardır: oyun bilgisayarları, küçük veri merkezleri, eski madencilik donanımı; bu donanımın bir kısmı [[depin|DePIN]] mantığıyla toplanır. Talep tarafında hesap gücü arayan geliştiriciler durur. Zincir arada eşleştirme, ödeme ve kayıt işini üstlenir.

## Benzetme

Yaz boyunca boş duran öğrenci yurtlarını konaklamaya açmak gibi: kapasite zaten var, eksik olan onu arayanla buluşturan bir kayıt sistemidir. Ama her yurdun konforu, konumu ve ne kadar süre açık kalacağı aynı değildir; ucuzluğun bedeli çoğu zaman budur.

## Nasıl çalışır?

Akış genellikle şöyledir: iş sahibi yapılacak işi ve ödeyeceği tutarı ilan eder, boşta makinesi olan sağlayıcılar işi üstlenir, sonuç teslim edilince ödeme serbest kalır. Ödemenin şartlı tutulması ve kimin ne yaptığının kaydı zincirde durur; işin kendisi [[off-chain|zincir dışında]], sağlayıcının makinesinde çalışır.

Zor kısım üç başlıkta toplanır. **Doğrulama:** sağlayıcı işi gerçekten yaptı mı, yoksa gelişigüzel bir sonuç mu döndürdü? **Gecikme:** birbirinden uzak makineler arasında veri taşımak, aynı raftaki kartlar arasında taşımaktan çok daha yavaştır. **Güvenilirlik:** bir sağlayıcı işin ortasında makineyi kapatabilir ve kimse ona bunu yasaklayamaz.

## Dikkat

Teşvikle donanım toplamak arz problemini çözer, hizmet kalitesi problemini çözmez. Bir bulut sağlayıcısından aldığın şey yalnızca kart değildir; yanında bir çalışma sözü, destek ve hızlı bir iç ağ gelir. Dağıtık bir pazarda bunların her birini protokolün ayrıca inşa etmesi gerekir.

Bu yüzden her iş bu modele eşit oturmaz. Birbirinden kopuk, gerekirse yeniden denenebilir küçük işler — tek bir [[inference|çıkarım]], bir görüntü üretimi — iyi uyar. Onlarca makinenin aynı anda ve düşük gecikmeyle konuşmasını gerektiren büyük ölçekli eğitim ise yazıldığı tarih itibarıyla hâlâ zor bir hedeftir.

Sağlayıcının işi doğru yaptığını kanıtlama sorunu da burada durur ve [[verifiable-inference|doğrulanabilir çıkarım]] ile aynı yere çıkar.
