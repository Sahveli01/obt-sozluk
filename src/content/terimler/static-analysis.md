---
term: "Static Analysis"
tr: "Statik analiz"
aliases: ["statik analiz"]
category: guvenlik
subcategory: "Güvenlik test yöntemleri"
level: orta
short: "Kodu hiç çalıştırmadan okuyup bilinen hatalı kalıpları arayan inceleme yöntemi."
related: [slither, linter, fuzzing, smart-contract-audit, code-review]
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

Statik analiz, kodu çalıştırmadan inceleyen yöntemdir. Program ayağa kalkmaz, hiçbir girdi verilmez, tek bir işlem gönderilmez; araç kaynağı okuyup elde ettiği yapıyı tarar ve daha önce kurala dökülmüş sorunlu kalıpları bildirir.

Güvenlik test yöntemleri arasında en ucuzu budur. Saniyeler sürer, ayrı bir uzmanlık istemez, her kayıtta ya da [[ci-cd|otomatik işlem hattında]] koşturulabilir. Karşılığında en yüzeysel bakan da odur: yalnızca tanıdığı kalıpları görür, kodun ne yapmaya çalıştığını bilmez.

## Benzetme

Havalimanındaki bagaj tarayıcısı gibi. Çanta açılmaz, içine el atılmaz; görüntüde tanıdık siluetler aranır. Bıçak ya da dolu bir şişe bir bakışta yakalanır, ama listede olmayan bir şey ekrandan rahatça geçer — üstelik saç kurutma makinesi her seferinde alarm verir. Tarayıcının hızlı olmasının sebebi de sınırının sebebi de aynıdır: çantayı hiç açmıyor.

## Nasıl çalışır?

Araç kaynağı ayrıştırıp kendi iç gösterimine çevirir: hangi işlev hangisini çağırıyor, hangi değişkene nerede yazılıyor, bir değer nereden gelip nereye gidiyor. Sonra bu gösterimin üzerinde kurallar çalışır — "dış çağrıdan sonra mı durum güncelleniyor", "dönüş değeri kontrol edilmemiş mi", "bu değişken hiç ilklendirilmiş mi".

Aynı aileden iki akraba vardır: biçim ve üslup hatalarına bakan [[linter|linter]] ile güvenliğe odaklanan [[slither|Slither]] gibi sözleşme tarayıcıları. Aradaki fark kuralların derinliğidir, yöntem aynıdır.

Bulguların bir kısmı gerçek hata, bir kısmı yanlış alarmdır: aracın göremediği bir bağlam yüzünden aslında güvenli olan kod. Bu oran yöntemin bir kusuru değil, doğal sonucudur — kalıba bakan bir şey kalıba benzeyeni de yakalar.

## Dikkat

Asıl risk bulunamayan hata değil, üretilen gürültüdür. Yüzlerce uyarının çoğu yanlış alarmsa ekip bir süre sonra listeye bakmayı bırakır. Bu noktadaki en kolay hamle en tehlikelisidir: uyarıyı azaltmak için kuralı toptan kapatmak. Kapatılan kural bir dahaki sefere gerçekten haklı olduğunda kimse haberdar olmaz.

İşe yarayan yol, bulguları tek tek elemek ve her susturmanın yanına gerekçesini yazmaktır; gerekçesiz susturma zamanla kimsenin sorgulamadığı bir boşluğa dönüşür.

Temiz bir rapor da onay damgası değildir. "Tanıdığım kalıplardan hiçbiri yok" demektir; [[code-review|insan incelemesinin]] ve daha derin yöntemlerin yerine geçmez.
