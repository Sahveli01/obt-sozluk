---
term: "Linux"
tr: ""
aliases: ["gnu/linux"]
category: araclar
subcategory: "Geliştirme ortamı"
level: orta
short: "Açık kaynak bir çekirdek ve etrafında kurulan işletim sistemi ailesi; sunucuların ve node yazılımlarının ortak zemini."
related: [operating-system, wsl, bash, shell, package-manager]
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

Linux, 1991'de Linus Torvalds'ın yazmaya başladığı bir çekirdektir (kernel). Çekirdek tek başına kullanılmaz: üzerine GNU araçları, bir [[shell|kabuk]], bir [[package-manager|paket yöneticisi]] ve isteğe bağlı bir masaüstü eklenerek tam bir [[operating-system|işletim sistemi]] hâline getirilir. Bu paketlenmiş hâllere dağıtım denir — Ubuntu, Debian, Fedora, Arch gibi.

Blockchain ve web tarafında Linux bilmek işe yarar, çünkü sunucuların, konteyner imajlarının ve node yazılımlarının varsayılan zemini genelde Linux'tur.

## Nasıl çalışır?

Birkaç tasarım kararı Linux'u Windows'tan görünür biçimde ayırır. Sürücü harfi yoktur: her şey `/` kökünden başlayan tek bir ağaçta durur, takılan diskler bu ağacın bir klasörüne bağlanır. İzinler okuma, yazma ve çalıştırma olarak sahip, grup ve diğerleri üçlüsüne ayrı ayrı verilir; bir betik "çalıştırılabilir" işareti almadan çalışmaz.

Program kurmak dağıtımın paket yöneticisiyle yapılır (`apt`, `dnf`, `pacman`), tek tek kurulum dosyası indirilmez.

Bir de dosya adlarında büyük-küçük harf ayrımı vardır: `Readme.md` ile `readme.md` iki ayrı dosyadır. Windows'ta sorunsuz çalışan bir proje, bu yüzden Linux sunucusunda "dosya bulunamadı" diyebilir.

## Dikkat

"Linux öğrenmek" çoğu kişi için bütün sistemi öğrenmek değildir; birkaç kabuk komutu ve izin mantığı işin büyük kısmını görür. Windows'tan çıkmadan [[wsl|WSL]] ile başlamak bunun için yeterlidir.

Linux tek bir ürün de değildir. Bir dağıtımda işe yarayan kurulum komutu diğerinde bulunmayabilir; bir belgeyi uygularken hangi dağıtım için yazıldığına bak.
