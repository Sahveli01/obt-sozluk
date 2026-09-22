---
term: "MPC Wallet"
tr: ""
aliases: ["mpc cuzdan"]
category: cuzdanlar
subcategory: "Cüzdan türleri"
level: ileri
short: "Özel anahtarın hiçbir noktada bütün hâlde bulunmadığı, imzanın paylar arasında ortak hesapla üretildiği cüzdan."
related: [multi-party-computation-mpc, threshold-signature-tss, multisig, embedded-wallet, key-management]
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

MPC cüzdan, [[multi-party-computation-mpc|çok taraflı hesaplama]] kullanarak imzayı anahtarı hiçbir yerde birleştirmeden üreten cüzdandır. Anahtar ya üretildiği anda paylara bölünür ya da hiçbir zaman bütün hâlde var olmaz; imza gerektiğinde paylar birbirine kendi payını göstermeden ortak bir hesap yapar. Zincirin gördüğü şey, sıradan tek bir imzadır. Türkçede yerleşik bir adı yok; "çok taraflı hesaplama cüzdanı" diye açıklanır, kısaltma İngilizce kullanılır.

## Nasıl çalışır?

Paylar farklı yerlerde durur: kullanıcının telefonu, sağlayıcının sunucusu, ayrı bir yedek ortam gibi. İmza için önceden belirlenmiş sayıda payın katılması gerekir ([[threshold-signature-tss|eşik imza]]). Tek bir payı ele geçiren saldırgan imza üretemez; aynı şekilde tek bir payı kaybetmek de erişimi bitirmez, eşik hâlâ sağlanıyorsa işlem imzalanır.

Paylar belirli aralıklarla yenilenebilir. Böylece farklı zamanlarda çalınmış iki eski pay bir araya geldiğinde işe yaramaz.

## Dikkat

MPC ile [[multisig|çoklu imza]] sık karıştırılır; sonuçları benzese de yerleri farklıdır. Çoklu imzada kural zincirde yazılıdır ve birden fazla imza zincire işlenir; MPC'de zincir tek bir imza görür, kuralın kendisi zincir dışındadır. Bu, ücret ve gizlilik açısından avantaj, denetlenebilirlik açısından dezavantaj olabilir: zincire bakarak kaç payın gerektiğini ya da kuralın değişip değişmediğini göremezsin.

MPC'nin güvenliği, kullanılan protokolün ve onu uygulayan kodun doğruluğuna bağlıdır; buradaki hatalar kullanıcıya görünmez. Ayrıca bir dışa aktarma yolu sunulmuyorsa, payların bir kısmını tutan sağlayıcıya olan bağımlılık sürer ([[key-management|anahtar yönetimi]]).
