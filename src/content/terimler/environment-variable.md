---
term: "Environment Variable"
tr: "Ortam değişkeni"
aliases: []
category: web
subcategory: "Backend"
level: orta
short: "Programa kodun içine yazılmadan dışarıdan verilen ayar değeri; her ortamda farklı olabilir."
related: [environment, secrets-management, api-key, deployment, gitignore]
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

Ortam değişkeni, programın kendi kodunda değil, çalıştığı ortamda tutulan bir ayardır. Veritabanı adresi, bir servisin anahtarı ya da uygulamanın hangi ağa bağlanacağı böyle verilir. Kod her yerde aynı kalır, değer [[environment|ortama]] göre değişir: kendi makinende test ağı, yayındaki sunucuda ana ağ.

## Nasıl çalışır?

Değerleri programı başlatan taraf verir. Geliştirirken bunlar genellikle proje kökündeki `.env` dosyasında durur ve program açılırken okunur; yayına alırken ise dağıtım platformunun ayar ekranına girilir, dosya hiçbir yere kopyalanmaz.

Kod tarafında okunuşu tek satırdır. İyi yazılmış bir program, eksik bir ayarla çalışmaya devam etmek yerine daha ilk saniyede durup söyler — yarım kalan ayarların en sinir bozucu yanı, hatanın çok sonra ve ilgisiz bir yerde ortaya çıkmasıdır.

## Örnek

```js
// .env dosyası (depoya girmez):
// RPC_URL=https://ornek-rpc.example/abc123

const rpcUrl = process.env.RPC_URL;
if (!rpcUrl) throw new Error('RPC_URL tanımlı değil');
```

## Dikkat

`.env` dosyası [[gitignore|.gitignore]]'a eklenir. Özel anahtar ve ücretli servis anahtarları koda gömülmez; çünkü depoya bir kez giren sır, dosyadan silinse bile geçmiş kayıtlarda durmaya devam eder ve sızan anahtarın tek çözümü yenisiyle değiştirmektir. Bu konunun bütünü [[secrets-management|sır yönetimi]] başlığındadır.

İkinci tuzak: arayüz tarafına gönderilen ortam değişkenleri gizli değildir. Derleme sırasında tarayıcıya giden pakete yazıldıkları için sayfayı açan herkes görebilir. Gerçekten gizli kalması gereken bir değer yalnızca sunucu tarafında okunmalıdır.
