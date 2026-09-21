---
term: "Space Complexity"
tr: "Alan karmaşıklığı"
aliases: ["alan karmaşıklığı", "bellek karmaşıklığı"]
category: programlama
subcategory: "Algoritmalar"
level: orta
short: "Girdi büyüdükçe bir algoritmanın ne kadar ek bellek isteyeceğini anlatan ölçü."
related: [big-o-notation, time-complexity, memory-management, stack-and-heap, data-structure]
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

Alan karmaşıklığı, bir algoritmanın girdi büyüdükçe ne kadar **ek** bellek isteyeceğini anlatır. Buradaki "ek" kelimesi önemli: girdinin kendisi zaten bellektedir, sayılan şey algoritmanın kendi işi için açtığı fazladan yerdir — kopyalar, geçici listeler, sayaçlar.

[[big-o-notation|Big O]] gösterimi burada da aynen kullanılır, yalnızca ölçülen eksen değişir: [[time-complexity|zaman karmaşıklığı]] adım sayar, alan karmaşıklığı yer sayar. Bu yüzden bir algoritmanın iki ayrı karmaşıklığı olur ve ikisi genelde birbirinin aleyhine çalışır.

## Benzetme

Yapboz yaparken masanın büyüklüğü gibi. Geniş bir masan varsa bütün parçaları yayar, renklerine göre öbekler ve aradığını hemen bulursun. Küçük bir sehpada da aynı yapbozu bitirirsin, ama parçaları kutudan tek tek çıkarıp her seferinde baştan bakman gerekir: iş biter, daha uzun sürer. Masa küçüldükçe zaman uzar, masa büyüdükçe zaman kısalır — yapbozun kendisi değişmemiştir.

## Nasıl çalışır?

Bir algoritma girdiyi olduğu yerde değiştiriyorsa ek belleği sabittir; girdi ne kadar büyürse büyüsün yalnızca birkaç sayaç tutar. Girdinin bir kopyasını ya da her eleman için bir kayıt çıkarıyorsa ek bellek girdiyle birlikte büyür.

Gözden kaçan bir kalem de [[recursion|özyineleme]] derinliğidir: her çağrı, dönene kadar kendi bilgisini [[stack-and-heap|yığında]] tutar. Bin kez kendini çağıran bir fonksiyon hiç liste oluşturmasa bile bin katman yer kaplar ve yeterince derinde program bellek hatası verir.

## Örnek

Listede tekrar eden sayı var mı? İki yöntem, aynı cevap: ilki fazladan bir küme tutar ve listeyi bir kez gezer; ikincisi hiç fazladan yer kullanmaz ama çiftleri tek tek dener.

```python
def tekrar_var_mi_kume(sayilar):      # ek bellek girdiyle büyür
    gorulenler = set()
    for s in sayilar:
        if s in gorulenler:
            return True
        gorulenler.add(s)
    return False

def tekrar_var_mi_dongu(sayilar):     # ek bellek sabit
    for i in range(len(sayilar)):
        for j in range(i + 1, len(sayilar)):
            if sayilar[i] == sayilar[j]:
                return True
    return False
```

## Dikkat

Buradaki değiş tokuş somuttur: yukarıdaki ilk yöntem belleği harcayıp zamandan kazanır, ikincisi bellekten kısıp zamanı uzatır. Hangisinin doğru olduğu ortamın darboğazına bağlıdır. Bilgisayarda bellek genelde boldur, bu yüzden çoğu zaman birinci yöntem tercih edilir; belleğin kıt olduğu gömülü cihazlarda tercih tersine dönebilir.

Ek belleği düşük tutmak, işi bitirince belleğin geri verileceği anlamına da gelmez; o kısım [[memory-management|bellek yönetiminin]] konusudur. Zincir üstünde ise yer en pahalı kaynaklardan biridir: kalıcı olarak saklanan her bayt her düğümde durur, bu yüzden sözleşmelerde "biraz daha bellek kullanayım" kararı bilgisayardakinden çok daha pahalıdır.
