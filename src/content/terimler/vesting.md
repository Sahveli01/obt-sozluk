---
term: "Vesting"
tr: ""
aliases: []
category: tokenlar
subcategory: "Tokenomi"
level: orta
short: "Tahsis edilen token'ların hepsinin bir anda değil, belirli bir takvim boyunca parça parça hak edilmesi."
related: [cliff, token-unlock, allocation, circulating-supply, timelock]
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

Vesting, bir kişiye ya da kuruma ayrılan token'ların hepsinin hemen eline geçmemesi, bir takvim boyunca parça parça hak edilmesidir. Amaç, payı alan tarafı belirli bir süre boyunca projeye bağlı tutmaktır.

Türkçede yerleşmiş tek bir karşılığı yok; "hak ediş" ya da "kademeli hak kazanma" gibi çeviriler denense de sektörde İngilizcesiyle kullanılır.

## Nasıl çalışır?

Bir vesting takvimi üç parçadan oluşur: başlangıç tarihi, toplam süre ve süre içinde nasıl açılacağı. Açılış doğrusal olabilir — her gün küçük bir miktar — ya da kademeli: belirli aralıklarla daha büyük dilimler. Takvimin başında çoğu zaman bir [[cliff]] bulunur.

Kilidin nerede durduğu belirleyicidir. Token'lar bir vesting sözleşmesine yatırılmışsa kural koda yazılıdır ve kimse öne alamaz; bu iş için çoğu zaman bir [[timelock|zaman kilidi]] kullanılır. Token'lar kurucunun kendi cüzdanında duruyor ve takvim yalnızca bir belgede yazıyorsa ortada teknik bir kilit değil, bir taahhüt vardır. İkisi zincirde farklı görünür.

## Dikkat

Kilitli olmak etkisiz olmak demek değildir. Vesting'deki token çoğu tasarımda transfer edilemez ama oy kullanabilir ya da stake edilebilir; yani [[circulating-supply|dolaşımdaki arza]] girmediği hâlde yönetişimde ağırlığı olur.

İkinci nokta: "hak edildi" ile "cüzdana geçti" aynı an olmayabilir. Çoğu sözleşmede hak edilen kısmı almak için ayrıca bir talep işlemi göndermek gerekir; o işlem gönderilene kadar token sözleşmede durur. Takvimdeki eşiğin geldiği ana [[token-unlock|kilit açılışı]] denir.
