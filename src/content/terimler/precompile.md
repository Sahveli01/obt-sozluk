---
term: "Precompile"
tr: ""
aliases: []
category: akilli-sozlesmeler
subcategory: "Dağıtım ve arayüz"
level: ileri
short: "EVM'e gömülü, sabit adreslerde duran ve Solidity'de yazılsa çok pahalıya gelecek işleri ucuza yapan yerleşik fonksiyon."
related: [signature-verification-ecrecover, opcode, ethereum-virtual-machine-evm, evm-compatibility, zk-snark, bytecode]
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

Precompile, [[ethereum-virtual-machine-evm|EVM]]'in içine gömülmüş hazır bir fonksiyondur. Sözleşme gibi bir adresi vardır ve sözleşme gibi çağrılır; ama arkasında [[bytecode|bytecode]] yoktur. İşi, düğüm yazılımının kendi kodu doğrudan yapar.

Sebebi fiyattır. İmza doğrulama ya da eliptik eğri çarpımı gibi işleri [[opcode|opcode]] opcode Solidity'de yazmak mümkündür, ama gas faturası o fonksiyonu kullanılamaz hâle getirir. Bu işler düğümün yerel koduna alınır ve sabit bir formülle ucuza fiyatlandırılır.

Terim Türkçeye çevrilmeden kullanılır.

## Nasıl çalışır?

Precompile'lar küçük ve sabit adreslerde oturur. `0x01` adresinde [[signature-verification-ecrecover|ecrecover]], `0x02`'de SHA-256, `0x05`'te modüler üs alma, `0x06`–`0x08` aralığında ise bir eliptik eğri üzerinde toplama, çarpma ve eşleştirme (pairing) işlemleri bulunur. Sonuncular [[zk-snark|zk-SNARK]] ispatlarının zincir üstünde doğrulanmasını mümkün kılan parçadır.

Çağrı sıradan bir çağrıdır: adrese ABI kurallarına göre paketlenmiş veriyi gönderirsin, sonuç dönüş verisinde gelir. Solidity bazılarını senin yerine sarmalar — `ecrecover(...)` veya `sha256(...)` yazdığında arka planda bu adreslere gidilir.

Yeni bir precompile eklemek ağın kurallarını değiştirmek demektir; ancak bir EIP'yle ve [[hard-fork|hard fork]] ile olur.

## Dikkat

Precompile adresinde kod yoktur. "Bu adres bir sözleşme mi?" diye `extcodesize` ile bakan bir kontrol precompile için sıfır görür ve onu sıradan bir cüzdan sanır.

Daha sinsisi şu: düşük seviye bir çağrı, gittiği adreste hiçbir şey olmasa bile **başarılı** döner. Yani bir precompile'ın bulunmadığı bir ağda çağrın patlamaz, sessizce boş sonuçla geri gelir ve kodun bunu geçerli bir cevap sanabilir. [[evm-compatibility|EVM uyumlu]] olduğunu söyleyen her zincirin aynı precompile setini desteklediğini varsayma; sözleşmeni başka bir zincire taşırken listeyi kontrol et ve dönen verinin boş olmadığını denetle.
