---
term: "Contract Size Limit"
tr: "Sözleşme boyutu sınırı"
aliases: []
category: akilli-sozlesmeler
subcategory: "Dağıtım ve arayüz"
level: orta
short: "Zincire yazılabilecek runtime bytecode'un üst sınırı; Ethereum'da EIP-170 ile gelen 24 KB."
related: [bytecode, contract-deployment, library-solidity, diamond-pattern-eip-2535, gas-optimization, solidity-compiler-solc]
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

Bir sözleşmenin zincire yazılan kodu sınırsız büyüyemez. Ethereum'da bu sınır EIP-170 ile kondu: [[contract-deployment|dağıtım]] bittiğinde zincire yerleşen runtime [[bytecode|bytecode]] 24.576 baytı, yani 24 KB'yi aşamaz. Aşarsa dağıtım başarısız olur — üstelik gas'ı harcandıktan sonra.

Sınırın amacı düğümleri korumaktır: kod her çağrıda okunmak zorundadır ve sınırsız uzunlukta kod, tek bir işlemin düğümleri boğmasına yol açabilirdi. Sonradan gelen bir kural (EIP-3860) dağıtım kodunun kendisine de bir üst sınır ve bayt başına ek ücret getirdi.

## Nasıl çalışır?

Sınır kaynak kodun satır sayısıyla değil, derlenmiş kodun uzunluğuyla ilgilidir. Sözleşmen sığmadığında başvurulan yollar şunlar:

- **Optimizer'ı ayarlamak.** [[solidity-compiler-solc|solc]]'un `runs` değeri yüksekse derleyici, çalıştırma maliyetini düşürmek için kodu büyütür. Değeri düşürmek kodu küçültür; karşılığında her çağrı biraz pahalılaşır. Bu, [[gas-optimization|gas optimizasyonu]] ile boyut arasındaki doğrudan takastır.
- **Kodu bölmek.** Ortak mantığı ayrı bir [[library-solidity|kütüphaneye]] taşırsın; `external` kütüphane kodu kendi adresinde durur ve sözleşmenin kendi baytlarını şişirmez.
- **Yüzlere ayırmak.** Fonksiyonları ayrı sözleşmelere dağıtıp tek bir adresin arkasından yönlendiren [[diamond-pattern-eip-2535|diamond kalıbı]] büyük ölçüde bu sınır yüzünden ortaya çıktı.
- **Metinleri temizlemek.** Uzun `revert` mesajları kodun içinde yer kaplar; [[custom-error|özel hatalar]] aynı işi çok daha az baytla görür.

## Dikkat

Sınır yalnızca runtime koduna bakar; [[constructor|constructor]]'ın kodu bu 24 KB'nin içinde sayılmaz. Bu yüzden "sözleşmem çok uzun" diye bakarken doğru sayıya bakmak gerekir — derleme araçları dağıtılacak boyutu raporlar, büyüyen bir sözleşmede o sayıyı baştan takip et.

Yaygın bir yanılgı da [[proxy-contract|proxy]] kullanmanın sınırı kaldırdığını sanmaktır. Kaldırmaz: proxy'nin arkasındaki mantık sözleşmesi de ayrı bir sözleşmedir ve aynı 24 KB'ye tabidir. Proxy sana kodu değiştirme imkânı verir, sığdırma sorununu çözmez.
