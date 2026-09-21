---
term: "Computer Use"
tr: ""
aliases: ["bilgisayar kullanımı ajanı"]
category: yapay-zeka
subcategory: "Ajanlar ve araçlar"
level: orta
short: "Modelin ekran görüntüsüne bakıp fare ve klavye eylemleri üreterek bilgisayarı bir insan gibi kullanması."
related: [browser-agent, ai-agent, sandbox, multimodal, prompt-injection]
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

Computer use, bir modelin ekran görüntüsüne bakıp fare ve klavye eylemleri üreterek bilgisayarı bir insan gibi kullanmasıdır. Model uygulamanın [[api|API]]'siyle değil arayüzüyle konuşur: düğmeyi görür, yerini söyler, tıklanır.

Terimin yerleşmiş bir Türkçe karşılığı yok; "bilgisayarı kullanma" diye anlatılıyor ama ad olarak İngilizcesi geçiyor.

## Nasıl çalışır?

Döngü basittir. Ekranın görüntüsü modele verilir, model "şuraya tıkla", "şunu yaz", "aşağı kaydır" gibi bir eylem üretir, eylem uygulanır ve yeni görüntü alınır. Model bu yüzden [[multimodal|çok modlu]] olmalıdır; görüntüdeki yazıyı ve düzeni okuyabilmesi gerekir.

Yöntemin asıl gerekçesi erişimdir: arayüzü olan ama programlanabilir arayüzü olmayan eski yazılımlar, iç ağdaki masaüstü uygulamaları, dışarıya API vermeyen sistemler.

## Dikkat

Yavaş, pahalı ve kırılgandır. Arayüz değişince adımlar bozulur; API varsa API tercih edilir.

Güvenlik tarafında iki şey yapılır. Birincisi ortamı ayırmak: [[ai-agent|ajan]] ayrı bir kullanıcı hesabında ya da ayrı bir sanal makinede, [[sandbox|kum havuzunda]] çalıştırılır; kişisel oturumların açık olduğu masaüstüne sokulmaz. İkincisi geri alınamaz işlemleri insan onayına bağlamaktır.

Bir de şu var: ekranda görünen her metin modele girdi olarak gider. Bir sayfadaki ya da bir belgedeki "önceki talimatları unut" cümlesi de öyle. Bu, [[prompt-injection|prompt enjeksiyonunun]] görsel hâlidir ve modelin veri ile talimatı ayırt etmesi kolay değildir.
