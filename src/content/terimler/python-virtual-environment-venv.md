---
term: "Python Virtual Environment (venv)"
tr: "Sanal Ortam"
aliases: ["venv", "sanal ortam", "virtualenv"]
category: araclar
subcategory: "Geliştirme ortamı"
level: orta
short: "Bir Python projesinin paketlerini sistemden ve diğer projelerden ayıran, klasör düzeyinde yalıtılmış ortam."
related: [python, package-manager, dependency, npm]
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

[[python|Python]] paketleri varsayılan olarak sisteme, yani bütün projelerin ortak kullandığı bir yere kurulur. İki proje aynı kütüphanenin farklı sürümlerini isterse ikisi aynı anda mutlu olamaz. Sanal ortam bu sorunu klasör düzeyinde çözer: projenin içinde kendi yorumlayıcısını ve kendi paket klasörünü taşıyan, genelde `.venv` adı verilen bir klasör oluşturursun.

JavaScript tarafında bu ayrım hazır gelir — [[npm]] paketleri zaten proje klasörüne kurar. Python'da ise ayrı bir adımdır ve atlanması yeni başlayanların klasik hatasıdır.

## Nasıl çalışır?

`venv`, projenin içine küçük bir Python kurulumu kopyalar. Ortamı "etkinleştirdiğinde" olan tek şey [[path|PATH]]'in geçici olarak değişmesidir: artık `python` ve `pip` komutları sistemdekini değil `.venv` içindekini çağırır. Kurduğun her [[package|paket]] o klasöre iner, sistem kurulumuna dokunmaz. Terminali kapattığında etkinleştirme sona erer, klasör yerinde durur.

Ortam klasörü sürüm kontrolüne eklenmez; paylaşılan şey paketlerin listesidir (`requirements.txt` ya da projenin kullandığı başka bir bildirim dosyası).

## Örnek

Ortamı oluşturmak iki sistemde de aynıdır:

```
python -m venv .venv
```

Etkinleştirme kabuğa göre değişir:

```powershell
.\.venv\Scripts\Activate.ps1
```

```bash
source .venv/bin/activate
```

## Dikkat

PowerShell'de etkinleştirme betiği "execution policy" ayarı yüzünden reddedilebilir; bu, betiğin bozuk olduğu anlamına gelmez, Windows'un betik çalıştırma kısıtıdır.

Python'u çağıran komutun adı sistemden sisteme değişir. Windows'ta `python` yazınca mağaza sayfası açılıyorsa Python kurulu değildir; kurulumu yapıp yeni bir terminal açman gerekir.
