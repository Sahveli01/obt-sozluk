---
term: "Transpiler"
tr: ""
aliases: ["source-to-source compiler"]
category: programlama
subcategory: "Çalışma zamanı ve bellek"
level: orta
short: "Kodu bir kaynak dilden, benzer seviyedeki başka bir kaynak dile çeviren araç; TypeScript'ten JavaScript'e çevirmek gibi."
related: [compiler, compilation, typescript, javascript]
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

Transpiler, kodu bir kaynak dilden başka bir kaynak dile çeviren araçtır. Çıktısı yine insanın okuyabileceği koddur; [[compiler|derleyicinin]] aksine bir alt seviyeye inmez, aynı seviyede yana geçer. En bilinen örneği [[typescript|TypeScript]] kodunun [[javascript|JavaScript]]'e çevrilmesidir.

Türkçede "kaynaktan kaynağa derleyici" dendiği oluyor ama yerleşmedi; araç adı olarak İngilizcesi kullanılıyor.

## Nasıl çalışır?

İhtiyaç şuradan doğar: hedef ortam senin yazdığın dili anlamaz, ama ona akraba bir dili anlar. Tarayıcılar yalnızca JavaScript çalıştırır, dolayısıyla TypeScript'in tipleri çeviri sırasında silinir ve geriye çalışabilir JavaScript kalır. Aynı mantık dil sürümleri arasında da geçerlidir: yeni yazım özellikleriyle yazılmış kod, eski tarayıcıların anladığı biçime indirilebilir.

Çevirinin ilk adımları [[compilation|derlemeyle]] birebir aynıdır — kaynak bir ağaca çözülür, ağaç dönüştürülür. Fark son adımdadır: makine komutu değil, hedef dilin metni yeniden yazılır.

## Dikkat

Üretilen kod okunabilir olsa da senin kodun değildir. Hata ayıklarken çıktıya bakmak yanıltır; bu yüzden araçlar çıktıyla kaynağı eşleştiren ayrı bir dosya (source map) üretir ve tarayıcı sana o eşleşme üzerinden kendi yazdığın satırı gösterir.

İkincisi, transpile etmek "anlam birebir korunur" garantisi vermez. Çeviri, hedef dilde doğrudan karşılığı olmayan bir özelliği taklit etmek zorunda kaldığında davranış köşe durumlarda farklılaşabilir. Bu yüzden testler kaynak üzerinde değil, çalışacak olan çıktı üzerinde koşturulur.
