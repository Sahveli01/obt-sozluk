---
term: "Post-mortem"
tr: ""
aliases: []
category: guvenlik
subcategory: "Temel kavramlar"
level: orta
short: "Bir olaydan sonra ne olduğunu, nasıl fark edildiğini ve neyin değiştirildiğini anlatan yazı."
related: [incident-response, threat-model, monitoring, defense-in-depth, smart-contract-audit]
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

Post-mortem, bir olay kapandıktan sonra yazılan değerlendirmedir. Adı tıptan gelir; "ölüm sonrası inceleme" anlamındaki Latince ifadeden. Türkçede yerleşik tek kelimelik bir karşılığı yok, metinlerde İngilizce hâliyle ya da "olay sonrası değerlendirme" diye geçiyor.

Soruları üçtür: ne oldu, neden fark edilmesi bu kadar sürdü, bir dahakine olmaması için ne değişti.

## Nasıl çalışır?

İyi bir post-mortem şu parçalardan oluşur.

**Zaman çizelgesi.** Saat saat: açığın oluştuğu an, ilk anormal işlem, ilk fark eden, ilk müdahale, kapanış. Çizelge olmadan geri kalan her şey tahmine dayanır.

**Etki.** Kim, ne kadar etkilendi; kimin bir şey yapması gerekiyor.

**Kök sebep.** Yalnızca teknik hata değil, o hatanın fark edilmeden yayına çıkmasını sağlayan süreç de yazılır.

**Ne işe yaradı, ne yaramadı.** Alarm çalıştı mı? Durdurma düğmesi bulundu mu? [[monitoring|İzleme]] doğru şeye bakıyor muydu?

**Eylem maddeleri.** Her birinin bir sahibi ve bir tarihi olur. Bu bölümü olmayan bir post-mortem, iyi yazılmış bir hikâyedir; güvenlik açısından bir şey değiştirmez.

Yazı genellikle yayımlanır. Aynı hatayı yapmak üzere olan başka ekiplerin öğrenebileceği tek yer burasıdır; bu yüzden bu metinler [[smart-contract-audit|denetim]] raporlarıyla birlikte sektörün ortak hafızasını oluşturur.

## Dikkat

**Post-mortem suçlu arama belgesi değildir.** Yaygın adıyla "blameless" yaklaşım şunu söyler: bir kişinin yanlış tuşa basmış olması kök sebep değildir, o tuşun yanlış basılabilir olması kök sebeptir. Amaç insanı değil sistemi değiştirmektir.

Bunun pratik bir gerekçesi var. Suç arayan bir ekipte insanlar hatayı gizler, geç bildirir ya da hiç bildirmez; bir sonraki olay bu yüzden daha geç fark edilir. Savunmanın en ucuz katmanı, hatayı erken söyleyebilen bir ekiptir ([[defense-in-depth|derinlemesine savunma]]).

Bir de kapanış meselesi var: eylem maddeleri yapılmadığı sürece olay kapanmamıştır, yalnızca durmuştur.
