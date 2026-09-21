---
term: "pnpm"
tr: ""
aliases: ["performant npm"]
category: araclar
subcategory: "Geliştirme ortamı"
level: orta
short: "Paketleri merkezî bir depoda tutup projelere bağlayan, disk ve kurulum maliyetini azaltan JavaScript paket yöneticisi."
related: [npm, package-manager, node-js, dependency, monorepo]
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

pnpm, JavaScript projeleri için bir [[package-manager|paket yöneticisidir]]. Aynı `package.json` dosyasıyla çalışır ve komutları büyük ölçüde tanıdıktır (`pnpm install`, `pnpm add`, `pnpm run`). Ayrıldığı yer, paketleri diske nasıl yerleştirdiğidir.

## Nasıl çalışır?

[[npm]] her projede paketin kendi kopyasını `node_modules` içine açar; on projede aynı paketi kullanıyorsan diskte on kopya durur. pnpm ise paket içeriğini bilgisayarda tek bir merkezî depoda saklar ve projelerin `node_modules` klasörüne bu depoyu işaret eden bağlantılar koyar. Sonuç daha az disk kullanımı ve ikinci kurulumdan itibaren daha kısa bekleme olur.

İkinci fark [[dependency|bağımlılıkların]] görünürlüğündedir. pnpm varsayılan olarak yalnızca `package.json` içinde yazan paketleri projeye görünür kılar. Düz yerleşimde bir bağımlılığın bağımlılığı yanlışlıkla `import` edilebilir ve proje "çalışıyor" görünür; pnpm bunu erkenden hata hâline getirir.

## Dikkat

Hangisini seçeceğin projeye bağlıdır, "daha iyisi" diye bir cevap yok. npm [[node-js|Node.js]] ile hazır gelir, ek kurulum istemez ve internetteki örneklerin çoğu onunla yazılmıştır; tek kişilik ya da küçük projelerde bu yeterlidir. pnpm ise çok paketli depolarda ([[monorepo]]) ve disk alanıyla kurulum süresinin canını sıktığı yerlerde tercih edilir.

Asıl kural şu: bir projede tek bir paket yöneticisine karar verip ona sadık kal. Aynı depoda iki farklı lock dosyası bulunursa ekipteki kişiler birbirinden farklı sürümler kurar ve hata ancak birinin bilgisayarında ortaya çıkar.
