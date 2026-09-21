---
term: "Blockchain Trilemma"
tr: "Blockchain trilemması"
aliases: ["blockchain trilemmasi", "olceklenebilirlik ucgeni"]
category: temeller
subcategory: "Temel kavramlar"
level: orta
short: "Merkeziyetsizlik, güvenlik ve ölçeklenebilirlikten üçünü birden en üst düzeyde tutmanın zorluğunu anlatan çerçeve."
related: [decentralization, scalability, layer-2, sharding, modular-blockchain]
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

Trilemma, bir blockchain tasarımının üç hedefi aynı anda en üst düzeyde tutmakta zorlandığını söyler:

- **[[decentralization|Merkeziyetsizlik]]** — sıradan bir bilgisayarla [[node]] çalıştırıp zinciri kendin doğrulayabilmen.
- **Güvenlik** — ağa saldırmanın karşılanamayacak kadar pahalı olması.
- **Ölçeklenebilirlik** — çok sayıda işlemi ucuza ve hızlıca taşıyabilmek.

İkisini seçmek kolaydır, üçünü birden tutturmak zordur.

## Nasıl çalışır?

Gerilim doğrulama maliyetinden doğar. Saniyedeki işlem sayısını artırmanın en doğrudan yolu blokları büyütmektir. Bloklar büyüdükçe node çalıştırmak için gereken disk, bant genişliği ve işlemci gücü artar; bir noktadan sonra yalnızca güçlü sunucusu olanlar zinciri doğrulayabilir. İşlem sayısı yükselirken merkeziyetsizlik düşer.

Aynı gerilim ters yönde de çalışır. Doğrulamayı ucuzlatmak için doğrulayıcı sayısını azaltırsan işlem kapasitesi yükselir ama ağı ele geçirmek için anlaşması gereken taraf sayısı da düşer; bu sefer güvenlik köşesi zayıflar.

Bugünkü yaklaşımların çoğu üçgeni kırmaya değil, işi katmanlara bölmeye çalışır. [[layer-2|Layer 2]] çözümleri hesabı zincir dışına taşıyıp yalnızca özetini ana zincire yazar; [[sharding|sharding]] ağı parçalara ayırıp her node'un her şeyi işlemesini gereksiz kılar; [[modular-blockchain|modüler mimari]] yürütme, konsensüs ve veri erişilebilirliğini ayrı katmanlara dağıtır.

## Dikkat

Üç köşenin hepsi aynı cinsten de değildir. Güvenlik ve merkeziyetsizlik bir kez kaybedilince geri kazanılması çok zordur; ölçeklenebilirlik ise zamanla iyileştirilebilir. Bu yüzden olgun protokoller genellikle ilk ikisini korumayı tercih eder.

Trilemma kanıtlanmış bir teorem değil, tasarım tartışmalarını düzenleyen bir çerçevedir. Bu yüzden "trilemmayı çözdük" diyen bir projeye asıl sorulacak şey hangi köşeden ne kadar ödün verdiğidir — genellikle cevap doğrulayıcı sayısında ya da node çalıştırma maliyetinde saklıdır.
