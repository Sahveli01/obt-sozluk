---
term: "Documentation"
tr: "Belgelendirme"
aliases: ["belgelendirme", "dokümantasyon", "docs"]
category: programlama
subcategory: "Kod organizasyonu"
level: baslangic
short: "Bir yazılımın ne yaptığını ve nasıl kullanılacağını anlatan, kodun yanında yürüyen yazılı kaynak."
related: [readme, natspec, api, comment-kod, snippet]
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

Belgelendirme, bir yazılımın ne yaptığını ve nasıl kullanılacağını anlatan yazılı kaynaktır. Çoğu projede üç ayrı iş yapar: yeni gelene ilk on dakikayı geçirten başlangıç rehberi, her fonksiyonun ne aldığını ve ne döndürdüğünü yazan başvuru metni, bir de "şunu nasıl yaparım" diye arayan birinin bulmak istediği örnekler.

En küçük hâli deponun [[readme|README]] dosyasıdır. Kodun içindeki [[comment-kod|yorumlar]] da belgelendirmenin parçasıdır; bazı ortamlarda yorumlar doğrudan belgeye dönüşür (Solidity'de [[natspec]]).

## Benzetme

Levhası olmayan çok katlı bir devlet dairesi gibi. Odalar yerli yerindedir, yapılacak işlem de aslında basittir; ama hangi kata çıkılacağını yazan bir tabela yoksa herkes kapıdaki görevliye sormak zorunda kalır ve o görevli aynı cevabı günde kırk kez verir.

## Dikkat

Belgenin en tehlikeli hâli eskimiş olanıdır: yanlış belge, hiç belge olmamasından kötüdür, çünkü okuyan ona güvenir. Bu yüzden belge kodla aynı depoda tutulur ve değişiklikle birlikte güncellenir.

"Kod kendini anlatır" cümlesine de dikkat. Kod ne yaptığını anlatır, neden öyle yapıldığını anlatmaz. Belgenin asıl değeri genelde o "neden"dedir.
