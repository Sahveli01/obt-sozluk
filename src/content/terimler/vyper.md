---
term: "Vyper"
tr: ""
aliases: []
category: programlama
subcategory: "Diller ve formatlar"
level: orta
short: "EVM için akıllı sözleşme dili; Python'a benzeyen sözdizimi ve kasıtlı olarak dar tutulmuş özellik kümesiyle okunabilirliği önceler."
related: [solidity, smart-contract, ethereum-virtual-machine-evm, python, yul]
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

Vyper, [[ethereum-virtual-machine-evm|EVM]] üstünde çalışan [[smart-contract|akıllı sözleşme]] yazmak için kullanılan bir dildir. Blokları girintiyle ayırır ve sözdizimi [[python|Python]]'ı andırır; Python bilen biri bir Vyper dosyasını okumakta genellikle zorlanmaz.

Dili asıl tanımlayan şey, içinde bulunmayan özelliklerdir. Sınıf kalıtımı, fonksiyon aşırı yükleme, özyineleme ve sınırı önceden bilinmeyen döngüler gibi birçok tanıdık araç dilde yoktur. Bu bir eksiklik değil, bilinçli bir tercihtir: sözleşmeyi okuyan kişinin "bu çağrı tam olarak nereye gidiyor" ve "bu döngü en fazla kaç kez döner" sorularını dosyadan ayrılmadan cevaplayabilmesi hedeflenir. Denetlenmesi gereken bir kodda, okurken sürpriz çıkmaması başlı başına bir özelliktir.

## Nasıl çalışır?

Vyper kodu da [[solidity|Solidity]] gibi derlenir ve sonunda EVM bayt koduna dönüşür. Zincirde ortaya çıkan şey yine bir sözleşme adresi ve bir [[application-binary-interface-abi|ABI]] tanımıdır. Dışarıdan bakan bir cüzdan ya da arayüz, sözleşmenin hangi dille yazıldığını bilmek zorunda değildir; iki dilde yazılmış iki sözleşme aynı arayüzü sunabilir. Yani dil seçimi zincir üstünde değil, yazma ve okuma tarafında fark yaratır.

## Dikkat

Az özellik, bazı desenleri elle yazmak demektir: başka bir dilde kalıtımla paylaşacağın ortak kodu burada çoğaltman ya da başka türlü düzenlemen gerekebilir. Bunun karşılığında dosyada gördüğün kod, çalışan kodun tamamına yakındır.

Vyper ile Solidity arasında "hangisi daha iyi" sorusunun tek bir cevabı yoktur. İkisinin EVM için sunduğu soyutlama düzeyleri Solidity maddesinde bir arada karşılaştırılıyor; seçim çoğu zaman ekibin alışkanlığına ve kullandığı araçlara bağlıdır.
