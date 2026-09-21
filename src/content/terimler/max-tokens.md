---
term: "Max Tokens"
tr: ""
aliases: ["azami token", "output limit"]
category: yapay-zeka
subcategory: "Büyük dil modelleri"
level: baslangic
short: "Bir istekte modelin üretebileceği en fazla token sayısını belirleyen üst sınır."
related: [token-ai, context-window, token-pricing, temperature, llm-api]
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

Max tokens, bir istekte modelin üretmesine izin verilen en fazla [[token-ai|token]] sayısıdır. Model bu sınıra ulaştığında, cevabı bitmiş olsun olmasın üretmeyi bırakır. Amaç hem maliyeti hem de bekleme süresini öngörülebilir tutmaktır. Türkçeye "azami token" diye çevrilebilir, ama [[llm-api|API]] alan adlarında İngilizce hâli yazdığı için terim öyle kullanılır.

## Benzetme

Panelde konuşmacıya verilen süre gibi. "Beş dakikan var" denir ve süre dolduğunda mikrofon kapanır. Konuşmacı sözünü toparlamışsa sorun yok; toparlamamışsa cümlenin ortasında kesilir. Süre konuşmanın uzunluğunu belirler, kalitesini değil.

## Dikkat

Bu sınır bir hedef değil tavandır. Küçük bir değer modele "kısa yaz" demez; yalnızca uzun yazarsa onu ortadan keser. Kısa cevap istiyorsan bunu isteminde söylemen gerekir.

Sık karıştırılan ikinci şey [[context-window|bağlam penceresidir]]. Bağlam penceresi girdi ile çıktının birlikte sığması gereken toplam alandır; max tokens ise yalnızca çıktının üst sınırıdır ve o pencerenin içinde kalır. Yarıda kesilen bir cevabın [[token-pricing|ücreti]] de üretilen tokenlar kadar ödenir; kesilen cevap bedava olmaz.
