---
term: "Huff"
tr: ""
aliases: []
category: programlama
subcategory: "Diller ve formatlar"
level: ileri
short: "EVM komutlarını ve yığını elle yönettiğin, makrolardan oluşan düşük düzeyli akıllı sözleşme dili."
related: [yul, solidity, opcode, stack-evm, gas-optimization, ethereum-virtual-machine-evm]
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

Huff, [[ethereum-virtual-machine-evm|EVM]] için sözleşme yazarken makinenin komutlarını doğrudan yazdığın bir dildir. Değişken yoktur, tip yoktur, bellek düzenini kimse senin için ayarlamaz. Yazdığın şey [[opcode|komut]] dizisidir; dilin eklediği tek kolaylık, bu dizileri adlandırıp yeniden kullanabilmeni sağlayan makrolar ve atlama etiketleridir.

[[yul|Yul]] ile arasındaki fark burada belirginleşir: Yul yığını senin yerine yönetir, Huff yönetmez. Bir değeri komutun beklediği sırada yığına koymak, işi bitince temizlemek sana kalır.

## Nasıl çalışır?

EVM [[stack-evm|yığın]] tabanlı bir makinedir ve her komut yığının tepesinden belli sayıda değer alıp yerine belli sayıda değer bırakır. Huff ile yazarken kafanda ya da yorum satırlarında bu yığının o an neye benzediğini takip edersin. Sözleşmenin hangi fonksiyonun çağrıldığını anlayıp doğru yere atlamasını sağlayan yönlendirme kodunu bile elle yazarsın — yüksek düzeyli dillerde bunu derleyici üretir.

## Dikkat

Bu düzeye inmenin iki tipik sebebi vardır: çok sık çağrılan, küçük ve iyi anlaşılmış bir sözleşmede son kırıntıya kadar [[gas-optimization|gas iyileştirmek]], ya da EVM'nin nasıl çalıştığını gerçekten öğrenmek. İkincisi için Huff, üstündeki katmanları kaldırdığı için öğretici bir araçtır.

Buna karşılık dilin sana verdiği koruma yok denecek kadar azdır. Yüksek düzeyde derleyicinin yakalayacağı bir hata burada sessizce derlenir ve yanlış davranan bir sözleşme üretir. Yazılan kodun her satırının test ve denetimle karşılanması, [[solidity|Solidity]] ile yazılmış bir sözleşmeye göre çok daha kritiktir.
