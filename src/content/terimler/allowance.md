---
term: "Allowance"
tr: "Harcama izni"
aliases: []
category: tokenlar
subcategory: "Standartlar"
level: orta
short: "Bir adresin senin bakiyenden çekebileceği kalan tutar; sözleşmede yazılıdır ve sen değiştirene kadar durur."
related: [approve, transferfrom, erc-20, infinite-approval-risk, erc-2612-permit, wallet-drainer]
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

Allowance, bir token sözleşmesinde "şu adres, şu adresin bakiyesinden en fazla şu kadarını çekebilir" diye yazılı duran sayıdır. Tek bir rakam değil, sahip–harcayan ikilisi başına tutulan ayrı ayrı rakamlardır.

İzin bir transfer değildir. Bakiyen yerinde durur, hiçbir tutar kilitlenmez ya da ayrılmaz; sen o token'ları istediğin gibi harcamaya devam edebilirsin. Yazılan tek şey, birine açılmış bir kapıdır. O kapıyı kullanıp kullanmayacağı karşı tarafa kalmıştır.

## Benzetme

Şirket aracına verilen yakıt kartı gibi. Kart şoförün cebindedir ama ödeme senin hesabına düşer. Üstünde bir tavan vardır ve her dolumda kalan hak azalır; şoför hiç kullanmazsa hesabından kuruş çıkmaz, kartı iptal edersen hak biter. Tehlikeli olan kartın kendisi değil, unutulmuş bir kartın yıllarca geçerli kalmasıdır.

## Nasıl çalışır?

Kalan hakkı okumanın yolu `allowance(owner, spender)` çağrısıdır. Rakamı yazan tek yol sahibin [[approve|approve]] çağrısı; düşüren şey ise harcayan tarafın [[transferfrom|transferFrom]] ile yaptığı her çekimdir. Hak biterse çağrı geri alınır.

Yaygın bir istisna vardır: izin `uint256`'nın alabileceği en büyük değere ayarlanmışsa çoğu sözleşme onu "sınırsız" kabul eder ve her transferde azaltmaz. Hem gaz tasarrufu sağlanır hem de izin hiç tükenmez — ikincisi asıl meseledir.

İzin zincirde yazılıdır; cüzdan arayüzünün onu listelememesi iznin olmadığı anlamına gelmez.

## Dikkat

Verilmiş bir izin zaman aşımına uğramaz. Bir yıl önce tek seferlik bir takas için verdiğin izin hâlâ oradadır ve o sözleşmenin bugünkü hâli bir yıl öncekinden farklı olabilir — yükseltilebilir bir sözleşmede kod tamamen değişmiş olabilir.

Kaybın büyüklüğünü belirleyen de izin verdiğin gün sahip olduğun tutar değil, çekimin yapıldığı gün bakiyende ne varsa odur; rakam bakiyene değil tavana bakar. Tavan sınırsızsa o tavan hiç inmez. [[wallet-drainer|Cüzdan boşaltıcılarının]] beklediği tam olarak budur, ayrıntısı [[infinite-approval-risk|sınırsız onay riskinde]]. Verilmiş izinleri düzenli olarak gözden geçirip işi bitenleri sıfırlamak yerleşik bir alışkanlıktır.
