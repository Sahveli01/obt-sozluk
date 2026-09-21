---
term: "Transaction Hash (TxID)"
tr: "İşlem hash'i"
aliases: ["txid", "tx hash", "işlem hash'i"]
category: temeller
subcategory: "Bloklar ve işlemler"
level: baslangic
short: "Bir işlemin içeriğinden hesaplanan ve onu zincirde benzersiz biçimde işaret eden özet değer."
related: [transaction, hash-function, block-explorer, confirmation, mempool]
disambiguation: []
tags: []
status: taslak
reviewedBy: []
dateSensitive: false
sources: []
added: 2026-09-21
updated: 2026-09-21
---

## Nedir?

İşlem hash'i, bir [[transaction|işlemin]] içeriğinden hesaplanan sabit uzunlukta bir özettir ve o işlemin zincirdeki kimliği olarak kullanılır. Bazı zincirlerde buna TxID, bazılarında tx hash denir; ikisi de aynı işi görür.

Değer içerikten türetildiği için işlemin tek bir baytını değiştirmek bambaşka bir özet üretir. Bu yüzden bir işlemi tarif etmenin en kısa ve en kesin yolu hash'idir: [[block-explorer|blok gezgininde]] bu değeri arattığında işlemin durumunu, hangi blokta olduğunu ve bütün ayrıntılarını görürsün.

## Benzetme

Kargo takip numarası gibi. Numara paketin içeriğini anlatmaz ama tek bir gönderiyi işaret eder; karşı tarafa numarayı verdiğinde "hangi gönderiden bahsediyoruz" sorusu ortadan kalkar.

Bir farkla: takip numarasını kargo şirketi dağıtır, işlem hash'ini kimse dağıtmaz. O numara işlemin kendisinden [[hash-function|hesaplanır]], yani gönderiyle arasındaki bağ bir kayıt değil matematiktir.

## Dikkat

Hash'in var olması işlemin gerçekleştiği anlamına gelmez. İşlem daha [[mempool|havuzda]] beklerken de hash'i bellidir; başarısız olmuş bir işlemin de hash'i vardır.

"Oldu mu" sorusunun cevabı hash'in kendisinde değil, işlemin durumunda ve aldığı [[confirmation|onay]] sayısındadır. Birinden ödeme beklerken sana hash göndermesi ödemeyi yaptığının kanıtı değildir.
