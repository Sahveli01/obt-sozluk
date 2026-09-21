---
term: "Test Coverage"
tr: "Test kapsamı"
aliases: ["test kapsamı", "code coverage", "kod kapsama oranı"]
category: araclar
subcategory: "Test ve kalite"
level: orta
short: "Testler çalışırken kodun ne kadarının gerçekten çalıştırıldığını gösteren ölçüm."
related: [software-testing, unit-test, test-driven-development-tdd, ci-cd, bug]
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

Test kapsamı, testler çalışırken kodun ne kadarının gerçekten çalıştırıldığını gösteren ölçümdür. Bir araç, testler boyunca hangi satırların ve hangi dalların çalıştığını işaretler; sonunda "kodun bu kısmına dokunuldu, bu kısmına hiç dokunulmadı" raporu çıkarır.

Dikkat edilecek nokta şu: bu ölçüm kodun *çalıştırıldığını* söyler, *doğru olduğunu* değil.

## Benzetme

Bir kitabı okurken gözünün kaç satırdan geçtiğini saymak gibi. Bu sayı metnin tamamını gördüğünü kanıtlar; tek bir cümlesini bile anladığını kanıtlamaz. Kapsama oranı da aynı şeyi ölçer — kodun üzerinden geçildi mi, evet; doğruluğu denetlendi mi, bunu bilmez.

## Nasıl çalışır?

Ölçümün birkaç türü vardır. **Satır kapsaması** hangi satırların çalıştığına bakar. **Dal kapsaması** her koşul için hem doğru hem yanlış durumun denenip denenmediğine bakar. **Fonksiyon kapsaması** hiç çağrılmayan fonksiyonları listeler.

Dal kapsaması genelde en bilgilendiricidir, çünkü bir satırın çalışmış olması o satırdaki koşulun iki yönünün de denendiği anlamına gelmez:

```js
export function indirimliTutar(tutar, kuponVar) {
  if (kuponVar) return tutar * 0.9;
  return tutar;
}
```

Yalnızca `indirimliTutar(100, false)` çağıran bir test bu fonksiyonu "çağrılmış" sayar, ama kuponlu dal hiç denenmemiştir. Satır kapsaması bunu kısmen, dal kapsaması net biçimde gösterir.

Raporlar genelde [[ci-cd|CI]] üzerinde her değişiklikte üretilir ve oranın düşmesi uyarı olarak gösterilir.

## Dikkat

Yüksek kapsama oranı kaliteyi garanti etmez. Hiçbir beklenti içermeyen, kodu yalnızca çalıştırıp sonuca bakmayan testler de kapsamayı yukarı çeker. Tersi de geçerli değildir: düşük oran tek başına "bu proje test edilmemiş" demek değildir, üretilmiş kodun ya da yapılandırmanın payı olabilir.

Bu yüzden evrensel bir hedef yüzde yoktur; sayı projeye, riske ve kodun türüne göre değişir ve ekiplerin bu konuda anlaştığı ortak bir değer bulunmaz. Ölçümün asıl faydası oranın kendisi değil, raporda "hiç dokunulmamış" görünen yerlerdir — orası bilinçli bir tercih mi, yoksa unutulmuş bir [[bug|hata]] yuvası mı, bunu sormak gerekir.
