---
term: "Supply Chain Attack"
tr: "Tedarik zinciri saldırısı"
aliases: ["tedarik zinciri saldırısı"]
category: guvenlik
subcategory: "Kullanıcıyı hedef alan dolandırıcılıklar"
level: ileri
short: "Hedefe doğrudan değil, onun kullandığı paket, kütüphane ya da hizmet üzerinden bulaşan saldırı."
related: [dependency, package-manager, npm, semantic-versioning, front-end-attack-dns-hijack, secrets-management]
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

Tedarik zinciri saldırısı, hedefin kendisine değil, hedefin güvendiği bir şeye yapılır. Modern bir projede bu "şey" genellikle bir pakettir: senin yazmadığın, adını bile duymamış olabileceğin bir [[dependency|bağımlılık]].

Saldırının mantığı ekonomiktir. İyi korunan bir projeye doğrudan girmek zordur; o projenin kullandığı, tek kişinin boş vakitlerinde baktığı küçük bir pakete girmek çok daha kolaydır. İçeri giren kod, senin kodunla aynı yetkilerle çalışır.

## Nasıl çalışır?

Birkaç yaygın giriş noktası var. Bir paketin yayın hesabı ele geçirilebilir ve zararlı bir sürüm yayımlanabilir. Bakımı bırakılmış bir paketin devri istenebilir. Yaygın bir paketin adına benzeyen yeni bir paket yayımlanabilir ve yanlış yazılan her kurulum ona gider ([[package-manager|paket yöneticisi]], [[npm|npm]]).

Zincirin derinliği meseleyi büyütür: senin doğrudan kurduğun beş paket, arkasında yüzlerce paketi getirir. Hiçbirini sen seçmedin ama hepsi çalışıyor.

Kripto tarafında hedef genellikle iki şeydir. Geliştirici makinesinde ya da derleme ortamında duran gizli anahtarlar; ve son kullanıcının imzalayacağı işlemin, arayüz katmanında sessizce değiştirilmesi ([[front-end-attack-dns-hijack|front-end saldırısı]]).

## Dikkat

Bu hem geliştiricinin hem kullanıcının sorunudur ve iki taraf için de yapılacaklar farklıdır.

Geliştirici tarafında:

- Sürümleri sabitle ve kilit dosyasını depoya ekle; "en son sürüm" demek, senin görmediğin bir kodu otomatik kabul etmek demektir ([[semantic-versioning|sürüm numaralandırma]]).
- Güncellemeleri toplu değil, değişiklik notlarına bakarak al.
- Bağımlılık sayısını azalt; birkaç satırlık iş için paket ekleme.
- Anahtarları kod deposunda ve derleme günlüklerinde tutma ([[secrets-management|sır yönetimi]]).
- Üretim anahtarlarını geliştirme makinesinden ayır; sızan şey çoğu zaman anahtarın kendisi değil, ona erişebilen bir süreçtir.

Kullanıcı tarafında:

- Cüzdan uygulamasını ve tarayıcı eklentisini yalnızca resmî kaynaktan kur; benzer adlı kopyalar en sık bu noktada girer.
- "Sözleşme güvenli" cümlesine yaslanma; arayüz de bir yazılımdır ve onun zinciri ayrıdır.
- İmzalamadan önce ekranda ne yazdığını oku; değiştirilmiş bir arayüzü fark edebileceğin son yer cüzdanın onay penceresidir.
