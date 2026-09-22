---
term: "Veto"
tr: "Veto"
aliases: []
category: yonetisim
subcategory: ""
level: orta
short: "Onaylanmış ya da onaylanmak üzere olan bir kararı tek başına durdurabilme yetkisi."
related: [council, timelock, governance-proposal, governance-attack, governance]
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

Veto, karar üretme değil karar durdurma yetkisidir. Elinde veto olan taraf yeni bir şey öneremez, ama oylamadan geçmiş bir öneriyi uygulanmadan önce iptal edebilir.

DAO'larda bu yetki genelde bir güvenlik konseyine, kurucu ekibe ya da belirli bir jeton sahipleri grubuna verilir. Kelime Türkçede de aynen kullanılır.

## Nasıl çalışır?

Veto, tek başına anlamlı değildir; bir bekleme süresine ihtiyaç duyar. Bu yüzden neredeyse her zaman bir [[timelock|zaman kilidiyle]] birlikte kurulur: kabul edilen [[governance-proposal|öneri]] hemen uygulanmaz, sözleşmede tanımlı süre kadar sırada bekler. Veto penceresi bu süredir.

Kod tarafında görünüşü sadedir: yönetişim sözleşmesinde sıradaki işlemi kuyruktan çıkaran bir iptal fonksiyonu vardır ve bu fonksiyonu yalnızca belirli adresler çağırabilir.

Gerekçe genelde güvenliktir. Bir [[governance-attack|yönetişim saldırısıyla]] geçirilmiş ya da içinde fark edilmemiş bir hata bulunan bir önerinin uygulanmasını, tartışma süresi bitmiş olsa bile durdurmak gerekebilir.

## Dikkat

Veto asimetriktir: yalnızca "hayır" diyebilir. Ama bu, sanıldığından büyük bir güçtür. Hoşuna gitmeyen her kararı süresiz durdurabilen bir taraf, oylamayı fiilen kendi onayına bağlamış olur — topluluk yalnızca o tarafın kabul edebileceği önerileri geçirebilir.

Bu yüzden bakılacak sorular şunlardır: yetki kimde, hangi pencerede kullanılabiliyor, kullanımı gerekçelendirilip ilan ediliyor mu, topluluk yüksek bir eşikle bunu aşabiliyor mu ve yetkinin kendisinin sona erdiği bir tarih var mı. Bazı tasarımlarda veto, merkeziyetin geçici olduğunu göstermek için baştan süreli konur ([[progressive-decentralization|kademeli merkeziyetsizleşme]]).
