---
term: "Package"
tr: "Paket"
aliases: ["paket"]
category: programlama
subcategory: "Kod organizasyonu"
level: baslangic
short: "Bir adı, bir sürümü ve içeriği olan, tek parça hâlinde yayımlanıp projelere kurulan kod birimi."
related: [module, package-manager, dependency, semantic-versioning, npm, crate]
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

Paket, dağıtılmak üzere toplanmış koddur. Bir ya da birçok [[module|modül]], bir ad, bir sürüm numarası ve paketin neye ihtiyaç duyduğunu yazan küçük bir tanım dosyası bir araya gelir; ortaya kurulabilen, paylaşılabilen tek bir birim çıkar.

Paketler herkese açık bir depoda yayımlanır ve oradan [[package-manager|paket yöneticisiyle]] kurulur: JavaScript tarafında [[npm]], Rust tarafında [[crate|crate]]'ler. Kurduğun paket, o andan itibaren projenin bir [[dependency|bağımlılığıdır]].

Sürüm numarası paketin kimliğinin parçasıdır; hangi rakamın ne anlama geldiği [[semantic-versioning]] maddesinde.

## Benzetme

Bir müzik albümü gibi. Parçalar tek tek kaydedilir ama yayımlanan şey albümdür: adı, kapağı ve sanatçısı vardır, dinleyici onu bir bütün olarak kitaplığına ekler. Kimse tek bir ses dosyasına "albüm" demez.

## Dikkat

Kelime dile göre kayar. Python'da "package" içinde modüller bulunan bir klasörü anlatır; kurduğun şeye teknik olarak "distribution" denir ama günlük konuşmada ona da paket denir. Java'da ise package yalnızca bir ad alanıdır, kurulan bir şey değildir.
