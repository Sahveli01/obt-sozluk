---
term: "zk-STARK"
tr: ""
aliases: ["stark"]
category: kriptografi
subcategory: "Sıfır bilgi (ZK) ve ileri kriptografi"
level: ileri
short: "Güvenilir kurulum gerektirmeyen ve güvenliğini yalnızca hash fonksiyonlarına dayandıran sıfır bilgi ispatı ailesi."
related: [zk-snark, zero-knowledge-proof-zkp, trusted-setup, hash-function, post-quantum-cryptography, cairo]
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

zk-STARK da [[zk-snark|SNARK'lar]] gibi, büyük bir hesabın doğru yapıldığını küçük bir kanıtla gösteren bir ispat ailesidir. Ayırt edici iki harfi **S** ve **T**'dir:

- **Scalable (ölçeklenebilir):** doğrulama maliyeti, kanıtlanan hesap büyüdükçe çok daha yavaş büyür. Milyon adımlık bir hesabı doğrulamak, iki milyon adımlığı doğrulamaktan çok az farklıdır.
- **Transparent (şeffaf):** kurulumda gizli hiçbir değer üretilmez. Kullanılan parametreler herkesin gözü önünde, açık rastgelelikten türetilir.

Terim çevrilmeden kullanılır.

## Nasıl çalışır?

STARK'ın güvenliği tek bir yapı taşına dayanır: [[hash-function|hash fonksiyonlarının]] çakışma direncine. Eliptik eğri, eşleştirme ya da başka bir sayı teorisi varsayımı kullanılmaz.

Bunun iki sonucu vardır. Birincisi, yok edilmesi gereken bir gizli değer olmadığı için [[trusted-setup|güvenilir kuruluma]] ihtiyaç kalmaz — sistemin doğruluğuna inanmak için bir törene katılanların dürüstlüğüne güvenmek gerekmez. İkincisi, hash fonksiyonları kuantum saldırılarından eliptik eğrilere göre daha az etkilendiği için STARK'lar [[post-quantum-cryptography|kuantum sonrası]] açıdan daha dayanıklı kabul edilir.

Karşılığında ödenen bedel kanıt boyutudur: STARK kanıtları eşleştirme tabanlı SNARK kanıtlarından belirgin biçimde büyüktür, bu da onları zincir üstünde yayımlamayı ve doğrulamayı pahalılaştırır.

## Dikkat

"STARK daha iyi, SNARK daha kötü" gibi bir sıralama yoktur; seçim bir takastır. Kurulum varsayımını hiç istemiyorsan ve kanıtın büyüklüğünü kaldırabiliyorsan STARK; kanıtı olabildiğince küçük tutman gerekiyorsa ve bir kurulum törenine razıysan SNARK mantıklı olur.

Adındaki "zk" burada da otomatik bir gizlilik vaadi değildir; [[cairo|Cairo]] gibi araçlarla kurulan sistemlerin çoğu bu ispatları hesabı sıkıştırmak için kullanır.
