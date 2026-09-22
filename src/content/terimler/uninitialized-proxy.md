---
term: "Uninitialized Proxy"
tr: ""
aliases: ["ilklendirilmemiş proxy"]
category: guvenlik
subcategory: "Sözleşme açıkları"
level: ileri
short: "Proxy kalıbında kurulum initialize ile yapılır; bu fonksiyon korunmazsa onu ilk çağıran kişi sözleşmenin sahibi olur."
related: [proxy-contract, constructor, upgradeable-contract, uups-proxy, delegatecall, access-control-vulnerability]
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

[[proxy-contract|Proxy]] kalıbında veri proxy'nin deposunda durur, kod mantık sözleşmesindedir. Mantık sözleşmesinin [[constructor|`constructor`]]'ı yalnızca kendi dağıtımı sırasında, kendi deposunda çalışır — proxy'nin deposuna tek bir değer bile yazmaz. Bu yüzden sahibi belirlemek, rolleri dağıtmak, başlangıç ayarlarını kurmak gibi işler sıradan bir fonksiyona taşınır; adı genellikle `initialize` olur.

Sıradan bir fonksiyon olduğu için de **onu herkes çağırabilir**. Korunmamışsa, kurulumu yapan ilk kişi sözleşmenin sahibi olur. Açığın tamamı bu tek cümlede.

İki ayrı boşluk vardır. Birincisi proxy'nin kendisidir: dağıtıldı ama `initialize` henüz çağrılmadıysa, araya giren biri kendini sahip yapabilir. İkincisi mantık sözleşmesidir: o da zincirde duran, çağrılabilir bir sözleşmedir ve kendi kurulumu yapılmamışsa doğrudan ele geçirilebilir. [[uups-proxy|UUPS]] kalıbında yükseltme mantığı mantık sözleşmesinin içinde olduğu için bunun sonucu ağırdır.

"proxy" Türkçeye çevrilmeden kullanılır; "vekil sözleşme" ifadesi yerleşmemiştir.

## Benzetme

Kutusundan yeni çıkmış bir modem gibi. İlk kez açıldığında bir kurulum ekranı karşına çıkar ve yönetici parolasını orada belirlersin. Cihazı kurmadan prize takıp bırakırsan o ekran kaybolmaz; ilk açan kimse yöneticiyi o belirler. Cihaz bozuk değildir, kurulumu bekleyen bir cihazdır — ve beklerken sahipsizdir.

## Nasıl çalışır?

Savunma dört adımdır ve dördü birlikte uygulanır.

Kurulum fonksiyonu **yalnızca bir kez** çalışsın: bir bayrakla korunsun ya da bu işi yapan yerleşik bir kalıp kullanılsın.

Dağıtım ile kurulum **aynı işlemde** yapılsın. İki ayrı işlem arasındaki süre, ne kadar kısa olursa olsun, açık bir kapıdır.

Mantık sözleşmesinin kendi kurulumu dağıtım anında kilitlensin; kimse onu bağımsız bir sözleşme olarak devralamasın.

Yükseltme yetkisi kurulumun eline bırakılmasın; ayrı bir rolde ve mümkünse çok imzalı bir hesapta dursun ([[access-control-vulnerability|erişim denetimi açığı]]).

## Dikkat

2017'de Parity çok imzalı cüzdan kütüphanesinde bu açık gerçekleşti: kütüphanenin kurulum fonksiyonu korunmamıştı, onu çağıran kişi kütüphanenin sahibi oldu ve kütüphaneyi zincirden sildi. O kütüphaneye [[delegatecall|`delegatecall`]] yapan bütün cüzdanlar aynı anda işlevsiz kaldı.

Risk yükseltmeden sonra da devam eder. Yeni sürümde eklenen bir kurulum fonksiyonu varsa ([[upgradeable-contract|yükseltilebilir sözleşmelerde]] yaygındır) aynı soruyu onun için baştan sormak gerekir.
