---
term: "Proof of Reserves"
tr: "Rezerv kanıtı"
aliases: ["proof of reserve"]
category: piyasa
subcategory: "Fiat ve saklama"
level: orta
short: "Bir kurumun elindeki varlıkları dışarıdan doğrulanabilir biçimde göstermesi; yükümlülüklerini göstermez."
related: [custodian, custody, merkle-tree, centralized-exchange-cex, bank-run, custodial-wallet]
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

Proof of reserves, başkalarına ait varlıkları tutan bir kurumun "elimde şu kadar var" iddiasını dışarıdan kontrol edilebilir hâle getirme girişimidir. İki ayrı soruyu ayırmak gerekir: kurumun ne kadar varlığı var (rezervler) ve ne kadar borcu var (yükümlülükler). Ödeme gücü ancak ikisi birlikte bilindiğinde anlaşılır; bu yayınların neredeyse tamamı ise yalnızca birincisiyle ilgilidir.

## Benzetme

Birinin telefon ekranındaki bakiyeyi gösterip "param var" demesi gibi. Gördüğün sayı doğrudur, ama o paranın ne kadarının başkasına borçlu olduğunu — hatta bir saat önce birinden ödünç alınıp alınmadığını — ekran söylemez.

## Nasıl çalışır?

Varlık tarafı görece kolaydır. Kurum kontrol ettiği adresleri açıklar ve o adreslerden imza atarak anahtarların kendisinde olduğunu gösterir; bakiyeler zaten zincirde herkese açıktır ([[block-explorer|blok gezgininden]] bakılabilir).

Yükümlülük tarafı zordur. Yaygın yaklaşım, bütün müşteri bakiyelerini bir [[merkle-tree|Merkle ağacına]] yerleştirip yalnızca kökünü yayımlamaktır: böylece her kullanıcı, kendi bakiyesinin toplama dahil edildiğini başkalarının bakiyesini görmeden [[merkle-proof|doğrulayabilir]]. Ama bu yöntem kurumun ağaca bütün borçlarını koyduğunu kanıtlamaz. Eksik bırakılan bir borç, dışarıdan bakan hiç kimseye görünmez.

## Dikkat

Yazıldığı tarih itibarıyla bu yayınların büyük bölümü varlık tarafını kapsar; yükümlülük tarafı ya hiç yoktur ya da kurumun kendi beyanına dayanır.

İki sınırı daha var. Birincisi, bir anlık fotoğraftır: varlıkların ertesi gün de yerinde durduğunu göstermez. İkincisi, ödünç alınan varlıkla geçici olarak şişirilebilir — kanıt anında başka bir yerden getirilen varlık, kanıt alındıktan sonra iade edilebilir.

Bu yüzden bir rezerv kanıtı denetlenmiş bir mali tablo ya da bir güvence değil, en iyi ihtimalle kısmi bir kanıttır. [[custodian|Saklamacı]] riskini görünür kılar, ortadan kaldırmaz.
