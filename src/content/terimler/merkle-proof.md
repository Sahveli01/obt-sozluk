---
term: "Merkle Proof"
tr: "Merkle kanıtı"
aliases: ["merkle kaniti", "inclusion proof"]
category: kriptografi
subcategory: "Veri yapıları"
level: orta
short: "Bir kaydın Merkle kökü altında yer aldığını, kümenin kalanını indirmeden gösteren kısa kardeş özetleri listesi."
related: [merkle-tree, merkle-root, light-node, allowlist, airdrop, openzeppelin]
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

Merkle kanıtı, bir kaydın belli bir [[merkle-root|Merkle kökünün]] altında yer aldığını gösteren kısa bir özet listesidir. Karşı taraf sana bütün kümeyi göndermez; yalnızca senin kaydından köke çıkan yol üstündeki kardeş özetleri gönderir.

Asıl değeri boyutundadır. Küme bin kayıttan bir milyona çıktığında kanıt bin kat büyümez, yalnızca birkaç adım uzar. Doğrulaması da birkaç hash işleminden ibarettir. Bu iki cümle, [[merkle-tree|Merkle ağacının]] neden her yerde karşına çıktığını açıklar.

## Nasıl çalışır?

Elinde üç şey olur: doğrulamak istediğin kayıt, kanıt listesi ve güvendiğin kök.

Önce kaydın hash'ini alırsın. Kanıttaki ilk kardeş özeti yanına koyup ikisini birlikte hash'lersin; çıkan değer bir üst seviyedeki düğümdür. Sıradaki kardeşle aynı işlemi tekrarlar, tepeye kadar çıkarsın. Elde ettiğin değer güvendiğin kökle aynıysa kayıt o kümededir; değilse değildir. Aradaki diğer kayıtların hiçbirini görmen gerekmez.

[[light-node|Hafif düğümler]] tam olarak bunun üstünde durur: zincirin tamamını değil yalnızca başlıkları takip eder, bir işlemin gerçekten o blokta olduğunu ise kanıt isteyerek sınar.

## Örnek

En yaygın kullanımı [[allowlist|izin listeleridir]]. On bin adresi sözleşmeye tek tek yazmak yerine listenin kökü yazılır; hak sahibi [[airdrop|dağıtımdan]] payını alırken listede olduğunu kanıtla gösterir. Zincirde saklanan tek şey o kök değeridir.

Doğrulamayı kendin yazma; denetlenmiş bir kütüphaneden çağır ([[openzeppelin|OpenZeppelin]]):

```solidity
import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";

contract Claim {
    bytes32 public immutable root;

    constructor(bytes32 _root) { root = _root; }

    function claim(bytes32[] calldata proof, uint256 amount) external {
        bytes32 leaf = keccak256(bytes.concat(keccak256(abi.encode(msg.sender, amount))));
        require(MerkleProof.verifyCalldata(proof, root, leaf), "gecersiz kanit");
        // ... odeme
    }
}
```

## Dikkat

Kanıt "bu kayıt içeride" der, "bu kayıt dışarıda" demez. Birinin sana kanıt vermemesi kaydın olmadığı anlamına gelmez, yalnızca göstermediği anlamına gelir.

Güvenlik yaprakların nasıl hazırlandığına da bağlıdır. Bir yaprak değeri ağacın ara düğümlerinden biriyle karıştırılabiliyorsa, saldırgan kümede hiç bulunmayan bir kaydı kanıtlayabilir. Kütüphanelerin yaprağı iki kez hash'lemesinin ve alanları ayrı ayrı kodlamasının sebebi budur.
