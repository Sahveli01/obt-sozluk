---
term: "Dynamic Typing"
tr: "Dinamik tipleme"
aliases: ["dinamik tipleme"]
category: programlama
subcategory: "Çalışma zamanı ve bellek"
level: orta
short: "Değerlerin türünün çalışma anında belli olduğu; bir değişkenin farklı zamanlarda farklı türde değerler tutabildiği yaklaşım."
related: [static-typing, type-safety, python, javascript, runtime]
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

Dinamik tiplemede tür, değişkende değil değerin kendisinde durur. Aynı değişken bir satırda sayı, üç satır sonra metin tutabilir; kimse itiraz etmez. Denetim yok değildir, yalnızca [[runtime|çalışma zamanına]] ertelenmiştir: uyumsuz iki şeyi birleştirmeye kalktığın anda program hata verir. [[python|Python]] ve [[javascript|JavaScript]] böyle çalışır.

## Nasıl çalışır?

Çalışma anında her değer kendi türünü de yanında taşır. `a + b` satırına gelindiğinde dil önce iki değerin ne olduğuna bakar, sonra o türler için toplamanın ne anlama geldiğine karar verir.

Bu esnekliğin en pratik sonucu şudur: bir fonksiyon, kendisinden beklenen işi yapabilen her nesneyle çalışır; nesnenin türünün adı önemli değildir. Aynı kod hem listeyle hem metinle iş görebilir, çünkü ikisi de "kendini çoğalt" isteğine cevap verebiliyordur.

Bedeli, denetimin ancak o satır çalıştığında yapılmasıdır. Hiç girilmemiş bir `if` dalındaki tür hatası, o dal ilk kez çalıştığı güne kadar saklı kalır. Bu yüzden dinamik tipli projelerde testlerin kodun her yolundan geçmesi, statik tipli projelere göre daha kritiktir.

İki yaklaşımın yan yana karşılaştırması [[static-typing|statik tipleme]] maddesinde duruyor.

## Örnek

```python
def ikiye_katla(x):
    return x * 2

print(ikiye_katla(21))      # 42
print(ikiye_katla("ha"))    # haha
print(ikiye_katla([1, 2]))  # [1, 2, 1, 2]
```

Üç çağrı da geçerlidir; `*` işleminin ne anlama geldiğine gelen değerin türüne bakılarak karar verilir.

## Dikkat

Dinamik tipli olmak "tipsiz" olmak değildir. Türler vardır ve serttir, yalnızca kontrol zamanı farklıdır: Python'da `1 + "a"` çalışmaz, hata verir.

Projeler büyüdükçe tip bilgisini geri getiren araçlar yaygınlaşır — Python'da tip ipuçları ve mypy, JavaScript'te [[typescript|TypeScript]]. Bunlar dili statik tipli yapmaz; kodu çalıştırmadan önce okuyup uyumsuzlukları söyleyen bir denetim katmanı ekler.
