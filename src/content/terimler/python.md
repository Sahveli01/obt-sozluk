---
term: "Python"
tr: ""
aliases: []
category: programlama
subcategory: "Diller ve formatlar"
level: baslangic
short: "Okunabilirliği öne alan, blokları girintiyle ayıran, yorumlanarak çalışan genel amaçlı dil."
related: [programming-language, interpreter, dynamic-typing, vyper, c-dil]
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

Python, okunabilirliği öne alan genel amaçlı bir dildir. Blokları süslü parantezle değil girintiyle ayırır, satır sonunda noktalı virgül istemez; yazılan kod çoğu zaman sözde koda benzediği için ilk dil olarak sık seçilir.

Tek bir alana bağlı değildir: veri analizi, yapay zekâ, otomasyon betikleri, web sunucuları ve test araçları Python ile yazılır. [[interpreter|Yorumlayıcı]] bir dildir; ayrı bir derleme adımı beklemeden satırları doğrudan çalıştırırsın, bu da deneme yanılmayı hızlandırır.

Bedeli de var. Aynı işi yapan derlenmiş bir programa göre yavaş çalışır ve tipler [[dynamic-typing|çalışma anında]] belirlendiği için bazı hatalar ancak o satıra gelindiğinde ortaya çıkar. Ağır hesap yapan kütüphanelerin çoğu bu yüzden alt katmanda [[c-dil|C]] ile yazılmıştır.

## Örnek

```python
kelimeler = ["elma", "armut", "kiraz"]
uzunlar = [k for k in kelimeler if len(k) > 4]
print(uzunlar)
```

Çıktı `['armut', 'kiraz']` olur. İkinci satır listeyi tek satırda süzer; Python'da sık görülen bu yazıma liste üreteci denir.

## Dikkat

Girinti burada biçim değil, dilin kendisidir. Bir satırı bir seviye içeri ya da dışarı kaydırmak programın anlamını değiştirir ve bu değişiklik çoğu zaman hata vermeden çalışır — yanlış sonuç verir. Boşluk ile sekmeyi karıştırmak da aynı sınıfa girer; bu yüzden düzenleyicini tek bir girinti biçimine ayarlamak iyi bir alışkanlıktır.
