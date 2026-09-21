---
term: "Build"
tr: "Derleme"
aliases: []
category: araclar
subcategory: "Derleme ve dağıtım süreci"
level: orta
short: "Kaynak kodu çalıştırılabilir ya da yayınlanabilir bir bütüne dönüştüren otomatik adımların tamamı."
related: [compilation, build-artifact, ci-cd, deployment, module-bundler]
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

Build, yazdığın kaynak kodu olduğu gibi değil, çalıştırılabilir ya da sunucuya konulabilir bir bütün hâline getirme işidir. İçinde [[compilation|derleme]] adımı bulunabilir, ama iş oradan ibaret değildir: bağımlılıklar toplanır, dosyalar tek pakette birleştirilir ([[module-bundler|bundler]]), gereksiz karakterler atılır, görseller kopyalanır, sürüm bilgisi gömülür. Türkçede "derleme" denir; ne var ki derleme dar anlamda yalnızca kodu makinenin anlayacağı biçime çevirmeyi anlatır, build bunun etrafındaki bütün adımları kapsar.

Önemli olan, bu adımların akıldan değil tek komutla ve her seferinde aynı sırayla yapılmasıdır.

## Benzetme

Kutuyla gelen bir dolap gibi. Kutunun içinde yan paneller, vidalar, raflar ve bir montaj kılavuzu vardır; parçalar da senindir, dolap da. Ama kimse kutuyu odanın köşesine bırakıp "işte dolap" demez. Build, kılavuzdaki adımları baştan sona uygulayıp kapağı takan kısımdır.

## Nasıl çalışır?

Build çoğu projede bir betikle tanımlanır ve tek satırla çalıştırılır (`npm run build` gibi). Sırayla bağımlılıklar kurulur, tip kontrolü yapılır, kod dönüştürülür, çıktı ayrı bir klasöre yazılır. Ortaya çıkan dosyalara [[build-artifact|build artifact]] denir.

İyi bir build'in ölçüsü yeniden üretilebilirliktir: aynı kaynaktan, aynı ayarlarla, her makinede aynı çıktı çıkmalıdır. Bu yüzden build çoğu ekipte kimsenin kişisel kurulumuna bulaşmayan temiz bir makinede, [[ci-cd|CI/CD]] hattı içinde alınır.

## Dikkat

Build'in başarılı olması kodun doğru çalıştığı anlamına gelmez, yalnızca paketlenebildiği anlamına gelir; doğruluk testlerin işidir. Bir de build çıktısını elle düzeltme alışkanlığından kaçın: bir sonraki build o klasörü silip üstüne yazar ve düzeltmen kaybolur. Değişiklik kaynağa yapılır, çıktı ondan doğar.
