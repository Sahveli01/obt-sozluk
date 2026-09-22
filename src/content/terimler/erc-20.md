---
term: "ERC-20"
tr: ""
aliases: ["erc20"]
category: tokenlar
subcategory: "Standartlar"
level: baslangic
short: "Birbirinin yerine geçebilen token'lar için bakiye, transfer ve harcama izni fonksiyonlarını tanımlayan Ethereum standardı."
related: [token-standard, fungible-token, approve, allowance, transferfrom, decimals]
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

ERC-20, her birimi diğeriyle aynı olan token'ların Ethereum'daki ortak arayüzüdür. Stablecoin'ler, yönetişim token'ları, oyun içi para birimleri: dışarıya gösterdikleri yüz aynıdır.

Standardın özü şudur: tek bir sözleşme, hangi adresin ne kadar token'ı olduğunu tutan bir tablo işletir. Transfer, o tablodaki iki satırın değişmesidir; hiçbir şey bir yerden bir yere taşınmaz. Sözleşme ayrıca bir başkasına "hesabımdan şu kadarını çekebilirsin" demenin yolunu da tanımlar: önce [[approve|izin]], sonra [[transferfrom|çekme]].

## Benzetme

Telefon kontörü gibi. Ekranda gördüğün bakiye telefonun içinde bir yerde durmaz; operatörün kayıtlarındaki bir satırdır. Telefonu değiştirsen de bakiye kaybolmaz, çünkü rakam zaten cihazda değildi. "Telefonumda 300 kontör var" demek pratik bir kısaltmadır; olan biten, operatörün defterinde senin adına 300 yazmasıdır.

## Dikkat

Bu iki adımlı model kolaylık kadar risk de getirir. Bir uygulamaya verdiğin izin sen iptal edene kadar yürürlükte kalır ve çoğu arayüz, her seferinde sormamak için mümkün olan en büyük tutarı ister. O sözleşme sonradan ele geçirilirse cüzdanındaki o token'ın tamamı çekilebilir — bakiyen o gün ne kadarsa o kadar. [[infinite-approval-risk|Sınırsız onay riski]] budur; verdiğin izinleri arada bir gözden geçirip gereksizleri iptal etmek yerleşik bir alışkanlıktır.
