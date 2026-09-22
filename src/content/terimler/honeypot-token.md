---
term: "Honeypot Token"
tr: ""
aliases: []
category: guvenlik
subcategory: "Kullanıcıyı hedef alan dolandırıcılıklar"
level: orta
short: "Alım işlemleri çalışan ama satışı sözleşme düzeyinde engellenen token; girmek serbesttir, çıkmak değildir."
related: [memecoin, rug-pull, contract-verification, decentralized-exchange-dex, smart-contract-audit]
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

Honeypot token, satın alınabilen ama satılamayan bir token'dır. Dışarıdan bakınca her şey olması gerektiği gibi görünür: fiyat yükseliyordur, işlemler akıyordur, grafik dolgundur. Sen satmayı denediğinde işlem geri alınır ve neden geri alındığını arayüz çoğu zaman söylemez.

Engel piyasada değil, token'ın kendi kodundadır. Yerleşik bir Türkçe karşılığı yok; güvenlikte "bal küpü" ifadesi başka bir şey için, saldırganı çekmek üzere kurulan tuzak sistemler için kullanılır.

## Benzetme

Ağzına huni takılmış bir şişe gibi. İçeri girmek kolaydır, huni geniştir ve tam da o yöne çalışır. Geri dönüş yolu yoktur — çünkü tuzağın hiçbir yerinde kilit yoktur, sadece tek yön vardır.

## Nasıl çalışır?

Bir [[erc-20|ERC-20]] token'ının transfer davranışını yazan taraf, token'ı çıkaran taraftır. Standart neyin yapılacağını söyler, kısıt koymayı yasaklamaz. Böylece transferin içine, kimin gönderebileceğine bakan bir koşul yerleştirilebilir.

Biçimleri farklıdır: satış yönündeki transferi tamamen reddeden kod, satışta bakiyenin neredeyse tamamını alan bir kesinti, yalnızca belirli adreslerin satabildiği bir liste, ya da sahibinin sonradan açıp kapatabildiği bir anahtar. Sonuncusu en sinsisidir; sözleşme ilk gün temiz davranır, kalabalık toplandıktan sonra ayar değişir.

## Dikkat

Küçük bir tutarla alıp hemen satmayı denemek yaygın bir kontroldür ama garanti vermez: kısıt, belirli bir eşiğin altındaki satışlara izin verecek şekilde de yazılabilir. Şunlar daha iyi çalışır:

- Sözleşme kodu doğrulanmamışsa uzak dur; kimsenin okuyamadığı kod hakkında kimse bir şey söyleyemez ([[contract-verification|kod doğrulama]]).
- Sahibin sonradan değiştirebileceği ayarlar varsa, bugün satabiliyor olman yarın da satabileceğin anlamına gelmez.
- İşlem geçmişinde yalnızca alışlar varsa ve neredeyse hiç satış yoksa, bunu talep sanma.
- Özel mesajla, yorum altından ya da sana "erken haber" olarak gelen sözleşme adresini alma.
- Tarama siteleri bu kontrolü otomatik yapar ama sonuçları kesin değildir; "temiz" çıkması bir garanti değil, tek bir veridir.
