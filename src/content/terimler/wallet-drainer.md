---
term: "Wallet Drainer"
tr: "Cüzdan boşaltıcı"
aliases: ["cüzdan boşaltıcı"]
category: guvenlik
subcategory: "Kullanıcıyı hedef alan dolandırıcılıklar"
level: orta
short: "Sahte sitelere yerleştirilen, kullanıcıya imzalattığı onaylarla cüzdanındaki varlıkları toplayan hazır kötücül yazılım."
related: [phishing, ice-phishing, allowance, infinite-approval-risk, blind-signing, fake-airdrop]
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

Wallet drainer, sahte bir siteye yerleştirilen ve cüzdanını bağlayan kişiden varlıklarını almaya çalışan hazır bir yazılımdır. Ayırt edici yanı, bir saldırganın tek seferlik el yapımı tuzağı olmamasıdır: paket hâlinde dağıtılır, kullanan kişi teknik bilgi sahibi olmak zorunda değildir ve alınan paranın bir kısmı yazılımı verene gider.

Bunun pratik sonucu şu: karşında amatör bir sayfa değil, defalarca denenmiş, cilalanmış ve çalıştığı bilinen bir arayüz vardır.

## Nasıl çalışır?

Zinciri kırmaz, şifre de çözmez. Yaptığı iş, senin onaylayacağın isteği en verimli hâle getirmektir.

Cüzdanın bağlandığı anda içindeki varlıkları okur — bu bilgi zaten herkese açıktır. Sonra en değerli olana göre bir istek hazırlar: bazen doğrudan bir transfer, çoğu zaman bir harcama izni ya da bir NFT koleksiyonunun tamamını kapsayan bir yetki. Ekranda gördüğün şey, "bağlan", "talep et" ya da "cüzdanını doğrula" gibi beklediğin bir adımın devamı gibi durur.

Sen onayladıktan sonra çekim ayrı bir işlemle yapılır; hemen ya da günler sonra. Zincir tarafında olağandışı hiçbir şey olmaz, çünkü yetkiyi sen verdin ([[allowance|harcama izni]]).

## Dikkat

Bu yazılımların işi ikna etmektir ve bunu iyi yaparlar; tuzağa düşmek bir beceriksizlik göstergesi değildir. Somut adımlar:

- Cüzdanını yalnızca kendi bulup kaydettiğin adreslere bağla.
- Onay penceresinde iki satırı oku: yetki kime veriliyor ve neyi kapsıyor. Okuyamıyorsan onaylama ([[blind-signing|kör imzalama]]).
- Günlük kullandığın cüzdanda az bakiye tut; büyük varlıkları ayrı ve nadiren bağlanan bir cüzdanda tut.
- Bir şey imzaladığını fark edersen önce o siteye verilmiş izinleri sıfırla, sonra kalan varlıkları yeni bir cüzdana taşı ([[infinite-approval-risk|sınırsız onay riski]]).
- Kurtarma kelimelerini bir yere girdiysen taşımak yetmez; o cüzdan tamamen terk edilmelidir.
