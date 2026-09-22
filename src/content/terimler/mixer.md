---
term: "Mixer"
tr: "Karıştırıcı"
aliases: ["tumbler"]
category: guvenlik
subcategory: "Gizlilik"
level: orta
short: "Birden çok kullanıcının varlığını ortak bir havuzda toplayıp çıkışla girişin zincir üstündeki bağını koparmayı amaçlayan hizmet ya da sözleşme."
related: [anonymity-set, chain-analysis, privacy-coin, pseudonymity, aml]
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

Mixer, farklı kullanıcılardan gelen aynı türden varlıkları ortak bir havuzda toplayan ve sonra çekilen tutarın girişle zincir üstünde doğrudan bağlanamaz olmasını amaçlayan bir hizmet ya da akıllı sözleşmedir. İngilizcede "tumbler" da denir; Türkçe metinlerde karıştırıcı diye geçer.

Amaç "bu para şu adresten çıktı" zincirini kırmaktır — yani [[pseudonymity|takma adlılığın]] doğurduğu geriye dönük izlenebilirliği zayıflatmak.

## Benzetme

Sınıfta yapılan isimsiz bir oylama gibi. Herkes aynı kâğıda yazar, aynı şekilde katlar, aynı kutuya atar. Kutu sallandıktan sonra hangi pusulanın kime ait olduğu anlaşılmaz. Ama bu tamamen kutuya kaç kişinin attığına bağlıdır: üç kişilik bir oylamada isimsizlik diye bir şey yoktur. Bir de el yazısı meselesi vardır — pusulanın üstünde seni ele veren bir şey kaldıysa kutunun sallanması işe yaramaz.

## Nasıl çalışır?

Havuz, birbirinden ayırt edilemeyen mevduatlar üzerine kuruludur. Tasarımların çoğu bu yüzden sabit tutarlarla çalışır: herkes aynı miktarı yatırırsa çıkışta hangi mevduatın çekildiği belirsizleşir. Çekim sırasında kullanıcı, havuzdaki mevduatlardan birine sahip olduğunu — hangisi olduğunu söylemeden — kanıtlar; bunun için genelde [[zero-knowledge-proof-zkp|sıfır bilgi ispatı]] kullanılır.

Belirleyici olan şifreleme değil havuzun kendisidir. Aynı anda içeride ne kadar çok benzer mevduat varsa [[anonymity-set|anonimlik kümesi]] o kadar büyüktür; havuz boşsa yöntem ne olursa olsun gizlilik yoktur.

## Dikkat

Bağ her zaman kopmaz. Girişle çıkış arasında çok kısa süre geçmesi, alışılmadık bir tutar, havuzun o sırada seyrek olması ya da çıkan paranın hemen kimliği bilinen bir hesaba gönderilmesi bağı yeniden kurulabilir kılar. [[chain-analysis|Zincir analizi]] tam olarak bu kalıplar üzerinde çalışır.

Yazıldığı tarih itibarıyla bu araçların hukuki durumu ülkeye göre değişiyor ve zaman içinde değişmiştir; bazı yerlerde belirli hizmetlere yönelik kısıtlamalar gündeme gelmiş, bunlarla temas etmiş adreslere karşı uygulamalar geliştirilmiştir. Bir aracın geçmişte bir yerde sorunsuz kullanılmış olması bugün için bir şey söylemez. Bulunduğun ülkenin güncel kurallarına bakman gerekir.
