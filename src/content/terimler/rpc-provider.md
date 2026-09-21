---
term: "RPC Provider"
tr: ""
aliases: ["rpc saglayicisi", "rpc endpoint"]
category: araclar
subcategory: "Altyapı ve veri"
level: orta
short: "Blockchain node'larını senin yerine çalıştırıp uygulamana zincire bağlanacak hazır bir adres veren hizmet."
related: [rpc-node, json-rpc, node, api-key, rate-limiting, latency]
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

Bir uygulamanın zincirle konuşabilmesi için bir [[node|node'a]] bağlanması gerekir: bakiye okumak, bir [[smart-contract|akıllı sözleşmeye]] soru sormak ya da imzalanmış bir işlemi ağa vermek için. Bu node'u kendin çalıştırabilirsin. RPC sağlayıcısı ise bu işi üstlenen ticari hizmettir: sana bir adres (endpoint) ve genellikle bir [[api-key|API anahtarı]] verir, sen istek atarsın, arkadaki makineleri o çalıştırır.

Türkçede yerleşik bir karşılığı yok; topluluk "RPC sağlayıcısı" diye yarı çevrilmiş hâliyle kullanır.

## Benzetme

Her eve sanayi tipi çamaşır makinesi alınmaz; çamaşırhaneye bırakırsın. Makinenin bakımı, arızası, elektriği seni ilgilendirmez, sen temiz çamaşırı alırsın. Buna karşılık dükkânın kaçta kapandığına, kaç kilo kabul ettiğine ve çamaşırının kimin elinden geçtiğine sen karar vermezsin.

## Nasıl çalışır?

Sağlayıcı tek bir makine değil, çok sayıda [[rpc-node|RPC node]] çalıştırır ve gelen istekleri bunların arasında dağıtır ([[load-balancer|yük dengeleyici]]). Sattığı şey aslında üç başlıktır: sürekli açık kalmak, düşük [[latency|gecikme]] ve ani yük artışını kaldırabilmek.

Ücretlendirme genelde istek sayısına ya da isteğin ağırlığına bağlıdır ve paketlerin üstünde [[rate-limiting|hız sınırı]] bulunur; sınırı aşan istekler reddedilir. Geçmiş veri isteyen ağır sorgular ([[archive-node|arşiv]] gerektirenler) ayrı fiyatlanır. Sağlayıcılar arasındaki fark genelde şu sorularda toplanır: hangi zincirleri destekliyor, arşiv erişimi var mı, hız sınırı ne, sunucuları nerede. "Hangisi daha iyi" sorusunun genel bir cevabı yoktur; ihtiyaca göre değişir.

## Dikkat

Sağlayıcı kullanmak, zincire tek bir şirketin penceresinden bakmak demektir. O şirket yanıt vermezse uygulaman zinciri göremez; eski ya da yanlış bir cevap verirse bunu anlamanın tek yolu başka bir kaynakla karşılaştırmaktır. İstek attığında sorduğun adres ve bağlantı bilgin de sağlayıcıda görünür — okuma işlemleri sandığın kadar anonim değildir.

Bu yüzden ciddi uygulamalar genellikle birden fazla sağlayıcıyı yedekli kullanır, kendi node'unu da devrede tutar ve kullanıcıya RPC adresini değiştirebilme imkânı verir.
