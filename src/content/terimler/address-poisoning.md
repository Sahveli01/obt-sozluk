---
term: "Address Poisoning"
tr: "Adres zehirleme"
aliases: ["adres zehirleme"]
category: guvenlik
subcategory: "Kullanıcıyı hedef alan dolandırıcılıklar"
level: orta
short: "İşlem geçmişine, kullandığın adrese benzeyen bir adresten değersiz işlem düşürüp adresi geçmişten kopyalamanı bekleyen tuzak."
related: [wallet-address, dust, vanity-address, name-service-ens, transaction]
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

Adres zehirleme, senin işlem geçmişini kirletmeye dayanan bir tuzaktır. Saldırgan, sık para gönderdiğin adrese ilk ve son karakterleri birebir benzeyen bir adres üretir ve o adresten sana değersiz bir transfer gönderir. Amacı para almak değildir; amacı listende görünmektir.

Bir sonraki gönderimde adresi geçmişten kopyalarsan, kopyaladığın şey onun adresi olur. İşlem tamamen geçerlidir ve geri alınamaz.

## Benzetme

Çekmecendeki eski faturaların arasına, seninkine tıpatıp benzeyen ama hesap numarası değişik bir fatura bırakmak gibi. Kimse senden bir şey istemez, kimse seni aramaz, o gün hiçbir şey olmaz. Beklenen tek şey, bir gün ödeme yaparken numarayı eski kâğıttan kopyalamandır.

## Nasıl çalışır?

Tuzak, iki gerçeğin üstüne kurulur.

Birincisi, [[wallet-address|adresler]] uzundur ve insanlar onları okumaz. Arayüzler de bu yüzden adresi kısaltıp `0x1a2b…9f3c` gibi gösterir. Saldırgan yalnızca bu görünen uçları tutturmak zorundadır; istenen uçlara sahip bir adres üretmek, [[vanity-address|özel adres]] üretmekle aynı iştir.

İkincisi, zincirde kimse sana bir şey göndermeni engelleyemez. Gönderilen [[transaction|işlem]] sıfır değerli ya da [[dust|toz]] miktarda olabilir; yine de senin geçmişinde, gerçek işlemlerinin hemen yanında görünür.

Geri kalanı beklemektir. Acele ettiğin bir gün, listedeki yanlış satırı kopyalaman yeter.

## Dikkat

Bu, teknik bilgiyle ilgili bir hata değil; arayüzlerin kısalttığı bir bilgiyle ilgili bir tasarım açığıdır. Herkesin başına gelebilir. Korunma yolu alışkanlık değiştirmekten geçer:

- Adresi asla işlem geçmişinden kopyalama. Geçmiş bir adres defteri değildir.
- Sık kullandığın adresleri cüzdanının adres defterine bir kez kaydet, sonra hep oradan seç.
- Yapıştırdıktan sonra adresin tamamını karşılaştır; ilk ve son dört karaktere bakmak tam olarak saldırganın beklediği şeydir.
- Büyük bir transferden önce küçük bir deneme gönder ve karşı tarafın aldığını teyit et.
- Bir [[name-service-ens|isim servisi]] kullanıyorsan, adın çözümlendiği adresin doğru olduğunu da bir kez gör.
