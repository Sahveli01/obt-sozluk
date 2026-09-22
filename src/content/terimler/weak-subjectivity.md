---
term: "Weak Subjectivity"
tr: "Zayıf Öznellik"
aliases: ["zayıf öznellik"]
category: konsensus
subcategory: "Kesinlik ve güvenlik özellikleri"
level: ileri
short: "Ağa yeni katılan ya da uzun süre kapalı kalmış bir düğümün doğru zinciri bulmak için güvenilir bir referans noktasına ihtiyaç duyması."
related: [checkpoint, long-range-attack, node-synchronization, proof-of-stake-pos, genesis-block, finality]
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

Tamamen **nesnel** bir sistemde elinde yalnızca protokol kuralları ve [[genesis-block|genesis bloğu]] olsa bile, sana sunulan zincirlerden hangisinin doğru olduğunu kendi başına hesaplayabilirsin. Kimseye sormana gerek kalmaz.

**Zayıf öznellik**, bu hesabın her durumda yapılamadığını açıkça kabul eden tasarım koşuludur: ağa ilk kez katılan ya da uzun süredir kapalı kalmış bir düğüm, yakın geçmişten güvendiği bir referans noktası almadan karar veremez. "Zayıf" olmasının sebebi, bu güvenin yalnızca bir kez — katılma anında — gerekmesidir.

## Nasıl çalışır?

Ağda sürekli açık duran bir düğümün böyle bir sorunu yoktur; hangi zincirin gerçekten yaşandığını kendi gözüyle görmüştür. Sonradan gelene sunulan alternatif bir geçmiş ise kâğıt üstünde kusursuz görünebilir: imzalar geçerli, bloklar bağlı, kurallar temiz ([[long-range-attack|long-range attack]] bu boşluğu hedefler).

Çözüm, başlangıç noktasını değiştirmektir. Düğüme genesis yerine yakın geçmişten üzerinde uzlaşılmış bir blok verilir ([[checkpoint|checkpoint]]) ve düğüm o noktanın öncesini tartışmaya açmaz. Referansın nereden geldiği önemlidir: istemci yazılımının içine gömülü olabilir, birden fazla bağımsız kaynaktan karşılaştırılarak alınabilir ya da tanıdığın bir düğümden gelebilir.

Bir de sessiz kuralı vardır: referans "yeterince yakın" olmalıdır. Aradan çok zaman geçmişse eski doğrulayıcı kümesi dağılmış olabilir ve o referans artık tek başına koruma sağlamaz.

## Dikkat

Bu, "sistem aslında güvene dayanıyor" demek değildir. Güven tek bir noktada, bir kez harcanır; ondan sonrası yine nesnel kurallarla yürür ve yeterince derine gömülmüş bloklar [[finality|geri alınamaz]] hâle gelir.

Pratik karşılığı düğüm işletenler içindir: uzun süre kapalı kalmış bir düğümü sıfırdan senkronlarken referans noktasını rastgele bir kaynaktan değil, güvendiğin ve karşılaştırabildiğin kaynaklardan al ([[node-synchronization|senkronizasyon]]).
