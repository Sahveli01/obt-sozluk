---
term: "Repository"
tr: "Depo"
aliases: ["repo"]
category: araclar
subcategory: "Git ve GitHub"
level: baslangic
short: "Bir projenin bütün dosyalarını ve o dosyaların tüm değişiklik geçmişini birlikte tutan klasör."
related: [git, clone, commit, readme, remote]
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

Depo, bir projenin dosyalarıyla birlikte o dosyaların geçmişini de taşıyan klasördür. Sıradan bir klasörden farkı, içindeki gizli `.git` klasörüdür: bütün [[commit|commit'ler]], dallar ve etiketler orada durur. O klasörü silersen dosyaların kalır ama projenin hafızası gider.

Bir depo hem kendi bilgisayarında hem de bir sunucuda yaşayabilir; ikisi de aynı deponun birer kopyasıdır. Sunucudaki kopyaya [[remote|uzak depo]] denir.

## Benzetme

Bir dizinin çekim arşivi gibi. İçinde yalnızca yayınlanan bölümler yoktur; senaryonun her taslağı, çekilen her sahne ve hangi sahnenin hangi gün neden değiştiği de vardır. Ekibe yeni katılan biri arşivin bir kopyasını alınca projeyi baştan sona görebilir.

## Dikkat

Depoyu kopyalayan geçmişi de kopyalar. Yanlışlıkla eklenen bir parola ya da anahtar bir kez commit'e girdiyse dosyadan silmek yetmez; eski commit'lerde durmaya devam eder ve o depoyu indirmiş herkeste vardır. Bu yüzden böyle dosyalar depoya hiç girmeden [[gitignore|.gitignore]] ile dışarıda bırakılır, kaçan bir sır ise silinmez, iptal edilip yenilenir.
