---
term: "ethers.js"
tr: ""
aliases: ["ethers", "ethersjs"]
category: araclar
subcategory: "Blockchain geliştirici araçları"
level: orta
short: "Ethereum ağıyla konuşmak için kullanılan JavaScript/TypeScript kütüphanesi; okuma, imzalama ve sözleşme çağrılarını sarar."
related: [viem, web3-js, application-binary-interface-abi, rpc-provider, frontend]
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

ethers.js, EVM ağlarıyla konuşan bir JavaScript/TypeScript kütüphanesidir. Bir [[frontend|arayüzün]], bir betiğin ya da bir sunucu servisinin zincire ulaşmak için ihtiyaç duyduğu işleri sarar: bakiye okumak, sözleşme çağırmak, işlem imzalayıp göndermek, olayları dinlemek.

Kütüphanenin kavram düzeni sadedir. Sağlayıcı (provider) ağa bağlanan ve yalnızca okuyan taraftır. İmzalayıcı (signer) bir anahtara erişen ve işlem imzalayabilen taraftır. Sözleşme nesnesi ise adres ve [[application-binary-interface-abi|ABI]] verildiğinde sözleşmenin işlevlerini sıradan JavaScript işlevleri gibi çağrılabilir hâle getirir.

## Nasıl çalışır?

Bir sözleşme nesnesi kurarken ona bir sağlayıcı verirsen yalnızca okuyabilirsin; imzalayıcı verirsen işlem de gönderebilirsin. Kütüphane, çağırdığın işlevin argümanlarını ABI'ya bakarak kodlar, sonucu da aynı ABI ile geri çözer; sen onaltılık veriyle uğraşmazsın.

Arka planda her şey bir [[rpc-provider|RPC uç noktasına]] yapılan isteğe dönüşür. Tarayıcıda genellikle bu uç noktayı cüzdan sağlar; sunucuda ise adresi sen verirsin.

## Örnek

```js
const kontrat = new ethers.Contract(adres, abi, saglayici);
const bakiye = await kontrat.balanceOf(hesap);
```

## Dikkat

Kütüphanenin büyük sürümleri arasında yardımcı işlevlerin yeri ve adları değişmiştir; internette bulduğun bir örnek senin kurduğun sürümde çalışmayabilir. Hata aramaya başlamadan önce hangi sürümün belgelerine baktığını kontrol et.

[[viem|viem]] ve [[web3-js|web3.js]] aynı işi yapan başka kütüphanelerdir. Seçim genellikle ekibin alışkanlığına, projedeki mevcut koda ve kullandığın çerçevenin hangisini beklediğine bakar; üçünün de kendi kullanıldığı yerler vardır.
