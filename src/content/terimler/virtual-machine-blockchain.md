---
term: "Virtual Machine (Blockchain)"
tr: "Sanal makine"
aliases: []
category: akilli-sozlesmeler
subcategory: "Temeller"
level: orta
short: "Sözleşme kodunu, ağdaki bütün düğümler aynı sonuca varsın diye adım adım ve ölçülü biçimde çalıştıran soyut hesap ortamı."
related: [ethereum-virtual-machine-evm, deterministic-execution, bytecode, opcode, gas, node]
disambiguation: [virtual-machine-bilgisayar]
tags: []
status: taslak
reviewedBy: []
dateSensitive: false
sources: []
added: 2026-09-21
updated: 2026-09-22
---

## Nedir?

Blockchain dünyasında sanal makine, akıllı sözleşme kodunun çalıştığı yerdir. Ağa bir [[transaction|işlem]] geldiğinde her [[node|düğüm]] onu kendi başına çalıştırır ve hepsinin aynı sonuca varması gerekir; varmazsa üzerinde anlaşılacak tek bir zincir kalmaz. Sanal makine bu yüzden vardır: hangi donanımda, hangi işletim sisteminde çalıştığı fark etmeyen, kuralları harfi harfine tanımlanmış ortak bir hesap ortamı sunar.

## Benzetme

Oyun konsolu kartuşu gibi. Aynı kartuş ayrı evlerdeki ayrı konsollarda aynı oyunu aynı kurallarla oynatır; televizyonun markası ya da odanın sıcaklığı oyunun gidişatını değiştirmez. Kartuşun içinde bir bilgisayar yoktur; kartuş yalnızca komutları taşır, o komutları nasıl yorumlayacağını bütün konsolların paylaştığı ortak düzenek bilir.

## Nasıl çalışır?

Sözleşmeler derlenip [[bytecode|bayt koda]] çevrilir. Sanal makine bu baytları sırayla okur, her [[opcode]] için tanımlı davranışı uygular ve sonunda zincirin durumunda neyin değişeceğini söyler. İki tasarım kararı bu ortamı sıradan bir yorumlayıcıdan ayırır.

**Ölçüm.** Her komutun bir [[gas]] maliyeti vardır. Bitmeyen bir döngü ağı kilitlemez; ayrılan bütçe tükenince yürütme durur.

**Yalıtım.** Kod dosya okuyamaz, internete çıkamaz, çalıştığı makinenin saatine bakamaz. Erişebildiği tek dünya zincirin kendi verisidir.

## Dikkat

Bunu bilgisayardaki [[virtual-machine-bilgisayar|sanal makine]] ile karıştırma. Oradaki sanal makine bir bilgisayarı taklit eder: kendi işletim sistemini açar, dosya sistemi vardır, istersen ağa çıkar. Blockchain sanal makinesi bir bilgisayarı taklit etmez; binlerce düğümde aynı sonucu vermek zorunda olan, deterministik ve gas ile ölçülen dar bir yürütme ortamıdır.
