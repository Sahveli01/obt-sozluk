---
term: "Interest Rate Model"
tr: "Faiz oranı modeli"
aliases: []
category: defi
subcategory: "Borç verme ve alma"
level: orta
short: "Faizi elle değil formülle belirleyen kural; girdisi havuzun kullanım oranıdır."
related: [utilization-rate, money-market, lending-protocol, borrowing-defi, apy, apr]
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

Faiz oranı modeli, bir [[money-market|para piyasasında]] faizin nasıl belirleneceğini yazan formüldür. Oranı bir komite toplanıp açıklamaz, bir yetkili elle girmez; formül sözleşmede durur ve herkes girdisini de çıktısını da okuyabilir.

Modelin tek girdisi vardır: havuzun [[utilization-rate|kullanım oranı]], yani arzın ne kadarının borç olarak dışarıda olduğu.

## Nasıl çalışır?

Kural tek cümleye sığar: kullanım oranı yükseldikçe faiz artar.

Eğri düz bir çizgi değildir. Kullanım düşükken faiz düşük tutulur ve yavaş yükselir; belirli bir kullanım seviyesinden sonra eğim sertleşir ve faiz hızla tırmanır. O kırılma noktası, protokolün "bu havuzda bundan fazlası dışarıda olmasın" dediği yerdir.

Sertleşen eğri bir ceza değil, bir denge aracıdır. Yüksek faiz iki yönde birden çalışır: havuza yeni arz çeker ve borçluyu pozisyonunu kapatmaya iter. İkisi de kullanım oranını aşağı, yani likiditeyi havuza geri çeker.

Borç faizi ile mevduat faizi aynı formülden çıkar ama aynı değildir. Borçluların ödediği faiz mevduat sahiplerine kullanım oranıyla orantılı dağıtılır: havuzun bir kısmı zaten boş durduğu için mevduat tarafına düşen oran her zaman daha düşüktür. Aradan ayrıca bir rezerv payı kesilir.

## Dikkat

Bu faiz sabit değildir. Borç aldığın andaki oran sana verilmiş bir taahhüt değil, o anın okumasıdır; havuza büyük bir borçlu girdiğinde sen hiçbir şey yapmadan yükselebilir.

Yüksek bir mevduat faizi de kendi başına iyi haber değildir: aynı sayı, havuzun büyük kısmının dışarıda olduğunu, yani çıkışın daraldığını söylüyordur. Modelin ne dediğini anlamak için çıktısına değil girdisine bakmak gerekir.
