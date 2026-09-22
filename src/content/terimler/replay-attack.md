---
term: "Replay Attack"
tr: "Tekrar saldırısı"
aliases: ["tekrar saldırısı", "yeniden oynatma saldırısı"]
category: guvenlik
subcategory: "Sözleşme açıkları"
level: orta
short: "Geçerli bir imzalı mesajın kopyalanıp başka bir zamanda ya da başka bir zincirde yeniden işletilmesi."
related: [chain-id, nonce-islem, signature-replay, chain-split, hard-fork, digital-signature]
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

Tekrar saldırısı şifre kırmayı da imza taklidini de gerektirmez. Saldırgan **gerçek** bir imzalı mesajı alır ve onu ait olmadığı bir bağlamda yeniden sunar. İmza her doğrulamada geçerli çıkar, çünkü gerçekten geçerlidir. Eksik olan şey imzanın kendisi değil, o imzanın nereye ve kaç kez ait olduğunu söyleyen bilgidir.

Üç bağlamda görülür:

**Aynı zincirde tekrar.** Aynı işlem ya da aynı yetki ikinci kez işletilir.

**İki zincir arasında.** Bir [[chain-split|zincir bölünmesinden]] sonra iki zincir de aynı geçmişi, aynı hesapları ve aynı anahtarları paylaşır. Bir tarafta gönderdiğin işlem diğer tarafta da geçerli görünür; kimse bir şey çalmamıştır ama sen bir tarafta yapmak istemediğin bir transferi yapmış olursun.

**Sözleşme içi imzalarda.** Zincir dışında imzalanıp sözleşmeye sunulan yetkilerde ([[signature-replay|imza tekrarı]]).

## Nasıl çalışır?

Savunmaların tamamı aynı fikre dayanır: imzalanan verinin içine **bağlamı yaz**.

[[nonce-islem|Nonce]] zamanı kapatır. Her hesabın işlemleri sırayla numaralanır; harcanmış bir numara bir daha geçmez, dolayısıyla kopyalanan bir işlem ikinci kez işlenmez.

[[chain-id|Zincir kimliği]] mekânı kapatır. İmzalanan verinin içinde zincirin numarası bulunur; farklı numaralı bir zincirde aynı imza doğrulanmaz. Ethereum'da bu koruma 2016'da bir ağ yükseltmesiyle geldi; öncesinde bölünmeler gerçek bir tekrar riski taşıyordu.

Uygulama düzeyinde ise sözleşmenin adresi, bir son geçerlilik tarihi ve tek kullanımlık bir değer aynı işi yapar.

## Dikkat

Bir bölünmenin ardından iki zincir de sana aynı bakiyeyi gösterir ve cüzdanın ikisini de aynı kolaylıkla imzalar. Yeni zincir ayrı bir kimlik numarası almamışsa risk sürer; bölünme günlerinde acele işlem göndermemek, ağların kendi koruma açıklamalarını beklemek yerleşik bir alışkanlıktır.

Her [[hard-fork|sert çatal]] bölünme demek değildir. Ağın tamamı yeni kurallara geçerse ortada iki zincir olmaz ve bu soru hiç doğmaz; soru ancak eski kuralda ısrar eden bir zincir yaşamaya devam ederse gündeme gelir.

Tekrar saldırısı kriptografiye özgü değildir. Bir yetkiyi taşıyan her [[digital-signature|imzalı mesaj]] — giriş jetonu, yetkilendirme belgesi, ödeme talimatı — bağlam bilgisi taşımıyorsa aynı riski taşır.
