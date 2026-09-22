---
term: "Approve"
tr: ""
aliases: []
category: tokenlar
subcategory: "Standartlar"
level: orta
short: "Bir adrese, token bakiyenden belirli bir tutara kadar çekme yetkisi veren ERC-20 fonksiyonu."
related: [allowance, transferfrom, erc-20, infinite-approval-risk, erc-2612-permit, phishing]
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

`approve`, bir [[erc-20|ERC-20]] sözleşmesine "şu adres benim bakiyemden şu kadarını çekebilir" diye yazdığın çağrıdır. Bir takas, bir kasa ya da bir pazar yeri token'ına dokunacaksa önce bu izni vermen gerekir; standart, sözleşmelerin izinsiz çekmesine yol bırakmaz.

Önemli olan, approve'un bir transfer olmamasıdır. Token'ların kıpırdamaz, harcanabilir durumda kalır; değişen tek şey [[allowance|kalan hak]] rakamıdır. Çekme ayrı bir adımdır ve onu karşı taraf [[transferfrom|transferFrom]] ile yapar.

Türkçe arayüzlerde bu adımı çoğunlukla "onayla" düğmesi olarak görürsün; fonksiyonun adı ise her yerde `approve` olarak kalır.

## Nasıl çalışır?

`approve` mevcut rakamın üstüne eklemez, onun yerine yazar. Sıfır yazmak izni tamamen kaldırır.

Bu üzerine yazma davranışı klasik bir yarışa yol açar. Diyelim 100'lük izni 50'ye düşürmek istiyorsun. Harcayan taraf, işlemini seninkinden önce sıraya sokarsa önce eski 100'ü çeker; ardından senin yazdığın 50 de geçerli olur ve toplam 150 çekilmiş olur. Bu yüzden bazı sözleşmeler izni değiştirmeden önce sıfırlamayı şart koşar, bazı token'lar da rakamı doğrudan yazmak yerine artıran ve azaltan yardımcı fonksiyonlar sunar. `increaseAllowance` ve `decreaseAllowance` bunun en bilinen örneğidir; ikisi de ERC-20'nin parçası değil, OpenZeppelin uygulamasının eklentisidir ve o kütüphanenin her sürümünde bulunmaz. Varlıklarını varsayma, sözleşmeden kontrol et. [[erc-2612-permit|permit]] destekleyen token'larda sorun başka bir zeminde çözülür: izin imzayla ve son geçerlilik tarihiyle verilir.

## Örnek

```solidity
interface IERC20 {
    function approve(address _spender, uint256 _value) external returns (bool success);
}

contract Onay {
    function izniDegistir(IERC20 token, address harcayan, uint256 yeni) external {
        require(token.approve(harcayan, 0), "sifirlama basarisiz");
        require(token.approve(harcayan, yeni), "onay basarisiz");
    }
}
```

## Dikkat

Çoğu arayüz, her işlemde tekrar sormamak için mümkün olan en büyük tutarı önerir. Bu, tek bir onayla süresiz bir kapı açmaktır: izin sen iptal edene kadar durur ve o sözleşme sonradan ele geçirilirse cüzdanındaki o token'ın tamamı çekilebilir. [[infinite-approval-risk|Sınırsız onay riski]] budur; işini görecek kadarını onaylamak ve verdiğin onayları arada bir gözden geçirip gereksizleri sıfırlamak yerleşik bir alışkanlıktır.

Bir de şu: [[phishing|oltalama]] sitelerinin çoğu senden para istemez, onay ister. Ekranda ücretsiz görünen bir işlem çıkar karşına; imzaladığın şey ise bakiyenin tamamı üzerinde yetkidir.
