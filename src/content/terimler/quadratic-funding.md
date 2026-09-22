---
term: "Quadratic Funding"
tr: ""
aliases: []
category: yonetisim
subcategory: ""
level: orta
short: "Ortak bir eşleştirme havuzunun, toplanan tutardan çok bağışçı sayısına ağırlık veren bir formülle projelere dağıtılması."
related: [quadratic-voting, public-goods, grant, sybil-attack, retroactive-public-goods-funding]
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

Quadratic funding, [[public-goods|kamusal malların]] finansmanı için önerilmiş bir dağıtım yöntemidir. Ortada iki para vardır: kullanıcıların tek tek yaptığı bağışlar ve önceden ayrılmış ortak bir eşleştirme havuzu. Havuzun kimden kime gideceğine, bağışların kendisi karar verir.

Kritik nokta, havuzun toplanan tutara göre değil, **kaç kişinin bağış yaptığına** göre dağıtılmasıdır. Bir projenin ağırlığı, aldığı bağışların kareköklerinin toplamının karesiyle orantılıdır. Bu formül, çok sayıda küçük bağışı az sayıda büyük bağışın önüne geçirir.

Yerleşmiş bir Türkçe karşılığı olmadığı için İngilizce adıyla kullanılır.

## Nasıl çalışır?

Mantığı [[quadratic-voting|quadratic voting]] ile aynıdır: bağış, "bu iş yapılsın" yönünde kullanılmış bir oy sayılır ve büyük tutarın etkisi karekökle bastırılır. Kişi başına düşen ağırlık sınırlandığı için havuz, "bir kişinin çok istediği" işe değil, "çok kişinin biraz istediği" işe akar.

Amaç, neyin fonlanacağına karar veren küçük komitenin yerine dağınık bir sinyal koymaktır: hangi işin gerçekten kullanıcısı var?

## Örnek

İki proje de 100 birim topladı.

- **A:** 100 kişiden 1'er birim → (100 × √1)² = 10.000 ağırlık.
- **B:** tek kişiden 100 birim → (√100)² = 100 ağırlık.

Toplanan para aynı; havuzdan alacakları pay arasında yüz kat fark var.

## Dikkat

Formül, bağışçı sayısını ödüllendirdiği için sahte bağışçı üretmeyi de ödüllendirir. 100 birimini 100 cüzdana bölüp kendi projesine bağışlayan bir kişi, örnekteki A'nın sinyalini taklit eder. [[sybil-attack|Sybil saldırısı]] bu yöntemin teorik bir yan etkisi değil, ana açığıdır.

Uygulamada buna karşı kimlik doğrulama, geçmiş zincir davranışına bakan filtreler, kişi başına eşleştirme üst sınırı ve şüpheli bağış kümelerinin sonradan ayıklanması denenir. Hiçbiri sorunu tümden kapatmaz; hepsi maliyeti artırmaya çalışır. Havuzun parasının nereden geldiği ([[treasury|hazine]], [[grant|hibe]] programı ya da bağış) ise ayrı bir yönetişim kararıdır ve formülün dışında kalır.
