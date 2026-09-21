---
term: "Classification"
tr: "Sınıflandırma"
aliases: ["sınıflandırma"]
category: yapay-zeka
subcategory: "Temeller"
level: baslangic
short: "Bir örneği önceden belirlenmiş, sınırlı sayıda kategoriden birine yerleştirme işi."
related: [regression, supervised-learning, label, accuracy, precision-and-recall]
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

Sınıflandırma, bir örneğin önceden belirlenmiş kategorilerden hangisine girdiğine karar vermektir: bir mesaj istenmeyen mi değil mi, bir fotoğraftaki hayvan hangi tür, bir başvuru üç risk düzeyinden hangisine denk geliyor. Seçenekler sayılıdır ve baştan bellidir.

Bu bir [[supervised-learning|denetimli öğrenme]] işidir; model [[label|etiketli]] örneklerle eğitilir. Çıktısı genellikle kesin bir karar değil, her kategori için bir güven değeridir. Kararı, bu değerlere bir eşik koyarak sen verirsin — eşiği yükseltmek yanlış alarmı azaltır ama gözden kaçanı artırır.

## Benzetme

Mektupları posta kutularına ayırmak gibi. Duvarda sınırlı sayıda göz vardır ve her mektup bir göze girmek zorundadır. Üstündeki adres okunmuyorsa mektup yine bir göze konur; çünkü sistemde "bilmiyorum" diye bir kutu yoktur — birileri onu açıkça eklemedikçe.

## Dikkat

Kategoriler dengesizse tek bir başarı sayısı yanıltır. Örneklerin yüzde biri arızalıysa, hiçbir şeye arızalı demeyen bir model yüksek [[accuracy|doğruluk]] verir ve hiçbir işe yaramaz. Bu yüzden sınıflandırmada [[precision-and-recall|kesinlik ve duyarlılık]] gibi ölçütlere birlikte bakılır.

Kategori kümesinin kendisi de bir tasarım kararıdır. Gerçek dünyada araya düşen örnekler vardır; onlara bir yer açılmazsa model onları zorla bir kutuya koyar.
