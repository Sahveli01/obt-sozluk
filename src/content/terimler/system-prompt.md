---
term: "System Prompt"
tr: ""
aliases: ["sistem promptu"]
category: yapay-zeka
subcategory: "Prompt ve kullanım"
level: baslangic
short: "Konuşmanın başında verilen ve sohbet boyunca geçerli kalan davranış, rol ve biçim talimatı."
related: [prompt, prompt-injection, guardrails, role-prompting, prompt-caching]
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

System prompt, kullanıcı mesajlarından ayrı bir yerde duran ve konuşmanın tamamı boyunca geçerli olan talimattır. Modelin üslubunu, neyi yapıp neyi yapmayacağını, çıktıyı hangi biçimde vereceğini ve kime seslendiğini burada tanımlarsın. Genellikle kullanıcıya gösterilmez ve her istekte modelin önüne yeniden konur. Türkçede "sistem promptu" deniyor ama sözcüğün kendisi çevrilmiş değil; İngilizcesi yerleşik.

## Benzetme

Kutu oyununun kural kitapçığı gibidir: masaya oturmadan bir kez okunur, sonra her hamle ona göre değerlendirilir. Hamleleri oyuncular yapar, ama sınırları kitapçık çizer.

## Dikkat

System prompt bir güvenlik duvarı değildir. Kullanıcı ya da modele getirilen bir belge, talimatı görmezden gelmeye ikna edecek metinler gönderebilir ([[prompt-injection]], [[jailbreak]]). Gerçek kısıtları koda, yetki kontrollerine ve [[guardrails|guardrail]]'lara koy; system prompt'a değil. Sır da saklamaz: içine anahtar ya da parola yazma.

İçeriği her istekte gönderildiği için sabit tutulması hem tutarlılığı artırır hem de [[prompt-caching|önbelleklemeyi]] kolaylaştırır.
