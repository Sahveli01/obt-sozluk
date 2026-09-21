---
term: "Token (AI)"
tr: ""
aliases: []
category: yapay-zeka
subcategory: "Büyük dil modelleri"
level: baslangic
short: "Metnin modele verilmeden önce bölündüğü parça; modelin işlediği, saydığı ve ücretlendirdiği en küçük birim."
related: [tokenizer, context-window, large-language-model-llm, max-tokens, token-pricing]
disambiguation: [token-blockchain]
tags: []
status: taslak
reviewedBy: []
dateSensitive: false
sources: []
added: 2026-09-21
updated: 2026-09-22
---

## Nedir?

Yapay zekâ bağlamında token, metnin modele verilmeden önce bölündüğü küçük parçadır. Model kelimelerle değil bu parçalarla çalışır: girdiyi token'lara ayırır, çıktıyı da token token üretir. Bir token bazen tam bir kelimedir, bazen kelimenin bir parçası, bazen yalnızca bir noktalama işareti. Sayılan, sınırlanan ve ücretlendirilen birim de budur. Türkçede "parça" ya da "birim" demek anlamı bulanıklaştıracağı için terim İngilizce kullanılır.

## Benzetme

Derste hızlı not tutan birini düşün. Sık geçen sözleri tek bir kısaltmayla yazar, ilk kez duyduğu bir özel ismi ise harf harf. Defterdeki işaret sayısı kelime sayısına eşit değildir; neyin tanıdık, neyin yabancı olduğuna göre değişir. Token da böyledir: tanıdık şeyler az yer kaplar, yabancı şeyler çok.

## Dikkat

Token sayısı kelime sayısı değildir ve sabit bir oranı da yoktur; aynı metin farklı [[tokenizer]]'larda farklı sayıda parçaya bölünür. Modelin bir seferde alabileceği token miktarı da sınırlıdır; bu sınır [[context-window|bağlam penceresi]] olarak geçer.

Aynı kelime blockchain dünyasında bambaşka bir şeyi anlatır: oradaki [[token-blockchain|token]] bir varlıktır, sahibi ve değeri vardır; buradaki token ise metnin bir parçasıdır ve tek başına hiçbir şey ifade etmez.
