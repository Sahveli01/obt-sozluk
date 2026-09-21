---
term: "VS Code"
tr: ""
aliases: ["visual studio code", "vscode"]
category: araclar
subcategory: "Geliştirme ortamı"
level: baslangic
short: "Eklenti ekosistemi üzerine kurulu, birçok dilde çalışan masaüstü kod editörü."
related: [code-editor, extension-eklenti, ide, cursor, terminal]
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

VS Code, masaüstünde çalışan bir [[code-editor|kod editörü]]dür. Kutudan çıktığı hâliyle sözdizimi renklendirme, dosyalar arası arama, sürüm kontrolü paneli ve gömülü bir [[terminal]] sunar. Gerisini [[extension-eklenti|eklentiler]] ekler: Rust, Solidity ya da TypeScript ile çalışacaksan ilgili eklentiyi kurarsın, editör o dili tanımaya başlar.

Ayarlar `settings.json` adlı bir dosyada tutulur. Bu dosyayı kopyalayarak aynı düzeni başka bir bilgisayarda kurabilir, projeye özel ayarları da depoya ekleyebilirsin.

Editör kendi çekirdeği üzerine başka ürünlerin kurulmasına da izin verir; [[cursor|Cursor]] bunlardan biridir.

## Örnek

Bir projeyi editörde açmanın en kısa yolu, klasörün içindeyken şunu yazmaktır:

```
code .
```

Hem bash'te hem PowerShell'de aynı çalışır; `.` "bulunduğum klasör" demektir. Komutun tanınması için `code` aracının kurulum sırasında [[path|PATH]]'e eklenmiş olması gerekir.

## Dikkat

Her eklenti açılış süresinden ve bellekten bir parça götürür; onlarca eklenti kurulu bir editör gözle görülür biçimde yavaşlar.

Eklentiler üçüncü taraf yazılımlardır ve editörün yetkileriyle çalışır: açtığın dosyaları okuyabilir, ağa çıkabilir. Yayıncısına ve indirme sayısına bakmadan kurma — popüler eklentilerin adına çok benzeyen sahte kopyalar görülmüştür.
