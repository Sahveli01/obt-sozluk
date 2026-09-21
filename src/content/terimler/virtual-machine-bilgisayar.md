---
term: "Virtual Machine (Bilgisayar)"
tr: "Sanal makine"
aliases: []
category: araclar
subcategory: "Derleme ve dağıtım süreci"
level: orta
short: "Fiziksel bir bilgisayarın donanımı üzerinde, kendi işletim sistemini baştan çalıştıran yazılımsal bilgisayar."
related: [container, operating-system, docker, cloud-computing, server]
disambiguation: [virtual-machine-blockchain]
tags: []
status: taslak
reviewedBy: []
dateSensitive: false
sources: []
added: 2026-09-21
updated: 2026-09-22
---

## Nedir?

Sanal makine, gerçek bir bilgisayarın donanımını paylaşarak onun üzerinde çalışan, ama kendini ayrı bir bilgisayar sayan yazılımdır. Kendi işlemci payı, kendi diski, kendi ağ arayüzü ve en önemlisi kendi [[operating-system|işletim sistemi]] vardır. Windows kullanan biri aynı makinede bir Linux sanal makinesi açabilir; bulut sağlayıcılarından "sunucu" diye kiraladığın şeyin büyük bölümü de aslında bir sanal makinedir.

## Benzetme

Başkasının arsasına kurulmuş bir karavan gibi. Arsa paylaşılır, ama karavanın kendi kapısı, kendi mutfağı, kendi tesisatı vardır. Aynı arsada birkaç karavan durabilir ve birinin içinde olup biten diğerini ilgilendirmez.

## Nasıl çalışır?

Hypervisor denen bir katman, fiziksel makinenin işlemci, bellek ve disk kaynaklarını bölüp her sanal makineye kendi payını verir; birinin diğerinin belleğine uzanmasını da bu katman engeller. Sanal makine açılırken tıpkı gerçek bir bilgisayar gibi baştan önyükleme yapar ve işletim sistemini yükler. Bu yüzden başlaması yavaştır ve kapladığı yer büyüktür, ama karşılığında yalıtımı güçlüdür ve ana makineden bambaşka bir sistem çalıştırabilir.

[[cloud-computing|Bulut]] sağlayıcıları tek bir fiziksel [[server|sunucuyu]] bu yolla birçok müşteriye kiralayabilir. Geliştiriciler de farklı bir işletim sistemi gereken işleri, riskli denemeleri ve üretimdeki sunucuyu taklit eden kurulumları sanal makinede yapar.

## Dikkat

Sanal makineyi [[container|konteynerle]] karıştırma: konteyner ana makinenin çekirdeğini paylaşıp bir süreç gibi saniyeler içinde başlar, sanal makine kendi işletim sistemini baştan çalıştırır. Bir de isim benzerliği var: blockchain dünyasındaki [[virtual-machine-blockchain|sanal makine]] (örneğin EVM) bir bilgisayarı taklit etmez; ağdaki bütün düğümlerin aynı sonuca varması için sözleşme kodunu adım adım çalıştıran soyut bir hesap ortamıdır.
