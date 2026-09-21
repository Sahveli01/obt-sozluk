---
term: "RPC Node"
tr: ""
aliases: ["rpc dugumu", "rpc endpoint node"]
category: araclar
subcategory: "Altyapı ve veri"
level: orta
short: "Uygulamaların zincire soru sorabilmesi için RPC arayüzünü dışarıya açan node."
related: [rpc-provider, node, full-node, archive-node, json-rpc, node-synchronization]
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

RPC node, sıradan bir [[node|node'un]] üzerine bir kapı daha açmış hâlidir. Ağdaki komşularıyla konuşmaya ve blokları doğrulamaya devam ederken, bir yandan da uygulamaların istek atabileceği bir arayüz sunar. RPC (Remote Procedure Call, uzaktan yordam çağrısı), bir programın başka bir makinedeki işlevi kendi işleviymiş gibi çağırmasıdır; çoğu zincirde bu arayüz [[json-rpc|JSON-RPC]] biçimindedir. Türkçede yerleşik bir karşılığı yok, "RPC node" denir.

Ayrımı net tutmak gerekir: [[rpc-provider|RPC sağlayıcısı]] satın aldığın bir hizmettir, RPC node ise o hizmeti veren makinedir. Sağlayıcı arkada yüzlerce RPC node çalıştırır; kendi bilgisayarında bir tane çalıştırdığında sağlayıcıya hiç ihtiyacın olmaz.

## Nasıl çalışır?

Node zaten zinciri doğruluyor ve güncel [[state-blockchain|state]] verisini tutuyordur. RPC arayüzü bu verinin üzerine dört tür istek kabul eder: veri okuma (bakiye, blok, işlem), bir sözleşme fonksiyonunu yalnızca okumak için çalıştırma, ücret tahmini, ve imzalanmış bir işlemi ağa yayma. İlk üçü node'un kendi içinde biter; sonuncusu işlemi [[mempool|mempool'a]] koyar ve komşulara dağıtır.

Verebileceği cevap, tuttuğu veriyle sınırlıdır. Budanmış bir [[full-node|full node]] "üç yıl önce bu adreste ne vardı?" sorusuna cevap veremez; onun için [[archive-node|archive node]] gerekir. Senkronu tamamlanmamış bir node ise ([[node-synchronization|senkronizasyon]] sürerken) eksik cevap verir.

## Örnek

En basit istek, zincirin son blok numarasını sormaktır:

```bash
curl -s -X POST https://rpc-adresin/ \
  -H 'Content-Type: application/json' \
  -d '{"jsonrpc":"2.0","id":1,"method":"eth_blockNumber","params":[]}'
```

Dönen cevap `{"jsonrpc":"2.0","id":1,"result":"0x14a2b3c"}` biçimindedir; sonuç onaltılık yazılır.

## Dikkat

RPC arayüzü internete korumasız açılırsa ona herkes istek atabilir; bu hem yük hem güvenlik sorunudur. Özel anahtar gerektiren yöntemler bu arayüzde açık bırakılmaz — imzalama cüzdanda olur, node yalnızca imzalanmış işlemi taşır.

"RPC adresi" ile "zincir" de aynı şey değildir: aynı zincire bağlı iki RPC node farklı hızda senkron olabilir, bir an için farklı cevaplar verebilir. Kritik bir kararı tek bir node'un cevabına dayandırıyorsan, o node'a güveniyorsun demektir.
