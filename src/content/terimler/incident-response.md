---
term: "Incident Response"
tr: "Olay Müdahalesi"
aliases: ["olay müdahalesi"]
category: guvenlik
subcategory: "Temel kavramlar"
level: orta
short: "Bir saldırı ya da arıza sürerken izlenen plan: fark etme, sınırlama, haber verme ve onarma."
related: [post-mortem, pausable, circuit-breaker, monitoring, threat-model]
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

Olay müdahalesi, kötü bir şey olurken izlenen plandır. Konusu açığın nasıl oluştuğu değil, o an ne yapılacağıdır: kim karar verir, hangi düğmeye basılır, kullanıcılara ne söylenir. Planın değeri, olay başladığında hiç kimsenin "şimdi ne yapıyoruz" diye sormak zorunda kalmamasıdır.

## Nasıl çalışır?

**Fark et.** Olayların büyük kısmı önce dışarıdan görülür. [[monitoring|İzleme]] ve alarm eşikleri, kasadaki ani hareketi ve olağandışı çağrı kalıplarını haber vermek için vardır; haber kanallarının kime, hangi saatte ulaşacağı önceden belli olmalıdır.

**Sınırla.** İlk hamle sebebi bulmak değil, kanamayı durdurmaktır: riskli fonksiyonların durdurulması, yetkilerin geri çekilmesi, entegrasyonların kesilmesi.

**Kaydet.** Kim ne zaman ne yaptı, hangi işlem hangi blokta — sonradan toparlanamayacak bilgiler o an not düşülür.

**Haber ver.** Kullanıcı olayı önce senden duymalıdır ve mesajda mutlaka bir eylem bulunmalıdır: hangi onayı iptal etsin, neye dokunmasın.

**Onar ve yaz.** Düzeltme yayına girdikten sonra süreç bir [[post-mortem|post-mortem]] ile kapanır.

## Dikkat

Planı olay anında yazmaya başlamak en pahalı seçenektir. Kimin durdurma yetkisi olduğu, o kişiye gecenin üçünde nasıl ulaşılacağı, hangi eşikte durdurulacağı ve duyuruyu kimin yapacağı sakin bir günde kararlaştırılır — bu kararlar [[threat-model|tehdit modelinin]] doğal devamıdır.

İki araç sık karıştırılır. [[pausable|Duraklatma]] insan kararına bağlıdır: biri fark edecek, karar verecek ve basacaktır. [[circuit-breaker|Devre kesici]] ise önceden tanımlanmış bir eşik aşıldığında kimseyi beklemez. Gece yarısı gelişen bir olayda ikisi arasındaki fark dakikalarla ölçülür ve o dakikalar sonucun kendisidir.

Son olarak: müdahale tatbikat ister. Hiç denenmemiş bir durdurma fonksiyonunun gerçekten çalıştığını, o an öğrenmek istemezsin.
