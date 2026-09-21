---
term: "WalletConnect"
tr: ""
aliases: ["wallet connect"]
category: cuzdanlar
subcategory: "Bağlanma ve imzalama"
level: orta
short: "Bir cüzdan uygulamasıyla bir siteyi, özel anahtar cüzdanda kalacak şekilde birbirine bağlayan açık bağlantı protokolü."
related: [wallet, dapp, signing-request, browser-extension-wallet, private-key]
disambiguation: []
tags: []
status: taslak
reviewedBy: []
dateSensitive: true
sources: []
added: 2026-09-21
updated: 2026-09-21
---

## Nedir?

WalletConnect, bir cüzdan uygulaması ile bir [[dapp|dApp]] arasında bağlantı kurmaya yarayan açık bir protokoldür. En çok, tarayıcıda açık olan bir siteyi telefondaki cüzdana bağlamak için kullanılır: iki program aynı cihazda olmadığı için birbirine doğrudan seslenemez, aradaki konuşmayı bu protokol taşır.

Taşıdığı şey anahtar değildir. [[private-key|Özel anahtar]] cüzdanda kalır; protokol yalnızca "şunu imzalar mısın" isteklerini ve verilen cevabı iletir. Yazıldığı tarih itibarıyla pek çok cüzdan ve uygulama bunu destekler, ama ortada bir ürün değil bir bağlantı katmanı olduğunu akılda tutmak gerekir.

## Nasıl çalışır?

Site bir QR kod ya da bir bağlantı gösterir. Kodun içinde eşleşme bilgisi ve konuşmanın şifrelenmesinde kullanılacak veri bulunur; cüzdan bunu okuduğunda iki taraf ortak bir oturum açar.

Mesajlar bir aktarım (relay) sunucusu üzerinden gider ama uçtan uca şifrelenir. Aradaki sunucu paketi taşır, içeriğini okuyamaz.

Oturumun bir kapsamı vardır: hangi hesap, hangi ağ, hangi türde istekler. Site bu kapsamın içinde [[signing-request|imza isteği]] gönderebilir, cüzdan her isteği kullanıcıya gösterir. Süre dolunca ya da kullanıcı bağlantıyı kesince kanal kapanır.

## Dikkat

Bağlanmak onaylamak değildir. Bağlantı kurulduğunda site genellikle yalnızca adresini görür; hesabındaki hiçbir şey sen bir isteği onaylamadan kıpırdamaz.

Ama açık bir oturum, sitenin sana istediği an istek gönderebilmesi demektir. Tanımadığın ya da artık kullanmadığın bağlantıları cüzdanın oturum listesinden kapatmak iyi bir alışkanlıktır. Tanımadığın bir sitenin gösterdiği QR kodu okutmak da [[phishing|oltalama]] saldırılarının bilinen yollarından biridir.
