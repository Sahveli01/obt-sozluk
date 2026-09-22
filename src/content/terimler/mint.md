---
term: "Mint"
tr: "Basım"
aliases: []
category: tokenlar
subcategory: "Tokenomi"
level: baslangic
short: "Yeni token yaratma işlemi: sözleşme toplam arzı artırır ve yaratılan miktarı bir adresin bakiyesine yazar."
related: [total-supply, token-burn, access-control, emission-schedule, token-inflation]
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

Mint, yeni token yaratmaktır. Sözleşmenin yaptığı iş iki satırlık bir güncellemedir: [[total-supply|toplam arzı]] artırır ve yaratılan miktarı bir adresin bakiyesine ekler. Hiçbir yerden transfer gelmez; token o an var olur. Türkçede "basmak" denir.

Aynı kelime [[non-fungible-token-nft|NFT]] tarafında da kullanılır; orada da yeni bir kayıt yaratılır, ama yaratılan şey bölünebilir bir bakiye değil, tek tek numaralanmış bir varlıktır.

## Benzetme

Okul kantininin fiş koçanı gibi. Fişler tek tek kesilir ve kantinde para yerine geçer. Ama koçanın kendisi müdürün odasındaki dolapta durur: o dolabın anahtarı kimdeyse fiş sayısını istediği an artırabilir, üstelik fişi cebinde taşıyan öğrencinin haberi olmadan. Fişin ne işe yaradığını bilmek yetmez; kimin yeni fiş basabildiğini de bilmek gerekir.

## Dikkat

Bir token sözleşmesine bakarken sorulacak en önemli soru budur: **kim basabiliyor?** Basım fonksiyonu normalde [[access-control|erişim denetimiyle]] korunur ve yalnızca belirli bir rol çağırabilir. Denetim eksik ya da hatalı kurulmuşsa ortaya bir [[access-control-vulnerability|yetki açığı]] çıkar; sınırsız basım yapılabilen bir token'da arz kuralları anlamını kaybeder.

Yetkinin var olması tek başına sorun değil — çoğu ağ yeni token'ı [[emission-schedule|takvime bağlı]] olarak basar. Sorun, yetkinin kimde olduğunun ve neyle sınırlandığının belirsiz kalmasıdır.
