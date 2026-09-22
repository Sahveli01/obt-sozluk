---
term: "Off-chain Metadata"
tr: "Zincir dışı üstveri"
aliases: []
category: nft
subcategory: ""
level: orta
short: "NFT'nin bilgilerinin ve görselinin zincirde değil, dışarıdaki bir adreste saklanması."
related: [nft-metadata, on-chain-metadata, token-uri, decentralized-storage, arweave, ipfs]
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

Zincir dışı metadata, bir NFT'nin adının, açıklamasının ve görselinin zincirin dışında bir yerde durması, zincirde yalnızca oraya işaret eden adresin bulunmasıdır. Yaygın kurulum budur ve sebebi basittir: birkaç yüz kilobaytlık bir görseli zincire yazmanın maliyeti, aynı görseli sıradan bir sunucuda barındırmanın yanında karşılaştırılamayacak kadar yüksektir.

Buradan kategorinin en kritik cümlesi çıkar: **zincirde duran şey görselin kendisi değil, ona işaret eden bir bağlantıdır.**

## Nasıl çalışır?

Bağlantının nereyi gösterdiğine göre üç farklı kırılganlık düzeyi vardır.

Sıradan bir sunucu en ucuz ve en kırılgan seçenektir. Dosyayı barındıran taraf içeriği istediği an değiştirebilir, sunucuyu kapatabilir, alan adının süresi dolabilir. Adres aynı kalır ama ucunda ya başka bir şey olur ya da hiçbir şey.

[[ipfs|IPFS]] adresleri içerikten hesaplandığı için sessiz değişimi ortadan kaldırır: dosya değişirse adres de değişir. Ama dosyayı diskinde tutan en az bir makine gerekir; kimse tutmuyorsa adres geçerli kalır, cevap gelmez. Bu yüzden [[decentralized-storage|dağıtık depolama]] denince akla iki ayrı soru gelmelidir — değişmezlik ve kalıcılık.

[[arweave|Arweave]] gibi ağlar ikinci soruya para ile cevap verir: saklama ücreti baştan bir kez ödenir ve uzun süreli saklama bir anlaşmaya bağlanır. Maliyet zincire yazmaktan düşüktür, garanti de zincire yazmaktan farklı bir türdendir.

## Dikkat

Yeni başlayan biri en çok burada yanılır. "NFT aldım, görsel sonsuza kadar duracak" cümlesinin ikinci yarısı çoğu kurulumda doğru değildir. Kalıcı olan zincirdeki sahiplik kaydıdır; bağlantının ucundaki dosya değildir.

Bir koleksiyona bakarken sorulacak üç soru şudur: [[token-uri|token URI]] neyi gösteriyor, o dosyayı kim saklıyor ve içeriği değiştirilebilir mi? Üçünün de cevabı sözleşmede ve adresin biçiminde yazılıdır.
