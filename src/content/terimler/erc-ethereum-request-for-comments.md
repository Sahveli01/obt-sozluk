---
term: "ERC (Ethereum Request for Comments)"
tr: ""
aliases: []
category: tokenlar
subcategory: "Standartlar"
level: orta
short: "Ethereum'un öneri sürecinde uygulama katmanı kurallarını tanımlayan kategori; token standartları buradan çıkar."
related: [improvement-proposal-eip-bip, token-standard, erc-20, erc-721, erc-4337, ethereum]
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

ERC, [[ethereum|Ethereum]]'un [[improvement-proposal-eip-bip|iyileştirme önerisi]] sürecinin bir kategorisidir. Süreç tek bir çatı altında, EIP (Ethereum Improvement Proposal) adıyla işler; ERC de o çatının uygulama katmanına bakan koludur.

Ayrım şuradan geçer: protokolün kendisini değiştiren öneriler — blok kuralları, ücret hesabı, EVM komutları — ağın yükseltilmesini gerektirir ve başka kategorilerde toplanır. ERC'ler ise sözleşmelerin ve uygulamaların birbiriyle nasıl konuşacağını anlatır. Bir ERC'yi uygulamak için kimseden izin almaz, hiçbir yükseltmeyi beklemezsin; ona uyan bir sözleşme yazarsın, o kadar.

## Benzetme

Bir kurumun evrak kayıt bürosu gibi. Dilekçeni bıraktığın anda sana bir numara verilir. O numara dilekçenin kabul edildiğini söylemez; yalnızca artık ortak bir yerde durduğunu ve herkesin aynı numarayla ona atıf yapabileceğini söyler. Kabul, gelecekse, çok sonra ve ayrı bir süreçte gelir.

## Nasıl çalışır?

Numara, öneri resmî depoya alındığında sırayla verilir; içeriğine ya da önemine göre değil. Bu yüzden küçük numara "daha önemli", büyük numara "daha iyi fikir" demek değildir.

Öneri taslak olarak başlar; tartışma, geri bildirim ve gerçek uygulamalarla olgunlaşır. Bir kısmı nihai duruma ulaşır, bir kısmı ilgi görmeyip yolda kalır. Ama durum etiketi kullanımı engellemez: henüz kesinleşmemiş bir öneriye uyan sözleşmeler de dağıtılabilir ve bir standart çoğu zaman tam olarak böyle yerleşir.

Aynı belgenin hem EIP-20 hem [[erc-20|ERC-20]] diye anıldığını göreceksin. İki ad aynı numaraya, aynı belgeye işaret eder; "ERC" yalnızca kategoriyi belirtir.

## Dikkat

Numara bir onay damgası değildir. Hiçbir kurum ERC'leri güvenlik açısından denetlemez ve bir öneriye uyduğunu söyleyen sözleşmenin doğru yazıldığını kimse garanti etmez.

İkincisi, kategorinin gücü sanıldığından büyüktür. [[erc-4337|ERC-4337]] bunun iyi bir örneğidir: hesap soyutlamasını ağı hiç yükseltmeden, yalnızca sözleşmelerle getirir. "Sadece bir ERC" demek "küçük bir değişiklik" demek değildir.
