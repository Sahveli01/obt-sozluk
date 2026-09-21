---
term: "Red Teaming"
tr: ""
aliases: ["red teaming", "red team"]
category: yapay-zeka
subcategory: "Güvenlik ve değerlendirme"
level: orta
short: "Bir sistemi yayına çıkmadan önce kötü niyetli biri gibi kasıtlı olarak zorlayan, planlı ve raporlu denetim pratiği."
related: [ai-safety, jailbreak, prompt-injection, evals, threat-model]
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

Red teaming, bir sisteme onu savunan tarafın değil, ona saldıracak tarafın gözünden bakmayı düzenli bir işe dönüştürmektir. Yapay zekâda bu, bir modelin hangi koşullarda zararlı, yanlış ya da politikaya aykırı davrandığını yayın öncesinde bulmak demektir. Amaç bulunanı kullanmak değil, kayda geçirip düzelttirmektir.

Güvenlik metinlerinde "kırmızı takım" birebir çevirisi görülse de pratik çoğunlukla İngilizce adıyla anılıyor.

## Benzetme

Bir oyun satışa çıkmadan önce onu kasıtlı olarak "yanlış" oynayan bir test ekibi vardır: duvara yürür, adımları olmayacak sırayla yapar, tasarımcının hiç düşünmediği yoldan gider. Amaç oyunu bozmak değil, bozulacağı yeri oyuncudan önce bulmaktır.

## Nasıl çalışır?

Bir meslek pratiği olarak işleyişi kurumsaldır. Önce kapsam ve kurallar yazılır: neyin denenebileceği, hangi verinin kullanılacağı, bulguların kiminle paylaşılacağı. Sonra ekip kurulur — yalnızca güvenlik uzmanları değil, alan uzmanları da (hukuk, sağlık, dil, kültür), çünkü "zarar"ın ne olduğu alana göre değişir ve tek bir ekibin kör noktaları vardır.

Bulgular yazılı raporlanır, ciddiyetine göre sıralanır, sorumlu ekibe iletilir ve düzeltmeden sonra yeniden denenir. Kalıcı olanlar [[evals|değerlendirme]] setlerine çevrilir; böylece aynı zaafın geri gelmediği her sürümde otomatik ölçülebilir. Kurum içi çalışmanın yanına bağımsız uzmanlar ve [[bug-bounty|ödül programları]] da eklenebilir.

Klasik yazılım denetiminden bir farkı var: model davranışı olasılıksaldır. Aynı istek bir denemede reddedilip diğerinde kabul edilebilir. Bu yüzden tek bir deneme kanıt sayılmaz; tekrar ve istatistik gerekir.

## Dikkat

Red teaming bir yöntem listesi değil, bir çalışma disiplinidir; değerini yöntemin kendisi değil, bulgunun düzeltmeye dönüşmesi verir. Bulunan [[jailbreak|jailbreak]] ya da [[prompt-injection|prompt injection]] zaaflarının ayrıntısı, düzeltme yayılmadan kamuya açılmaz — sorumlu açıklama kuralları burada da geçerlidir.

Bir de sınırı var: red teaming ancak akla gelen saldırganı bulur. [[threat-model|Tehdit modelinin]] dışında kalan bir senaryo denenmemiş olur, dolayısıyla "red teaming yapıldı" ifadesi tek başına bir güvence değildir.
