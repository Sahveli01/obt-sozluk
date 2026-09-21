---
term: "Filecoin"
tr: ""
aliases: ["fil"]
category: araclar
subcategory: "Altyapı ve veri"
level: orta
short: "Depolama alanını süreli anlaşmalarla satan, saklayıcıların veriyi tuttuğunu düzenli olarak kanıtladığı depolama ağı."
related: [decentralized-storage, arweave, ipfs, content-identifier-cid, pinning]
disambiguation: []
tags: []
status: taslak
reviewedBy: []
dateSensitive: true
sources: []
added: 2026-09-21
updated: 2026-09-22
---

## Nedir?

Filecoin, boş disk alanı olanlarla veri saklatmak isteyenleri bir pazarda buluşturan [[decentralized-storage|dağıtık depolama]] ağıdır. Müşteri bir saklayıcıyla anlaşma (deal) yapar: hangi veri, ne kadar süre, hangi fiyata. Saklayıcı bu süre boyunca veriyi gerçekten tuttuğunu düzenli olarak ağa kanıtlamak zorundadır; kanıtlayamazsa önceden yatırdığı teminattan kesinti yer.

Adresleme tarafında [[content-identifier-cid|CID]] kullanır, yani [[ipfs|IPFS]] ile aynı içerik adresleme dilini konuşur. Aynı ağ değillerdir ama birlikte kullanılmaları yaygındır.

## Nasıl çalışır?

İki tür kanıt vardır. Birincisi, saklayıcının veriyi kendine özel bir biçimde gerçekten diske yazdığını gösterir; aynı veriyi bir kez saklayıp birden çok anlaşmaya saydırma numarasını engeller. İkincisi zamana yayılır: anlaşma boyunca belirli aralıklarla "bu veri hâlâ bende" kanıtı üretmek gerekir. Kanıt gelmezse teminat kesilir — yani saklamak, söz vermekten kârlıdır.

Anlaşmaların bir süresi vardır. Süre dolduğunda veri kendiliğinden saklanmaya devam etmez; birinin yenilemesi gerekir. Yazıldığı tarih itibarıyla fiyatlar, anlaşma süreleri, teminat ve ödül kuralları ağın gelişimiyle değişebilir; sabit bir rakam varsayma.

## Dikkat

Kanıtlar saklayıcının veriyi tuttuğunu gösterir, onu hızlı geri verebileceğini değil. Geri alma (retrieval) ayrı bir iştir ve ayrıca ayarlanır; arşiv amacıyla saklanan bir dosyaya erişmek, bir web sunucusundan dosya çekmek kadar hızlı olmayabilir.

Bir CID'i Filecoin'de saklatmak onu otomatik olarak IPFS ağından erişilebilir yapmaz; bunun ayrıca kurulması gerekir. Süresi dolmuş ve kimsenin yenilemediği bir anlaşma da, pini düşmüş bir dosya gibi ortadan kaybolabilir — [[pinning|sabitleme]] ile arasındaki fark, kalıcılığın kişisel bir tercihe değil, teminatlı bir anlaşmaya bağlanmasıdır.

[[arweave|Arweave]] ile arasındaki fark model farkıdır: burada süresi ve şartları belli, yenilenebilir bir anlaşma vardır; orada tek seferlik ödemeye dayanan bir fon modeli. Hangisinin seçileceği "bu veriyi kim, ne kadar süre, hangi bütçeyle sahiplenecek" sorusuna bağlıdır.
