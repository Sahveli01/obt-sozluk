---
term: "Remote"
tr: "Uzak depo"
aliases: ["uzak depo", "origin"]
category: araclar
subcategory: "Git ve GitHub"
level: orta
short: "Aynı deponun başka bir yerde duran kopyasına verilen kısa ad; genelde sunucudaki ortak kopyayı gösterir."
related: [clone, push, fetch, repository, github]
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

Remote, deponun başka bir yerdeki kopyasına verdiğin takma addır. Aslında sakladığı şey basittir: bir isim ve bir adres. Böylece her komutta uzun URL yazmak yerine kısa adı kullanırsın.

Remote'un kendisi veri tutmaz; yalnızca hangi adresin hangi isimle anılacağını söyleyen bir ayardır. Bir depoda hiç remote tanımlı olmayabilir de: tek başına çalışıyorsan Git yerelde eksiksiz çalışmaya devam eder.

## Nasıl çalışır?

Bir depoyu [[clone|klonladığında]] Git, indirdiğin adresi `origin` adıyla otomatik kaydeder. Bu isimde sihir yoktur, yalnızca yerleşmiş bir gelenektir.

Bir depoda birden fazla remote olabilir. Bir projeye katkı verirken tipik düzen şudur: kendi kopyan `origin`, asıl proje `upstream` adıyla kayıtlıdır; katkını `origin`'e gönderir, güncellemeleri `upstream`'den alırsın.

Git ayrıca her remote için uzak takip dalları tutar. `origin/main`, sunucudaki `main` dalının en son ne durumda göründüğünü saklayan yerel bir kayıttır.

## Örnek

```
git remote -v
git remote add upstream https://github.com/asil/proje.git
git fetch upstream
```

## Dikkat

`main` ile `origin/main` aynı şey değildir. Biri senin üzerinde çalıştığın daldır, diğeri en son [[fetch|indirme]] anında sunucuda gördüğün fotoğraftır. Sen indirmedikçe `origin/main` güncellenmez; yani ekranında "geride kaldın" yazmıyor olması sunucuda yeni bir şey olmadığı anlamına gelmez.

Remote'un adresini değiştirmek deponun içeriğine dokunmaz; sadece komutların nereye gideceğini değiştirir.
