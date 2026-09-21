---
term: "Embedded Wallet"
tr: "Gömülü cüzdan"
aliases: ["gomulu cuzdan"]
category: cuzdanlar
subcategory: "Cüzdan türleri"
level: orta
short: "Uygulamanın içine gömülü olan, kullanıcıya ayrı bir cüzdan kurdurmadan giriş anında oluşturulan cüzdan."
related: [mpc-wallet, smart-contract-wallet, account-abstraction, onboarding, gasless-transaction]
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

Gömülü cüzdan, bir uygulamanın kendi içinde, kullanıcı ayrı bir program kurmadan oluşturduğu cüzdandır. Kullanıcı e-postasıyla ya da var olan bir hesabıyla giriş yapar; arka planda kendisi için bir adres üretilir. Amaç [[onboarding|ilk kullanım]] engelini kaldırmaktır: eklenti kurmak, kelime listesi yazmak ve ücret ödemek için jeton bulmak gibi adımlar kullanıcının önünden kalkar.

## Benzetme

Arabanın içine gömülü navigasyon gibi: ayrıca bir cihaz almana gerek yoktur, kontağı çevirdiğinde oradadır. Karşılığında hangi sürümü kullandığına ve ne zaman güncelleneceğine sen karar vermezsin.

## Nasıl çalışır?

Anahtar yine üretilir, ama kullanıcıya bir kelime listesi gösterilmez; korunması sağlayıcının tasarımına bırakılır. Yaygın yaklaşımlar şunlar: anahtarı paylara bölüp bir payı sağlayıcıda, bir payı kullanıcının giriş yöntemine bağlı tutmak ([[mpc-wallet|MPC]]); anahtarı cihazın güvenli donanımında ya da sağlayıcının izole bir ortamında tutmak; hesabı kuralları kodla yazılı bir [[smart-contract-wallet|akıllı sözleşme cüzdanına]] bağlamak ([[account-abstraction|hesap soyutlaması]]).

İmzalama da aynı düzenek üzerinden, çoğu zaman tek dokunuşla olur. [[gasless-transaction|Ücreti uygulamanın üstlendiği işlemlerle]] birleştiğinde kullanıcı zincirle uğraştığını fark bile etmeyebilir.

## Dikkat

Kolaylığın kaynağı, anahtar sorumluluğunun bir bölümünün sağlayıcıya geçmesidir. Bu yüzden sorulacak sorular ürünün adı değil şunlardır: sağlayıcı tek başına imza atabiliyor mu, hesabı dışa aktarıp başka bir cüzdanda kullanabiliyor musun, sağlayıcı hizmeti kapatırsa erişimin ne oluyor? Cevaplar uygulamadan uygulamaya değişir; "gömülü" kelimesi tek başına bunlar hakkında bilgi vermez.

Giriş e-postayla yapılıyorsa cüzdanın güvenliği o e-posta hesabının güvenliğine bağlanmış olur; e-postaya erişen, çoğu tasarımda cüzdana da erişir.
