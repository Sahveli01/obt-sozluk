---
term: "Docker Image"
tr: ""
aliases: ["docker imaji"]
category: araclar
subcategory: "Derleme ve dağıtım süreci"
level: orta
short: "Bir uygulamanın dosya sistemiyle birlikte dondurulmuş, değiştirilmeyen şablonu; konteynerler bu şablondan başlatılır."
related: [docker, container, build-artifact, dependency, deployment]
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

Docker imajı, bir konteynerin çalışmaya başlamak için ihtiyaç duyduğu her şeyin dondurulmuş hâlidir: dosya sistemi, kurulu paketler, uygulamanın kendisi ve hangi komutla başlayacağı. İmaj kendi başına çalışmaz, çalıştırılmayı bekler; çalışan şey ondan başlatılan [[container|konteynerdir]]. Adı [[docker|Docker]]'dan gelen bir ürün adı olduğu için Türkçeye çevrilmez, "imaj" denir.

İmaj bir [[build|build]] çıktısıdır: tarif dosyasındaki adımlar çalıştırılır, sonuç tek bir paket olarak etiketlenir.

## Benzetme

Matbaa kalıbı gibi. Kalıp bir kez özenle hazırlanır, ondan sonra çıkan her baskı birbirinin aynısıdır. Baskıdaki bir hatayı kâğıtları tek tek karalayarak gideremezsin, kalıba dönersin. Aynı kalıp başka bir matbaaya gönderildiğinde de aynı sayfayı basar.

## Nasıl çalışır?

İmajlar katmanlıdır: tarifteki her adım bir katman üretir ve katmanlar imajlar arasında paylaşılabilir. Bir satırı değiştirdiğinde yalnızca o katmandan sonrası yeniden üretilir. Bu yüzden sık değişen adımlar (uygulama kodunu kopyalamak gibi) dosyanın sonuna, seyrek değişenler ([[dependency|bağımlılık]] kurulumu gibi) başına yazılır; imaj üretimi böylece hızlanır.

Her imajın bir adı ve etiketi olur. Etiket sürüm numarasına benzese de sabit değildir, aynı etiket sonradan başka bir imajı gösterebilir. Tam olarak aynı imaj garanti edilecekse etiket yerine içerikten hesaplanan [[hash|hash]] değeri kullanılır. İmajlar bir kayıt deposuna yüklenir, sunucular oradan indirir.

## Dikkat

İmaj değişmez kabul edilir: çalışan konteynerin içine girip dosya düzeltirsen, o düzeltme konteyner yeniden başlatıldığında kaybolur. Değişiklik tarife yazılır ve imaj yeniden üretilir. Bir de imajın içindeki her şey onu indiren herkes tarafından okunabilir; üretim sırasında kullandığın bir anahtar sonraki adımda silinse bile eski katmanda durmaya devam eder.
