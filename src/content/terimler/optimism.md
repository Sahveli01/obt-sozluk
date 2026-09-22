---
term: "Optimism"
tr: ""
aliases: []
category: aglar
subcategory: ""
level: orta
short: "Yürütmeyi Ethereum kurallarına olabildiğince yakın tutan ve yazılımını başka zincirlerin de kullandığı ortak bir yığın olarak yayımlayan katman 2 projesi."
related: [optimistic-rollup, evm-equivalence, layer-2, sequencer, rollup-as-a-service-raas, ethereum]
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

Optimism, [[ethereum|Ethereum]] üzerinde çalışan bir [[optimistic-rollup|iyimser rollup]]'tır. Tercihlerinin merkezinde iki karar durur: yürütmeyi Ethereum'un kendi kurallarına olabildiğince yakın tutmak ve kullandığı yazılımı, başka zincirlerin de aynı temeli kullanabileceği ortak bir yığın olarak açık kaynakla yayımlamak.

## Nasıl çalışır?

Birinci karar [[evm-equivalence|EVM eşdeğerliği]] hedefidir: sözleşmeler ve geliştirici araçları Ethereum'daki gibi davransın, ayrı bir dil ya da ayrı bir derleyici öğrenmek gerekmesin. Mekanizmanın geri kalanı ailenin ortak mekanizmasıdır — işlem verisi ana zincire yazılır, sonuçlar doğru varsayılır, anlaşmazlık çıkarsa [[fraud-proof|hile ispatı]] devreye girer.

İkinci karar mimariden çok ekosistemle ilgilidir. Aynı kod tabanını kullanan zincirler benzer köprü ve yükseltme kalıplarını paylaşır, aralarında ortak standartlar tanımlanabilir; kendi zincirini kurmak isteyen bir ekip için bu hazır bir temel demektir. Yönetişim tarafında proje, jeton oylamasını bağış kararlarından ayıran iki kanatlı yapısıyla ve [[retroactive-public-goods-funding|geriye dönük kamu malı fonlaması]] fikriyle tanınır.

## Dikkat

İtiraz temelli tasarımın bedeli burada da aynıdır: ana zincire geri çekim, itiraz penceresi kapanana kadar bekler ve güvenlik en az bir dürüst tarafın zamanında itiraz etmesine dayanır. Yazıldığı tarih itibarıyla [[sequencer|sıralayıcı]] merkezî olarak işletiliyor; işlem sırasını belirleyebilir, buna karşılık veriyi ana zincire yazmak zorundadır.

Ayrıca aynı yığını kullanmak aynı güvenlik anlamına gelmez. Her zincirin kendi yükseltme anahtarları, kendi köprü sözleşmeleri ve kendi sıralayıcısı vardır; bunlar zincirden zincire değişir.
