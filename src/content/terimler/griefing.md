---
term: "Griefing"
tr: ""
aliases: []
category: guvenlik
subcategory: "Sözleşme açıkları"
level: orta
short: "Saldırganın kendine kazanç sağlamadan, yalnızca başkasına zarar vermek için maliyete katlanması."
related: [gas-griefing, denial-of-service-dos, threat-model, attack-vector, maximal-extractable-value-mev]
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

Griefing, zararın **kâr amacı olmadan** verilmesidir. Saldırgan bu işten para kazanmaz; üstelik genellikle işlem ücretini kendi cebinden öder. Kazancı varsa da dolaylıdır: bir rakibi yavaşlatmak, bir oylamayı geciktirmek, bir protokolün güvenilirliğini yıpratmak ya da yalnızca can sıkmak.

Terim çok oyunculu oyunlardan gelir. Kazanmaya değil, başkasının oyununu bozmaya oynayan oyuncuya griefer denir; kendi puanı umurunda değildir.

Türkçede yerleşik bir karşılığı yok; "griefing" olduğu gibi kullanılıyor.

## Benzetme

Masa oyununda kazanma şansı kalmadığını anlayan bir oyuncu gibi. Artık kendi puanını büyütecek hamle yapmaz; yalnızca önde gidenin önünü kesecek hamleyi yapar. Kuralları çiğnemez, hile yapmaz, oyundan da çıkmaz. Yalnızca oyunun amacı onun için değişmiştir — ve masadaki herkesin akşamı uzar.

## Nasıl çalışır?

Güvenlik analizinde çoğu saldırı "saldırgan bundan ne kazanır" sorusuyla değerlendirilir. Bu soru griefing'i gözden kaçırır, çünkü cevabı "hiçbir şey"dir ve saldırı yine de yapılır. Bu yüzden [[threat-model|tehdit modeline]] ayrı bir varsayım eklemek gerekir: **bazı katılımcılar zarar etmeyi göze alır.**

Tasarımda sorulacak soru şudur: birinin bana X lira zarar verdirmesi ona kaç liraya mal olur? Bu oran ne kadar kötüyse sistem o kadar kırılgandır. Bir kişinin birkaç liralık işlem ücretiyle yüzlerce kişiyi saatlerce bekletebildiği bir tasarım, hiç saldırıya uğramasa bile hatalıdır.

Savunma genellikle maliyeti dengelemektir: teminat istemek, bir işi başlatanın onu tamamlamamasını pahalı hâle getirmek, tek bir katılımcının başarısızlığının herkesi durdurmasını engellemek ve kritik akışları bir kişinin işbirliğine muhtaç bırakmamak.

## Dikkat

Griefing'i "zararsız" saymak yaygın bir hatadır. Kimse para kaybetmemiş gibi görünür ama kaybedilen şey ölçülmesi zor olandır: kilitlenen fonlar, geciken kararlar, bırakılan kullanıcılar.

"Saldırgan kâr etmiyor, o hâlde kimse yapmaz" da bir savunma değildir. Bir sisteme zarar vermenin bedeli düşükse, o bedeli ödemeye hazır birinin çıkması için ekonomik değil kişisel bir sebep yeter.

[[maximal-extractable-value-mev|MEV]] ile karıştırma: orada amaç kazançtır ve saldırgan kazanmadığı bir hamleyi yapmaz. Griefing'de amaç zarardır. İkisi farklı tehdit modelleri, dolayısıyla farklı savunmalar gerektirir ([[attack-vector|saldırı vektörü]]).

En sık görülen iki biçimi kendi başlıklarındadır: [[gas-griefing|gas griefing]] ve ödeme döngüsünü kilitleyerek yapılan [[denial-of-service-dos|hizmet reddi]].
