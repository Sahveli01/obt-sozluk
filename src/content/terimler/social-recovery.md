---
term: "Social Recovery"
tr: "Sosyal kurtarma"
aliases: ["sosyal kurtarma", "guardian recovery", "koruyucu"]
category: cuzdanlar
subcategory: "Hesap soyutlama"
level: orta
short: "Anahtarını kaybeden kullanıcının, önceden belirlediği güvenilir kişilerin onayıyla hesabına yeni anahtar tanımlayabilmesi."
related: [seed-phrase, multisig, smart-contract-wallet, account-abstraction, key-rotation]
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

Sosyal kurtarma, anahtarını kaybettiğinde hesabını geri almanı sağlayan bir kurtarma yöntemidir. Önceden birkaç "koruyucu" belirlersin: kendi ikinci cihazın, güvendiğin birkaç arkadaşın, bir kurum. Anahtarın gittiğinde bu koruyucuların yeterli sayıda onayı hesaba yeni bir anahtar tanımlar.

Çözmeye çalıştığı sorun, [[seed-phrase|kurtarma cümlesini]] tek başına taşımanın acımasızlığıdır: kâğıdı kaybedersen kimseye başvuramazsın. Sosyal kurtarma bu tek noktayı birkaç kişiye dağıtır.

## Benzetme

Evin yedek anahtarını birkaç komşuya bırakmak gibi — ama bu anahtarlar kapıyı açmaz. Komşuların tek yetkisi şudur: üçünden ikisi aynı fikirdeyse çilingiri çağırıp kilidi değiştirebilirler. İçeri giremezler; senin yeniden girebilmeni sağlarlar.

## Nasıl çalışır?

Sosyal kurtarma yalnızca cüzdan bir sözleşme olduğunda mümkündür, yani [[smart-contract-wallet|akıllı sözleşme cüzdanına]] ve [[account-abstraction|hesap soyutlamaya]] dayanır. Sözleşme kendi deposunda koruyucu listesini ve eşiği tutar (örneğin "üç koruyucudan ikisi").

Kurtarma başladığında koruyucular yeni anahtarı önerir ve onaylar. Eşik dolduğunda süreç hemen bitmez: genellikle bir bekleme süresi, yani [[timelock|zaman kilidi]] başlar. Bu süre, asıl sahibin hâlâ anahtarına erişimi varsa süreci iptal edebilmesi içindir — kötü niyetli bir kurtarma girişimine karşı en güçlü koruma budur. Süre sorunsuz dolarsa sözleşme imza yetkisini yeni anahtara geçirir. Hesabın adresi ve bakiyesi değişmez; değişen yalnızca [[key-rotation|hangi anahtarın]] o hesabı yönettiğidir.

Koruyucuların paraya dokunma yetkisi yoktur; yapabildikleri tek şey anahtar değişimi sürecini başlatmaktır.

## Dikkat

Koruyucular tek tek zayıf değil ama birlikte güçlüdür: eşiği dolduracak kadarı bir araya gelirse hesabı ele geçirebilirler. Bu yüzden birbirini tanımayan, farklı çevrelerden kişiler seçmek gerekir; hepsini aynı serviste ya da aynı evde tutmak kurtarmayı tek noktaya geri döndürür.

İkinci risk sosyal mühendisliktir: saldırgan seni taklit edip koruyucuları ikna etmeye çalışabilir. Bekleme süresi ve koruyucuların birbirinden bağımsız doğrulama yapması bu yüzden önemlidir.

Son olarak liste bakım ister. Koruyucular adreslerine erişimi kaybederse kurtarma yolu da kapanır; listeyi zaman zaman gözden geçirmek gerekir.
