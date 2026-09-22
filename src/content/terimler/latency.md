---
term: "Latency"
tr: "Gecikme"
aliases: []
category: web
subcategory: "İnternet temelleri"
level: orta
short: "Bir isteğin yola çıkmasıyla ilk cevabın gelmesi arasında geçen süre; bant genişliğinden ayrı bir ölçüdür."
related: [http-request, cdn, cache, block-time, confirmation]
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

Gecikme, bir [[http-request|isteğin]] yola çıkmasıyla ilk cevabın gelmesi arasında geçen süredir. Milisaniyeyle ölçülür ve bir uygulamanın hızlı hissettirip hissettirmediğini çoğu zaman bant genişliğinden daha fazla belirler.

## Benzetme

Bir yolun şerit sayısı ile uzunluğu ayrı şeylerdir. Yolu altı şeride çıkarmak aynı anda daha çok aracın geçmesini sağlar, ama yola çıkan tek bir aracın diğer şehre varış saatini değiştirmez. Bant genişliği şerit sayısıdır; gecikme mesafedir.

## Nasıl çalışır?

Gecikme birkaç kalemin toplamıdır: sinyalin mesafeyi kat etmesi (ışık hızı aşılamaz bir alt sınır koyar), yol üstündeki her yönlendirmede geçen süre, yoğun bir hatta sıra beklemek ve sunucunun isteği işlemesi.

Bir de kurulum maliyeti vardır. İlk istekten önce [[dns|DNS]] çözümlemesi ve [[ssl-tls|TLS]] el sıkışması yapılır; her biri karşı tarafa gidip gelmeyi gerektirir. Bu yüzden ilk istek neredeyse her zaman sonrakilerden yavaştır. İçeriği kullanıcıya yakın tutan [[cdn|CDN]] kullanmak ya da isteği hiç göndermemeyi sağlayan [[cache|önbellek]], gecikmeyi azaltmanın en doğrudan yollarıdır.

## Dikkat

Ağ gecikmesi ile blok süresi karıştırılmamalıdır. Bir işlemi ağa göndermek milisaniyeler sürer; o işlemin bir bloğa girip kesinleşmesi ise [[block-time|blok süresine]] ve beklenen [[confirmation|onay]] sayısına bağlıdır. Arayüzde bir işlemin anında "gönderildi" görünmesi, zincirde bir şeyin kesinleştiği anlamına gelmez. Bunlar farklı ölçekte iki ayrı süredir ve birini iyileştirmek diğerini kısaltmaz.
