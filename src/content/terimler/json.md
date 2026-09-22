---
term: "JSON"
tr: ""
aliases: []
category: programlama
subcategory: "Diller ve formatlar"
level: baslangic
short: "Programlar arasında veri taşımak için kullanılan, insanın da okuyabildiği sade metin biçimi."
related: [serialization, api, json-rpc, yaml, data-type]
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

JSON, programlar arasında veri taşımak için kullanılan bir metin biçimidir. Yapısı birkaç parçaya indirgenmiştir: süslü parantezli nesneler, köşeli parantezli diziler ve bunların içindeki metin, sayı, `true`/`false`, `null` değerleri. Bu azlık sayesinde neredeyse her dilin JSON okuyucusu vardır; iki program birbirinin dilini bilmeden aynı veriyi anlayabilir.

Bir [[api|API]]'den dönen yanıt, bir cüzdanın düğüme gönderdiği [[json-rpc|JSON-RPC]] isteği, bir projenin `package.json` dosyası — hepsi JSON'dur. Bellekteki bir nesneyi bu biçimde metne çevirmeye [[serialization|serileştirme]] denir.

## Örnek

```json
{
  "ad": "cuzdan",
  "aktif": true,
  "bakiye": 12.5,
  "etiketler": ["test", "demo"]
}
```

Alan adları her zaman çift tırnak içindedir. `etiketler` iki elemanlı bir dizi, `aktif` ise metin değil mantıksal bir değerdir.

## Dikkat

JSON yorum satırı kabul etmez ve son elemandan sonra virgül bırakılmasına izin vermez; elle yazılan ayar dosyalarında hatanın çoğu bu ikisinden çıkar.

Bir de tarih tipi yoktur: tarihler metin olarak taşınır ve nasıl yorumlanacağı iki tarafın anlaşmasına kalır. Aynı şekilde çok büyük tam sayılar da dikkat ister, zincir tarafındaki büyük değerler bu yüzden çoğu zaman metin olarak gönderilir.
