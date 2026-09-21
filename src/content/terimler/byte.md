---
term: "Byte"
tr: "Bayt"
aliases: ["bayt"]
category: programlama
subcategory: "Temel kavramlar"
level: baslangic
short: "Sekiz bitten oluşan ve 0 ile 255 arasında bir değer taşıyabilen, bilgisayarın pratikteki en küçük çalışma birimi."
related: [bit, binary, hexadecimal, encoding, hash-function]
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

Bayt, sekiz [[bit|bitin]] bir araya gelmesiyle oluşan gruptur. Sekiz bitin alabileceği desen sayısı 256 olduğu için bir bayt 0 ile 255 arasında bir değer taşır.

Bilgisayarlar bilgiyi tek tek bitler hâlinde değil, baytlar hâlinde okur ve yazar; dosya boyutları, bellek miktarları ve ağdan geçen veri hep bayt cinsinden konuşulur. Bir metin, bir fotoğraf ya da bir program dosyası — bunların hepsi arka planda bir bayt dizisidir. Aradaki farkı yaratan şey baytların hangi kurala göre yorumlandığıdır; buna [[encoding|kodlama]] denir.

## Benzetme

Düzine gibi. Yumurtayı tek tek sayabilirsin ama kimse "144 yumurta aldım" demez; herkes onikişer onikişer konuşur, çünkü kutu, raf ve fiyat o birim üzerine kurulmuştur. Bayt da bilgisayarın düzinesidir; yalnız onun düzinesi sekizdir.

## Örnek

```python
veri = "ab".encode("utf-8")
print(len(veri))            # 2   -> iki harf, iki bayt
print(veri[0])              # 97  -> her bayt 0-255 arası bir sayı

print("ş".encode("utf-8"))  # b'\xc5\x9f'  -> tek harf, iki bayt
```

## Dikkat

Bir harf her zaman bir bayt değildir. Yukarıdaki örnekteki gibi Türkçeye özgü harfler UTF-8 kodlamasında iki bayt yer kaplar; bu yüzden bir metnin harf sayısı ile bayt uzunluğu birbirine karıştırılmamalıdır. Karakter sınırı koyan sistemlerde hatalar tam olarak buradan çıkar.

Blockchain tarafında boyutlar da baytla konuşulur. Yaygın kullanılan özetler 32 bayt, Ethereum adresleri 20 bayttır; bu sayılar ekranda genellikle her bayt iki karakterle gösterildiği için [[hexadecimal|onaltılık]] yazımda iki katı uzunlukta görünür.
