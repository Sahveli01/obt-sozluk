---
term: "PowerShell"
tr: ""
aliases: ["pwsh", "windows powershell"]
category: araclar
subcategory: "Geliştirme ortamı"
level: orta
short: "Windows ile gelen kabuk ve betik dili; komutlar arasında düz metin yerine alanları olan nesneler taşır."
related: [shell, bash, terminal, path, wsl]
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

PowerShell, Windows ile birlikte gelen bir [[shell|kabuk]] ve betik dilidir; macOS ve Linux'a da kurulabilir. Komutlarına cmdlet denir ve `Get-ChildItem`, `Set-Location` gibi fiil-isim kalıbıyla adlandırılır. Bu kalıp sayesinde daha önce görmediğin bir komutun adından ne yaptığını çoğu zaman tahmin edebilirsin.

Windows'ta geliştirme yapıyorsan varsayılan olarak karşına çıkan kabuk budur, dolayısıyla proje belgelerindeki [[bash]] komutlarını çevirmen gereken yer de burasıdır.

## Nasıl çalışır?

Asıl fark boruların içinden ne geçtiğidir. bash'te bir komutun çıktısı düz metindir; sonraki komut o metni satır satır ayrıştırmak zorundadır. PowerShell'de çıktı, alanları olan nesnelerdir: bir dosya nesnesinin `Name`, `Length`, `LastWriteTime` alanları vardır ve sonraki komut bu alanları doğrudan kullanır. Metni kesip biçmeye gerek kalmaz.

Unix'ten gelenler zorlanmasın diye birçok cmdlet'in kısa adı (alias) vardır: `ls`, `cat`, `pwd` sırasıyla `Get-ChildItem`, `Get-Content` ve `Get-Location` komutlarını çağırır. İsimler tanıdıktır ama seçenekleri farklıdır — bash'teki `ls -la` PowerShell'de hata verir.

## Örnek

```powershell
Get-ChildItem *.md | Select-Object Name, Length
```

Markdown dosyalarını ad ve boyut sütunlarıyla listeler. `Name` ve `Length` burada metinden ayıklanmış kelimeler değil, nesnenin alanlarıdır.

## Dikkat

İndirdiğin bir `.ps1` betiği çalışmayı reddedip "execution policy" hatası verebilir. Bu bir arıza değil, bilinçli bir güvenlik ayarıdır.

Windows'ta iki ayrı PowerShell bulunur: işletim sistemiyle gelen Windows PowerShell ve ayrıca kurulan, platformlar arası çalışan sürüm. Komutların çoğu ortaktır ama hepsi değil; bir örnek çalışmıyorsa hangisinde olduğuna bak.
