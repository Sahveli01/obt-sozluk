---
term: "Perceptron"
tr: ""
aliases: []
category: yapay-zeka
subcategory: "Temeller"
level: ileri
short: "Girdileri ağırlıklarıyla toplayıp bir eşiğe göre iki cevaptan birini veren, sinir ağlarının en basit birimi."
related: [neural-network, weights, deep-learning, training]
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

Perceptron, birkaç sayıyı girdi alıp her birini bir ağırlıkla çarpan, sonuçları toplayıp bir eşikle karşılaştıran ve "evet" ya da "hayır" diyen tek bir hesap birimidir. Yapay [[neural-network|sinir ağlarının]] hem en küçük yapı taşı hem de tarihsel başlangıç noktasıdır. Türkçede yerleşik bir karşılığı olmadığı için İngilizce adıyla kullanılır.

## Benzetme

Üç jürinin oy verdiği bir eleme düşün. Oylar eşit sayılmıyor: birininki iki kat, birininki yarım. Toplam belli bir sayıyı geçerse aday geçiyor. Sonuçlar tutmadıkça jürilerin ağırlıkları yeniden ayarlanıyor. Perceptron'un yaptığı iş budur.

## Nasıl çalışır?

Her girdinin bir ağırlığı vardır ve bu ağırlık, o girdinin kararda ne kadar söz sahibi olduğunu belirler. Bir de eşiği kaydıran sabit bir terim bulunur; böylece birim "toplam ne kadar olursa evet diyeyim" sorusunu ayrıca ayarlayabilir.

[[training|Eğitim]] şaşırtıcı derecede basittir. Birime sırayla örnekler verilir. Cevap doğruysa hiçbir şeye dokunulmaz. Yanlışsa [[weights|ağırlıklar]] hatayı azaltacak yönde azıcık değiştirilir. Örnekler üzerinde birkaç tur dönüldüğünde ağırlıklar oturur. Veri düz bir sınırla ayrılabiliyorsa bu yöntemin sonunda o sınırı bulacağı ispatlanmıştır.

## Dikkat

Tek bir perceptron yalnızca düz bir sınırla ayrılabilen problemleri çözebilir. Ders kitaplarının klasik örneği "ya biri ya öteki, ama ikisi birden değil" ilişkisidir: tek birim bunu hiçbir ağırlık ayarıyla öğrenemez.

Bu sınırın anlaşılması alanda uzun bir duraklamaya yol açtı. Çözüm birimleri katmanlar hâlinde üst üste koymak ve aralarına düz olmayan dönüşümler eklemek oldu; bugünkü [[deep-learning|derin öğrenme]] o fikrin devamıdır.
