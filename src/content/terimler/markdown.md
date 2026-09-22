---
term: "Markdown"
tr: ""
aliases: ["md"]
category: programlama
subcategory: "Diller ve formatlar"
level: baslangic
short: "Düz metne başlık, kalın, liste ve bağlantı gibi biçimleri birkaç işaretle ekleyen hafif işaretleme dili."
related: [html, readme, documentation, git]
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

Markdown, düz metne birkaç basit işaretle biçim eklemeye yarayan hafif bir işaretleme dilidir. Satır başındaki `#` başlık yapar, `**` arasına aldığın kelime kalınlaşır, `-` ile başlayan satırlar madde listesi kurar. Dosyayı işlemeden okusan bile anlaşılır kalması, tasarımın ana fikridir.

Yazılım dünyasında fiilî varsayılan yazı biçimidir. Bir deponun [[readme|README]] dosyası, proje [[documentation|belgeleri]], konu ve değişiklik önerisi açıklamaları, birçok not uygulaması Markdown kullanır. Düz metin olduğu için [[git|Git]] dosyayı satır satır karşılaştırabilir; kimin hangi cümleyi değiştirdiği görünür olur.

## Örnek

```markdown
## Cüzdan kurulumu

Kurtarma ifadeni **kimseyle paylaşma**.

1. Uzantıyı kur
2. Yeni cüzdan oluştur
```

Bu metin işlendiğinde `##` satırı bir `<h2>` başlığına, yıldızlı kelime [[html|HTML]]'in `<strong>` etiketine, numaralı satırlar da sıralı listeye dönüşür.

## Dikkat

Markdown'ın tek bir resmî tanımı yoktur; ortamlar birbirinden biraz farklı davranır. Tablo, dipnot ve görev listesi gibi özellikler temel Markdown'da bulunmaz, kullandığın aracın eklentisiyle gelir. Bu yüzden bir yerde düzgün görünen dosya başka bir yerde beklediğin gibi görünmeyebilir.
