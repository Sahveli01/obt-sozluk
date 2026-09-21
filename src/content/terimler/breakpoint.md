---
term: "Breakpoint"
tr: "Kesme noktası"
aliases: ["kesme noktası", "breakpoints"]
category: araclar
subcategory: "Test ve kalite"
level: baslangic
short: "Bir kod satırına konan ve programa \"buraya gelince dur\" diyen işaret."
related: [debugger, stack-trace, debugging, ide, bug]
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

Breakpoint, bir kod satırına konan ve "program buraya geldiğinde dur" anlamına gelen işarettir. [[debugger|Debugger]] çalışırken programı tam o satırda dondurur; sen değişkenlere bakar, bir sonraki satıra adımlar ya da programı kaldığı yerden devam ettirirsin.

Editörde çoğunlukla satır numarasının soluna tıklayarak konur. Kodun kendisini değiştirmez; kaldırdığında dosyada hiçbir iz kalmaz.

Koşullu breakpoint de vardır: "bu satırda dur, ama yalnızca `kullaniciId` 42 olduğunda". Bin kez dönen bir döngünün yalnızca sorunlu turunda durmak isteniyorsa tek pratik yol budur.

## Benzetme

Uzun bir yolculukta haritaya önceden koyduğun mola işareti gibi. Araç oraya gelince durur; inersin, etrafa bakarsın, ne kadar yol gittiğini kontrol edersin, sonra yola devam edersin. İşareti koymamış olsaydın yolculuk tek seferde biter ve elinde yalnızca vardığın yer kalırdı.

## Dikkat

Kodun içine yazılan `debugger;` ifadesi de aynı işi görür ama editördeki işaretten farklı olarak kodun bir parçasıdır: yanlışlıkla gönderilirse tarayıcı geliştirici araçları açık olan herkesin sayfasını durdurur. Göndermeden önce temizlenmesi gereken bir şeydir.

Bir de her kod durdurulmaya aynı tepkiyi vermez. Zaman aşımı olan ağ istekleri, zamanlayıcılar ya da eşzamanlı çalışan işler sen breakpoint'te beklerken sona erebilir; o durumda gördüğün tablo, program normal çalışırken oluşacak tablodan farklı olur.
