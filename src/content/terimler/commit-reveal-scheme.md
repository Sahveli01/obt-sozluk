---
term: "Commit-Reveal Scheme"
tr: ""
aliases: ["commit-reveal"]
category: akilli-sozlesmeler
subcategory: "Tasarım kalıpları"
level: orta
short: "Önce seçimin hash'ini zincire yazıp sonra seçimi açıklayarak, kimsenin başkasının seçimini önceden görmesini engelleyen iki adımlı kalıp."
related: [front-running, weak-randomness, commitment-scheme, hash-function, salt, mempool]
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

Zincirde hiçbir şey gizli değildir: gönderdiğin işlem daha onaylanmadan [[mempool|bekleme havuzunda]] herkese görünür. Bu, açık artırma, oylama ya da tahmin gibi "kimse diğerinin seçimini önceden bilmemeli" diyen her kurguyu bozar.

Commit-reveal bunu iki adıma bölerek çözer. Birinci adımda (**commit**) seçimini değil, seçiminin [[hash-function|hash'ini]] gönderirsin. İkinci adımda (**reveal**) seçimini açık açık gönderirsin; sözleşme hash'i yeniden hesaplayıp birinci adımdakiyle karşılaştırır.

Kalıbın adı çevrilmez; "commit-reveal" diye geçer.

## Benzetme

İki kişinin taş-kâğıt-makas oynarken seçimini bir kâğıda yazıp katlayarak masaya bırakması gibi. Kâğıtlar masadayken kimse diğerinin ne yazdığını göremez, ama kimse yazdığını da değiştiremez — kâğıt orada duruyor. İkisi de bıraktıktan sonra kâğıtlar açılır. Oyunun adilliği, seçimin gizli kalmasından değil, **bağlayıcı hâle gelmiş olmasından** gelir.

## Nasıl çalışır?

Hash tek yönlüdür: hash'e bakarak seçimi geri hesaplayamazsın, ama seçimi elinde tutan biri hash'i tekrar üretip ispatlayabilir. Kalıbın işlemesi için iki ayrıntı şarttır.

Birincisi **[[salt|tuz]]**: seçenekler azsa (örneğin üç tane) saldırgan hepsinin hash'ini deneyip eşleştirir. Seçime rastgele bir gizli sayı eklenirse bu imkânsızlaşır. İkincisi **adresin hash'e katılması**: yoksa bir başkası senin commit'ini olduğu gibi kopyalayıp kendi adına gönderebilir.

Sözleşme ayrıca iki pencere tanımlar: commit süresi ve reveal süresi. İkincisi kapanmadan açıklamayan hesap oyun dışı kalır.

## Örnek

```solidity
mapping(address => bytes32) public taahhut;

function taahhutEt(bytes32 h) external {
    taahhut[msg.sender] = h;
}

function acikla(uint8 secim, bytes32 tuz) external {
    bytes32 h = keccak256(abi.encodePacked(secim, tuz, msg.sender));
    require(taahhut[msg.sender] == h, "uyusmuyor");
    delete taahhut[msg.sender];
    // secim burada islenir
}
```

## Dikkat

En sık atlanan risk **açıklamama**dır. İkinci adım kullanıcının elindedir; kaybedeceğini anlayan kişi hiç açıklamaz. Bu bir kaçamak değil, doğrudan bir saldırı yüzeyidir: son açıklayacak kişi diğer bütün seçimleri gördükten sonra oyundan çekilerek sonucu eğebilir. Çare, commit sırasında teminat almak ve açıklamayanın teminatını yakmaktır.

İkincisi, commit-reveal tek başına rastgelelik üretmez. Katılımcıların açıkladıklarını birleştirerek sayı üretmek, aynı "son çekilen kazanır" sorununu taşır ([[weak-randomness|zayıf rastgelelik]]); gerçek ihtiyaç için [[verifiable-random-function-vrf|VRF]] gibi kaynaklara bakılır.

Üçüncüsü bedeli: iki işlem, iki kez gas ve arada beklemek demektir. [[front-running|Öne geçme]] riski gerçekten yoksa bu maliyeti ödemeye değmez.
