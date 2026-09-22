---
term: "Minimal Proxy (Clone)"
tr: ""
aliases: ["eip-1167", "minimal proxy"]
category: akilli-sozlesmeler
subcategory: "Tasarım kalıpları"
level: ileri
short: "Sabit bir mantık sözleşmesine delegatecall yapmaktan başka hiçbir şey yapmayan, birkaç on baytlık çok ucuz kopya sözleşme."
related: [proxy-contract, factory-pattern, create2, delegatecall, contract-deployment]
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

Minimal proxy, EIP-1167'de tanımlanan ve tek işi olan bir sözleşmedir: gelen her çağrıyı, kodunun içine gömülü sabit bir adrese [[delegatecall]] ile iletmek. Kendi mantığı, değişkeni, yükseltme fonksiyonu yoktur. Bu yüzden çalışma kodu 45 bayt uzunluğundadır — sıradan bir sözleşmenin binde biri kadar.

Amaç yükseltilebilirlik değil, **ucuzluktur**. Aynı sözleşmeden yüzlerce kopya dağıtacaksan her seferinde tüm kodu zincire yazmak pahalıdır; bunun yerine kodu bir kez yazar, sonra ona işaret eden minik kabuklar dağıtırsın. Bu kabuklara "clone" (klon) da denir.

Terim çevrilmez; "minimal proxy" ya da "clone" diye geçer.

## Nasıl çalışır?

Klonu genelde elle değil bir [[factory-pattern|fabrika sözleşmesi]] dağıtır. Fabrika, hedef adresi bayt dizisinin ortasına yerleştirilmiş kalıbı belleğe kurar ve `create` ile zincire yazar. Ortaya çıkan sözleşmenin kendi adresi ve kendi deposu vardır; kod ise ortaktır.

[[create2]] ile dağıtıldığında klonun adresi, işlem gönderilmeden önce hesaplanabilir. Bu, bir kullanıcı için daha o sözleşme var olmadan adres ayırmak gerektiğinde işe yarar.

[[contract-deployment|Dağıtım]] maliyetindeki fark büyüktür; buna karşılık her çağrıda bir `delegatecall` eklendiği için tek tek çağrılar birkaç yüz [[gas]] daha pahalı olur. Yani klon, çok sayıda kopya dağıtan tasarımlarda kazandırır.

## Dikkat

Klonun da [[constructor|`constructor`]]'ı yoktur. Daha doğrusu, hedef sözleşmenin constructor'ı klon için hiç çalışmaz: klonun deposu dağıtıldığı anda tamamen boştur. Kurulum, dağıtımdan hemen sonra çağrılan bir `initialize` fonksiyonuyla yapılır ve o fonksiyonun ikinci kez çağrılamaması gerekir — aksi hâlde klonun sahipliği başkasına geçebilir.

İkincisi, hedef adres bayt koduna gömülüdür: bir klon **yükseltilemez**. Bunun diğer yüzü de şudur — hedef sözleşmedeki tek bir hata, ondan türeyen bütün klonları aynı anda etkiler.
