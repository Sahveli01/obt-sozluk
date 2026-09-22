---
term: "Prover"
tr: "İspatlayıcı"
aliases: ["ispatlayici"]
category: kriptografi
subcategory: "Sıfır bilgi (ZK) ve ileri kriptografi"
level: orta
short: "Bir sıfır bilgi sisteminde hesabı fiilen yapan ve sonucun doğruluğunu gösteren kanıtı üreten taraf."
related: [verifier, zero-knowledge-proof-zkp, circuit-zk, zkvm, recursive-proof]
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

Bir [[zero-knowledge-proof-zkp|sıfır bilgi ispatında]] iki rol vardır. Prover, iddiayı ortaya atan ve onu destekleyen kanıtı üreten taraftır; [[verifier|doğrulayıcı]] ise o kanıta bakıp kabul ya da ret diyen taraf.

Bütün mesele bu iki rolün **maliyetinin eşit olmamasıdır**. Kanıt üretmek, işi baştan yapmaktan da pahalıdır; kanıtı kontrol etmek ise işin kendisinin yanında hiç kalır. Ölçeklenme fikri tam olarak bu dengesizliğin üstüne kurulur: ağır işi bir taraf bir kez yapar, kalan herkes ucuz kontrolle yetinir.

## Benzetme

Labirentin çıkışını bulmakla, birinin çizdiği yolu parmağınla takip etmek arasındaki fark gibi. Birincisi saatler sürer, çıkmaz sokaklara girip geri dönmeyi gerektirir. İkincisi bir dakika sürer ve yolun doğru olduğunu görmen için labirenti hiç dolaşmana gerek kalmaz.

## Nasıl çalışır?

Prover'ın elinde iki tür girdi vardır. **Açık girdiler** herkesin gördüğü değerlerdir: hangi devreyi çalıştırdığı, sonucun ne olduğu. **Tanık** ise yalnızca onda olan gizli girdidir — bir parola, bir imza, bir hesap bakiyesi.

Prover, [[circuit-zk|devreyi]] bu girdilerle çalıştırır, bütün ara değerleri hesaplar ve kısıtların gerçekten sağlandığını gösteren kanıtı üretir. Bu adım hem uzun sürer hem çok bellek ister; ağır işler genelde güçlü makinelerde, çoğu zaman paralel çalıştırılır.

Prover'a güvenmek gerekmez. Yalan söylemeye kalkarsa doğrulayıcıdan geçecek bir kanıt üretemez, çünkü kanıtın geçerliliği prover'ın dürüstlüğüne değil kısıtların sağlanmasına bağlıdır.

## Dikkat

Prover yalan söyleyemez ama **kaybolabilir**. Kanıt üretmeyi reddeden ya da çöken bir prover sistemi durdurur; bu bir güvenlik değil, süreklilik sorunudur ve tasarımda ayrıca düşünülmesi gerekir.

İkinci ve daha sinsi risk gizliliktedir. Tanığı gören taraf prover'dır. Kanıt üretmeyi dışarıdan bir hizmete yaptırıyorsan, gizli girdini de o hizmete vermiş olursun — ispat sıfır bilgi olsa bile.
