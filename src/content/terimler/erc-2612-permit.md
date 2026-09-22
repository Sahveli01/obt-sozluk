---
term: "ERC-2612 (Permit)"
tr: ""
aliases: ["erc2612", "permit"]
category: tokenlar
subcategory: "Standartlar"
level: ileri
short: "ERC-20 harcama iznini işlem göndermeden imzayla vermeyi sağlayan standart; onay ile kullanım tek işlemde birleşir."
related: [approve, allowance, eip-712, erc-20, gasless-transaction, signature-replay]
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

Klasik akışta bir uygulamanın token'ına dokunabilmesi için önce [[approve|approve]] işlemi gönderirsin, sonra asıl işlemi: iki işlem, iki ücret, iki cüzdan ekranı. ERC-2612 birinci adımı zincirden çıkarır. İzni bir imzayla verirsin; imzayı sözleşmeye kim sunarsa izin o anda yazılır ve hemen ardından kullanılır.

İmzalanan şey [[eip-712|EIP-712]] biçiminde yapılandırılmış bir mesajdır. Cüzdan bu sayede sana kimin, ne kadar, hangi tarihe kadar yetkilendirildiğini alan alan gösterebilir.

## Nasıl çalışır?

Token sözleşmesi her adres için bir sayaç (`nonces`) tutar ve bir `DOMAIN_SEPARATOR` yayımlar; imzanın hangi sözleşme ve hangi ağ için geçerli olduğunu bu ikisi çiviler.

`permit` çağrıldığında sözleşme aynı mesajı kendi tarafında yeniden kurar, imzadan adresi geri çıkarır ve beklenen sahiple karşılaştırır. Uyuyorsa [[allowance|izni]] doğrudan yazar, son geçerlilik tarihini kontrol eder ve sayacı bir artırır. Sayacın artması, aynı imzanın ikinci kez işe yaramasını engeller.

İzni yazan işlemi başkası gönderebildiği için kullanıcı hiç ücret ödemeden de onay verebilir; [[gasless-transaction|gassız işlem]] akışlarının bir parçası budur.

## Örnek

```solidity
interface IPermitToken {
    function permit(address owner, address spender, uint256 value,
        uint256 deadline, uint8 v, bytes32 r, bytes32 s) external;
    function transferFrom(address _from, address _to, uint256 _value) external returns (bool);
}

contract Kasa {
    function yatir(IPermitToken token, uint256 miktar, uint256 sonTarih,
        uint8 v, bytes32 r, bytes32 s) external {
        token.permit(msg.sender, address(this), miktar, sonTarih, v, r, s);
        require(token.transferFrom(msg.sender, address(this), miktar), "transfer basarisiz");
    }
}
```

## Dikkat

İmza hamiline yazılıdır. Onu ele geçiren herkes sözleşmeye sunabilir; yani imzalanmış bir permit mesajını paylaşmak, izni paylaşmakla aynı şeydir. Son geçerlilik tarihini uzak bir güne koymak da aynı kapıyı aylarca açık tutar.

İkincisi, her token permit desteklemez. Standart yayımlanmadan önce çıkmış bazı token'lar kendi permit sürümlerini yazdı ve o imzaların alanları farklıdır; birine göre hazırlanmış imza diğerinde çalışmaz. Desteği varsaymak yerine sözleşmeden kontrol etmek gerekir.
