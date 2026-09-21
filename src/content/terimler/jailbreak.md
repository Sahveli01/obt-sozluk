---
term: "Jailbreak"
tr: ""
aliases: ["jailbreak", "jailbreaking"]
category: yapay-zeka
subcategory: "Güvenlik ve değerlendirme"
level: orta
short: "Kullanıcının, bir modeli kendi kurallarının dışına çıkmaya ikna etmeye çalışması."
related: [prompt-injection, guardrails, red-teaming, alignment, system-prompt]
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

Jailbreak, bir kullanıcının modeli normalde reddedeceği bir şeyi yapmaya ikna etmeye çalışmasıdır. Talep kullanıcıdan gelir, kullanıcı ne istediğini bilir ve mücadele kullanıcı ile modelin kendi sınırları arasında geçer. Terim telefon dünyasından ödünç alınmıştır; Türkçeye çevrilmeden kullanılıyor.

Bu, [[prompt-injection|prompt injection]] ile aynı şey değildir. Orada talimatı, modelin okuduğu veriye üçüncü bir taraf yerleştirir ve kullanıcı çoğu zaman olan bitenden habersiz, hatta zarar gören taraftır. Jailbreak'te sınırı zorlayan kişi kullanıcının ta kendisidir. Farklı tehdit modelleri oldukları için savunmaları da farklı yerlerde kurulur.

## Benzetme

Yazılı hiçbir kural metni, önüne gelecek bütün durumları önceden sayamaz. Kuralı yazan ne demek istediğini bilir ama metin sonlu, durumlar sonsuzdur. Modelin sınırları da bir kural motorundan değil, örneklerden öğrenilmiş eğilimlerden gelir; eğilimler her durumda aynı güçte çalışmaz.

## Nasıl çalışır?

Sorunun kaynağı, sınırların davranışa gömülü olmasıdır. Model bir isteği reddederken bir listeye bakmaz; eğitimde gördüğü örneklerden çıkardığı eğilimi uygular. Eğitimde hiç benzeri görülmemiş, alışılmadık biçimde çerçevelenmiş ya da parçalara bölünmüş isteklerde bu eğilim zayıflayabilir. Bu bir hata değil, istatistiksel öğrenmenin doğal sonucudur.

Bu yüzden savunma tek katmana bırakılmaz: eğitim aşamasında modelin sınırlarının sağlamlaştırılması ([[alignment]]), çalışma anında modelin dışındaki kontroller ([[guardrails|guardrail]]), çıktı tarafında filtre ve izleme, ve boşlukların kötü niyetli birinden önce bulunması için sistematik [[red-teaming|red teaming]].

## Dikkat

Jailbreak'in asıl zararı "modele kötü bir cümle söyletmek" değil, modelin eli nereye uzanıyorsa orasıdır. Model bir [[ai-agent|ajan]] içinde araç çağırabiliyor, dosya yazabiliyor ya da para hareketi başlatabiliyorsa sınırın aşılması gerçek bir eyleme dönüşür.

İkinci nokta: bir modelin sınırı aşması, istenen bilgiyi gerçekten bildiği anlamına gelmez; çıktı [[hallucination|uydurma]] da olabilir. Bu madde bilerek yöntem tarif etmez — jailbreak tekniklerinin dolaşıma girmesi savunmayı değil yalnızca saldırıyı kolaylaştırır.
