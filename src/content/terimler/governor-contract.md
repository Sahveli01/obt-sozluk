---
term: "Governor Contract"
tr: ""
aliases: []
category: yonetisim
subcategory: ""
level: ileri
short: "Öneri kaydı, oylama, sayım ve yürütme adımlarını tek bir sözleşmede toplayan, zincir üstü yönetişimin çekirdek bileşeni."
related: [on-chain-governance, timelock, governance-proposal, voting-power, quorum, upgradeable-contract]
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

Governor sözleşmesi, [[on-chain-governance|zincir üstü yönetişimin]] adımlarını tek bir sözleşmede toplayan yapıdır: öneriler ona kaydedilir, oylar ona verilir, sayımı o yapar, kabul edilen kararı o kuyruğa alır. "Governor" bu sözleşme ailesinin yerleşik adıdır ve Türkçede de bu adla anılır.

## Nasıl çalışır?

Tipik bir governor'ın parçaları şunlardır:

- **Öneri kaydı.** Bir [[governance-proposal|öneri]]; hedef adresler, gönderilecek tutarlar, çağrı verileri ve bir açıklama metniyle kaydedilir. Bunlardan türetilen bir öneri kimliği oluşur.
- **Oy penceresi.** Kayıttan sonra bir başlangıç gecikmesi, ardından sabit uzunlukta bir oylama süresi gelir; ikisi de genellikle blok sayısıyla ölçülür.
- **Oylama.** Her adres oyunu evet, hayır ya da çekimser olarak verir. Ağırlık, [[voting-power|oy gücünün]] geçmiş bir bloktaki değerinden okunur.
- **Sayım.** Pencere kapanınca sözleşme [[quorum|yeter sayıyı]] ve evet oranını kontrol eder, öneriyi kabul ya da ret durumuna geçirir.
- **Kuyruğa alma ve yürütme.** Kabul edilen öneri bir [[timelock|zaman kilidine]] kuyruklanır; süre dolunca yürütme çağrısı işlemleri sırayla çalıştırır.

Önemli bir ayrıntı: protokolün asıl sahibi çoğunlukla governor değil, ona bağlı zaman kilididir. Governor yalnızca ona ne yapacağını söyleyebilen taraftır.

## Örnek

```solidity
interface IGovernor {
    function propose(
        address[] calldata targets,
        uint256[] calldata values,
        bytes[] calldata calldatas,
        string calldata description
    ) external returns (uint256 proposalId);

    function castVote(uint256 proposalId, uint8 support) external returns (uint256);

    function state(uint256 proposalId) external view returns (uint8);
}
```

Oylanan şey açıklama metni değil, ilk üç dizinin birlikte tanımladığı çağrı listesidir.

## Dikkat

Governor'ın zincir üstünde olması ayrıcalıklı yetkilerin ortadan kalktığı anlamına gelmez. Zaman kilidinin yanında acil durumlar için ayrı bir rol tanımlanmış olabilir ve sözleşmelerin kendisi [[upgradeable-contract|yükseltilebilir]] olabilir.

Sık rastlanan bir şaşkınlık da şudur: bazı sayım sözleşmelerinde bakiye tek başına ağırlık saymaz; kullanıcının oy gücünü önce kendi adresine devretmesi gerekir. Bunu yapmamış bir adres, token tutuyor olsa bile sıfır ağırlıkla oy verir.
