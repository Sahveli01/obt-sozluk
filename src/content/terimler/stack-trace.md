---
term: "Stack Trace"
tr: ""
aliases: ["yığın izi", "stacktrace", "hata izi"]
category: araclar
subcategory: "Test ve kalite"
level: orta
short: "Bir hata oluştuğu anda programın oraya hangi fonksiyon çağrıları üzerinden geldiğini gösteren liste."
related: [debugger, breakpoint, error-handling, exception, debugging]
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

Stack trace, bir hata oluştuğu anda programın oraya hangi fonksiyon çağrıları üzerinden geldiğini gösteren listedir. En üstte hatanın tam olarak patladığı yer durur; aşağı inildikçe o fonksiyonu kimin çağırdığı, onu da kimin çağırdığı görünür ve en altta programın başlangıcı kalır.

Bu sıra tesadüf değildir: çalışan bir program çağrılan fonksiyonları bir yığında tutar ([[stack-and-heap|stack]]), en son çağrılan en üsttedir. Hata anında bu yığının o anki fotoğrafı çekilir.

"Stack trace" Türkçeye yerleşmiş bir karşılıkla çevrilmiyor; "yığın izi" dendiği oluyor ama yaygın kullanım İngilizcesi.

## Nasıl çalışır?

Her satır genelde üç bilgi taşır: fonksiyonun adı, dosyanın yolu ve satır–sütun numarası. Okurken en yukarıdan başlanır, ama asıl aranan şey **senin yazdığın ilk satırdır**. En üstteki birkaç satır çoğu zaman bir kütüphanenin içidir ve hatanın sebebini değil belirtisini gösterir; kendi dosyanın adını gördüğün yer, düzeltmeye başlayacağın yerdir.

Tarayıcıda çalışan kod küçültüldüğünde (minify) izler okunmaz hâle gelir — fonksiyon adları tek harfe döner. Source map dosyaları izi kaynak koduna geri çevirir. Asenkron kodda ise zincir kopabilir: hata bir `await` sonrasında oluştuysa iz, o işi başlatan kodu göstermeyebilir.

## Örnek

Node.js'te tipik bir iz şöyle görünür:

```
TypeError: Cannot read properties of undefined (reading 'ad')
    at kullaniciAdi (/uygulama/src/kullanici.js:12:20)
    at profilYaz (/uygulama/src/profil.js:7:15)
    at main (/uygulama/src/index.js:3:3)
```

Hata `kullanici.js` dosyasının 12. satırında patlamış; oraya `profil.js` üzerinden gelinmiş. İlk bakılacak yer 12. satır, sorulacak soru ise "bu değer neden tanımsız geldi".

## Dikkat

Yığın izi hatanın *nerede* olduğunu söyler, *neden* olduğunu değil. Tanımsız değerin nereden geldiğini anlamak için çoğu zaman [[debugger|debugger]] ile geriye doğru gitmek gerekir.

Bir de izi yok etmemeye dikkat et. [[error-handling|Hata yakalarken]] orijinal hatayı yutup yerine "bir şeyler ters gitti" yazan bir mesaj koymak, elindeki tek ipucunu silmek demektir; yakalanan hatayı kayda geçirirken izini de birlikte geçir.
