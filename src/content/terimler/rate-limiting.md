---
term: "Rate Limiting"
tr: ""
aliases: ["rate limit"]
category: web
subcategory: "API'ler"
level: orta
short: "Bir servisin belirli bir sürede kabul edeceği istek sayısını sınırlaması."
related: [api, api-key, http-status-code, rpc-provider, denial-of-service-dos, cache]
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

Rate limiting, bir servisin belirli bir zaman diliminde kaç istek kabul edeceğini sınırlamasıdır: "dakikada 60 istek", "saniyede 10 istek" gibi. Sınır aşıldığında istek işlenmez ve genellikle `429 Too Many Requests` [[http-status-code|durum kodu]] döner.

Türkçede yerleşmiş tek bir karşılığı yok; "istek sınırlama" ve "hız sınırlama" denemeleri dolaşıyor ama terim çoğunlukla İngilizce anılıyor.

## Benzetme

Sınırlı sayıda üretilen bir üründe uygulanan "kişi başı en fazla iki adet" kuralı gibi. Kural kimseyi cezalandırmak için değil, ilk gelen üç kişi rafı boşaltmasın diye vardır. Sınır olmadığında kimin daha hızlı davrandığı belirleyici olur; sınır konduğunda herkese bir şey kalır.

## Nasıl çalışır?

Sunucu istekleri bir kimliğe göre sayar: [[api-key|API anahtarı]], IP adresi ya da kullanıcı hesabı. Yaygın yöntem "jeton kovası"dır — kovada sabit sayıda jeton vardır, her istek bir jeton harcar, kova belirli bir hızda yeniden dolar. Böylece kısa süreli yoğunluklara izin verilirken ortalama hız sabit tutulur.

Sınırın iki işi vardır: kaynağı kullanıcılar arasında paylaştırmak ve kasıtlı yüklenmeyi ([[denial-of-service-dos|DoS]]) pahalı hâle getirmek.

## Dikkat

Ücretsiz [[rpc-provider|RPC sağlayıcılarının]] planları büyük ölçüde bu sınırla tanımlanır. Bir [[dapp|dApp]] geliştirirken sınıra ilk çarpan şey genelde sayfa her açıldığında art arda atılan onlarca sorgudur.

Sınıra takılan bir uygulamanın yapmaması gereken şey isteği hemen tekrarlamaktır; bu, sıkışıklığı büsbütün büyütür. Doğrusu bekleme süresini her denemede katlayarak artırmak (üstel geri çekilme) ve cevabın `Retry-After` başlığına uymaktır. Değişmeyen veriyi tekrar tekrar istemek yerine [[cache|önbelleğe]] almak ise sınırı çoğu zaman tamamen gereksizleştirir.
