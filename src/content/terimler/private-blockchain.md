---
term: "Private Blockchain"
tr: "Özel blok zinciri"
aliases: ["ozel blok zinciri", "ozel blockchain"]
category: temeller
subcategory: "Temel kavramlar"
level: orta
short: "Tek bir kurumun kontrol ettiği, katılımın ve çoğu zaman okumanın da izne bağlı olduğu blockchain."
related: [public-blockchain, permissioned-blockchain, consortium-blockchain, decentralization, distributed-ledger-technology-dlt]
disambiguation: []
tags: []
status: taslak
reviewedBy: []
dateSensitive: false
sources: []
added: 2026-09-21
updated: 2026-09-21
---

## Nedir?

Özel blockchain, tek bir kurumun kurduğu ve yönettiği zincirdir. Kimin yazacağına, kimin okuyacağına ve kuralların ne zaman değişeceğine o kurum karar verir. [[permissioned-blockchain|İzinli blockchain]] ailesinin en dar ucudur: izinli bir ağda yetki bir grupta olabilirken burada tek elde toplanmıştır.

## Nasıl çalışır?

Teknik olarak bildiğimiz yapı korunur — bloklar, hash bağları, imzalı işlemler. Fark, güvenlik modelinin nereye dayandığıdır. Açık bir ağda geçmişi değiştirmeyi imkânsız kılan şey, dağıtılmış [[node|node'ların]] birbirini denetlemesidir. Özel bir zincirde bütün node'lar aynı kurumun elindeyse o denetim yoktur; zinciri yeniden yazmak bir yönetim kararına bakar.

Karşılığında ciddi kazançlar gelir: saniyede çok daha yüksek işlem hacmi, anında [[finality|kesinlik]], sıfıra yakın işlem maliyeti ve verilerin dışarı sızmaması.

Kimlik yönetimi de kurumun mevcut sistemlerine bağlanır. Doğrulayıcılar genellikle kurumun kendi sunucularında çalışır ve erişim, şirketin zaten kullandığı yetkilendirme altyapısı üzerinden verilir. Bu, kurulumu kolaylaştırdığı gibi zincirin bağımsızlığının nerede bittiğini de gösterir.

## Dikkat

Buradaki asıl soru teknik değil: "bu iş için gerçekten zincir mi gerekiyor?" Tek bir kurumun kontrolündeki bir sistemde, sıradan bir veritabanına imzalı denetim kaydı eklemek çoğu zaman daha basit, daha hızlı ve daha ucuz olur.

Özel zincirin kendini haklı çıkardığı yer, kurumun kendi içinde bile birbirine tam güvenmeyen birimlerin bulunduğu ya da ileride dışarıdan katılımcı eklenmesi planlanan durumlardır. İkinci durumda zincir bir hedef değil, [[consortium-blockchain|konsorsiyuma]] geçişin ara adımıdır.
