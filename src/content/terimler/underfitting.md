---
term: "Underfitting"
tr: "Yetersiz öğrenme"
aliases: ["yetersiz ogrenme"]
category: yapay-zeka
subcategory: "Temeller"
level: orta
short: "Modelin verideki örüntüyü yakalayamayacak kadar basit ya da eksik eğitilmiş olması; eğitim verisinde bile başarısızdır."
related: [overfitting, model-ai, training, loss-function]
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

Underfitting, bir [[model-ai|modelin]] verideki ilişkiyi yakalayamayacak kadar basit kalmasıdır. Model yanlış bir şey öğrenmez; yeterince bir şey öğrenmez. Tanınması kolaydır: başarısızlık yeni veriyle sınırlı değildir, model eğitildiği veride bile kötüdür.

## Benzetme

Kimin boyu sorulursa sorulsun ortalama boyu söyleyen biri gibi. Cevap her seferinde savunulabilir, hiçbirinde tamamen saçma değildir; ama tek bir kişi hakkında da gerçek bir bilgi vermez. Kaba bir cevap, yanlış bir cevaptan daha az göze batar — asıl tehlikesi budur.

## Nasıl çalışır?

Birkaç sebebi olabilir. Model kapasitesi düşük olabilir: verideki ilişki eğriyken model yalnızca düz çizgi çizebiliyordur. Eğitim çok erken kesilmiş olabilir. Adım büyüklüğü kötü seçildiği için [[training|eğitim]] hiç ilerlememiş olabilir. Ya da modele verilen özellikler cevabı içermiyordur: hiçbir model, veride bulunmayan bir bilgiyi çıkaramaz.

Teşhis için [[loss-function|kayba]] iki yerde birden bakılır. Eğitim verisindeki hata da, ayrılmış sınama verisindeki hata da yüksek ve birbirine yakınsa tablo yetersiz öğrenmedir. Çare genelde ters yönde ilerlemektir: modeli büyütmek, daha uzun eğitmek, daha anlamlı özellikler vermek.

## Dikkat

Karşıtıyla karşılaştırması [[overfitting]] maddesinde toplandı; ikisini birlikte okumak en kolay yol.

Yüksek hatanın her zaman yetersiz öğrenme demek olmadığını da akılda tut. Veri gürültülüyse, etiketler hatalıysa ya da soru elindeki bilgiyle cevaplanamıyorsa hiçbir model iyi sonuç vermez. Böyle durumlarda modeli büyütmek işe yaramaz, veriyi düzeltmek gerekir.
