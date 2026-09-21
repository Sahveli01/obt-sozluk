---
term: "Decentralized Storage"
tr: "Dağıtık depolama"
aliases: ["dagitik depolama", "merkeziyetsiz depolama"]
category: araclar
subcategory: "Altyapı ve veri"
level: orta
short: "Dosyaların tek bir şirketin sunucusunda değil, birbirinden bağımsız birçok makinede tutulduğu depolama yaklaşımı."
related: [ipfs, arweave, filecoin, off-chain, content-identifier-cid, pinning]
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

Sıradan depolamada bir dosya bir şirketin sunucusunda durur ve adres o sunucuyu gösterir. Şirket dosyayı silerse, hesabı kapatırsa ya da sunucu kapanırsa adres boşa düşer. Dağıtık depolamada ise dosya birbirini tanımayan birçok makinede bulunur ve genellikle nerede durduğuna göre değil ne olduğuna göre adreslenir; tek bir makinenin kapanması dosyayı yok etmez.

Blockchain tarafında bu ihtiyaç çok somuttur: zincire büyük dosya yazmak son derece pahalıdır. Görseller, metinler ve [[nft-metadata|NFT metadata]] gibi veriler [[off-chain|zincir dışında]] tutulur, zincire yalnızca o verinin adresi yazılır.

## Benzetme

Tek nüshası bir çekmecede duran bir şiir, o çekmece yandığında biter. Aynı şiiri yüz kişi ezberlemişse kimse ortadan kaldıramaz. Ama bu yalnızca ezberleyen birileri kaldığı sürece doğrudur; herkes unutursa şiir yine kaybolur. Dağıtık depolamanın hem gücü hem kırılganlığı buradadır.

## Nasıl çalışır?

Bu sistemler üç soruya cevap verir.

**Adresleme:** dosya nasıl bulunur? Yaygın cevap içerik adreslemedir — adres, dosyanın içeriğinden hesaplanır ([[content-identifier-cid|CID]]). Böylece indirdiğin şeyin istediğin dosya olduğunu kimseye sormadan doğrulayabilirsin.

**Dağıtım:** kimde ne olduğu nasıl bulunur? Genelde [[peer-to-peer-p2p|eşler arası]] bir ağ ve hangi parçanın hangi makinede olduğunu kaydeden dağıtık bir dizin vardır.

**Kalıcılık:** veriyi tutan makinelerin bunu sürdürmek için sebebi nedir? Yollar burada ayrılır. [[ipfs|IPFS]] adresleme ve dağıtım sunar, saklama sözü vermez. [[filecoin|Filecoin]] ve [[arweave|Arweave]] gibi ağlar ise saklamayı ekonomik bir anlaşmaya ya da fon modeline bağlar.

## Dikkat

"Dağıtık" kelimesi kendiliğinden "kalıcı" demek değildir. Bir dosyanın böyle bir ağda olması, onu tutan birileri olduğu sürece erişilebilir olması demektir; teşvik biter ya da kimse kopya tutmazsa veri kaybolur.

Dağıtık depolama gizlilik de sağlamaz. Ağa koyduğun dosya, adresini bilen herkese açıktır; gizli kalması gerekiyorsa yüklemeden önce şifrelemen gerekir.
