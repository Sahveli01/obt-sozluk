---
term: "Improvement Proposal (EIP, BIP)"
tr: "İyileştirme önerisi"
aliases: ["eip", "bip"]
category: yonetisim
subcategory: ""
level: orta
short: "Bir ağ protokolünde yapılacak değişikliğin numaralandırılmış bir belge hâlinde sunulduğu, oylamayla değil uzlaşıyla ilerleyen süreç."
related: [governance, network-upgrade, hard-fork, erc-ethereum-request-for-comments, client-blockchain]
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

İyileştirme önerisi, bir ağın protokolünde yapılacak değişikliğin herkese açık ve numaralandırılmış bir belge hâlinde yazıldığı süreçtir. Farklı ağlar bu belgelere kendi adlarını verir; EIP ve BIP gibi kısaltmalar buradan gelir.

Belgenin kendisi bir yetki taşımaz. Yaptığı iş, fikri, gerekçesini ve teknik ayrıntısını tek bir yerde toplamaktır; böylece tartışma dağınık mesajlar üzerinde değil, sabit bir metin üzerinde yürür.

## Benzetme

Bir kelimenin sözlüğe girmesi gibi. Kimse oylama yapıp "bu kelime artık dilimizde" demez. Yeterince insan kullanmaya başlarsa kelime sözlüğe girer; kimse kullanmazsa önerildiği yerde kalır. Belge kararı değil, teklifi kayda geçirir.

## Nasıl çalışır?

Öneriye sırası geldiğinde bir numara verilir ve o numara kalıcıdır; yıllar sonra konuşanlar aynı şeyden bahsettiklerini bilir. Belgenin bölümleri de baştan bellidir: özet, gerekçe, teknik belirtim, geriye dönük uyumluluk ve mümkünse bir referans uygulama.

Öneri kabaca taslak, inceleme ve nihai gibi aşamalardan geçer; ayrıntılar ağdan ağa değişir. Belirleyici olan aşama adları değil şu ikisidir: geliştiriciler arasında ciddi bir itirazın kalmaması ve [[client-blockchain|istemci yazılımlarının]] değişikliği gerçekten uygulaması. Uygulayan istemci yoksa belge kâğıt üstünde kalır; uygulanırsa değişiklik bir [[network-upgrade|ağ yükseltmesiyle]] yürürlüğe girer.

## Dikkat

Bu süreç bir DAO oylaması değildir. Token yoktur, [[governance|yönetişimdeki]] gibi sayılan bir oy ve aranan bir katılım eşiği yoktur; sonucu kaba bir uzlaşı ve çalışan kod belirler. Herkesin hemfikir olmadığı bir değişiklik yine de uygulanabilir — ve yeterince taraf karşı çıkıp kendi yazılımını sürdürürse sonuç bir [[hard-fork|sert çatallanma]] olur.

Ayrıca her numaralı belge protokolü değiştirmez. Bunların bir bölümü uygulama katmanındaki standartlardır ([[erc-ethereum-request-for-comments|ERC]] gibi): ağın kurallarını değil, sözleşmelerin birbirine nasıl görüneceğini tanımlar.
