---
term: "Merge"
tr: "Birleştirme"
aliases: ["birlestirme"]
category: araclar
subcategory: "Git ve GitHub"
level: orta
short: "İki dalın geçmişini tek bir dalda toplayıp ikisindeki değişiklikleri bir araya getirme işlemi."
related: [branch, merge-conflict, rebase, pull-request-pr, main-branch]
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

Merge, bir [[branch|dalda]] yapılan işi başka bir dala katmaktır. Bulunduğun dal hedeftir; birleştirdiğin dalın [[commit|commit'leri]] ve değişiklikleri o hedefe eklenir. Günlük akışta en çok, bitmiş bir özellik dalının [[main-branch|ana dala]] katılması için kullanılır.

## Nasıl çalışır?

Git önce iki dalın ortak atasını bulur, sonra o ortak noktadan itibaren her iki tarafta ne değiştiğine bakar ve ikisini tek bir sonuçta toplar.

İki tipik durum vardır. Hedef dal ortak atadan beri hiç ilerlememişse Git yeni bir kayıt üretmeye gerek duymaz, sadece işaretçiyi öne taşır; buna fast-forward denir. Her iki tarafta da yeni commit'ler varsa iki ebeveynli bir birleştirme commit'i oluşturulur ve dallanmanın izi geçmişte görünür kalır.

Aynı dosyanın aynı satırları iki tarafta farklı değiştiyse Git seçim yapamaz ve işi durdurup [[merge-conflict|çakışmayı]] sana bırakır.

## Örnek

```
git switch main
git merge giris-formu
git branch -d giris-formu
```

Son komut birleşmiş dalı siler; birleşmemiş bir dalı silmeye çalışırsa Git uyarır.

## Dikkat

Merge geçmişi olduğu gibi korur: commit kimlikleri değişmez, dalın ne zaman açılıp ne zaman katıldığı görünür kalır. Bunun alternatifi olan [[rebase|rebase]] ise geçmişi düzleştirir. İkisinin hangi durumda seçildiği rebase maddesinde karşılaştırılıyor.
