---
term: "Canonical Bridge"
tr: "Kanonik köprü"
aliases: ["native bridge"]
category: olceklenme
subcategory: "Köprüler ve zincirler arası"
level: orta
short: "Bir zincirin kendi protokolüyle birlikte gelen resmî köprüsü; o zincire güvenmenin ötesinde yeni bir güven varsayımı eklemez."
related: [blockchain-bridge, third-party-bridge, layer-2, challenge-period, withdrawal-period, forced-withdrawal-escape-hatch]
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

Kanonik köprü, bir zincirin — çoğunlukla bir [[layer-2|katman 2]]'nin — kendi protokolüyle birlikte gelen resmî köprüsüdür. Yatırma ve çekme kuralları zincirin kendi sözleşmelerinde tanımlıdır; araya dışarıdan bir imzacı kümesi girmez.

Bu köprünün bastığı temsil, o varlığın ilgili zincirdeki kanonik, yani asıl biçimi sayılır. Başka köprülerin bastığı sürümler onun yanında ikinci bir sürüm olarak dolaşır.

## Benzetme

Vizeyi ülkenin kendi konsolosluğundan almak gibi. Aracı bir ofisten gelen belgeye o ofisin dürüstlüğü kadar güvenirsin; konsolosluktan gelen belgede ise zaten girmek istediğin ülkeden başka kimseye güvenmiş olmazsın. Buna karşılık işlem yavaştır, çünkü kontrolü yapan makam kendi usulünü sonuna kadar işletir.

## Nasıl çalışır?

Yatırma hızlıdır: varlığı ana zincirdeki köprü sözleşmesine bırakırsın, katman 2 bunu kendi tarafında hesabına yazar.

Çekme yavaştır ve yavaşlığın sebebi köprü değil, zincirin güvenlik modelidir:

- İyimser kurguda ([[optimistic-rollup]]) sonucun doğruluğu "kimse itiraz etmedi" varsayımına dayanır. Bu yüzden çekim, bir [[challenge-period|itiraz süresi]] boyunca beklemek zorundadır; bu bekleme [[withdrawal-period|çekim süresi]] diye anılır.
- Geçerlilik kanıtlı kurguda ([[zk-rollup]]) beklenen şey bir [[validity-proof|geçerlilik kanıtı]]nın üretilip ana zincirde doğrulanmasıdır. Süre, kanıt üretimi ve gönderim aralığı kadardır.

## Dikkat

"Kanonik" güvenli demek değil, **fazladan güven eklemiyor** demektir. Zincirin sözleşmeleri yükseltilebilir durumdaysa o yükseltme anahtarları köprünün de anahtarıdır; sorulacak soru anahtarın kimde olduğudur.

Beklemekten kaçmak için kullanılan hızlı çıkış hizmetleri kanonik köprünün güven varsayımının dışındadır: orada artık bir üçüncü tarafa güvenirsin.

Kanonik köprünün sessiz avantajı, sıralayıcı durduğunda bile ana zincir üzerinden çıkış yolu bırakmasıdır ([[forced-withdrawal-escape-hatch|zorunlu çekim]]).
