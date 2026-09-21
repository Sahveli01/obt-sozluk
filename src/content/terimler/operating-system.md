---
term: "Operating System"
tr: "İşletim Sistemi"
aliases: ["işletim sistemi", "os"]
category: araclar
subcategory: "Geliştirme ortamı"
level: baslangic
short: "Donanım ile programlar arasında duran, belleği, işlemciyi, dosyaları ve izinleri paylaştıran temel yazılım."
related: [linux, wsl, shell, virtual-machine-bilgisayar]
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

İşletim sistemi, bilgisayarı açtığında ilk çalışan ve geri kalan her şeyi yöneten yazılımdır. Programlar donanıma doğrudan dokunmaz; "şu dosyayı aç", "şu kadar bellek ver", "ağa bağlan" gibi istekleri işletim sistemine iletir, o da sırayı, payı ve izni yönetir.

Üç büyük aile vardır: Windows, macOS ve [[linux|Linux]]. Üçü de aynı temel işleri yapar ama dosya yollarını yazma biçimleri, komutları ve izin modelleri farklıdır. Bir projenin "bende çalışmıyor" hikâyesinin altında çoğu zaman bu farklar yatar.

## Benzetme

Havalimanı kulesi gibi. Her uçak pistin boş olup olmadığını kendi kontrol etseydi hiçbiri güvenle inemezdi. Kule sırayı, pisti ve zamanı dağıtır; uçağı yine pilot uçurur. İşletim sistemi de programların yerine iş yapmaz, sadece hangisinin ne zaman neye erişeceğine karar verir.

## Dikkat

Bu farklar geliştirirken somut sorunlara dönüşür. Windows yollarında `\`, Unix tarafında `/` kullanılır; Windows dosya adlarında büyük-küçük harf ayrımı yapmazken Linux yapar. Bu yüzden betiklerde yol parçalarını elle birleştirmek yerine dilin yol modülü kullanılır.

Bir de "işletim sistemi = masaüstü görüntüsü" değildir. Gördüğün simgeler ve pencereler ayrı bir katmandır; sunucularda bu katman çoğu zaman hiç kurulmaz, sistem yalnızca [[shell|kabuk]] üzerinden kullanılır.
