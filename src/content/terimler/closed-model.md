---
term: "Closed Model"
tr: "Kapalı model"
aliases: ["kapalı model", "kapalı ağırlıklı model"]
category: yapay-zeka
subcategory: "Büyük dil modelleri"
level: orta
short: "Ağırlıkları yayımlanmayan, yalnızca sağlayıcının sunduğu arayüz üzerinden kullanılabilen model."
related: [open-weight-model, llm-api, token-pricing, inference, guardrails]
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

Kapalı model, ağırlıkları yayımlanmayan ve yalnızca sağlayıcının sunduğu arayüz üzerinden kullanılabilen modeldir. Kullanıcı isteğini gönderir, cevabını alır; modelin dosyalarına erişemez, kendi donanımında çalıştıramaz. Erişim genelde bir [[llm-api|LLM API]]'si üzerinden ve kullandığın kadar ödeme düzeniyle olur.

## Nasıl çalışır?

İşin ağır kısmı sağlayıcıda kalır: donanım, ölçeklendirme, güncelleme ve [[inference|çıkarım]] verimliliği onun sorunudur. Sen yalnızca istek gönderirsin; maliyet genelde işlenen parça başına hesaplanır ve [[token-pricing|token fiyatlandırması]] olarak geçer. Model sağlayıcının kontrolünde olduğu için filtreler ve [[guardrails|koruma bantları]] da merkezî biçimde uygulanır, tek seferde güncellenebilir.

Buna karşılık kullandığın sürüm senin elinde değildir. Sağlayıcı modeli güncellediğinde, emekli ettiğinde ya da kullanım kurallarını değiştirdiğinde uygulamanın davranışı da değişir; aynı istem dün başka, bugün başka sonuç verebilir. Veri de kendi sistemlerinden çıkıp sağlayıcıya gider, bu yüzden gizlilik gerektiren işlerde sözleşme ve veri saklama koşulları önem kazanır.

## Dikkat

Kapalı ile [[open-weight-model|açık ağırlıklı]] arasındaki seçim teknik olduğu kadar politiktir ve iki taraf da kendi gerekçesini savunur. Kapalı yaklaşımı savunanlar yeteneklerin kontrollü biçimde dağıtılmasını, kötüye kullanım hâlinde erişimin kesilebilmesini ve eğitim maliyetini karşılayacak bir gelir modelinin sürdürülebilirliğini öne çıkarır. Eleştirenler bağımsız denetimin mümkün olmamasını, tek bir sağlayıcıya bağımlılığı ve sürüm değişikliklerinin geri alınamamasını gösterir.

Pratikte bu bir ya-ya-da seçimi de değildir: birçok ekip aynı üründe ikisini birlikte kullanır — hassas ya da yüksek hacimli işleri kendi çalıştırdığı modele, geri kalanı sağlayıcıya verir.
