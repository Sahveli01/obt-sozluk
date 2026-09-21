---
term: "On-chain Analytics"
tr: "Zincir üstü analiz"
aliases: ["zincir ustu analiz", "on chain analiz"]
category: araclar
subcategory: "Altyapı ve veri"
level: orta
short: "Açık zincir verisinden davranış ve akış çıkarımları yapma çalışması; veri kesindir, yorumu belirsiz."
related: [indexer, block-explorer, chain-analysis, whale, wallet-address, wash-trading]
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

Açık bir zincirde her işlem herkese görünür. Zincir üstü analiz, bu veriyi toplayıp düzenleyerek "kaç farklı adres işlem yaptı", "bu sözleşmede ne kadar varlık duruyor", "şu token hangi adresler arasında dolaşıyor" gibi sorulara cevap arayan çalışmadır.

Ham veri genelde bir [[indexer|indeksleyici]] üzerinden toplanır; analiz onun üstüne kurulur. Yani analiz veri üretmez, veriyi yorumlar. Sayılar zincirden gelir, anlam yorumlayanın varsayımlarından.

## Benzetme

Gece çekilmiş bir uydu fotoğrafına bakmak gibidir. Hangi bölgelerin ışığı yanıyor, hangileri karanlık, açıkça görürsün. Ama ışığın evde mi fabrikada mı yandığını, kimin uyanık olduğunu, neden yandığını göremezsin. Fotoğraf gerçektir; ondan çıkardığın hikâye tahmindir.

## Nasıl çalışır?

Üç katman vardır. **Toplama:** bloklar, işlemler ve olaylar okunup düzenli tablolara dökülür. **Kümeleme ve etiketleme:** hangi adreslerin aynı elde olabileceğini tahmin eden sezgisel kurallar çalışır, bilinen adreslere borsa, köprü ya da protokol kasası etiketi konur. **Ölçüt üretme:** aktif adres sayısı, kilitli varlık, hacim, elde tutma süresi gibi göstergeler hesaplanır.

En kırılgan yer etiketlerdir. Zincirde "bu bir borsa cüzdanıdır" yazmaz; bunu analiz eden taraf ekler ve yanılabilir. Adres ile kişi de aynı şey değildir: bir kişi yüzlerce [[wallet-address|adres]] kullanabilir, tek bir adres binlerce kullanıcının parasını tutabilir. Aynı varlık birden fazla zincire ve [[layer-2|Layer 2]] ağına dağıldığında tek zincire bakan ölçüt eksik kalır. Kimlik tarafına odaklanan daha dar bir alt alan için [[chain-analysis|chain analysis]] terimi kullanılır.

## Dikkat

Zincir verisi bir sonucun kaydıdır, sebebinin değil. Bir adresin hareket etmesi niyet göstermez: büyük bir transfer borsaya yatırma da olabilir, bir kurumun iç aktarımı da, bir yanlışlık da. Bu veriyi "sinyal" diye satan çok yer vardır; zincir verisi sana ne yapman gerektiğini söylemez, bir gözlem aracıdır.

Ölçütlerin tanımları da standart değildir. İki kaynak "aktif kullanıcı" ya da "hacim" için farklı hesap yapar; sayıları karşılaştırmadan önce tanımı sormak gerekir. [[wash-trading|Wash trading]] gibi yapay hareketler de bu sayıları bozar. Bir grafiği okurken ilk soru "bu ölçüt tam olarak neyi sayıyor" olmalıdır.
