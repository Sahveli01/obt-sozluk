---
term: "Proof of Stake (PoS)"
tr: "Pay ispatı"
aliases: ["pay ispatı", "hisse ispatı"]
category: konsensus
subcategory: "Mekanizmalar"
level: orta
short: "Blok önerme ve onaylama hakkını, ağın parasından kilitlenen ve kural ihlalinde kesilebilen teminata bağlayan konsensüs mekanizması."
related: [staking, validator, slashing, finality, sybil-resistance, proof-of-work-pow]
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

**Pay ispatı**, blok önerme ve onaylama hakkını ağın kendi parasından kilitlenmiş bir teminata bağlar. Katılmak isteyen [[validator|doğrulayıcı]] belirli bir miktarı [[staking|kilitler]]; protokol sıradaki blok önericisini bu kilitli paylar arasından seçer, geri kalan doğrulayıcılar da önerilen blok hakkındaki görüşlerini imzalar ([[attestation|attestation]]). Türkçede "pay ispatı" ve "hisse ispatı" karşılıklarının ikisi de kullanılır.

## Nasıl çalışır?

**Güvenlik varsayımı.** Kilitli teminatın yeterince büyük bir bölümünün kurallara uyan ellerde olması. Teminat tek bir tarafta toplanırsa o taraf hangi zincirin geçerli sayılacağını belirleyebilir.

**Saldırıyı pahalı kılan şey.** Kilitli sermaye. Çelişen iki bloğu aynı anda imzalamak gibi kanıtlanabilir ihlaller teminatın bir bölümünün kesilmesiyle cezalandırılır ([[slashing|slashing]]). Maliyet saldırının kendisinde doğar: saldırgan elindeki donanımı değil, protokole yatırdığı parayı kaybeder. Güvenlik kilitli sermayeden geldiği için sürekli harcanan fiziksel bir kaynak tasarımın parçası değildir.

**Karşılığında ödenen bedel.** Ceza ancak ağın kimin ne kadar teminat yatırdığını bilmesiyle mümkündür; yani söz hakkı, ağın kendi parasının dağılımına bağlanır. İkincisi, ceza yalnızca hâlâ kilitli duran teminata uygulanabilir: teminatını çoktan çekmiş eski doğrulayıcıların anahtarlarıyla alternatif bir geçmiş kurulabilir ([[long-range-attack|uzun menzilli saldırı]]), bu yüzden ağa yeni katılan bir düğümün güvendiği bir başlangıç noktasına ihtiyacı olur ([[weak-subjectivity|zayıf öznellik]]). Üçüncüsü, doğrulayıcı işletmenin teknik ve sermaye eşiği küçük sahipleri havuzlara ve [[liquid-staking|likit staking]] hizmetlerine yöneltir; bu da oy ağırlığının birkaç operatörde toplanmasına yol açabilir.

## Dikkat

"Pay ispatı kullanıyor" cümlesi bir ağın güvenlik modelini tek başına anlatmaz. Hangi ihlalin cezalandırıldığı, doğrulayıcı sayısının sınırlı olup olmadığı, kesinliğin nasıl ve ne zaman ilan edildiği ağdan ağa değişir; aynı ailedeki iki ağın varsayımları birbirinden epey uzak olabilir.

Teminat yatırmak da tek başına blok üretmek demek değildir. Çoğu ağda önerici sırası rastgele seçilir ([[leader-election|lider seçimi]]) ve doğrulayıcıların asıl işi, sırası gelmediği zamanlarda başkasının önerdiği bloğu imzalayıp ağa görüşünü bildirmektir.
