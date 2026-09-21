---
term: "Refactoring"
tr: ""
aliases: ["refactor"]
category: programlama
subcategory: "Paradigmalar ve tasarım"
level: orta
short: "Kodun dışarıdan görünen davranışını değiştirmeden iç yapısını düzenleme işi."
related: [clean-code, technical-debt, unit-test, design-pattern, code-review]
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

Refactoring, kodun dışarıdan görünen davranışını değiştirmeden iç yapısını düzenlemektir. İşlem bittiğinde program aynı girdilere aynı cevapları verir; değişen tek şey kodun okunabilirliği ve bir sonraki değişikliğin ne kadar süreceğidir.

Tanımdaki "davranışı değiştirmeden" kısmı süs değildir. Aynı anda hem yapıyı düzenleyip hem davranışı değiştirirsen, sonradan bir hata çıktığında hangisinin sebep olduğunu ayırt edemezsin.

"Refactoring" için yerleşik tek bir Türkçe karşılık yok; "yeniden düzenleme" dendiği oluyor ama sektörde İngilizcesi kullanılıyor.

## Benzetme

Bir denklemi sadeleştirmek gibi. `(2x + 4) / 2` ifadesini `x + 2` diye yazarsın. Hangi sayıyı koyarsan koy sonuç aynı çıkar; değişen yalnızca ifadenin okunabilirliği ve bir sonraki adımda ne kadar hızlı ilerleyebildiğindir. Sadeleştirmede bir hata yaparsan sonuç sessizce değişir — bu yüzden birkaç sayıyı yerine koyup kontrol edersin. Koddaki karşılığı testlerdir.

## Nasıl çalışır?

İşleyen yöntem küçük adımlardır: bir metodu çıkar, çalıştır; bir değişkenin adını değiştir, çalıştır; bir koşulu tersine çevir, çalıştır. Her adımdan sonra testlerin yeşil kaldığını görürsün. Bir şey bozulduğunda sorumlu, az önceki tek adımdır.

Bu yüzden refactoring ile testler birbirine bağlıdır. [[unit-test|Birim testleri]] olmayan bir kodda yapı değişikliği, davranışın korunduğunu doğrulayacak bir aracın olmaması demektir; bu durumda yaygın sıra önce testi yazmak, sonra düzenlemektir. Editörlerin "adı değiştir", "metodu çıkar" gibi hazır işlemleri de aynı sebeple vardır: elle yapılan değişiklikten daha az hata üretirler.

## Örnek

```python
def toplam(sepet):
    t = 0
    for urun in sepet:
        t += urun["fiyat"] * urun["adet"]
    return t

def toplam(sepet):                    # düzenlenmiş hâli, aynı sonuç
    return sum(u["fiyat"] * u["adet"] for u in sepet)

sepet = [{"fiyat": 10, "adet": 2}, {"fiyat": 5, "adet": 1}]
print(toplam(sepet))                  # 25
```

## Dikkat

Refactoring üç şeyle karıştırılır: özellik eklemek, hata düzeltmek ve baştan yazmak. Üçü de meşru işlerdir ama hiçbiri refactoring değildir. Bunları aynı değişiklik paketine karıştırmak, [[code-review|kod incelemesini]] de gereksiz yere zorlaştırır: gözden geçiren kişi yüz satırın hangisinin davranış değiştirdiğini aramak zorunda kalır.

Bir de her kod düzenlenmeyi hak etmez. Bir daha dokunulmayacak, kimsenin okumayacağı bir betiği güzelleştirmek harcanmış zamandır. Refactoring'in karşılığını aldığı yer, üstünde çalışmaya devam edeceğin koddur.
