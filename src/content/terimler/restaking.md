---
term: "Restaking"
tr: ""
aliases: []
category: defi
subcategory: "Getiri"
level: ileri
short: "Bir ağda stake edilmiş teminatın, aynı anda başka sistemlerin güvencesi olarak da taahhüt edilmesi."
related: [liquid-restaking-token-lrt, liquid-staking-token-lst, staking, slashing, eigenlayer, collateral]
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

Restaking, bir ağda stake edilmiş teminatın aynı anda başka sistemlerin güvencesi olarak da taahhüt edilmesidir. Teminatı koyan kişi, varlığının o sistemlerin kurallarına ve ceza koşullarına da tabi olmasını kabul eder; karşılığında o sistemlerin dağıttığı ödüllerden pay alır.

Burada teminat çoğalmaz. Aynı teminat birden çok yere söz verilmiş olur. Türkçede yerleşik karşılığı yok.

## Benzetme

Bir kişinin beş ayrı arkadaşına kefil olmasına benzer. Her sözleşmeye tek tek bakan alacaklı için ortada sağlam bir kefil vardır. Ama beşinin arkasında da aynı maaş, aynı ev durur. Biri ödemeyi aksattığında kefilin varlığı oraya gider; kalan dört alacaklı ise hâlâ sağlam bir kefile güvendiğini sanmaya devam eder. Kefilin kendisi için de durum değişmiştir: artık kendisinin yönetmediği beş ayrı kişinin davranışından sorumludur.

## Nasıl çalışır?

Kullanıcı ya doğrudan stake ettiği varlığı ya da elindeki [[liquid-staking-token-lst|LST]]'yi restaking sözleşmesine yatırır. Ardından bu teminatı, güvenlik satın almak isteyen hizmetlere yönlendirir: bir köprü ya da bir veri erişilebilirlik katmanı olabilir. Her hizmetin kendi doğrulama görevleri ve kendi ceza koşulları vardır. Görevleri fiilen, teminatın yetkilendirildiği operatörler yürütür. Bu modeli uygulayan örneklerden biri [[eigenlayer|EigenLayer]]'dır.

Amaç şudur: yeni bir hizmet, sıfırdan kendi güvenlik bütçesini toplamak yerine hazır bir teminat havuzundan kiralasın.

## Dikkat

Ödüller toplanır, riskler çarpılır. Teminat tektir ama ceza koşulu artık birden çoktur: katıldığın her hizmet aynı teminat üzerinde ayrı bir kesinti hakkı yazar. Bir hizmetin kodundaki hata ya da kötü yazılmış bir ceza kuralı, o hizmetten hiç ödül almamış olsan bile teminatının kesilmesine yol açabilir. Klasik [[slashing|cezada]] kural ağın protokolüne gömülüdür; burada kuralı, teminatı yöneten değil hizmeti yazan taraf belirler.

Koşulların tamamı koda yazılı da olmayabilir. Bazı tasarımlarda hangi davranışın cezalandırılacağına bir komite ya da yönetişim karar verir; o zaman değerlendirmen gereken şey bir formül değil, bir karar mekanizmasıdır.

Bir de yığın sorunu vardır. En altta ağın kendi stake'i, üstünde LST, üstünde restaking, en üstte [[liquid-restaking-token-lrt|LRT]] durur. Her katmanın ödülü ayrı ayrı sayılıp toplanır, ama hepsi aynı teminata dayanır: en alttaki tek bir aksaklık bütün yığını aynı anda aşağı çeker.
