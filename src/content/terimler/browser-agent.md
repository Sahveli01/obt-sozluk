---
term: "Browser Agent"
tr: "Tarayıcı ajanı"
aliases: ["tarayıcı ajanı"]
category: yapay-zeka
subcategory: "Ajanlar ve araçlar"
level: orta
short: "Web tarayıcısını kendisi sürerek sayfa gezen, form dolduran ve veri toplayan ajan."
related: [computer-use, ai-agent, sandbox, prompt-injection, browser]
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

Tarayıcı ajanı, bir web [[browser|tarayıcısını]] kendisi sürerek sayfa gezen, bağlantılara tıklayan, form dolduran ve veri toplayan [[ai-agent|ajandır]]. [[computer-use|Computer use]]'un tarayıcıya odaklanmış hâli sayılabilir; farkı, çoğu tarayıcı ajanının ekrana bakmak yerine sayfanın yapısını okumasıdır.

## Nasıl çalışır?

İki yaklaşım vardır. Birincisinde ajan sayfanın [[dom|DOM]] ağacını ya da erişilebilirlik ağacını metin olarak alır ve "şu bağlantıya tıkla" gibi yapısal eylemler üretir. İkincisinde ekran görüntüsüne bakıp konum verir. Yapısal yol daha hızlı ve daha kararlıdır; görsel yol, yapısı okunamayan arayüzlerde işe yarar.

Eylemler tarayıcı otomasyon araçlarıyla uygulanır. Ajan aslında bir test otomasyonu aracını, sabit bir senaryo yerine model kararlarıyla sürer.

## Örnek

Birkaç siteden aynı ürünün kamuya açık fiyat bilgisini toplayıp tabloya dökmek: ajan arama kutusuna yazar, sonucu açar, sayfadaki alanı okur, bir sonraki siteye geçer.

## Dikkat

Tarayıcıdaki oturum çerezleri ajanın kimliğidir. Kendi hesabınla açık bir tarayıcıyı ajana verirsen, ajan senin adına hareket eder. Bu yüzden ayrı bir tarayıcı profili kullanılır, gezilebilecek alan adları sınırlanır ve satın alma, silme, mesaj gönderme gibi adımlar insana bırakılır.

Sayfadaki metin veri değil talimat sanılabilir; [[prompt-injection|prompt enjeksiyonu]] tarayıcı ajanlarının en bilinen riskidir. Ayrıca sitelerin kullanım şartları ve `robots.txt` kuralları otomatik erişime sınır koyabilir; teknik olarak mümkün olması izinli olduğu anlamına gelmez.
