---
term: "Cloud Computing"
tr: "Bulut bilişim"
aliases: ["cloud"]
category: web
subcategory: "Yayınlama"
level: orta
short: "Sunucu, depolama ve ağ gibi kaynakları satın alıp işletmek yerine başka birinin veri merkezinden kullandığın kadar kiralamak."
related: [hosting, serverless, server, deployment, decentralized-compute]
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

Bulut bilişim, uygulamanın ihtiyaç duyduğu donanımı satın alıp işletmek yerine kullandığın kadar kiralama modelidir. Kiraladığın şey [[server|sunucu]] (internete bağlı, sürekli açık duran bir bilgisayar), disk alanı, veritabanı ya da ağ kapasitesi olabilir.

"Bulut" bir teknolojinin adı değil, bir sahiplik biçiminin adıdır. Altında yine somut makineler, somut binalar ve somut kablolar vardır; değişen şey onların kime ait olduğu ve bakımını kimin yaptığıdır.

## Nasıl çalışır?

Sağlayıcı büyük veri merkezleri işletir. Fiziksel makineler sanallaştırma ile bölünür ([[virtual-machine-bilgisayar|sanal makine]]) ve her müşteri kendi payını alır; sen bir makineye değil, bir makine diliminin kullanım hakkına sahip olursun.

Hizmet genelde katmanlar hâlinde satılır. En altta çıplak kaynak vardır: sana boş bir sunucu verilir, işletim sisteminden güncellemelere kadar her şey sana kalır. Bir üstte hazır çalışma ortamı bulunur: kodunu verirsin, altındaki makineyle sağlayıcı ilgilenir. En üstte ise kurmadan kullandığın hazır uygulamalar vardır. Aşağı indikçe denetim artar, üstüne binen iş de artar.

Modeli cazip kılan iki özellik şudur: kapasite talep artınca dakikalar içinde büyütülüp talep düşünce küçültülebilir ve fatura büyük ölçüde kullanıma bağlıdır.

## Dikkat

Bulut, "başkasının bilgisayarı"dır. Sağlayıcı kesinti yaşarsa senin uygulaman da yaşar ve verin fiziksel olarak senin kontrolünde değildir. Kolayca kullanılan hazır hizmetler ise zamanla taşınmayı zorlaştırır; başka bir sağlayıcıya geçmek çoğu zaman uygulamayı yeniden yazmaya yaklaşır.

Merkeziyetsizlik açısından da bir gerilim vardır: zincirin kendisi dağıtık olsa bile düğümlerin ve arayüzlerin büyük bölümü aynı sağlayıcıda duruyorsa ortak bir kırılganlık doğar. [[decentralized-compute|Merkeziyetsiz hesaplama]] tam olarak bu bağımlılığı bir ağa yaymayı dener.
