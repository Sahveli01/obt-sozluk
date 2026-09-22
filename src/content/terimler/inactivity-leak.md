---
term: "Inactivity Leak"
tr: ""
aliases: []
category: konsensus
subcategory: "Staking ve validator'lar"
level: ileri
short: "Ağ uzun süre kesinliğe ulaşamadığında, çevrimdışı doğrulayıcıların payının kademeli olarak eritilmesi."
related: [finality, liveness, validator, attestation, slashing, staking]
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

Inactivity leak, ağın uzun süre [[finality|kesinliğe]] ulaşamadığı bir dönemde devreye giren kurtarma mekanizmasıdır. Adı ceza gibi dursa da amacı cezalandırmak değil, tıkanmış bir sistemin dışarıdan müdahale olmadan açılmasını sağlamaktır.

Türkçede yerleşik bir karşılığı yok; birebir çeviriler kullanılmıyor.

## Nasıl çalışır?

Kesinlik ilan edilebilmesi için oyların, ağdaki toplam kilitli varlık içinde belirli bir üstün çoğunluğu aşması gerekir. Doğrulayıcıların yeterince büyük bir kısmı [[attestation|oy vermeyi]] bırakırsa bu eşik, kalan herkes kusursuz çalışsa bile tutturulamaz. Zincir blok üretmeye devam eder — [[liveness|canlılık]] sürer — ama hiçbir şey kesinleşmez ve bu durum kendi kendine düzelmez.

Mekanizma araya şöyle girer: görevini yapmayan doğrulayıcıların kilitli payı her turda bir miktar eritilir. Toplam küçüldükçe çevrimiçi kalanların oranı büyür ve eşik bir noktada yeniden geçilebilir hâle gelir. Kesinlik geri döndüğü anda erime durur. Eriyen pay ise geri gelmez.

## Dikkat

Bu mekanizma [[slashing|kesintiden]] farklıdır: ortada kanıtlanmış bir ihlal değil, yapılmamış bir görev vardır. Normal zamanlarda da çalışmaz; ağ kesinlik üretebildiği sürece çevrimdışı kalmanın sonucu çok daha hafiftir.

Asıl rahatsız edici tarafı ayrım yapmamasıdır. Protokol, elektrik kesintisi yüzünden erişilemeyen dürüst bir doğrulayıcıyla bilerek susan bir doğrulayıcıyı birbirinden ayıramaz — ağ üzerindeki etkileri aynıdır, dolayısıyla erime ikisine de uygulanır. Bu bilinçli bir tasarım tercihidir: ağın yeniden kesinlik üretebilmesi, çevrimdışı kalan katılımcıların payının korunmasının önüne konmuştur. Bir ağda büyük bir kesinti yaşanırsa maliyeti, hatayı yapmamış olanlar da dâhil olmak üzere kilitli varlığı olan herkes paylaşır.
