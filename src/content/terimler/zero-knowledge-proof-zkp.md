---
term: "Zero-Knowledge Proof (ZKP)"
tr: "Sıfır Bilgi İspatı"
aliases: ["sifir bilgi ispati", "zkp"]
category: kriptografi
subcategory: "Sıfır bilgi (ZK) ve ileri kriptografi"
level: orta
short: "Bir iddianın doğru olduğunu, iddianın doğruluğu dışında hiçbir bilgi sızdırmadan kanıtlamayı sağlayan kriptografik yöntem."
related: [prover, verifier, zk-snark, zk-stark, circuit-zk, zk-rollup]
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

Bir şeyi kanıtlamanın bilinen yolu, kanıtı göstermektir: yaşını göstermek için kimliğini uzatırsın. Ama kimliğin üstünde yaşından fazlası yazar — adın, doğum yerin, numaran. İddiayı kanıtlamak için gerekenden çok daha fazlasını vermiş olursun.

Sıfır bilgi ispatı bu fazlalığı keser. Üç şeyi birden sağlar:

- **Tamlık:** iddia gerçekten doğruysa, dürüst bir kanıtlayan karşı tarafı ikna edebilir.
- **Sağlamlık:** iddia yanlışsa, kanıtlayan ne kadar kurnaz olursa olsun ikna edemez.
- **Sıfır bilgi:** doğrulayan taraf, iddianın doğru olduğu bilgisinden başka hiçbir şey öğrenmez.

## Benzetme

Kalabalık bir fotoğrafta saklanmış bir kişiyi bulduğunu iddia ediyorsun ama yerini söylemek istemiyorsun. Fotoğrafın üstüne kocaman bir örtü serer, örtüde küçük bir delik açar ve deliği o kişinin üstüne getirirsin. Karşındaki delikten bakar, kişiyi görür, ikna olur — ama fotoğrafın neresine baktığını bilemez.

## Nasıl çalışır?

Genel fikir soru-cevaptır. Doğrulayan, kanıtlayana önceden tahmin edemeyeceği rastgele bir soru sorar. İddia doğruysa kanıtlayan her soruyu cevaplayabilir; yalan söylüyorsa ancak şansı yaver giderse kurtulur. Soru yeterince çok kez tekrarlanınca blöf yapan birinin her seferinde tutturması pratikte imkânsızlaşır.

Modern sistemler bu gidiş gelişi ortadan kaldırır: rastgele soruyu üretme işi, [[hash-function|hash fonksiyonu]] kullanılarak kanıtlayanın kendisine bırakılır. Böylece kanıt tek bir mesaja dönüşür ve sonradan, kanıtlayan ortada yokken bile doğrulanabilir.

## Örnek

Bir siteye girmek için 18 yaşından büyük olman gerekiyor. Klasik yol kimliğini yüklemektir. Sıfır bilgi yolunda ise, devletin imzaladığı bir kimlik belgen olduğunu ve o belgedeki doğum tarihinin belli bir eşikten eski olduğunu kanıtlayan bir ispat üretirsin. Site "evet" cevabını alır; elinde saklayacağı hiçbir kişisel veri kalmaz.

## Dikkat

En yaygın yanlış anlama, sıfır bilginin yalnızca bir gizlilik teknolojisi olduğunu sanmaktır. Bu ispatların bugünkü en geniş kullanım alanı **ölçeklenmedir**: bir [[zk-rollup|ZK rollup]] binlerce işlemi kendi tarafında yapar ve ana zincire "hepsini kurallara uygun işledim" diyen tek bir kanıt gönderir. Burada gizlenen bir şey yoktur; kazanılan şey, doğrulamanın hesaplamadan çok daha ucuz olmasıdır.

İkincisi, "sıfır bilgi" ifadesi yalnızca ispatın kendisi için geçerlidir. Kimin ne zaman ispat gönderdiği zincirde açıkta durur.
