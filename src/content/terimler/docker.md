---
term: "Docker"
tr: ""
aliases: []
category: araclar
subcategory: "Derleme ve dağıtım süreci"
level: orta
short: "Uygulamayı bağımlılıklarıyla birlikte paketleyip her makinede aynı şekilde çalıştırmayı sağlayan konteyner aracı."
related: [container, docker-image, environment, virtual-machine-bilgisayar, ci-cd]
disambiguation: []
tags: []
status: taslak
reviewedBy: []
dateSensitive: true
sources: []
added: 2026-09-21
updated: 2026-09-22
---

## Nedir?

Docker, bir uygulamayı çalışması için gereken her şeyle — kütüphaneler, ayarlar, çalışma zamanı — birlikte paketleyip bu paketi tek komutla çalıştırmayı sağlayan araçtır. Paketin tarifi bir metin dosyasında (Dockerfile) durur, tariften üretilen şablona [[docker-image|imaj]], imajdan başlatılan çalışan kopyaya [[container|konteyner]] denir. Docker bir ürün adıdır, çevrilmez.

Çözdüğü sorun tanıdıktır: kodun senin bilgisayarında çalışıp sunucuda çalışmaması. Uygulamanın ihtiyaç duyduğu [[environment|ortam]] imajın içine yazıldığı için aynı imaj dizüstü bilgisayarda da sunucuda da aynı davranır.

## Nasıl çalışır?

Docker, tarif dosyasındaki adımları sırayla uygulayıp katman katman bir imaj üretir, sonra bu imajı işletim sisteminin yalıtım özelliklerini kullanarak ayrı bir süreç olarak başlatır. Üretilen imajlar bir kayıt deposuna yüklenip başka makinelerde indirilebilir; [[ci-cd|CI/CD]] hatlarının çoğu çıktısını bu biçimde taşır.

Bu işi yapan tek araç Docker değildir: Podman, containerd ve benzerleri aynı açık imaj biçimini kullanır, yani bir imajı üreten araçla onu çalıştıran araç farklı olabilir. Yazıldığı tarih itibarıyla Docker en sık karşılaşılan seçenek; hangisinin kullanılacağı genelde işletim sistemine, kurumun lisans koşullarına ve aracın yönetici hakkı isteyip istemediğine göre belirlenir.

## Örnek

```bash
docker run --rm -p 8080:80 nginx
```

Bu satır nginx imajını indirir, ondan bir konteyner başlatır, konteynerin 80 numaralı portunu makinenin 8080 portuna bağlar ve konteyner durduğunda kendisini siler. Komut PowerShell'de de bash'te de aynıdır.

## Dikkat

Docker her işin çözümü değildir; tek bir betik çalıştıracaksan kurulum yükü kazancından büyük olabilir. Konteynerin içine yazılan dosyalar konteyner silindiğinde kaybolur, kalıcı veri için dışarıda bir alan bağlaman gerekir. Gizli anahtarları da imajın içine gömme: imajı indiren herkes onları okuyabilir.
