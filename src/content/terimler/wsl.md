---
term: "WSL"
tr: ""
aliases: ["windows subsystem for linux", "wsl2"]
category: araclar
subcategory: "Geliştirme ortamı"
level: orta
short: "Windows'tan çıkmadan gerçek bir Linux ortamı çalıştırmayı sağlayan Windows bileşeni."
related: [linux, operating-system, bash, terminal, powershell]
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

WSL (Windows Subsystem for Linux), Windows'un içinde bir [[linux|Linux]] dağıtımı çalıştırmanı sağlar. Kurduktan sonra [[terminal]] penceresinde `wsl` yazdığında kendini bir Linux kabuğunda bulursun: paket yöneticisiyle araç kurar, [[bash]] betiği çalıştırır, Linux dosya sistemiyle çalışırsın.

Bir projenin kurulum adımları Linux varsayıyorsa bu en az sürtünmeli yoldur; sanal makine kurmaya ya da bilgisayarı ikiye bölmeye gerek kalmaz.

## Nasıl çalışır?

WSL 2, hafif bir sanal makinede gerçek bir Linux çekirdeği çalıştırır; taklit değil, gerçek çekirdektir. İki tarafın dosyaları karşılıklı görünür: Windows diskine Linux içinden `/mnt/c/...` yoluyla, Linux dosyalarına da Dosya Gezgini'nden erişilir.

Burada kolay atlanan bir ayrıntı var: dosyaların hangi tarafta durduğu hızı belirler. Linux tarafından çalıştırdığın bir proje Windows diskinde (`/mnt/c`) duruyorsa dosya erişimi belirgin biçimde yavaşlar. Bu yüzden WSL içinde çalışacak projelerin Linux tarafındaki ev klasöründe tutulması önerilir.

## Örnek

Kurulu dağıtımları ve hangi WSL sürümüyle çalıştıklarını görmek için PowerShell'de:

```powershell
wsl --list --verbose
```

Linux kabuğuna geçmek için tek kelime yeter:

```powershell
wsl
```

## Dikkat

WSL iki dünyayı yan yana getirir ama tam kaynaştırmaz. Satır sonu karakterleri (`CRLF` ve `LF`), dosya izinleri ve yol biçimleri iki tarafta farklıdır. Git ile çalışırken satır sonu ayarını bilinçli seçmezsen, hiçbir şey yazmadığın hâlde bütün dosyalar değişmiş görünebilir.

Bir de WSL ile [[powershell|PowerShell]] aynı pencerede sırayla kullanılabildiği için, hangi tarafta olduğunu karıştırmak kolaydır; komut bulunamadığında önce buna bak.
