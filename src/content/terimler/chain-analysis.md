---
term: "Chain Analysis"
tr: "Zincir analizi"
aliases: ["zincir analizi"]
category: guvenlik
subcategory: "Gizlilik"
level: orta
short: "Herkese açık zincir verisinden adresleri kümeleyip mümkün olduğunda gerçek kimliklerle eşleştirmeye çalışan inceleme alanı."
related: [pseudonymity, on-chain-analytics, kyc, anonymity-set, mixer, block-explorer]
disambiguation: []
tags: []
status: taslak
reviewedBy: []
dateSensitive: true
sources: []
added: 2026-09-21
updated: 2026-09-22
---

## Nedir?

Zincir analizi, herkese açık işlem verisini kullanarak adresleri birbirine bağlama ve mümkün olduğunda gerçek kimliklerle eşleştirme işidir. [[pseudonymity|Takma adlılığın]] karşı tarafıdır: zincir herkesin okuyabildiği kalıcı bir kayıt tuttuğu sürece o kaydı okuyan bir taraf da hep olacaktır.

Kullanımı hem kolluk hem ticari taraftadır: çalınan fonların izini sürmek, borsaların ve protokollerin uyum süreçleri, risk puanlaması, araştırma ve gazetecilik. Veriyi toplayıp satan şirketler de aynı yöntemleri kullanır. Kimlik tarafıyla ilgilenmeyen daha geniş veri işine ise [[on-chain-analytics|zincir üstü analitik]] denir.

## Nasıl çalışır?

Temel iş kümelemedir: aynı kişiye ait olduğu tahmin edilen adresleri tek grupta toplamak. Bunun için harcama kalıpları, işlemlerin biçimi, zamanlama ve adreslerin birlikte kullanılması gibi ipuçları değerlendirilir. Kümeler sonra dışarıdan gelen bilgiyle etiketlenir: bir borsanın bilinen adresleri, kamuya açıklanmış bağış adresleri, bir sitede paylaşılmış adres, bir olay sonrası bilinen cüzdanlar. Bir [[block-explorer|blok gezgini]] bu verinin tamamını zaten herkese açık gösterir; analizin kattığı şey veri değil, yorumdur.

Kimlikle asıl bağ çoğunlukla zincirin dışında kurulur. Kullanıcı, [[kyc|kimlik doğrulaması]] yapılmış bir hesaptan kendi adresine para çektiğinde o adres bir isme bağlanır — ve kümeleme sayesinde bağ tek adreste kalmaz, kümenin tamamına yayılır.

## Dikkat

Sonuçlar kesinlik değil olasılıktır. Kümeleme varsayımlara dayanır, yanlış eşleşme olabilir ve bir adresin bir kişiye bağlanması o kişi hakkında verilmiş bir hüküm değildir.

Asıl görülmesi gereken şey şu: bu, zincirin şeffaf olmasının doğal sonucudur, sonradan eklenmiş bir gözetim katmanı değil. Gizlilik istiyorsan varsayılanın sana karşı çalıştığını bilerek hareket etmen gerekir — kayıt kalıcıdır, analiz yıllar sonra da yapılabilir ve [[anonymity-set|anonimlik kümesi]] zamanla ancak küçülür.

Yazıldığı tarih itibarıyla bu alanın araçları hızla gelişiyor; bugün ayırt edilemeyen bir kalıbın yarın ayırt edilebilir olmayacağının bir garantisi yok. [[mixer|Karıştırıcılara]] ya da başka bir araca dayanan her varsayım bu yüzden zamana karşı zayıftır.
