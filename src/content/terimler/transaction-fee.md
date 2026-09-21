---
term: "Transaction Fee"
tr: "İşlem ücreti"
aliases: ["işlem ücreti"]
category: temeller
subcategory: "Bloklar ve işlemler"
level: baslangic
short: "Bir işlemin zincire yazılması için ödenen bedel; yapılan işin büyüklüğü ile o anki birim fiyatın çarpımıdır."
related: [transaction, gas, blockspace, mempool, base-fee, block-reward]
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

İşlem ücreti, bir [[transaction|işlemi]] zincire yazdırmak için ödediğin bedeldir. Sabit bir liste fiyatı değildir; iki şeyin çarpımıdır: işlemin yaptırdığı işin büyüklüğü ve o an birim iş için ödenmesi gereken fiyat.

İşin büyüklüğü işlemin ne yaptığına bağlıdır. Basit bir transfer az, karmaşık bir sözleşme çağrısı çok iş yaptırır; birçok zincirde bu iş birimine [[gas|gas]] denir. Birim fiyat ise ağın yoğunluğuyla değişir, çünkü aynı bloğa girmek isteyen herkes sınırlı bir [[blockspace|blok alanı]] için yarışır.

## Benzetme

Taksimetre gibi. Sayaç gidilen yola göre işler, üstüne bir de yoğun saat çarpanı biner. Aynı güzergâh sakin bir sabahta ucuz, trafiğin kilitlendiği bir akşamda pahalıdır — mesafe hiç değişmediği hâlde.

## Dikkat

Ücret, işlem başarısız olsa bile alınır. Sözleşme hata verdiğinde yaptığı değişiklikler geri alınır, harcadığı iş geri alınmaz.

Ücretin tamamı her zaman blok üreticisine gitmez: bazı ağlarda bir kısmı yakılır, üreticiye yalnızca öncelik payı kalır. Ayrıca yüksek ücret ödemek sıranı garanti etmez; senden daha çok ödeyen bir işlem her an [[mempool|havuza]] girip önüne geçebilir.
