---
term: "Utility Token"
tr: ""
aliases: []
category: tokenlar
subcategory: "Token türleri"
level: orta
short: "Bir ürüne, hizmete ya da ağa erişim sağlamak için çıkarılan token; vaadi getiri değil, sistemin içinde bir işe yaramaktır."
related: [governance-token, security-token, token-gating, tokenomics, erc-20, token-blockchain]
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

Utility token, bir ürünü ya da ağı kullanabilmek için tasarlanmış token'dır. İddiası şudur: bu token bir pay senedi değil, bir araçtır — ücret ödemek, depolama satın almak, bir hizmeti çağırmak ya da bir kapıdan geçmek için kullanılır.

"Utility" burada "işe yarama, kullanım" anlamındadır; Türkçede yerleşik bir karşılığı olmadığı için terim İngilizcesiyle geçer.

## Benzetme

Spor salonu üyeliği gibi. Aidatını ödersin, kapıdan girersin, aletleri kullanırsın. Üyelik sana salonu kullanma hakkı verir; salonun kaçta açılacağına, hangi aletin alınacağına ya da şubenin taşınıp taşınmayacağına karar hakkı vermez. O kararlar salonun sahibine aittir.

## Nasıl çalışır?

Teknik olarak "utility token" diye ayrı bir standart yoktur; bunların çoğu sıradan bir [[erc-20]] token'ıdır. Kelime token'ın kodunda değil, onu çıkaran ekibin tasarımında yaşar: protokol belirli işlemler için o token'ın ödenmesini ya da tutulmasını şart koşar.

En yalın hâli [[token-gating|token kapısıdır]] — sözleşme bir işlemi yapmadan önce adresin yeterli token tuttuğuna bakar. Daha yaygın olanı ücret modelidir: ağı kullanan, kullandığı kadar token harcar. Talebin kaynağı da budur; kullanmak isteyen almak zorundadır.

## Dikkat

Utility token ile [[governance-token]] sık karıştırılır. Ayrım basittir: biri ürüne erişim verir, diğeri kararlara katılma hakkı. Ama pratikte projelerin çoğu ikisini birden iddia eder ve aynı token hem ücret öder hem oy kullanır; bu yüzden etiketin kendisi pek ayırt edici değildir.

Ayrıca bir token'a "utility" demek onu hukuki olarak bir yere koymaz. Bir token'ın [[security-token|menkul kıymet]] sayılıp sayılmadığına düzenleyici bakar, ekibin seçtiği isme değil.
