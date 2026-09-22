---
term: "Liquidity Network Bridge"
tr: "Likidite ağı köprüsü"
aliases: []
category: olceklenme
subcategory: "Köprüler ve zincirler arası"
level: orta
short: "Her iki zincirde hazır likidite havuzları tutup kullanıcıya hedef zincirin kendi varlığını ödeyen köprü türü."
related: [blockchain-bridge, liquidity-pool, liquidity-provider-lp, lock-and-mint, slippage, third-party-bridge]
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

Bu köprü hiçbir şey basmaz. İki zincirde de hazırda bekleyen [[liquidity-pool|likidite havuzları]] vardır: sen kaynak zincirde varlığı havuza bırakırsın, hedef zincirde oradaki havuzdan sana ödeme yapılır. Aldığın şey sarmalanmış bir temsil değil, hedef zincirin kendi yerel varlığıdır.

## Benzetme

İki şehirde şubesi olan bir havale şirketi gibi. Parayı buradaki şubeye verirsin, öteki şube kendi kasasındaki nakitten öder; para aslında yolculuk etmez, iki kasa sonradan denkleştirilir. İşlem hızlıdır çünkü ödeme karşı kasadaki nakde bağlıdır — ve tam bu yüzden kasa zayıfsa ya da istediğin tutar büyükse aynı hızda ve aynı fiyattan ödeme alamazsın.

## Nasıl çalışır?

Havuzları [[liquidity-provider-lp|likidite sağlayıcıları]] doldurur; karşılığında geçiş ücretinden pay alırlar.

Hızın kaynağı şudur: ödeme, kaynak taraftaki işlemin tam olarak kesinleşmesini beklemeden yapılabilir. Sağlayıcı riski üstlenip önden öder, doğrulama tamamlandığında alacağını kaynak taraftan tahsil eder. [[lock-and-mint]]'te beklemenin sebebi güvenlik kontrolünün tamamlanmasıdır; burada bekleme sağlayıcıya devredilmiştir.

Bedeli de nettir. Fiyat havuzun derinliğine bağlıdır: büyük tutarlarda ücret ve [[slippage|kayma]] artar, havuz zayıfsa işlem bekler ya da kısmi gerçekleşir. Transferler uzun süre tek yöne aktığında havuzlar bir tarafta birikir ve protokolün ücretlerle yeniden dengeleme yapması gerekir.

## Dikkat

Bekleme kısaldı diye risk ortadan kalkmaz, yer değiştirir. Önden ödeyen sağlayıcı alacağını yalnızca doğrulama katmanı doğru çalışırsa alır; o katman yanlış hüküm verirse zarar önce sağlayıcıya, sonra havuza yazılır.

Burada tek bir dev kilit sözleşmesi yoktur, ama havuzlar da varlık biriktirdiği ölçüde hedeftir ([[bridge-exploit|köprü istismarı]]).

Gösterilen tutarla eline geçen tutar farklı olabilir: ücret ve kayma peşinen hesaba katılmalıdır.
