---
term: "thirdweb"
tr: ""
aliases: []
category: araclar
subcategory: "Blockchain geliştirici araçları"
level: orta
short: "Hazır sözleşmeler, SDK'lar ve cüzdan bileşenleriyle dApp geliştirmeyi tek bir araç kümesinde toplayan platform."
related: [sdk, smart-contract-wallet, account-abstraction, dapp, contract-deployment]
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

thirdweb, bir [[dapp|dApp]] yazarken tekrar eden işleri hazır parçalara çeviren bir geliştirici platformudur. Yazıldığı tarih itibarıyla kapsadığı alanlar kabaca şunlardır: yaygın token ve koleksiyon türleri için hazır sözleşmeler, bu sözleşmeleri ağa göndermeyi ve yönetmeyi sağlayan bir arayüz, uygulamadan zincire bağlanmak için [[sdk|SDK]]'lar ve cüzdan bağlama ekranını hazır getiren arayüz bileşenleri.

Tek bir kütüphane değil, birbirine bağlanabilen bir araç kümesidir; parçalarını ayrı ayrı da kullanabilirsin.

## Nasıl çalışır?

Çekirdek fikir, zincir tarafındaki ayrıntıları uygulama geliştiricisinden uzak tutmaktır. Hazır bir sözleşmeyi [[contract-deployment|ağa gönderirken]] Solidity yazmaz, parametreleri doldurursun. Uygulama tarafında bir işlevi çağırırken [[application-binary-interface-abi|ABI]] dosyasıyla uğraşmak yerine SDK'nın hazır çağrılarını kullanırsın.

Cüzdan tarafında da benzer bir soyutlama vardır: e-posta ya da sosyal hesapla açılan [[smart-contract-wallet|sözleşme cüzdanları]] ve [[account-abstraction|hesap soyutlamasına]] dayanan, işlem ücretini kullanıcıya ödetmeyen akışlar hazır bileşenler olarak sunulur. Bu akışlar arka planda ek altyapı gerektirir ve platform bu altyapıyı barındırılan bir servis olarak sağlar.

## Dikkat

Kolaylık bir bağımlılıkla gelir: barındırılan bir servise dayanan her akış, o servis erişilemez olduğunda etkilenir. Sözleşmelerin zincirde kalmaya devam eder ama uygulamanın kullandığı yardımcı katman kesintiden etkilenebilir; buna göre bir yedek yol düşün.

Hazır sözleşme, sözleşmeyi okumaktan seni kurtarmaz. Kimin yönetici olduğu, hangi işlevlerin kapatılabildiği ve varsa yükseltme hakkının kimde olduğu, göndermeden önce bakman gereken şeylerdir.
