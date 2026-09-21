---
term: "Exception"
tr: "İstisna"
aliases: ["istisna"]
category: programlama
subcategory: "Çalışma zamanı ve bellek"
level: orta
short: "Bir işlem yapılamadığında normal akışı kesip durumu çağrı zincirinde yukarıya devreden mekanizma."
related: [error-handling, python, runtime, revert]
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

İstisna, bir işlem yapılamadığında programın normal akışını kesip durumu yukarıya bildirme mekanizmasıdır. Fonksiyon "olmadı" diye bir değer döndürmez; işi orada bırakır ve sorunu kendisini çağırana devreder. [[error-handling|Hata yönetiminin]] iki temel yaklaşımından biridir.

## Benzetme

Şantiyede bir sorunun kademe kademe yukarı çıkması gibi. İşçi çözemediği durumu ustabaşına iletir, o çözemezse şefe çıkarır. Biri "tamam, bunu ben hallederim" derse iş kaldığı yerden devam eder; kimse sahiplenmezse sorun en tepeye kadar gider ve şantiye durur.

## Nasıl çalışır?

Bir istisna fırlatıldığında dil, o anda çalışan fonksiyonu yarıda keser ve çağrı zincirinde yukarı doğru çıkarak durumu ele alacak bir blok arar (`try`/`except`, `try`/`catch`). Bulursa akış oradan devam eder; bulamazsa program, hatayı ve buraya hangi çağrılardan geçerek gelindiğini yazıp durur. O döküm hata ayıklarken elindeki en değerli şeydir.

Yukarı çıkarken geride yarım kalan işler de vardır: açılmış dosyalar, alınmış kilitler, ayrılmış kaynaklar. Akış kesildiği için temizlik satırı atlanmış olur; diller bunun için ayrı bir yol sunar (`finally`, `with`, `defer`).

## Örnek

```python
try:
    yas = int(input("Yaş: "))
except ValueError:
    print("Sayı girmelisin.")
else:
    print(f"Gelecek yıl {yas + 1} olacaksın.")
```

`int()` çevrilemeyen bir metin aldığında `ValueError` fırlatır; akış o anda `except` bloğuna geçer ve alttaki satır hiç çalışmaz.

## Dikkat

İstisna her hata için doğru araç değildir. Kullanıcının formu boş göndermesi beklenen bir durumdur, istisnai değil; onu sıradan bir kontrolle ele almak daha okunur olur. Tersi de geçerli: her çağrıyı `try` içine sarmak hata yönetimi sayılmaz.

Zincir tarafında benzer bir mekanizma [[revert|revert]]'tir. Akıllı sözleşmede bir koşul sağlanmazsa işlem durur — ama istisnadan farklı olarak o işlemde yapılmış bütün değişiklikler de geri alınır, yani yarım kalmış bir iş geride kalmaz. Sıradan bir programda böyle bir garanti yoktur; temizliği sen yazarsın.
