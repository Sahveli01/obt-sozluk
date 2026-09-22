---
term: "Ice Phishing"
tr: ""
aliases: []
category: guvenlik
subcategory: "Kullanıcıyı hedef alan dolandırıcılıklar"
level: orta
short: "Kurbana para göndertmek yerine onay ya da izin imzalatan oltalama biçimi; imzayı atan kişi o an hiçbir şey kaybetmez."
related: [phishing, signing-request, approve, allowance, wallet-drainer, blind-signing]
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

Ice phishing, klasik [[phishing|oltalamanın]] kriptoya özgü biçimidir. Senden para istemez, parola istemez, kurtarma kelimesi istemez. Tek istediği bir onaydır: varlıklarına dokunma yetkisi veren bir imza.

Farkı sonucunda değil, o andaki hissinde. Onayladığın anda cüzdanından hiçbir şey çıkmaz, bakiyen aynı kalır, ekranda kötü bir şey olmaz. Bu yüzden çoğu kişi tuzağa düştüğünü haftalar sonra fark eder.

Yerleşik bir Türkçe karşılığı yok; "imza tuzağı" gibi ifadeler kullanılsa da terim İngilizcesiyle geçiyor.

## Benzetme

Tapu dairesinde satış senedi yerine vekâletname imzalamak gibi. O gün ev senin adına kayıtlı kalır, hiçbir şey el değiştirmez, cebinden kuruş çıkmaz. Yalnızca artık o evi senin yerine satabilecek biri vardır ve ne zaman satacağına sen karar vermezsin.

## Nasıl çalışır?

Sahte arayüz, beklediğin bir adımın kılığına girer: "cüzdanını doğrula", "talebi onayla", "güvenlik kontrolü". Ardından önüne bir [[signing-request|imza isteği]] koyar.

İmzalattığı şey iki türden biridir. Ya bir [[approve|approve]] işlemidir ve token'ların üzerinde bir [[allowance|harcama izni]] yazar; ya da zincir dışı, yapılandırılmış bir mesajdır — ücreti yoktur, bu yüzden daha da zararsız görünür ama aynı yetkiyi verir.

Çekim ayrı bir adımdır ve saldırganın seçtiği bir anda yapılır. İmza ile kayıp arasındaki bu boşluk tuzağın asıl gücüdür: iki olayı birbirine bağlamak zorlaşır.

## Dikkat

Üç terim birbirine karışır. Oltalama genel kalıptır; ice phishing onun para değil yetki isteyen biçimidir; [[wallet-drainer|cüzdan boşaltıcı]] ise bu işi otomatik yapan hazır yazılımdır.

- "Ücretsiz" imza, "zararsız" imza demek değildir. Ücret yokluğu bir güvence göstergesi değildir.
- Onay penceresinde kime ve neye yetki verdiğini oku; pencere bunu söylemiyorsa reddet ([[blind-signing|kör imzalama]]).
- Bir siteye bağlanır bağlanmaz, sen hiçbir şey yapmadan onay isteniyorsa kapat.
- İşin bittiğinde verdiğin izinleri sıfırla; onay ekranı bir kez açılır, izin sen kapatana kadar durur.
- Şüphelendiğin an cüzdanın bağlantısını kes ve o cüzdanın açık izinlerini gözden geçir.
