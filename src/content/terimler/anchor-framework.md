---
term: "Anchor Framework"
tr: ""
aliases: ["anchor"]
category: araclar
subcategory: "Blockchain geliştirici araçları"
level: orta
short: "Solana programlarını Rust ile yazarken tekrar eden hesap ve doğrulama işlerini üstlenen çerçeve."
related: [solana, rust, smart-contract, solana-virtual-machine-svm, spl-token]
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

Anchor, [[solana|Solana]] üzerinde program (bu ekosistemde [[smart-contract|akıllı sözleşmenin]] adı budur) yazmak için kullanılan bir [[rust|Rust]] çerçevesidir. Çıplak hâliyle bir Solana programı, kendisine gelen ham baytları ve hesap listesini elle çözmek zorundadır; Anchor bu tekrar eden işi üstlenir.

Yalnızca sözleşme tarafını da kapsamaz: derleme, test ve ağa gönderme adımlarını yürüten bir komut satırı aracı ve programla konuşan istemci kodu için bir arayüz tanımı da aynı paketten çıkar.

## Nasıl çalışır?

Solana'da veri, programın içinde değil ayrı hesaplarda durur ve her çağrı hangi hesaplara dokunacağını önceden bildirmek zorundadır. Bu yüzden Solana programlarındaki hataların büyük kısmı mantıkta değil, gelen hesapların beklenen hesaplar olup olmadığının kontrolünde çıkar.

Anchor burada devreye girer: bir çağrının hangi hesapları beklediğini bir yapı (struct) olarak tanımlarsın, üstüne de bu hesaplarda hangi koşulların sağlanması gerektiğini yazarsın — sahibi şu program olmalı, imzalayan şu olmalı, adres şu türetme kuralına uymalı. Çerçeve bu kontrolleri işlev gövden çalışmadan önce uygular.

Derleme sırasında programın dışarıya açık arayüzü makine tarafından okunabilir bir tanım dosyası olarak da üretilir; istemci kodu programın işlevlerini bu dosyadan tanır.

## Dikkat

Anchor'un ürettiği kontroller ücretsiz değildir; hesap doğrulaması işlem bütçesine yazılır ve çok sıkışık programlarda bazı geliştiriciler bilinçli olarak çerçevesiz yazmayı seçer. Bu bir kalite tercihi değil, ölçü tercihidir.

Kontrollerin çalışması, doğru kısıtı yazmış olmana bağlıdır. Eksik yazılmış bir kısıt sessizce geçer ve çerçeve bunu senin yerine fark etmez.
