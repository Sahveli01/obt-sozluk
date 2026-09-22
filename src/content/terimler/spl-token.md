---
term: "SPL Token"
tr: ""
aliases: []
category: tokenlar
subcategory: "Standartlar"
level: orta
short: "Solana'nın token standardı; bakiyeler token'ın kendi sözleşmesinde değil, sahip başına açılan ayrı hesaplarda durur."
related: [solana, token-standard, erc-20, account-model, storage-rent, mint]
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

SPL Token, [[solana|Solana]]'da token'ların uyduğu standarttır. [[erc-20|ERC-20]]'den en görünür farkı, her token'ın kendine ait bir programı olmamasıdır: bütün token'lar ortak bir token programı tarafından işletilir. Yeni bir token çıkarmak kod yazıp dağıtmak değil, o programa yeni bir kayıt açmaktır.

Kayıtlar iki türlüdür. **Mint hesabı** token'ın kimliğidir; toplam arz, ondalık sayısı ve basma–dondurma yetkileri orada durur. **Token hesabı** ise bir sahibin o token'dan ne kadarı olduğunu tutar ve her sahip–token çifti için ayrı açılır. Yani bakiye, [[account-model|hesap modelinde]] cüzdanının içinde bir alan değil, cüzdanına bağlı ayrı bir hesaptır.

## Benzetme

Posta kutusu kiralamak gibi. Her abonelik için ayrı bir kutu açılır; kutu senin adınadır, kirası vardır ve sen kapatana kadar orada durur. İçindekiler senindir ama kutunun kendisi ayrı bir şeydir — adresin değişmese de her yeni abonelik yeni bir kutu ister.

## Nasıl çalışır?

Bir transfer üç şeye bakar: gönderenin token hesabı, alıcının token hesabı ve ikisinin aynı mint'e bağlı olup olmadığı. Alıcının o token için hesabı yoksa transferden önce açılması gerekir. Hesap zincirde yer kapladığı için [[storage-rent|kiradan]] muaf kalacak kadar küçük bir bakiye yatırılır ve bu bedeli genelde gönderen öder.

"Hangi hesaba göndereceğim" sorusunun tek bir cevabı olsun diye, sahip adresi ile mint adresinden türetilen standart bir adres kullanılır. Cüzdanlar bunu senin adına hesaplar; sen yine alıcının cüzdan adresini yazarsın.

Yetki devri tanıdık gelecektir: bir token hesabına delege atayıp belirli bir miktara kadar harcama yetkisi verebilir, sonra bu yetkiyi geri alabilirsin.

## Dikkat

En sık karışan şey, token hesabı ile cüzdan adresinin aynı sanılmasıdır. Zincirde token cüzdan adresine değil, o cüzdana bağlı token hesabına gider. Bir blok gezgininde transferin hedefini gördüğünde alıcının cüzdan adresini değil, o hesabın adresini okuyor olabilirsin.

İkincisi arz meselesi. Bir mint hesabının basma yetkisi (mint authority) kapatılmadıkça yeni token [[mint|basılabilir]]; dondurma yetkisi açıksa hesaplar dondurulabilir. Arzın bugün sabit görünmesi, sabit kalacağı anlamına gelmez — yetkilerin durumu mint hesabında yazar ve kontrol edilebilir.
