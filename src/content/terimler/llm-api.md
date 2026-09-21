---
term: "LLM API"
tr: ""
aliases: []
category: yapay-zeka
subcategory: "Prompt ve kullanım"
level: orta
short: "Bir dil modeline program üzerinden istek gönderip cevabını almayı sağlayan arayüz."
related: [api, api-key, token-pricing, streaming, tool-use-function-calling, rate-limiting]
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

Sohbet arayüzü insan içindir; LLM API program içindir. Kodun bir istek gönderir, cevabında üretilen metni ve o istekte kaç [[token-ai|token]] harcandığını alır. Yani [[api|API]] kavramının dil modellerine uygulanmış hâlidir; kısaltma İngilizce olduğu için terim de öyle kullanılır.

Aradaki fark yalnızca arayüz değil: API üzerinden çalışırken modele ne gönderileceğine tamamen sen karar verirsin. Geçmiş, talimat, belgeler — hepsini her istekte sen taşırsın, çünkü model istekler arasında hiçbir şey hatırlamaz.

## Nasıl çalışır?

Sağlayıcılar ayrıntıda ayrışsa da yazıldığı tarih itibarıyla ortak yapı şudur:

- Kimlik doğrulama, genellikle bir [[api-key|API anahtarı]] ile.
- Rol etiketli bir mesaj listesi: [[system-prompt|sistem talimatı]], kullanıcı mesajları, modelin önceki cevapları.
- Üretimi etkileyen ayarlar: rastgeleliği belirleyen [[temperature]], üretimin üst sınırını koyan [[max-tokens|max tokens]].
- İsteğe bağlı araç tanımları ([[tool-use-function-calling|tool use]]) ve çıktı şeması.
- Cevabın tamamlanmayı beklemeden parça parça akması için [[streaming]].

Alan adları, uç noktalar ve sürüm kuralları sık değiştiği için burada tek bir sağlayıcının biçimi verilmiyor; güncel hâli her zaman sağlayıcının kendi belgelerindedir.

## Dikkat

Bu bir ağ çağrısıdır: hata, zaman aşımı ve yeniden deneme senaryolarını baştan planla. İstek sayısı ve hacmi genellikle [[rate-limiting|hız sınırına]] tabidir, maliyet ise harcanan token'a göre işler ([[token-pricing]]) — körlemesine tekrar denemek hem para hem gecikme demektir.

Aynı istek aynı cevabı vermeyebilir; testlerini buna göre yaz. Anahtarı tarayıcıda ya da mobil uygulamanın içinde tutma, çağrıyı kendi sunucundan geçir.
