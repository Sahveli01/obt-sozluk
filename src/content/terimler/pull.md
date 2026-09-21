---
term: "Pull"
tr: ""
aliases: []
category: araclar
subcategory: "Git ve GitHub"
level: orta
short: "Uzak depodaki yeni commit'leri indirip bulunduğun dala hemen uygulayan, iki adımı tek komutta yapan işlem."
related: [fetch, merge, push, remote, rebase]
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

Pull, [[remote|uzak depodaki]] yenilikleri alıp üzerinde çalıştığın dala katmaktır. Ekip hâlinde çalışırken güne genelde bununla başlanır: önce ortak hatta ne olduğunu alırsın, sonra kendi işine devam edersin. Türkçede yerleşik karşılığı olmadığı için "pull etmek" diye söylenir.

## Nasıl çalışır?

Pull tek bir işlem değil, arka arkaya iki işlemdir: önce [[fetch|indirme]], sonra birleştirme. Yani sunucudaki commit'ler indirilir ve hemen ardından bulunduğun dala [[merge|merge]] edilir.

Birleştirme yerine [[rebase|rebase]] de tercih edilebilir; bu durumda senin yerel commit'lerin indirilen commit'lerin üzerine yeniden uygulanır. Hangisinin varsayılan olacağı ayarlanabilir, ama ekip içinde tutarlı olması karışıklığı azaltır.

İkinci adım otomatik çalıştığı için [[merge-conflict|çakışma]] doğrudan pull sırasında çıkabilir; o an elindeki işi bırakıp çakışmayı çözmen gerekir.

## Örnek

```
git pull origin main
git pull --rebase origin main
```

## Dikkat

Pull "sadece bakıyorum" demek değildir; indirdiğini aynı anda uygular ve çalışma klasöründeki dosyaları değiştirir. Yarım kalmış değişikliklerin varken pull etmek işleri karıştırabilir; önce kaydet ya da bir kenara al.

Sık pull etmek genelde işi kolaylaştırır: kendi değişikliklerini güncel kodun üzerine yaparsan çözmen gereken çakışma hem daha az hem de daha küçük olur.

Ne indiğini uygulamadan önce görmek istiyorsan pull yerine fetch kullanılır; ikisinin farkı fetch maddesinde anlatılıyor.
