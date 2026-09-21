---
term: "Batch"
tr: ""
aliases: ["batch size"]
category: yapay-zeka
subcategory: "Temeller"
level: orta
short: "Eğitimde verinin tamamı yerine bir seferde işlenen örnek öbeği; model her öbeğin sonunda ayarlarını günceller."
related: [epoch-ml, learning-rate, training, gradient-descent, gpu]
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

Batch, eğitim sırasında modele bir seferde verilen örnek öbeğidir. Veri setinin tamamını tek hamlede işlemek hem belleğe sığmaz hem de tek bir güncelleme için bütün veriyi beklemek anlamına gelirdi. Bunun yerine veri öbeklere bölünür: model bir öbeği işler, hatasını ölçer, ayarlarını günceller ve sıradaki öbeğe geçer. Bir öbekteki örnek sayısına "batch size", yani öbek büyüklüğü denir. Türkçede "yığın" kelimesi başka anlamlara oturduğu için terim İngilizce kullanılır.

## Benzetme

Bir ankette on bin kişinin tamamının cevaplamasını beklemek yerine, yüzer kişilik gruplar geldikçe tahmini güncellemek gibi. Her grup tek başına ülkenin tamamını temsil etmez, tahminin biraz zıplar; buna karşılık çok daha erken ve çok daha sık yön düzeltirsin.

## Nasıl çalışır?

Öbek büyüklüğü bir denge noktasıdır. Büyük öbekte hesaplanan yön daha temsilidir, güncellemeler daha az gürültülüdür ve [[gpu|donanım]] daha verimli kullanılır; karşılığında daha çok bellek ister ve tur başına daha az güncelleme çıkar. Küçük öbekte güncellemeler sık ve gürültülüdür; bu gürültü bazen işe yarar, modelin kötü bir noktaya saplanıp kalmasını zorlaştırır.

Öbekler [[epoch-ml|her turda]] yeniden karıştırılır. Karıştırılmazsa aynı örnekler hep birlikte işlenir ve modelin gördüğü sıra, öğrendiği şeye karışır.

## Dikkat

Öbek büyüklüğü bir [[hyperparameter|hiperparametredir]] ve tek başına ayarlanmaz: değiştirdiğinde [[learning-rate|öğrenme oranını]] da gözden geçirmek gerekir, çünkü adımın etkisini ikisi birlikte belirler.

Kelimenin ikinci bir kullanımı da var: eğitimde öbek anlamına gelirken, çalışan bir modelde aynı anda işlenen istek grubunu anlatmak için de kullanılır. Bağlamdan ayırt edilir.
