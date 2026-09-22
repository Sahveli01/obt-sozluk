---
term: "KZG Commitment"
tr: ""
aliases: ["kate commitment"]
category: kriptografi
subcategory: "Sıfır bilgi (ZK) ve ileri kriptografi"
level: ileri
short: "Taahhüdü de açılım kanıtı da sabit boyutlu kalan, buna karşılık güvenilir kurulum gerektiren polinom taahhüt şeması."
related: [polynomial-commitment, trusted-setup, plonk, blob-eip-4844, elliptic-curve-cryptography-ecc, commitment-scheme]
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

KZG, adını yazarlarının baş harflerinden alan (Kate, Zaverucha, Goldberg) bir [[polynomial-commitment|polinom taahhüt]] şemasıdır. Özel isim olduğu için çevrilmez.

Öne çıkan özelliği boyutun sabit kalmasıdır. Polinom ne kadar büyük olursa olsun, hem taahhüt hem de bir noktayı açan kanıt tek bir eliptik eğri noktasından ibarettir. Doğrulama da hep aynı miktarda iş gerektirir.

## Nasıl çalışır?

Fikrin özü tek satırlık bir cebir gözlemidir: bir polinomun `z` noktasındaki değeri `y` ise, `p(X) - y` ifadesi `(X - z)` ile kalansız bölünür.

Sözle söylersek: "bu polinomun şu noktadaki değeri budur" demek, bir bölmenin tam çıktığını iddia etmekle aynı şeydir. KZG'nin açılım kanıtı, işte o bölümün taahhüdüdür. Doğrulayan taraf, eliptik eğriler üzerindeki eşleştirme (pairing) işlemi sayesinde bölmenin gerçekten kalansız olduğunu, polinomları hiç görmeden kontrol edebilir.

Bunun çalışması için kurulumda üretilen özel bir parametre dizisine ihtiyaç vardır. Bu dizi gizli bir sayıdan türetilir ve sayının sonra yok edilmesi gerekir — yani KZG bir [[trusted-setup|güvenilir kurulum]] gerektirir. Kurulum evrenseldir: belirli bir dereceye kadar her polinom için aynı parametreler kullanılır.

## Dikkat

KZG'nin güvenliği eliptik eğri ve eşleştirme varsayımlarına dayanır. Bu yüzden hash tabanlı alternatiflerin aksine [[post-quantum-cryptography|kuantum sonrası]] dayanıklı kabul edilmez; buna karşılık kanıtları sabit ve kısadır. Seçim yine bir takastır.

Kullanım alanı yalnızca ispat sistemleri değildir. [[plonk|PLONK]] gibi sistemlerin yanı sıra Ethereum'un [[blob-eip-4844|blob]] verisi de KZG taahhütleriyle bağlanır; burada amaç gizlilik değil, büyük bir veri parçasının küçük bir değerle temsil edilip parçalarının ayrı ayrı doğrulanabilmesidir.
