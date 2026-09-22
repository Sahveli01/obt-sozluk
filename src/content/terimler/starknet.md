---
term: "Starknet"
tr: ""
aliases: []
category: aglar
subcategory: ""
level: ileri
short: "Ethereum'a geçerlilik ispatıyla bağlanan, ama EVM yerine ispat üretmeye göre tasarlanmış kendi dili ve sanal makinesiyle çalışan katman 2 ağı."
related: [cairo, zk-stark, validity-proof, evm-equivalence, zksync, layer-2]
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

Starknet, [[ethereum|Ethereum]]'a [[validity-proof|geçerlilik ispatıyla]] bağlanan bir [[layer-2|katman 2]] ağıdır. İspat temelli diğer ağlardan ayrıldığı nokta şudur: EVM uyumluluğunu bir hedef olarak almaz. Sözleşmeler [[cairo|Cairo]] adlı kendi dilinde yazılır ve ispat üretmeye göre tasarlanmış kendi sanal makinesinde çalışır.

## Nasıl çalışır?

Bir işlem kümesi zincir dışında yürütülür, ardından bu yürütmenin doğruluğunu gösteren bir [[zk-stark|STARK]] ispatı üretilir. Ethereum'daki doğrulayıcı sözleşme işlemleri tekrarlamaz, yalnızca ispatı kontrol eder. STARK ailesi, güvenilir kuruluma ([[trusted-setup|trusted setup]]) ihtiyaç duymamasıyla bilinir.

Kendi sanal makinesini seçmenin sebebi de buradadır. EVM'in komut kümesi ispat devrelerine çevrilmek üzere tasarlanmamıştır; ispatlanabilirliğe göre kurulmuş bir komut kümesi aynı işi daha az maliyetle kanıtlar. Aynı tercih hesap modeline de yansır: ağda bütün hesaplar sözleşmedir, yani [[account-abstraction|hesap soyutlaması]] sonradan eklenen bir katman değil varsayılan davranıştır.

## Dikkat

Bedeli uyumluluktur. Ethereum için yazılmış sözleşmeler doğrudan taşınmaz; geliştiricinin yeni bir dil, yeni araçlar ve yeni kalıplar öğrenmesi gerekir. Bu, [[evm-equivalence|EVM eşdeğerliği]] ekseninin karşı ucudur — ispat verimliliği kazanılır, hazır ekosistem kaybedilir.

Güven varsayımları ispatla kendiliğinden çözülmez. Yazıldığı tarih itibarıyla sıralayıcı merkezî olarak işletiliyor ve sözleşmeleri yükseltme yetkisi sınırlı bir tarafta duruyor. Geçerlilik ispatı yalnızca durum geçişinin kurallara uygunluğunu garanti eder; işlemlerin adil sıralandığını ya da yönetimin tarafsız olduğunu değil.
