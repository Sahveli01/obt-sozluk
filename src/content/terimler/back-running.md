---
term: "Back-running"
tr: ""
aliases: []
category: defi
subcategory: "MEV ve işlem akışı"
level: orta
short: "Bir işlemin yarattığı yeni durumdan yararlanmak için hemen onun arkasına yerleştirilen işlem."
related: [front-running, sandwich-attack, maximal-extractable-value-mev, arbitrage, searcher]
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

Back-running, bir işlemin hemen **arkasına** girmektir. Hedef işlem zincire yazıldığında ortalık değişir: bir havuzun fiyatı kaymıştır, bir pozisyon tasfiye edilebilir hâle gelmiştir, bir sözleşme yeni bir kaynağı açmıştır. Arkadan gelen işlem bu yeni durumu kullanır.

[[front-running|Front-running]]'den farkı yönüdür: front-running öne geçip hedefin işini bozar, back-running ise peşine takılır ve hedefin işini bozmaz. Bu ayrım önemlidir, çünkü ikisi çoğu zaman aynı torbaya atılır.

Türkçede yerleşik bir karşılığı yok; İngilizce kullanılıyor.

## Nasıl çalışır?

Zincirde işlemler sıralıdır ve bir işlemin bıraktığı durum, bir sonrakinin başlangıç durumudur. Bir işlemin arkasını kapmak da bu yüzden bir yarıştır: aynı boşluğu gören birden çok taraf vardır ve sıraya yalnızca biri girebilir.

Back-running'in büyük bölümü [[arbitrage|arbitrajla]] iç içedir. Büyük bir takas havuzun fiyatını piyasadaki fiyatın gerisinde bırakır; arkadan gelen işlem bu farkı kapatarak havuzun fiyatını yeniden hizalar. Aynı mekanizma teminatı eşiğin altına düşmüş bir pozisyonun [[liquidation|tasfiyesinde]] de çalışır: tasfiyeyi mümkün kılan, kendisinden önceki fiyat güncellemesidir.

## Dikkat

Back-running kullanıcıya doğrudan zarar vermiyormuş gibi görünür; hedefin aldığı fiyat değişmez, çünkü o işlem çoktan olmuştur. Ama değerin kaynağı yine kullanıcının arkasında bıraktığı farktır.

İki yan etkisi vardır. Birincisi, arkayı kapma yarışı ücretleri yukarı çeker ve blok alanının bir kısmını kaybedilen tekliflerle doldurur. İkincisi, back-running tek başına bir tür olduğu kadar [[sandwich-attack|sandviç saldırısının]] da ikinci yarısıdır; "zararsız" saymadan önce hangi bağlamda kullanıldığına bakmak gerekir.
