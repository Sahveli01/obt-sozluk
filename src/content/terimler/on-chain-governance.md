---
term: "On-chain Governance"
tr: "Zincir üstü yönetişim"
aliases: []
category: yonetisim
subcategory: ""
level: orta
short: "Oyların sözleşmeye verildiği, sayımın ve kabul edilen kararın uygulanmasının da zincirde otomatik yapıldığı yönetişim biçimi."
related: [off-chain-governance, governor-contract, timelock, governance-proposal, voting-power]
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

Zincir üstü yönetişimde sürecin tamamı sözleşmelerde yürür: öneri bir işlemle kaydedilir, oylar birer işlem olarak verilir, sayımı sözleşme yapar ve kabul edilen kararı yine sözleşme uygular. Hiçbir adım birinin elle iş yapmasına bağlı değildir.

Karşısındaki yaklaşım [[off-chain-governance|zincir dışı yönetişimdir]]. İkisi arasındaki tercih, bir protokolün en belirleyici tasarım kararlarından biridir.

## Nasıl çalışır?

Öneri, çalıştırılacak çağrıların listesi hâlinde bir [[governor-contract|governor sözleşmesine]] kaydedilir. Kısa bir gecikmeden sonra oy penceresi açılır; her oy zincire yazıldığı için [[gas|gaz]] ücreti öder. Pencere kapandığında sözleşme sonucu kendisi okur: yeterli katılım ve yeterli evet varsa öneri kabul edilmiş sayılır.

Kabul edilen öneri genellikle hemen çalışmaz, önce bir [[timelock|zaman kilidine]] alınır. Süre dolduğunda yürütme çağrısı işlemleri sırayla çalıştırır. Kimsenin uygulamayı erteleme, değiştirme ya da hiç yapmama seçeneği yoktur.

## Dikkat

Bedeli katılımdır. Küçük bir bakiyeyle oy vermek çoğu zaman ödenecek gaz ücretine değmez; bu yüzden zincir üstü oylamalarda katılım düşük kalma ve karar büyük tutuculara daha bağımlı olma eğilimindedir. [[vote-delegation|Oy devri]] bunu azaltmak için kullanılır.

İkinci sınır kapsamdır. Sözleşme yalnızca kendi çağırabileceği işleri yürütebilir: bir parametre değişir, hazineden ödeme çıkar. "Şu ekip şu işi yapsın" türünden bir karar zincir üstünde de oylanabilir, ama yürütülmesi yine insanlara kalır.

Son olarak, sürecin zincir üstünde olması kararın isabetli olduğunu göstermez. Gösterdiği tek şey, sonucun herkesçe aynı biçimde görülüp kesin olarak uygulanmasıdır.
