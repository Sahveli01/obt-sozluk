---
term: "Technical Debt"
tr: "Teknik borç"
aliases: ["teknik borç"]
category: programlama
subcategory: "Paradigmalar ve tasarım"
level: orta
short: "Bugün hızlı ilerlemek için seçilen kolay çözümün, ileride fazladan işe dönüşen birikmiş maliyeti."
related: [refactoring, clean-code, minimum-viable-product-mvp, hackathon, documentation]
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

Teknik borç, bugün hızlı ilerlemek için seçilen kolay çözümün ileride fazladan işe dönüşen maliyetidir. Doğru çözüm üç gün sürecekken, iki saatte kurulan geçici bir çözümle devam edersin. O iki saat gerçekten kazanılır; ama kazanılan zaman bir yerde geri istenir.

Benzetme kasıtlı olarak finanstan alınmıştır, çünkü borç almak kendiliğinden kötü bir şey değildir. Bir yatırımı öne çekmek için borçlanmak makul bir karardır; sorun, borcun varlığından değil, görünmez kalmasından ve faizinin ödenmemesinden çıkar.

## Benzetme

Kış girerken bozulan kaloriferi tamir ettirmek yerine odaya soba kurmak gibi. Karar doğrudur: tamir üç hafta sürecek, hava ise bu hafta soğudu. Soba işini görür, kimse üşümez. Ama o günden sonra takvimine yeni satırlar eklenir — boru temizliği, kömür taşıma, gece kontrolü. Bu satırlar borcun faizidir. Borcu kapatmak ise bir gün kaloriferi gerçekten tamir ettirmektir.

## Nasıl çalışır?

Faiz şöyle işler: her yeni özellik, o geçici çözümün üstüne biner. Bir hafta süreceği tahmin edilen iş on gün sürer, çünkü önce etrafındaki geçici yapıyı anlaman gerekir. Zamanla ekip "buraya dokunmayalım" demeye başlar; tahminler şişer, kimse sebebini tam söyleyemez.

Borcun iki türü vardır ve karıştırılmamaları önemlidir. **Bilinçli borç**, sebebi bilinerek alınır: demo yetişsin diye, önce talep olup olmadığını görmek için. **Farkında olunmayan borç** ise bilgi eksikliğinden doğar; kimse seçmemiştir, sonradan fark edilir. Birincisi yönetilebilir, ikincisi önce görünür kılınmalıdır.

Görünür kılmanın yolu basittir: geçici çözümü kodda bir notla ve takımın listesinde bir kayıtla işaretlemek. Kaydı olmayan borç, bir süre sonra "kodun aslı" sanılır.

## Dikkat

Teknik borç ile özensiz kod aynı şey değildir. Borç bir takastır; ne aldığını ve ne bıraktığını söyleyebiliyorsan orada bir karar vardır. Ne aldığını söyleyemiyorsan ortada takas değil, yalnızca dağınıklık vardır.

[[hackathon|Hackathon]] kodu bunun en açık örneğidir: kırk sekiz saatte yazılan bir projede borç almamak neredeyse imkânsızdır ve gereksizdir. Kritik olan an, projenin devam etmesine karar verilen andır — orada borcun bir listesi çıkarılır ve hangi maddelerin [[refactoring|yeniden düzenleneceğine]] bakılır. Bütün borcu kapatmak da hedef değildir; bir daha dokunulmayacak bir modüldeki borcun faizi hiç işlemez.
