---
term: "Long-Range Attack"
tr: ""
aliases: []
category: guvenlik
subcategory: "Ekonomik ve protokol saldırıları"
level: ileri
short: "Eski imza anahtarlarıyla geçmişin uzak bir noktasından başlayan alternatif bir zincir üretme girişimi."
related: [proof-of-stake-pos, weak-subjectivity, checkpoint, nothing-at-stake-problem, node-synchronization, finality]
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

[[proof-of-stake-pos|Pay ispatında]] blokları imzalayan doğrulayıcılar teminatlarını çekip ağdan ayrılabilir. Ayrıldıktan sonra eski imza anahtarları ellerinde kalmaya devam eder. **Long-range attack**, bu eski anahtarlarla geçmişin uzak bir noktasından başlayan, bambaşka ama kendi içinde tutarlı bir zincir üretmektir.

Bu zincir teknik anlamda sahte değildir: imzalar geçerli, bloklar birbirine bağlı, kural kontrolleri temiz. Eksik olan tek şey, ağın gerçekten o geçmişi yaşamış olmasıdır.

Terim İngilizce kullanılır; Türkçede yerleşmiş bir karşılığı yok.

## Benzetme

Bir miras paylaşılırken ortaya ikinci bir soy ağacının çıkması gibi. Kâğıt eski, isimler tutarlı, imzalar yerli yerinde; üstelik adı geçenlerin çoğu çoktan vefat etmiş, kimseye sorulamıyor. Hangi ağacın gerçek olduğunu kâğıda bakarak seçemezsin, çünkü ikisi de kusursuz görünür.

Seçebilmenin tek yolu, ailenin yıllardır hangisini kullandığını bilen birine sormaktır.

## Nasıl çalışır?

Farkı yaratan şey maliyettir. İş ispatında geçmişi yeniden yazmak, o geçmişin bütün işini baştan yapmayı gerektirir; harcanan enerji tekrar harcanmak zorundadır. Pay ispatında ise blok imzalamanın kendisi neredeyse bedavadır. Teminatı çoktan çekilmiş eski bir doğrulayıcı kümesi için geçmişi yeniden imzalamanın bir cezası da yoktur — ceza düzeneği ([[slashing|slashing]]) yalnızca hâlâ kilitli duran teminata uygulanabilir. [[nothing-at-stake-problem|Nothing-at-stake problemi]] bu boşluğun adıdır.

Üretilen zinciri ağda çalışan node'lara kabul ettiremezsin; onlar gerçek geçmişi zaten görmüştür. Hedef, hiçbir şey bilmeyenlerdir: ağa ilk kez katılan ya da uzun süre kapalı kalıp yeniden açılan bir node. Elinde yalnızca [[genesis-block|genesis bloğu]] ve kurallar varsa, iki zinciri kâğıt üstünde ayırt edemez.

## Dikkat

Savunma, "hangi zincirin doğru olduğuna yalnızca kurallara bakarak karar verilebilir" fikrinden vazgeçmekle başlar. Yeni katılan bir node'a başlangıç noktası olarak genesis değil, yakın geçmişten üzerinde uzlaşılmış bir referans verilir ([[checkpoint|checkpoint]]); node o noktanın öncesini tartışmaya açmaz.

Bunun adı [[weak-subjectivity|zayıf öznelliktir]] ve sistemin tamamen nesnel olmadığını açıkça kabul eder: ağa katılırken bir kez, dışarıdan bir bilgiye güvenmek zorundasın. O ilk adımdan sonra her şey yine nesnel kurallarla yürür ve yeterince derine gömülmüş bloklar geri alınamaz hâle gelir ([[finality|kesinlik]]).

Node işleten biri için karşılığı: uzun süre kapalı kalmış bir node'u güncel ve güvendiğin bir referans noktasıyla eşitle, rastgele bir kaynaktan gelen zincir verisiyle değil ([[node-synchronization|senkronizasyon]]).
