---
term: "Monorepo"
tr: ""
aliases: ["mono repo"]
category: araclar
subcategory: "Git ve GitHub"
level: orta
short: "Birbiriyle ilişkili birden çok projeyi ya da paketi tek bir depoda, tek geçmişte tutma yaklaşımı."
related: [repository, package-manager, ci-cd, build, dependency]
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

Monorepo, birden çok projeyi tek bir [[repository|depoda]] toplamaktır: web arayüzü, sunucu, paylaşılan kütüphane ve araçlar aynı depoda, aynı geçmişte durur. Karşıtı, her parçayı kendi deposunda tutmaktır. Türkçede yerleşik bir karşılığı yok; "tek depo" denemeleri yaygınlaşmadığı için İngilizcesi kullanılıyor.

## Nasıl çalışır?

Dosyalar genelde `apps/` ve `packages/` gibi klasörlere ayrılır. Paketler birbirine doğrudan referansla bağlanır, bu yüzden paylaşılan bir kütüphaneyi değiştiren commit onu kullanan uygulamaları da aynı anda güncelleyebilir; sürüm yayınlayıp beklemek gerekmez. Bağımlılıkların kurulumunu ve paketler arası bağı [[package-manager|paket yöneticisi]] yönetir.

Asıl zorluk ölçekte çıkar. Depo büyüdükçe her değişiklikte her şeyi [[build|derlemek]] pahalı hâle gelir; bu yüzden [[ci-cd|CI]] tarafında hangi paketin gerçekten etkilendiğini hesaplayıp yalnızca onu çalıştıran araçlar kullanılır.

## Dikkat

Monorepo, "tek depo tek uygulama" demek değildir; içindeki projeler ayrı ayrı yayınlanmaya devam edebilir.

Her ölçekte doğru seçim de değildir. Tek depo, ortak kodun [[dependency|bağımlılık]] düğümünü ve sürüm uyuşmazlığını azaltır ama araç kurulumu ve derleme düzeni maliyet ister; ayrı depolar kurulumu basitleştirir ama ortak kodda yapılan bir değişikliği her projeye tek tek taşımayı gerektirir. Seçim ekibin büyüklüğüne ve projelerin birbirine ne kadar bağlı olduğuna göre yapılır.
