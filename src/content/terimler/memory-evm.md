---
term: "Memory (EVM)"
tr: ""
aliases: []
category: akilli-sozlesmeler
subcategory: "Bellek ve depolama"
level: orta
short: "Tek bir çağrı boyunca yaşayan, serbestçe yazılabilen ve çağrı bitince silinen geçici EVM alanı."
related: [storage-evm, calldata, stack-evm, data-location, gas]
disambiguation: [memory-ai]
tags: []
status: taslak
reviewedBy: []
dateSensitive: false
sources: []
added: 2026-09-21
updated: 2026-09-22
---

## Nedir?

Memory, EVM'in bir çağrı sürerken kullandığı geçici çalışma alanıdır. İçine yazarsın, okursun, istediğin kadar değiştirirsin; çağrı bittiğinde alan tümüyle kaybolur ve zincirde hiçbir iz bırakmaz.

Her çağrı kendi memory'siyle başlar. Alan baştan sıfırlarla doludur; bir önceki işlemden, bir önceki çağrıdan hiçbir şey devralmazsın.

Türkçede "bellek" karşılığı kullanılabilir ama Solidity'de `memory` bir anahtar sözcük olarak yazıldığı için terim kodda ve konuşmada İngilizcesiyle anılıyor.

## Nasıl çalışır?

Memory, bayt bayt adreslenen düz bir alandır; EVM onu 32 baytlık kelimeler hâlinde okur ve yazar. Solidity tarafında `memory` yazdığın diziler, `struct`'lar ve `string`'ler burada tutulur. Hesabın kendisi [[stack-evm|stack]]'te yapılır; memory, stack'e sığmayan ya da boyutu çalışırken belli olan veriler içindir.

Kullandığın kadarı açılır ve açılan alanın parasını ödersin. Ücret doğrusal da değildir: alan genişledikçe her ek kelimenin maliyeti artar. Bu yüzden bir döngünün içinde sürekli yeni dizi üretmek, küçük görünüp sessizce büyüyen bir masraftır.

[[storage-evm|Storage]] ile asıl farkı nerede durduğu değil, kimin için durduğudur: memory yalnızca o çağrıyı yürüten makinenin içindedir. Bir dış çağrı yaptığında karşı sözleşme senin memory'ni göremez; ona ulaşması gereken ne varsa [[calldata]] olarak kodlanıp gider.

## Örnek

```solidity
function selam(string calldata ad) external pure returns (string memory) {
    string memory cumle = string.concat("Merhaba ", ad);
    return cumle;   // dönen kopya dışında geriye hiçbir şey kalmaz
}
```

## Dikkat

Buradaki memory ile yapay zekâdaki [[memory-ai|memory]] birbiriyle ilgisizdir: EVM'de memory tek bir çağrı boyunca yaşayan geçici çalışma alanıdır, yapay zekâda ise modelin oturumlar arasında taşıdığı bilgidir.

İkinci yanılgı, "memory ucuz" cümlesinin "memory bedava" diye okunmasıdır. Büyük bir diziyi storage'tan memory'ye kopyalamak hem kopyalamanın hem de açılan alanın ücretini getirir. Gerçekten dokunmayacağın bir veriyi kopyalamamak, çoğu zaman en ucuz karardır — hangi konumu seçeceğin [[data-location|veri konumu]] maddesinde.
