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
sources: ["https://www.juncture-digital.org/edisonpapers/edison-and-the-bug", "https://en.wikipedia.org/wiki/Bug_(engineering)"]
added: 2026-09-21
updated: 2026-09-22
---

## Nedir?

Bug, bir programın yazanın istediğinden farklı davranmasına yol açan kusurdur. Kaynağı neredeyse her zaman insandır: yanlış anlaşılmış bir gereksinim, hesaba katılmamış bir durum, ters sırayla yazılmış iki satır.

Bilgisayar bu sırada bir şey beceremiyor değildir; kendisine yazılanı harfiyen yapar. Bu yüzden bug'ın karşıtı "arıza" değil, "yanlış talimat"tır.

Her bug patlamaz. Bir kısmı programı görünür biçimde durdurur ([[exception|istisna]]); bir kısmı sessizce yanlış tutarı hesaplar ve kimse aylarca fark etmez. Sessiz olanlar daha pahalıya mal olur.

## Benzetme

Asansörün düğme panosu gibi. 3'e bastığında kapılar 4'te açılıyorsa asansör bozulmuş değildir; panonun arkasındaki kablolar yanlış bağlanmıştır ve asansör kendisine söyleneni eksiksiz yapmaktadır. Sorun makinede değil, makineye verilen talimattadır.

## Dikkat

Her istenmeyen davranış bug değildir. Bir şey belgelendiği gibi çalışıyor ama sen başkasını bekliyorsan, ortada bug değil beklenti farkı vardır.

Kökeni için şu hikâye anlatılır: 1947'de Harvard Mark II'de bir arıza aranırken röleye sıkışmış bir güve bulunmuş, kayıt defterine bantlanıp yanına "böceğin bulunduğu ilk gerçek vaka" yazılmıştır. Defter bugün bir müzede.

Hikâye doğru ama terimin doğuşu değil, üzerine yapılmış bir şakadır: Edison 1870'lerden beri aygıt arızalarına "bug" diyordu. Notun esprisi de budur — kelime mecazi kullanılırken ilk kez gerçek bir böcek çıkmıştır.

Bulma yöntemi [[debugging|hata ayıklama]], kullanılan araç [[debugger]] maddesinde.
