---
term: "Archive Node"
tr: ""
aliases: ["arsiv dugumu", "arsiv node"]
category: temeller
subcategory: "Ağ ve node"
level: ileri
short: "Yalnızca güncel durumu değil, geçmişteki her bloğa ait durumu da saklayan node."
related: [full-node, node, state-blockchain, pruning, indexer, block-explorer]
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

Archive node, zincirin geçmişini yalnızca blok blok değil, **durum** olarak da saklayan bir [[full-node|full node]] yapılandırmasıdır. Sıradan bir node "şu anda bu adreste ne var?" sorusuna cevap verir; archive node "üç yıl önceki filanca blokta bu adreste ne vardı?" sorusuna da cevap verir. Türkçede yerleşmiş bir karşılığı yok, "archive node" olarak kullanılır.

## Nasıl çalışır?

Zincirin [[state-blockchain|state]] verisi her blokta değişir. Normal bir node yalnızca en son durumu tutar, eski ara durumları ise [[pruning|budayarak]] atar; çünkü geçmişi doğrulamak için onları bir kez kullanmış olması yeter. Archive node bu budamayı kapatır ve her bloktan sonraki durumu erişilebilir biçimde saklar — ya doğrudan saklayarak ya da geçmişi hızlıca yeniden üretebilecek ara kayıtlar tutarak.

Bunun bedeli disktir: arşiv modunda depolama ihtiyacı budanmış bir node'a kıyasla kat kat büyür ve zincir uzadıkça büyümeye devam eder. Bu yüzden archive node'u genelde son kullanıcılar değil, geçmiş veriye ihtiyaç duyan servisler çalıştırır: [[block-explorer|blok gezginleri]], [[indexer|indeksleyiciler]], analiz araçları ve eski bir işlemin neden başarısız olduğunu adım adım çözmek isteyen geliştiriciler.

## Dikkat

Archive node daha "doğru" ya da daha güvenli bir node değildir; kuralları uygulama biçimi sıradan bir full node ile aynıdır, tek farkı daha çok şey hatırlamasıdır. Gerçek disk ve senkron maliyeti zincire, istemci yazılımına ve arşivleme yöntemine göre ciddi biçimde değişir; bir sayı duyduğunda hangi zincir ve hangi yazılım için söylendiğini sor.
