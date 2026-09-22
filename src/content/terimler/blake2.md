---
term: "BLAKE2"
tr: ""
aliases: ["blake2b", "blake2s"]
category: kriptografi
subcategory: "Hash fonksiyonları"
level: orta
short: "Yazılımda hızlı çalışmak üzere tasarlanmış, anahtarlı kullanımı içine gömülü kriptografik hash fonksiyonu ailesi."
related: [hash-function, sha-256, hmac, key-derivation, precompile]
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

BLAKE2, 2012'de yayımlanan bir kriptografik [[hash-function|hash fonksiyonu]] ailesidir. Atası olan BLAKE, SHA-3 yarışmasının son turuna kalan beş tasarımdan biriydi; yarışmayı kazanamadı ama tasarımcıları onu sadeleştirip BLAKE2 adıyla ayrı bir standart olarak yayımladı.

İki ana üyesi var. BLAKE2b, 64 bitlik işlemcilerde çalışacak biçimde ayarlanmıştır ve 64 bayta kadar çıktı verebilir; BLAKE2s daha dar kelime boyutlarına göre ayarlıdır ve 32 bayta kadar çıkar. Gömülü cihazlarda ve ağ yazılımlarında ikincisine, sunucu tarafında birincisine rastlarsın.

## Nasıl çalışır?

BLAKE2'nin karıştırma çekirdeği bir hash fonksiyonundan değil, ChaCha akış şifresinden ödünç alınmıştır. Tasarım hedefi açıkça yazılımda hız olduğu için, özel donanım desteği olmayan sıradan bir işlemcide ucuz çalışan işlemler seçilmiştir.

İki tasarım kararı onu ayırır. Birincisi, çıktı uzunluğu ve varsa anahtar, işin en başında iç duruma karıştırılır; yani "32 bayt çıktı veren BLAKE2b" ile "64 bayt çıktı veren BLAKE2b" birbirinin kırpılmış hâli değil, farklı fonksiyonlardır. İkincisi, son blok işlenirken özel bir bayrak kaldırılır; bu yüzden [[sha-256|SHA-256]]'yı etkileyen uzunluk uzatma tuzağı BLAKE2'de geçerli değildir.

Anahtarlı mod da bu ailenin içine gömülüdür: anahtarı verip doğrudan bir mesaj doğrulama etiketi üretebilirsin.

## Dikkat

BLAKE2'nin anahtarlı modu olması, "hash fonksiyonuna anahtar verilebilir" diye genel bir kural olduğu anlamına gelmez. Böyle bir mod açıkça tasarlanmış olmalıdır. Elindeki fonksiyonda yoksa anahtarı mesajla kendin birleştirme; [[hmac|HMAC]] gibi bu iş için tasarlanmış bir sarmal kullan.

BLAKE2 ile karşılaşacağın yerler biraz dağınıktır: bazı [[key-derivation|anahtar türetme]] fonksiyonlarının içinde bir yapı taşı olarak, bazı zincirlerin depolama anahtarlarında, bazı VPN protokollerinde. Ethereum tarafında ise BLAKE2b'nin sıkıştırma fonksiyonu bir [[precompile|precompile]] olarak eklenmiştir — amaç başka zincirlerin doğrulamasını sözleşme içinde makul maliyetle yapabilmekti.

Bir de isim karışıklığı var: BLAKE, BLAKE2 ve BLAKE3 ayrı fonksiyonlardır, birbirinin sürümü değil. Bir belge "BLAKE" diyorsa hangisini kastettiğini açıkça kontrol et.
