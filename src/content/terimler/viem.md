---
term: "viem"
tr: ""
aliases: []
category: araclar
subcategory: "Blockchain geliştirici araçları"
level: orta
short: "EVM ağlarıyla konuşmak için TypeScript odaklı kütüphane; istemci nesneleri ve bağımsız eylem işlevleri üzerine kuruludur."
related: [ethers-js, wagmi-kutuphane, typescript, rpc-provider, application-binary-interface-abi]
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

viem, EVM ağlarıyla konuşmak için kullanılan bir [[typescript|TypeScript]] kütüphanesidir. [[ethers-js|ethers.js]] ile aynı işleri yapar — okumak, imzalamak, sözleşme çağırmak — ama düzeni farklıdır: her şeyi büyük bir nesnenin metotları olarak değil, tek tek içe aktardığın işlevler olarak sunar.

İki tür istemci vardır. Herkese açık istemci (public client) ağı okur: bakiye, blok, `view` çağrıları. Cüzdan istemcisi (wallet client) ise imza gerektiren işleri yapar.

## Nasıl çalışır?

İstemciyi kurarken iki şey verirsin: hangi zincir ve hangi taşıyıcı (transport). Zincir tanımı ağ kimliğini ve varsayılan adresleri taşır; taşıyıcı ise bağlantının nasıl kurulacağını söyler — HTTP üzerinden bir [[rpc-provider|RPC uç noktası]], bir websocket ya da tarayıcıdaki cüzdanın sağladığı bağlantı.

Sözleşme çağrılarında [[application-binary-interface-abi|ABI]]'yi TypeScript'in okuyabileceği biçimde verirsen, işlev adları ve argüman tipleri düzenleyicide tamamlanır; yanlış tipte argüman yazdığında hatayı çalıştırmadan önce görürsün. Kütüphanenin tasarımındaki asıl vaat budur.

İşlevlerin ayrı ayrı içe aktarılması, paketleyicinin kullanmadığın kısımları çıktının dışında bırakabilmesini de sağlar.

## Örnek

```ts
const istemci = createPublicClient({ chain, transport: http() });
const blok = await istemci.getBlockNumber();
```

## Dikkat

viem ile ethers.js arasındaki seçim bir üstünlük sıralaması değildir. Tip güvenliğine ağırlık veren, TypeScript ile yazılmış yeni bir projede viem doğal durur; yıllardır ethers.js üzerine kurulu bir kod tabanında ise geçişin maliyeti kazancından büyük olabilir. Kullandığın çerçeve ya da SDK zaten birini bekliyorsa seçim çoğu zaman oradan gelir.

Sürümler arasında işlev adları değişebildiği için örnek kopyalarken hangi sürümün belgelerine baktığına dikkat et.
