---
term: "Time Complexity"
tr: "Zaman karmaşıklığı"
aliases: ["zaman karmaşıklığı"]
category: programlama
subcategory: "Algoritmalar"
level: orta
short: "Girdi büyüdükçe bir algoritmanın kaç adım yapacağını anlatan ölçü; saniye değil, iş miktarı sayılır."
related: [big-o-notation, space-complexity, algorithm, loop, gas]
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

Zaman karmaşıklığı, bir [[algorithm|algoritmanın]] girdi büyüdükçe kaç adım yapacağını anlatır. "Adım" derken karşılaştırma, toplama, bir elemana erişme gibi temel işlemler kastedilir.

Ölçünün saniye olmamasının sebebi var: saniye makineye, dile, o anki yüke göre değişir; adım sayısı ise algoritmanın kendisine aittir. Sonuç [[big-o-notation|Big O]] gösterimiyle yazılır. O gösterim büyümenin biçimini anlatan ortak dildir; zaman karmaşıklığı onu adım ekseninde, kardeşi [[space-complexity|alan karmaşıklığı]] ise bellek ekseninde okur.

## Benzetme

Bir yolu kaç dakikada yürüdüğünü değil, kaç adımda yürüdüğünü saymak gibi. Dakika; yokuşa, havaya, ayakkabına, o gün ne kadar yorgun olduğuna göre değişir. Adım sayısı yolun kendisine aittir ve başkasının aynı yolu yürüyüşüyle karşılaştırılabilir. İki farklı güzergâhı konuşurken de asıl soru "kaç dakika sürer" değil, "yol uzadıkça adım sayısı nasıl artar" olur.

## Nasıl çalışır?

Kodu okurken döngülere bakılır. Listeyi bir kez baştan sona gezen bir [[loop|döngü]] eleman sayısıyla orantılı iş yapar. İç içe iki döngü, dıştaki her tur için içtekini baştan çalıştırdığından işi katlar. Döngü içinde her adımda kalanın yarısını eleyen bir yapı varsa artış çok daha yavaştır.

Genelde **en kötü durum** konuşulur: aranan eleman listenin sonundaysa ya da hiç yoksa kaç adım gerekir. Ortalama durum da ölçülebilir ama garantisi yoktur; en kötü durum bir üst sınır verdiği için karar almakta daha güvenlidir.

## Örnek

Aynı sonucu üreten iki yöntem. Birincisi girdi kadar adım atar, ikincisi girdi ne olursa olsun tek adımda biter.

```python
def toplam_dongu(n):
    t = 0
    for i in range(1, n + 1):
        t += i
    return t

def toplam_formul(n):
    return n * (n + 1) // 2

print(toplam_dongu(100), toplam_formul(100))  # 5050 5050
```

## Dikkat

Adım sayısı düşük olan her zaman pratikte hızlı değildir. Bir adım diske ya da ağa gidiyorsa, bellekteki bin adımdan pahalıya gelebilir; ölçmeden "bu daha hızlı" denmez.

Akıllı sözleşmelerde bu konu soyut bir kaygı olmaktan çıkar: her adım [[gas|gas]] harcar, yani fazladan dönen her döngünün bedelini kullanıcı cebinden öder. Aynı işi daha az adımda yapan bir yöntem burada doğrudan para tasarrufudur.
