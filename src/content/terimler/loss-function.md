---
term: "Loss Function"
tr: "Kayıp fonksiyonu"
aliases: ["kayip fonksiyonu"]
category: yapay-zeka
subcategory: "Temeller"
level: orta
short: "Modelin tahmininin doğru cevaptan ne kadar saptığını tek bir sayıya çeviren ölçü; eğitim bu sayıyı küçültmeye çalışır."
related: [gradient-descent, backpropagation, training, accuracy]
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

Kayıp fonksiyonu, modelin verdiği cevabın beklenen cevaptan ne kadar uzak olduğunu tek bir sayıya indirir. "Yanlış" demez, "ne kadar yanlış" der — ve eğitimin tamamı bu sayıyı küçültme çabasından ibarettir. Model ne öğreneceğini bu ölçüden öğrenir; dolayısıyla neyi ölçtüğün, modelin neyde iyi olacağını belirler.

## Benzetme

Golf skoru gibi. Düşük olan iyidir. Skor sana hangi vuruşun kötü gittiğini söylemez, turun bütününün ne kadar kötü geçtiğini tek bir sayıyla verir; ilerleyip ilerlemediğini turdan tura bu sayıyı karşılaştırarak anlarsın.

## Nasıl çalışır?

Problemin türüne göre farklı kayıplar kullanılır. Bir sayı tahmin ediliyorsa sapmanın büyüklüğü cezalandırılır; sapmanın karesini alan ölçüler büyük hataları küçüklerden orantısız biçimde daha ağır sayar, bu yüzden aykırı örneklere duyarlıdırlar. Sınıflandırmada ise model her seçeneğe bir olasılık verir ve doğru seçeneğe verdiği olasılık düştükçe kayıp büyür; emin olup yanılmak, kararsız kalıp yanılmaktan pahalıdır.

Kayıp yalnızca ölçer. Bu sayıyı küçültmek için hangi ayarın hangi yöne kaydırılacağını bulmak ayrı bir iştir ve onu [[gradient-descent|gradyan inişi]] yapar; hatanın sorumluluğunun katmanlara dağıtılmasını da [[backpropagation|geri yayılım]] üstlenir.

## Dikkat

Kaybın düşmesi modelin işe yaradığı anlamına gelmez. Kayıp eğitim verisi üzerinde de düşmeye devam edebilir; bu noktada olan şey öğrenme değil [[overfitting|ezberdir]].

Kayıp insan için okunaklı bir sayı da değildir; "kayıp 0,3" tek başına bir şey anlatmaz. [[accuracy|Doğruluk]] gibi ölçüler sonucu insana anlatmak, kayıp ise eğitimi yönlendirmek içindir. İkisini aynı amaçla kullanmaya çalışmak sık yapılan bir hatadır.
