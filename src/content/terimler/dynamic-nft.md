---
term: "Dynamic NFT"
tr: "Dinamik NFT"
aliases: []
category: nft
subcategory: ""
level: orta
short: "Metadata'sı zamanla ya da bir olaya göre değişebilen NFT."
related: [nft-metadata, token-uri, on-chain-metadata, off-chain-metadata, oracle, immutability]
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

Dinamik NFT, görüntüsü ve özellikleri sabit olmayan, bir koşula göre değişen NFT'dir. Token'ın numarası ve sahibi değişmez; değişen şey [[nft-metadata|metadata]]'nın içeriğidir. Aynı numara bugün bir şey, üç ay sonra başka bir şey gösterebilir.

Değişimi tetikleyen şey birkaç türlü olabilir: zamanın geçmesi, sahibin bir işlem yapması, sözleşmedeki bir sayacın artması ya da dışarıdan gelen bir veri. Sonuncusunda veriyi zincire bir [[oracle|oracle]] taşır ve değişim o verinin geldiği ana bağlanır.

## Nasıl çalışır?

İki yol var ve aralarındaki fark, kuralın nerede durduğudur.

Birincisinde değişim zincir üstündedir. Özellikler sözleşmenin deposunda tutulur, `tokenURI` çağrıldığında belge o anki değerlerden üretilir. Kuralı kod yazar ve kodu okuyan herkes neyin neye bağlı olduğunu baştan görebilir ([[on-chain-metadata|zincir üstü metadata]]).

İkincisinde değişim zincir dışındadır. [[token-uri|Token URI]] sabit bir adresi gösterir ama o adresin ucundaki dosyayı bir sunucu günceller. Bu ucuzdur, hiçbir işlem gerektirmez ve sözleşmeye dokunmaz; karşılığında değişimin ne zaman ve neye göre olacağına karar veren taraf o sunucunun sahibidir ([[off-chain-metadata|zincir dışı metadata]]).

## Dikkat

Dinamik NFT, "NFT'ler değiştirilemez" beklentisiyle doğrudan çelişir — daha doğrusu o beklentinin baştan yanlış yere kurulduğunu gösterir. [[immutability|Değiştirilemez]] olan şey zincire yazılmış kayıttır: hangi işlemin ne zaman yapıldığı, numaranın kimde olduğu. Metadata bu kaydın parçası olmak zorunda değildir ve çoğu kurulumda değildir.

Buradan çıkan soru şudur: bu NFT'nin neyi değişmeyecek? Cevap sözleşmenin kodunda yazar, tanıtım metninde değil. Bir de değişimi kimin tetikleyebildiği ayrı bir sorudur; "otomatik olarak değişiyor" denen bir kurulumda düğmeye basan tek bir adres bulunabilir.
