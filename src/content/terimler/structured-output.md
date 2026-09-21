---
term: "Structured Output"
tr: "Yapılandırılmış çıktı"
aliases: []
category: yapay-zeka
subcategory: "Prompt ve kullanım"
level: orta
short: "Modelin serbest metin yerine, önceden tanımlanmış bir şemaya uyan veri üretmesi."
related: [tool-use-function-calling, json, hallucination, llm-api, prompt]
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

Modelin cevabı bir insana gidiyorsa serbest metin iyidir. Bir programa gidiyorsa felakettir: bugün "Aciliyet: yüksek" yazan model yarın "Bu bence acil görünüyor" der ve kodun çöker. Yapılandırılmış çıktı, modelden baştan tanımlanmış bir şemaya uyan veri istemektir; pratikte çoğunlukla [[json|JSON]].

## Nasıl çalışır?

İki farklı seviye var ve aradaki güvenilirlik farkı büyük. Birincisinde şemayı yalnızca [[prompt]] içinde tarif edersin; model çoğu zaman uyar, bazen uymaz. İkincisinde çalıştırma ortamı üretim sırasında biçimi zorlar: her adımda yalnızca şemaya uygun devam edebilecek seçenekler bırakılır, böylece bozuk çıktı üretilmesi engellenir. Hangisini kullandığını bilmek, kodunda ne kadar savunma yazacağını belirler.

İyi bir şema tasarımı serbest metin alanlarını azaltır: sabit seçenekli alanlar (enum) kullan, alan adlarını ve tiplerini açıkça ver, "bilinmiyor" için geçerli bir değer bırak ki model boşluğu uydurmayla doldurmasın.

## Örnek

```json
{
  "baslik": "Cüzdan bağlanmıyor",
  "kategori": "hata",
  "aciliyet": "yuksek",
  "etiketler": ["cuzdan", "giris"],
  "ozet": "Kullanıcı tarayıcı eklentisiyle bağlantı kuramıyor."
}
```

## Dikkat

Şemaya uymak doğru olmak değildir. Model kusursuz geçerli bir JSON içinde pekâlâ uydurma bir değer yazabilir ([[hallucination|halüsinasyon]]); biçim doğrulaması içeriği doğrulamaz. Gelen veriyi kendi tarafında yine de kontrol et.

Yakın akrabası [[tool-use-function-calling|tool use]]'dur: ikisi de modelden şemaya uygun veri ister, ama tool use bu verinin çalıştırılacak bir eylemi tarif ettiğini de söyler.
