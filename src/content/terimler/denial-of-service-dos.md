---
term: "Denial of Service (DoS)"
tr: "Hizmet reddi"
aliases: ["hizmet reddi", "DoS"]
category: guvenlik
subcategory: "Sözleşme açıkları"
level: orta
short: "Bir sözleşmenin işlevini geçici ya da kalıcı olarak kullanılamaz hâle getirmek; çoğu zaman tek bir başarısız çağrı yeter."
related: [pull-over-push-payments, griefing, gas-limit, loop, distributed-denial-of-service-ddos, unchecked-external-call]
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

Hizmet reddinde amaç para çalmak değil, sözleşmenin yapması gereken işi yapamaz hâle getirmektir. Zincir üstünde bunun için büyük bir güç gerekmez, çünkü bir işlem ya bütünüyle başarılı olur ya bütünüyle geri alınır: **tek bir adımı bozmak işlemin tamamını bozar.**

En yaygın biçimi bir ödeme döngüsüdür. Sözleşme bir liste üzerinde dolaşıp herkese sırayla ödeme yapıyorsa, listedeki tek bir alıcının ödemeyi kabul etmemesi yeterlidir: döngü o noktada geri alınır ve **hiç kimse** ödemesini alamaz. Listeye giren bir sözleşme olabilir ve parayı reddeden bir sözleşme yazmak kolaydır.

## Benzetme

Kalkmadan önce bütün yolcuların biletini okutması gereken bir otobüs gibi. Yolculardan biri kartını okutmuyorsa şoför yola çıkamaz. Otobüs sağlamdır, yakıtı vardır, yol açıktır; yalnızca kural "herkes" dediği için tek kişi bütün otobüsü durdurur. Üstelik o kişi hiçbir şey kazanmaz, o da otobüste bekler.

## Nasıl çalışır?

İki ayrı kilitlenme kaynağı vardır.

**Başarısız dış çağrı.** Sözleşme parayı alıcılara kendisi dağıtıyorsa, bir alıcının reddi dağıtımın tamamını durdurur. Doğru kurgu parayı dağıtmak değil, herkesin kendi payını çekmesini sağlamaktır; ayrıntısı [[pull-over-push-payments|pull over push]] başlığındadır.

**Blok gas sınırı.** Sınırsız büyüyebilen bir liste üzerinde dönen bir [[loop|döngü]] bir gün tek bir işleme sığmaz olur ([[gas-limit|gas sınırı]]). Bu, kimse saldırmasa bile gelir: sözleşme kendi büyümesiyle kilitlenir. Saldırgan listeyi ucuza şişirebiliyorsa o günü kendi eliyle getirir.

Savunma dört maddedir. Ödemeyi sözleşmenin dağıtmasını değil alıcının çekmesini sağla. Sınırsız döngü kurma; listeyi parçalar hâlinde işlenebilir tasarla. Bir alıcının başarısızlığı diğerlerini durdurmasın: sonucu kontrol et, başarısız olanı kenara yaz, devam et ([[unchecked-external-call|kontrol edilmeyen dış çağrı]]). Kritik yolları tek bir dış bağımlılığa muhtaç bırakma.

## Dikkat

Ağ düzeyindeki [[distributed-denial-of-service-ddos|DDoS]] ile karıştırma. Orada hedef bir sunucudur ve saldırı trafikle yapılır; burada hedef sözleşmenin mantığıdır ve tek bir işlem yeter.

Saldırgan bundan kazanç sağlamaz; bu bir [[griefing]] biçimidir. Kâr etmemesi onu daha az olası yapmaz, yalnızca ekonomik modellerle öngörülmesini zorlaştırır.

Sözleşmeyi durduran her şey saldırı değildir. Yönetim anahtarının kaybı, bağımlı olunan bir servisin kapanması ya da yanlış yazılmış bir yükseltme de aynı sonucu verir. Kullanıcı açısından fark yoktur: para yerinde durur ve dokunulamaz.
