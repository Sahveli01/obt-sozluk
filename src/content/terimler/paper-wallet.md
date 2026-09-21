---
term: "Paper Wallet"
tr: "Kâğıt cüzdan"
aliases: ["kagit cuzdan"]
category: cuzdanlar
subcategory: "Cüzdan türleri"
level: orta
short: "Özel anahtarın ve adresin bir kâğıda basılıp saklandığı, bugün yaygın olarak kullanılmayan saklama yöntemi."
related: [cold-wallet, private-key, seed-phrase, wallet-address, hd-wallet-bip-32]
disambiguation: []
tags: []
status: taslak
reviewedBy: []
dateSensitive: true
sources: []
added: 2026-09-21
updated: 2026-09-21
---

## Nedir?

Kâğıt cüzdan, bir [[private-key|özel anahtarın]] ve ona karşılık gelen [[wallet-address|adresin]] — çoğunlukla QR kodlarıyla birlikte — bir kâğıda basılıp saklanmasıdır. Anahtar hiçbir cihazda durmadığı için uzaktan erişilemez; bu yüzden erken dönemde [[cold-wallet|soğuk saklamanın]] en ucuz yolu sayıldı.

## Benzetme

Tek nüsha bir fotoğraf negatifi gibi: kopyası yoksa ıslandığında geri gelmez. Üstelik onu basan makinenin belleğinde bir iz kalmış olabilir.

## Nasıl çalışır?

Anahtar çifti çevrimdışı bir araçla üretilir, kâğıda basılır, üretimin yapıldığı cihazdaki izler silinir. Parayı harcamak içinse anahtarı bir cüzdan yazılımına aktarman gerekir — yani kâğıt, ancak hiç kullanılmadığı sürece çevrimdışı kalır.

## Dikkat

Bu yöntem, yazıldığı tarih itibarıyla yaygın olarak önerilmiyor ve gerekçeleri teknik:

- Anahtarı üreten bilgisayar ya da yazıcı temiz değilse anahtar daha basılmadan sızmış olabilir; yazıcılar baskıları belleğinde tutabilir.
- Kâğıt yanar, ıslanır, mürekkep solar. Tek nüsha tutulursa kayıp geri dönüşsüzdür; çok nüsha tutulursa çalınma yüzeyi büyür.
- Kâğıt tek bir anahtar taşır. Bugünkü cüzdanlar tek bir [[seed-phrase|kurtarma ifadesinden]] sayısız anahtar türeten [[hd-wallet-bip-32|HD cüzdan]] yapısını kullanır; kâğıt bu düzene uymaz.
- Anahtarı harcamak için bir yazılıma girdiğin anda o anahtar artık çevrimdışı değildir. [[utxo|UTXO]] tabanlı ağlarda harcamanın üstü otomatik olarak yeni bir adrese gider; bunu takip etmeyen eski araçlarda kâğıdın hâlâ dolu olduğu sanılabilir.

Kurtarma ifadeni kâğıda yazmak bundan farklı bir şeydir ve yaygın bir uygulamadır; "kâğıt cüzdan" terimi anahtarın basılı tek kopya olarak saklanmasını anlatır.
