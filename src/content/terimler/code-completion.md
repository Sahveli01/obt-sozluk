---
term: "Code Completion"
tr: "Kod tamamlama"
aliases: ["kod tamamlama", "otomatik kod tamamlama"]
category: yapay-zeka
subcategory: "Ajanlar ve araçlar"
level: baslangic
short: "Editörün, yazmakta olduğun satırın devamını tahmin edip önermesi; yeni biçimi dil modeliyle çalışır."
related: [ide, github-copilot, ai-pair-programming, code-editor, coding-agent]
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

Kod tamamlama, editörün yazmakta olduğun satırın devamını tahmin edip önermesidir. Eski biçimi kurallara dayanırdı: elindeki nesnenin hangi metotları olduğunu bilir, onları listelerdi. Yeni biçimi bir dil modeliyle çalışır ve tek kelimeyi değil, bazen bir fonksiyonun tamamını önerir.

## Benzetme

Bir şarkının ilk dizesini mırıldandığında yanındakinin devamını getirmesi gibi. Çoğu zaman tutturur, çünkü kalıbı tanır. Ama benzer başlayan başka bir şarkıya kaydıysa, söylediği şey akıcı olduğu hâlde yanlıştır — ve akıcı olduğu için fark etmesi zordur.

## Dikkat

Öneri, kodun doğru olduğunu değil, benzer kodların böyle devam ettiğini gösterir. En sinsi hata akıcı ama yanlış öneridir: değişken adları uyar, biçim doğrudur, mantık yanlıştır.

İki alışkanlık işe yarar. Öneriyi kabul etmeden önce okumak, özellikle koşul ve sınır durumlarında. Bir de hangi aracın kodun hangi kısmını nereye gönderdiğini bilmek; gizli anahtar ya da kişisel veri içeren dosyalarda bu bir ayar meselesidir. [[github-copilot|GitHub Copilot]] bu işin bilinen örneklerinden biridir, benzerleri çoğu [[ide|editörde]] bulunur.
