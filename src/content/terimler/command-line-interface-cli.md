---
term: "Command Line Interface (CLI)"
tr: "Komut Satırı Arayüzü"
aliases: ["cli", "komut satırı", "komut satırı arayüzü"]
category: araclar
subcategory: "Geliştirme ortamı"
level: baslangic
short: "Bir programın düğmeler yerine yazılı komutlarla kullanıldığı arayüz biçimi."
related: [terminal, shell, npm, git]
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

CLI, bir programın grafik arayüz yerine yazılı komutlarla kullanılmasıdır. Programın adını yazarsın, arkasına ne yapmasını istediğini ve ayarlarını eklersin; program işini yapıp cevabını metin olarak verir.

Bir komut satırı genelde üç parçadan oluşur. `npm install astro` satırında `npm` programın adı, `install` alt komut, `astro` ise argümandır. Çizgiyle başlayan `--save-dev` gibi parçalara seçenek (flag) denir. Geliştirici araçlarının çoğu — [[git]], paket yöneticileri, derleyiciler — önce CLI olarak yazılır, grafik arayüzü varsa sonra eklenir.

## Benzetme

Yemek tarifini yazmakla ocak başında düğmelere basmak arasındaki fark gibi. Bastığın düğme sırasını başkasına aktaramazsın; ama tarifi bir kere yazarsan yüz kere uygularsın, arkadaşına da gönderirsin. CLI'ın asıl gücü hız değil, yazdığın şeyin saklanabilir ve tekrarlanabilir olmasıdır.

## Örnek

```
node --version
```

Hem bash'te hem PowerShell'de aynı cevabı verir: kurulu Node.js sürümü. Buradaki `--version` bir seçenektir.

## Dikkat

CLI bir pencere değil, arayüz biçimidir. Gördüğün pencere [[terminal]], satırı yorumlayan program ise [[shell|kabuk]]tur; üçünün ayrımı terminal sayfasında açıklanıyor.

Grafik arayüz ile CLI birbirinin rakibi de değildir. Aynı işi iki arayüzle sunan araçlar vardır; hangisini kullanacağın işi bir kez mi yoksa her gün mü yapacağına bağlıdır.
