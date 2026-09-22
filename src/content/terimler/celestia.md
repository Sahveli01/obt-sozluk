---
term: "Celestia"
tr: ""
aliases: []
category: aglar
subcategory: ""
level: ileri
short: "Uygulama mantığını yürütmeyen; yalnızca verinin sıralanmasını ve yayımlandığının doğrulanabilmesini sağlayan bir katman."
related: [data-availability, modular-blockchain, sovereign-rollup, data-availability-layer, light-client, rollup]
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

Celestia, uygulama mantığını çalıştırmayan bir blok zinciridir. Tek işi, kendisine gönderilen verinin sırasını belirlemek ve o verinin gerçekten yayımlandığını herkesin doğrulayabilmesini sağlamaktır — yani [[data-availability|veri erişilebilirliği]]. Üstünde çalışan zincirler işlemleri kendileri yürütür; Celestia bu işlemlerin ne olduğunu ve hangi sırada geldiğini kaydeder.

## Nasıl çalışır?

Tasarım, [[modular-blockchain|modüler zincir]] fikrinin uç noktasıdır: yürütme, yerleşim ve veri işlerini tek zincirde toplamak yerine yalnızca en alttaki katmanı sunar. Uzlaşma hisse ispatına dayanır ve [[tendermint-cometbft|CometBFT]] ailesinden gelir.

Kritik mekanizma veri örneklemesidir. Bloklar silme kodlamasıyla genişletilir, böylece parçaların bir bölümü verinin tamamını geri getirmeye yeter. [[light-client|Hafif istemciler]] blokun tamamını indirmek yerine rastgele küçük parçalar ister; yeterince örnek sorunsuz dönerse verinin saklanmadığına dair güven hızla yükselir. Veri ayrıca ad alanlarına bölünür, bu sayede her [[rollup|rollup]] yalnızca kendi verisini çekebilir.

## Dikkat

Ödünleşme nettir: Celestia üstündeki zincirin durumunu doğrulamaz. "Bu veri yayımlandı" der, "bu işlemler geçerliydi" demez. Geçerlilik denetimini ve anlaşmazlık çözümünü zincirin kendisi halletmek zorundadır; bu yüzden bu modele [[sovereign-rollup|egemen rollup]] denir.

Pratik sonucu köprülerde görünür. Yerleşim yapan bir ana zincirin sunduğu ortak çıkış ve zorlama mekanizmaları burada hazır gelmez; varlık geçişleri ayrıca güven varsayımı taşır. Yazıldığı tarih itibarıyla ağın güvenliği kendi doğrulayıcı kümesine ve o kümenin teminatına bağlıdır, başka bir zincirden devralınmaz.
