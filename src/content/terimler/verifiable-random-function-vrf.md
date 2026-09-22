---
term: "Verifiable Random Function (VRF)"
tr: "Doğrulanabilir rastgele fonksiyon"
aliases: ["doğrulanabilir rastgele fonksiyon"]
category: kriptografi
subcategory: "İmzalar ve eğriler"
level: orta
short: "Rastgele görünen bir çıktıyı, o çıktının kurallara uygun üretildiğini herkesin doğrulayabileceği bir kanıtla birlikte veren fonksiyon."
related: [weak-randomness, randomness, leader-election, chainlink, digital-signature, commit-reveal-scheme]
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

Zincirin üstünde gerçek rastgelelik üretilemez: bir sözleşmenin okuyabildiği her şeyi herkes okuyabilir ve önceden hesaplayabilir ([[weak-randomness|zayıf rastgelelik]]). VRF tam olarak bu boşluğu doldurmak için vardır.

VRF iki şey birden üretir: bir **çıktı** ve bir **kanıt**. Çıktı, özel anahtarı bilmeyen herkes için önceden tahmin edilemez görünür. Kanıt ise şunu gösterir: bu çıktı, şu açık anahtarın sahibi tarafından, şu girdi için üretilebilecek tek çıktıdır. Üreten kişi sonucu beğenmeyip başka bir sonuç uyduramaz.

## Nasıl çalışır?

Bir [[digital-signature|imzaya]] benzer, ama önemli bir farkla: sıradan imza şemalarında aynı mesaj için birden çok geçerli imza üretilebilir, VRF'te çıktı tektir. Girdi ile anahtar sabitse sonuç da sabittir.

Akış şöyle işler. Girdi herkese açıktır (bir blok numarası, bir talep kimliği). Anahtar sahibi çıktıyı ve kanıtı hesaplar, ikisini birden yayımlar. Doğrulayan taraf açık anahtarla kanıtı kontrol eder; tutuyorsa çıktıyı kabul eder. Sözleşmeler bu doğrulamayı zincirde yapar; [[chainlink|Chainlink]] gibi sağlayıcıların rastgelelik hizmetleri bu yapıdadır.

Konsensüste de kullanılır: sıradaki bloğu kimin önereceğini seçmek için her katılımcı kendi anahtarıyla bir VRF çıktısı üretir, belirli bir eşiği tutturan seçilmiş olur ve kanıtını göstererek hakkını ispatlar ([[leader-election|lider seçimi]]). Kimse kimin ne zaman seçileceğini önceden hesaplayamaz.

## Dikkat

VRF çıktının **seçilmesini** engeller, **yayımlanmamasını** engellemez. Anahtar sahibi sonucu ilk gören kişidir; hoşuna gitmeyen bir sonuç çıkarsa susabilir. Bu yüzden VRF kullanan protokoller susmayı pahalı hâle getirir: kaçırılan sıra ceza ya da kayıp getirir.

İkincisi, doğrulanabilirlik tarafsızlık demek değildir. Çıktı, anahtarı elinde tutanın anahtarına bağlıdır; o anahtar tek bir tarafın elindeyse sistemin güveni o tarafa bağlanmış olur. Sorulacak soru "kanıt doğrulanıyor mu" değil, "anahtar kimde ve girdiyi kim seçiyor" sorusudur. Girdinin seçimini kısıtlamak için [[commit-reveal-scheme|commit-reveal]] gibi yöntemler VRF ile birlikte kullanılır.
