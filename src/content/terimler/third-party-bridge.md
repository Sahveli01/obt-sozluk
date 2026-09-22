---
term: "Third-party Bridge"
tr: "Üçüncü taraf köprü"
aliases: ["external bridge"]
category: olceklenme
subcategory: "Köprüler ve zincirler arası"
level: orta
short: "Zincirlerin hiçbirinin protokolüne ait olmayan, kendi doğrulayıcı kümesiyle çalışan bağımsız köprü."
related: [blockchain-bridge, canonical-bridge, bridge-exploit, multisig, liquidity-network-bridge, wrapped-token]
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

Üçüncü taraf köprü, bağladığı zincirlerin hiçbirine ait olmayan, bağımsız bir ekibin kurduğu ve işlettiği köprüdür. Genelde çok sayıda zincir çiftini destekler, geçiş süresi [[canonical-bridge|kanonik köprü]]ye göre kısadır ve iki zincir arasında resmî bir yol yoksa tek seçenektir.

Bedeli açıktır: artık yalnızca iki zincire değil, aralarında duran üçüncü bir tarafa da güveniyorsundur.

## Nasıl çalışır?

Fark, "kaynak zincirde şu oldu" hükmünü kimin verdiğindedir.

**Dış doğrulayıcı kümesi.** Köprünün kendi doğrulayıcıları olayı izler ve imzalar; hedef zincirdeki sözleşme yeterli sayıda imza görünce geçişi kabul eder. Güvenlik burada tamamen kümenin büyüklüğüne, eşiğine, birbirinden ne kadar bağımsız olduğuna ve anahtarların nasıl saklandığına bağlıdır ([[multisig|çoklu imza]]).

**Kanıt doğrulayan kurgu.** Hedef zincirde kaynak zincirin [[light-client|hafif istemcisi]] çalışır; hüküm imzalardan değil doğrulamadan gelir. Daha az güven, daha yüksek maliyet.

**İyimser kurgu.** Mesaj bir süre bekletilir; bir gözlemci itiraz etmezse geçerli sayılır. Güvenlik, en az bir dürüst gözlemcinin varlığına dayanır.

Varlık tarafında ise ya [[lock-and-mint]] ya da [[liquidity-network-bridge|likidite havuzlarından ödeme]] kullanılır.

## Dikkat

Aynı varlığın farklı köprülerce basılmış birden fazla sürümü dolaşabilir. Aynı ismi taşısalar da bunlar birbirinin yerine geçmez; likidite bölünür ve yanlış sürümü bir havuza götürmek karşılıksız kalabilir ([[wrapped-token|sarmalanmış token]]).

Bir köprüyü değerlendirirken sorulacaklar sabittir: kaç imzacı var, eşik kaç, anahtarlar nerede duruyor, sözleşmeler yükseltilebilir mi ve yükseltme anahtarı kimde. Bu soruların cevabı köprünün gerçek güvenlik seviyesidir; saldırıların nasıl işlediğini [[bridge-exploit|köprü istismarı]] anlatıyor.
