---
term: "Proof of Space"
tr: ""
aliases: []
category: konsensus
subcategory: "Mekanizmalar"
level: orta
short: "Söz hakkını işleme gücü yerine ayrılmış disk alanına bağlayan; katılımcıdan önceden doldurduğu veriyle hızlı cevap vermesini isteyen mekanizma."
related: [proof-of-work-pow, consensus-mechanism, sybil-resistance, hash-function, filecoin, leader-election]
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

**Proof of Space**, blok önerme hakkını kıt bir kaynağa bağlama fikrini [[proof-of-work-pow|iş ispatı]] gibi işleme gücü üzerinden değil, depolama alanı üzerinden kurar. Katılımcı diskini önceden hesaplanmış verilerle doldurur; ağ bir sorgu yayınladığında, elindeki veriler arasında sorguya en yakın cevabı bulan blok önerme hakkını kazanır. Türkçede yerleşik bir karşılığı yok.

## Benzetme

Bilgi yarışmasına, olası soruların cevaplarını önceden yazıp dosyalayarak hazırlanmak gibi. Soru sorulduğunda doğru fişi çekmek saniyeler sürer; aynı soruya o an oturup cevap üretmeye çalışan kişi her turda geç kalır. Dolabın ne kadar büyükse, elinde işe yarar bir fiş bulunma ihtimali o kadar yüksektir.

## Nasıl çalışır?

Hazırlık aşaması bir kez yapılır ve maliyetlidir: disk, belirli bir kurala göre türetilmiş değerlerle baştan sona doldurulur. Sonrasında yarışmak diskten okumaktan ibarettir.

Güvenlik varsayımı, ayrılmış toplam alanın çoğunluğunun kurallara uyan katılımcılarda olmasıdır. Alanın gerçekten ayrıldığını zorlayan ilişki şudur: sorgu geldiğinde cevabı o an hesaplamaya kalkışan biri, saklayan birine göre hep geç kalır. Yerden kazanan, zamandan kaybeder.

Tek başına alan kanıtı, blokların arka arkaya çok hızlı üretilmesini engellemez. Bu yüzden genellikle sıralı hesaplamaya dayanan bir zaman kanıtıyla birlikte kullanılır: alan kimin önereceğini belirler, zaman kanıtı sıranın ne kadar hızlı ilerleyebileceğini sınırlar.

## Dikkat

Depolamayı kullanan her kanıt aynı işi yapmaz. Proof of Space'te saklanan verinin içeriğinin bir kıymeti yoktur; amaç yalnızca alanın ayrıldığını göstermektir. [[filecoin|Filecoin]] gibi depolama ağlarında kullanılan kanıtlar ise belirli bir müşteri dosyasının gerçekten saklandığını ispatlar. İkisi aynı kelimeyi paylaşır, işleri ayrıdır.

İkinci karışıklık, disk alanını bedava kaynak saymaktır. Hazırlık hesap ve yazma maliyeti doğurur, diskler yıpranır, ayrılan alan başka bir işe kullanılamaz. Kaynak fiziksel olmaya devam eder; yalnızca türü değişir.
