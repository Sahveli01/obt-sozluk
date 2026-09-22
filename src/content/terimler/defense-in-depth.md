---
term: "Defense in Depth"
tr: "Derinlemesine Savunma"
aliases: ["derinlemesine savunma"]
category: guvenlik
subcategory: "Temel kavramlar"
level: orta
short: "Tek bir önlemin tutacağını varsaymayıp, biri çökünce diğeri devreye girecek bağımsız katmanlar kurmak."
related: [checks-effects-interactions, reentrancy-guard, principle-of-least-privilege, threat-model, pausable]
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

Derinlemesine savunma, güvenliği tek bir önleme yaslamamaktır. Her katman, kendinden öncekinin bir gün tutmayacağı varsayımıyla kurulur. Amaç saldırıyı imkânsız kılmak değil — bu hiçbir zaman garanti edilemez — tek bir hatanın tek başına felakete dönüşmesini engellemektir.

## Benzetme

Geminin su geçirmez bölmeleri gibi. Bölmeler gövdenin delinmeyeceği varsayımıyla değil, tam tersiyle tasarlanır: delinecek. O zaman delinen yer bir bölmeyle sınırlansın, su bütün gemiye yayılmasın. Hiçbir bölme deliği kapatmaz; hepsi birlikte geminin yüzmeye devam etmesini sağlar.

## Nasıl çalışır?

Bir sözleşmede katmanlar tipik olarak şöyle yığılır:

- **Doğru sıralama.** İşlemler, dışarıya çağrı yapmadan önce durumu güncelleyecek düzende yazılır ([[checks-effects-interactions|kontroller-etkiler-etkileşimler]]).
- **Kilit.** Düzen bir yerde bozulursa diye, tekrar girişi engelleyen bir kilit eklenir ([[reentrancy-guard|yeniden giriş kilidi]]). Biri düzen, diğeri kilittir; ikisi aynı işi yapmaz.
- **Yetki sınırı.** Bir açık bulunsa bile ulaşabileceği alan dardır ([[principle-of-least-privilege|en az yetki ilkesi]]).
- **Eşikler ve limitler.** Tek işlemde ya da tek günde çıkabilecek tutar sınırlıdır; zarar hızı düşer.
- **İzleme ve durdurma.** Olay fark edilir ve gerekirse akış kesilir ([[pausable|duraklatma]]).

Katmanların **bağımsız** olması şarttır. Hepsi aynı varsayıma dayanıyorsa — mesela hepsi aynı fiyat kaynağına güveniyorsa — sayısı kaç olursa olsun tek katman sayılır.

## Dikkat

Katman eklemek bedavaya gelmez. Her yeni parça kod demektir, kod da yeni hata yüzeyi demektir; gereksiz karmaşıklık bir noktadan sonra savunmayı zayıflatır. Katmanlar [[threat-model|tehdit modelindeki]] senaryolara göre seçilir, tek tek toplanarak değil.

Sık görülen bir yanılgı da şudur: aynı hata sınıfına bakan üç ayrı aracı çalıştırmak üç katman değildir. Üç göz aynı yere bakıyorsa, oraya bakmayan kimse yoktur — ama başka hiçbir yere de bakılmamıştır.
