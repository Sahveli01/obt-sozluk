---
term: "Layer 3"
tr: "Katman 3"
aliases: ["katman 3", "l3"]
category: olceklenme
subcategory: "Temeller"
level: ileri
short: "Güvenliğini doğrudan ana zincirden değil, araya giren bir Layer 2'den alan üst katman."
related: [layer-2, appchain, rollup, proof-aggregation, interoperability]
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

Layer 3, güvenliğini doğrudan bir ana zincirden değil, araya giren bir [[layer-2|Layer 2]]'den alan zincirdir. Mantık aynıdır: üstteki katman işlemleri kendi içinde işler, sonucu alt katmana yazar. Fark, alt katmanın kendisinin de bir üst katman olmasıdır.

İki gerekçeyle kurulur. Birincisi maliyet: alt katmanın blok alanı ana zincirinkinden ucuz olduğu için oraya yazmak daha az tutar, üstelik birden çok üst zincirin ispatı birleştirilip aşağıya tek seferde indirilebilir ([[proof-aggregation|ispat birleştirme]]). İkincisi özelleştirme: kendi kurallarını, ücret politikanı ve gizlilik davranışını belirleyebilirsin — bu yüzden çoğu Layer 3 tek bir uygulamaya ayrılmış bir [[appchain|appchain]] biçiminde kurulur.

## Nasıl çalışır?

Katman eklemek güvenliği artırmaz, uzatır. Bir Layer 3 kullanıcısının güvendiği şeylerin listesi üst üste binmiştir: en üstteki zincirin sıralayıcısı, ortadaki katmanın sıralayıcısı ve ispat mekanizması, en altta ana zincir. Zincirin herhangi bir halkası durduğunda üstteki halkalar da fiilen durur.

Çıkış yolu da iki duraklıdır: en üstten ortaya, ortadan aşağıya. Her durağın kendi bekleme süresi ve kendi itiraz mekanizması vardır; bunlar toplanır. Ortadaki katman seni sansürlerse ana zincire doğrudan başvurma imkânın, o katmanın böyle bir kapı bırakıp bırakmadığına bağlıdır.

## Dikkat

Terimin sınırları ekosistemden ekosisteme değişir: kimi tanımlar bir [[rollup|rollup]]'ın üstüne kurulan her zinciri Layer 3 sayar, kimi yalnızca ispatını alt katmana teslim eden yapıları.

Sayı büyüdükçe etiketin anlatım gücü de azalır. "Kaçıncı katman" sorusu yerine ikisini sormak daha bilgi vericidir: bu zincir güvenliğini kimden alıyor ve paramı hangi yoldan, ne kadar sürede geri çekerim? [[interoperability|Birlikte çalışabilirlik]] iddiaları da aynı soruların cevabıyla ölçülür.
