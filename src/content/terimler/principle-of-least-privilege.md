---
term: "Principle of Least Privilege"
tr: "En Az Yetki İlkesi"
aliases: ["en az yetki ilkesi"]
category: guvenlik
subcategory: "Temel kavramlar"
level: orta
short: "Her bileşene ve her kişiye, işini görecek en az yetkiyi ve yalnızca gereken süre kadar vermek."
related: [access-control, ownable, multisig, role-based-access-control-rbac, defense-in-depth, threat-model]
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

En az yetki ilkesi tek bir cümledir: her bileşen ve her kişi, işini görecek en az yetkiye ve yalnızca gereken süre kadar sahip olmalıdır. İlkenin dayandığı varsayım karamsardır ama gerçekçidir — bir anahtar er geç sızar, bir hesap er geç ele geçirilir. O gün geldiğinde kaybın büyüklüğünü belirleyen şey, o anahtarın neleri yapabildiğidir.

## Benzetme

Çocuğu markete gönderirken cüzdanın tamamını değil, alacağı şeyin parasını vermek gibi. Güvensizlik değil, hesaptır: para kaybolursa kaybın sınırı baştan bellidir. Üstelik çocuğun elindeki tutar ne kadar büyükse, onu yolda kandırmak isteyen için uğraşmaya değen bir hedef hâline gelir.

## Nasıl çalışır?

Uygulaması birkaç somut karara iner.

**Yetkiyi böl.** Tek bir "sahip" adresinin her şeyi yapabildiği bir sözleşme, tek noktadan devrilir. Basma, durdurma ve parametre değiştirme ayrı rollere dağıtılır ([[role-based-access-control-rbac|rol tabanlı erişim]]); [[ownable|tek sahiplik]] yalnızca gerçekten küçük sistemler için makuldür.

**Yetkiyi tek anahtara bağlama.** Kritik işlemler [[multisig|çoklu imzaya]] taşınır; böylece tek bir cihazın ele geçirilmesi tek başına yetmez.

**Süreyi ve tutarı sınırla.** Günlük çekim limiti, geçerlilik süresi olan bir izin, belirli bir tutarın üstünde ek onay.

**Kullanıcı tarafında da aynı ilke geçerlidir.** Bir uygulamaya bakiyenin tamamı için süresiz izin vermek, tam tersini yapmaktır ([[infinite-approval-risk|sınırsız onay riski]]).

## Dikkat

İlke yetkiyi yok etmez, küçültür. Her sistemde birinin elinde bir şey vardır; soru "yetki var mı" değil, "o yetki en kötü senaryoda neye mal olur" sorusudur. Cevabı [[threat-model|tehdit modelinde]] yazar.

Asıl kırılma noktası verirken değil, geri alırken yaşanır. Yetki listesi yalnızca eklenen bir listeyse ilke ilk aydan itibaren bozulmaya başlar: test için verilen bir rol, biten bir entegrasyon, ayrılan bir ekip üyesi. Belirli aralıklarla "bu adres hâlâ neden yetkili" diye bakmak, ilkenin uygulanmayan yarısıdır ([[access-control|erişim denetimi]]).
