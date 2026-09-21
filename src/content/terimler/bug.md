---
term: "Bug"
tr: "Hata"
aliases: ["yazılım hatası", "böcek"]
category: programlama
subcategory: "Kod organizasyonu"
level: baslangic
short: "Bir programın, yazanın istediğinden farklı davranmasına yol açan kusur."
related: [debugging, debugger, exception, error-handling, stack-trace, technical-debt]
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

Bug, bir programın yazanın istediğinden farklı davranmasına yol açan kusurdur. Kaynağı neredeyse her zaman insandır: yanlış anlaşılmış bir gereksinim, hesaba katılmamış bir durum, ters sırayla yazılmış iki satır.

Bilgisayar bu sırada bir şey beceremiyor değildir; kendisine yazılanı harfiyen yapar. Bu yüzden bug'ın karşıtı "arıza" değil, "yanlış talimat"tır.

Her bug patlamaz. Bir kısmı programı görünür biçimde durdurur ([[exception|istisna]]); bir kısmı sessizdir — yanlış tutarı hesaplar, bir kaydı eksik yazar ve kimse aylarca fark etmez. Sessiz olanlar genelde daha pahalıya mal olur.

## Benzetme

Asansörün düğme panosu gibi. 3'e bastığında kapılar 4'te açılıyorsa asansör bozulmuş değildir; panonun arkasındaki kablolar yanlış bağlanmıştır ve asansör kendisine söyleneni eksiksiz yapmaktadır. Sorun makinede değil, makineye verilen talimattadır.

## Dikkat

Her istenmeyen davranış bug değildir. Bir şey belgelendiği gibi çalışıyor ama sen başkasını bekliyorsan, ortada bir bug değil bir beklenti farkı vardır; bu ayrım tartışmayı kısaltır.

Bug'ı bulma yöntemi [[debugging|hata ayıklama]] maddesinde, bu iş için kullanılan araç ise [[debugger]] maddesinde anlatılıyor.
