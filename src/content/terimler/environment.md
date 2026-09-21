---
term: "Environment"
tr: "Ortam"
aliases: ["ortam"]
category: araclar
subcategory: "Derleme ve dağıtım süreci"
level: orta
short: "Aynı kodun içinde çalıştığı sunucu, veri ve ayarlar bütünü; yerel, staging ve üretim ortamları birbirinden ayrı tutulur."
related: [staging, production, environment-variable, secrets-management, deployment]
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

Ortam, kodun içinde çalıştığı dünyadır: hangi sunucuda durduğu, hangi veritabanına bağlandığı, hangi anahtarları kullandığı, hangi adresten açıldığı. Kod aynı kalır, ortam değişir. Tipik bir projede en az üç ortam bulunur: geliştiricinin kendi bilgisayarındaki yerel ortam, ekibin son denemeleri yaptığı [[staging|staging]] ve gerçek kullanıcıların girdiği [[production|üretim]].

Ortamlar arasındaki farklar kodun içine sabit yazılmaz, [[environment-variable|ortam değişkenleriyle]] dışarıdan verilir. Böylece tek bir [[build-artifact|artifact]] üç yerde de çalışır; değişen yalnızca ona verilen ayarlardır.

## Benzetme

Aynı deneyi farklı laboratuvar koşullarında yapmak gibi. Yöntem de madde de aynıdır; ama sıcaklık, nem ve tezgâhtaki cihazlar değiştiğinde sonuç değişebilir. Bu yüzden bir sonucu tartışırken hangi koşullarda alındığını söylemek zorundasın — "çalışıyor" cümlesi tek başına hiçbir şey anlatmaz.

## Nasıl çalışır?

Her ortamın kendi veritabanı, kendi alan adı ve kendi gizli anahtarları olur; bunlar [[secrets-management|sır yönetimi]] araçlarıyla ayrı ayrı tutulur. Ortamlar birbirinden ne kadar iyi yalıtılırsa o kadar iyidir: bir deneme betiğinin gerçek kullanıcılara bildirim göndermesi ya da gerçek veritabanını boşaltması hep aynı kökten, iki ortamın aynı kaynağa bağlanmasından çıkar.

Blockchain tarafında da aynı ayrım vardır. Uygulamanın [[testnet|testnet]]'e mi yoksa [[mainnet|mainnet]]'e mi bağlandığı, hangi sözleşme adresini kullandığı da bir ortam ayarıdır.

## Dikkat

"Bende çalışıyor" cümlesi neredeyse her zaman bir ortam farkını gizler: sende kurulu olan bir program, sende duran bir dosya ya da farklı bir sürüm karşı tarafta yoktur. İkinci sık hata, ortam dosyalarının depoya gönderilmesidir; bu dosyalar [[gitignore|.gitignore]] içine alınır ve bir kez sızan anahtar mutlaka değiştirilir.
