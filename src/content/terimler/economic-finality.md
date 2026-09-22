---
term: "Economic Finality"
tr: "Ekonomik Kesinlik"
aliases: ["ekonomik kesinlik"]
category: konsensus
subcategory: "Kesinlik ve güvenlik özellikleri"
level: ileri
short: "Geri almanın mümkün ama geri alanın kilitli sermayesini kaybetmesi pahasına olduğu kesinlik türü."
related: [finality, slashing, staking, proof-of-stake-pos, deterministic-finality, probabilistic-finality]
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

**Ekonomik kesinlik**, "bunu geri almak imkânsızdır" demez. Şunu der: geri almak mümkündür, bedeli de şudur. Kesinlik bir yasak değil, bir fiyattır — ve fiyat sayılabilir.

Dayandığı fikir basittir. Kesinleşmiş bir bloğu geri almak, [[staking|kilitlenmiş]] teminatı olan doğrulayıcıların çelişkili imza atmasını gerektirir. O imzaların ikisi birden ortada olduğu anda kural ihlali kanıtlanmış olur ve teminat kesilir ([[slashing|slashing]]).

## Nasıl çalışır?

Üç parça gerekir.

**Kilitli sermaye.** Oy kullanan tarafın kaybedecek bir şeyi olmalı. Teminat çekilmişse elde yalnızca imza kalır, ceza uygulanacak bir varlık kalmaz.

**Kanıtlanabilir ihlal.** "Aynı yükseklikte iki farklı bloğu imzalamak" gibi kurallar, ihlali tek bir veri parçasıyla ispatlanır hâle getirir. Kimsenin niyet okumasına gerek kalmaz; iki imza yan yana konur.

**Cezayı uygulayacak bir zincir.** İhlal kanıtı ancak çalışan bir ağa sunulabildiğinde bir anlam taşır.

Bu üçü bir aradayken "şu bloğu geri almak en az şu kadar kilitli sermayeyi yakmayı gerektirir" cümlesi kurulabilir. Kesinliğin arkasındaki güvence, o rakamın saldırının getirisinden büyük kalmasıdır.

## Dikkat

Diğer iki türden farkı kaynağındadır. [[probabilistic-finality|Olasılıksal kesinlikte]] engel birikmiş iştir ve saldırgan başarısız olsa bile yalnızca harcadığı kaynağı kaybeder; kullandığı donanım elinde kalır. [[deterministic-finality|Deterministik kesinlikte]] engel kuralın kendisidir: kurallara uyan düğümler o bloğu geri almaz. Ekonomik kesinlikte engel, kuralı çiğneyenin sermayesinin yok edilebilmesidir.

Bu kesinlik ölçülebilir olduğu için sınırı da bellidir: kilitli sermayenin toplamı kadardır. Saldırıdan elde edilecek kazanç o tutarı aşıyorsa hesap tersine döner. Bu yüzden büyük değer taşıyan sistemler, taşıdıkları değerle arkalarındaki teminatın oranını gözetir.
