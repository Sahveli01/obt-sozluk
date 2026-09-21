---
term: "Code Review"
tr: "Kod incelemesi"
aliases: ["kod incelemesi"]
category: araclar
subcategory: "Git ve GitHub"
level: orta
short: "Bir değişikliğin ana hatta girmeden önce başka bir geliştirici tarafından okunup değerlendirilmesi."
related: [pull-request-pr, diff, commit, static-analysis, merge]
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

Kod incelemesi, bir değişikliği yazandan başka birinin okumasıdır. Amacı yalnızca hata yakalamak değildir: kodun ekipteki başka insanlar tarafından da anlaşılabilir olduğunu doğrular ve projenin nasıl çalıştığı bilgisini tek kişiye hapsolmaktan kurtarır.

## Nasıl çalışır?

Pratikte çoğu zaman bir [[pull-request-pr|pull request]] üzerinden yürür. İnceleyen kişi [[diff|farkı]] okur, anlamadığı ya da riskli bulduğu satırların yanına yorum bırakır; yazan kişi ya düzeltir ya da neden böyle yaptığını açıklar. Sonunda inceleyen onay verir veya değişiklik ister.

İşin makine tarafı ayrıdır: biçim hataları, kullanılmayan değişkenler ve bilinen kalıp hatalar [[linter|linter]] ve [[static-analysis|statik analiz]] araçlarıyla otomatik yakalanır. İnsanın bakması gereken şeyler bunlar değildir: isimlendirmenin anlaşılırlığı, atlanan durumlar, güvenlik sonuçları, değişikliğin gerçekten çözmesi gereken sorunu çözüp çözmediği.

## Dikkat

İncelemenin konusu kişi değil değişikliktir. "Bunu neden böyle yazmışsın" yerine "bu durumda ne olur" biçiminde sorulan sorular hem daha az savunma üretir hem de daha çok hata bulur.

Onay, doğruluk garantisi değildir. İnceleyen de hata kaçırır; inceleme testin, testin de incelemenin yerine geçmez. İkisinin de kaçırdığı şeyler olur.

Küçük ve tek konulu değişiklikler daha iyi incelenir; bu yüzden inceleme kalitesi çoğu zaman [[commit|commit'lerin]] ve teklifin boyutuyla doğrudan ilgilidir.
