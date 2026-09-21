---
term: "GitHub Copilot"
tr: ""
aliases: ["gh copilot"]
category: yapay-zeka
subcategory: "Ajanlar ve araçlar"
level: orta
short: "GitHub'ın editör içinde kod öneren ve soruları yanıtlayan yapay zekâ aracı."
related: [copilot, code-completion, ide, github, ai-pair-programming]
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

GitHub Copilot, [[github|GitHub]]'ın geliştiriciler için sunduğu yapay zekâ aracıdır. Temel işlevi editör içinde yazmakta olduğun kodun devamını önermektir; sonraki sürümlerde sohbet, kod açıklama ve daha geniş düzenleme yetenekleri eklendi.

İlk hâli 2021'de önizleme olarak çıktı ve başlangıçta [[openai|OpenAI]] modelleriyle çalışıyordu; yazıldığı tarih itibarıyla farklı modeller arasından seçim yapılabiliyor.

## Nasıl çalışır?

[[ide|Editöre]] bir eklenti kurulur. Eklenti, imlecin çevresindeki kodu ve açık dosyalardan bir bölümü modele gönderir; model devamını üretir ve öneri gri metin olarak belirir. Sohbet kipinde ise seçtiğin kod parçası sorunla birlikte gönderilir.

Kurumsal kullanımda hangi verinin gönderildiğini ve saklanıp saklanmadığını belirleyen ayarlar vardır; genel olarak kod parçalarının sağlayıcının sunucusuna gittiğini varsaymak doğru olur.

## Dikkat

Öneriler eğitim verisindeki kalıplardan gelir. Eğitimde kullanılan açık kaynak kodun telifi konusunda tartışmalar ve davalar olmuştur; lisans açısından hassas projelerde çıkan kodun kaynağını sorgulamak gerekir.

İkinci nokta [[code-completion|kod tamamlamanın]] genel riskidir: öneri akıcıdır, bu doğru olduğu anlamına gelmez. Son olarak ürünün adıyla genel [[copilot]] kavramını karıştırmamak gerekir; ikisi aynı kelimeyi kullanır ama biri belirli bir üründür.
