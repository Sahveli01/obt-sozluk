---
term: "Signing Request"
tr: "İmza İsteği"
aliases: ["imza isteği", "signature request"]
category: cuzdanlar
subcategory: "Bağlanma ve imzalama"
level: orta
short: "Bir uygulamanın, cüzdanındaki anahtarla bir işlemi ya da mesajı imzalamanı istemesi; cüzdanın bunu onay penceresi olarak gösterir."
related: [wallet, transaction, digital-signature, blind-signing, eip-712, ice-phishing]
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

İmza isteği, bir uygulamanın senden bir şeyi özel anahtarınla imzalamanı istemesidir. [[wallet|Cüzdanın]] bunu bir onay penceresi olarak gösterir. Sen onaylamadan hiçbir şey olmaz; reddetmek her zaman seçenektir ve bir bedeli yoktur.

İstekler iki ana türe ayrılır. Birincisi [[transaction|işlem]] isteğidir: onaylarsan imzalanan şey ağa gönderilir, [[gas|gas]] harcar ve zincirin durumunu değiştirir. İkincisi mesaj isteğidir: zincir dışında kalır, ücreti yoktur, sonunda uygulamanın kullanacağı bir [[digital-signature|imza]] üretir.

## Nasıl çalışır?

Uygulama cüzdana tanımlı bir arayüz üzerinden çağrı yapar: `eth_sendTransaction` bir işlem, `personal_sign` ve `eth_signTypedData_v4` ise mesaj imzası ister. Cüzdan isteği alır, içeriğini çözebildiği kadarıyla ekrana çevirir ve kararı sana bırakır.

Onay verdiğinde imzalama cüzdanın içinde olur. Anahtar hiçbir aşamada uygulamaya gitmez; dışarı çıkan tek şey imzanın kendisidir.

## Örnek

Bir NFT pazarında ilan açma akışı çoğu zaman iki ayrı istek üretir: önce sözleşmeye yetki veren bir [[approve|approve]] işlemi, sonra ilanın koşullarını taşıyan bir mesaj imzası. Pencereler birbirine benzer ama biri zincirde iz bırakıp ücret alır, diğeri almaz.

## Dikkat

"Ücretsiz" istek, "zararsız" istek demek değildir. Zincir dışı bir imza da, uygun biçimde hazırlanmışsa, birine varlıklarını taşıma yetkisi verebilir; [[ice-phishing|ice phishing]] saldırıları tam olarak buna dayanır.

Ekrandaki isteği anlamadıysan onaylamamak, anlamadan onaylamaktan her zaman ucuzdur. Anlamadan onaylamanın adı [[blind-signing|kör imzalama]]dır.
