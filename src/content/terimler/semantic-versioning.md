---
term: "Semantic Versioning"
tr: ""
aliases: ["semver", "anlamsal sürümleme"]
category: araclar
subcategory: "Geliştirme ortamı"
level: orta
short: "Sürüm numarasının üç parçasını kurala bağlayan anlaşma: hangi parçanın arttığı, değişikliğin türünü söyler."
related: [package-manager, npm, dependency, release, tag]
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

Semantic Versioning, `2.4.1` gibi üç parçalı sürüm numaralarına ortak bir anlam yükleyen anlaşmadır. Parçalar sırasıyla MAJOR, MINOR ve PATCH'tir:

- **PATCH** artar: hata düzeltildi, davranış aynı kaldı.
- **MINOR** artar: yeni özellik eklendi, eski kullanımlar hâlâ çalışıyor.
- **MAJOR** artar: geriye dönük uyumluluk bozuldu, kendi kodunu güncellemen gerekebilir.

Amaç, bir [[package-manager|paketi]] yükseltmeden önce "bu bende bir şey kırar mı?" sorusunu numaraya bakarak cevaplayabilmektir. Türkçede "anlamsal sürümleme" denemesine rastlanır ama topluluk kısaca "semver" der; bu yüzden terim burada çevrilmedi.

## Benzetme

Bir kitabın baskıları gibi. Dizgi hatasının düzeltildiği baskıda alıntıların yerli yerindedir. Yeni bir bölüm eklenen baskıda eski bölümler hâlâ aynı yerdedir. Ama sayfa düzeni baştan kurulduğunda o kitaba atıf veren herkesin alıntılarını tek tek kontrol etmesi gerekir.

## Nasıl çalışır?

Paket yöneticileri bu anlaşmaya güvenerek sürüm aralığı yazar. `package.json` içindeki `^2.4.1` "2.4.1 ve üstü, ama 3.0.0'a geçme" demektir; yani uyumluluğu bozan yükseltmelere otomatik geçilmez. `~2.4.1` daha dardır ve yalnızca PATCH yükseltmelerine izin verir.

`0.` ile başlayan sürümler kuralın dışındadır: proje henüz oturmamış sayılır ve MINOR artışı da uyumluluğu bozabilir. Bir [[release|sürümü]] yayımlarken numarayı [[tag|etiketle]] işaretlemek yaygın alışkanlıktır.

## Dikkat

Bu bir anlaşmadır, garanti değil. Bir bakımcı MAJOR artırmadan da bir şeyi bozabilir; uyumluluğun bozulup bozulmadığı bazen tartışmalıdır. Kurulumun tekrarlanabilirliği bu yüzden sürüm aralığına değil, lock dosyasına dayanır.

Her projenin de semver kullanmak zorunda olmadığını unutma: tarihe göre numaralandıran ya da hiç kural izlemeyen projeler vardır. Bir [[dependency|bağımlılığı]] yükseltmeden önce değişiklik günlüğüne bakmak numaraya bakmaktan güvenlidir.
