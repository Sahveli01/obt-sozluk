---
term: "Non-Custodial Wallet"
tr: ""
aliases: ["non custodial cuzdan"]
category: cuzdanlar
subcategory: "Cüzdan türleri"
level: orta
short: "Özel anahtarın yalnızca sende olduğu, cüzdanı yazan ekibin varlıklarına erişemediği cüzdan türü."
related: [custodial-wallet, self-custody, seed-phrase, software-wallet, hardware-wallet]
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

[[custodial-wallet|Custodial cüzdanın]] tersidir: anahtar senin cihazında üretilir, orada saklanır ve imzalar orada atılır. Cüzdanı yazan ekip sunucularını kapatsa bile [[seed-phrase|kurtarma ifadenle]] varlıklarına başka bir cüzdandan ulaşabilirsin — çünkü cüzdan bir hesap değil, anahtarlarına açılan bir arayüzdür. Terimin Türkçede oturmuş bir karşılığı yok; çoğunlukla "anahtarın sende olduğu cüzdan" diye açıklanır.

## Nasıl çalışır?

Kurulumda uygulama cihazında rastgelelik üretir, bundan bir anahtar ağacı ve sana gösterdiği kelime listesini türetir ([[hd-wallet-bip-32|HD cüzdan]]). Sağlayıcının sunucusuna giden şey genellikle yalnızca genel bilgilerdir: bakiye sorguları ve ağa yayınlanacak imzalı işlemler. Sağlayıcının veritabanında senin adına bir bakiye kaydı yoktur; bakiye doğrudan zincirden okunur.

Bunun pratik karşılığı sadedir: kimlik doğrulama yok, "parolamı unuttum" yok, gönderilen işlemi geri alma yok. Yayınlanmış bir işlem kimsenin iptal edebileceği bir şey değildir.

## Dikkat

Non-custodial olmak tek başına "güvenli" olmak değildir; sorumluluğun yer değiştirmesidir. Anahtarın durduğu cihaz ele geçirilirse ya da kurtarma ifadesi birine gösterilirse sonuç, şirketin batmasından farksızdır. Bu tercihin arkasındaki fikir ve pratikte ne gerektirdiği [[self-custody]] yazısında anlatılıyor.

Bir de sık karıştırılan bir ayrım var: bir cüzdanın non-custodial olması, kullandığın uygulamanın ya da bağlandığın sitenin güvenilir olduğu anlamına gelmez. Anahtar sende dursa bile imzaladığın işlem varlığını başkasına devredebilir.
