---
term: "Ragequit"
tr: ""
aliases: []
category: yonetisim
subcategory: ""
level: orta
short: "Alınan karara katılmayan üyenin, hazinedeki payını alıp DAO'dan çıkabilmesini sağlayan mekanizma."
related: [treasury, decentralized-autonomous-organization-dao, governance-proposal, timelock, token-burn]
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

Ragequit, oylamada azınlıkta kalan üyenin kararı uygulanmadan önce ortaklıktan çıkabilmesidir. Üye jetonlarını yakar, karşılığında [[treasury|hazinedeki]] varlıklardan payı oranında alır ve gider.

Kelime oyun jargonundan gelir: kaybettiğini anlayan oyuncunun masayı terk etmesi. DAO bağlamında ise öfkeli bir tepkiyi değil, sözleşmeye yazılmış bir çıkış hakkını anlatır. Türkçede yerleşmiş bir karşılığı yoktur; İngilizce yazılışıyla kullanılır.

## Nasıl çalışır?

Kabul edilen [[governance-proposal|öneri]] hemen uygulanmaz. Oylama ile uygulama arasına bir çıkış penceresi konur — bu, aynı anda bir [[timelock|zaman kilidi]] görevi de görür.

Pencere açıkken karara katılmayan üye çıkışını çağırır. Jetonu yakılır ([[token-burn|token burn]]), hazinedeki her varlıktan payına düşen oran ona aktarılır. Kalanlar kararla birlikte devam eder.

Mekanizmanın asıl işlevi koruma değil, caydırmadır. Hazineyi kendi lehine aktaran bir öneri hazırlayan çoğunluk, karşı çıkanların paylarını alıp çıkacağını bilir; ele geçireceği hazine, çıkışlar kadar küçülür. Böylece azınlığın rızası, çoğunluğun hesabına girer.

## Dikkat

İki koşul sağlanmazsa hak kâğıt üstünde kalır.

Birincisi likidite. Çıkış, hazinedeki varlıkların oransal olarak bölünebilmesini gerektirir. Varlıklar kilitliyse, bir stratejiye yatırılmışsa ya da bölünemeyen tek parça hâlindeyse pay hesaplanabilir ama ödenemez.

İkincisi zaman. Pencere kısaysa, öneriler fark edilmeden geçiyorsa ya da üye o günlerde bakmıyorsa hakkın kullanılacağı an kaçar.

Bir de çıkışın neyi kapsadığı vardır: pay genelde yalnızca hazinedeki varlıklar üzerinden hesaplanır. DAO'nun geliştirdiği kod, markası ya da ilişkileri bölüşülmez.
