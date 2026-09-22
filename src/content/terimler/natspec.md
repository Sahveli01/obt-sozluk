---
term: "NatSpec"
tr: ""
aliases: ["natural specification format", "natspec yorumu"]
category: programlama
subcategory: "Solidity kavramları"
level: orta
short: "Solidity kodunun üstüne @param ve @notice gibi etiketlerle yazılan, cüzdan ekranlarına kadar taşınabilen resmî belgeleme biçimi."
related: [documentation, comment-kod, solidity-compiler-solc, application-binary-interface-abi, smart-contract, contract-verification]
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

NatSpec, Solidity'nin resmî belgeleme biçimidir. Sıradan bir [[comment-kod|yoruma]] benzer ama üç eğik çizgiyle (`///`) ya da `/** */` ile yazılır ve içinde `@title`, `@notice`, `@param`, `@return`, `@dev` gibi etiketler bulunur.

Sıradan yorumdan farkı şudur: [[solidity-compiler-solc|derleyici]] bu yorumları okur ve ayrı bir çıktıya koyar. Yani NatSpec yalnızca kodu okuyan geliştirici için değil, kodu hiç görmeyecek kullanıcı için de yazılır.

NatSpec bir biçimin adıdır, çevrilmez.

## Nasıl çalışır?

Etiketler iki ayrı kitleye hitap eder. `@notice` son kullanıcıya konuşur: "Gönderdiğin ETH kasadaki bakiyene eklenir." `@dev` geliştiriciye konuşur: "Yeniden giriş kilidi çağıranda değil burada." `@param` her parametreyi, `@return` her dönüş değerini tek tek açıklar.

Derleyici bunları iki ayrı JSON'a ayırır: kullanıcıya dönük olanlar `userdoc`, geliştiriciye dönük olanlar `devdoc`. Bu çıktılar sözleşmenin üstverisine girer, [[contract-verification|kaynak doğrulandığında]] zincir gezgininde görünür ve bazı cüzdanlar imza ekranında `@notice` metnini kullanıcıya gösterebilir. Böylece "bu işlem ne yapıyor" sorusunun cevabı, kodu okuyamayan kişiye de ulaşır.

Etiketler denetlenebilir de: olmayan bir parametreyi belgelersen derleyici hata verir, eksik bıraktıklarını ise [[linter|linter]]'lar yakalar. Birçok proje bunu derleme kuralı hâline getirir.

## Örnek

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/// @title Bahşiş kasası
/// @notice Gönderilen ETH adres adres birikir.
contract Kasa {
    mapping(address => uint256) public bakiye;
    /// @notice Kasaya para yatırır.
    /// @param alici Bakiyesi artacak adres
    /// @return yeni Adresin güncel bakiyesi
    function yatir(address alici) external payable returns (uint256 yeni) {
        bakiye[alici] += msg.value;
        return bakiye[alici];
    }
}
```

## Dikkat

NatSpec kodun ne yaptığını değil, yazarın ne yaptığını düşündüğünü anlatır. Kod değişip yorum olduğu yerde kaldığında ortaya kodun kendisinden daha ikna edici bir yanlış bilgi çıkar — üstelik bu yanlış bilgi cüzdan ekranına kadar gidebilir.

`@notice` metninin doğruluğunu kimse garanti etmez. Kullanıcıya gösterilen cümleyi sözleşmenin yazarı yazmıştır; zincirin doğruladığı bir şey değildir. Ne yaptığını gerçekten merak eden kişi yine koda bakmak zorundadır — [[documentation|belgelendirme]] kodun yerini tutmaz, yalnızca yolu kısaltır.
