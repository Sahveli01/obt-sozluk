---
term: "Content Identifier (CID)"
tr: ""
aliases: ["cid", "content identifier", "icerik kimligi"]
category: araclar
subcategory: "Altyapı ve veri"
level: orta
short: "Bir dosyanın içeriğinden hesaplanan, içerik değişmediği sürece aynı kalan adres."
related: [ipfs, hash-function, pinning, decentralized-storage, token-uri, merkle-tree]
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

CID, bir dosyayı nerede durduğuna bakmadan tanımlayan adrestir. Dosyanın içeriğinin [[hash|hash'i]] alınır; yanına içeriğin nasıl kodlandığını ve hangi hash yönteminin kullanıldığını söyleyen küçük bilgiler eklenir ve ortaya `bafy...` ya da `Qm...` gibi başlayan bir dizi çıkar.

Aynı dosya kimin makinesinde olursa olsun aynı CID'i üretir; içerik bir bayt değişirse CID tamamen değişir. Türkçede yerleşik bir karşılığı yok, "CID" denir.

## Benzetme

Bir kişiyi ev adresiyle aramakla parmak iziyle aramak arasındaki fark gibidir. Adres kişi taşındığında yanlış yeri göstermeye başlar. Parmak izi ise kişinin kendisine aittir; kim getirirse getirsin, eline geçenin doğru kişi olup olmadığını yerinde kontrol edebilirsin. Ama parmak izini bilmek, o kişinin şu anda nerede olduğunu bilmek demek değildir.

## Nasıl çalışır?

CID çıplak bir hash değildir; içinde kendini tarif eden alanlar taşır: sürüm, içeriğin hangi biçimde kodlandığı ve hangi hash algoritmasının kullanıldığı. Bu sayede ileride yeni algoritmalar eklendiğinde eski CID'ler anlamını kaybetmez.

Büyük dosyalar tek parça hâlinde hash'lenmez. Dosya parçalara bölünür, her parçanın hash'i alınır, parçalar bir ağaçta birleştirilir ve kökten çıkan değer CID olur; yapı [[merkle-tree|Merkle ağacına]] benzer. Bunun pratik faydası şudur: dosyayı parça parça, farklı kaynaklardan indirip her parçayı ayrı ayrı doğrulayabilirsin.

Aynı içerik farklı ayarlarla eklendiğinde (farklı parçalama, farklı kodlama, farklı sürüm) farklı bir CID üretebilir. Yani "aynı dosya, farklı CID" mümkündür; tersi, yani "farklı dosya, aynı CID" pratikte beklenmez.

## Dikkat

CID bir konum değil, bir taahhüttür: "bu koda karşılık gelen içerik şudur" der; "bu içerik şu anda birilerinde duruyor" demez. Bir CID'i [[ipfs|IPFS]] ağına sorduğunda cevap alamayabilirsin — bu, CID'in bozuk olduğunu değil, o içeriği tutan kimsenin bulunamadığını gösterir. Erişilebilirlik ayrıca sağlanır: [[pinning|pinning]] ya da bir saklama anlaşmasıyla.

CID gizlilik de sağlamaz. Elinde dosyanın bir kopyası olan biri CID'i kendisi hesaplayıp o içeriğin ağda dolaşıp dolaşmadığını öğrenebilir.
