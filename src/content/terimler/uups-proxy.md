---
term: "UUPS Proxy"
tr: ""
aliases: ["uups"]
category: akilli-sozlesmeler
subcategory: "Tasarım kalıpları"
level: ileri
short: "Yükseltme fonksiyonunu proxy'de değil mantık sözleşmesinin içinde tutan, bu yüzden daha ince bir proxy kullanan düzen."
related: [proxy-contract, transparent-proxy, upgradeable-contract, storage-slot, uninitialized-proxy]
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

UUPS (Universal Upgradeable Proxy Standard, EIP-1822), [[proxy-contract|proxy]] kalıbının ikinci yaygın düzenidir. [[transparent-proxy|Transparent proxy]] ile aralarındaki tek gerçek fark, **yükseltme mantığının nerede durduğudur**: Transparent'ta proxy'nin kendisinde, UUPS'te mantık sözleşmesinin içinde.

Kısaltma olduğu için çevrilmez; "UUPS" diye okunur ve yazılır.

## Nasıl çalışır?

UUPS'te proxy gerçekten ince bir kabuktur: yaptığı tek iş, gelen çağrıyı mantık sözleşmesine iletmektir. `upgradeTo` benzeri yükseltme fonksiyonu mantık sözleşmesinden gelir. Yani sözleşme kendi kendini yükseltir — daha doğrusu, proxy'nin deposundaki "mantık sözleşmesi adresi" alanına yeni adresi yazar.

O adres yine EIP-1967'nin belirlediği sabit [[storage-slot|depolama slotunda]] tutulur. Sıradan bir değişken slotu kullanılsaydı mantık sözleşmesinin kendi değişkenleriyle çakışırdı.

Yükseltme fonksiyonu mantık sözleşmesinde olduğu için onu korumak da mantık sözleşmesinin işidir; yaygın uygulamalarda bu iş, yükseltmeye kimin izinli olduğunu söyleyen ayrı bir iç fonksiyonda toplanır ve [[access-control|erişim denetimi]] oraya yazılır.

Proxy her çağrıda "bu çağrı yöneticiden mi geliyor" kontrolü yapmadığı için işlem başına daha az [[gas]] harcar ve proxy'nin dağıtımı daha ucuzdur.

## Dikkat

En ciddi tuzak şudur: yükseltme kodu mantık sözleşmesinde yaşar, dolayısıyla **yeni sürüme bu kodu koymayı unutursan sözleşme kalıcı olarak dondurulur**. Yeni mantık sözleşmesinde yükseltme fonksiyonu yoksa, onu çağıracak bir yer de kalmaz; geri dönüşü yoktur. Transparent düzende böyle bir risk yoktur.

İkinci tuzak, mantık sözleşmesinin proxy'den bağımsız olarak da zincirde durmasıdır. Kimse onu doğrudan çağırmamalıdır ama çağırabilir; boş bırakılmış bir kurulum fonksiyonu üzerinden mantık sözleşmesinin sahipliği ele geçirilebilir ([[uninitialized-proxy|initialize edilmemiş proxy]]). Yerleşik önlem, mantık sözleşmesinin `constructor`'ında kurulum fonksiyonlarını kalıcı olarak kapatmaktır.
