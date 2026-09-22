---
term: "MoveVM"
tr: ""
aliases: []
category: akilli-sozlesmeler
subcategory: "Temeller"
level: ileri
short: "Move dilinde yazılmış sözleşmeleri çalıştıran; varlıkları kopyalanamayan ve kaybolamayan kaynaklar olarak ele alan sanal makine."
related: [move, resource-move, resource-oriented-programming, aptos, sui, virtual-machine-blockchain]
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

MoveVM, [[move|Move]] dilinde yazılmış modülleri çalıştıran sanal makinedir. Move, Meta'nın Diem projesi için geliştirildi; proje kapandı ama dil ve sanal makine açık kaynak olarak yaşamaya devam etti. Bugün [[aptos|Aptos]] ve [[sui|Sui]] gibi ağlar bu temelin üstüne kuruludur.

Ayırt edici fikir dilin tip sisteminde durur: bir token, üstünde aritmetik yapılan sıradan bir sayı değil bir **kaynaktır** ([[resource-move|resource]]). Kaynak kopyalanamaz ve sessizce yok edilemez; bir yerden alınıp mutlaka başka bir yere konulmak zorundadır.

## Nasıl çalışır?

Move kodu bayt koda derlenir ve zincire yüklenir. Yükleme anında **bayt kod doğrulayıcısı** devreye girer: modül zincire kabul edilmeden önce tip güvenliğini, kaynakların kopyalanıp çoğaltılmadığını ve referansların geçerliliğini denetler.

Bu denetimin derleyicide değil sanal makinede olması işin özüdür. Biri derleyiciyi atlayıp elle bayt kod üretse bile doğrulayıcıyı atlayamaz. [[resource-oriented-programming|Kaynak odaklı programlamanın]] güvencesi böylece dilin nezaketine değil, ağın kuralına dayanmış olur.

Yansıttığı tasarım tercihi şudur: bir bakiyeyi yanlışlıkla iki katına çıkarma ya da havadan var etme hatası, denetimle yakalanması gereken bir hata olmaktan çıkarılıp baştan ifade edilemez hâle getirilir.

## Dikkat

Kaynak güvenliği, sözleşmeni güvenli yapmaz. Yetkilendirme hatası, yanlış fiyat kaynağı ve kusurlu iş mantığı burada da aynen mümkündür. Tip sistemi bir varlığın yoktan yaratılmasını engeller; yanlış kişiye verilmesini engellemez.

Bir de Move'un tek bir ortak sürümü yoktur. Ağlar dili ve nesne modelini kendi ihtiyaçlarına göre değiştirmiştir; bir ağın modülü diğerinde olduğu gibi çalışmayabilir.
