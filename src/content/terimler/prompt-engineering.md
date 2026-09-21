---
term: "Prompt Engineering"
tr: ""
aliases: []
category: yapay-zeka
subcategory: "Prompt ve kullanım"
level: orta
short: "Modelden istikrarlı sonuç almak için prompt'u deneyerek, ölçerek ve düzelterek geliştirme işi."
related: [prompt, context-engineering, few-shot-prompting, system-prompt, evals]
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

Prompt engineering, [[prompt]] metnini sezgiyle değil sonuçlara bakarak geliştirme uğraşıdır. Aynı soruyu iki farklı biçimde sorduğunda modelin iki farklı kalitede cevap vermesi bu işin var olma sebebidir. "Prompt mühendisliği" diye çevrildiği oluyor ama yerleşik değil; burada İngilizcesi bırakıldı.

Bir meslek ya da kariyer vaadi olarak sunulduğu çok oldu. Gerçekte bu, yazılımda test yazmaya benzeyen sıradan bir beceridir: kimse sadece bunu yapmaz, ama modelle çalışan herkes biraz bilmek zorundadır.

## Nasıl çalışır?

İşe yaradığı tespit edilmiş birkaç basit hamle var ve hepsinin ortak mantığı aynı: modelin önündeki belirsizliği azaltmak.

- Görevi ve başarı ölçütünü açıkça yaz; "iyi bir özet" yerine "en fazla üç madde, her madde tek cümle".
- Çıktının biçimini söyle, gerekiyorsa şemaya bağla ([[structured-output|yapılandırılmış çıktı]]).
- Biçim katıysa birkaç çözülmüş örnek koy ([[few-shot-prompting|few-shot]]).
- Sabit kuralları her seferinde tekrarlamak yerine [[system-prompt|sistem prompt'una]] taşı.
- Modele adım adım ilerleyeceği bir alan bırak ([[chain-of-thought|düşünce zinciri]]).

Asıl mühendislik kısmı ölçmedir: küçük bir test kümesi kur, bir değişiklik yap, aynı testleri tekrar çalıştır ve isabet oranını karşılaştır ([[evals|eval]]). Tek bir güzel cevap kanıt değildir.

## Dikkat

Sihirli kalıp yoktur. Bir modelde işe yarayan bir cümle başka bir modelde ya da aynı modelin yeni sürümünde etkisiz kalabilir; bu yüzden prompt'ları da kod gibi sürümlemek gerekir.

Prompt'u iyileştirmek tek başına yetmediğinde sorun genelde metinde değil, modele gönderilen bağlamın tamamındadır; o zaman konu [[context-engineering]] olur.
