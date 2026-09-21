---
term: "Smart Contract Wallet"
tr: "Akıllı sözleşme cüzdanı"
aliases: ["akilli sozlesme cuzdani"]
category: cuzdanlar
subcategory: "Cüzdan türleri"
level: ileri
short: "Hesabın kendisinin bir akıllı sözleşme olduğu, imza ve harcama kurallarının kodla yazıldığı cüzdan."
related: [account-abstraction, erc-4337, externally-owned-account-eoa, multisig, social-recovery, smart-contract]
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

Sıradan bir hesapta ([[externally-owned-account-eoa|EOA]]) kural tektir: doğru anahtarla imzalanmış işlem geçerlidir, gerisi yoktur. Akıllı sözleşme cüzdanında ise hesabın kendisi bir [[smart-contract|akıllı sözleşmedir]] ve "geçerli işlem" tanımını o sözleşmenin kodu yapar.

Böylece günlük harcama limiti, yalnızca belirli adreslere gönderim izni, iki ayrı imza zorunluluğu, süreli yetkiler ya da anahtar kaybında yeni imzacı atama gibi kurallar doğrudan hesabın içine yazılabilir.

## Benzetme

Bir kuruma ait ortak e-posta adresi gibi. `iletisim@` adresine yazarsın; arkasındaki kişi zamanla değişir, kimin okuyacağını ve kimin cevap yazabileceğini grubun ayarları belirler. Adres ise sabit kalır — muhatabın kim olduğu değişse de yazacağın yer aynıdır.

## Nasıl çalışır?

İşlem, anahtarla doğrudan ağa gönderilmek yerine sözleşmeye bir çağrı olarak ulaşır; sözleşme imzayı ve kuralları kontrol eder, hepsi geçerse işlemi yürütür. Ethereum'da bunu normal kullanıcı akışına oturtan yapı [[account-abstraction|hesap soyutlaması]] ve bu iş için tanımlanmış [[erc-4337|ERC-4337]] standardıdır: kullanıcı isteği ayrı bir havuzda toplanır, [[bundler-account-abstraction|bundler]] bunları zincire taşır, ücreti gerekirse bir [[paymaster|paymaster]] üstlenir.

Önemli sonuç şudur: imzacı ile hesap birbirinden ayrışır. Anahtarını değiştirmek için adresini değiştirmen gerekmez, sözleşmedeki imzacıyı güncellemen yeterlidir. [[social-recovery|Sosyal kurtarma]] ve kurumsal kullanımdaki [[multisig|çoklu imza]] düzenekleri bunun üstüne kurulur.

## Dikkat

Esnekliğin bedeli, hesabın artık kod olmasıdır. Sözleşmedeki bir hata ya da fazla geniş bırakılmış bir yükseltme yetkisi doğrudan varlık kaybına dönüşebilir; bu yüzden denetimden geçmiş ve uzun süredir kullanılan uygulamalar tercih edilir.

Destek de her yerde aynı değildir: bazı uygulamalar yalnızca EOA imzası bekler ve sözleşme cüzdanıyla çalışmaz. Ayrıca hesap ilk kullanımda zincire yazıldığı için bir kuruluş ücreti vardır.
