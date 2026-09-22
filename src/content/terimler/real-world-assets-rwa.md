---
term: "Real World Assets (RWA)"
tr: "Gerçek dünya varlıkları"
aliases: ["RWA"]
category: defi
subcategory: "Gerçek dünya varlıkları"
level: orta
short: "Zincir dışında var olan varlıkların zincirde temsil edilip DeFi'de teminat ve getiri kaynağı olarak kullanılmasını anlatan şemsiye terim."
related: [tokenization, tokenized-treasuries, security-token, custodian, collateral, kyc]
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

Real World Assets, zincir dışında var olan varlıkların — devlet borçlanma araçları, şirket alacakları, fatura ve kira gelirleri, gayrimenkul, emtia — zincirde token olarak temsil edilmesini anlatan şemsiye terimdir. Bu temsilin nasıl kurulduğu [[tokenization|tokenlaştırmanın]] konusudur. RWA başlığı altında sorulan soru başkadır: varlık zincire girdikten sonra ne işe yarar?

İki cevap veriliyor: teminat ve getiri kaynağı. Bu başlığın en çok çalışılmış dallarından biri [[tokenized-treasuries|tokenize edilmiş hazine araçlarıdır]].

## Nasıl çalışır?

DeFi'de getirinin büyük kısmı sistemin kendi içinden çıkar: birinin borçlanmak için ödediği faiz, birinin takasta bıraktığı ücret, protokolün dağıttığı token. Bu kaynaklar kripto piyasasındaki talebe bağlıdır ve talep çekildiğinde birlikte kurur. Zincir dışı bir varlığın nakit akışı ise başka bir yerden gelir — kiracı kirayı öder, borçlu kuponu öder, fatura vadesinde tahsil edilir. [[real-yield|Gerçek getiri]] tartışmasında RWA'ya duyulan ilgi buradan doğar.

[[collateral|Teminat]] tarafında da benzer bir çekicilik var: değeri kripto fiyatlarıyla birlikte hareket etmeyen bir varlık, piyasa düştüğünde teminat havuzunu aynı anda boşaltmaz.

Buna karşılık zincir üstü dünyanın alışık olmadığı sürtünmeler gelir:

- **Kimlik.** Token'ı tutabilmek çoğu tasarımda [[kyc|kimlik doğrulamasından]] geçmeye bağlıdır.
- **Transfer kısıtı.** Sözleşme bir [[allowlist|izin listesi]] tutar; listede olmayan bir adrese yapılan transfer geri döner.
- **Takvim.** Zincir 7/24 çalışır, arkasındaki piyasa çalışmaz. Fiyatlama ve itfa iş günü kavramına bağlıdır.
- **İtfa.** Token'ı geri verip varlığı ya da karşılığını almak zincirde anlık bir işlem değil, bir başvuru ve bir bekleme süresidir.

## Dikkat

Zincir üstü kısım doğrulanabilir, zincir dışı kısım değildir. Token'ın kimde olduğunu zincirden okursun; varlığın gerçekten orada olduğunu ise koddan değil bir belgeden ve bir denetimden öğrenirsin. Bir RWA token'ı en fazla arkasındaki hukuki yapı ve [[custodian|saklayıcı]] kadar sağlamdır.

İkincisi, transfer kısıtları yüzünden DeFi'nin [[permissionless|izinsiz]] varsayımı burada geçerli değildir. Herhangi bir cüzdanla gelip bu token'ı alamazsın ve başka bir protokol onu serbestçe devralamaz; [[composability|birleştirilebilirliğin]] bir kısmı baştan kapalıdır.

Üçüncüsü, böyle bir token birçok ülkede [[security-token|menkul kıymet token'ı]] olarak değerlendirilebilir. Nitelendirmeyi düzenleyici yapar; ihraççının tanıtım metni yapmaz.
