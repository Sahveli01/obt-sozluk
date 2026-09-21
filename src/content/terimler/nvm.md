---
term: "nvm"
tr: ""
aliases: ["node version manager"]
category: araclar
subcategory: "Geliştirme ortamı"
level: orta
short: "Aynı bilgisayarda birden çok Node.js sürümünü kurup aralarında komutla geçiş yapmayı sağlayan araç."
related: [node-js, npm, package-manager, semantic-versioning]
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

Projeler aynı [[node-js|Node.js]] sürümünü istemez: bir yıl önce başlanmış bir depo eski bir sürümle çalışır, yeni bir araç ise daha yenisini şart koşar. nvm birden çok Node sürümünü yan yana kurmanı ve aralarında tek komutla geçmeni sağlar, böylece her proje için kurulumu bozup yeniden yapmazsın.

## Nasıl çalışır?

nvm her sürümü ayrı bir klasöre kurar ve `nvm use` dediğinde [[path|PATH]] üzerindeki `node` girişini o klasöre çevirir. Değişiklik genelde açık olan kabuk oturumu için geçerlidir; yeni bir [[terminal]] açtığında varsayılan sürüme dönebilirsin.

Projenin kök klasörüne konan `.nvmrc` dosyasına bir sürüm yazılırsa, ekipteki herkes hangi sürümün beklendiğini tahmin etmek zorunda kalmaz.

Önemli bir ayrım: Windows'ta özgün nvm çalışmaz. Orada nvm-windows adlı ayrı bir proje kullanılır; komutları benzerdir ama aynı yazılım değildir, dolayısıyla bütün seçenekleri birebir örtüşmez. Benzer işi yapan fnm, Volta gibi başka araçlar da vardır.

## Örnek

```
nvm install 20
nvm use 20
node --version
```

İlk satır o sürümü indirir, ikincisi bu oturumda etkin kılar, üçüncüsü hangisinin çalıştığını söyler. Üç satır da bash'te ve PowerShell'de aynı yazılır; Windows'ta arkada nvm-windows çalışır. Örnekteki `20` yerine projenin istediği sürüm yazılır.

## Dikkat

nvm Node sürümünü değiştirir, paketleri değil. Her sürümün kendi genel paket kurulumları vardır; sürüm değiştirdiğinde `-g` ile kurduğun araçlar "kaybolmuş" gibi görünür, aslında diğer sürümün klasöründe durmaktadırlar.

Bir de proje bağımlılıklarını yeni bir Node sürümüne geçtikten sonra yeniden kurmak gerekebilir: derlenmiş bileşen içeren paketler eski sürüme göre kurulmuş olabilir.
