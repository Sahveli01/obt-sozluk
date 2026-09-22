---
term: "AI Safety"
tr: "Yapay zekâ güvenliği"
aliases: ["ai safety", "yapay zeka guvenligi"]
category: yapay-zeka
subcategory: "Güvenlik ve değerlendirme"
level: orta
short: "Yapay zekâ sistemlerinin yol açabileceği zararları önceden bulmayı ve azaltmayı konu alan araştırma ve mühendislik alanı."
related: [alignment, ai-bias, red-teaming, evals, guardrails]
disambiguation: [safety-consensus]
tags: []
status: taslak
reviewedBy: []
dateSensitive: true
sources: []
added: 2026-09-21
updated: 2026-09-22
---

## Nedir?

AI safety, bir yapay zekâ sisteminin işe yaramasıyla değil, zarar vermemesiyle ilgilenen alandır. "Model bu görevi yapabiliyor mu" ayrı bir soru, "yapamadığında ya da yanlış yaptığında ne oluyor" ayrı bir sorudur; alan ikincisini çalışır.

Alanın içinde birbirinden farklı iki gündem var. Biri bugün ölçülebilen somut zararlara bakar: sistematik ayrımcılık ([[ai-bias|önyargı]]), yanlış bilgi ([[hallucination|uydurma]]), mahremiyet ihlali, kötüye kullanım. Diğeri daha yetenekli sistemlerin insan denetimine açık kalmasını, yani uzun vadeli kontrol sorununu ([[alignment]]) çalışır. İkisi de meşru araştırma gündemidir; araştırmacıların bir kısmı her ikisiyle birden uğraşır. Yazıldığı tarih itibarıyla alanda üzerinde uzlaşılmış tek bir öncelik sıralaması yoktur.

## Benzetme

Bir ilacın etkili olması ile güvenli olması ayrı sorulardır. Yan etkiler, doz aşımı ve başka ilaçlarla etkileşim ayrı ayrı çalışılır; bu çalışmayı yapan kişi, ilacı geliştiren kişiden farklı sorular sorar. Sorular farklı olduğu için yöntem de, takvim de farklıdır.

## Nasıl çalışır?

Güvenlik tek bir aşamaya sıkıştırılmaz, katmanlara yayılır: eğitim verisinin seçimi ve modelin eğitimi; yayın öncesinde ölçüm ([[evals|değerlendirme]]) ve kasıtlı zorlama ([[red-teaming|red teaming]]); çalışma anında konan sınırlar ([[guardrails|guardrail]]); yayın sonrasında izleme, olay raporlama ve kullanım politikası. Katmanlardan biri yanıldığında diğerleri hâlâ ayakta kalsın diye kurulan bu yapı, güvenlik mühendisliğindeki [[defense-in-depth|derinlemesine savunma]] mantığının aynısıdır.

## Dikkat

Tartışma çoğu zaman iki uca çekilir: "her şey felaketle bitecek" ve "tamamı abartı". İkisi de meseleyi basitleştirir; işin kendisi ölçüm, sınır ve sorumluluk tasarımıdır. "Güvenli model" de mutlak bir etiket değildir — güvenlik modelin tek başına bir özelliği değil, modelin hangi bağlamda, hangi yetkiyle ve kimin denetiminde çalıştığına bağlı bir sonuçtur.

Kelimenin konsensüsteki kullanımıyla ilgisi yoktur: orada [[safety-consensus|güvenlik]], ağın çelişkili iki sonucu birden kesinleştirmemesini anlatan teknik bir özelliğin adıdır.
