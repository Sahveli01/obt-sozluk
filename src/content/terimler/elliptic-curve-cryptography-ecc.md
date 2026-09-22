---
term: "Elliptic Curve Cryptography (ECC)"
tr: "Eliptik eğri kriptografisi"
aliases: ["eliptik eğri kriptografisi"]
category: kriptografi
subcategory: "İmzalar ve eğriler"
level: orta
short: "Açık anahtarlı kriptografiyi, bir eğri üzerinde ileri yönü ucuz, geri yönü pratikte hesaplanamayan bir işlemin üstüne kuran yöntem ailesi."
related: [public-key-cryptography, secp256k1, ecdsa, private-key, ed25519, post-quantum-cryptography]
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

ECC, açık anahtarlı kriptografiyi eliptik eğri denen matematiksel bir nesnenin üstüne kuran yöntemler ailesidir. [[ecdsa|ECDSA]], [[eddsa|EdDSA]] ve [[bls-signature|BLS]] gibi imza şemalarının hepsi bu ailenin üyesidir.

Eğri üzerinde "toplama" diyebileceğimiz bir işlem tanımlıdır: iki noktayı alır, yine eğri üstünde başka bir nokta verir. Önceden belirlenmiş bir başlangıç noktasını kendisiyle defalarca toplarsan bir yere varırsın. Bu yön ucuzdur; bilgisayar bu işi hızla yapar.

Ters yön öyle değil. Elinde yalnızca varılan nokta varken "kaç kere toplandı" sorusunun bilinen bir kısayolu yoktur. [[private-key|Özel anahtar]] işte o "kaç kere" sayısıdır, [[public-key|açık anahtar]] ise varılan noktadır. Açık anahtarı herkese verirsin; ondan geri dönüp özel anahtarı bulmak, bilinen yöntemlerle karşılanamayacak kadar pahalıdır.

## Benzetme

Bilardo masasında aynı vuruşu üst üste yapmak gibi. Topa hep aynı açıyla, aynı güçle vurursun; top bantlardan seke seke ilerler. Vuruşları saymak kolaydır. Ama masaya sonradan gelen biri, topun durduğu yere bakarak kaç vuruş yapıldığını söyleyemez; tek yolu baştan başlayıp aynı noktaya düşene kadar tek tek saymaktır.

## Nasıl çalışır?

Eğrinin kendisi ve başlangıç noktası gizli değildir, olamaz da: herkesin aynı eğriyi kullanması gerekir. Bunlar açık bir standartta yazılıdır — [[secp256k1|secp256k1]] böyle bir eğridir, [[ed25519|Ed25519]]'in dayandığı eğri başkasıdır. Gizli olan tek şey senin seçtiğin sayıdır.

Aynı fikir iki işe birden yarar: imza atmak ve karşı tarafla ortak bir gizli anahtar üzerinde anlaşmak. İkisinde de taraflar kendi gizli sayılarını hiç açıklamaz.

Yaygınlaşmasının sebebi pratik: aynı güvenlik seviyesi için eski yöntemlere göre çok daha kısa anahtarlar yeter. Kısa anahtar, küçük imza, az depolama ve zincirde daha az [[gas|gas]] demektir.

## Dikkat

Güvenliğin dayandığı varsayım nettir: "varılan noktadan kaç kere toplandığını bulmak pahalıdır." Bu bir ispat değil, bugüne kadar kırılamamış bir varsayımdır. Yeterince büyük bir kuantum bilgisayarı doğrudan bu varsayımı hedef alır; [[post-quantum-cryptography|kuantum sonrası kriptografi]] tam olarak bu ihtimal için ayrı bir araştırma alanıdır.

Bir de şu: kendi eğri aritmetiğini yazma. Buradaki güvenlik, algoritmanın yıllarca süren açık incelemeden geçmesinden ve uygulamanın yan kanal saldırılarına karşı özenle yazılmasından gelir — kodun doğru sonuç vermesinden değil. Denetlenmiş, yaygın kullanılan bir kütüphane kullan.
