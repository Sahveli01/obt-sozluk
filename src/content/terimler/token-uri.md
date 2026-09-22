---
term: "Token URI"
tr: ""
aliases: ["tokenuri"]
category: nft
subcategory: ""
level: orta
short: "Bir NFT sözleşmesinin, o token'ın metadata belgesinin nerede olduğunu söyleyen adres."
related: [nft-metadata, erc-721, ipfs, content-identifier-cid, off-chain-metadata, on-chain-metadata]
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

Token URI, bir NFT sözleşmesine "şu numaranın bilgileri nerede?" diye sorduğunda aldığın cevaptır. [[erc-721|ERC-721]]'de bunu döndüren fonksiyonun adı `tokenURI`'dir ve döndürdüğü şey bir metindir — bir adres. Sözleşme o adresin ucunda ne olduğunu bilmez, denetlemez, getirmeye de çalışmaz; yalnızca adresi söyler.

Bu yüzden bir koleksiyonu incelerken bakılacak ilk yer burasıdır: adres neyi gösteriyor ve o adres sonradan değiştirilebilir mi. URI, "tek biçimli kaynak tanımlayıcı" anlamına gelen teknik bir kısaltmadır; Türkçeye çevrilmeden kullanılır.

## Nasıl çalışır?

Adres birkaç biçimde olabilir ve aradaki fark önemlidir.

`https://` ile başlayan bir adres sıradan bir sunucuyu gösterir. Sunucunun sahibi o adresin ucundaki dosyayı istediği an değiştirebilir, sunucu kapanabilir, alan adının süresi dolabilir. Token yerinde durur, cevap veren kalmaz.

`ipfs://` ile başlayan bir adres ise bir [[content-identifier-cid|CID]] taşır ve CID içeriğin kendisinden hesaplanır. Dosyanın tek bir baytı değişse CID de değişir; dolayısıyla aynı adresin ucundan farklı bir belge gelmesi mümkün değildir. Bu, içeriğin sessizce değiştirilmesini çözer ama kalıcılığı çözmez: o dosyayı diskinde tutan makine kalmazsa adres geçerlidir, cevap gelmez. [[ipfs|IPFS]] maddesi bu ayrımı ayrıntılandırıyor.

Üçüncü bir biçim `data:` ile başlar. Burada belgenin kendisi adresin içinde taşınır ve dışarıda hiçbir yere gidilmez — [[on-chain-metadata|zincir üstü metadata]] yaklaşımı budur.

## Örnek

```solidity
string private baseURI;

function tokenURI(uint256 tokenId) public view override returns (string memory) {
    return string.concat(baseURI, Strings.toString(tokenId), ".json");
}
```

Çoğu koleksiyon adresi böyle üretir: ortak bir kök adres, sonuna numara. Yani bütün koleksiyonun [[nft-metadata|metadata]]'sı tek bir değişkene bağlıdır.

## Dikkat

Sözleşmenin değiştirilemez olması, token URI'nin değiştirilemez olduğu anlamına gelmez. Çoğu koleksiyonda kök adresi güncelleyen, yalnızca sahibin çağırabildiği bir fonksiyon bulunur; [[reveal|reveal]] mekanizması zaten bunun üstüne kuruludur.

Aynı yetki reveal'den sonra da durur. Adresin dondurulup dondurulmadığını anlamanın tek yolu sözleşmenin koduna bakmaktır — görselin bugün ekranda duruyor olması hiçbir şey kanıtlamaz.
