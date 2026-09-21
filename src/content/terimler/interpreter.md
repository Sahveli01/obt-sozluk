---
term: "Interpreter"
tr: "Yorumlayıcı"
aliases: ["yorumlayıcı"]
category: programlama
subcategory: "Çalışma zamanı ve bellek"
level: orta
short: "Kaynak kodu ayrı bir çıktı dosyası üretmeden okuyup o anda çalıştıran program."
related: [compiler, runtime, python, javascript, bytecode]
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

Yorumlayıcı, kaynak kodu okuyup o anda çalıştıran programdır. Ortada makineye devredilen ayrı bir dosya yoktur; program çalıştığı sürece yorumlayıcı da aradadır. [[python|Python]], [[javascript|JavaScript]] ve Ruby gibi diller çoğunlukla böyle çalışır.

Bunun en görünür sonucu hataların ne zaman ortaya çıktığıdır: ikiyüzüncü satırdaki bir yazım hatası, program oraya varana kadar kimseyi rahatsız etmez.

## Benzetme

Karaoke gibi. Ekranda sözler satır satır akar, sen de o an okursun; şarkının tamamını önceden okuyup prova etmezsin. Bu yüzden dördüncü kıtadaki tuhaf bir kelimeyi ancak oraya geldiğinde fark edersin — ve o ana kadar her şey gayet yolunda görünür.

## Nasıl çalışır?

Modern yorumlayıcıların çoğu kodu gerçekten satır satır okumaz. Önce hızlıca kendi iç [[bytecode|bytecode]]'una çevirir, sonra o bytecode'u bir döngü içinde adım adım yürütür. Python'ın `__pycache__` klasöründe biriken `.pyc` dosyaları, bu ara çıktının diske yazılmış hâlidir.

Karşılığında ödediğin şey hızdır: her adımda senin kodunun yanında yorumlayıcı da çalıştığı için aynı iş, [[compiler|derlenmiş]] bir programa göre daha yavaş biter. Kazandığın şey esnekliktir. Kodu değiştirip anında çalıştırabilir, tek satır yazıp sonucunu görebilirsin; dillerin etkileşimli kabuğu (REPL) tam olarak budur ve öğrenirken en çok işe yarayan taraf da burasıdır.

## Dikkat

Yorumlayıcıyla çalışmak, dağıttığın şeyin kaynak kodun kendisi olması anlamına gelir. Programı çalıştıran herkes kodu da görebilir; kodu gizlemek istiyorsan yorumlanan bir dil bunu tek başına sağlamaz.

Bir de "yavaş" etiketini olduğu gibi kabul etme: bir web uygulamasının zamanının çoğu ağ ve veritabanı beklemekle geçer, orada yorumlayıcının payı fark edilmez. Fark, uzun süren hesap işlerinde ortaya çıkar.
