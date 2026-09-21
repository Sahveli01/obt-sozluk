---
term: "Concurrency"
tr: "Eşzamanlılık"
aliases: ["eşzamanlılık"]
category: programlama
subcategory: "Çalışma zamanı ve bellek"
level: orta
short: "Birden çok işi iç içe geçirerek yürütebilme becerisi; işlerin gerçekten aynı anda yapılması şart değildir."
related: [parallelism, thread, async-await, event-loop, runtime]
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

Eşzamanlılık, bir programın birden çok işi iç içe geçirerek yürütebilmesidir. Bir işi başlatırsın, o beklerken ikinciye geçersin, birinciden haber gelince ona dönersin.

İşlerin gerçekten aynı anda yapılıp yapılmadığı ayrı bir sorudur ve cevabı [[parallelism|paralellik]] maddesindedir. Bu ayrım küçük bir ayrıntı değil, konunun en çok karıştırılan yeridir: eşzamanlılık bir program tasarımı meselesidir, paralellik bir donanım imkânı. Tek çekirdekli bir makinede eşzamanlı program yazabilirsin; paralel çalıştıramazsın.

## Benzetme

Simultane satranç gösterisi gibi. Usta yirmi tahtanın arasında dolaşır, her masada bir hamle yapıp yanındakine geçer. Dışarıdan bakan yirmi maçın aynı anda oynandığını sanır; oysa usta her an tek bir tahtanın başındadır. Yirmi maçın gerçekten aynı anda oynanması için yirmi usta gerekir — işte o paralelliktir.

## Nasıl çalışır?

Eşzamanlılığın anahtarı bekleme sürelerini değerlendirmektir. Bir program zamanının çoğunu hesap yaparak değil beklemekle geçirir: ağdan cevap, diskten dosya, kullanıcıdan tuş. Eşzamanlı bir tasarımda bu beklemeler boşa gitmez, başka bir işe ayrılır.

İki yaygın yolu var. Birincisi [[thread|iş parçacıkları]]: işletim sistemi işleri sırayla çalıştırır, birini istediği anda durdurup ötekine geçer. İkincisi tek hat üzerinde işbirlikli geçiştir: iş, beklemeye girdiği noktayı kendisi bildirir ([[async-await|await]]) ve sıradakine yol verir; [[event-loop|olay döngüsü]] bu düzeni yürütür.

Bedeli paylaşılan veridir. İki iş aynı veriye iç içe geçmiş biçimde dokunuyorsa, sonucun hangi sırayla çalıştıklarına bağlı olması ihtimali doğar — ve o sıra her çalıştırmada değişebilir. Eşzamanlı programlamanın asıl zorluğu işleri başlatmak değil, bu sırayı kontrol altında tutmaktır.

## Dikkat

Türkçe karşılık burada biraz yanıltıcıdır: "eşzamanlı" kelimesi "aynı anda" çağrıştırır, oysa kastedilen "iç içe"dir. Terimi duyduğunda aklında tutman gereken görüntü, aynı anda ilerleyen iki hat değil, sırayla ama kesintili ilerleyen tek bir hattır.
