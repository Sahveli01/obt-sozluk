---
term: "Sandwich Attack"
tr: "Sandviç Saldırısı"
aliases: []
category: guvenlik
subcategory: "Ekonomik ve protokol saldırıları"
level: orta
short: "Bir takası, fiyatı önce bozup sonra geri alan iki işlemin arasına sıkıştırıp kullanıcıya kötü fiyat ödetme."
related: [front-running, slippage, price-impact, maximal-extractable-value-mev, private-mempool, automated-market-maker-amm]
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

[[front-running|Öne geçmenin]] iki yönlü hâli. Saldırgan bekleyen takasını görür; senin işleminden hemen önce aynı yönde, hemen sonra da ters yönde bir işlem yaptırır. Ortada kalan sensin ve bozulmuş fiyattan alırsın.

Saldırı, [[automated-market-maker-amm|AMM]] havuzlarının çalışma biçiminden doğar: havuzdaki fiyat, havuzun içindeki oranla belirlenir ve her işlem o oranı biraz oynatır ([[price-impact|fiyat etkisi]]). Fiyatı bozup sonra geri almak, kimsenin izni gerekmeyen sıradan bir işlem çiftidir.

## Benzetme

Konser biletlerinin tek bir gişeden satıldığını ve fiyatın, kalan bilet azaldıkça yükseldiğini düşün. Otuz bilet alacağını duyan biri hemen önüne geçip ucuz biletlerin çoğunu topluyor; sıra sana geldiğinde tabelada daha yüksek bir rakam yazıyor. Sen aldıktan hemen sonra aynı kişi topladığı biletleri gişeye geri satıyor ve fiyat eski yerine dönüyor.

Gişe kandırılmadı, kural çiğnenmedi. Yalnızca senin işlemin iki işlemin arasına alındı ve aradaki fark birinin cebinde kaldı.

## Nasıl çalışır?

Saldırının kârı, senin kabul etmeye razı olduğun en kötü fiyat ile gerçekte olması gereken fiyat arasındaki boşluktur. Bu boşluğu sen tanımlarsın: takas ederken belirlediğin [[slippage|kayma]] toleransı, "fiyat bu kadar kötüleşirse bile kabul ediyorum" demektir. Tolerans ne kadar genişse sıkıştırılacak alan o kadar büyür.

İkinci belirleyici havuzun derinliğidir. Sığ bir havuzda küçük bir işlem bile fiyatı belirgin biçimde oynatır; derin bir havuzda aynı etkiyi yaratmak çok daha pahalıdır. Bu yüzden her işlem kârlı bir hedef değildir — saldırının da bir maliyeti vardır ve beklenen kazanç o maliyetin altında kalıyorsa kimse uğraşmaz.

## Dikkat

Kaybettiğini çoğu zaman fark etmezsin. İşlem başarıyla gerçekleşir, cüzdanına token gelir; yalnızca beklediğinden azı gelir. Hata mesajı yoktur.

Kendini korumak için:

- Toleransı işlemin gerçekten ihtiyaç duyduğu kadar bırak. "İşlem iptal olmasın" diye açılan geniş tolerans, ödediğin bedelin üst sınırını kendi elinle yükseltir.
- Sığ havuzlarda tek seferde büyük işlem yapma; işlemi bölmek hem etkiyi hem de hedef değerini küçültür.
- İşlemini herkese açık havuza düşürmeyen bir [[private-mempool|özel kanal]] üzerinden gönder.
- İşlem onayından önce arayüzün gösterdiği tahmini çıktıyı oku. Beklediğinden belirgin biçimde düşükse o an durmak, sonradan fark etmekten ucuzdur.
