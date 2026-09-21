---
term: "Open-weight Model"
tr: "Açık ağırlıklı model"
aliases: ["açık ağırlıklı model", "open weights"]
category: yapay-zeka
subcategory: "Büyük dil modelleri"
level: orta
short: "Ağırlıkları indirilip kendi donanımında çalıştırılabilen model; eğitim verisi ve kodu açık olmak zorunda değildir."
related: [closed-model, local-llm, open-source, fine-tuning, weights, hugging-face]
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

Açık ağırlıklı model, eğitilmiş [[weights|ağırlıkları]] yayımlanmış ve isteyenin indirip kendi donanımında çalıştırabildiği modeldir. Yayımlanan şey modelin öğrendiği sayılardır; eğitim verisi, eğitim kodu ve yöntemin ayrıntıları çoğu zaman paylaşılmaz. Dosyalar genelde [[hugging-face|model paylaşım platformları]] üzerinden dağıtılır.

## Nasıl çalışır?

Ağırlıklar elindeyse modeli internete bağlı olmadan çalıştırabilir, üstünde [[fine-tuning|ince ayar]] yapabilir, iç davranışını inceleyebilir ve istediğin süre boyunca aynı sürümü kullanmaya devam edebilirsin. Veri kendi makinenden çıkmadığı için [[local-llm|yerel çalıştırma]] gizlilik gerektiren işlerde tercih edilir. Karşılığında yük sana geçer: donanım, kurulum, güncelleme ve güvenlik önlemleri artık senin işindir.

Bir de lisans meselesi var. "Açık ağırlık" ile "[[open-source|açık kaynak]]" aynı şey değildir: ilki dosyaların indirilebilir olmasıdır, ikincisi ise kaynağın tanınmış bir lisansla, kısıtsız kullanım ve yeniden dağıtım hakkıyla verilmesidir. Açık ağırlıklı modellerin lisansları ticari kullanımı ya da belli kullanım alanlarını sınırlayabilir; indirebiliyor olmak her şeyi yapabilirsin anlamına gelmez. Lisansı okumadan üretime almak yaygın bir hatadır.

## Dikkat

Ağırlıkları yayımlamanın gerekçeleri ile yayımlamamanın gerekçeleri ayrı ayrı savunulur ve ikisi de gerçektir. Yayımlamayı savunanlar bağımsız denetimi, araştırma erişimini, tek bir sağlayıcıya bağımlı kalmamayı ve maliyetin öngörülebilir olmasını öne çıkarır. Karşı görüş, yayımlanmış ağırlıklardaki güvenlik önlemlerinin sonradan görece kolay kaldırılabildiğini ve bir kez dağıtılan dosyanın geri çağrılamayacağını hatırlatır. Hangi gerekçenin ağır bastığı modelin yeteneğine ve kullanım alanına göre değişir; genel geçer bir doğru yoktur.
