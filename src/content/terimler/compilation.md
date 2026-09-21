---
term: "Compilation"
tr: "Derleme"
aliases: ["derleme"]
category: programlama
subcategory: "Çalışma zamanı ve bellek"
level: orta
short: "Kaynak kodu makinenin ya da bir sanal makinenin çalıştırabileceği biçime dönüştürme işleminin kendisi."
related: [compiler, build, bytecode, solidity-compiler-solc, runtime]
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

Derleme, kaynak kodu makinenin çalıştırabileceği biçime dönüştürme işlemidir. [[compiler|Derleyici]] bu işi yapan araçtır; derleme o aracın yaptığı iştir.

[[build|Build]] ile karıştırılır ama aynı şey değildir: build, derlemeyi de içine alan bütün paketleme sürecidir — bağımlılıkları kurar, dosyaları birleştirir, çıktıyı yayınlanacak hâle getirir. Derleme bu zincirin yalnızca bir halkasıdır ve Türkçe "derleme" karşılığı bu dar anlama verilmiştir.

## Nasıl çalışır?

Derleme tek hamlede olmaz, birbirini besleyen adımlardan geçer. Önce metin en küçük anlamlı parçalarına ayrılır ve dilin dilbilgisine göre bir ağaç kurulur. Sonra anlam denetlenir: değişken tanımlı mı, çağrılan fonksiyon var mı, tipler uyuyor mu. Ardından kod dilden bağımsız bir ara temsile çevrilir; gereksiz hesaplar çoğunlukla burada ayıklanır. En sonunda hedefe uygun komutlar yazılır.

Bir adım başarısız olursa iş orada durur ve çıktı hiç üretilmez. Derleme ya tamamen biter ya da hiç bitmez; yarım bir çıktı diye bir şey yoktur.

## Örnek

Blockchain tarafında en çok karşılaşılan derleme, Solidity kodunun [[bytecode|bytecode]]'a çevrilmesidir. [[solidity-compiler-solc|`solc`]] kaynak dosyayı alır ve iki şey üretir: zincire gönderilecek bytecode ve sözleşmeyle konuşabilmek için gereken [[application-binary-interface-abi|ABI]] tanımı. Zincire yüklenen şey senin yazdığın Solidity metni değil, o bytecode'dur.

## Dikkat

Çeviri tek yönlüdür. Bytecode'dan kaynak koda tam olarak geri dönülemez; zincirdeki bir sözleşmenin kodunu okuyabilmek için kaynağın ayrıca yayımlanması ve çıktıyla eşleştiğinin gösterilmesi gerekir ([[contract-verification|sözleşme doğrulama]]).

Bir de derleme hatasıyla çalışma zamanı hatasını ayır: ilki kod hiç çalışmadan, ikincisi çalışırken ortaya çıkar. Bu ayrım [[runtime|çalışma zamanı]] maddesinin konusudur.
