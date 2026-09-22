---
term: "View Function"
tr: ""
aliases: ["view"]
category: programlama
subcategory: "Solidity kavramları"
level: orta
short: "Sözleşmenin durumunu okuyan ama değiştirmeyen fonksiyon; zincir dışından çağrıldığında gas ödenmez."
related: [pure-function, state-variable, gas, visibility]
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

`view` işaretli bir fonksiyon sözleşmenin durumunu okur ama değiştirmez. Söz verilen şey derleyici tarafından zorlanır: gövdede durumu değiştiren bir satır varsa kod derlenmez.

`view` bir Solidity anahtar sözcüğüdür ve kodda İngilizce hâliyle yazılır; yerleşik bir Türkçe karşılığı yoktur.

## Benzetme

Bankadaki bakiye sorgusu ile para çekme arasındaki fark gibi. Bakiye sorgusu hesaptaki rakamı değiştirmez, yalnızca ekranda gösterir; istediğin kadar bakabilirsin, kimse bunun için senden masraf istemez. Para çekmek ise kaydı gerçekten değiştirir — sıraya girer, işlenir ve bedeli vardır.

## Nasıl çalışır?

`view` içinde yasak olan işler bellidir: bir [[state-variable|durum değişkenine]] yazmak, olay yaymak, yeni sözleşme oluşturmak, para göndermek, [[selfdestruct|`selfdestruct`]] çağırmak ve `view` ya da `pure` olmayan bir fonksiyonu çağırmak. Derleyici bunların hepsini yakalar.

Gas tarafı en çok yanlış anlaşılan kısımdır ve tek bir ayrımla çözülür: **çağrının nereden geldiği**. Fonksiyonu zincir dışından, bir düğüme `eth_call` ile sorduğunda hesabı o düğüm kendi yapar; zincire hiçbir şey yazılmaz, işlem oluşmaz, [[gas|gas]] ödenmez. Aynı fonksiyon bir işlemin içinden — mesela durumu değiştiren başka bir fonksiyonun içinden — çağrıldığında ise kod EVM'de gerçekten çalışır ve her adımı gas harcar. Yani "view bedavadır" değil, "zincir dışı çağrı bedavadır".

Fonksiyonun `public` olması otomatik olarak bir okuma fonksiyonu üretir; `public` bir durum değişkeni yazdığında derleyicinin senin için oluşturduğu erişim fonksiyonu da `view`'dür.

## Örnek

```solidity
contract Sayac {
    uint256 public deger;

    function oku() external view returns (uint256) {
        return deger; // durumu okur, yazmaz
    }

    function arttir() external {
        deger += 1;   // durumu değiştirir: view olamaz
    }
}
```

## Dikkat

`view` ile [[visibility|görünürlük]] karıştırılır çünkü aynı satırda yan yana yazılırlar. Ama ayrı eksenlerdir: `public`/`external`/`internal`/`private` fonksiyonu **kimin** çağırabileceğini, `view` ise fonksiyonun **ne yapabileceğini** belirler.

Bir de `view` bir güvenlik güvencesi değildir. Fonksiyon durumu değiştirmez, ama okuduğu değeri başkası aynı blok içinde değiştirmiş olabilir. Bir fiyatı `view` bir fonksiyondan okuyup ona göre karar vermek, o değerin doğru olduğunu göstermez — yalnızca senin onu bozmadığını gösterir. Daha katısı için [[pure-function|`pure`]] maddesine bak.
