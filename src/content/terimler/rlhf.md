---
term: "RLHF"
tr: ""
aliases: ["reinforcement learning from human feedback", "insan geri bildirimiyle pekiştirmeli öğrenme"]
category: yapay-zeka
subcategory: "Büyük dil modelleri"
level: ileri
short: "İnsanların cevaplar arasında yaptığı tercihlerden yola çıkarak modeli tercih edilen davranışa yönelten eğitim yöntemi."
related: [instruction-tuning, reinforcement-learning, alignment, fine-tuning, constitutional-ai]
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

RLHF (reinforcement learning from human feedback), bir modeli insan tercihlerine göre ayarlayan eğitim yöntemidir. Çıkış noktası şu sorundur: "iyi cevap" kolayca puanlanabilen bir şey değildir. Açıklık, uygun uzunluk, gereksiz çekincelerden kaçınma gibi nitelikler doğru–yanlış diye etiketlenemez. Bu yüzden insanlardan tek tek not vermeleri değil, karşılaştırma yapmaları istenir: iki cevaptan hangisi daha iyi?

## Nasıl çalışır?

Üç adım vardır. Önce model aynı isteğe birden çok cevap üretir, insanlar bunları iyiden kötüye sıralar. Sonra bu sıralamalarla ayrı bir model eğitilir; bu ödül modeli, verilen bir cevabın insanlarca ne kadar beğenileceğini tahmin etmeyi öğrenir. Son adımda asıl model, ödül modelinden yüksek puan alan cevaplara doğru [[reinforcement-learning|pekiştirmeli öğrenmeyle]] itilir — ama aynı zamanda başlangıçtaki hâlinden fazla uzaklaşmaması için frenlenir, yoksa dili ve genel becerileri bozulur.

Yöntem genellikle [[instruction-tuning|instruction tuning]] aşamasından sonra uygulanır ve tek seferlik değildir: geri bildirim toplama, eğitme, ölçme döngüsü tekrarlanır.

## Dikkat

RLHF modeli "doğru"ya değil, "insanların beğendiği"ne yaklaştırır. İkisi her zaman örtüşmez: kendinden emin ve akıcı yazılmış yanlış bir cevap, temkinli ve doğru bir cevaptan daha çok beğenilebilir. Modellerin gereğinden fazla onaylayıcı olma eğiliminin bir sebebi budur.

Geri bildirimi kimin verdiği de sonucu belirler; farklı gruplar farklı tercihler üretir ve bu tercihler modele geçer. Bu yüzden yöntem tek başına [[alignment|hizalama]] sorununu çözmez, yalnızca araçlardan biridir. Geri bildirimin bir kısmını insan yerine modele ürettiren [[constitutional-ai|Constitutional AI]] gibi yaklaşımlar da bu yöntemin ölçek ve maliyet sınırlarına yanıt olarak geliştirilmiştir.
