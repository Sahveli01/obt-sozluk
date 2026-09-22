---
term: "Tokenized Treasuries"
tr: ""
aliases: []
category: defi
subcategory: "Gerçek dünya varlıkları"
level: orta
short: "Kısa vadeli devlet borçlanma araçlarının ve bunlara yatırım yapan fon paylarının zincirde token olarak temsil edilmesi."
related: [real-world-assets-rwa, tokenization, security-token, custodian, collateral, stablecoin]
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

Tokenized treasuries, kısa vadeli devlet borçlanma araçlarının — ve çoğu zaman bunlara yatırım yapan para piyasası fonlarının paylarının — zincirde token olarak temsil edilmesidir. [[real-world-assets-rwa|Gerçek dünya varlıkları]] başlığı altındaki yapılardan biridir.

Türkçede yerleşik bir karşılığı yok. "Treasuries" finans dilinde ABD Hazinesi'nin borçlanma araçlarını anlatan bir kalıptır; metinlerde "tokenize edilmiş hazine araçları" diye tarif ediliyor. Yapının kendisi başka ülkelerin araçları için de aynıdır.

## Nasıl çalışır?

Bu varlık sınıfının öne çıkmasının üç mekanik sebebi var. Nakit akışı ihraç anında bellidir: ödemenin tarihi de tutarı da yazılıdır, değerlemek için piyasa yorumuna gerek yoktur. Vade kısadır; faiz değiştiğinde fiyat da değişir ama vadeye kalan süre kısaldıkça bu etki küçülür, araç nakde yakın davranır. Ve çıkış nettir: vade geldiğinde ihraççı anaparayı öder, varlığın alıcı bulması gerekmez. Bu üçü birleşince [[collateral|teminat]] olarak kullanılabilecek, değeri saat saat zıplamayan bir varlık çıkar.

Yapı şöyle kurulur: zincir dışında bir [[custodian|saklayıcı]] menkul kıymeti tutar, bir yönetici alım satımı yürütür, zincirdeki sözleşme kimin ne kadar pay tuttuğunu yazar.

Getiri iki biçimde yansıtılır: ya cüzdandaki token adedi artar ([[rebase-token|rebase]]), ya adet sabit kalıp birim fiyatı yükselir. Bir protokole entegre ederken hangisi olduğunu bilmek gerekir — bakiyeyi bir kez kaydedip saklayan bir sözleşme rebase'i kaçırır, fiyatı artan token'da ise değeri okumak için bir [[oracle|oracle]] gerekir.

## Dikkat

Getiri zincirde üretilmez, yalnızca zincirde raporlanır. Kaynağı zincir dışı bir ödemedir; akıllı sözleşmenin kusursuz çalışması o ödemenin yapılacağını garanti etmez. İhraççı, saklayıcı, fon yöneticisi ve zincire veriyi yazan taraf ayrı ayrı birer güven noktasıdır.

Erişim çoğu zaman kimlik doğrulamasından geçmiş kullanıcılarla sınırlıdır ve token bir [[allowlist|izin listesiyle]] kısıtlıdır. Elindeki cüzdanla gidip alabileceğin bir şey olduğunu varsayma.

Bunu bir [[stablecoin|stablecoin]] gibi düşünmek de yanıltır. Stablecoin sabit bir birime çakılı kalmayı hedefler ve elde tutmak tek başına getiri üretmez; tokenize edilmiş bir hazine aracı ise bir yatırım aracının payıdır, getiri taşıdığı gibi ihraççı riskini de taşır.

Düzenleme ülkeye göre değişir. Böyle bir token birçok yerde [[security-token|menkul kıymet token'ı]] sayılır; yazıldığı tarih itibarıyla çerçeveler hâlâ oturuyor ve nitelendirme düzenleyicinin işidir.
