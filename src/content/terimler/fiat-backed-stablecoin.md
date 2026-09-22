---
term: "Fiat-backed Stablecoin"
tr: ""
aliases: []
category: defi
subcategory: "Stablecoin'ler"
level: orta
short: "Karşılığı zincir dışında, banka hesabında ya da kısa vadeli devlet borçlanma araçlarında tutulan stablecoin türü."
related: [stablecoin, peg, custodian, proof-of-reserves, fiat, depeg]
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

Fiat destekli stablecoin, dolaşımdaki her birimi için zincirin dışında bir karşılık tutulduğu iddiasıyla çıkarılan [[stablecoin]]'dir. Karşılık genellikle iki şeyden oluşur: bir banka hesabındaki mevduat ve kısa vadeli devlet borçlanma araçları.

[[fiat|İtibari para]] zincirde duramadığı için bu karşılığı tutan, sayan ve gerektiğinde ödeyen bir taraf olmak zorundadır. Güven noktası da tam burasıdır: ihraççı ve varlığı fiilen elinde tutan [[custodian|saklayıcı]]. Sözleşme kodu kusursuz olsa bile token'ın değeri, zincirin dışındaki bir vaadin tutulmasına bağlıdır. Türkçede yerleşik bir karşılığı yok; anlatırken "fiat destekli" deniyor, terim İngilizce kullanılıyor.

## Nasıl çalışır?

Basım ve itfa doğrudan ihraççıyla yapılır. Bir taraf ihraççıya para gönderir, ihraççı aynı tutarda token basar ([[mint]]); ters yönde token geri verilir, yakılır ve para iade edilir. Bu kapı çoğu zaman yalnızca sözleşmeli ve kimliği doğrulanmış kurumlara açıktır; sıradan bir kullanıcı token'ı piyasadan alıp satar.

Fiyatı hedefe yapıştıran şey de bu kapıdır. Token piyasada hedefin altına düşerse itfa hakkı olan taraf ucuza alıp ihraççıdan tam karşılığını ister; üstüne çıkarsa yeni bastırıp satar. [[arbitrage|Arbitraj]] denen bu alım satım, kapı açık kaldığı sürece fiyatı dar bir bantta tutar. [[peg|Bağın]] gücü, kapının açıklığı kadardır.

Karşılığın gerçekten orada olduğu iddiası bağımsız denetim ya da düzenli raporla gösterilir. Zincir üstü karşılığı olan sistemlerdeki [[proof-of-reserves|rezerv kanıtı]] burada doğrudan uygulanamaz, çünkü kanıtlanacak varlık zincirde değildir.

## Dikkat

İki ayrı risk var, karıştırılmasınlar.

Birincisi rezervin kendisi. Mevduat bir bankada durur; o banka ödeme yapamaz hâle gelirse karşılığın o kısmı kâğıt üstünde yerindedir ama birkaç gün ulaşılamaz olabilir. Kısa vadeli tahvilin de bir vadesi vardır: herkes aynı gün kapıya dayanırsa ihraççı vadesi gelmemiş kâğıdı o günkü piyasa fiyatından satmak zorunda kalır. "Her an ödenir" vaadi ile kasadaki şeyin nakde dönme hızı aynı şey değildir.

İkincisi yetki. İhraççı çoğu tasarımda belirli adresleri dondurabilir ve bunun için zincirden izin almasına gerek yoktur.

Bu tasarımların hukuki durumu ülkeye göre değişir; bazı ülkeler rezerv ve raporlama şartı getirmiştir, bazılarında konuya özel bir düzenleme yoktur. Kesin bir hüküm için kendi ülkenin mevzuatına bakman gerekir.
