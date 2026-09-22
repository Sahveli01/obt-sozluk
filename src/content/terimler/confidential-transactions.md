---
term: "Confidential Transactions"
tr: ""
aliases: []
category: guvenlik
subcategory: "Gizlilik"
level: ileri
short: "İşlem tutarının zincirde gizlendiği, buna rağmen toplamların doğruluğunun herkesçe doğrulanabildiği şema."
related: [privacy-coin, commitment-scheme, zero-knowledge-proof-zkp, anonymity-set, chain-analysis]
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

Confidential transactions, bir işlemdeki tutarın zincire açık yazılmadığı, yerine tutarı açığa çıkarmayan bir taahhüdün yazıldığı yöntemdir. Doğrulayıcılar rakamı hiç görmeden iki şeyi kontrol edebilir: girişlerin toplamı çıkışların toplamına eşittir ve hiçbir çıkış negatif değildir.

Yani para uydurulmadığı kanıtlanır, miktar açılmadan. Türkçede yerleşik bir karşılığı yok; metinlerde "gizli tutarlı işlem" diye tarif ediliyor.

## Benzetme

Tutarları karartılarak paylaşılan bir muhasebe defteri gibi. Kimden kime satırları okunmaya devam eder, tarihler yerinde durur, yalnızca rakamlar okunmaz. Defterin toplamının tuttuğunu yine de gösterebilirsin. Ama kimin kiminle çalıştığı sorusu bu karartmayla cevapsız kalmaz.

## Nasıl çalışır?

Tutar, bağlayıcı olan ama içeriğini açmayan bir [[commitment-scheme|taahhüt şemasıyla]] yazılır. Kullanılan taahhütler toplanabilir olduğu için doğrulayıcı, tek tek rakamları bilmeden girişlerin ve çıkışların taahhütlerini toplayıp eşit olduklarını görebilir.

Tek başına bu yetmez: sayı aritmetiğindeki taşma kullanılarak gizlenmiş bir negatif tutar, yoktan para üretmeye yarardı. Bu yüzden her çıkışa, tutarın makul bir aralıkta kaldığını tutarı söylemeden kanıtlayan bir aralık ispatı eklenir — bir [[zero-knowledge-proof-zkp|sıfır bilgi ispatı]] türü. İşlem boyutunu asıl büyüten şey bu ispatlardır.

## Dikkat

Tutarın gizlenmesi grafiği gizlemez. Hangi çıkışın nerede harcandığı görünmeye devam ediyorsa "kim kiminle işlem yapıyor" sorusu hâlâ cevaplanabilir. Tutar gizliliği ile bağlantı gizliliği ayrı problemlerdir; bir [[privacy-coin|gizlilik odaklı zincir]] genelde ikisini birden hedefler, tek başına bu şema yalnızca birincisini çözer.

Karartılan rakam dolaylı yoldan da geri gelebilir: aynı tutarın zincirin başka bir yerinde açıkta görünmesi ya da bir işleme girenlerin fazla ayırt edici olması rakamı tahmin edilebilir kılar. [[anonymity-set|Anonimlik kümesi]] burada da belirleyicidir.

Yazıldığı tarih itibarıyla bu tekniklerin düzenlemedeki karşılığı ülkeden ülkeye değişiyor ve netleşmiş değil; bulunduğun yerin güncel kurallarına bakman gerekir.
