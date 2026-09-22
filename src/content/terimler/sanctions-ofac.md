---
term: "Sanctions (OFAC)"
tr: "Yaptırımlar"
aliases: ["ofac"]
category: piyasa
subcategory: "Regülasyon"
level: orta
short: "Belirli kişi, kurum veya adreslerle finansal ilişkiyi kısıtlayan devlet kararları; ABD'de bu listeleri OFAC tutar."
related: [aml, chain-analysis, mixer, centralized-exchange-cex, dust]
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

Yaptırım, bir devletin ya da devletler topluluğunun belirli kişi, kurum, ülke veya faaliyetlerle ekonomik ilişkiyi kısıtlama kararıdır. ABD'de bu listeleri hazırlayan ve uygulayan birim, Hazine Bakanlığı'na bağlı OFAC'tir (Office of Foreign Assets Control). Kripto konuşulurken "yaptırım" çoğu zaman bu listeler anlamında kullanılır, çünkü ABD dolarına ve ABD merkezli hizmetlere erişim geniş bir alanı etkiler.

Kripto açısından yeni olan yön şudur: listelere yalnızca kişi ve kurum adları değil, tek tek zincir üstü adresler de girebilir. Bir adres listelendiğinde, o adresle ilişki kurmanın düzenlenmiş kuruluşlar açısından ne anlama geldiği listeyi yayımlayan otoritenin kurallarına bağlıdır.

## Nasıl çalışır?

Düzenlenmiş kuruluşlar müşterilerini ve işlem karşı taraflarını bu listelere karşı tarar. Zincir tarafında tarama işini [[chain-analysis|zincir analizi]] araçları yapar: adresler etiketlenir, bir fonun listelenmiş bir adresle kaç adım uzaklıkta olduğu ölçülür.

Burada mimari bir ayrım vardır. Zincirin kendisi kimseden izin almaz; bir düğüm işlemi kuralına uyuyorsa kabul eder. Kısıtlama pratikte kenarlarda uygulanır — borsalarda, saklama hizmetlerinde ve web arayüzlerinde. Bu yüzden bazı ön yüzler belirli adreslerden gelen bağlantıyı reddederken, aynı işlem protokol düzeyinde teknik olarak mümkün olmaya devam edebilir. Açık kaynaklı yazılımın ve [[mixer|karıştırıcı]] gibi araçların bu tabloda nereye düştüğü, yazıldığı tarih itibarıyla hukuki tartışması sürmekte olan bir başlıktır.

## Dikkat

Etiketler kesin hüküm değildir; veri sağlayıcıların ürettiği değerlendirmelerdir ve hata içerebilir. Bir adrese istenmeden küçük tutarlar gönderilebildiği için ([[dust|toz]] gönderimi) "bir adresin bir adresle teması" tek başına çok şey anlatmaz.

Hangi listenin kimi bağladığı; kişinin bulunduğu ülkeye, hizmetin yerleşik olduğu yere ve zamana göre değişir. Listeler sık güncellenir, adresler eklenir ve çıkarılır. Bu sayfa belirli bir varlık, adres ya da hizmet hakkında bir sonuç ifade etmez.
