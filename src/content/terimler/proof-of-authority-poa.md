---
term: "Proof of Authority (PoA)"
tr: ""
aliases: ["poa"]
category: konsensus
subcategory: "Mekanizmalar"
level: orta
short: "Blok üretme hakkının, kimliği bilinen ve önceden yetkilendirilmiş sınırlı sayıda doğrulayıcıda olduğu konsensüs mekanizması."
related: [permissioned-blockchain, consortium-blockchain, validator, testnet, practical-byzantine-fault-tolerance-pbft, proof-of-stake-pos]
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

**PoA**'da söz hakkı ne işleme gücüne ne de kilitli teminata bağlıdır; kimliği bilinen bir doğrulayıcı listesine bağlıdır. Listedeki düğümler blokları sırayla imzalar. Listeye kimin gireceğine ve kimin çıkarılacağına ağı kuran taraf ya da üyelerin kendi aralarında belirlediği kurallar karar verir. Türkçede yerleşik bir karşılığı yok; "yetki ispatı" gibi çeviriler duyulsa da yaygınlaşmadığı için terim İngilizce hâliyle kullanılır.

## Nasıl çalışır?

Katılımcılar önceden bilindiği için sahte kimlik üretme sorunu kapıda çözülmüş olur ([[sybil-resistance|Sybil direnci]]); kapı zaten kapalıdır. Geriye kalan iş, sayılı ve birbirini tanıyan bir kümenin sırayı belirlemesidir. Bu yüzden PoA ağları ya basit bir dönüşümlü üretim kuralıyla ya da [[byzantine-fault-tolerance-bft|BFT]] ailesinden bir protokolle çalışır; bloklar hızlı gelir ve kesinlik kısa sürede ilan edilir ([[deterministic-finality|deterministik kesinlik]]).

Güvenlik varsayımı açıktır: doğrulayıcıların çoğunluğu kurallara uyacaktır. Bunun arkasındaki yaptırım kriptografik değil kurumsaldır — itibar, sözleşme ve hukuk. Doğrulayıcının kim olduğu bilindiği için kötü davranışın karşılığı zincirin içinde değil, dışında aranır.

## Dikkat

PoA bir merkeziyetsizlik iddiası değil, bilinçli bir takastır: hız, basitlik ve öngörülebilirlik karşılığında [[permissionless|izinsizlik]] bırakılır. Kimin doğrulayıcı olacağına bir liste karar verdiği için ağ, o listeyi yöneten tarafın kararlarına ve sansüre açıktır.

Doğal yeri de buradan belli olur: [[testnet|test ağları]], kurum içi zincirler ve birkaç kuruluşun birlikte işlettiği [[consortium-blockchain|konsorsiyum zincirleri]]. Oralarda taraflar zaten birbirini tanır ve anlaşmazlıkta başvurulacak bir merci vardır. Aynı tasarımı katılımcıların birbirini tanımadığı açık bir ağa taşımak ise "listeyi kim tutuyor" sorusunu ortada bırakır.
