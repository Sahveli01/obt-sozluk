---
term: "Instruction Tuning"
tr: ""
aliases: ["talimat ayarı"]
category: yapay-zeka
subcategory: "Büyük dil modelleri"
level: orta
short: "Bir modele, metni sürdürmek yerine verilen isteği yerine getirmeyi öğreten eğitim aşaması."
related: [pretraining, fine-tuning, rlhf, base-model, system-prompt]
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

Instruction tuning, ön eğitimden çıkmış bir modele isteklere uymayı öğreten aşamadır. Ham model metni sürdürmekte ustadır; ona "şu metni üç maddede özetle" dediğinde özet yerine benzer istekler listesi yazmaya devam edebilir. Bu aşamada modele çok sayıda istek–iyi cevap çifti gösterilir ve "sorulan şeyi yap" biçimi öğretilir. Türkçede yerleşik bir karşılığı olmadığı için terim İngilizce kullanılır.

## Benzetme

İki kişilik bir oyunda kuralın değişmesi gibi. Önceki kural: "ben cümleye başlarım, sen en olası şekilde sürdürürsün." Yeni kural: "ben ne istersem sen onu yaparsın." Oyuncu aynı kişidir, bildikleri de aynıdır; değişen tek şey masadaki kuraldır. Bundan sonra "devam ettir" değil "yap" beklenir.

## Nasıl çalışır?

Teknik olarak bu bir [[fine-tuning|ince ayar]] türüdür; farkı verisindedir. Veri kümesi tek bir alana değil, çok çeşitli görev tiplerine yayılır: özetleme, sınıflandırma, çeviri, yeniden yazma, soru yanıtlama, kod üretme. Amaç modeli belli bir konuda uzmanlaştırmak değil, istek alma alışkanlığını her konuya genelleştirmesini sağlamaktır.

Bu aşamadan sonra model rollere de duyarlı hâle gelir: sistem talimatı, kullanıcı mesajı ve kendi cevabı arasındaki ayrımı tanır. [[system-prompt|Sistem talimatının]] işe yaramasının sebebi budur.

## Dikkat

Instruction tuning modelin bildiklerini artırmaz, davranışını düzenler. Bu aşamadan yeni bilgi beklemek yanlış olur; kazanılan şey biçimdir.

İkincisi, isteğe uymayı öğrenen model kötü niyetli isteğe de uymaya eğilimlidir. Cevapların yalnızca istenen biçimde değil, aynı zamanda tercih edilen içerikte olması için [[rlhf|RLHF]] gibi geri bildirim aşamaları ve ayrıca yürütülen güvenlik çalışmaları gerekir.
