---
term: "Build Artifact"
tr: "Derleme çıktısı"
aliases: ["artifact", "derleme ciktisi"]
category: araclar
subcategory: "Derleme ve dağıtım süreci"
level: orta
short: "Build sonunda ortaya çıkan, test edilip sunucuya taşınan somut dosya paketi; kaynak kodun kendisi değil işlenmiş hâli."
related: [build, ci-cd, release, deployment, docker-image]
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

Build artifact, bir [[build|build]] işleminin sonunda elinde kalan somut çıktıdır: bir `dist/` klasörü, tek bir paket dosyası, bir [[docker-image|Docker imajı]] ya da bir sözleşme derlemesinden çıkan [[bytecode|bytecode]] ve arayüz tanımı. Türkçede "derleme çıktısı" denir.

İki özelliği onu sıradan bir dosyadan ayırır: hangi kaynaktan üretildiği bilinir (hangi commit, hangi sürüm) ve üretildikten sonra değiştirilmez.

## Benzetme

Sınavda teslim ettiğin cevap kâğıdı gibi. Yanındaki müsvedde sayfalar sende kalır, buruşur, atılır; kimse onlara bakmaz. Değerlendirilen, arşivlenen ve gerektiğinde itiraz için geri çağrılan tek şey teslim ettiğin kâğıttır.

## Nasıl çalışır?

[[ci-cd|CI/CD]] hattı build'i çalıştırır ve çıkan artifact'ı bir depoya yükler: paket kayıt defteri, imaj deposu ya da sürüm ekleri. Sonraki bütün adımlar — testler, [[staging|staging]] kurulumu, [[production|üretim]] kurulumu — aynı artifact'ı indirip kullanır, kodu yeniden derlemez. Böylece "denemede çalışıyordu, üretimde çalışmadı" ihtimali küçülür, çünkü iki ortam aynı dosyayı çalıştırmaktadır.

Artifact'lar sürüm etiketiyle saklandığı için bir sorun çıktığında bir önceki sürüme dönmek, yeniden derlemeyi beklemeden mümkün olur.

## Dikkat

Artifact'ı sürüm kontrolüne koymak yaygın bir hatadır: depo şişer, üstelik kaynakla çıktı birbirinden bağımsız değişmeye başlar ve hangi kodun hangi dosyayı ürettiği belirsizleşir. İkinci tuzak sızıntıdır; paketin içine yerel ayar dosyaları ya da gizli anahtarlar farkında olmadan girebilir. Bir artifact'ın içinde ne olduğuna en az bir kez açıp bakmak iyi bir alışkanlıktır.
