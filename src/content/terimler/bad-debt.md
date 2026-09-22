---
term: "Bad Debt"
tr: "Kötü borç"
aliases: ["kötü borç"]
category: defi
subcategory: "Borç verme ve alma"
level: orta
short: "Teminatın satışının borcu kapatmaya yetmediği, kapanmayan açığın protokolün üstünde kaldığı durum."
related: [liquidation, liquidation-threshold, health-factor, insurance-protocol, money-market, oracle-manipulation]
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

Kötü borç, bir pozisyonun teminatının borcunu karşılamaya yetmediği durumdur. Teminatın tamamı satılır, borç yine de kapanmaz ve geriye kimsenin ödemeyeceği bir açık kalır.

Bu açık kaybolmaz. Havuzun defterinde duran bir varlık olarak görünmeye devam eder, ama arkasında hiçbir şey yoktur. Mevduat sahiplerinin bakiyeleri toplamı, havuzun gerçekte sahip olduğundan fazladır.

## Nasıl çalışır?

Sistem normalde buna izin vermeyecek şekilde kurulur: [[liquidation-threshold|tasfiye eşiği]] teminatın borcu hâlâ rahatça karşıladığı bir yere konur ve [[liquidation|tasfiyenin]] o aralıkta tamamlanması beklenir.

Kötü borç, bu aralığın kapanamadığı anlarda doğar.

**Fiyat çok hızlı düşerse** teminat, tasfiye işlemi zincire yazılmadan önce borcun altına iner.

**Ağ tıkalıysa** tasfiye işlemleri sıraya girer; gecikmenin boyutunu piyasa değil, o anki blok alanı belirler.

**Teminat ince bir piyasada işlem görüyorsa** tasfiye eden taraf aldığı teminatı satarken fiyatı kendisi düşürür ([[slippage|kayma]]); işlem kârlı olmayacağı için kimse tasfiyeyi çalıştırmaz ve pozisyon olduğu yerde çürür.

## Dikkat

Asıl soru açığın nasıl doğduğu değil, kimin üstlendiğidir — ve bu bir tasarım kararıdır. Sırayla: bu iş için ayrılmış bir sigorta havuzu ya da güvenlik modülü, protokolün hazinesi, son çare olarak da mevduat sahiplerinin bakiyelerinin kırpılması. Üçüncü basamağın var olduğu bir havuza varlık koymak risksiz bir işlem değildir; bunun nasıl karşılandığını [[insurance-protocol|sigorta protokolleri]] başlığı ayrıca anlatır.

Kötü borcun ikinci özelliği sessiz olmasıdır. Tek bir pozisyonda doğan açık gözle görülmez. Aynı fiyat hareketi aynı anda binlerce pozisyonu birden eşiğin altına indirdiğinde ise toplam, havuzun taşıyabileceğini aşabilir.
