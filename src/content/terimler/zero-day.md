---
term: "Zero-day"
tr: "Sıfırıncı Gün"
aliases: ["sıfırıncı gün", "0-day"]
category: guvenlik
subcategory: "Temel kavramlar"
level: orta
short: "Sahibinin henüz bilmediği, dolayısıyla düzeltmesi de bulunmayan güvenlik açığı."
related: [vulnerability, exploit, responsible-disclosure, incident-response, defense-in-depth]
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

Zero-day, sistemin sahibinin henüz haberdar olmadığı bir [[vulnerability|açıktır]]. Adı buradan gelir: sorunu öğrendiğinde onu düzeltmek için elinde sıfır gün vardır, çünkü açık zaten kullanılıyor olabilir.

Terim bazen açığın kendisi, bazen onu kullanan [[exploit]] için söylenir. İkisinde de vurgulanan şey aynıdır: savunan taraf hazırlıksızdır.

## Nasıl çalışır?

Bir açığın ömrü kabaca üç aşamadan geçer.

**Kimse bilmiyor.** Açık kodda durur, kimse fark etmemiştir. Risk vardır ama kullanılmıyordur.

**Biri biliyor, sahibi bilmiyor.** Zero-day aşaması budur. Bilgi tek taraftadır ve bu aşamanın ne kadar sürdüğünü kimse ölçemez, çünkü sayacı başlatan olay gizlidir.

**Sahibi biliyor, düzeltme var.** Bu noktadan sonra açık artık zero-day değildir. Risk bitmez, yer değiştirir: artık soru düzeltmenin kullanıcılara ne kadar sürede ulaştığıdır.

Savunma tarafında ters bir durum vardır: bilmediğin bir açığı kapatamazsın. Bu yüzden zero-day'e karşı alınan önlemler açığa değil **sonucuna** bakar. Katmanlı savunma ([[defense-in-depth|derinlemesine savunma]]) bir katman çöktüğünde diğerlerinin durmasını sağlar; yetki ve tutar sınırları tek bir hatanın ne kadar zarar verebileceğini baştan kısar; izleme ve önceden yazılmış bir [[incident-response|olay müdahalesi]] planı ise fark etme süresini kısaltır.

## Dikkat

Her ciddi açık zero-day değildir. Ölçü açığın büyüklüğü değil, sahibinin bilip bilmediğidir; düzeltme çıktığı anda o etiket düşer.

Zero-day kelimesi kulağa çarpıcı geldiği için duyuruların da işine gelir. Oysa gerçekte yaşanan kayıpların önemli bir kısmı kimsenin bilmediği açıklardan değil, bilinip kapatılmayan açıklardan gelir: yayımlanmış bir düzeltmeyi uygulamamak, savunma açısından açığı hiç bilmemekten farksızdır — üstelik bu kez karşı taraf ne arayacağını da bilir ([[responsible-disclosure|sorumlu açıklama]] sonrası ayrıntılar yayımlanır).
