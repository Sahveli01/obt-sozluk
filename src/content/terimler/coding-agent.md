---
term: "Coding Agent"
tr: ""
aliases: ["kodlama ajanı", "kod ajanı"]
category: yapay-zeka
subcategory: "Ajanlar ve araçlar"
level: orta
short: "Kod tabanını okuyup değiştiren, komut çalıştıran ve çıktısına bakıp kendini düzelten ajan."
related: [ai-agent, ai-pair-programming, code-completion, claude-code, github-copilot]
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

Kodlama ajanı, bir kod tabanını okuyup değiştirebilen, komut çalıştırabilen ve çıktısına bakıp kendini düzeltebilen [[ai-agent|ajandır]]. [[code-completion|Kod tamamlamadan]] farkı döngüdür: tamamlama tek bir öneri üretir, kodlama ajanı düzenler, çalıştırır, hatayı görür ve yeniden dener.

Terimin yerleşmiş bir Türkçe karşılığı yok; "kodlama ajanı" tarif için kullanılıyor.

## Nasıl çalışır?

Araçları genellikle şunlardır: dosya arama, dosya okuma, dosya düzenleme, terminal komutu çalıştırma ve bazen [[git]] işlemleri. Tipik bir tur şöyle ilerler — isteği anlamak için depoda arama yapar, ilgili dosyaları okur, küçük bir değişiklik yazar, testleri çalıştırır, hata çıktısını okur, değişikliği düzeltir.

İnsan tarafındaki iş yer değiştirir: yazmaktan çok tanımlamaya, gözden geçirmeye ve sınır koymaya kayar.

## Örnek

"Bu fonksiyon boş listede hata veriyor; önce başarısız olan testi yaz, sonra düzelt" dediğinde ajan testi ekler, kırmızıya düştüğünü gösterir, kodu değiştirir ve testin geçtiğini gösterir.

## Dikkat

Testin geçmesi kodun doğru olduğunu değil, yazılan testin geçtiğini gösterir. Değişikliği okumadan kabul etmek, bedelini sonra ödediğin bir hız biçimidir.

İki alışkanlık işi kurtarır: her işi [[version-control|sürüm kontrolü]] altında yapmak, böylece değişiklik diff olarak okunabilir ve geri alınabilir olur; ve tek seferde küçük bir iş vermek. Ayrıca ajanın terminaldeki yetkisi senin yetkindir — üretim ortamına bağlı bir kabukta çalıştırmak ayrı bir karardır. [[code-review|Kod incelemesi]] ortadan kalkmaz, yeri değişir.
