---
term: "Peer Discovery"
tr: ""
aliases: []
category: konsensus
subcategory: "Ağ katmanı"
level: orta
short: "Bir düğümün ağda bağlanacağı komşuları bulması ve bu adres listesini zaman içinde canlı tutması."
related: [bootnode, node, gossip-protocol, peer-to-peer-p2p, eclipse-attack]
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

Ağa bağlanan bir [[node|node]] karşısında hazır bir sunucu adresi bulmaz; konuşacağı diğer node'ları kendisi bulmak zorundadır. Peer discovery bu iştir: kiminle bağlantı kurulacağını bulmak ve bu listeyi çalışma boyunca güncel tutmak.

Yerleşik bir Türkçe karşılığı yok; burada "komşu bulma" diyeceğiz, ama istemci belgelerinde ve ayar dosyalarında karşına "discovery" olarak çıkar.

## Nasıl çalışır?

Üç aşaması var.

**İlk temas.** Sıfırdan kurulan bir node'un elinde hiç adres yoktur. Yazılımın içine gömülü [[bootnode|bootnode]] adreslerine ya da önceki çalışmasından kalan kayıtlı listeye başvurur.

**Genişleme.** Tanıştığı her node'a "başka kimleri tanıyorsun" diye sorar. Gelen adresleri kendi adres defterine ekler. Birkaç tur sonra elinde ağın geniş bir kesitinden adres birikmiş olur.

**Bakım.** Node'lar kapanır, IP adresleri değişir, bağlantılar kopar. Bu yüzden adresler düzenli aralıklarla yoklanır; cevap vermeyenler listeden düşer, yerine yenileri alınır.

Node bu defterden sınırlı sayıda komşu seçip bağlantı kurar. Sayının sınırlı olmasının sebebi, her bağlantının bant genişliği ve bellek harcamasıdır. Komşu bulma trafiği genellikle zincir verisinden ayrı, kendi küçük mesajlarıyla yürür.

## Dikkat

Komşu bulmayı [[gossip-protocol|gossip]] ile karıştırma. Biri kiminle konuşulacağını belirler, diğeri konuşulan şeyin ağa nasıl yayıldığını.

Bir node'un gördüğü ağ, komşu kümesi kadardır. Bu kümenin nasıl dolduğu bu yüzden bir güvenlik meselesidir: adreslerin tamamı tek bir elden geliyorsa node yalnızca o elin gösterdiği zinciri görür ([[eclipse-attack|eclipse saldırısı]]). İstemciler buna karşı bağlantıların bir kısmını farklı kaynaklardan ve rastgele seçer — bu ayarları "kaynak tasarrufu" diye kısmak göründüğünden pahalıya gelir.
