---
term: "Upgradeable Contract"
tr: "Yükseltilebilir sözleşme"
aliases: ["yükseltilebilir sözleşme"]
category: akilli-sozlesmeler
subcategory: "Tasarım kalıpları"
level: orta
short: "Dağıtıldıktan sonra davranışı değiştirilebilen sözleşme: kodun kendisi değil, kullanılan kodun adresi değişir."
related: [proxy-contract, transparent-proxy, uups-proxy, timelock, multisig, access-control-vulnerability]
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

Zincire yazılan kod değişmez. Yükseltilebilir sözleşme bu kuralı delmez, etrafından dolaşır: kullanıcı hep aynı [[proxy-contract|proxy]] adresine çağrı yapar, proxy de arkadaki mantık sözleşmesine iletir. "Yükseltmek", o mantık sözleşmesinin adresini yenisiyle değiştirmektir. Eski kod hâlâ zincirdedir, artık kimse ona bakmaz.

Neden istenir? Bir hatayı düzeltmek, yeni bir standarda uymak, eksik bir özelliği eklemek için. Değişmez bir sözleşmede bunların hiçbiri mümkün değildir; tek çare yeni bir sözleşme dağıtıp bütün kullanıcıları ve parayı oraya taşımaya ikna etmektir.

## Nasıl çalışır?

Kalıbın temeli, **durumu koddan ayırmaktır**. Bakiyeler, ayarlar, kullanıcı kayıtları proxy'nin deposunda durur; onları işleyen kod dışarıdaki mantık sözleşmesindedir. Yükseltme yalnızca ikinci kısmı değiştirir, veriye dokunmaz.

Bu ayrım bazı alışkanlıkları zorunlu kılar. Kurulum `constructor` yerine bir kez çağrılan `initialize` fonksiyonunda yapılır. Yeni sürümde değişken listesi asla ortadan değiştirilmez, yalnızca sonuna eklenir. Yaygın düzenler [[transparent-proxy|Transparent]] ve [[uups-proxy|UUPS]] proxy'lerdir; tek bir sözleşme sığmayacak kadar büyüdüğünde [[diamond-pattern-eip-2535|Diamond]] kalıbı kullanılır.

Yükseltme yetkisi de bir fonksiyondur ve korunması gerekir; onu kimin çağırabileceği tasarımın en kritik kararıdır.

## Dikkat

Yükseltilebilirlik teknik bir özellik değil, kullanıcıdan istenen bir **güvendir**. Kodu değiştirebilen kim varsa, yarın oraya "bütün bakiyeleri bana gönder" satırını da yazabilir demektir. "Sözleşme denetlendi" cümlesi bu yüzden tek başına bir şey söylemez: denetlenen sürüm bugünkü sürümdür ([[smart-contract-audit|denetim]]).

Bu yüzden yerleşik uygulama, yükseltme yetkisini tek bir kişiden almaktır: yetki bir [[multisig|çoklu imza]] cüzdanına verilir, değişikliğin duyurulmasıyla uygulanması arasına bir [[timelock|zaman kilidi]] konur. Zaman kilidinin işlevi kötü niyeti engellemek değil, kullanıcıya çıkma fırsatı bırakmaktır.

Yetkinin yanlışlıkla açık unutulması da aynı kapıya çıkar ([[access-control-vulnerability|erişim denetimi açığı]]). Bir sözleşmeye bakarken sorulacak soru "yükseltilebilir mi" değil, "kim, ne kadar sürede yükseltebiliyor" olmalıdır.
