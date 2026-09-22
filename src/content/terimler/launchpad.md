---
term: "Launchpad"
tr: ""
aliases: []
category: tokenlar
subcategory: "Dağıtım ve lansman"
level: orta
short: "Yeni token satışlarını düzenleyen, katılım koşullarını ve dağıtım takvimini kendi kurallarıyla belirleyen platform."
related: [initial-dex-offering-ido, initial-exchange-offering-ieo, allowlist, token-generation-event-tge, vesting, smart-contract-audit]
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

Launchpad, yeni çıkacak token'ların satışını üstlenen platformdur. Proje satış altyapısını sıfırdan kurmak yerine buraya gelir; platform katılım koşullarını, kotaları ve dağıtım takvimini belirler, satışı da kendi kullanıcı kitlesine duyurur.

Merkezî borsaların kendi bünyesinde açtığı bölümler de ([[initial-exchange-offering-ieo|IEO]]), zincir üstünde sözleşmelerle çalışan bağımsız platformlar da bu ada girer. Terim Türkçeye çevrilmeden kullanılıyor.

## Benzetme

Kitap fuarının stant düzeni gibi. Organizatör salonu kurar, yerleri dağıtır, ziyaretçiyi kapıdan içeri alır. Hangi yayınevinin standında ne olduğuna karışmaz; kitapları okumamıştır, okuması da beklenmez.

## Nasıl çalışır?

Tipik akış dört adımdır: kayıt, koşul kontrolü, tahsis, dağıtım. Koşul çoğu zaman platformun kendi token'ını belirli bir süre tutmak, bir görevi tamamlamak ya da bir [[allowlist|listeye]] girmektir. Talep arzı aştığında kota kura ile ya da tutulan miktara göre bölünür.

Satış kapandıktan sonra token'lar [[token-generation-event-tge|TGE]] ile dağıtılır. Çoğu platform payın bir kısmını hemen verir, kalanını bir takvime bağlar ([[vesting|hak ediş]]). Zincir üstünde çalışan platformlar bu adımları bir havuz açılışıyla birleştirebilir ([[initial-dex-offering-ido|IDO]]).

## Dikkat

Bir launchpad'de listelenmiş olmak inceleme, denetim ya da güvence anlamına gelmez. Platformun hangi projeyi neye göre seçtiği çoğu zaman yayımlanmaz ve platform satıştan kendi payını alır; yani projenin sonradan ne olduğu ile platformun o satıştan elde ettiği gelir birbirinden bağımsızdır.

"Elemeden geçmiş" izlenimi bu yüzden dikkatli okunur. Bir sözleşme gerçekten denetlendiyse bu ayrıca yazılır ve raporu yayımlanır ([[smart-contract-audit|denetim]]); yazmıyorsa listelenmenin tek anlamı, projenin o platformun satış takvimine girmiş olmasıdır.
