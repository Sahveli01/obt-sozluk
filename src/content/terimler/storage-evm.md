---
term: "Storage (EVM)"
tr: ""
aliases: []
category: akilli-sozlesmeler
subcategory: "Bellek ve depolama"
level: orta
short: "Bir sözleşmenin verisini zincirde kalıcı tutan, okuması ücretli, yazması ise en pahalı EVM alanı."
related: [memory-evm, calldata, storage-slot, state-variable, gas, data-location]
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

Storage, bir [[smart-contract|akıllı sözleşmenin]] zincirdeki kalıcı veri alanıdır. Sözleşmenin [[state-variable|state variable'ları]] burada durur: işlem bittiğinde değer silinmez, ağdaki bütün düğümler onu saklamaya devam eder ve sonraki her çağrı aynı değeri görür.

Her sözleşmenin storage'ı kendisine aittir. Başka bir sözleşme oraya doğrudan uzanamaz; yazan şey, her zaman o alanın sahibi sözleşmenin çalışan kodudur.

Türkçede "depolama" denebilirdi ama Solidity'de `storage` bir anahtar sözcük olarak yazıldığı için terim İngilizce kullanılıyor.

## Nasıl çalışır?

Storage'ı numaradan değere giden dev bir tablo gibi düşün: her numara bir [[storage-slot|slotu]] gösterir ve her slot 32 bayt tutar. EVM'in bu alanda yapabildiği iki iş vardır — bir slotu okumak ve bir slota yazmak.

İkisi de ücretlidir, ama yazmak kıyaslanamayacak kadar pahalıdır ve fiyat slotun o anki hâline bağlıdır. Sıfır duran bir slotu ilk kez doldurmak en pahalı durumdur; var olan bir değeri güncellemek belirgin biçimde ucuzdur; bir slotu sıfırlamak ise ödenen [[gas|gas]]'ın bir kısmını geri getirir, çünkü ağın taşıdığı yük azalır.

Farkın kaynağı da budur. [[memory-evm|Memory]] yalnızca senin çağrın sürerken tek bir makinenin içinde vardır; storage ise binlerce düğümün diskinde süresiz durur. Ödediğin şey hesaplama değil, herkesin o veriyi taşımaya devam etmesidir. Aynı sebeple veri biriktikçe ağın sırtındaki yük de birikir ([[state-growth|state'in büyümesi]]).

## Dikkat

Storage sözleşmeye aittir derken bir istisna var: [[delegatecall]] ile çağrılan kod kendi storage'ına değil, **çağıran** sözleşmenin storage'ına yazar. Proxy kalıbı bunun üstüne kuruludur ve yerleşim iki taraf arasında tutmadığında [[storage-collision|storage çakışması]] çıkar.

İkincisi maliyetle ilgili. "Veriyi zincire koyarım" cümlesi kulağa masrafsız gelir; gerçekte bir resim, uzun bir metin ya da büyük bir liste storage'a yazılmaz. Zincirde çoğunlukla veriyi değil, verinin özetini ya da adresini tutarsın — hangi veri konumunu seçeceğin sorusu [[data-location|veri konumu]] tarafında.
