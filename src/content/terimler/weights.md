---
term: "Weights"
tr: "Ağırlıklar"
aliases: ["agirliklar"]
category: yapay-zeka
subcategory: "Temeller"
level: orta
short: "Sinir ağında her bağlantının gücünü tutan ve eğitim sırasında öğrenilen sayılar; modelin bildiği her şey buradadır."
related: [parameters, neural-network, backpropagation, training, model-ai]
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

Ağırlıklar, bir [[neural-network|sinir ağındaki]] bağlantıların gücünü tutan sayılardır. Her nöron kendisine gelen sinyalleri olduğu gibi toplamaz; her birini kendi ağırlığıyla çarparak toplar. Ağırlığı büyük olan girdi sonucu çok etkiler, sıfıra yakın olan neredeyse hiç etkilemez. Eğitimin sonunda modelin "bildiği" her şey bu sayıların içindedir: model dosyası dediğimiz şey, büyük ölçüde bu sayıların listesidir.

## Benzetme

Ses mikserinin sürgüleri gibi. Aynı kayıt, sürgülerin konumuna göre bambaşka bir mikse dönüşür: bir kanalı yukarı çekince o enstrüman öne çıkar, aşağı çekince kaybolur. Fark şu ki burada sürgüleri kulakla ayarlayan bir insan yok; sonuç ölçülüyor ve sürgüler ölçüme göre otomatik kayıyor.

## Nasıl çalışır?

Ağırlıklar rastgele küçük değerlerle başlar; modelin ilk tahminleri bu yüzden anlamsızdır. Her güncellemede [[backpropagation|geri yayılım]] her ağırlığın hataya katkısını çıkarır, [[gradient-descent|gradyan inişi]] de her birini hatayı azaltan yönde azıcık kaydırır. Milyonlarca kez tekrarlanan bu düzeltme sonunda ağırlıklar verideki düzenleri yansıtır hale gelir.

## Dikkat

Ağırlıklar tek tek yorumlanamaz. Bir ağırlığa bakıp "bu sayı şu bilgiyi tutuyor" denemez; anlam tek bir sayıda değil, milyonlarca sayının birlikte oluşturduğu örüntüdedir.

Ağırlık modelin kendi öğrendiği bir sayıdır; insanın eğitimden önce seçtiği ayar ise [[hyperparameter|hiperparametredir]]. Ağırlıklar, modelin [[parameters|parametrelerinin]] de büyük çoğunluğunu oluşturur. [[open-weight-model|Open-weight]] ifadesindeki "weight" de tam olarak bu sayı listesini kasteder: paylaşılan şey modelin öğrendikleridir.
