---
term: "transferFrom"
tr: ""
aliases: []
category: tokenlar
subcategory: "Standartlar"
level: orta
short: "Verilmiş bir izni kullanarak token'ı sahibinin bakiyesinden üçüncü bir adrese taşıyan çekme fonksiyonu."
related: [approve, allowance, erc-20, erc-721, erc-2612-permit, infinite-approval-risk]
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

`transferFrom`, bir token'ı çağıranın kendi bakiyesinden değil, başka bir adresin bakiyesinden taşır. `transfer` iki taraflıdır: sen gönderirsin, karşı taraf alır. `transferFrom` üç taraflıdır: sahibi, çeken ve alıcı.

Bunu isteyen herkes yapamaz. Çeken tarafın sahipten önceden alınmış bir [[allowance|izni]] olmalıdır; sözleşme çağrıyı işlerken kalan hakka bakar ve yetmiyorsa işlemi geri alır.

Bu fonksiyon DeFi'deki çekme modelinin temelidir. Bir takas sözleşmesine token göndermezsin; ona [[approve|izin]] verirsin, o da token'ı senden çeker. Böylece tek işlemde hem token alınır hem de işin geri kalanı yapılır. Fonksiyon adı bir kod kimliğidir, çevirisi kullanılmaz.

## Nasıl çalışır?

Çağrıda üç adres ve bir miktar vardır: token'ın çıkacağı adres, gideceği adres, tutar ve çağıranın kendisi. Sözleşme sırayla bakar — kaynağın bakiyesi yetiyor mu, çağıranın kalan hakkı yetiyor mu. İkisi de olumluysa bakiyeler güncellenir, kalan haktan düşülür ve `Transfer` olayı yayımlanır.

Olayda gönderen olarak çağıran değil, token'ın çıktığı adres yazar. [[event-smart-contract|Olay kayıtlarını]] okuyan araçlar transferi bu yüzden doğru sahibe yazabilir.

[[erc-721|ERC-721]]'de aynı adı taşıyan fonksiyon miktar değil `tokenId` alır ve izin tutar başına değil token başına verilir. Aynı ad, farklı standartta farklı anlam taşır.

## Örnek

```solidity
interface IERC20 {
    function transferFrom(address _from, address _to, uint256 _value) external returns (bool success);
}

contract Kasa {
    mapping(address => uint256) public yatirilan;

    function yatir(IERC20 token, uint256 miktar) external {
        require(token.transferFrom(msg.sender, address(this), miktar), "cekim basarisiz");
        yatirilan[msg.sender] += miktar;
    }
}
```

## Dikkat

Dönüş değeri sessiz bir tuzaktır. Standart `bool` döndürmeyi söyler ama yaygın kullanılan bazı token'lar hiçbir şey döndürmez. Dönüşü kontrol etmeden çağırırsan kodun, transfer gerçekleşmemişken devam eder; bunu dert etmemek için kütüphaneler bu çağrıyı saran yardımcılar sunar.

İkincisi: `transferFrom`'u çağıran taraf token'ın sahibi değildir. "Kim çağırdı" ile "kimin bakiyesi azaldı" aynı şey olmadığı için, bir blok gezgininde işlemi imzalayan adresi gönderen sanmak yaygın bir okuma hatasıdır.
