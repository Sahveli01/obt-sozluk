---
term: "Paymaster"
tr: ""
aliases: ["paymaster contract", "ücret sponsoru"]
category: cuzdanlar
subcategory: "Hesap soyutlama"
level: ileri
short: "Bir işlemin gas ücretini kullanıcı yerine üstlenen sözleşme; karşılığında kendi kurallarını koyabilir veya başka bir token'la ödeme alabilir."
related: [erc-4337, gasless-transaction, bundler-account-abstraction, gas, account-abstraction]
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

Paymaster, bir işlemin [[gas|gas]] ücretini kullanıcının cebinden değil kendi kesesinden ödeyen sözleşmedir. [[erc-4337|ERC-4337]] akışında isteğe bağlı bir roldür: olmayabilir de, olduğunda kullanıcı hiç ağ parası tutmadan işlem yapabilir. Yeni bir kullanıcının bir uygulamayı denemek için önce borsadan token alması gerekmemesinin yolu genelde buradan geçer.

Türkçede yerleşik bir karşılığı yok; metinlerde "ücreti üstlenen sözleşme" diye açıklanıp adı İngilizce bırakılıyor.

## Benzetme

Kırtasiyede fotokopi çektirip "topluluğun hesabına yazın" demek gibi. Parayı kırtasiye yine alır, sadece senden almaz. Topluluğun da koşulları vardır: üye olman gerekir, ayda belli bir sayfayı geçemezsin, bütçe bitince liste kapanır.

## Nasıl çalışır?

Paymaster zincire önceden bir bakiye yatırır; ödeyeceği ücretler oradan düşer. Bir kullanıcı isteği belirli bir paymaster'ı gösteriyorsa, işlemi yürüten merkezî sözleşme asıl işi yapmadan önce paymaster'ın kendi doğrulama fonksiyonunu da çağırır ve ona "bu işlemi üstleniyor musun?" diye sorar.

Paymaster bu noktada kendi kuralına bakar: istek hangi uygulamaya gidiyor, kullanıcı kayıtlı mı, işlem izin verilen türden mi, bütçe doldu mu. Kabul ederse işlem yürütülür ve ücret paymaster'ın bakiyesinden kesilir; reddederse istek düşer. Ücreti zincire fiilen ödeyen tarafın [[bundler-account-abstraction|bundler]] olduğunu unutma — paymaster, bundler'ın parasını geri aldığı kaynaktır.

İki yaygın kullanım var. Birincisi saf sponsorluk: uygulama, kullanıcısının ücretini tamamen üstlenir. İkincisi takas: paymaster ücreti üstlenir ama aynı işlem içinde kullanıcıdan karşılığını bir [[erc-20|ERC-20]] token olarak alır, böylece kullanıcı elindeki stablecoin ile ücret ödemiş olur.

## Dikkat

Paymaster bir bağış kutusu değil, bir bütçedir. Kuralları gevşek yazılmış bir paymaster'ı kötü niyetli biri arka arkaya işlem göndererek boşaltabilir; bu yüzden gerçek kurulumlarda kimin, neyi, ne sıklıkla sponsorlayabileceği sıkı tanımlanır.

Kullanıcı tarafında da bir bağımlılık doğar: ücretini bir sponsorun ödemesi, o sponsorun politikasına tabi olmak demektir. Sponsor vazgeçerse ya da bütçe biterse ücret yeniden kullanıcının üstüne kalır. [[gasless-transaction|"Gassız" işlem]] adının yanılttığı yer tam olarak burasıdır.
