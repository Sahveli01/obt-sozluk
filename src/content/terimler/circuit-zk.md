---
term: "Circuit (ZK)"
tr: "Devre"
aliases: ["aritmetik devre"]
category: kriptografi
subcategory: "Sıfır bilgi (ZK) ve ileri kriptografi"
level: ileri
short: "Bir programın, sıfır bilgi ispatı üretilebilmesi için adım adım aritmetik kısıtlara çevrilmiş hâli."
related: [circom, noir, zero-knowledge-proof-zkp, prover, zkvm, zk-snark]
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

Bir [[zero-knowledge-proof-zkp|sıfır bilgi ispatı]] doğrudan koda uygulanmaz. Önce iddianın ispat sisteminin anlayacağı bir biçime çevrilmesi gerekir: her adımın sağlanması gereken bir denkleme dönüştüğü bir **kısıt sistemi**. Bu biçime devre denir.

"Devre" kelimesi elektronikten ödünç alınmıştır ama ortada elektrik yoktur. Toplama ve çarpma kapılarından oluşan, girdisi verildiğinde çıktısı belirlenen sabit bir yapı söz konusudur.

## Benzetme

Fabrikadaki montaj hattı gibi. Hat bir kez kurulur ve bütün istasyonlar fiziksel olarak oradadır. Bir ürün yedinci istasyonda hiçbir işlem görmeyecek olsa bile yine o bandın üstünden geçer; istasyonu "bugün gerekmiyor" diye yok sayamazsın. Hattın uzunluğu, üretilebilecek en karmaşık ürüne göre belirlenir.

## Nasıl çalışır?

Programın her satırı, sağlanması gereken bir kısıta dönüşür. [[prover|İspatlayıcı]] devreyi gizli girdisiyle çalıştırır, bütün ara değerleri doldurur ve bu değerlerin **her kısıtı sağladığını** kanıtlar. Doğrulayan taraf da tam olarak bunu kontrol eder: hesabın ne olduğunu değil, kısıtların tutarlı bir şekilde doldurulmuş olduğunu.

Devreyi elle yazmak zorunda değilsin. [[circom|Circom]] kısıtları doğrudan tarif etmeni sağlar; [[noir|Noir]] gibi diller ise sıradan bir programlama diline daha yakın durur ve devreyi senin yerine üretir.

## Dikkat

Sıradan programlama sezgisi burada çalışmaz. Devrede **erken çıkış yoktur**: bir `if` bloğunun iki dalı da hesaplanır, sonra hangisinin geçerli olduğu seçilir. Bir döngü, olası en yüksek tekrar sayısına kadar açılarak devreye serilir. Dolayısıyla devrenin boyutu, çalıştığı tipik duruma göre değil **en kötü duruma** göre belirlenir.

İkincisi, kolay sandığın işlemler pahalı olabilir. Devrenin doğal dili toplama ve çarpmadır; karşılaştırma ve bit düzeyinde işlemler ise sayıyı bitlerine ayırmayı gerektirdiği için kısıt sayısını hızla şişirir.

Üçüncüsü ve en tehlikelisi: eksik kısıt yazmak sessiz bir hatadır. Unuttuğun kontrol, ispat sisteminde bir uyarı üretmez — yalnızca kanıtın ne kadar şey söylediğini azaltır.

Bu maliyet sezgisi klasik devre tabanlı sistemler içindir: [[zkvm|zkVM]]'lerde dallanma sabit bir komut setinin içinde çözülür, lookup tablosu kullanan ispat sistemlerinde ise karşılaştırma gibi işlemler sayıyı bitlerine ayırmadan yapılabildiği için bedeli çok daha düşük olur.
