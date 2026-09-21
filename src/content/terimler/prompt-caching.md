---
term: "Prompt Caching"
tr: ""
aliases: []
category: yapay-zeka
subcategory: "Prompt ve kullanım"
level: ileri
short: "İsteklerin başında tekrar eden sabit bağlamın yeniden işlenmeyip önbellekten okunması."
related: [token-pricing, context-engineering, llm-api, system-prompt, context-window]
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

Aynı uzun [[system-prompt|sistem talimatını]], aynı araç tanımlarını ya da aynı belgeyi arka arkaya gönderiyorsan, model her seferinde o metni baştan işler. Prompt caching bu tekrar eden ön kısmı bir kez işleyip ara sonucu saklar; sonraki isteklerde aynı önek yeniden hesaplanmaz, hazır hâliyle kullanılır. Türkçede "prompt önbellekleme" deniyor ama terim İngilizce yerleşti.

## Benzetme

Her gösteriden önce dekoru sıfırdan kurmak yerine sahnede kurulu bırakmak gibi. Kurulum maliyetini bir kez ödersin; her akşam yalnızca o akşama ait olan kısmı hazırlarsın.

## Nasıl çalışır?

Önbellek genellikle **önekten** çalışır: isteğin en başından itibaren birebir aynı olan kısım eşleşir, ilk farklı karakterden sonrası yeniden işlenir. Buradan çok pratik tek bir kural çıkar — değişmeyeni başa, değişeni sona koy. Sistem talimatı ve araç tanımları en üstte, kullanıcının o anki mesajı en altta olmalıdır.

Kazanç iki yönlüdür: yeniden hesaplanmayan metin gecikmeyi düşürür ve önbellekten okunan token indirimli sayılır ([[token-pricing]]).

Yazıldığı tarih itibarıyla ayrıntılar sağlayıcıdan sağlayıcıya değişiyor: önbellek kaydının ömrü, önbelleğe alınabilecek en küçük metin boyutu ve kullanımın açıkça işaretlenmesi gerekip gerekmediği aynı değil. Bu yüzden burada rakam verilmiyor.

## Dikkat

Önbellek doğruluğu değiştirmez, yalnızca hızı ve maliyeti. Başa tarih, kullanıcı adı ya da sayaç gibi her istekte değişen bir şey koyarsan önbellek her seferinde ıskalar ve hiçbir kazanç göremezsin — üstelik bunu fark etmen zordur, çünkü cevaplar yine doğru gelir. Kazancı varsaymak yerine cevaptaki kullanım bilgilerinden önbellek isabetini ölç.

Adındaki "caching" yüzünden hatırlamayla karıştırılıyor: prompt caching bir bellek değildir, modelin geçmişi hatırlaması ([[memory-ai]]) ile hiçbir ilgisi yoktur.
