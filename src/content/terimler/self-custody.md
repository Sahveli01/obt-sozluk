---
term: "Self-Custody"
tr: ""
aliases: ["self custody"]
category: cuzdanlar
subcategory: "Cüzdan türleri"
level: orta
short: "Varlıkların anahtarını hiçbir aracıya bırakmadan kendin tutman ve bunun getirdiği sorumluluğu üstlenmen."
related: [non-custodial-wallet, custodial-wallet, seed-phrase, key-management, multisig, social-recovery]
disambiguation: []
tags: []
status: taslak
reviewedBy: []
dateSensitive: false
sources: []
added: 2026-09-21
updated: 2026-09-21
---

## Nedir?

Self-custody, anahtarı kendin tutma tercihidir. Türkçede tek kelimelik bir karşılığı yok; "kendi saklaman" ya da "anahtarı kendin tutman" diye açıklanır.

Kripto dünyasının en çok tekrarlanan cümlesi buradan gelir: *anahtar senin değilse, varlık da senin değil.* Bu bir slogan değil, teknik bir betimlemedir. Zincir, bir varlığı kimin taşıyabileceğine karar verirken isme, hesaba veya niyete bakmaz; geçerli bir imzaya bakar. [[private-key|Özel anahtarla]] geçerli imza üretebilen herkes o varlığı taşıyabilir — üretemeyen kimse, sen dahil, taşıyamaz.

## Benzetme

Dosyalarını buluta yüklemekle kendi diskinde tutmak arasındaki fark gibi. Bulutta parolanı unutursan kurtarma bağlantısı gelir, bir sorun çıkarsa yazacağın bir destek vardır — ama hesabını kapatma yetkisi de onlardadır. Kendi diskinde kimse seni kilitleyemez; disk bozulduğunda da arayacağın kimse yoktur.

## Nasıl çalışır?

Pratikte üç işe indirgenir: anahtarları güvenli biçimde üretmek, [[seed-phrase|kurtarma ifadesini]] çevrimdışı ve dayanıklı biçimde yedeklemek, imzaladığın şeyi anlamak.

Yedekleme tek başına bir denge problemidir: tek nüsha tutmak kayıp riskini, çok nüsha tutmak çalınma riskini artırır. Tek bir kişiye ya da tek bir kâğıda bağımlılığı azaltmak için işlemi birden fazla imzaya bağlayan [[multisig|çoklu imza]] ya da güvendiğin kişilere kurtarma yetkisi veren [[social-recovery|sosyal kurtarma]] gibi düzenekler kullanılır. Bu konunun bütünü [[key-management|anahtar yönetimi]] başlığı altında toplanır.

## Dikkat

Self-custody bir "güvenlik seviyesi" değil, sorumluluğun kimde olduğunun adıdır. Kötü yedeklenmiş bir self-custody cüzdan, dikkatli kullanılan bir [[custodial-wallet|custodial hesaptan]] daha kırılgan olabilir; tersi de geçerlidir. Seçim, hangi riski taşıyabildiğinle ilgilidir.

En çok atlanan tarafı ise devirdir: hastalık, kaza ya da "bana bir şey olursa" senaryoları bu tercihin parçasıdır. Planlanmadığında varlığı geri getirebilecek bir kurum yoktur.
