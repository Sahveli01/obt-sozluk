---
term: "Vote Delegation"
tr: "Oy devri"
aliases: []
category: yonetisim
subcategory: ""
level: orta
short: "Token'ı elden çıkarmadan yalnızca oy hakkını başka bir adrese aktarma; devir istendiği anda geri alınabilir."
related: [delegate, voting-power, governance-token, voter-apathy, governor-contract]
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

Oy devri, bir adresin [[voting-power|oy gücünü]] kendisi kullanmak yerine başka bir adrese kullandırmasıdır. Devredilen şey yalnızca oy hakkıdır: token cüzdanında kalır; harcayabilir, satabilir, teminat gösterebilirsin. Devralan taraf token'a dokunamaz, sadece senin ağırlığınla oy verir.

## Nasıl çalışır?

Devir tek bir işlemle yapılır ve sözleşmede "bu adresin ağırlığı şu adrese yazılsın" diye kaydedilir. Geri almak aynı işlemin tekrarıdır: hedefi kendine ya da başka birine çevirirsin, önceki devir o anda biter.

İki ayrıntı sık gözden kaçar. Birincisi, devir bir miktarı değil bakiyenin kendisini takip eder; token'ını satarsan ağırlık da gider. İkincisi, ağırlıklar geçmiş bir blokta ölçüldüğü için bugün yaptığın devir, zaten açılmış bir oylamayı etkilemez — ancak bundan sonraki önerilerde geçerli olur.

Mekanizmanın amacı katılımı ayakta tutmaktır. Her öneriyi okumaya vakti olmayan biri ağırlığını boşa harcamak zorunda kalmaz; konuyu takip eden bir [[delegate|temsilciye]] bırakır ve fikri değişirse geri alır. Bu, [[voter-apathy|seçmen kayıtsızlığının]] kararları bir avuç aktif adrese bırakmasını bir ölçüde engeller.

## Dikkat

Devir katılımı artırırken gücü yoğunlaştırır. Binlerce küçük adres ağırlığını birkaç temsilciye verdiğinde oylamaya katılan bakiye büyür, ama kararı fiilen veren taraf sayısı azalır. Bu, tasarımın bilinen ikinci yüzüdür ve bir [[governor-contract|governor sözleşmesinde]] sayılan ağırlığa bakılarak görülebilir.

Pratik bir uyarı da var: bir arayüzde "devret" yazan her düğme bunu yapmaz. İmzaladığın işlemin oy yetkisi mi yoksa token harcama izni mi verdiğini kontrol et; bu ayrımın atlanması [[ice-phishing]] saldırılarının dayandığı açıktır.
