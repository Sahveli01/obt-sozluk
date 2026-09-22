---
term: "Ordinals"
tr: ""
aliases: []
category: nft
subcategory: ""
level: ileri
short: "Bitcoin'de her satoshi'ye üretim sırasına göre numara veren, protokolün parçası olmayan bir yorum katmanı."
related: [inscription, brc-20, bitcoin, satoshi-birim, utxo]
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

Ordinals, [[bitcoin|Bitcoin]] ağındaki her [[satoshi-birim|satoshi]]'ye bir sıra numarası veren bir numaralandırma yöntemidir. Satoshi'ler üretildikleri sıraya göre numaralanır; böylece "kaçıncı satoshi" sorusu anlam kazanır ve tek tek birimler birbirinden ayırt edilebilir hâle gelir.

Kritik nokta şudur: bu numaralar Bitcoin protokolünün bir parçası değildir. Ağ onları ne üretir, ne bilir, ne de doğrular. Numaralandırma tamamen dışarıdan uygulanan bir yorum katmanıdır.

## Benzetme

Banknotların seri numaralarını kaydedip bazılarını "özel" sayan bir koleksiyoncu topluluğu gibi. Numaralar banknotun üstünde gerçekten yazar, uydurma değildir. Ama parayı basan kurum böyle bir ayrım tanımaz; kasiyer için hepsi aynı banknottur. Ayrım yalnızca aynı listeyi tutan ve aynı kurallara uyan insanlar arasında geçerlidir.

## Nasıl çalışır?

Kural iki parçadan oluşur. Birincisi numaralandırma: satoshi'ler üretildikleri blok sırasına göre numara alır. İkincisi izleme: bir işlemde girişteki satoshi'ler, çıkışlara "ilk giren ilk çıkar" mantığıyla dağıtılmış kabul edilir.

Bu kural, [[utxo|UTXO]] modelinde aslında var olmayan bir şeyi tanımlar. Bitcoin için bir UTXO yalnızca bir tutardır; içindeki birimlerin kimliği yoktur. Ordinal yazılımı o tutarı kendi kuralıyla bölerek her birime bir kimlik atar.

Bu kimlikler, üzerlerine veri iliştirilmesini mümkün kılar; o işleme [[inscription|inscription]] denir ve [[brc-20|BRC-20]] gibi deneylerin dayandığı temel budur.

## Dikkat

Aynı numaralandırmayı uygulamayan bir düğüm için bu ayrımların hiçbiri yoktur. Bir satoshi'yi diğerinden ayıran şey ağ değil, o kurallar üzerinde anlaşan yazılımlardır; anlaşma bozulursa ayrım da kaybolur.

Yazıldığı tarih itibarıyla bu yaklaşım Bitcoin topluluğunda tartışmalıdır. Tartışmanın merkezinde, sınırlı olan blok alanının para transferi dışındaki veriler için kullanılması vardır: bir tarafta ücretini ödeyen her kullanımın meşru olduğu görüşü, diğer tarafta zincirin amacından sapıldığı eleştirisi durur.
