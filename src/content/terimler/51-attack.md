---
term: "51% Attack"
tr: "%51 Saldırısı"
aliases: []
category: guvenlik
subcategory: "Ekonomik ve protokol saldırıları"
level: orta
short: "Blok üretme gücünün çoğunluğunu ele geçirip yakın geçmişi yeniden yazabilme durumu."
related: [double-spending, finality, chain-reorganization-reorg, proof-of-work-pow, hashrate, confirmation]
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

Bir blok zincirinde hangi geçmişin geçerli olduğuna, arkasında en çok üretim gücü birikmiş zincir karar verir. **%51 saldırısı**, bu gücün yarısından fazlasının tek bir tarafın eline geçmesi ve o tarafın son blokları kendi istediği gibi yeniden dizebilmesidir.

Adı biraz yanıltıcıdır: %51 keskin bir eşik değildir. Oran büyüdükçe saldırının tutma ihtimali artar; altında da denenebilir.

## Benzetme

Karla kaplı bir arazide yürüyen bir kalabalığı düşün. Ayak izleri en çok hangi yönde birikmişse yol orası sayılır; sonradan gelen herkes o izi takip eder. Yeterince kalabalık bir grupla gidip başka bir yönde daha derin bir iz açarsan, bir süre sonra herkes senin izini asıl yol sanar.

Ama iz açmak, yol kenarındaki evlerin kapısını açmaz. Yolun hangisi olduğunu değiştirebilirsin; evlerin kilidi bambaşka bir şeye bağlıdır.

## Nasıl çalışır?

Saldırganın **yapabildikleri** dardır ama ciddidir:

- Kendi gönderdiği bir işlemi geri alabilir. Karşı taraf ödemeyi aldığını görüp malı teslim ettikten sonra o işlemi içermeyen bir zincir öne geçerse para saldırgana döner; [[double-spending|çifte harcama]] budur.
- Seçtiği işlemleri bloklarına hiç almayarak sansürleyebilir.
- Blokların sırasını kendi lehine değiştirebilir.

**Yapamadıkları** ise daha uzundur ve en çok burası karıştırılır:

- Başkasının parasını alamaz. Her işlem sahibinin özel anahtarıyla imzalanır ve blok üretme gücü imza atma yetkisi vermez. İmzasız bir transfer, ağın tamamı tarafından geçersiz sayılır.
- Protokol kurallarını değiştiremez. Kural dışı bir bloğu kabul ettiremez; diğer node'lar onu basitçe reddeder. Kuralı değiştirmek tamamen ayrı bir şeydir ([[hard-fork|hard fork]]).
- Uzak geçmişi yeniden yazamaz. Yeniden yazma, ancak üzerine yeterince blok birikmemiş yakın geçmiş için gerçekçidir.

## Dikkat

Bu yüzden onay beklemek boş bir formalite değildir. [[confirmation|Onay]] sayısı arttıkça o işlemi içeren zinciri geride bırakmanın maliyeti hızla büyür ve işlem bir noktada pratikte geri alınamaz hâle gelir ([[finality|kesinlik]]).

Savunma esas olarak ekonomiktir: maliyeti kazancından büyük kaldığı sürece saldırı anlamsızdır. Bu maliyet küçük ağlarda düşüktür — [[hashrate|hash gücü]] ya da kilitli teminat ne kadar azsa çoğunluğu kiralamak o kadar ucuzdur. Küçük zincirlerde yaşanan [[chain-reorganization-reorg|yeniden düzenlemeler]] bunun somut örneğidir.

Kullanıcı tarafında karşılığı basit: küçük ve yeni bir ağda büyük bir transferi tek onayla kabul etme.
