---
term: "Shell"
tr: "Kabuk"
aliases: ["kabuk", "komut kabuğu"]
category: araclar
subcategory: "Geliştirme ortamı"
level: baslangic
short: "Komut satırına yazdığın cümleyi okuyup hangi programın çalışacağına karar veren yorumlayıcı program."
related: [terminal, bash, powershell, command-line-interface-cli, path]
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

Kabuk, komut satırına yazdığın cümleyi okuyup ne yapılacağına karar veren programdır. Dosyaları listeleyen komutu yazdığında ekrana listeyi basan kabuk değildir: kabuk o ismi alır, diskte o isimde çalıştırılabilir bir dosya arar, bulduğunu çalıştırır ve çıktısını [[terminal]] penceresine geri verir.

Kabuk aynı zamanda küçük bir programlama dilidir. Değişken tutar, bir komutun çıktısını diğerinin girdisine bağlar, koşul ve döngü yazmana izin verir. Bu yüzden elle tekrarladığın işleri bir dosyaya yazıp tek komutla çalıştırabilirsin.

Tek bir kabuk yoktur: Linux ve macOS'ta [[bash]] ve benzerleri, Windows'ta [[powershell|PowerShell]] yaygındır.

## Benzetme

Eski telefon santrallerindeki operatör gibi. Sen bir isim söylersin, o ismin hangi hatta karşılık geldiğini bilir ve seni bağlar. Konuşmayı operatör yapmaz, sadece doğru yeri bulup hattı açar.

## Örnek

```
echo $HOME
```

Bu satırda `$HOME` yazısını ev klasörünün yoluna çeviren, komutun kendisi değil kabuktur. Hem bash hem PowerShell bu değişkeni tanır ve kendi ev klasörünü yazdırır.

## Dikkat

Kabuk ile terminal aynı şey değildir; ikisinin ve CLI'ın farkı terminal sayfasında tek tek yazılı.

Kabuk komutlarını taşınabilir sanma. Aynı isimli komut başka bir kabukta farklı seçenekler bekleyebilir, çıktısı farklı biçimde gelebilir; bir bash betiği PowerShell'de olduğu gibi çalışmaz.
