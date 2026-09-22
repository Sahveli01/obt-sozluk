---
term: "Eclipse Attack"
tr: ""
aliases: []
category: guvenlik
subcategory: "Ekonomik ve protokol saldırıları"
level: ileri
short: "Bir node'un bütün bağlantılarının saldırganla dolması ve ağı yalnızca onun gösterdiği kadar görmesi."
related: [sybil-attack, node, peer-discovery, peer-to-peer-p2p, double-spending, light-client]
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

Bir [[node|node]] blok zincirini doğrudan görmez; ona bağlı olduğu birkaç komşudan duyar. **Eclipse saldırısı**, bir node'un bütün komşularının saldırganın kontrolündeki node'lardan oluşması ve o node'un ağ hakkında bildiği her şeyin tek bir elden geçmesidir.

Ağın geri kalanı etkilenmez; saldırıya uğrayan tek bir node'dur. Üstelik çoğu zaman bunu fark etmez: bloklar gelir, işlemler görünür, her şey normal işliyor gibidir.

Terim İngilizce kullanılır; Türkçede yerleşmiş bir karşılığı yok.

## Benzetme

Hiç tanımadığın bir şehre taşındığını düşün. Nereye gideceğini, hangi dükkânın dürüst olduğunu, dün ne olduğunu etrafındaki insanlardan öğreniyorsun. Şimdi etrafındaki herkesin aynı kişinin adamı olduğunu varsay: kimsenin sana yalan söylemesi bile gerekmez, neyi duyacağını o kişi seçer.

Şehir yerinde duruyor. Değişen tek şey, şehre açılan bütün pencerelerinin aynı ele bakması.

## Nasıl çalışır?

Zayıf nokta [[peer-discovery|komşu bulma]] aşamasıdır. Bir node ağa ilk katılırken ya da yeniden başlarken bağlanacağı adresleri bir listeden seçer; o liste kimin adresleriyle dolarsa node o kişinin ağına bağlanmış olur. Saldırı bu yüzden çoğu zaman bir [[sybil-attack|Sybil saldırısının]] üstüne kurulur — çok sayıda kimlik üretmek, listede yer kapmanın yoludur. İkisinin farkı amaçtadır: Sybil ağın genelinde çokluk yaratır, eclipse tek bir node'u yalnızlaştırır.

Node izole edildiğinde saldırganın eline iki şey geçer: o node'a neyin gösterileceği ve node'un ürettiği bilginin ağa ulaşıp ulaşmayacağı. Ödemeyi onaylandı sanan bir satıcı ([[double-spending|çifte harcama]]), var olmayan bir zinciri izleyen bir [[light-client|hafif istemci]] ya da bloğu ağa hiç ulaşmayan bir doğrulayıcı, bu durumun sonuçlarıdır.

## Dikkat

Savunma node tarafındadır ve çoğu istemcide hazır gelir: bağlantı sayısını yüksek tutmak, bağlantıların bir kısmını dışarıdan gelmeyen ve rastgele seçilen kaynaklardan kurmak, komşu listesini tek bir kaynaktan doldurmamak, bağlantıları zaman içinde tazelemek. Ağ katmanı [[peer-to-peer-p2p|eşler arası]] olduğu için bu ayarlar kullanıcıya bırakılmıştır.

Node işleten biri için pratik karşılığı: varsayılan bağlantı ayarlarını "kaynak tasarrufu" diye kısma, node'u tek bir sağlayıcının ağının arkasına alma ve gördüğü blok yüksekliğini arada bağımsız bir kaynakla karşılaştır.

Kendi node'unu çalıştırmıyorsan zaten tek bir sağlayıcının anlattığı zinciri görüyorsundur. Bu bir eclipse saldırısı değildir ama güven bakımından sonucu benzerdir — ve bunu bilerek kullanmak, bilmeden kullanmaktan başkadır.
