---
term: "Recursive Proof"
tr: "Özyinelemeli Kanıt"
aliases: []
category: kriptografi
subcategory: "Sıfır bilgi (ZK) ve ileri kriptografi"
level: ileri
short: "Başka bir kanıtın doğrulandığını kanıtlayan kanıt; çok sayıda kanıtın tek bir kanıtta toplanmasını sağlar."
related: [zero-knowledge-proof-zkp, proof-aggregation, verifier, zkvm, recursion]
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

Bir kanıtı doğrulamak da sonuçta bir hesaptır. Hesap olan her şeyin doğru yapıldığı ise kanıtlanabilir. Bu iki cümleyi birleştirince özyinelemeli kanıt çıkar: "elimdeki kanıtı doğruladım ve kabul edildi" iddiasını kanıtlayan yeni bir kanıt.

Faydası, kanıtların birikmesini engellemektir. Yüz ayrı kanıtı zincire tek tek göndermek yerine, hepsini doğrulayan tek bir kanıt gönderilir ([[proof-aggregation|kanıt birleştirme]]).

## Nasıl çalışır?

Anahtar adım, [[verifier|doğrulayıcının]] algoritmasını bir [[circuit-zk|devre]] olarak yazmaktır. Doğrulama artık devreye dönüştüğüne göre, o devrenin çalıştırılması da her hesap gibi kanıtlanabilir.

Bu iki kullanım açar. **Birleştirme:** çok sayıda bağımsız kanıt bir ağaç gibi ikişer ikişer toplanır, en tepede tek bir kanıt kalır. **Artımlı kanıtlama:** çok uzun bir hesap parçalara bölünür; her parça kanıtlanırken bir önceki parçanın kanıtı da içeri alınır, böylece sonuncusu bütün zincirin doğruluğunu taşır. Bir [[zkvm|zkVM]] uzun programları bu şekilde kanıtlayabilir.

[[recursion|Özyineleme]] fikrinin programlamadaki hâliyle aynı mantık işler: bir adım, kendi türünden bir sonucu girdi olarak alır.

## Dikkat

Özyineleme bedavaya gelmez. Doğrulama devresinin küçük olması gerekir; büyükse her katman kanıt üretmeyi daha da pahalılaştırır. Bu kısıt, kullanılabilecek eğri ve ispat sistemi seçimlerini daraltır — sistemler özyinelemeye uygun olacak şekilde tasarlanır, sonradan öyle olmazlar.

İkincisi, birleştirme toplam işi azaltmaz. Yüz kanıtın üretilmesi yine yapılmıştır; kazanılan şey, **doğrulama** tarafının yükünün tek bir kanıta inmesidir.
