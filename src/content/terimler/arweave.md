---
term: "Arweave"
tr: ""
aliases: ["ar", "permaweb"]
category: araclar
subcategory: "Altyapı ve veri"
level: orta
short: "Veriyi tek seferlik bir ödemeyle uzun süre saklamayı hedefleyen, ödülü bir fon modeline dayanan depolama ağı."
related: [decentralized-storage, filecoin, ipfs, pinning, off-chain]
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

Arweave, veri saklamak için kurulmuş bir [[decentralized-storage|dağıtık depolama]] ağıdır. Diğer yaklaşımlardan ayrıldığı nokta ödeme biçimidir: veriyi yüklerken bir kez ödersin, sonrasında abonelik ya da yenileme beklenmez. Ödemenin büyük kısmı, saklayıcılara zaman içinde azar azar dağıtılmak üzere bir fonda tutulur.

[[ipfs|IPFS]] gibi sistemlerde bir dosyanın erişilebilir kalması onu tutan birine ve [[pinning|sabitlemeye]] bağlıdır. Arweave bu sorumluluğu kişiden alıp ağın ekonomisine devretmeyi hedefler. Ağ üzerinden HTTP ile sunulan sayfa ve dosyalar için "permaweb" tabiri kullanılır.

## Nasıl çalışır?

Modelin dayandığı varsayım şudur: bir bayt veriyi saklamanın maliyeti zaman içinde düşmeye devam eder. Yükleme sırasında alınan ücret, bugünün maliyetinin çok üstünde bir karşılık olarak fona konur; fon saklayıcılara zamana yayarak ödeme yapar. Maliyet düşüşü sürdüğü sürece aynı para daha uzun süreyi finanse eder.

İkinci parça teşviktir. Ağın ödül mekanizması saklayıcıları yalnızca yeni veriyi değil geçmiş veriyi de ellerinde tutmaya yöneltir: ödül alabilmek için ağdan rastgele seçilen eski veri parçalarını sunabildiklerini göstermeleri gerekir. Böylece az kopyası kalmış veriyi saklamak daha kârlı hâle gelir.

Yazıldığı tarih itibarıyla ücretlendirme, fon kuralları ve ödül mekanizması ağın kendi gelişimiyle değişebilir. Bir rakam duyduğunda hangi tarihe ait olduğunu kontrol et.

## Dikkat

"Sonsuza kadar saklanır" bir fizik kuralı değil, bir ekonomik iddiadır. Model; saklama maliyetinin düşmeye devam etmesine, fonun beklendiği gibi işlemesine ve saklayıcıların ağda kalmaya devam etmesine dayanır. Bu varsayımlardan biri bozulursa vaat de zayıflar.

Yüklenen veri herkese açıktır ve tasarım gereği silinmesi zordur. Yanlış yüklenmiş bir dosyayı geri almak mümkün olmayabilir; gizli kalması gereken veriyi yüklemeden önce şifrelemek gerekir.

[[filecoin|Filecoin]] ile karşılaştırırken "hangisi daha iyi" sorusunun genel bir cevabı yoktur. Sorulacak soru şudur: veriyi ne kadar süre tutmak istiyorum ve bunu kim yenileyecek? Tek seferde ödeyip konuyu kapatmak isteyen farklı bir modele, süreyi ve şartları kendi belirlemek isteyen başka bir modele yönelir.
