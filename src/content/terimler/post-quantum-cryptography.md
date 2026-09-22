---
term: "Post-Quantum Cryptography"
tr: "Kuantum sonrası kriptografi"
aliases: ["post-kuantum kriptografi"]
category: kriptografi
subcategory: "Temeller"
level: ileri
short: "Büyük bir kuantum bilgisayarın da zayıflatamayacağı varsayılan zorluk problemleri üzerine kurulu kriptografi çalışmaları."
related: [public-key-cryptography, digital-signature, hash-function, elliptic-curve-cryptography-ecc, cryptography]
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

Kuantum sonrası kriptografi, bugünkü şemaların yerini alabilecek, kuantum bilgisayarların da zorlanacağı varsayılan yöntemler üzerine çalışan alandır. Adı yanıltmayabilir: kuantum bilgisayarlarla **yapılan** kriptografi değil, kuantum bilgisayarlara **karşı** dayanıklı olması hedeflenen ve sıradan bilgisayarlarda çalışan kriptografidir.

## Nasıl çalışır?

Bugün yaygın kullanılan [[public-key-cryptography|açık anahtarlı]] şemaların hepsi belirli matematik problemlerinin pahalılığına dayanır: büyük sayıları çarpanlarına ayırmak ya da [[elliptic-curve-cryptography-ecc|eliptik eğri]] üzerinde bir çarpanı geri bulmak gibi. Yeterince büyük ve kararlı bir kuantum bilgisayarın, bilinen kuantum algoritmalarıyla tam bu problemleri ciddi biçimde zayıflatması beklenir.

Etki her yerde aynı değildir. Simetrik şifreleme ve [[hash-function|hash fonksiyonları]] bu etkiden daha az pay alır; onlarda anahtar ve çıktı uzunluğunu artırmanın büyük ölçüde yeterli olacağı değerlendirilir. Zor durumda olan taraf açık anahtarlı şemalardır.

Bu yüzden yeni şemalar başka zorluk varsayımlarına taşınır — kafes tabanlı, hash tabanlı ve kod tabanlı aileler bunların başlıcalarıdır. Hash tabanlı [[digital-signature|imza]] şemaları, güvenliklerini zaten dayanıklı sayılan bir yapıya bağladıkları için bu geçişte daha az etkilenen tarafta durur.

Standartlaşma ve geçiş çalışmaları yazıldığı tarih itibarıyla sürüyor.

## Dikkat

Bugün acele edilmesinin sebebi bir tarih değil, **"şimdi kaydet, sonra çöz"** riskidir: bugün kaydedilen şifreli trafik saklanıp ileride çözülebilir. Bu yüzden uzun süre gizli kalması gereken veriler için geçiş, bekleyip görülecek bir konu sayılmaz.

Zincirler için sorun öncelikle gizlilik değil imzadır. İmza şeması değiştiğinde anahtar boyutları, adres biçimleri ve doğrulama kuralları birlikte değişir; bu da ağ çapında bir yükseltme ve mevcut varlıkların yeni anahtarlara taşınması anlamına gelir.

"Her şey bugün kırıldı" tonundaki iddialara da temkinli yaklaş. Doğru soru "kırıldı mı" değil, hangi şemanın hangi varsayıma dayandığı ve o varsayımın ne kadar zorlandığıdır ([[cryptography|kriptografi]]).
