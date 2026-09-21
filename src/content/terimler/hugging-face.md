---
term: "Hugging Face"
tr: ""
aliases: ["huggingface", "hf hub"]
category: yapay-zeka
subcategory: "Ajanlar ve araçlar"
level: orta
short: "Model, veri kümesi ve demo barındıran bir platform ve onu geliştiren şirket; açık kaynak kütüphaneleriyle de bilinir."
related: [open-weight-model, model-ai, dataset, fine-tuning, local-llm]
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

Hugging Face, yapay zekâ [[model-ai|modellerinin]], [[dataset|veri kümelerinin]] ve demo uygulamaların paylaşıldığı bir platform ve bu platformu geliştiren şirkettir. Ana parçası Hub'dır: modeller ve veri kümeleri burada sürüm kontrollü depolar hâlinde durur.

## Nasıl çalışır?

Bir modeli yayımlayan kişi ağırlık dosyalarını, yapılandırmayı ve bir model kartını yükler. Model kartı modelin ne için eğitildiğini, sınırlarını ve lisansını anlatan belgedir.

Kullanıcılar bu modelleri indirip kendi makinelerinde ya da kendi sunucularında çalıştırabilir — [[local-llm|yerel LLM]] kullanımının tipik yolu budur —, [[fine-tuning|ince ayar]] yapabilir ve sonucu yeniden yayımlayabilir. Şirketin geliştirdiği açık kaynak kütüphaneler modelleri birkaç satırla yükleyip çalıştırmayı sağlar; barındırılan çıkarım ve demo uygulamaları için ayrıca hizmetler sunulur.

## Dikkat

Hub'a yükleme büyük ölçüde açıktır; bu, oradaki her şeyin denetlendiği anlamına gelmez. Bir model indirilirken üç şeye bakılır: kim yayımlamış, model kartı ne diyor ve lisans neye izin veriyor.

Teknik bir risk de var: bazı ağırlık dosyası biçimleri yüklenirken kod çalıştırabilir, bu yüzden güvenilmeyen kaynaklar için güvenli kabul edilen biçimler tercih edilir. Son olarak [[open-weight-model|açık ağırlıklı]] olmak her kullanıma açık olmak demek değildir; ticari kullanımı ya da türev modelleri kısıtlayan lisanslar vardır.
