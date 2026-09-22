---
term: "Polynomial Commitment"
tr: "Polinom Taahhüdü"
aliases: []
category: kriptografi
subcategory: "Sıfır bilgi (ZK) ve ileri kriptografi"
level: ileri
short: "Uzun bir veri kümesini tek bir kısa değere bağlayan ve sonradan tek bir noktasını kısa bir kanıtla açmayı sağlayan taahhüt türü."
related: [commitment-scheme, kzg-commitment, plonk, zk-snark, merkle-root, zero-knowledge-proof-zkp]
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

Uzun bir sayı listesi bir polinomun katsayıları olarak yazılabilir. Böylece binlerce değer tek bir matematiksel nesneye dönüşür — ve o nesneye toptan bağlanmak mümkün hâle gelir.

Polinom taahhüdü bunu yapan bir [[commitment-scheme|taahhüt şemasıdır]]. Üç işlem sunar: polinomun tamamına kısa bir taahhüt üretmek; seçilen bir noktadaki değerini kısa bir kanıtla açıklamak; ve o açıklamanın taahhütle tutarlı olduğunu doğrulamak. Doğrulayan taraf polinomun tamamını hiç görmez.

## Nasıl çalışır?

Modern ispat sistemlerinin kullandığı numara şudur: devrenin bütün kısıtları, sağlanması gereken bir polinom eşitliğine dönüştürülür. Eşitliğin her noktada geçerli olup olmadığını kontrol etmek pahalıdır, ama gerekmez de.

Rastgele seçilmiş **tek bir** noktada iki farklı polinom aynı değeri veriyorsa, bu neredeyse kesinlikle bunların aynı polinom olduğu anlamına gelir; farklı olsalardı rastgele bir noktada çakışmaları olağanüstü bir tesadüf olurdu. Doğrulayıcı da bunu kullanır: bir nokta söyler, [[prover|ispatlayıcı]] o noktadaki değeri ve açılım kanıtını gönderir, kontrol biter.

Kanıtın kısalığı buradan gelir. Milyonlarca kısıtlık bir devre, birkaç taahhüt ve birkaç nokta açılımına iner.

## Dikkat

[[merkle-root|Merkle kökü]] de uzun veriye tek değerle bağlanır, ama farkı önemlidir: Merkle ile yalnızca **saklanmış** bir öğeyi açabilirsin. Polinom taahhüdünde ise polinomun hiç yazılmamış bir noktasındaki değerini bile açabilirsin ve açılımlar üzerinde cebirsel kontroller yapılabilir. İspat sistemlerinin ihtiyacı tam olarak budur.

Tek bir polinom taahhüdü yoktur, bir ailedir; şemalar arasındaki takas eksenleri bellidir: [[trusted-setup|kurulum]] gerektirip gerektirmediği, kanıtın boyutu, doğrulamanın maliyeti ve kuantum dayanıklılığı. Bir ispat sisteminin karakterini büyük ölçüde hangi taahhüt şemasını seçtiği belirler.
