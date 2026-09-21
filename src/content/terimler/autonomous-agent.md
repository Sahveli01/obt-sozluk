---
term: "Autonomous Agent"
tr: "Özerk ajan"
aliases: ["otonom ajan"]
category: yapay-zeka
subcategory: "Ajanlar ve araçlar"
level: orta
short: "Genel bir hedefi uzun süre insan onayı almadan takip eden, ara adımlarını kendi belirleyen ajan."
related: [ai-agent, sandbox, human-in-the-loop, principle-of-least-privilege, alignment]
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

Otonom ajan, kendisine verilen genel bir hedefi uzun süre insan onayı almadan takip eden, ara hedeflerini kendi belirleyen ajandır. Fark derecededir: sıradan bir [[ai-agent|ajan]] bir isteği bitirip durur, otonom ajan iş bitene kadar ya da durdurulana kadar döngüde kalır.

## Nasıl çalışır?

Uzun süre çalışabilmesi için üç şey eklenir. Kalıcı [[memory-ai|bellek]], çünkü [[context-window|bağlam penceresi]] dolduğunda eski adımların ne olduğunu bir yerde tutması gerekir. Plan tutma ve planı gözden geçirme, çünkü hedef tek adımda bitmez. Bir de durma koşulu: süre, adım sayısı, harcama sınırı ya da belirli bir koşul sağlanınca durma kuralı.

## Örnek

Bir depoyu gece boyunca tarayıp bağımlılık güncellemelerini deneyen, her birinde testleri çalıştıran ve yalnızca testleri geçenler için [[pull-request-pr|pull request]] açan bir ajan. Hangi paketi deneyeceğine kendisi karar verir, ama değişikliği ana dala birleştirme kararı insanda kalır.

## Dikkat

Asıl tasarım sorusu ajanın ne yapabileceği değil, neyi yapamayacağıdır. Uygulamada kullanılan sınırlar şunlardır: ajanı [[sandbox|kum havuzunda]] çalıştırmak, dosya ve ağ erişimini yalnızca gereken yerlere açmak ([[principle-of-least-privilege|en az yetki ilkesi]]), geri alınamaz işlemleri (para gönderme, silme, yayına alma, dışarıya mesaj atma) insan onayına bağlamak, her adımı kaydetmek ve süreci her an durdurabilecek bir düğme bırakmak.

Uzun döngülerde küçük bir yanlış anlama birikerek büyür. Ajan ilk adımda yanlış klasörde olduğunu fark etmediyse sonraki yirmi adımı da orada yapar; bu yüzden ara çıktıları görünür kılmak güvenliğin bir parçasıdır.
