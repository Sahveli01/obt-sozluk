---
term: "Committee"
tr: "Komite"
aliases: []
category: konsensus
subcategory: "Staking ve validator'lar"
level: orta
short: "Doğrulayıcılar arasından her tur için seçilen ve o turun bloğu hakkında oy vermekle görevlendirilen alt küme."
related: [validator, attestation, proposer, epoch-blockchain, leader-election, signature-aggregation]
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

Komite, belirli bir turda oy verme görevi kendisine düşen doğrulayıcı alt kümesidir. Doğrulayıcı sayısı büyüdükçe herkesin her tura oy vermesi ağı gereksiz mesajla doldurur; bunun yerine küme parçalara bölünür ve her parça yalnızca kendi turunda konuşur. Bir [[epoch-blockchain|epoch]] boyunca sıra döner, böylece herkes dönem içinde bir kez oy vermiş olur.

## Nasıl çalışır?

Kimin hangi komiteye düşeceği rastgele belirlenir ve bu rastgeleliğin iki özelliği önemlidir: sonuç herkesin aynı şekilde hesaplayabileceği kadar nesnel, ama çok önceden bilinemeyecek kadar geç açılmalıdır. Aksi hâlde bir saldırgan sıradaki komitenin üyelerini günler öncesinden öğrenir; hepsiyle tek tek uğraşmak yerine yalnızca o birkaç kişiyi hedef alması yeterli olur.

Komite üyeleri bloğu denetleyip [[attestation|oylarını]] yayımlar. Aynı komiteden çıkan ve aynı şeyi söyleyen oylar [[signature-aggregation|tek bir imzada birleştirilebildiği]] için maliyet üye sayısıyla orantılı büyümez; komiteye bölmenin işe yaraması da buna bağlıdır.

## Dikkat

Komite bir karar mercii değildir. O turun bloğunu "onaylayıp" işi bitirmez; oyu, dönem boyunca biriken bütün oylarla birleştiğinde anlam kazanır. Küçük bir komitenin tamamı kötü niyetli olsa bile zincirin gidişatını tek başına belirleyemez — yapabileceği en fazla şey, kendi turunda gürültü çıkarmaktır.

Her tasarımda komite de yoktur. Doğrulayıcı kümesi küçük olan ağlarda herkes her tura katılır ve bölünmeye gerek kalmaz. Komite, yalnızca büyük kümelerde mesaj yükünü dağıtmak için başvurulan bir çözümdür.
