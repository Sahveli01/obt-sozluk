---
term: "Symbolic Execution"
tr: "Sembolik yürütme"
aliases: ["sembolik yürütme"]
category: guvenlik
subcategory: "Güvenlik test yöntemleri"
level: ileri
short: "Girdiyi somut bir değer yerine sembol olarak taşıyıp kodun hangi yollarının mümkün olduğunu hesaplatan analiz yöntemi."
related: [formal-verification, fuzzing, static-analysis, invariant-testing, smart-contract-audit]
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

Sembolik yürütme, kodu somut sayılarla değil sembollerle çalıştırır. Girdiye 5 ya da 1000 vermek yerine "x" der ve programı bu bilinmeyenle adım adım ilerletir. Bir `if` satırına gelindiğinde iki dal da açık kalır; araç her dalın altına o dala girilebilmesi için x'in sağlaması gereken koşulu yazar.

Böylece tek bir koşuda tek bir girdi değil, aynı yoldan geçen bütün girdiler birden denenmiş olur. [[fuzzing|Fuzzing]] milyonlarca örnekle arama yaparken sembolik yürütme örnek aramaz, yolun kendisiyle uğraşır.

## Benzetme

Bir kesirin hangi sayılarda tanımsız olduğunu bulmak gibi. Sayıları tek tek yerine koyup denemezsin; paydayı sıfıra eşitleyip çözersin ve cevabı bir hamlede alırsın. Deneme yöntemiyle bin sayı denesen de aradığın tam o sayıyı ıskalayabilirsin; denklemi çözdüğünde ıskalama diye bir şey kalmaz.

## Nasıl çalışır?

Araç ilerledikçe her dalda bir **yol koşulu** biriktirir: "x > 100 ve x % 2 == 0 ve y != 0" gibi bir koşullar yığını. Bu yığın her `if`, her `require`, her taşma kontrolünde uzar.

Sonra bir çözücüye sorulur: bu koşulları aynı anda sağlayan bir değer var mı? Yoksa o yol erişilemezdir, üstündeki kod hiçbir girdiyle çalışmaz. Varsa çözücü örnek bir değer üretir — ve bu değer, o yola ulaşan somut bir girdidir. Hatalı bir duruma (beklenmedik bir [[revert|revert]], bozulan bir koşul) giden yol için üretilen örnek, doğrudan elinde tuttuğun karşı örnektir.

Yöntem hem kaynak hem EVM bayt kodu üzerinde uygulanır; birçok [[formal-verification|biçimsel doğrulama]] düzeneğinin içinde bu motor çalışır.

## Dikkat

Sınır ölçeklenmede. Her dal, yol sayısını ikiye katlar; art arda birkaç koşul ve bir döngü, incelenecek yolları hızla milyonlara çıkarır. Buna yol patlaması denir ve döngü sayısı girdiye bağlıysa yol sayısı baştan sonsuzdur.

Araçlar bu yüzden sınır koyar: döngü belli sayıda açılır, analiz belli bir süre çalışır, o derinlikten sonrası bırakılır. Anlamı şudur: analiz çoğu zaman tamamlanmaz, kısmi kalır.

Kısmi sonucu tam sonuç gibi okumak buradaki asıl hatadır. "Araç bir sorun bulmadı" cümlesi, ancak aracın hangi yolları gezdiğini ve nerede durduğunu bildiğinde anlam taşır; çıktının bu kısmı genellikle raporun sonunda durur ve en çok o kısım okunmayı hak eder.
