---
term: "Production"
tr: "Üretim ortamı"
aliases: ["prod", "uretim ortami"]
category: araclar
subcategory: "Derleme ve dağıtım süreci"
level: orta
short: "Yazılımın gerçek kullanıcılarla buluştuğu ortam; buradaki hata gerçek insanları, veriyi ve çoğu zaman parayı etkiler."
related: [environment, staging, monitoring, incident-response, deployment]
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

Üretim ortamı, yazılımın gerçek kullanıcılarla buluştuğu yerdir. "Üretim" burada fabrika anlamında değil, "asıl iş burada yapılıyor" anlamındadır ve İngilizce *production* kelimesinin karşılığı olarak yerleşmiştir; konuşma dilinde kısaca "prod" denir.

Üretimi diğer [[environment|ortamlardan]] ayıran şey teknolojisi değil sonuçlarıdır: buradaki veri gerçektir ve silindiğinde geri gelmez, buradaki kesinti kullanıcının ekranına çıkar, buradaki yavaşlık şikâyete dönüşür.

## Benzetme

Akımı kesilmemiş bir hatta çalışmak gibi. Pense aynı pense, kablo aynı kablo; ama hat akım altındayken yapılan her hamlenin bedeli yalnızca sana değil, o hatta bağlı bütün evlere çıkar. Bu yüzden akım altında çalışanlar yavaş ilerler, sırayı yazılı tutar ve işi tek başlarına yapmaz.

## Nasıl çalışır?

Üretime kurulum genelde [[ci-cd|CI/CD]] hattının son adımıdır ve [[staging|staging]]'de denenmiş [[build-artifact|artifact]]'ın aynısıyla yapılır. Riski azaltmak için değişiklik sık sık kademeli açılır: önce kullanıcıların küçük bir bölümüne, sorun çıkmazsa hepsine.

Kurulumdan sonra hata oranı ve gecikme [[monitoring|izleme]] araçlarıyla takip edilir. Bir şey bozulduğunda ilk hamle sebebi bulmak değil, bir önceki sürüme dönmektir; sebep sonra, sakin kafayla aranır ve olan biten [[incident-response|olay müdahalesi]] sürecinde yazıya geçer.

## Dikkat

Üretim veritabanında elle sorgu çalıştırmak, hatayı "hızlıca" canlıda düzeltmek ve kurulumu herkesin çıkmak üzere olduğu Cuma akşamı yapmak klasik pişmanlık sebepleridir. Bir de üretime kimlerin erişebileceğini geniş tutma: bu listeye giren herkes, en dikkatli günündeki hâliyle değil en yorgun günündeki hâliyle hesaba katılmalıdır.
