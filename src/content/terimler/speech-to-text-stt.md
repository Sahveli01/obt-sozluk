---
term: "Speech-to-Text (STT)"
tr: "Sesten metne"
aliases: ["STT", "konuşma tanıma", "ASR"]
category: yapay-zeka
subcategory: "Büyük dil modelleri"
level: baslangic
short: "Konuşulan sesi yazıya çeviren sistemler."
related: [text-to-speech-tts, multimodal, natural-language-processing-nlp, model-ai, accuracy]
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

Sesten metne sistemleri konuşmayı yazıya çevirir; sesli not, altyazı üretimi ve sesli komut bunun üstüne kurulur. Sistem duyduğu sesleri harflere çevirmekle kalmaz, hangi kelimenin söylendiğine bağlama bakarak da karar verir: birbirine çok benzeyen sesler ancak cümlenin gerisinden ayırt edilir. Bu yüzden iş, hem ses işleme hem [[natural-language-processing-nlp|doğal dil işleme]] problemidir.

## Benzetme

Eski bir kaset kaydını deşifre etmeye benzer. Temiz kaydedilmiş yerleri neredeyse kusursuz yazarsın. Cızırtı arttıkça, iki ses üst üste bindikçe ve tanımadığın isimler geçtikçe hata oranı yükselir — üstelik anlaşılmayan yeri boş bırakmak yerine kulağına en yakın gelen kelimeyle doldurursun.

## Dikkat

Başarı tek bir sayıya sığmaz. Aynı sistem; kayıt kalitesine, aksana, konuşma hızına ve konunun teknikliğine göre çok farklı [[accuracy|doğruluk]] verir. Yazıldığı tarih itibarıyla az konuşulan diller ve şiveler belirgin biçimde daha zayıf desteklenir.

Çıktıyı ham kabul etmemek gerekir. Özel isimler, sayılar ve teknik terimler en sık bozulan yerlerdir; hukuk, sağlık ve resmî kayıt gibi alanlarda metni bir insanın karşılaştırması şarttır. Ters yöndeki iş [[text-to-speech-tts|metinden sese]] dönüşümüdür.
