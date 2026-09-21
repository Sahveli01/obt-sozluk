---
term: "State Transition"
tr: "Durum geçişi"
aliases: ["durum geçişi"]
category: temeller
subcategory: "Bloklar ve işlemler"
level: ileri
short: "Bir bloğun işlemlerinin mevcut duruma uygulanmasıyla yeni durumun üretilmesi; protokolün asıl kural kitabı budur."
related: [state-blockchain, world-state, block, deterministic-execution, virtual-machine-blockchain]
disambiguation: []
tags: []
status: taslak
reviewedBy: []
dateSensitive: false
sources: []
added: 2026-09-21
updated: 2026-09-21
---

## Nedir?

Durum geçişi, mevcut duruma bir [[block|bloğun]] işlemlerinin uygulanmasıyla yeni bir durumun üretilmesidir. Protokolü tek cümleyle tarif etmek gerekirse: yeni durum, eski durumun ve yeni bloğun bir fonksiyonudur. Bu fonksiyonun kuralları — hangi işlem geçerli sayılır, ne kadar iş harcar, hata olursa ne yapılır — zincirin asıl tanımıdır.

## Nasıl çalışır?

Blok işlenirken işlemler blokta yazdıkları sırayla tek tek uygulanır. Her işlem için imza, sayaç ve bakiye kontrolleri yapılır; sözleşme çağrısı varsa kod zincirin sanal makinesinde ([[virtual-machine-blockchain|VM]]) çalıştırılır. İşlem hata verirse o işlemin yaptığı değişiklikler geri sarılır, ama harcadığı ücret ve sayaç artışı kalır — yani başarısızlık da bir durum değişikliğidir.

Blok bittiğinde ödüller ve protokole özgü kapanış adımları uygulanır, ardından yeni durumun özeti hesaplanır. Bu özet ([[world-state|dünya durumu]] kökü) blok başlığına yazılır; böylece herkes aynı sonuca vardığını tek bir değer karşılaştırarak görebilir.

Geçişin en kritik özelliği [[deterministic-execution|belirlenimli]] olmasıdır: aynı girdi her makinede, her zaman aynı çıktıyı vermelidir. Bu yüzden zincir üstünde çalışan kodda gerçek rastgelelik, sistem saati ve dış dünyaya yapılan çağrılar ya tamamen yasaktır ya da yalnızca protokolün ürettiği değerlerle sınırlıdır.

## Dikkat

Bir bloğun geçerli olması, içindeki her işlemin başarılı olduğu anlamına gelmez. Başarısız işlemler de bloğa girer ve geçişin parçasıdır.

Geçiş ayrıca atomiktir: blok ya bütün olarak uygulanır ya da hiç. Yarım uygulanmış bir blok, düğümlerin ortak bir [[state-blockchain|durum]] üzerinde anlaşmasını imkânsız kılardı.
