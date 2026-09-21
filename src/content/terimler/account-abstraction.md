---
term: "Account Abstraction"
tr: "Hesap soyutlama"
aliases: ["hesap soyutlama", "AA", "account abstraction"]
category: cuzdanlar
subcategory: "Hesap soyutlama"
level: orta
short: "Bir hesabın 'bu işlemi kim onaylayabilir?' kuralını protokolün sabitlediği yerden alıp değiştirilebilir koda taşıma fikri."
related: [externally-owned-account-eoa, contract-account, erc-4337, smart-contract-wallet, session-key, social-recovery]
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

Hesap soyutlama, bir hesabın doğrulama kuralını protokolün sabitlediği yerden alıp hesabın kendi koduna taşıma fikridir. Klasik modelde kural tektir ve değiştirilemez: işlem, hesabın tek özel anahtarıyla imzalanmışsa geçerlidir, imzalanmamışsa değildir. Hesap soyutlamada bu soru programlanabilir hale gelir — "iki ayrı imza gerekir", "şu tutarın üstü için ek onay ister", "şu uygulamaya bu akşama kadar izinli" gibi cevaplar mümkün olur.

Önemli bir ayrım: hesap soyutlama bir standart değil, bir hedeftir. Bu hedefe giden birden çok yol vardır; [[erc-4337|ERC-4337]] o yollardan biridir, tek yolu değildir.

## Benzetme

Şahıs firmasıyla bir kurumun farkı gibi. Şahıs firmasında kural tektir: sahibi imzalar, biter. Kurumda ise kimin neyi ne kadar onaylayabileceği kurumun kendi iç yönetmeliğinde yazar, yönetmelik de gerektiğinde değiştirilir. [[externally-owned-account-eoa|EOA]] şahıs firmasıdır; hesap soyutlama, zincirdeki hesabı kendi yönetmeliğini yazabilen bir kuruma çevirmektir.

## Nasıl çalışır?

Temel hamle şudur: kullanıcının hesabı bir [[contract-account|sözleşme hesabı]] olur. Bir işlem geldiğinde protokol "imza doğru mu?" sorusunu kendi başına cevaplamaz; hesabın kodundaki doğrulama fonksiyonunu çağırır ve cevabı ondan alır. Kod kabul ederse işlem geçerlidir.

Bu tek değişiklik bir sürü kapıyı aynı anda açar: [[multisig|çoklu imza]], [[social-recovery|sosyal kurtarma]], [[session-key|oturum anahtarları]], cihazın ürettiği [[passkey]] gibi farklı imza türleri, ücretini başkasının ödediği [[gasless-transaction|işlemler]] ve birden çok adımı tek onayda toplama. Bunlar ayrı ayrı icat edilmiş özellikler değil, aynı esnekliğin sonuçlarıdır.

Uygulama tarafında iki genel yaklaşım var: kuralı protokolün doğrudan desteklemesi, ya da protokole dokunmadan sözleşmelerle kurulan bir katman. Hangi ağın hangisini kullandığı zamanla değişiyor; altta yatan fikir aynı kalıyor.

## Dikkat

Esneklik bedava gelmez. Doğrulama kuralı artık koddur ve kodun hatası doğrudan cüzdanın açığı demektir; basit bir imza kontrolünden çok daha geniş bir saldırı yüzeyi doğar.

Hesap soyutlama anahtar sorununu da ortadan kaldırmaz. Anahtarı yine birileri tutar; olan biten, "tek anahtar kaybolursa her şey biter" kuralının kaçınılmaz olmaktan çıkmasıdır.
