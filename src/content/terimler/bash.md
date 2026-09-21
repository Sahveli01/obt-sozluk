---
term: "Bash"
tr: ""
aliases: ["bourne again shell"]
category: araclar
subcategory: "Geliştirme ortamı"
level: orta
short: "Unix dünyasının yaygın kabuğu; komut çalıştırmanın yanında betik yazmaya elverişli küçük bir dil de içerir."
related: [shell, terminal, linux, wsl, powershell]
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

Bash (Bourne Again Shell), 1989'da GNU projesi için yazılmış bir [[shell|kabuk]]tur. Linux dağıtımlarında yaygın olarak varsayılan kabuktur ve kurulum belgelerinin çoğu bash komutlarıyla yazılmıştır: bir projenin README'sinde gördüğün `./scripts/build.sh` satırı büyük olasılıkla bash varsayar.

Bash'in izinden giden zsh, fish gibi başka kabuklar da vardır; macOS 2019'da varsayılan kabuğunu zsh'e çevirdi. Gündelik komutların çoğu bu kabuklarda aynı şekilde çalışır, ayrım daha çok betik yazarken ortaya çıkar.

## Nasıl çalışır?

Bash yazdığın satırı boşluklardan böler: ilk parça komut, kalanlar argüman. Komutu önce kendi iç komutları arasında arar (`cd`, `echo` gibi), bulamazsa [[path|PATH]] listesindeki klasörlerde aynı isimde çalıştırılabilir bir dosya arar.

Her komut metin üretip metin tükettiği için komutları boru işaretiyle (`|`) birbirine dizebilirsin: birinin çıktısı diğerinin girdisi olur. Komutları bir `.sh` dosyasına yazıp çalıştırmak da mümkündür; dosyanın ilk satırındaki `#!/usr/bin/env bash` ifadesi, dosyayı hangi kabuğun çalıştıracağını söyler.

## Örnek

```bash
for f in *.md; do
  echo "$f"
done
```

Bulunduğun klasördeki her `.md` dosyasının adını yazdırır. Bu sözdizimi bash'e özeldir. [[powershell|PowerShell]]'de aynı işi şu satır yapar:

```powershell
Get-ChildItem *.md | ForEach-Object { $_.Name }
```

## Dikkat

Windows'ta bash hazır gelmez; [[wsl|WSL]] ile ya da Git kurulumuyla gelen Git Bash üzerinden çalışır. Bir projenin kurulum adımları bash varsayıyorsa Windows'ta doğrudan uygulanamayabilir.

Bash betikleri hatayı sessizce yutar: bir komut başarısız olsa da sonraki satır çalışmaya devam eder. Bunu istemiyorsan betiğin başına `set -e` yazılır.
