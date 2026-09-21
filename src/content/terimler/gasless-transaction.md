---
term: "Gasless Transaction"
tr: ""
aliases: ["gasless", "gassız işlem", "ücretsiz işlem"]
category: cuzdanlar
subcategory: "Hesap soyutlama"
level: orta
short: "Kullanıcının cebinden gas ücreti çıkmadan gerçekleşen işlem. Ücret ortadan kalkmaz; başkası öder."
related: [paymaster, relayer, gas, erc-2612-permit, account-abstraction]
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

"Gassız işlem", kullanıcının [[gas|gas]] ücreti ödemeden yaptığı işlemdir. Adı yanıltıcıdır: zincirde ücretsiz işlem diye bir şey yoktur. Doğrulayıcıların harcadığı kaynak her hâlükârda ödenir; değişen tek şey, faturayı kimin karşıladığıdır.

Türkçede yerleşik bir karşılığı yok ve "ücretsiz işlem" demek doğrudan yanlış olur. O yüzden çoğu yerde İngilizce adıyla geçiyor.

## Benzetme

Otellerin "ücretsiz kahvaltı"sı gibi. Kahvaltı bedava değildir, oda fiyatının içindedir. Kimse mutfakta karşılıksız çalışmıyor; sen sadece hesabı ayrıca ödemiyorsun.

## Nasıl çalışır?

Ortak kalıp şu: kullanıcı ücret ödemek yerine yalnızca niyetini imzalar. İmzalı mesaj doğrudan zincire değil, onu taşıyacak tarafa gider. O taraf gerçek işlemi kendi adına gönderir ve ücreti öder. Kullanıcının imzası işin içeriğini kapsadığı için taşıyan taraf isteği değiştiremez.

Bunun birkaç biçimi var:

- **[[relayer|Relayer]] üzerinden**: imzalı mesaj bir sözleşmeye iletilir, sözleşme imzayı doğrulayıp asıl işi yapar. Ücreti relayer öder.
- **[[account-abstraction|Hesap soyutlama]] akışında**: ücreti üstlenen ayrı bir sözleşme, yani [[paymaster|paymaster]] vardır.
- **Onay imzalarıyla**: [[erc-2612-permit|ERC-2612]] gibi standartlarda kullanıcı ayrı bir onay işlemi göndermek yerine imza verir; işlemi uygulama gönderir.

Ücreti sonunda kim karşılar? Ya uygulamanın kendisi (kullanıcı kazanmak için katlanılan bir pazarlama gideri), ya bir sponsor, ya da kullanıcı — ama ağın parasıyla değil, elindeki başka bir token'la.

## Dikkat

Ücretsiz olan şey kullanıcı deneyimidir, işlemin kendisi değil. Bunu bilmek önemli, çünkü sponsorluk kalıcı bir özellik değildir: bütçe biter, kampanya kapanır, kural değişir ve ücret bir gün yine senin önüne gelir.

İkinci konu imza güvenliği. Ücret ödemediğin için "bu bir işlem değil, sadece imza" diye rahatlamak yanlıştır; imzaladığın mesaj zincirde tam yetkili bir işleme dönüşebilir. Ne imzaladığını okumadan onaylamak, [[blind-signing|kör imzanın]] en sık rastlanan hâlidir.
