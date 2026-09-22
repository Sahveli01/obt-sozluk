---
term: "PLONK"
tr: ""
aliases: []
category: kriptografi
subcategory: "Sıfır bilgi (ZK) ve ileri kriptografi"
level: ileri
short: "Tek bir evrensel ve güncellenebilir kurulumla birçok farklı devreye hizmet edebilen zk-SNARK sistemi."
related: [zk-snark, trusted-setup, groth16, polynomial-commitment, kzg-commitment, circuit-zk]
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

PLONK, [[zk-snark|SNARK]] ailesinden bir ispat sistemidir. [[groth16|Groth16]] ile arasındaki asıl ayrım kurulum tarafındadır.

Groth16 her [[circuit-zk|devre]] için ayrı bir kurulum ister. PLONK ise **evrensel** bir kurulum kullanır: belli bir büyüklük sınırına kadar olan her devre aynı parametre takımıyla çalışabilir. Bir kez tören yaparsın, sonra devreni istediğin kadar değiştirirsin.

İkinci özelliği kurulumun **güncellenebilir** olmasıdır. Törene sonradan yeni katılımcılar eklenebilir ve her yeni katılımcı güvenceyi tazeler; katılanlardan biri bile dürüst davrandıysa parametreler sağlam kalır.

Adı bir kısaltmadır ve çevrilmez.

## Nasıl çalışır?

PLONK, devrenin kısıtlarını tek tip bir denklem biçiminde ifade eder ve bu denklemleri polinomlara gömer. Kanıtın kendisi, bu polinomlara dair birkaç [[polynomial-commitment|polinom taahhüdü]] ve bunların belirli noktalardaki açılımlarından oluşur.

Kurulumun evrensel olabilmesi de buradan gelir: kurulum belirli bir devreyi değil, yalnızca belirli bir dereceye kadar olan **her** polinomla çalışabilecek bir parametre takımını sabitler. İlk tasarımda bu taahhüt şeması [[kzg-commitment|KZG]] idi.

## Dikkat

"Evrensel kurulum", "kurulum yok" demek değildir. PLONK hâlâ bir [[trusted-setup|güvenilir kuruluma]] dayanır; kazanılan şey, o kurulumu her devre için tekrarlama zorunluluğunun ortadan kalkmasıdır. Kurulum varsayımını tamamen istemiyorsan bakman gereken yer farklıdır.

İkincisi, pratikte "PLONK" dendiğinde çoğu zaman özgün makaledeki yapı değil, ondan türemiş bir varyant kastedilir. Bir sistemin PLONK tabanlı olduğunu duyduğunda, hangi varyantı ve hangi taahhüt şemasını kullandığı ayrı bir sorudur.
