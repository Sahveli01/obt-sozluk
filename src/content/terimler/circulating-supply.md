---
term: "Circulating Supply"
tr: "Dolaşımdaki arz"
aliases: []
category: tokenlar
subcategory: "Tokenomi"
level: orta
short: "Serbestçe el değiştirebilen token miktarı; kilitli, vesting takvimindeki ve hazinede bekleyen token'lar bu sayıya girmez."
related: [total-supply, max-supply, token-unlock, vesting, market-capitalization, treasury]
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

Circulating supply, var olan token'ların **şu anda serbestçe el değiştirebilen** kısmıdır. Bir kişinin cüzdanında duran ve istediği an gönderebildiği token bu sayının içindedir; bir kilit sözleşmesinde bekleyen token değildir.

## Nasıl çalışır?

Hesap çıkarmayla kurulur: [[total-supply|toplam arzdan]] dolaşımda sayılmayan bakiyeler düşülür. Tipik olarak düşülenler şunlardır: [[vesting]] sözleşmelerinde bekleyen ekip ve yatırımcı payları, projenin [[treasury|hazinesinde]] duran token'lar, henüz dağıtılmamış teşvik havuzları ve yakma adreslerindeki bakiye.

Sayı iki yoldan büyür: takvimdeki bir [[token-unlock|kilit açılışı]] geldiğinde ya da yeni basılan token dağıtıldığında.

## Dikkat

Bu, ölçülen değil **tanımlanan** bir büyüklüktür. "Serbestçe el değiştirebilir" ifadesinin sınırını kimin çizdiğine bağlıdır: hazinedeki token'ı dolaşımda sayan kaynak da vardır, saymayan da. Bu yüzden aynı token için iki farklı veri sitesinde iki farklı circulating supply görebilirsin. Sayıyı kullanmadan önce kaynağın tanımını okumak gerekir.

Yakılmış token'lar için de durum aynıdır: erişilemez bir adrese gönderilen bakiye zincirde görünmeye devam eder ve bazı kaynaklar bunu arzdan düşer, bazıları düşmez.

Üçlüyü ayır: circulating supply serbest kısım, total supply var olan her şey, [[max-supply|max supply]] ise izin verilen tavandır. [[market-capitalization|Piyasa değeri]] hesabında kullanılan arz genellikle circulating supply'dır; [[fully-diluted-valuation-fdv|FDV]] hesabında ise toplam ya da azami arz kullanılır.
