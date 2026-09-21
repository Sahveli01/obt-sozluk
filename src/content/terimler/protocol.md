---
term: "Protocol"
tr: "Protokol"
aliases: ["protokol"]
category: temeller
subcategory: "Temel kavramlar"
level: baslangic
short: "Birbirini tanımayan sistemlerin anlaşabilmesi için önceden kabul ettiği kurallar bütünü."
related: [blockchain, http, gossip-protocol, consensus-mechanism, improvement-proposal-eip-bip]
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

Protokol, iki tarafın birbirini tanımadan anlaşabilmesi için önceden üzerinde uzlaşılmış kurallar bütünüdür. Mesajın nasıl biçimlendiğini, hangi sırayla gönderileceğini ve neyin geçerli sayılacağını söyler.

İnternetin tamamı protokoller üzerine kuruludur: tarayıcın bir sayfayı [[http|HTTP]] ile ister. Blockchain'de de bir protokol vardır ve şunları tanımlar: bir [[transaction|işlem]] nasıl yazılır, bir blok ne zaman geçerlidir, ağdaki node'lar birbirine ne söyler.

Kripto dünyasında kelime ikinci bir anlamda da kullanılır: bir hizmeti akıllı sözleşmelerle sunan sistemlere de "protokol" denir.

## Benzetme

Telefonu açınca "alo" demek gibi. Kimse bunu zorunlu tutmuyor ama herkes yaptığı için karşı taraf hattın açıldığını anlıyor. Herkes farklı bir kelime kullansaydı konuşma her seferinde baştan pazarlık gerektirirdi.

## Dikkat

Protokol kural kitabıdır, o kuralları çalıştıran program değil. Aynı protokolü farklı ekipler farklı dillerde yazabilir; bunlara istemci denir ve aynı ağda sorunsuz birlikte çalışırlar.

Bir protokolü değiştirmek de yazılım güncellemekten zordur, çünkü kuralı herkesin aynı anda kabul etmesi gerekir. Bu yüzden değişiklikler [[improvement-proposal-eip-bip|iyileştirme önerileri]] üzerinden açık biçimde tartışılır.
