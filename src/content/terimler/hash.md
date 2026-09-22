---
term: "Hash"
tr: "Özet"
aliases: ["hash değeri", "özet değeri"]
category: kriptografi
subcategory: "Hash fonksiyonları"
level: baslangic
short: "Bir veriyi hash fonksiyonundan geçirdiğinde çıkan, girdiye özgü ve her zaman aynı uzunlukta olan değer."
related: [hash-function, avalanche-effect, checksum, transaction-hash-txid, merkle-tree]
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

Hash, bir veriyi [[hash-function|hash fonksiyonundan]] geçirdiğinde çıkan değerdir. Girdi tek bir harf de olabilir, bir filmin tamamı da; çıktı hep aynı uzunluktadır. SHA-256 kullanılıyorsa bu uzunluk 32 bayttır — yazıya döküldüğünde 64 karakterlik bir dizi.

Üç özelliği hash'i işe yarar kılar. Aynı girdi her zaman aynı hash'i verir. Girdideki en ufak değişiklik çıktıyı baştan sona değiştirir ([[avalanche-effect|çığ etkisi]]). Hash'e bakıp girdiyi geri çıkarmanın ise bir yolu bırakılmamıştır; tek çare olasılıkları tek tek denemektir, o sayı da hiçbir donanımın altından kalkamayacağı kadar büyüktür.

Bu yüzden hash bir veriyi tanımak için kullanılır: iki dosyanın aynı olup olmadığını dosyaların tamamını değil hash'lerini karşılaştırarak anlarsın. Zincirdeki bir işlemin kimliği de ([[transaction-hash-txid|TxID]]) işlemin kendisinden hesaplanan hash'tir.

## Benzetme

Kasaptaki kıyma makinesi gibi. Aynı eti aynı makineden geçirirsen hep aynı kıyma çıkar. Ama önüne bir kâse kıyma konan kimse onun hangi parçadan geldiğini söyleyemez, kıymayı geri et hâline hiç getiremez. Makine tek yönlü çalışır. İngilizcede "hash" zaten doğranıp karıştırılmış yemek demektir.

## Dikkat

Hash şifreleme değildir. Şifrelenmiş bir metin doğru anahtarla geri açılır; hash'in açılması diye bir şey yoktur, çünkü hash girdinin kendisini taşımaz, ondan hesaplanmış bir iz taşır.

Bir de şu: tahmin edilebilir bir girdinin hash'i onu gizlemez. Saldırgan akla gelen olasılıkları tek tek hash'leyip seninkiyle karşılaştırabilir.
