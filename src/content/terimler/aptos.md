---
term: "Aptos"
tr: ""
aliases: []
category: aglar
subcategory: ""
level: ileri
short: "Varlıkları dilin tip sisteminde koruyan Move diline ve iyimser paralel yürütmeye dayanan blockchain ağı."
related: [move, resource-move, movevm, parallel-execution, proof-of-stake-pos]
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

Aptos, akıllı sözleşme güvenliğini dilin kendisine taşımayı hedefleyen bir blockchain ağıdır. Çıkış noktası şu gözlemdir: zincir üstündeki hataların büyük bölümü, bir varlığın yanlışlıkla kopyalanması ya da kaybolmasıdır. Aptos bunu çalışma zamanı kontrolüyle değil, tip sistemiyle engellemeyi seçer.

## Nasıl çalışır?

Sözleşmeler [[move|Move]] ile yazılır ve [[movevm|Move sanal makinesinde]] çalışır. Move'da varlıklar sıradan veri değil [[resource-move|kaynaktır]]: kopyalanamaz, sessizce yok edilemez, yalnızca bir yerden bir yere taşınabilir. Bir tokenı iki kez harcayan kod derlenmez bile.

Yürütme tarafında tercih iyimserdir. İşlemler, hangi veriye dokunacaklarını önceden bildirmeden paralel çalıştırılır; sonradan iki işlemin aynı veriyi değiştirdiği görülürse sonrakiler geri alınıp yeniden çalıştırılır. Sonuç, işlemler tek tek sırayla çalışmış gibi olur. Blok üretimi [[proof-of-stake-pos|proof of stake]] ile, yeni blokların geri alınamaz hâle gelmesi ise hızlı [[finality|kesinlik]] veren bir uzlaşma turuyla yapılır.

## Dikkat

Bedel iki başlıkta toplanır. Move ayrı bir dildir: yazıldığı tarih itibarıyla geliştirici havuzu, hazır kütüphane birikimi ve denetim pratiği [[solidity|Solidity]] tarafındakinden daha gençtir ve [[ethereum-virtual-machine-evm|EVM]] sözleşmeleri doğrudan taşınmaz. İyimser paralellik de bedavaya gelmez: aynı veriye yığılan yoğun yüklerde yeniden çalıştırma maliyeti artar ve kazanç azalır.
