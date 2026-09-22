---
term: "EVM Compatibility"
tr: "EVM uyumluluğu"
aliases: []
category: akilli-sozlesmeler
subcategory: "Temeller"
level: orta
short: "Bir ağın EVM bayt kodunu olduğu gibi çalıştırabilmesi; böylece aynı sözleşmeler ve aynı araçlar o ağda da çalışır."
related: [ethereum-virtual-machine-evm, bytecode, layer-2, sidechain, chain-id, solidity]
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

Bir ağın EVM uyumlu olması, [[ethereum-virtual-machine-evm|EVM]] için derlenmiş [[bytecode|bayt kodu]] değiştirmeden çalıştırabilmesi demektir. Sözleşmeni bir kez yazarsın, aynı derleme çıktısını başka bir ağa da gönderirsin.

Devralınan şey yalnızca kod değildir. Cüzdanlar, derleyiciler, test araçları, blok gezginleri, denetim şirketlerinin birikimi ve yıllardır kullanılan kütüphaneler de olduğu gibi çalışır. Yeni bir ağ için asıl kazanç budur.

## Benzetme

Klavyedeki QWERTY düzeni gibi. Yeni bir klavye üreticisi harfleri daha mantıklı bir sıraya dizebilir, ama kimse on parmak yazmayı baştan öğrenmek istemez. Bilinen düzeni seçtiğin anda insanların parmak alışkanlığı, kısayol tuşları ve hazır klavye kılıfları kutudan çıktığı gibi işler. Kazandığın şey daha iyi bir tasarım değil, hazır bir alışkanlık havuzudur.

## Nasıl çalışır?

Uyumluluğun iki düzeyi vardır.

**Bayt kod düzeyi.** Ağ aynı [[opcode]] kümesini aynı anlamlarla destekler, dolayısıyla derleyici çıktısı hiç dokunulmadan çalışır.

**Arayüz düzeyi.** Ağ, Ethereum düğümlerinin konuştuğu JSON-RPC çağrılarını aynı adlarla karşılar; cüzdanlar ve kütüphaneler ağı ayırt etmeden bağlanabilir. Bağlandıkları ağı birbirinden ayıran şey büyük ölçüde [[chain-id|zincir kimliğidir]].

## Dikkat

Uyumluluk, aynı davranış garantisi değildir. Blok süreleri, gas maliyetleri, hangi [[precompile|precompile]]'ların bulunduğu ve blok numarasının ne hızla arttığı ağdan ağa değişir.

Tehlikeli olan da budur: zamana ya da blok sayısına dayanan bir mantık yazdıysan sözleşmen yeni ağda sorunsuz derlenir, sorunsuz dağıtılır ve sessizce yanlış çalışır.
