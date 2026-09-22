---
term: "Oracle"
tr: ""
aliases: []
category: akilli-sozlesmeler
subcategory: "Dış dünya ve verimlilik"
level: orta
short: "Zincir dışındaki bir bilgiyi zincire yazıp akıllı sözleşmelerin okuyabileceği hâle getiren hizmet."
related: [deterministic-execution, price-feed, oracle-manipulation, smart-contract, off-chain, chainlink]
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

Bir [[smart-contract|akıllı sözleşme]] dolar kurunu, bir maçın skorunu ya da bir kargonun teslim edilip edilmediğini kendi başına öğrenemez. İnternete çıkamaz. Oracle, bu bilgiyi dışarıdan alıp zincire yazan ve sözleşmelerin okumasına açan hizmettir.

Bu kısıt bir eksiklik değil, bilinçli bir tasarım sonucudur: [[deterministic-execution|determinizm]]. Bir işlemi ağdaki her [[node|node]] baştan çalıştırır ve hepsinin aynı sonuca varması gerekir. Node'lar kendi başlarına internete çıksaydı her biri saniyeler farkla başka bir cevap alır, ağ da hangi sonucun doğru olduğunda anlaşamazdı.

"Oracle" sektörde İngilizce kullanılır; Türkçede yerleşmiş bir karşılığı yok.

## Benzetme

Büyük bir sınav salonu düşün. Herkes aynı kitapçığı aynı kurallarla çözüyor ve kimse telefonuna bakamıyor. Bir soruda baskı hatası çıktığında çözüm "herkes doğrusunu kendi araştırsın" olamaz; o zaman salondan yüzlerce farklı cevap çıkar. Görevli salonun ortasına gelir, düzeltmeyi bir kez yüksek sesle okur, herkes aynı cümleyi kâğıdına yazar.

Oracle o görevlidir: dışarıyı içeri taşıyan tek ağız odur ve taşıdığı bilgiyi herkes aynı hâliyle alır.

## Nasıl çalışır?

Akış hep aynı yöndedir. Veri önce [[off-chain|zincir dışında]] toplanır, sonra sıradan bir [[transaction|işlemle]] zincire yazılır. Sözleşme okuduğunda artık dışarıya değil, zincirde duran bir değere bakar — bu yüzden her node aynı şeyi görür.

Ciddi oracle ağları bu işi tek bir sunucuya bırakmaz. Birbirinden bağımsız birçok operatör aynı veriyi kendi kaynağından alır, cevaplar birleştirilerek tek bir sonuca indirilir; böylece tek bir operatörün yanlış ya da kötü niyetli cevabı sonucu tek başına belirleyemez. [[chainlink|Chainlink]] bu modelin en bilinen örneğidir.

Fiyat verisi için kurulmuş özel hâli [[price-feed|price feed]]'dir.

## Dikkat

Oracle, [[trustless|trustless]] bir sistemdeki en büyük deliktir. Sözleşmenin kodunu satır satır okuyup ikna olabilirsin; ama o kod dışarıdan gelen bir sayıya göre karar veriyorsa güvenin bir kısmı artık kodda değil, o sayıyı üreten yapıdadır.

Daha önemlisi: sözleşme gelen verinin doğru olup olmadığını sorgulamaz. Yanlış veri gelirse yanlışı sadakatle uygular — kimsenin teminatını gereksiz yere satar, hak etmeyene ödeme yapar. Bunu bilerek tetikleyen saldırılar [[oracle-manipulation|oracle manipülasyonu]] başlığındadır.
