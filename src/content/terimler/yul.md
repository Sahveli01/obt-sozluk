---
term: "Yul"
tr: ""
aliases: []
category: programlama
subcategory: "Diller ve formatlar"
level: ileri
short: "EVM komutlarına birebir yakın duran, Solidity içine assembly bloğu olarak gömülen düşük düzeyli ara dil."
related: [solidity, inline-assembly, ethereum-virtual-machine-evm, opcode, stack-evm, gas-optimization]
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

Yul, [[ethereum-virtual-machine-evm|EVM]] komutlarına çok yakın duran, buna rağmen değişken adı, `if` ve fonksiyon gibi tanıdık yapılar sunan düşük düzeyli bir dildir. İki yerde karşına çıkar: [[solidity|Solidity]] derleyicisinin kendi ara dili olarak ve Solidity kodunun içine gömülen `assembly` bloklarında.

Yul yazdığında derleyicinin senin için yaptığı işlerin bir kısmı devre dışı kalır. Taşma denetimi, bellek düzeninin yönetimi ve tip kontrolü artık sana aittir. Karşılığında hangi [[opcode|komutların]] çalışacağını neredeyse birebir görürsün; bu yüzden [[gas-optimization|gas iyileştirmesi]] yapılan dar noktalarda ve yüksek düzeyli dilin ifade edemediği işlemlerde kullanılır.

## Nasıl çalışır?

EVM [[stack-evm|yığın]] tabanlı çalışır: komutlar değerleri yığından alır, sonucu yığına bırakır. Yul bunu yığına elle dokunmadan yazmanı sağlar. `add(a, b)` yazarsın, derleyici değerleri yığına koyup `ADD` komutunu çağıran bayt kodu üretir. Fonksiyon adları EVM komut adlarıyla birebir örtüştüğü için Yul okumayı öğrenmek, bayt kod okumayı öğrenmeye çok yakındır.

## Örnek

```solidity
function topla(uint256 a, uint256 b) external pure returns (uint256 c) {
    assembly {
        c := add(a, b)
    }
}
```

`:=` atama işaretidir. Bu fonksiyon `topla(2, 3)` çağrısına `5` döndürür. Aradaki asıl fark şurada görünür: Solidity'nin `a + b` ifadesi taşma olursa işlemi geri alır, buradaki `add` almaz — `uint256`'nın en büyük değerine 1 eklersen sonuç sessizce `0` olur.

## Dikkat

`assembly` bloğu açmak, derleyicinin güvenlik ağlarını o blok boyunca kapatmak demektir. [[inline-assembly|Satır içi assembly]] ile kazanılan gas çoğu zaman küçüktür; bir hata yapıldığında kaybedilen ise sözleşmenin tamamı olabilir. Yaygın yaklaşım, sözleşmeyi yüksek düzeyde yazıp yalnızca ölçülmüş bir darboğaz varsa buraya inmektir.
