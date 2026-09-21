---
term: "LangChain"
tr: ""
aliases: ["lang chain"]
category: yapay-zeka
subcategory: "Ajanlar ve araçlar"
level: orta
short: "Dil modeli uygulamaları kurmak için kullanılan açık kaynak çerçeve; model çağrılarını, araçları ve veri akışını birleştirir."
related: [ai-agent, retrieval-augmented-generation-rag, llm-api, framework, vector-database]
disambiguation: []
tags: []
status: taslak
reviewedBy: []
dateSensitive: true
sources: []
added: 2026-09-21
updated: 2026-09-22
---

## Nedir?

LangChain, dil modeli uygulamaları kurmak için kullanılan açık kaynak bir yazılım [[framework|çerçevesidir]]. Model çağrılarını, prompt şablonlarını, dış araçları ve veri kaynaklarını ortak arayüzler altında toplar. Python ve JavaScript sürümleri vardır.

## Nasıl çalışır?

Temel fikir soyutlamadır. Farklı sağlayıcıların modelleri aynı arayüzle çağrılır, böylece sağlayıcı değiştirmek kodun yalnızca küçük bir bölümünü etkiler. Bunun üzerine sık ihtiyaç duyulan parçalar gelir: belge yükleyiciler ve parçalayıcılar, [[vector-database|vektör veritabanı]] bağlayıcıları, [[retrieval-augmented-generation-rag|RAG]] akışları, araç tanımları, konuşma belleği ve adımları birbirine bağlayan zincir ya da graf yapıları.

Proje çevresinde [[ai-agent|ajan]] çalıştırma ve çalışmayı izleme için ayrı bileşenler de bulunur; kapsam yazıldığı tarih itibarıyla değişmeye devam ediyor.

## Dikkat

Soyutlama iki yönlü çalışır. Başlangıçta çok iş kazandırır; sorun çıktığında hatanın senin kodunda mı çerçevenin katmanlarında mı olduğunu bulmak zorlaşır ve modele giden metnin tam hâlini görmek fazladan çaba ister.

Karar basit bir ölçüye bağlanabilir: tek model çağrısı ve birkaç satır mantık yetiyorsa doğrudan sağlayıcının API'sini çağırmak sade kalır; birden çok kaynağı, adımı ve yeniden denemeyi olan işlerde hazır parçalar zaman kazandırır. Ekosistem hızlı değiştiği için sürümler arasında arayüz değişiklikleri görülebilir.
