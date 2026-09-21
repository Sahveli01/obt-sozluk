---
term: "DRY"
tr: ""
aliases: ["don't repeat yourself"]
category: programlama
subcategory: "Paradigmalar ve tasarım"
level: baslangic
short: "\"Don't Repeat Yourself\": aynı bilginin sistemde tek bir yetkili karşılığı olsun diyen akılda tutma kuralı."
related: [kiss, solid, refactoring, clean-code, abstraction]
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

DRY, "Don't Repeat Yourself" (kendini tekrar etme) sözünün kısaltmasıdır. Söylediği şey, bir bilginin sistemde tek bir yetkili karşılığı olması gerektiğidir. KDV oranı, bir adresin biçimi, bir kuralın eşiği: bunlar tek bir yerde yazılıysa değiştiğinde tek bir yerde değişir.

Kuralın hedefi kopyala-yapıştırın kendisi değil, **bilginin** iki yere yazılmasıdır. Aynı oran beş dosyada duruyorsa, oran değiştiği gün dördünü güncelleyip birini unutma ihtimali vardır — ve unutulan yer genellikle üretimde fark edilir.

## Örnek

```python
KDV_YUZDE = 20

def kdv_dahil(kurus):
    return kurus + kurus * KDV_YUZDE // 100

print(kdv_dahil(10000))   # 12000
```

## Dikkat

DRY bir akılda tutma kuralıdır, doğa yasası değil. Aşırıya kaçtığında ürettiği sorunun adı **erken soyutlama**dır: birbirine benzeyen iki kod parçası aynı bilgi olmak zorunda değildir. İkisini ortak bir fonksiyona çektiğin anda birbirlerine bağlanırlar; altı ay sonra biri değişmek istediğinde fonksiyona bir parametre, sonra bir tane daha eklenir ve ortaya kimsenin anlamadığı bir düğüm çıkar. O noktada tekrar etmek daha ucuz olurdu.

Karar verirken sorulacak soru "bu iki kod birbirine benziyor mu" değil, "bu ikisi aynı sebeple mi değişir"dir. Benzerlik tesadüf olabilir; aynı sebeple değişmek olmaz.

Yaygın bir pratik, üçüncü tekrarı beklemektir: ilk tekrarda kopyalarsın, üçüncüsünde artık kalıbın gerçek olduğuna emin olup [[refactoring|yeniden düzenlersin]]. Aynı ölçülülük uyarısı [[kiss|KISS]] ve [[solid|SOLID]] için de geçerlidir.
