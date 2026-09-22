---
term: "Finality"
tr: "Kesinlik"
aliases: ["kesinlik"]
category: konsensus
subcategory: "Kesinlik ve güvenlik özellikleri"
level: orta
short: "Bir işlemin geri alınamaz hâle geldiği nokta; o noktadan sonra işlem zincirden düşmez."
related: [confirmation, probabilistic-finality, deterministic-finality, economic-finality, chain-reorganization-reorg]
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

Bir işlem bloğa girdiği anda iş bitmiş olmaz. O blok, ağın bir kısmının gördüğü ama sonradan vazgeçebileceği bir dalda duruyor olabilir. **Finality**, bir işlemin bu belirsizlik bölgesinden çıkıp artık geri alınamaz sayıldığı noktadır.

Kesinlik bir düğme değil bir eşiktir. Eşiğin nerede olduğuna ve arkasında ne tür bir güvence durduğuna ağın [[consensus-mechanism|konsensüs mekanizması]] karar verir.

## Benzetme

Bir yarışmanın sonuç listesi gibi. Liste asıldığında sıralama bellidir ama iş bitmemiştir: itiraz için bir süre tanınır ve o süre içinde bir isim yukarı çıkabilir, bir isim listeden düşebilir. Süre dolduğunda aynı liste kesinleşmiş sayılır. İçeriği değişmemiştir; değişen tek şey, artık tartışmaya açık olmamasıdır.

## Nasıl çalışır?

Kesinlik üç ayrı temelden gelebilir.

**Birikme.** Bir bloğun üstüne blok eklendikçe onu geride bırakmanın maliyeti büyür. Geri alınma ihtimali küçülür ama matematiksel olarak sıfıra inmez — [[probabilistic-finality|olasılıksal kesinlik]].

**Oylama.** Doğrulayıcılar blok hakkında oy verir; nitelikli çoğunluk toplandığında protokol o bloğu kesin ilan eder ve kural gereği bir daha geri almaz — [[deterministic-finality|deterministik kesinlik]].

**Ceza.** Geri almak teknik olarak mümkündür ama bunu yapanın kilitli sermayesi kesilir; kesinliğin arkasında sayılabilir bir maliyet durur — [[economic-finality|ekonomik kesinlik]].

Kesinleşmemiş bir işlem, düğümlerin daha ağır bir zinciri benimsemesiyle zincirden düşebilir ([[chain-reorganization-reorg|reorg]]).

## Dikkat

Cüzdanında "başarılı" yazması kesinleşti demek değildir; o satır yalnızca işlemin bir bloğa girdiğini söyler. Kullanıcı tarafındaki ölçü [[confirmation|onay]] sayısı ya da ağın ilan ettiği kesinleşme anıdır, uygulamadaki yeşil tik değil.

Kesinlik protokolün verdiği bir sözdür, fizik yasası değil. Söz, ağın dayandığı varsayımlar tuttuğu sürece geçerlidir: saldırgan belirli bir eşiğin altında kalıyorsa ve istemci yazılımında ciddi bir hata yoksa. Tasarımın amacı geri almayı imkânsız kılmak değil, akıl dışı derecede pahalı kılmaktır.
