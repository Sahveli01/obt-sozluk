---
term: "WASM Smart Contracts"
tr: ""
aliases: []
category: akilli-sozlesmeler
subcategory: "Temeller"
level: ileri
short: "Kaynak kodu WebAssembly'ye derlenip zincirin WASM çalıştırıcısında yürütülen akıllı sözleşmeler."
related: [webassembly-wasm, rust, virtual-machine-blockchain, deterministic-execution, smart-contract, bytecode]
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

Bazı ağlar sözleşmeleri kendilerine özgü bir sanal makine yerine [[webassembly-wasm|WebAssembly]] üstünde çalıştırır. WASM aslında tarayıcılar için tasarlanmış, taşınabilir bir ikili komut formatıdır; bir programlama diline değil, bir **derleme hedefine** karşılık gelir. [[rust|Rust]] gibi olgun diller zaten WASM üretebildiği için ağın kendi dilini ve kendi derleyici zincirini sıfırdan kurması gerekmez. NEAR, Polkadot ve Stellar'ın Soroban ortamı bu yolu seçen ağlardandır.

Terim Türkçeye çevrilmeden kullanılır; WASM bir format adıdır.

## Nasıl çalışır?

Sözleşmeyi Rust gibi bir dilde yazarsın, derleyici bir WASM modülü üretir, o modül zincire yüklenir. Zincirin çalıştırıcısı modülü yürütür ve dışarıyla bütün alışverişini kendi tanımladığı dar bir fonksiyon kümesi üzerinden yaptırır: depodan oku, depoya yaz, çağıranın kim olduğunu öğren, başka bir sözleşmeyi çağır.

Ama WASM blockchain için tasarlanmadı. İki boşluğu ağın kendisinin kapatması gerekir.

**Ölçüm.** Standartta gas diye bir kavram yoktur. Ağ, yüklenen modülün içine sayaç komutları yerleştirerek ya da çalıştırıcıyı bu sayımı yapacak biçimde yazarak bütçeyi kendi tutar.

**Determinizm.** Kayan nokta aritmetiği, iş parçacıkları ve bazı bellek özellikleri makineden makineye farklı sonuç verebildiği için genellikle kapatılır ya da sınırlanır.

## Dikkat

"WASM kullanıyor" demek iki ağın uyumlu olduğu anlamına gelmez. Ortak olan yalnızca komut formatıdır; sözleşmenin dış dünyayla konuştuğu arayüz, depolama modeli ve hesap yapısı her ağda ayrı tasarlanır. Bir ağ için yazılmış WASM sözleşmesini diğerine taşımak çoğu zaman yeniden yazmak demektir. Bu, yaygın bir formatı benimsemenin getirdiği kolaylığın nerede bittiğini gösterir.
