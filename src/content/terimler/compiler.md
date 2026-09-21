---
term: "Compiler"
tr: "Derleyici"
aliases: ["derleyici"]
category: programlama
subcategory: "Çalışma zamanı ve bellek"
level: orta
short: "Kaynak kodun tamamını okuyup, çalıştırılmadan önce makinenin ya da bir sanal makinenin anlayacağı biçime çeviren araç."
related: [compilation, interpreter, transpiler, type-checker, bytecode]
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

Derleyici, yazdığın kaynak kodu baştan sona okuyup başka bir biçime çeviren programdır: çoğunlukla işlemcinin doğrudan çalıştırabildiği makine koduna, bazen de bir sanal makinenin okuduğu [[bytecode|bytecode]]'a. İşin sonunda elinde ayrı bir dosya olur ve o dosya çalışırken derleyiciye ihtiyaç duymaz.

Derleyicinin ikinci işi çeviriden önce gelir: kodu anlamlandırırken kuralları da denetler. Tanımsız değişken, uymayan tip, kapanmamış parantez — bunları program hiç çalışmadan söyler. Bu yüzden derleyici bir çeviri aracı olduğu kadar kodu ilk gözden geçirendir.

## Benzetme

Bir dersi önceden kaydedip yayınlamak gibi. Kaydı alırken konuşmacı baştan sona gözden geçirir, yanlış anlattığı yeri tekrar çeker; sonunda ortaya tek bir dosya çıkar. O dosya izlenirken konuşmacının odada olmasına gerek yoktur — hazırlık bitmiştir, geriye yalnızca oynatmak kalmıştır.

## Nasıl çalışır?

Derleyiciyi iki yarım gibi düşünebilirsin. Ön yüz kaynak dili anlar: metni parçalara ayırır, dilin kurallarına uyup uymadığına bakar, anlamı dilden bağımsız bir ara temsile çıkarır. Arka yüz o ara temsili belirli bir hedefe yazar — x86 işlemci, ARM işlemci, WebAssembly, EVM bytecode. Aynı ön yüzün arkasına farklı arka yüzler takılabildiği için tek bir dil pek çok donanımda çalışabilir.

Bu ayrım aldığın hata mesajlarını da açıklar: "tip uyuşmuyor" ön yüzden gelir, "bu hedefte böyle bir komut yok" arka yüzden.

## Dikkat

Birbirine yakın duran dört terim şöyle ayrılır: derleyici araçtır, [[compilation|derleme]] onun yaptığı iştir, [[interpreter|yorumlayıcı]] aynı kodu ayrı bir çıktı üretmeden çalıştıran alternatiftir, [[transpiler|transpiler]] ise çeviriyi bir alt seviyeye değil, aynı seviyedeki başka bir kaynak dile yapar.

Sınır hiçbir zaman keskin değildir: pek çok dil önce derlenip sonra yorumlanır, pek çok yorumlayıcı da çalışırken sık kullanılan parçaları derler. "Şu dil derlenen dildir" cümlesi çoğu zaman dilin değil, o dil için yazılmış aracın özelliğini anlatır.
