---
term: "Danksharding"
tr: ""
aliases: []
category: olceklenme
subcategory: "Temeller"
level: ileri
short: "Yürütmeyi değil yalnızca veri erişilebilirliğini ölçeklemeyi hedefleyen sharding yaklaşımı."
related: [sharding, data-availability, blob-eip-4844, kzg-commitment, rollup, data-availability-layer]
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

Danksharding, Ethereum için tasarlanan ve yürütmeyi değil yalnızca veriyi ölçeklemeyi hedefleyen bir [[sharding|sharding]] yaklaşımıdır. Adını, öneriyi geliştiren araştırmacı Dankrad Feist'ten alır.

Önceki sharding planları zinciri, her biri kendi işlemlerini çalıştıran parçalara bölmeyi öngörüyordu. Danksharding bu fikirden vazgeçer: işlemleri çalıştırmak [[rollup|rollup]]'lara bırakılır, ana zincire düşen iş onların verisini taşımak ve bu verinin gerçekten yayımlandığını güvence altına almaktır. Yani zincir bir yürütme motoru olmaktan çok bir [[data-availability-layer|veri erişilebilirliği katmanı]] gibi konumlanır.

## Nasıl çalışır?

Blokların yanında "blob" denen, yürütmeye girmeyen ve belirli bir süre sonra düşürülen büyük veri paketleri taşınır. Hiçbir node bunların tamamını indirmek zorunda değildir: veri silinti kodlamasıyla genişletilir, doğrulayıcılar rastgele seçtikleri küçük parçaları örnekler ve istenen örneklerin gelmesi, verinin tamamının erişilebilir olduğuna dair güçlü bir gösterge sayılır ([[data-availability|veri erişilebilirliği]]).

Örneklenen parçanın gerçekten o bloğa ait olduğunu göstermek için [[kzg-commitment|KZG taahhütleri]] kullanılır; taahhüt küçüktür, veriye bakmadan parçanın yerini doğrulamaya yarar.

Tasarım ayrıca blob'ları tek bir tarafın toplayıp blok hâline getirmesine dayanır; bu da blok öneren ile blok kuran rollerin ayrılmasını ([[proposer-builder-separation-pbs|PBS]]) gerektirir. İlk adım "proto-danksharding" adıyla atıldı ve blob taşıyan işlemleri devreye soktu ([[blob-eip-4844|EIP-4844]]).

## Dikkat

Danksharding işlem kapasitesini doğrudan artırmaz; rollup'lara ucuz ve bol veri alanı açar. Kullanıcının hissettiği hız ve ücret kazancı üst katmandan gelir, ana zincirin kendi yürütmesi aynı kalır.

Yazıldığı tarih itibarıyla tasarımın tamamı devreye girmiş değildir ve ayrıntıları araştırma ilerledikçe değişmektedir. Okuduğun bir kaynağın hangi aşamayı anlattığına dikkat et: "danksharding" adı hem bugün çalışan blob mekanizmasını hem de henüz tamamlanmamış hedefi anlatmak için kullanılıyor.
