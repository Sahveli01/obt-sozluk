---
term: "Decimals"
tr: "Ondalık basamak"
aliases: []
category: tokenlar
subcategory: "Standartlar"
level: orta
short: "Bir token'ın en küçük biriminden kaç tanesinin bir tam token ettiğini söyleyen sayı; yalnızca gösterimi ilgilendirir."
related: [erc-20, wei, token-standard, total-supply, integer, floating-point]
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

Zincirde [[floating-point|kayan noktalı sayı]] yoktur; bütün bakiyeler tam sayı olarak tutulur. `decimals`, bu tam sayının kaç basamağının ondalık kısım sayılacağını söyleyen bilgidir. 18 ondalıklı bir token'da 1 tam token, zincirde 1.000.000.000.000.000.000 olarak yazar.

Asıl mesele şu: bu sayı matematiği değiştirmez. Sözleşme yine [[integer|tam sayılarla]] toplar çıkarır; `decimals` yalnızca arayüzün o rakamı ekranda nereye virgül koyarak göstereceğini söyler. Alanı silsen sözleşme aynı şekilde çalışmaya devam eder, sadece ekranda okunamayacak büyüklükte sayılar görürsün.

## Benzetme

İlaç kutusundan çıkan ölçek gibi. Şişenin üstünde "günde iki ölçek" yazar ama o ölçeğin kaç mililitre olduğu kutudaki kaşıkta bellidir. Aynı "2" rakamı bir ilaçta 5 ml, başkasında 2,5 ml eder. Zincirdeki bakiye de böyledir: elindeki sayı tek başına bir şey söylemez, hangi ölçekle okunacağını `decimals` söyler.

## Nasıl çalışır?

Arayüz bir tutarı göstermeden önce sözleşmeye `decimals()` diye sorar, dönen sayıyı 10'un üssü olarak kullanır ve bakiyeyi ona böler. Tersi de doğrudur: kullanıcı "1,5" yazdığında arayüz bunu 1,5 × 10^decimals'a çevirip zincire tam sayı olarak yollar.

Ethereum'un kendi biriminde de aynı fikir vardır: 1 ETH, 10^18 [[wei|wei]]'dir. Token'ların çoğu bu alışkanlığı devralıp 18'i seçer, ama seçmek zorunda değildir. [[erc-20|ERC-20]]'de `decimals` isteğe bağlı bir alandır ve bir kez belirlendikten sonra değişmesi beklenmez.

## Dikkat

Her token 18 ondalık kullanmaz ve bunu varsaymak klasik bir hatadır. Yaygın stablecoin'lerin bir kısmı 6 ondalıkla çalışır; NFT standartlarında ise ondalık kavramı hiç yoktur. Kodunda `10**18` sabitini elle yazarsan, 6 ondalıklı bir token'da bir milyon katı tutar hesaplarsın — ve bu hata testte değil, ilk gerçek işlemde ortaya çıkar.

Doğru alışkanlık ondalığı her token için sözleşmeden okumaktır. Alan isteğe bağlı olduğu için hiç sunmayan token'lar da vardır; öylesinde varsayım yapmak yerine o token'ı ayrıca ele almak gerekir.
