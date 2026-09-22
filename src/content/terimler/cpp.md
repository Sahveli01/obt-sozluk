---
term: "C++"
tr: ""
aliases: []
category: programlama
subcategory: "Diller ve formatlar"
level: orta
short: "C'nin üstüne sınıf, şablon ve geniş bir standart kütüphane ekleyen; yüksek soyutlamayı çalışma anı maliyeti olmadan hedefleyen dil."
related: [c-dil, object-oriented-programming-oop, memory-management, generics, compiler, pointer]
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

C++, [[c-dil|C]]'nin üstüne sınıf, şablon, istisna ve geniş bir standart kütüphane ekleyerek büyümüş bir dildir. Hedefi ikisini bir arada tutmaktır: yüksek düzeyde soyutlama yazabilmek ve bu soyutlamanın çalışma anında bedel ödetmemesi. Oyun motorları, tarayıcı ve veritabanı çekirdekleri, finansal işlem sistemleri ve birçok blockchain düğüm yazılımı C++ ile yazılır.

Dil bu yüzden çok geniştir. Aynı işi yapmanın birden fazla yolu vardır ve bu yolların bir kısmı dilin farklı dönemlerinden kalmıştır. Yeni başlayan biri için asıl zorluk sözdizimi değil, "bu işi hangi yolla yapmalıyım" sorusudur; aynı soruya bulduğu iki kaynak farklı cevap verebilir.

## Nasıl çalışır?

Şablonlar (`template`) [[generics|jenerik]] kod yazmanı sağlar ve derleme anında çalışır: derleyici, şablonu kullandığın her tip için ayrı kod üretir. Kazanç, esnekliğin çalışma anında ek maliyet getirmemesidir; bedeli uzayan derleme süreleri ve okuması zor hata mesajlarıdır.

[[memory-management|Bellek yönetimi]] temelde eldedir, ama dil bunu düzene sokacak araçlar sunar: bir nesnenin ömrü kapsamına bağlanır ve kapsam bittiğinde tuttuğu kaynak otomatik bırakılır. Akıllı işaretçiler bu fikrin üstüne kurulur, dolayısıyla modern C++ kodunda elle bellek bırakma satırlarına eskisi kadar sık rastlanmaz.

## Dikkat

C++ öğrenirken bulduğun kaynağın hangi döneme ait olduğuna bakmak gerekir. Dil geriye dönük uyumluluğu koruduğu için eski bir örnek hâlâ derlenir; bu, o yolun bugün önerilen yol olduğu anlamına gelmez.

Bir de yaygın bir yanlış anlama var: C++ yalnızca [[object-oriented-programming-oop|nesne yönelimli]] bir dil değildir. Sınıf yazmadan, yordamsal ya da işlevsel bir biçimde de kullanılabilir; hangi biçimin seçileceği ekibin kararıdır.
