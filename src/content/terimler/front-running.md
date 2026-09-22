---
term: "Front-running"
tr: ""
aliases: []
category: guvenlik
subcategory: "Ekonomik ve protokol saldırıları"
level: orta
short: "Bekleyen bir işlemin niyetini görüp aynı işi ondan önce yaptırarak kazanç elde etme."
related: [maximal-extractable-value-mev, sandwich-attack, mempool, private-mempool, slippage, back-running]
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

Bir işlemi ağa gönderdiğinde iş bitmiş olmaz. İşlem önce [[mempool|bekleme havuzuna]] düşer ve orada beklerken içeriği herkese açıktır: neyi, ne kadar ve hangi sınırlarla yapmak istediğin okunabilir. **Front-running**, bu bekleme aralığında niyetini okuyup aynı işi senden önce yaptırmaktır.

Ortada bir kural ihlali yoktur. Sıra, ödenen ücrete göre belirlendiği için senden sonra gönderilen bir işlem senden önce işlenebilir. Açığın kaynağı kod değil, sıralamanın kendisidir.

Türkçede yerleşmiş bir karşılığı yok; metinlerde "öne geçme" diye açıklansa da terim İngilizce kullanılır.

## Benzetme

Kapalı zarf usulü bir ihale düşün, ama zarflar şeffaf. Teklifini masaya bırakıyorsun; zarf açılana kadar kimse işleme koymuyor, fakat içindeki rakamı herkes okuyabiliyor. Üstelik sonradan gelen biri, masaya biraz fazla ödeyerek kendi zarfını seninkinden önce açtırabiliyor.

Kimse hile yapmadı. Sorun kuralın kendisinde: teklifin, işleme girmeden önce görünür oluyor.

## Nasıl çalışır?

İki şeyin aynı anda doğru olması yeter: niyet önceden **görünür**, sıra ise **satın alınabilir**. Bu iki şart karşılandığında, bekleyen işlemleri sürekli izleyip kârlı olanın önüne geçmek sıradan bir işe dönüşür.

Kazanç havadan gelmez; senin eline geçecek olan daha kötü sonuçtan çıkar. Bu yüzden front-running, [[maximal-extractable-value-mev|MEV]]'in en tanıdık biçimidir. Bir işlemin hemen arkasına geçen hâli [[back-running]], işlemi iki taraftan birden kuşatan hâli [[sandwich-attack|sandviç saldırısıdır]].

Hedef yalnızca takaslar değildir: bir ismi ilk kaydeden, sınırlı bir dağıtımdan ilk pay alan ya da bir fırsatı ilk kapan her yerde aynı yarış vardır.

## Dikkat

Protokol tarafında savunma, niyeti işleme girmeden görünmez kılmaktan geçer: önce bağlayıcı ama okunamaz bir taahhüt, sonra açıklama ([[commit-reveal-scheme|commit-reveal]]) ya da sıralamayı tek bir tarafın belirlemediği bir tasarım.

Kullanıcı tarafında yapabileceklerin somut:

- [[slippage|Kayma]] toleransını gereksiz yüksek ayarlama. Yüksek tolerans "ne olursa olsun doldur" demektir ve öne geçen tarafa çalışma alanı açar.
- Büyük bir işlemi tek seferde yapma; zamana yayılmış parçalar hem daha az dikkat çeker hem de tek bir anın fiyatına bağlı kalmaz ([[time-weighted-average-price-twap|TWAP]] mantığı).
- İşlemini herkese açık havuza düşürmeyen bir [[private-mempool|özel kanal]] üzerinden gönder. Bu, niyetini gören göz sayısını azaltır; sıfırlamaz.
