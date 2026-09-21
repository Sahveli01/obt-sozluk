---
term: "Pinning"
tr: "Sabitleme"
aliases: ["pinleme", "icerik sabitleme"]
category: araclar
subcategory: "Altyapı ve veri"
level: baslangic
short: "Bir içeriğin node'da silinmemek üzere işaretlenmesi; dosyanın erişilebilir kalmasını sağlayan şey budur."
related: [ipfs, content-identifier-cid, decentralized-storage, filecoin, arweave]
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

[[ipfs|IPFS]] node'ları diskleri dolmasın diye bir süre sonra kullanılmayan verileri temizler. Pinning, bir içeriği "bunu silme" diye işaretlemektir. İşaretli içerik temizlikte atılmaz; node açık kaldığı sürece ağa sunulmaya devam eder.

Bunu ya kendi node'unda yaparsın ya da bu işi üstlenen bir pinning hizmetine [[content-identifier-cid|CID]]'i verirsin; hizmet içeriği kendi makinelerine indirip orada sabitler.

## Benzetme

Ortak kullanılan bir ofis buzdolabını düşün: haftada bir temizlenir ve üstünde ismi olmayan ne varsa çöpe gider. Yemeğinin orada kalması için buzdolabına koymak yetmez, üstüne "atmayın" notu yapıştırman gerekir. Pinning tam olarak o nottur. Ve not yalnızca o buzdolabı için geçerlidir; yan binadaki dolapta kimse senin yemeğini saklamak zorunda değildir.

## Dikkat

Pinning bir kopya sözü değil, bir silme yasağıdır ve yalnızca sabitleyen makinede geçerlidir. Tek bir yerde sabitlenmiş içerik, o makine kapandığında erişilemez olur; bu yüzden ciddi kullanımda aynı içerik birkaç farklı yerde sabitlenir.

Hizmet satın aldığında da aslında bir şirketin makinelerine güvenmiş olursun: ödeme biterse ya da şirket kapanırsa pin düşer ve dosya sessizce kaybolabilir. "IPFS'e koydum, artık kalıcı" cümlesi bu yüzden yanlıştır. Kalıcılık ayrı bir karardır; [[filecoin|Filecoin]] ve [[arweave|Arweave]] gibi ağlar bu kararı kişisel bir sorumluluk olmaktan çıkarıp ekonomik bir düzene bağlamayı dener.
