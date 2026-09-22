---
term: "Sky (MakerDAO)"
tr: ""
aliases: ["makerdao", "maker dao"]
category: aglar
subcategory: ""
level: ileri
short: "Zincir üstünde kilitlenen fazla teminat karşılığında stablecoin üreten ve parametrelerini yönetişim oylamasıyla ayarlayan protokol."
related: [stablecoin, collateralized-debt-position-cdp, overcollateralization, stability-fee, liquidation, crypto-backed-stablecoin]
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

MakerDAO adıyla bilinen sistem, zincir üstünde kilitlenen teminat karşılığında bir [[stablecoin|stablecoin]] üretir. Merkezî bir ihraççının hesabına para yatırılıp jeton basılması yerine, kullanıcı varlığını bir sözleşmeye kilitler ve jeton bu kilidin karşılığında yaratılır — yani [[crypto-backed-stablecoin|kripto teminatlı]] ailedendir. Yazıldığı tarih itibarıyla protokol Sky adıyla anılıyor; eski adı ve ürettiği DAI hâlâ yaygın biçimde kullanılıyor.

## Nasıl çalışır?

Kullanıcı bir kasaya ([[collateralized-debt-position-cdp|teminatlı borç pozisyonu]]) teminat kilitler ve bunun bir bölümü kadar stablecoin üretir. Üretilen miktar teminatın değerinden düşük tutulur; buna [[overcollateralization|aşırı teminatlandırma]] denir ve fiyat dalgalanmasına karşı tampon görevi görür. Borcunu kapatıp jetonu yok ettiğinde teminatını geri alırsın; borç açık kaldığı sürece bir [[stability-fee|istikrar ücreti]] işler.

Teminatın değeri sınırın altına düşerse pozisyon [[liquidation|tasfiye]] edilir ve teminat açık artırmayla satılarak borç kapatılır. Hangi varlıkların teminat sayılacağı, üretim tavanları ve ücretler [[on-chain-governance|zincir üstü yönetişimle]] jeton sahipleri tarafından belirlenir.

## Dikkat

Aşırı teminat hem güvence hem sınırdır: ürettiğin jetondan daha fazla değeri kilitlemek zorundasın ve fiyat düştüğünde teminatını tasfiyede kaybedebilirsin.

"Zincir üstü teminat" ifadesi ise zamanla esnemiştir. Yönetişim, teminat kümesine merkezî taraflarca ihraç edilen jetonları ve zincir dışı varlıkları da ekleyebilir; bu yapıldığında sistemin bağımsızlığı o tarafların davranışına bağlanır. Protokolün taşıdığı güven varsayımı sabit değildir, oylamayla değişir.

Son olarak teminat fiyatları [[oracle|oracle]] üzerinden okunur: besleme yanlış ya da bayat olursa tasfiyeler de yanlış tetiklenir.
