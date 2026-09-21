---
term: "GPU"
tr: "Grafik işlem birimi"
aliases: ["grafik islem birimi"]
category: yapay-zeka
subcategory: "Temeller"
level: baslangic
short: "Aynı basit işlemi binlerce veri üzerinde aynı anda yapabilen işlemci; yapay zekâ eğitiminin ana donanımı."
related: [cuda, tpu, training, inference, tensor]
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

GPU, başlangıçta ekrana görüntü çizmek için tasarlanmış bir işlemci türüdür. Görüntü çizmek milyonlarca piksele aynı basit hesabı uygulamak demektir; bu yüzden GPU'lar az sayıda karmaşık işi sırayla yapmak yerine çok sayıda basit işi aynı anda yapacak biçimde kurulur.

Sinir ağları da aynı yapıdadır: milyonlarca sayıya aynı çarpma ve toplamalar uygulanır. Bu benzerlik yüzünden grafik donanımı yapay zekânın ana donanımına dönüştü. Yazıldığı tarih itibarıyla model eğitimi ve büyük ölçekli [[inference|çıkarım]] ağırlıklı olarak GPU'lar üzerinde yapılıyor.

## Benzetme

Bir binayı boyamaya benzer. Tavandaki ince işi tek bir usta yapar; düz duvarları ise yüz kişi birer rulo alıp çok daha kısa sürede bitirir. Karmaşık ve sıralı işlerde usta kazanır, aynı işin milyon kez tekrarında kalabalık.

## Dikkat

GPU her işi hızlandırmaz. Bir hesap paralelleştirilemiyorsa, yani her adım bir öncekinin sonucunu bekliyorsa kalabalık işe yaramaz.

Pratikte en çok belleğe takılırsın: bir model donanımın belleğine sığmıyorsa hız tartışması bile başlamaz, model hiç çalışmaz. Bu maddede kasıtlı olarak marka ve model adı geçmiyor; o bilgi hızla eskiyor. Yazılım tarafında [[cuda|CUDA]] gibi platformlar, donanım tarafında [[tpu|TPU]] gibi özelleşmiş alternatifler var.
