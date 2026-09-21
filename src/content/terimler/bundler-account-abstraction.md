---
term: "Bundler (Account Abstraction)"
tr: ""
aliases: ["bundler", "bundler node"]
category: cuzdanlar
subcategory: "Hesap soyutlama"
level: ileri
short: "Kullanıcıların imzaladığı hesap soyutlama isteklerini toplayıp tek bir gerçek işlem halinde zincire gönderen aktör."
related: [erc-4337, account-abstraction, paymaster, mempool, relayer]
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

Bundler, [[erc-4337|ERC-4337]] akışında kullanıcıların imzaladığı istekleri toplayıp zincire taşıyan aktördür. Adı "bundle" yani demet kelimesinden gelir: birden çok kullanıcının isteğini tek bir demette, tek işlemle gönderir. Türkçede yerleşik bir karşılığı yok; sektörde İngilizce adıyla kullanılıyor.

Neden gerekli olduğu basit: kullanıcının imzaladığı şey geçerli bir [[transaction|işlem]] değildir, ağ onu doğrudan kabul etmez. Birinin onu gerçek bir işlemin içine sarması gerekir.

## Benzetme

Mahalleden belediyeye tek tek gitmek yerine dilekçeleri muhtara bırakmak gibi. Muhtar gelenleri biriktirir, tek dosya halinde resmî kanala sokar, evrak masrafını baştan kendi öder ve sonra dosyadan tahsil eder. Ne dilekçelerin içeriğini yazar, ne de hangi talebin kabul edileceğine karar verir; işi taşımaktır.

## Nasıl çalışır?

Bundler, normal [[mempool|mempool]]'dan ayrı duran istek havuzunu dinler. Aldığı her isteği zincire göndermeden önce çalıştırıp dener: hesabın doğrulama adımı geçiyor mu, ücreti karşılayacak bakiye ya da sponsor var mı? Geçmeyecek bir isteği demete koymak bundler için para kaybıdır, çünkü zincire giden işlemin ücretini kendi cebinden öder.

Ardından uygun bulduklarını bir araya getirir ve kendi [[externally-owned-account-eoa|EOA]]'sından standardın merkezî sözleşmesine tek bir işlem gönderir. Ücreti önce o öder, karşılığını aynı işlem içinde kullanıcının bakiyesinden ya da [[paymaster|paymaster]]'dan geri alır. Kazancı bu iki rakam arasındaki farktan gelir; yani bundler çalıştırmak ekonomik bir iştir, gönüllülük değil.

## Dikkat

Bundler kullanıcının isteğini değiştiremez: imza isteğin içeriğini kapsar, tek harf oynarsa doğrulama başarısız olur. Yapabileceği şey isteği görmezden gelmek, geciktirmek ya da demet içinde sıralamaktır. Bu da onu [[maximal-extractable-value-mev|MEV]] ve sansür tartışmalarının içine sokar.

Güven modeli şöyle özetlenebilir: paranı bundler'a emanet etmezsin, ama zincire erişimin için ona bağımlısındır. Tek bir bundler'ın seni reddetmesi sorun değildir — birden çok bundler'ın varlığı sorundan çıkmanın yoludur.

Bir de [[relayer|relayer]] ile karıştırılır. Relayer genel bir kavramdır: başkasının imzaladığı mesajı zincire taşıyan herkes. Bundler, bu rolün ERC-4337'ye özgü, kuralları tanımlanmış biçimidir.
