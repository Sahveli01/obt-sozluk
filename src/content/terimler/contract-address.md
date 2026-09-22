---
term: "Contract Address"
tr: "Sözleşme adresi"
aliases: []
category: akilli-sozlesmeler
subcategory: "Dağıtım ve arayüz"
level: baslangic
short: "Bir sözleşmenin zincirdeki yeri; dağıtım sırasında hesaplanır ve arkasında hiç kimsenin özel anahtarı yoktur."
related: [contract-deployment, wallet-address, create2, smart-contract, block-explorer, contract-verification]
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

Sözleşme adresi, dağıtılmış bir sözleşmenin zincirdeki yeridir. Oraya bir işlem gönderdiğinde çalışan şey o adreste duran koddur. Görünüşü bir [[wallet-address|cüzdan adresinden]] ayırt edilmez, ikisi de 20 baytlık bir sayıdır; aradaki fark arkada bir özel anahtar olmamasıdır. Hiç kimse sözleşme adresi adına imza atamaz — o adresin bir şey yapabilmesi için kodunun çağrılması gerekir.

Adresi kimse seçmez, hesaplanır. Normal [[contract-deployment|dağıtımda]] iki girdi kullanılır: dağıtımı yapan hesabın adresi ve o hesabın [[nonce-islem|nonce]]'u, yani kaçıncı işlemi olduğu. Bu ikisi birlikte [[keccak-256|keccak-256]] ile özetlenir, çıkan değerin son 20 baytı adres olur. [[create2|CREATE2]] ile dağıtırsan hesap başka girdilerle yapılır ve adresi sözleşme daha doğmadan önce bilebilirsin.

## Benzetme

Öğrenci numarası gibi. Numarayı sen seçmezsin; hangi okula, hangi yıl, kaçıncı sırada kaydolduğun belirler. Kayıt tamamlandığı anda numara bellidir, bir daha değişmez ve o günden sonra bütün kayıtlar onun altına işlenir.

## Dikkat

Adresi her zaman doğru kaynaktan al. Bir projenin sözleşme adresini arama sonucundan, bir mesajdan ya da bir reklamdan kopyalamak, sahtesiyle işlem yapmanın en kolay yoludur. Projenin kendi sitesinden ya da [[block-explorer|blok gezgininden]] karşılaştır.

Bir de aynı projenin farklı ağlardaki adresleri genelde birbirinden farklıdır; birinde çalışan adresi diğerine taşıma.
