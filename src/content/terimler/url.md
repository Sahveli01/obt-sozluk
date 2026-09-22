---
term: "URL"
tr: ""
aliases: []
category: web
subcategory: "İnternet temelleri"
level: baslangic
short: "Bir kaynağın nerede olduğunu ve ona hangi protokolle ulaşılacağını tek satırda anlatan adres."
related: [domain-name, http, browser, dns, https]
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

URL, bir kaynağın nerede olduğunu ve ona nasıl ulaşılacağını tek satırda anlatan adrestir. [[browser|Tarayıcının]] adres çubuğuna yazdığın, bir bağlantıya tıkladığında gittiğin şey budur. "Uniform Resource Locator" kısaltmasıdır; Türkçede yerleşmiş bir karşılığı yoktur, günlük dilde çoğunlukla "adres" ya da "bağlantı" denir.

## Benzetme

Zarfın üstündeki adres satırları gibi: ülke, şehir, sokak, kapı numarası, daire. Genelden özele doğru daralır ve her satır bir öncekinin içini gösterir. URL de aynı sırayla okunur: önce hangi kurala göre konuşulacağı, sonra hangi [[server|sunucuya]] yani kaynağı saklayan hangi uzak bilgisayara gidileceği, en sonda o sunucunun içindeki hangi kaynağın istendiği.

## Örnek

```text
https://ornek.com.tr/terimler/url?dil=tr#benzetme

https          şema: hangi protokolle konuşulacak
ornek.com.tr   alan adı: hangi sunucuya gidilecek
/terimler/url  yol: sunucudaki hangi kaynak
?dil=tr        sorgu: kaynağa iletilen ek bilgi
#benzetme      çapa: sayfanın hangi bölümüne inilecek
```

## Dikkat

Çapa, yani `#` işaretinden sonrası sunucuya hiç gönderilmez; onu yalnızca tarayıcı kullanır. Sorgu kısmı ise gider ve sunucu günlüklerine düşer — bu yüzden parola benzeri bilgiler URL'ye yazılmaz.
