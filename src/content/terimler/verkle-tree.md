---
term: "Verkle Tree"
tr: ""
aliases: []
category: kriptografi
subcategory: "Veri yapıları"
level: ileri
short: "Merkle ağacının işini çok daha küçük kanıtlarla yapmayı hedefleyen, düğümlerinde vektör taahhütleri tutan ağaç yapısı."
related: [merkle-tree, merkle-patricia-trie, merkle-proof, polynomial-commitment, stateless-client, state-growth]
disambiguation: []
tags: []
status: taslak
reviewedBy: []
dateSensitive: true
sources: []
added: 2026-09-21
updated: 2026-09-22
---

## Nedir?

Verkle ağacı, bir [[merkle-tree|Merkle ağacının]] yaptığı işi — bir verinin kümeye ait olduğunu tek bir kök değere bağlamak — çok daha küçük kanıtlarla yapmayı hedefleyen bir yapıdır. Adı "vector commitment" ve "Merkle" kelimelerinin birleşimidir; uydurulmuş bir addır, olduğu gibi kullanılır.

Çözmeye çalıştığı sorun somut. [[merkle-patricia-trie|Merkle Patricia trie]] üzerinden üretilen durum kanıtları, bir bloğun dokunduğu bütün hesapları kapsayacak kadar büyüdüğünde taşınamaz hâle gelir. Verkle ağacı bu kanıtı küçültme denemesidir.

## Nasıl çalışır?

Fark, düğümlerin ne tuttuğundadır. Merkle ağacında bir düğüm, çocuklarının hash'idir; tek bir yaprağı doğrulamak için her seviyedeki kardeşleri de göndermen gerekir. Dal sayısı arttıkça kanıt şişer, bu yüzden ağaç dar ve derin tutulur.

Verkle ağacında düğüm, çocuklarının **vektör taahhüdüdür**. Böyle bir taahhüt, tek bir çocuğun değerini kardeşleri listelemeden gösteren kısa bir açılım üretebilir. Kardeşleri taşıma zorunluluğu kalkınca dal sayısı serbestçe artırılabilir: ağaç genişler, seviye sayısı düşer, yol kısalır. Üstelik yol boyunca üretilen açılımlar tek bir kanıtta toplanabilir. Bunun matematiği [[polynomial-commitment|polinom taahhütlerine]] dayanır; ayrıntısı oraya aittir.

Asıl hedef [[stateless-client|durumsuz istemcilerdir]]: blokla birlikte gelen küçük bir kanıt o bloğu doğrulamaya yetsin, düğüm bütün durumu diskinde tutmak zorunda kalmasın. [[state-growth|Durum büyümesi]] baskısı altındaki ağlarda bu cazip bir yön.

## Dikkat

Yazıldığı tarih itibarıyla verkle ağacı üzerinde çalışılan bir yöndür, yürürlükte olan bir yapı değil. Ne zaman ve hangi biçimde geleceği hakkında kesin konuşma; tasarım tartışması sürüyor.

Takas bedava değil. Hash tabanlı bir Merkle ağacının güvenliği yalnızca [[hash-function|hash fonksiyonuna]] dair varsayımlara dayanır. Vektör taahhütleri ise ek matematiksel zorluk varsayımları ister ve bu varsayımların bir kısmı kuantum bilgisayarlara karşı hash'ler kadar rahat değildir ([[post-quantum-cryptography|kuantum sonrası kriptografi]]). Kanıt küçülürken düğümün yaptığı hesap da artar.
