---
term: "Deserialization"
tr: ""
aliases: ["deserilestirme"]
category: programlama
subcategory: "Temel kavramlar"
level: orta
short: "Dosyadan ya da ağdan gelen bir bayt veya metin dizisinin tekrar kullanılabilir yapılı veriye çevrilmesi."
related: [serialization, json, byte, encoding, error-handling]
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

Deserileştirme, [[serialization|serileştirmenin]] ters yönüdür: dosyadan okunan ya da ağdan gelen bir dizi baytın, programın kullanabileceği yapılı veriye geri çevrilmesi. İşlemin tanımı ve neden gerektiği serileştirme maddesinde anlatılıyor; burada dikkat edilmesi gereken kendi riskleri var.

"Serileştirme" Türkçede yerleşmiş olsa da tersinin oturmuş bir karşılığı yoktur; bu yüzden terim burada çevrilmedi.

## Nasıl çalışır?

Ayrıştırıcı gelen diziyi soldan sağa okur, formatın kurallarına göre parçalara ayırır ve bu parçaları programdaki tiplere yerleştirir. Bu sırada üç ayrı soruyu ayrı ayrı sorması gerekir: veri biçim olarak geçerli mi, beklenen alanlar var mı ve değerler anlamlı mı?

Kritik fark şudur: serileştirmeyi sen yaparsın, deserileştirmede ise veri dışarıdan gelir. Kaynağı ne olursa olsun — kullanıcı, başka bir servis, zincir üstünden okunan bir kayıt — gelen şey bozuk, eksik ya da kasıtlı olarak tuzaklı olabilir. Bu yüzden deserileştirme her zaman [[error-handling|hata yönetimi]] ile birlikte yazılır; "nasıl olsa doğru gelir" varsayımı bu adımda tutmaz.

## Örnek

```python
import json

gelen = '{"gonderen": "ada", "tutar": 15}'
islem = json.loads(gelen)
print(islem["tutar"] + 1)      # 16

try:
    json.loads("{bozuk")
except json.JSONDecodeError as hata:
    print("okunamadı:", hata.msg)
```

## Dikkat

Bazı dillerde "nesneyi olduğu gibi geri kur" diyen güçlü deserileştirme araçları vardır; Python'daki `pickle` bunların en bilineni. Bu araçlar gelen veriye bakarak hangi tipin kurulacağına karar verdiği için, güvenilmeyen bir kaynaktan gelen veriyle kullanıldıklarında kod çalıştırmaya kadar giden ciddi bir açık hâline gelirler. Kural basittir: dışarıdan gelen veri için veri formatı kullan, nesne formatı değil.

Bozuk olmayan ama beklenmedik veriler de sorun çıkarır. Eksik bir alan, sayı yerine gelen bir metin veya devasa bir girdi — hepsi programın ortasında patlayabilir. Gelen veriyi kabul etmeden önce şeklini doğrulamak, deserileştirmenin ayrılmaz ikinci yarısıdır.
