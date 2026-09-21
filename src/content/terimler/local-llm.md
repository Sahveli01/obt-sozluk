---
term: "Local LLM"
tr: "Yerel LLM"
aliases: ["yerel model"]
category: yapay-zeka
subcategory: "Büyük dil modelleri"
level: baslangic
short: "Bir dil modelini uzak bir sunucu yerine kendi bilgisayarında indirip çalıştırmak."
related: [large-language-model-llm, open-weight-model, quantization, llm-api, inference]
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

Yerel LLM, bir [[large-language-model-llm|dil modelini]] uzaktaki bir sunucuya bağlanmadan kendi bilgisayarında çalıştırmaktır. Model dosyasını indirirsin, hesap senin makinende yapılır ve yazdıkların cihazdan dışarı çıkmaz. Bunun için modelin ağırlıklarının indirilebilir olması gerekir; bu yüzden yerel çalıştırma [[open-weight-model|açık ağırlıklı modellerle]] mümkündür.

## Benzetme

Evinde jeneratör bulundurmak gibi. Şebekeye bağlı değilsin: kesinti seni etkilemez, ne çalıştırdığını kimse görmez. Karşılığında yakıtı sen alırsın, gürültüye sen katlanırsın ve jeneratörün gücü bir santralin gücü değildir.

## Dikkat

Yerel çalıştırmanın asıl kazancı gizlilik ve bağımsızlıktır; hız ve yetenek değil. Yazıldığı tarih itibarıyla sıradan bir dizüstü bilgisayarda dönen modeller, aynı ailenin büyük sürümlerinin gerisinde kalır. [[quantization|Quantization]] bu farkı kapatmaz, yalnızca modeli makineye sığdırır.

İkinci yanılgı "yerel olan ücretsizdir" sanmaktır. [[llm-api|API]] faturası gelmez, ama donanım, elektrik ve kurulumla geçen zaman da bir maliyettir.
