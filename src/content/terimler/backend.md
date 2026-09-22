---
term: "Backend"
tr: "Arka uç"
aliases: []
category: web
subcategory: "Backend"
level: baslangic
short: "Bir uygulamanın kullanıcının görmediği tarafı: veriyi saklayan, kuralları işleten ve kimin neye erişebileceğine karar veren kısım."
related: [frontend, server, database, api, full-stack]
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

Backend, bir uygulamanın kullanıcının göremediği tarafıdır. [[frontend|Arayüz]] ekranda ne görüneceğiyle ilgilenir; backend ise verinin nerede saklandığı, hangi kuralların işletildiği ve kimin neye erişebileceğiyle ilgilenir.

Ders kayıt sistemini düşün. Dersin adını, kontenjanını ve "kaydol" düğmesini arayüz gösterir. Kontenjanın gerçekten dolup dolmadığına, önkoşulu tutturup tutturmadığına ve kaydın kimin adına yapıldığına backend karar verir. Aynı backend'i hem site hem mobil uygulama kullanabilir, çünkü kurallar arayüzde değil burada durur.

## Benzetme

Mahalle fırını gibi. Camekânda ekmekler dizilidir, etiketler asılıdır; müşterinin gördüğü yer burasıdır. Arka tarafta ise hamur yoğrulur, fırının sıcaklığı ayarlanır, un çuvalları sayılır. Camekânı dolduran şey arka taraftır, ama müşterinin oraya girmesi gerekmez.

## Dikkat

Backend bir taraftır, bir makine değildir. O tarafın ayakta durabilmesi için istekleri karşılayan bir [[server|sunucu]] programı, veriyi tutan bir [[database|veritabanı]] ve arayüzün konuşabileceği bir [[api|API]] gerekir. Backend, bunların hepsinin oluşturduğu bütünün adıdır; tek bir dosya ya da tek bir program değildir.
