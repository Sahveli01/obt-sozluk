---
term: "Benchmark"
tr: ""
aliases: ["kıyas testi"]
category: yapay-zeka
subcategory: "Temeller"
level: orta
short: "Farklı sistemleri aynı görev kümesi ve aynı ölçütle karşılaştırmak için hazırlanmış standart test."
related: [evals, accuracy, dataset, overfitting, artificial-general-intelligence-agi]
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

Benchmark, farklı sistemleri aynı koşulda karşılaştırmak için hazırlanmış standart bir testtir: sabit sorular, sabit ölçüt, herkes için aynı kurallar. Amacı tek bir sistemin "ne kadar iyi" olduğunu söylemek değil, iki sistemi kıyaslanabilir hâle getirmektir. Türkçede yerleşik tek bir karşılığı olmadığı için İngilizce adıyla, bazen de "kıyas testi" diye anılır.

## Nasıl çalışır?

Bir benchmark üç parçadan oluşur: sorular (bir [[dataset|veri kümesi]]), beklenen cevaplar ve puanlama kuralı. Sistem soruları görür, cevaplar üretilir, kurala göre puanlanır.

Karşılaştırmanın anlamlı olması için üçünün de sabit kalması gerekir. Soruların bir kısmını ya da puanlama kuralını değiştiren iki ölçüm birbiriyle kıyaslanamaz. Kurulum ayrıntıları da sonucu belirler: sisteme kaç deneme hakkı verildiği, cevabın nasıl istendiği, hangi ayarların kullanıldığı puanı ciddi biçimde değiştirebilir. Bu yüzden bağlamsız bir rakam pek bir şey anlatmaz.

Asıl mesele şudur: bir benchmark yalnızca kendi sorduğu şeyi ölçer. Belirli bir görevde yüksek puan alan bir sistem, o görevin kapsamadığı durumlarda kötü olabilir. Ölçülen ile işine yarayan aynı şey olmak zorunda değildir.

## Dikkat

En bilinen sorun sızıntıdır. Test soruları internette yayımlandığı için modelin eğitim verisine karışabilir; model cevabı çözerek değil hatırlayarak verir ve dışarıdan ikisi aynı görünür. Yazıldığı tarih itibarıyla bu, yaygın kullanılan kıyas testlerinin çoğu için açık bir endişe konusudur ve gizli tutulan yeni test kümeleri bu yüzden hazırlanır. Ezberlenmiş bir testte yüksek puan, bir tür [[overfitting|aşırı uyumdur]].

İkinci sorun, puanın kendisinin hedefe dönüşmesidir. Bir ölçüt başarı göstergesi olarak kullanılmaya başlandığında sistemler o ölçüte göre ayarlanır ve ölçüt ayırt ediciliğini kaybeder.

Bu sözlük benchmark puanı vermez; sayılar hızla eskir. Bir karşılaştırma okurken puanla birlikte [[evals|değerlendirme]] kurulumuna ve testin neyi ölçmediğine bak.
