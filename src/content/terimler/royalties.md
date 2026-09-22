---
term: "Royalties"
tr: "Telif Payı"
aliases: ["royalty"]
category: nft
subcategory: ""
level: orta
short: "Bir NFT her el değiştirdiğinde üreticisine ayrılan pay; zincir bunu kendiliğinden toplamaz, uygulanması pazar yerlerine kalır."
related: [nft-marketplace, non-fungible-token-nft, erc-721, nft-collection, token-standard]
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

Royalties, bir [[non-fungible-token-nft|NFT]] ilk satıştan sonra her el değiştirdiğinde satış tutarından üreticisine ayrılan paydır. Fikir açıktır: eser ikinci, üçüncü, onuncu kez satıldığında onu üreten kişi de bundan pay alsın.

Uygulamada işin zor tarafı, bu payı kimin tahsil edeceğidir. Cevap çoğu zaman "zincir değil" olur.

## Benzetme

Bir ressamın tuvalin arkasına "bu tablo her el değiştirdiğinde payım vardır" diye not düşmesi gibi. Not oradadır, okunur, kimse varlığını inkâr etmez. Ama tablo bir sonraki alıcıya geçerken payın ödenip ödenmeyeceğini notun kendisi belirlemez; satışı yapan kişinin bu notu uygulamayı seçip seçmemesi belirler.

## Nasıl çalışır?

[[erc-721|ERC-721]] gibi standartlarda devir tek bir fonksiyondur: token şu adresten şu adrese geçer. Bu fonksiyon kimseye ödeme yapmaz ve ödeme yapılmasını şart koşmaz. Payı kesecek bir nokta yoktur.

ERC-2981 adlı standart bu boşluğu kapatmaz, yalnızca düzenler: sözleşmeye "şu satış tutarı için alacak taraf şu adres, oran şu" diye sorulabilen bir fonksiyon ekler. Beyan eder, tahsil etmez. Tahsilat ancak satışı yürüten [[nft-marketplace|pazar yerinin]] bu beyanı okuyup tutarı bölmesiyle gerçekleşir.

Bazı koleksiyonlar payı zorlamak için devri kısıtlar: sözleşme yalnızca belirli adresler üzerinden devre izin verir. Bu yöntem garantiye yaklaşır ama karşılığında token'ın serbestçe devredilebilirliğinden feragat eder.

## Dikkat

Yazıldığı tarih itibarıyla telif payının uygulanıp uygulanmayacağı satışın yapıldığı yerin tercihine bağlıdır ve bu tercihler zaman içinde değişmiştir. "Zincire yazılı olduğu için ödenmek zorunda" cümlesi teknik olarak yanlıştır.

Bir koleksiyonun sayfasında görünen oran, ödenecek olanı değil istenen olanı gösterir. [[token-standard|Token standardının]] söylediği şey bir kural değil, bir beyandır.
