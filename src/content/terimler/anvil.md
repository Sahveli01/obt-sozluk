---
term: "Anvil"
tr: ""
aliases: []
category: araclar
subcategory: "Blockchain geliştirici araçları"
level: orta
short: "Foundry'nin yerel EVM düğümü; tek komutla, hazır hesaplarla dolu bir geliştirme zinciri açar."
related: [foundry, local-blockchain, mainnet-fork, devnet, cast]
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

Anvil, [[foundry|Foundry]] takımının düğüm çalıştıran parçasıdır. Komutu verdiğinde kendi makinende bir EVM düğümü ayağa kalkar, sana bakiyeli hesapların adreslerini ve özel anahtarlarını basar ve dinlemeye başlar. Yani bir [[local-blockchain|yerel zincirin]] belirli bir uygulamasıdır: kavramı değil, elindeki programı anlatır.

Süreci kapattığında zincir de yok olur. Bu bilinçli bir tasarımdır; anvil kalıcı bir ağ olmak için değil, defalarca sıfırdan başlatılmak için vardır.

## Nasıl çalışır?

Varsayılan davranışı, gelen her işlemi hemen bir bloğa koyup onaylamaktır; beklemezsin. İstersen blokların sabit aralıklarla üretilmesini söyleyip gerçek bir ağın ritmini taklit edebilirsin.

Anvil standart [[json-rpc|JSON-RPC]] çağrılarının yanında yalnızca geliştirme ortamında anlamlı olan ek çağrılar da kabul eder: bir hesabın bakiyesini elle ayarlamak, zincirin saatini ileri almak, sahibi olmadığın bir adres adına işlem göndermek ya da zinciri önceki bir anına geri sarmak. Testlerde kurulması imkânsız durumlar bu çağrılarla kurulur.

Üçüncü yeteneği kopyalamadır: gerçek bir ağın [[rpc-provider|RPC adresini]] verirsen, anvil o ağın durumunu ihtiyaç duydukça okuyup yerel zincirine taşır — [[mainnet-fork|mainnet fork]] maddesinde anlatılan çalışma biçimi budur.

## Örnek

```bash
anvil --fork-url <rpc-adresi>
```

## Dikkat

Anvil'in bastığı özel anahtarlar herkesin bildiği, sabit test anahtarlarıdır. Bu adreslere gerçek bir ağda hiçbir şey gönderme; o varlık anında alınır.

Yerel zincirde tek düğüm, sıfır rekabet ve taklit edilmiş bir ücret ortamı vardır; buradaki davranış gerçek ağın davranışı sayılmaz.
