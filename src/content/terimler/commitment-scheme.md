---
term: "Commitment Scheme"
tr: ""
aliases: []
category: kriptografi
subcategory: "Sıfır bilgi (ZK) ve ileri kriptografi"
level: orta
short: "Bir değere şimdi bağlanıp onu sonra açıklamayı sağlayan, açıklanana kadar gizli kalmasını ve sonradan değiştirilememesini garanti eden yapı."
related: [commit-reveal-scheme, polynomial-commitment, hash-function, salt, zero-knowledge-proof-zkp, merkle-root]
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

Taahhüt şeması iki aşamalı bir yapıdır. Birinci aşamada bir değere **bağlanırsın**: değerin kendisini değil, ondan türetilmiş kısa bir taahhüdü ortaya koyarsın. İkinci aşamada değeri **açıklarsın** ve herkes bunun gerçekten baştaki taahhüde karşılık geldiğini kontrol edebilir.

İşe yaraması iki özelliğe bağlıdır:

- **Gizleme:** taahhüde bakan biri, sen açıklayana kadar değeri öğrenemez.
- **Bağlama:** sen de sonradan fikir değiştirip başka bir değer açıklayamazsın; taahhüt yalnızca tek bir değere uyar.

Terim Türkçeye yerleşmiş tek bir karşılıkla çevrilmiyor; metinlerde "taahhüt şeması" da, İngilizcesi de geçiyor.

## Nasıl çalışır?

En basit kurulum bir [[hash-function|hash fonksiyonuyla]] yapılır: değerin yanına rastgele bir gizli sayı ([[salt|tuz]]) eklenir ve ikisinin hash'i taahhüt olarak yayımlanır. Açıklama aşamasında değer ve tuz birlikte verilir; karşı taraf hash'i yeniden hesaplayıp karşılaştırır.

Gizleme, hash'in tek yönlü olmasından gelir. Bağlama ise aynı hash'i veren ikinci bir girdi bulmanın pratikte mümkün olmamasından gelir.

Bu fikrin zincir üstündeki en bilinen uygulaması [[commit-reveal-scheme|commit-reveal kalıbıdır]]. Aynı fikrin çok daha genel hâli ise bütün bir veri kümesine tek bir değerle bağlanmaktır — [[merkle-root|Merkle kökü]] ve [[polynomial-commitment|polinom taahhütleri]] bunu yapar ve modern ispat sistemlerinin temelini oluşturur.

## Dikkat

Tuzu unutmak en sık yapılan hatadır. Değerin alabileceği seçenekler azsa — "evet/hayır", "1 ile 10 arası" — saldırgan hepsinin hash'ini deneyip taahhüdü eşleştirir. Gizleme burada hash'ten değil, eklenen rastgelelikten gelir.

İkincisi, taahhüt bir şifreleme değildir. Şifrelenmiş bir metni anahtarla geri açarsın; taahhütten değeri geri çıkarmanın bir yolu yoktur. Değeri saklayan taraf onu kaybederse taahhüt sonsuza kadar açılmamış kalır.

Üçüncüsü, iki özellik birden koşulsuz olamaz. Her şemada biri mutlak, diğeri bir hesaplama zorluğu varsayımına dayanır; hangisinin hangisi olduğu şemaya göre değişir.
