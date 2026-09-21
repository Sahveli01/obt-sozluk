---
term: "Self-Attention"
tr: ""
aliases: ["self attention", "öz-dikkat"]
category: yapay-zeka
subcategory: "Büyük dil modelleri"
level: ileri
short: "Bir dizinin parçalarının, dışarıdan bir kaynağa değil, aynı dizinin diğer parçalarına dikkat etmesi."
related: [attention-mechanism, transformer, token-ai, context-window, embedding]
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

Self-attention, [[attention-mechanism|dikkat mekanizmasının]] bir diziye kendi üstünde uygulanmış hâlidir: bir cümledeki her parça, başka bir kaynağa değil, aynı cümlenin diğer parçalarına bakar. Böylece her parça bağlamıyla birlikte temsil edilir — "yüz" kelimesinin sayı mı, organ mı, fiil mi olduğu ancak komşularına bakılarak belirlenir. Türkçede yerleşik bir karşılığı yok; "öz-dikkat" çevirisi kullanılsa da terim çoğunlukla İngilizce geçer.

## Nasıl çalışır?

Her parça iki rolü birden üstlenir: hem bakan, hem bakılan. Model dizideki her parça için diğerleriyle ne kadar ilgili olduğunu belirler ve ilgili bulduklarının taşıdığı bilgiyi kendi temsiline katar. Bu işlem tek seferde bitmez; katman katman tekrarlanır ve her turda temsiller biraz daha bağlamlı hâle gelir.

Modeller bunu tek bir bakışla değil, aynı anda birden çok bakış açısıyla yapar: bir grup ağırlık dilbilgisel ilişkileri, bir başkası konu bütünlüğünü yakalayacak biçimde eğitim sırasında farklılaşır.

Bir de yön kısıtı vardır. Metin üreten modellerde bir parça yalnızca kendinden öncekilere bakabilir; sonrasını görmesine izin verilseydi, tahmin etmesi istenen şeyi doğrudan okumuş olurdu.

## Örnek

"Çanta masaya sığmadı çünkü **o** çok büyüktü." Buradaki "o" çantayı gösterir. "Büyüktü" yerine "küçüktü" yazarsan aynı "o" bu kez masayı gösterir. Kelimeler aynı, sıra aynı; değişen tek şey hangi parçanın hangisine yaslandığıdır. Self-attention'ın çözdüğü iş tam olarak budur.

## Dikkat

Bütün parçalar birbirine baktığı için hesap yükü, dizi uzadıkça orantısız biçimde artar: parça sayısı iki katına çıktığında karşılaştırma sayısı dört katına çıkar. [[context-window|Bağlam penceresini]] büyütmenin pahalı olmasının ve uzun bağlam için ayrı yöntemler geliştirilmesinin sebebi budur.
