---
term: "Block Header"
tr: "Blok başlığı"
aliases: ["blok başlığı"]
category: temeller
subcategory: "Bloklar ve işlemler"
level: orta
short: "Bloğun künyesi: önceki bloğun özetini, işlemlerin merkle kökünü ve uzlaşıya özgü alanları taşıyan küçük veri parçası."
related: [block, merkle-root, hash-function, light-node, timestamp]
disambiguation: []
tags: []
status: taslak
reviewedBy: []
dateSensitive: false
sources: []
added: 2026-09-21
updated: 2026-09-21
---

## Nedir?

Blok başlığı, bir [[block|bloğun]] içindeki işlemleri değil, o blok hakkındaki özet bilgileri taşıyan küçük alandır. Boyutu blokta kaç işlem olduğundan bağımsız olarak sabite yakındır ve zinciri asıl bir arada tutan parça budur.

Tipik bir başlıkta şunlar bulunur: bir önceki bloğun özeti, blok içindeki bütün işlemlerin tek bir değere indirgenmiş hâli ([[merkle-root|merkle kökü]]), bloğun üretim zamanı ([[timestamp|zaman damgası]]) ve zincirin uzlaşı kuralına özgü alanlar.

## Nasıl çalışır?

Bir bloğun kimliği gövdesinin tamamından değil, yalnızca başlığından hesaplanır. Başlık bir [[hash-function|hash fonksiyonundan]] geçirilir, çıkan özet o bloğun kimliği olur ve bir sonraki blok bu özeti kendi başlığına yazar.

Tasarımın pratik sonucu şudur: işlemler başlığa merkle kökü üzerinden bağlı olduğu için tek bir işlemi değiştirmek merkle kökünü, o da bloğun kimliğini değiştirir. Aynı sebeple bütün işlemleri indirmeden de doğrulama yapılabilir. [[light-node|Hafif düğümler]] yalnızca başlıkları takip eder ve belirli bir işlemin o blokta olduğunu [[merkle-proof|merkle kanıtıyla]] sınar; bu da telefonda çalışan bir istemcinin zinciri baştan sona indirmeden iş görebilmesini sağlar.

## Dikkat

Başlıkta işlemlerin kendisi yoktur, yalnızca özetleri vardır. Bir blok başlığına bakarak "bu blokta hangi işlemler var" sorusunu yanıtlayamazsın; ancak sana verilen bir işlem listesinin o başlığa ait olup olmadığını sınayabilirsin.
