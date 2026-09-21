---
term: "Permissioned Blockchain"
tr: "İzinli blok zinciri"
aliases: ["izinli blok zinciri", "izinli blockchain"]
category: temeller
subcategory: "Temel kavramlar"
level: orta
short: "Ağa katılmanın, işlem göndermenin ya da blok üretmenin önceden onaylanmış taraflara açık olduğu blockchain."
related: [permissionless, private-blockchain, consortium-blockchain, public-blockchain, proof-of-authority-poa]
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

İzinli blockchain'de katılımcılar bellidir. Kimin blok üretebileceği, kimin işlem gönderebileceği ve bazen kimin kayıtları okuyabileceği bir yetkilendirme listesiyle belirlenir. Yapı olarak yine bloklar ve zincir vardır; değişen, kapıda kimlik sorulmasıdır.

Okuma yetkisiyle yazma yetkisi de birbirinden ayrılabilir: bazı ağlarda kayıtları herkes görebilirken blok üretmek yalnızca seçilmiş doğrulayıcılara açıktır.

## Nasıl çalışır?

Katılımcılar önceden bilindiğinde [[sybil-resistance|Sybil direnci]] problemi ortadan kalkar: kimse binlerce sahte kimlikle ortaya çıkamaz, çünkü kimlikler zaten kayıtlıdır. Bu, pahalı konsensüs yöntemlerine ihtiyacı da bitirir.

Yerine genellikle [[proof-of-authority-poa|Proof of Authority]] ya da [[practical-byzantine-fault-tolerance-pbft|PBFT]] ailesinden bir mekanizma kullanılır. Doğrulayıcılar birbirini tanıdığı için blok üretimi saniyeler yerine milisaniyeler sürer, [[finality|kesinlik]] anında gelir ve enerji maliyeti neredeyse sıfırdır.

Üyelik yönetimi de ağın bir parçasıdır. Yetkili listesi genellikle zincir üzerindeki bir sözleşmede ya da ağın yapılandırmasında tutulur; yeni bir doğrulayıcı eklemek veya mevcut birini çıkarmak, kalan üyelerin imzaladığı bir işlemle yapılır.

Karşılığında verilen şey de açıktır: listeyi kim yönetiyorsa ağın kurallarını da o yönetir. Bu yüzden izinli bir ağı değerlendirirken bakılacak ilk yer konsensüs algoritması değil, o listenin kimin elinde olduğudur.

## Dikkat

İzinli bir zincirden [[censorship-resistance|sansüre direnç]] beklenmez. Doğrulayıcıların çoğunluğu anlaşırsa bir işlemi engelleyebilir ya da geçmişi değiştirebilir; yapı buna teknik olarak izin verir.

Bu onu kötü yapmaz. Birbirini tanıyan kurumların ortak bir kayıt tutması gereken işlerde izinli zincir makul bir tercihtir. Yanlış olan, onu herkese açık bir ağın sunduğu garantilerle aynı kefeye koymaktır.
