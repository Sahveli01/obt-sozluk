---
term: "P2P Trading"
tr: ""
aliases: []
category: piyasa
subcategory: "Fiat ve saklama"
level: orta
short: "Alıcı ve satıcının doğrudan anlaşması; platform taraf değil, yalnızca ilan panosu ve emanetçi olur."
related: [on-ramp, off-ramp, centralized-exchange-cex, peer-to-peer-p2p, social-engineering, kyc]
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

P2P trading, alıcı ile satıcının ortak bir emir defterinde eşleşmek yerine doğrudan birbiriyle anlaşmasıdır ([[peer-to-peer-p2p|eşler arası]]). Platform burada alım satımın tarafı değildir; ilan panosu tutar ve varlığı teslimata kadar emanette bekletir. Türkçede yerleşmiş bir karşılığı yok; "kişiden kişiye alım satım" diye açıklanıyor.

En yaygın kullanıldığı yer [[fiat|fiat para]] geçişleridir: ödeme banka havalesi gibi zincir dışı bir yolla yapılıyorsa, zincir üstündeki varlığı bir aracının tutması gerekir.

## Benzetme

İkinci el bir telefonu tanımadığın birinden alırken telefonu ikinizin de tanıdığı birine bırakmanız gibi. O kişi pazarlığa karışmaz, yalnızca para el değiştirene kadar telefonu tutar. Elinde olmayan bir şeyi ise koruyamaz.

## Nasıl çalışır?

Satıcı ilan verir ve satacağı varlığı platformun emanet (escrow) hesabına kilitler. Alıcı parayı doğrudan satıcının banka hesabına gönderir. Satıcı ödemeyi gördüğünü bildirince emanet çözülür, varlık alıcıya geçer. Anlaşmazlıkta platform taraflardan belge isteyip hakemlik yapar.

Kritik nokta şu: emanet yalnızca zincir üstündeki tarafı güvenceye alır. Paranın gerçekten gönderilip gönderilmediğini platform göremez; orada elinde yalnızca tarafların beyanı ve gönderdiği belgeler vardır.

## Dikkat

Buradaki riskler teknik değil, insani ve hukukidir. Karşı taraf sahte bir dekont gönderebilir ya da itiraz sürecini uzatabilir; bu, [[social-engineering|sosyal mühendisliğin]] bilinen bir uygulama alanıdır. Bazı ödeme yöntemleri gönderen tarafından geri çevrilebilir: varlık teslim edildikten sonra para geri alınırsa zarar satıcıda kalır.

En ağır sonuç ise ödemenin kaynağıyla ilgilidir. Sana gelen para bir dolandırıcılık zincirinden geçmişse, uğradığı hesaplar soruşturmaya konu olabilir ve bloke edilebilir. Bu, işlemi yapan kişinin bundan haberi olmasa da yaşanabilir ve hukuki sonuç doğurabilir. Kimlik doğrulaması yapılmış bir hizmette ([[kyc|KYC]]) bu kayıtlar zaten tutulur; kayıt tutulmayan bir kanalda ise ispat yükü tamamen sende olur.
