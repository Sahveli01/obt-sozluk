---
term: "Linter"
tr: ""
aliases: ["linting", "lint"]
category: araclar
subcategory: "Test ve kalite"
level: baslangic
short: "Kodu çalıştırmadan okuyup şüpheli ya da riskli yazımları işaretleyen araç."
related: [formatter, type-checker, eslint, clean-code, ci-cd]
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

Linter, kodu çalıştırmadan okuyup şüpheli ya da riskli yazımları işaretleyen araçtır. Söylediği şey çoğu zaman "bu kod çalışmaz" değil, "bu kod çalışır ama muhtemelen istediğin bu değil"dir: hiç kullanılmayan bir değişken, hiçbir zaman dönülmeyen bir dal, unutulmuş bir hata yakalama.

Linter'ın kuralları vardır ve bu kurallar tek tek açılıp kapatılabilir. Ekip hangi alışkanlığı hata, hangisini uyarı sayacağına kendisi karar verir; karar bir yapılandırma dosyasında durur ve herkesin bilgisayarında aynı çalışır. Böylece tartışma her [[code-review|kod incelemesinde]] yeniden yapılmaz.

"Linter" Türkçeye çevrilmiyor; araç adı olarak İngilizce kullanılıyor, fiil hâli için "lint'lemek" deniyor.

## Benzetme

Yazı yazarken kelimenin altına çekilen dalgalı çizgi gibi. Cümle dilbilgisi olarak kurulabilir, metin okunur, kimse şikâyet etmez. Ama çizgi sana bir şeyin ters gittiğini yazıyı kimseye göstermeden önce söyler — düzeltip düzeltmemek yine sana kalır.

## Dikkat

Linter ile [[formatter|formatter]] farklı işler yapar: linter kodun **ne yaptığına**, formatter **nasıl göründüğüne** bakar. [[type-checker|Tip denetleyicisi]] ise üçüncü bir iş yapar ve değerlerin türlerinin birbirine uyup uymadığını kontrol eder. Üçü de kodu çalıştırmadan inceler, üçü de birbirinin yerini tutmaz.

Bir de linter'ın her uyarısı gerçek bir sorun değildir. Kuralı gereksiz buluyorsan kapatmak meşru bir seçimdir; asıl kötü olan, yüzlerce uyarıyı görmezden gelip bir gün aralarındaki gerçek uyarıyı kaçırmaktır.
