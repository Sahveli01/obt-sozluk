---
term: "Progressive Decentralization"
tr: "Kademeli merkeziyetsizleşme"
aliases: []
category: yonetisim
subcategory: ""
level: orta
short: "Kontrolün başta kurucu ekipte tutulup zaman içinde adım adım topluluğa devredilmesini öngören yaklaşım."
related: [decentralization, decentralized-autonomous-organization-dao, governor-contract, timelock, multisig, governance]
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

Yeni bir protokolün iki ihtiyacı çelişir. Ürünün çalışması için hızlı karar almak, hatayı aynı gün düzeltmek gerekir; [[decentralization|merkeziyetsizlik]] ise tanımı gereği yavaşlatır.

Kademeli merkeziyetsizleşme, bu çelişkiyi zamana yayma planıdır: önce kontrol kurucu ekipte kalır, ürün oturdukça yetkiler parça parça topluluğa aktarılır.

## Benzetme

Yeni yapılmış bir sitenin yönetimi gibi. İlk dönem karar inşaatı yapan firmadadır: hızlıdır, kimseye sorulmaz ve devir sözü baştan verilir. Devrin gerçekten olup olmadığını anlamanın yolu ise sözler değil, anahtarların kimde olduğuna bakmaktır.

## Nasıl çalışır?

Tipik sıra şöyledir. Başlangıçta sözleşmelerin yükseltme ve parametre yetkisi ekibin [[multisig|çoklu imzasındadır]]. Ardından jeton dağıtılır ve oylama açılır, ama kararlar henüz bağlayıcı değil tavsiye niteliğindedir ([[off-chain-governance|zincir dışı yönetişim]]). Sonraki adımda yetkiler bir [[governor-contract|yönetişim sözleşmesine]] ve bir [[timelock|zaman kilidine]] taşınır: artık değişiklik yalnızca oylamayla ve bekleme süresinden sonra uygulanabilir. Son adımda yükseltme yetkisi ya tümden kaldırılır ya da yalnızca oylamanın çağırabileceği bir yola bağlanır.

## Dikkat

Plan ilan edildiği gibi işlemeyebilir. Adımlar ertelenebilir, "acil durum" yetkisi geçici diye konulup kalıcılaşabilir, son adım hiç gelmeyebilir.

Bu yüzden tek anlamlı ölçüt yol haritası değil, o anki yetki listesidir ve her maddesi zincirden okunabilir: sözleşmelerin sahibi hangi adres, yükseltme yetkisi kimde, hazineyi kim hareket ettirebiliyor, zaman kilidi var mı ve süresi ne kadar, acil durdurma düğmesi kimin elinde.

Bir DAO'nun kurulmuş olması bu soruların cevabını değiştirmez; yalnızca cevabın nerede aranacağını gösterir.
