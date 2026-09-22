---
term: "Private Mempool"
tr: ""
aliases: []
category: defi
subcategory: "MEV ve işlem akışı"
level: orta
short: "İşlemi herkese açık bekleme havuzuna düşürmeden doğrudan blok kuran bir tarafa ileten kapalı kanal."
related: [mempool, block-builder, maximal-extractable-value-mev, front-running, order-flow]
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

Normalde gönderdiğin işlem önce [[mempool|bekleme havuzuna]] düşer. Havuz herkese açıktır: işlemin zincire yazılmadan önce ne yapmak istediğin, ne kadar ödediğin ve ne kadar kaymaya razı olduğun ortadadır.

Private mempool bu adımı atlar. İşlem yayınlanmaz; doğrudan blok kuran bir tarafa iletilir ve zincire girene kadar yalnızca o taraf görür. Amacı sır saklamak değil, işlemi görenlerin sayısını azaltarak sıralama saldırılarına açık pencereyi kapatmaktır.

Türkçede yerleşik bir karşılığı yok; "özel havuz" diye anılsa da terim İngilizce kullanılıyor.

## Benzetme

Evini satarken ilanı herkese açık bir siteye koymakla yalnızca tek bir emlakçıya vermek arasındaki fark gibi. İlanı gören gerçek alıcılar kadar, senin acele ettiğini anlayıp ona göre davranacak olanlar da vardır. Tek bir emlakçıya verdiğinde gören göz sayısı azalır — ama artık onun seni doğru alıcıya götürdüğüne dair elinde onun sözünden başka bir şey yoktur.

## Nasıl çalışır?

Cüzdan ya da uygulama işlemi ağdaki düğümlere değil, özel bir uç noktaya gönderir. Oradan bir veya birkaç [[block-builder|builder]] işlemi alır ve bloğa koyar.

Bazı kanallar bunun üstüne bir güvence daha ekler: işlem ancak başarıyla çalışacaksa bloğa konur, çalışmayacaksa hiç yayımlanmaz. Bu durumda başarısız bir işlem için ücret ödemezsin — herkese açık havuzda çalışan normal bir işlemde ödersin.

## Dikkat

Kazandığın korumanın bedeli güvendir. İşlemini gören taraf onu geciktirebilir, sıraya koyarken kendi işine geleni seçebilir ya da içeriğini başkasına aktarabilir; sen bunu dışarıdan göremez, olduktan sonra da kanıtlayamazsın. Herkese açık havuzda seni koruyan şey gizlilik değil, herkesin aynı anda görmesiydi.

İkinci nokta ağ ölçeğindedir. İşlemlerin büyük kısmı birkaç özel kanalda toplanırsa, ağda ne olup bittiğini bağımsız olarak izleyebilme imkânı zayıflar ve bir işlemin zincire girmesi tek tek kanalların kararına bağlanır — [[order-flow|akışı]] elinde tutan taraf, akışı kesme gücünü de elinde tutar.
