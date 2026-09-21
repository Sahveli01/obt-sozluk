---
term: "Slither"
tr: ""
aliases: []
category: araclar
subcategory: "Blockchain geliştirici araçları"
level: orta
short: "Solidity kodunu çalıştırmadan tarayıp bilinen hatalı kalıpları bildiren statik analiz aracı."
related: [static-analysis, smart-contract-audit, echidna, solidity, linter, reentrancy-attack]
disambiguation: []
tags: []
status: taslak
reviewedBy: []
dateSensitive: true
sources: []
added: 2026-09-21
updated: 2026-09-22
---

## Nedir?

Slither, [[solidity|Solidity]] sözleşmeleri için bir [[static-analysis|statik analiz]] aracıdır. Kodu çalıştırmaz, test koşturmaz; kaynağı derleyip elde ettiği yapıyı tarar ve bilinen sorunlu kalıpları bildirir. Çalıştırması saniyeler sürdüğü için genellikle geliştirme sırasında ve otomatik işlem hattında düzenli olarak koşturulur.

## Benzetme

Yazım denetleyicisine benzer. Yanlış yazılmış kelimeyi, eksik noktalama işaretini ve dilbilgisi hatasını güvenle yakalar; metnin iddiası yanlışsa ya da anlatmak istediğin şeyi anlatamıyorsan bir şey söylemez. Slither de kalıp düzeyinde hatayı görür, sözleşmenin ne yapmaya çalıştığını bilmez.

## Nasıl çalışır?

Araç önce sözleşmeyi derler ve kodu kendi ara gösterimine çevirir. Sonra bu gösterim üzerinde dedektör denen kontrolleri çalıştırır: [[reentrancy-attack|yeniden giriş]] riskine açık çağrı sıralamaları, kontrol edilmeyen dönüş değerleri, ilklendirilmemiş değişkenler, tehlikeli düşük seviye çağrılar, blok zamanına dayanan kararlar gibi kalıplar. Her bulgu bir önem ve bir güven derecesiyle raporlanır.

Bulguların yanında bilgi çıkaran yazıcılar (printer) da vardır: kalıtım ağacı, hangi işlevin hangi durum değişkenine dokunduğu, çağrı grafiği. Tanımadığın bir kod tabanını okumaya başlarken bunlar en az uyarılar kadar işe yarar.

## Dikkat

Slither bir güvenlik garantisi değildir. Yakaladığı şey, daha önce görülmüş ve kurala dökülebilmiş kalıplardır. İş mantığındaki hata, yanlış kurulmuş ekonomik varsayım, eksik erişim kuralı ya da iki sözleşmenin etkileşiminden doğan sorun bu taramada görünmez.

Ters yönde de yanılır: çıktının bir kısmı yanlış alarmdır. Her uyarıyı körü körüne düzeltmeye çalışmak kodu bozabilir; bulguları okuyup gerçekten geçerli olup olmadığına karar vermek gerekir. Kalıcı olarak elenen bulgular yapılandırmayla susturulabilir, ama sustururken gerekçeyi yazmak iyi bir alışkanlıktır.
