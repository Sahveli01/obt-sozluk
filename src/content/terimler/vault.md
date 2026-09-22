---
term: "Vault"
tr: ""
aliases: []
category: defi
subcategory: "Getiri"
level: baslangic
short: "Kullanıcıların varlıklarını tek havuzda toplayıp önceden tanımlanmış bir yöntemle işleten akıllı sözleşme."
related: [strategy-vault, yield-aggregator, erc-4626, smart-contract, yield-farming]
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

Vault, birçok kullanıcının varlığını tek bir havuzda toplayan ve bu havuzu önceden tanımlanmış bir yöntemle işleten [[smart-contract|akıllı sözleşmedir]]. Yatırdığında karşılığında havuzun ne kadarına sahip olduğunu gösteren bir pay token'ı alırsın; çıkarken payını geri verir, o anki havuz değerinden hakkını alırsın.

Türkçede "kasa" demek anlaşılır ve zaman zaman kullanılır, ama sektörde daha çok İngilizcesiyle geçer.

## Benzetme

Birkaç komşunun para birleştirip toptancıdan tek seferde alışveriş yapmasına benzer. Herkes ayrı ayrı gitse hem yol parası ayrı çıkar hem perakende fiyattan alınır; birleşince tek kişi gider, herkes koyduğu para oranında pay alır. Ama iki soru ortadan kalkmaz, tek kişinin üstüne yığılır: alışverişi kim yapacak ve nereden alacak?

## Dikkat

Kasanın parayla ne yapacağı ayrı bir bileşende tanımlıdır; adı [[strategy-vault|strateji]] ve çoğu tasarımda sonradan değiştirilebilir. Birden çok kaynağı gezen üst katman ise [[yield-aggregator|getiri toplayıcısıdır]]. Her katman bir güven noktası ekler: paranı yatırırken yalnızca kasaya değil, stratejiyi belirleyen yetkiye de güvenmiş olursun.

Pay token'ının nasıl hesaplandığı ve yatırma–çekme işlemlerinin nasıl çağrılacağı Ethereum tarafında çoğunlukla [[erc-4626]] standardıyla tanımlıdır. Standarda uymak cüzdanların ve başka sözleşmelerin kasayı tanımasını kolaylaştırır; kasanın içindeki yöntemin güvenli olduğu anlamına gelmez.
