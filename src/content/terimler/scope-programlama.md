---
term: "Scope (Programlama)"
tr: "Kapsam"
aliases: ["kapsam"]
category: programlama
subcategory: "Temel kavramlar"
level: orta
short: "Bir adın kodun hangi bölgesinde tanınıp kullanılabileceğini belirleyen sınır."
related: [variable, function, parameter, constant]
disambiguation: [project-scope]
tags: []
status: taslak
reviewedBy: []
dateSensitive: false
sources: []
added: 2026-09-21
updated: 2026-09-22
---

## Nedir?

Kapsam, bir adın kodun hangi bölgesinde geçerli olduğunu söyler. Bir [[variable|değişkeni]] tanımladığın yer aynı zamanda onun sınırını çizer: o sınırın içinde adı yazabilirsin, dışında yazarsan bilgisayar "böyle bir şey tanımıyorum" der.

Bu bir kısıtlama gibi görünür ama asıl işi korumadır. Bir [[function|fonksiyonun]] içinde `i` adında bir değişken kullanman, başka bir fonksiyondaki `i`'yi bozmaz; ikisi aynı adı taşır ama farklı kapsamlarda yaşar. Kapsam olmasaydı büyük bir programdaki her adın tek ve benzersiz olması gerekirdi.

## Nasıl çalışır?

Kapsamlar iç içedir. Bir ad kullanıldığında dil önce en yakın kapsama bakar; bulamazsa bir dıştakine, o da olmazsa en dışa kadar çıkar. Hiçbirinde bulamazsa hata verir.

Bir fonksiyonun içinde tanımlanan değişkenler o fonksiyon çalıştığı sürece yaşar, fonksiyon bitince silinir. [[parameter|Parametreler]] de fonksiyonun kapsamına aittir. Dışarıda tanımlanmış bir değişkeni fonksiyonun içinden okumak çoğu dilde mümkündür; üzerine yazmak ise ayrıca izin ister — Python'da `global` anahtar kelimesi bunun içindir.

## Benzetme

Sınıfın genel sohbet grubu ile dört kişilik proje grubu gibi. Proje grubundaki "toplantı üçte" mesajı sınıfın tamamına ulaşmaz; ama proje grubundakiler sınıf grubunu da okuduğu için oradaki duyuruyu bilirler. İçeridekiler dışarıyı görür, dışarıdakiler içeriyi görmez. Proje bitip grup kapandığında içeride konuşulanlar da ortadan kalkar.

## Örnek

```python
def say():
    toplam = 5
    print(toplam)

say()           # 5
print(toplam)   # NameError
```

`toplam` yalnızca fonksiyonun içinde vardır; son satır hata verir.

## Dikkat

Dar kapsam iyidir. Bir değişkeni ihtiyaç duyulan en küçük bölgede tanımlamak, onu kimin değiştirebileceğini de sınırlar. Her yerden erişilebilen değişkenler, bir hata çıktığında suçluyu bulmayı zorlaştırır.

Bu maddedeki "scope", proje yönetiminde geçen [[project-scope|proje kapsamı]] ile aynı kelime olsa da farklı bir şeydir: biri bir adın kod içindeki görünürlüğü, diğeri bir projenin neleri kapsayıp neleri kapsamadığıdır.
