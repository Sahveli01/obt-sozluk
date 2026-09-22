---
term: "Storage Rent"
tr: ""
aliases: []
category: akilli-sozlesmeler
subcategory: "Bellek ve depolama"
level: orta
short: "Zincirde yer kaplayan verinin bedelini bir kez değil sürekli ödetme fikri; kimi zincirde var, Ethereum'da yok."
related: [storage-evm, state-growth, state-expiry, solana, account-model]
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

Storage rent, zincirde yer kaplayan verinin bedelini bir kez değil, o veri orada durduğu sürece ödetme fikridir. Arkasındaki gözlem basit: bir sözleşme [[storage-evm|storage]]'a yazarken tek seferlik bir ücret öder, ama o veriyi ağdaki bütün düğümler yıllarca taşımaya devam eder. Ödeme bir kereliktir, yük süreklidir.

Amaç bu dengesizliği kapatmak ve [[state-growth|state'in büyümesini]] sınırlamaktır. Kimsenin kullanmadığı veri bir maliyet doğurursa, sahibi ya ödemeye devam eder ya da temizler.

Bunun evrensel bir kural olmadığını baştan söylemek gerekir: her zincirin kendi tercihi vardır. Yazıldığı tarih itibarıyla Ethereum'da storage rent yoktur — yıllardır tartışılmış ama uygulanmamıştır; oradaki arayış daha çok [[state-expiry|state expiry]] gibi başlıklarda sürüyor. "Depolama kirası" denebilir ama yerleşik bir kullanım olmadığı için terim İngilizcesiyle anılıyor.

## Benzetme

Bankadaki kiralık kasa gibi. Kasa senindir ama senin kalması bir ödemeye bağlıdır: ya her dönem ücretini yatırırsın ya da baştan belli bir tutarı bırakıp kasayı süresiz açık tutarsın. Kasayı boşaltıp teslim ettiğinde o tutar sana geri döner. Bankanın derdi o paranın kendisi değil, boşuna kilitli duran kasaların çoğalmasıdır.

## Nasıl çalışır?

Modelin iki biçimi var.

Birincisi düzenli tahsilat: hesabın bakiyesinden, kapladığı yere göre dönem dönem kesinti yapılır. Bakiye biterse veri zincirden düşer ve geri getirmenin bedeli yeniden ödenir.

İkincisi asgari bakiye. [[solana|Solana]] bu yolu kullanır: bir hesabın zincirde kalabilmesi için verisinin boyutuna göre hesaplanan bir bakiyeyi tutması gerekir. Bu eşiği sağlayan hesaba "rent-exempt" denir — kira ödemez, karşılığında o bakiyeyi kilitli tutar. Hesap kapatıldığında bakiye geri alınır. Böylece yer kaplamanın bir bedeli olur, ama bedel kesintiyle değil, kilitlenen parayla ödenir.

Bu yüzden böyle bir zincirde geliştirici bir [[account-model|hesap]] açarken kaç bayt yer ayırdığını baştan düşünmek zorundadır.

## Dikkat

Storage rent'i bir ücret kalemi sanma; bir tasarım tercihidir ve hangi zincirden bahsedildiğine göre anlamı değişir. Bir zincirin belgelerinde okuduğun kira kuralını başka bir zincire taşıma.

İkincisi, rent-exempt bakiyesi harcanan bir ücret değil kilitlenen bir tutardır. "Hesap açmak şu kadara mal oluyor" cümlesi bu yüzden yanıltıcıdır: o para, hesabı kapatana kadar senin adına orada durur.
