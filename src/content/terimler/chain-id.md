---
term: "Chain ID"
tr: "Zincir kimliği"
aliases: ["zincir kimliği", "chainid"]
category: temeller
subcategory: "Bloklar ve işlemler"
level: orta
short: "Bir ağı diğerlerinden ayıran sayısal kimlik; imzalanan bir işlemin yalnızca o ağda geçerli olmasını sağlar."
related: [replay-attack, transaction, testnet, mainnet, genesis-block]
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

Zincir kimliği, bir ağı diğer ağlardan ayıran sayısal bir etikettir. Ana ağın, test ağlarının ve aynı yazılımı kullanan başka zincirlerin her birinin kendi kimliği vardır. Cüzdanlar ve uygulamalar hangi ağa bağlı olduklarını bu değerden bilir.

## Nasıl çalışır?

Asıl işi imzada görülür. Bir [[transaction|işlem]] imzalanırken zincir kimliği de imzanın kapsamına girer; böylece imza yalnızca o ağ için geçerli olur. Başka bir ağa kopyalanan aynı imzalı işlem, kimlik uymadığı için reddedilir.

Bu, [[replay-attack|tekrar saldırısına]] karşı doğrudan bir savunmadır. Özellikle bir zincir ikiye bölündüğünde iki tarafın adresleri ve bakiyeleri aynı olduğu için, kimlik ayrımı olmasa bir tarafta imzalanan işlem diğer tarafta da aynen geçerli olurdu.

Cüzdanlar ayrıca kullanıcıyı korumak için bu değeri kontrol eder: [[testnet|test ağındayken]] farkında olmadan ana ağ işlemi imzalamanı ya da varlığı yanlış ağa göndermeni bu sayede engelleyebilirler.

## Benzetme

Farklı şehirlerde aynı isimli sokaklar vardır. Adrese şehri yazmazsan mektup teslim edilir — ama yanlış şehirde. Zincir kimliği, adresin başındaki şehir adıdır.

## Dikkat

Zincir kimliği bir güvenlik sınırı değil, ayırt edici bir etikettir. Doğru kimliğe bağlanmış olman karşındaki [[rpc-node|RPC düğümünün]] dürüst olduğunu göstermez; kimlik sana hangi ağda olduğunu söyler, o ağdan gelen verinin doğru olduğunu değil.
