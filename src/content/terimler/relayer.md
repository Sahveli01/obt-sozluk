---
term: "Relayer"
tr: ""
aliases: []
category: olceklenme
subcategory: "Köprüler ve zincirler arası"
level: orta
short: "Bir zincirdeki mesajı ve kanıtını alıp hedef zincire ileten, iyi tasarımlarda güvenilmesi gerekmeyen taşıyıcı."
related: [cross-chain-messaging, light-client, blockchain-bridge, gasless-transaction, bridge-exploit, inter-blockchain-communication-ibc]
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

Zincirler birbirine kendiliğinden mesaj göndermez; mesajı birinin taşıması gerekir. Relayer, kaynak zincirdeki olayı ve kanıtını izleyip hedef zincire bir işlem olarak gönderen, zincir dışında çalışan yazılımdır. Gönderirken gas ücretini o öder, karşılığında ücret alır.

Türkçede yerleşik bir karşılığı yok; metinlerde İngilizce hâliyle geçer.

## Benzetme

Kilitli bir kurye çantası taşıyan görevli gibi. Çantayı açamaz, içindekini değiştiremez, yerine başka bir şey koyamaz. Yapabileceği tek kötülük çantayı geç götürmek ya da hiç götürmemektir — bu yüzden de iş genellikle herkese açık tutulur: biri taşımazsa başkası taşır.

## Nasıl çalışır?

İyi bir tasarımda relayer **güvenilmez** bir roldür. Hedef zincirdeki sözleşme gelen mesajı kanıtıyla birlikte kendisi doğrular ([[light-client|hafif istemci]] mantığı), dolayısıyla taşıyıcının uydurduğu bir mesaj kabul edilmez. Relayer yalnızca canlılığı etkiler: mesajın ne zaman, hatta teslim edilip edilmeyeceğini belirler. Rolün izinsiz ve rekabete açık olması bu yüzden önemlidir; tek bir taşıyıcıya bağlı kalan sistemde sansür riski doğar.

Ama her tasarım böyle değildir. Bazı köprülerde taşıyıcı aynı zamanda tanıklık eder, yani mesajın doğruluğuna imza atar. Orada rol artık güvenilir hâle gelir ve köprünün güvenliği doğrudan o kümenin dürüstlüğüne iner ([[bridge-exploit|köprü istismarı]]).

Ekonomik tarafı da tasarımın parçasıdır: hedef zincirde harcanacak gasın kim tarafından, hangi tokenla ve hangi anda ödendiği belirlenmezse mesajlar taşınmadan bekler ([[cross-chain-messaging|zincirler arası mesajlaşma]]).

## Dikkat

Aynı kelime başka bir bağlamda da kullanılır: kullanıcının imzaladığı işlemi zincire gönderip ücretini üstlenen tarafa da relayer denir ([[gasless-transaction|gassız işlem]]). Fikir aynıdır — başkasının işlemini taşımak — bağlam farklıdır.

Mesaj teslim edilmediğinde kaybolmaz, hedefte hiç işlenmemiş olur. Bunun ne kadar süreceği ve iadenin nasıl yapılacağı protokolün kuralına bağlıdır.
