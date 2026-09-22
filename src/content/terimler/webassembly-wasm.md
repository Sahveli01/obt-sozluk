---
term: "WebAssembly (WASM)"
tr: ""
aliases: ["wasm"]
category: programlama
subcategory: "Diller ve formatlar"
level: orta
short: "Farklı dillerden derlenen kodun tarayıcıda ve başka ortamlarda çalışmasını sağlayan ikili biçim — bir dil değil, bir derleme hedefi."
related: [browser, javascript, rust, compilation, runtime]
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

WebAssembly bir programlama dili değildir; bir derleme hedefidir. [[rust|Rust]], [[c-dil|C]], C++ ve başka dillerle yazılmış kod `.wasm` uzantılı ikili bir dosyaya derlenir, o dosyayı da bir WebAssembly çalışma ortamı yürütür. İnsanlar genellikle WebAssembly "yazmaz"; başka bir dilden buraya çıkarlar.

Adındaki "Web" ilk çıkış yerinden gelir: [[browser|tarayıcıda]], [[javascript|JavaScript]]'in yanında, ona göre daha öngörülebilir bir hızda kod çalıştırabilmek. Ama kullanım tarayıcıyla sınırlı kalmadı; sunucu tarafında, eklenti sistemlerinde ve bazı blockchain sanal makinelerinde de WebAssembly modülleri çalıştırılıyor.

## Benzetme

PDF gibi. Bir belgeyi hangi programda hazırladığın okuyan kişiyi ilgilendirmez; ortada herkesin açabildiği ortak bir çıktı biçimi vardır. WebAssembly de kaynak dil ile çalıştıran ortam arasına böyle ortak bir biçim koyar: yazan taraf dilini kendi seçer, çalıştıran taraf tek bir biçimi tanımakla yetinir.

## Nasıl çalışır?

`.wasm` dosyası yığın tabanlı, dar bir komut kümesinden oluşur. Çalışma ortamı modülü yüklerken önce doğrular, sonra makine koduna çevirir. Modül kapalı bir kutu içinde çalışır: dosya sistemine, ağa ya da ekrana doğrudan erişimi yoktur. Yapabildiği tek şey, dışarıdan kendisine verilen fonksiyonları çağırmak ve kendisine ayrılmış bellek bloğu üzerinde çalışmaktır. Bu yalıtım, güvenilmeyen kodu çalıştırmayı mümkün kılan asıl özelliktir.

## Dikkat

"WebAssembly hızlıdır" cümlesi tek başına eksiktir. Kazanç, yoğun hesap yapan işlerde belirgindir; buna karşılık modül [[dom|DOM]]'a doğrudan erişemez, sayfayla ilgili her işi JavaScript tarafıyla konuşarak yapar ve bu köprünün kendi maliyeti vardır. Bir arayüzü olduğu gibi WebAssembly'ye taşımak çoğu zaman hızlandırmaz.

İkinci nokta: WebAssembly modülü derlenmiş olması sayesinde okunamaz hale gelmez. İkili dosya indirilebilir ve incelenebilir, dolayısıyla bir sır saklama yöntemi değildir.
