---
term: "Off-chain Governance"
tr: "Zincir dışı yönetişim"
aliases: []
category: yonetisim
subcategory: ""
level: orta
short: "Oyların zincir dışında imzayla toplandığı, sonucun uygulanmasının ise ayrıca birilerinin işlem göndermesine bağlı olduğu yönetişim biçimi."
related: [on-chain-governance, snapshot-voting, multisig, governance-forum, governance-proposal]
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

Zincir dışı yönetişimde tartışma da oylama da zincirin dışında yapılır. Oy vermek bir işlem göndermek değil, cüzdanla bir mesaj imzalamaktır; imzalar toplanır, ağırlıklar hesaplanır ve sonuç ilan edilir. Bu sırada zincirde hiçbir şey değişmez — değişmesi gerekiyorsa bunu birilerinin ayrıca yapması gerekir.

## Benzetme

Bir sınıfın hangi filme gideceğine oylamayla karar vermesi gibi. Oylama kolaydır, herkes katılır, sonuç nettir. Ama bileti alacak kişi tektir: o kişi parayı toplayıp gişeye gitmezse karar kâğıt üstünde kalır. Kararı vermekle kararı uygulamak aynı iş değildir.

## Nasıl çalışır?

En yaygın biçimi, ağırlıkların geçmiş bir bakiye kesitinden okunduğu [[snapshot-voting|imzayla oylamadır]]. Oy ücretsiz olduğu için küçük bakiyeli adresler de katılır ve katılım genellikle zincir üstü oylamalardan yüksek çıkar. Tartışma aşaması da aynı mantıkla bir [[governance-forum|yönetişim forumunda]] yürür.

Kabul edilen karar sonra elle yürütülür. Bu yetki çoğunlukla birkaç kişinin birlikte imzalamasını gerektiren bir [[multisig|çoklu imza]] cüzdanındadır: imzacılar sonucu okur ve gereken işlemi gönderir.

Buradan çıkan sonucu açıkça söylemek gerekir: **merkeziyetsiz oylama ile merkeziyetsiz uygulama aynı şey değildir.** Oylama binlerce kişiye açık olabilir; uygulama beş imzacıya bağlıysa o beş kişi sonucu geciktirebilir, eksik uygulayabilir ya da hiç uygulamayabilir. Bu bir kusur değil, modelin bilinen bedelidir; karşılığında ucuzluk ve yüksek katılım alınır.

## Dikkat

İmzaların toplandığı ve sayıldığı yer de zincirin dışındadır. O hizmet kapanırsa, bir [[governance-proposal|öneriyi]] göstermezse ya da sayımı yanlış yaparsa bunu zincirde ispatlayacak bir kayıt yoktur.

Bu yüzden birçok protokol iki modeli birlikte kullanır: geri alınabilir ve düşük etkili kararlar zincir dışında, sözleşmeleri ve hazineyi doğrudan değiştiren kararlar [[on-chain-governance|zincir üstünde]] alınır.
