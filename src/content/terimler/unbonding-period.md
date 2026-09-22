---
term: "Unbonding Period"
tr: ""
aliases: ["unbonding"]
category: konsensus
subcategory: "Staking ve validator'lar"
level: orta
short: "Stake çözüldükten sonra varlığın hemen serbest kalmadığı, protokolün belirlediği bekleme süresi."
related: [staking, slashing, liquid-staking, long-range-attack, weak-subjectivity, validator]
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

Unbonding period, stake'ten çıkma kararını verdikten sonra varlığın hâlâ kilitli kaldığı aralıktır. Çıkış bildirimini yaparsın, doğrulayıcı görevlerin biter, ödül işlemez; ama varlık bir süre daha ne satılabilir ne gönderilebilir. Sürenin uzunluğu ağdan ağa değişir ve ağ yükseltmeleriyle değişebilir.

Türkçede yerleşik bir karşılığı yok; "bekleme süresi" ya da "kilit çözme süresi" diye anlatılıyor.

## Benzetme

İnternetten aldığın bir ürünü iade etmeye benzer. Kargoyu verdiğin anda iş bitmiş gibi görünür, ama para hesabına hemen geçmez: ürünün karşı tarafa ulaşması ve kontrol edilmesi gerekir. Bekleme, senin hakkını geciktirmek için değil, kapanmamış bir hesabın kapanabilmesi için vardır.

## Nasıl çalışır?

Sebebi bir zamanlama sorunudur. Kural ihlalleri her zaman anında fark edilmez; bir çifte imzanın kanıtı ihlalden bir süre sonra ortaya çıkabilir. Kesinti uygulanabilmesi için o anda kesilecek bir sermayenin hâlâ kilitte durması gerekir. Çıkışın anlık olduğu bir tasarımda ihlal eden taraf imzayı atar, varlığını çeker ve geriye ceza uygulanacak bir şey kalmaz.

Aynı süre, ağın eski durumlarına yönelik saldırılarda da işe yarar. [[long-range-attack|Uzun menzilli saldırıda]] tehlike, varlığını çoktan çekmiş eski doğrulayıcıların geçmişi yeniden imzalamasıdır; bekleme süresi bu pencereyi daraltır ve yeni katılan düğümlerin güncel bir referans noktasına güvenmesini gerektiren [[weak-subjectivity|zayıf öznellik]] varsayımıyla birlikte çalışır.

## Dikkat

Bekleme süresi bir aksaklık değil, güvenliğin kendisidir: kaldırılsa [[slashing|kesinti]] mekanizması boşa düşerdi. Yine de kullanıcı tarafında en çok şaşırtan nokta budur — piyasa hareketlendiğinde stake'li varlığı hemen satamazsın.

[[liquid-staking|Liquid staking]] bu kısıtı ortadan kaldırmaz, yerini değiştirir. Elindeki token'ı ikincil piyasada satarak çıkarsın; ama o zaman çıkış fiyatını protokolün süresi değil, o anda karşına çıkan alıcı belirler.
