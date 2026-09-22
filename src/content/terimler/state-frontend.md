---
term: "State (Frontend)"
tr: "Durum"
aliases: ["arayüz durumu"]
category: web
subcategory: "Frontend"
level: orta
short: "Arayüzün zaman içinde değişen ve değiştiğinde ekranın yeniden çizilmesini tetikleyen verisi."
related: [component, hook-react, props, react, dapp]
disambiguation: [state-blockchain]
tags: []
status: taslak
reviewedBy: []
dateSensitive: false
sources: []
added: 2026-09-21
updated: 2026-09-22
---

## Nedir?

State, bir arayüzün zaman içinde değişen verisidir: açık olan sekme, forma yazılmakta olan metin, menünün açık mı kapalı mı olduğu. Ayırt edici özelliği şudur — değiştiğinde ekran da değişmek zorundadır.

Bir [[dapp|dApp]] arayüzünde bağlı cüzdanın adresi, seçili ağ ve "işlem onay bekliyor" uyarısı da state'tir. Bunların hiçbiri zincirde durmaz; kullanıcının o anki ekranını tarif ederler.

## Nasıl çalışır?

Arayüz kütüphanelerinde ekranı elle güncellemezsin. State'i değiştirirsin, kütüphane o state'i kullanan [[component|bileşenleri]] yeniden çalıştırır ve sonucu ekrana yansıtır. Bu yüzden state doğrudan değiştirilmez, kütüphanenin verdiği güncelleme yoluyla değiştirilir — aksi hâlde veri değişir, ekran eski hâlinde kalır. [[react|React]]'ta bu yol bir [[hook-react|hook]] ile kurulur.

State'in nerede durduğu da bir karardır. Yalnızca tek bir bileşeni ilgilendiren veri o bileşenin içinde kalır. Birden çok bileşenin görmesi gereken veri — bağlı cüzdan adresi gibi — ortak bir üst noktada tutulur ve aşağıya [[props|props]] olarak dağıtılır. Bu üst noktayı gereğinden yukarı taşımak da, aynı veriyi iki ayrı yerde tutmak da sonradan ayıklanması zor hatalar üretir.

## Dikkat

State tarayıcının belleğindedir: sayfayı yenilediğinde sıfırlanır. "Cüzdan bağlı" bilgisinin yenilemeden sonra yeniden kurulması gerekmesi bundandır.

Zincirdeki [[state-blockchain|state]] ile aynı kelimeyi paylaşırlar ama bağlayıcılıkları başkadır: oradaki durum ağın üzerinde anlaştığı ortak kayıttır, buradaki yalnızca tek bir kullanıcının ekranını tarif eder ve kimse için kanıt değildir.
