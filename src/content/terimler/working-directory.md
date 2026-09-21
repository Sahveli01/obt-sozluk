---
term: "Working Directory"
tr: "Çalışma Dizini"
aliases: ["çalışma dizini", "cwd", "current working directory"]
category: araclar
subcategory: "Geliştirme ortamı"
level: baslangic
short: "Kabuğun o an içinde bulunduğu klasör; göreli yollar ve çoğu komut hep buradan hesaplanır."
related: [shell, terminal, path, git, repository]
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

Her terminal penceresinin bir "bulunduğu yer" vardır: çalışma dizini. `npm install` yazdığında komut o klasörde çalışır, orada bir `package.json` arar. Doğru komutu yanlış klasörde yazmak yeni başlayanların en sık takıldığı yerdir; hata mesajı komutta değil, nerede durduğunda bir sorun olduğunu söyler.

Yolları iki türlü yazarsın. Mutlak yol kökten başlar (`C:\projeler\sozluk` ya da `/home/ali/sozluk`) ve nerede olursan ol aynı yeri gösterir. Göreli yol ise çalışma dizininden başlar: `src/index.ts`, "buradaki src klasörünün içindeki index.ts" demektir.

## Benzetme

"Soldaki kapı" tarifi gibi. Cümle her seferinde aynı ama nerede durduğuna göre başka bir kapıyı gösterir. [[shell|Kabuk]] da göreli yolları, o an durduğu klasöre göre okur.

## Örnek

Nerede olduğunu yazdırmak:

```
pwd
```

Hem bash'te hem PowerShell'de çalışır; PowerShell'de `Get-Location` komutunun kısa adıdır ve çıktıyı sütun başlığıyla gösterir. Bir üst klasöre çıkmak için iki ortamda da:

```
cd ..
```

## Dikkat

[[git|Git]] bağlamında "working directory" biraz farklı bir anlam taşır: orada çalışma dizini, [[repository|deponun]] o an diskte açık duran dosyalarını anlatır. Kabuktaki anlamı ise sadece "şu anda neredeyim" sorusunun cevabıdır.

Bir de editörden çalıştırılan [[terminal]] pencereleri genelde projenin kök klasöründe açılır; ayrıca açtığın terminal ise ev klasöründe başlar. Aynı komutun birinde çalışıp diğerinde çalışmaması çoğu zaman bundandır.
