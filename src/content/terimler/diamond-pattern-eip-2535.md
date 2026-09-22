---
term: "Diamond Pattern (EIP-2535)"
tr: ""
aliases: ["eip-2535"]
category: akilli-sozlesmeler
subcategory: "Tasarım kalıpları"
level: ileri
short: "Tek bir proxy'nin her fonksiyon seçicisini ayrı bir mantık sözleşmesine (facet) yönlendirdiği modüler yükseltme kalıbı."
related: [proxy-contract, upgradeable-contract, function-selector, contract-size-limit, delegatecall, storage-slot]
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

Diamond, tek bir [[proxy-contract|proxy]] adresinin arkasına **birden çok** mantık sözleşmesi koyan bir kalıptır. Sıradan bir proxy her çağrıyı tek bir mantık sözleşmesine iletir; diamond ise her fonksiyonu ayrı bir sözleşmeye yönlendirebilir. Bu parçalara **facet** (elmas yüzeyi) denir, adı da buradan gelir.

Terim çevrilmez; kodda ve tartışmalarda "diamond" ve "facet" diye geçer.

İki derde çare olur. Birincisi [[contract-size-limit|sözleşme boyut sınırı]]: büyüyen bir uygulama tek sözleşmeye sığmaz hâle gelir. İkincisi yükseltmenin taneciği: tek bir fonksiyonu değiştirmek için bütün sözleşmeyi yeniden dağıtmak gerekmez.

## Nasıl çalışır?

Diamond'ın deposunda bir eşleme durur: [[function-selector|fonksiyon seçicisi]] → facet adresi. Çağrı geldiğinde `fallback` ilk dört bayta bakar, tablodan ilgili facet'i bulur ve [[delegatecall]] ile oraya gider. Kod facet'te çalışır ama yazdığı her şey diamond'ın deposuna yazılır.

Tabloyu değiştiren işleme **diamond cut** denir: bir seçiciyi ekler, başka bir facet'e yönlendirir ya da tamamen kaldırır. EIP-2535 ayrıca dışarıdan "hangi seçici hangi facet'te" sorusunu sorabilmek için bir dizi sorgu fonksiyonu (**loupe**) tanımlar; böylece bir diamond'ın içeriği zincirden okunabilir.

Depolamada ise tek bir düz değişken listesi kullanılamaz, çünkü facet'ler birbirinden habersiz yazılır. Yaygın çözüm, her facet'in kendi verisini bir `struct` içinde toplaması ve bu struct'ı sabit bir metinden türetilmiş [[storage-slot|depolama slotuna]] yerleştirmesidir. Böylece iki facet'in değişkenleri üst üste binmez.

## Dikkat

Diamond her projeye gerekmez. Getirdiği maliyet gerçektir: daha karmaşık dağıtım, seçici tablosunun kendisi bir yetki noktası, denetimi ve okuması daha zor bir kod tabanı. İki facet yanlışlıkla aynı depolama alanını kullanırsa ortaya çıkan hatayı bulmak da normal bir proxy'dekinden zordur.

Ayrıca kalıbın modüler olması [[upgradeable-contract|yükseltme]] güveni sorusunu ortadan kaldırmaz. Seçici tablosunu değiştirebilen adres, uygulamanın tek bir fonksiyonunu sessizce başka bir koda bağlayabilir.
