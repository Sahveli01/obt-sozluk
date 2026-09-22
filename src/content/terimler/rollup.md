---
term: "Rollup"
tr: ""
aliases: []
category: olceklenme
subcategory: "Rollup'lar"
level: orta
short: "İşlemleri ana zincirin dışında çalıştırıp sonucunu ve verisini ana zincire yazan, güvenliğini oradan devralan ölçeklenme yöntemi."
related: [layer-2, optimistic-rollup, zk-rollup, sequencer, data-availability, settlement-layer]
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

Bir [[layer-1|ana zincirde]] her işlemi bütün node'ların tek tek çalıştırması güvenliğin kaynağıdır, ama aynı zamanda kapasite sınırıdır. Rollup bu iki işi ayırır: işlemler ayrı bir yürütme ortamında ucuza ve hızlıca çalıştırılır, ana zincire ise yalnızca ortaya çıkan durumun özeti ve işlemlerin ham verisi yazılır.

Adı "toplayıp tek pakete sarmak" imgesinden gelir ve Türkçede yerleşmiş bir karşılığı yoktur; metinlerde de İngilizcesiyle geçer.

## Benzetme

Bir derneğin her küçük harcamasını ana deftere tek tek işlemesi hem yavaştır hem yer kaplar. Sayman bunun yerine ay sonunda tek satırlık bir özet yazar — ama yanına bütün fişlerin nüshasını da ekler. Özet işi kısaltır; fişler, isteyen herkesin o özeti kendi başına yeniden hesaplayıp denetleyebilmesini sağlar. Fişler eklenmezse özet bir iddiadan ibaret kalır.

## Nasıl çalışır?

Üç parçası vardır.

**Yürütme:** [[sequencer|Sıralayıcı]] işlemleri toplar, bir sıraya koyar ve çalıştırır. Ortaya yeni bir durum çıkar.

**Veri:** İşlemlerin ham hâli ana zincire yayımlanır. Buna [[data-availability|veri erişilebilirliği]] denir ve rollup'ı işleten herkes ortadan kaybolsa bile zincirin durumunun sıfırdan hesaplanabilmesini sağlar.

**Doğruluk:** İki yol vardır. [[optimistic-rollup|Optimistic rollup]] sonucu aksi ispatlanana kadar doğru sayar; [[zk-rollup|ZK rollup]] sonucun yanında matematiksel bir kanıt getirir.

## Dikkat

Rollup'ı [[sidechain|yan zincirden]] ayıran şey budur: yan zincir güvenliğini kendi doğrulayıcılarından üretir, rollup ise son sözü ana zincirdeki sözleşmelere bırakır.

Burada kime güvendiğin nettir: veri yayımlandığı sürece ve doğruluk mekanizması çalıştığı sürece, sıralayıcı sana ait olmayan bir parayı harcayamaz ya da geçersiz bir durumu kabul ettiremez. Ama işlemlerin sırasını belirleyebilir, seni bir süre sansürleyebilir ve durup ağı bekletebilir. Rollup'ın güvenliği "kimse hile yapamaz" değil, "hile yaparsa yakalanır ve geri alınır" biçimindedir.
