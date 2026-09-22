---
term: "Rollup-as-a-Service (RaaS)"
tr: ""
aliases: ["raas"]
category: olceklenme
subcategory: "Rollup'lar"
level: orta
short: "Kendi rollup'ını sıfırdan kurmak yerine hazır altyapıyla başlatmayı sağlayan hizmet modeli."
related: [rollup, appchain, sequencer, layer-3, modular-blockchain]
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

Bir [[rollup|rollup]] çalıştırmak tek bir yazılımı açmak değildir: sıralayıcı, kanıt üretimi ya da itiraz mekanizması, köprü sözleşmeleri, RPC uçları, gezgin, izleme ve bunların hepsinin bakımı gerekir. RaaS, bu yığını hazır kurup işleten hizmet modelidir. Ekip birkaç ayar seçer, zincir birkaç gün içinde ayağa kalkar. Terim İngilizce kısaltmasıyla kullanılır.

## Benzetme

Şirketini kurup kendi ofisini tutmakla hazır ofise yerleşmek arasındaki fark gibi. Hazır ofiste masan, adresin, internetin ve resepsiyonun ilk günden çalışır; kurulumla uğraşmazsın. Ama binanın anahtarı sende değildir, hattı kimin kestiğini sen belirlemezsin ve sözleşme bittiğinde taşınman gerekir. Kolaylık gerçektir; bağımsızlık kadar gerçektir.

## Nasıl çalışır?

Sağlayıcı bir yapılandırma listesi sunar: hangi ana zincire yerleşilecek, veri nereye yayımlanacak, doğruluk kanıtla mı itirazla mı sağlanacak, ücretler hangi tokenla ödenecek, sıralayıcıyı kim işletecek.

Seçimler yapıldıktan sonra sağlayıcı sözleşmeleri kurar, sıralayıcıyı ve kanıt altyapısını kendi sunucularında çalıştırır, uç noktaları verir. Ekibin gördüğü şey bir panel ve birkaç adres olur.

## Dikkat

Hizmet modeli, rollup'ın güvenlik sorularını ortadan kaldırmaz; yalnızca görünmez kılar. Bir RaaS zincirini değerlendirirken sorulacaklar şunlardır: [[sequencer|sıralayıcıyı]] kim işletiyor, sözleşmeleri kim yükseltebiliyor ve bunun bir bekleme süresi var mı, [[forced-withdrawal-escape-hatch|zorunlu çıkış]] açık mı, veri nereye yayımlanıyor.

En kritik soru sonuncusudur: sağlayıcı yarın hizmeti keserse zincir ayakta kalabilir mi, yoksa kullanıcıların parası erişilemez mi olur? Cevabı "çıkış yolu ana zincirde tanımlı" olan bir kurulumla, cevabı "sağlayıcı devam etmeli" olan bir kurulum aynı şey değildir — ikisi de aynı panelden kurulmuş olsa bile.
