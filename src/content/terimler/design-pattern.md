---
term: "Design Pattern"
tr: "Tasarım kalıbı"
aliases: ["tasarım kalıbı", "design patterns"]
category: programlama
subcategory: "Paradigmalar ve tasarım"
level: orta
short: "Sık karşılaşılan bir tasarım problemine verilen, adı konmuş ve tekrar tekrar kullanılan çözüm biçimi."
related: [factory-pattern, solid, refactoring, clean-code, object-oriented-programming-oop]
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

Tasarım kalıbı, sık karşılaşılan bir tasarım problemine verilen ve adı konmuş çözüm biçimidir. Kimse bunları oturup icat etmedi; aynı çözüm yeterince çok projede bağımsız olarak ortaya çıktığı için derlenip adlandırıldı.

Asıl kazanç kodda değil, konuşmadadır. "Buraya bir fabrika koyalım" dediğinde karşındaki kişi beş dakikalık bir tarifi dinlemeden ne demek istediğini anlar. Kalıplar, tasarım tartışmasının ortak kelime dağarcığıdır.

## Benzetme

Denizcilikteki düğümler gibi. Her birinin adı vardır ve hangi durumda hangisinin atılacağı bellidir: biri yük altında sıkılır, biri ıslanınca çözülebilir kalır, biri iki halatı birbirine ekler. İki denizci adını söyleyerek anlaşır, tarif etmeye gerek kalmaz. Ama düğüm ezberlemek denizcilik değildir; yanlış yerde atılan doğru düğüm hiçbir işe yaramaz.

## Nasıl çalışır?

Bir kalıbın tarifi üç parçadan oluşur: hangi problemi çözdüğü, çözümün yapısı ve karşılığında neyi kaybettiğin. Üçüncü parça en çok atlanan parçadır, oysa kalıbı seçilebilir kılan odur.

Kalıplar genelde üç aileye ayrılır: nesnenin nasıl üretileceğini düzenleyenler ([[factory-pattern|fabrika]] gibi), parçaların nasıl bir araya geleceğini düzenleyenler, ve nesnelerin birbiriyle nasıl konuşacağını düzenleyenler. Aşağıdaki örnek son aileden: davranışı bir parametre olarak dışarıdan almak.

## Örnek

```python
def indirimsiz(tutar):
    return tutar

def ogrenci(tutar):
    return tutar * 80 // 100

def odeme(tutar, kural):
    return kural(tutar)

print(odeme(100, indirimsiz))   # 100
print(odeme(100, ogrenci))      # 80
```

## Dikkat

Kalıplar dile ve döneme bağlıdır. Bazılarının varlık sebebi, yazıldıkları dilde eksik olan bir özelliktir; fonksiyonların değer gibi taşınabildiği bir dilde yukarıdaki örnek bir "kalıp" olmaktan çıkıp sıradan kod olur.

Yaygın hata, kalıbı problemden önce seçmektir. Kod kalıba uydurulduğunda ortaya gereksiz katmanlar çıkar ve basit bir işlem üç dosyaya dağılır. Doğru sıra terstir: problemi yaz, sıkıştığın yeri gör, adı olan bir çözüm varsa onu kullan.

Blockchain tarafında da adı konmuş kalıplar var — sözleşmeleri güncellenebilir kılan vekil kalıpları ya da [[checks-effects-interactions|kontrol-etki-etkileşim]] sıralaması gibi. Oradaki fark şudur: bir hatayı geri alamadığın için kalıptan sapmanın bedeli çok daha ağırdır.
