---
term: "Token Unlock"
tr: "Kilit açılışı"
aliases: []
category: tokenlar
subcategory: "Tokenomi"
level: orta
short: "Takvimdeki bir tarihin gelmesiyle o güne kadar kilitli duran token'ların transfer edilebilir hâle gelmesi."
related: [vesting, cliff, circulating-supply, allocation, mint]
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

Token unlock, daha önce kilitlenmiş token'ların transfer edilebilir hâle geldiği andır. Kilit bir [[vesting]] sözleşmesinden, bir staking kilidinden ya da satış koşullarından geliyor olabilir; ortak nokta, belirlenmiş tarihin gelmesidir.

## Nasıl çalışır?

Kilit bir sözleşmede duruyorsa iş basittir: sözleşme her çağrıda zincirdeki zamana bakar ve tarih geçmişse hak edilen miktarı serbest bırakır. Serbest bırakma çoğu zaman kendiliğinden olmaz — hak sahibinin bir talep işlemi göndermesi gerekir. Bu yüzden "kilit açıldı" ile "token cüzdanlara geçti" arasında günler, bazen aylar olabilir.

Açılış tarihleri sürpriz değildir. Takvim baştan duyurulduğu ve sözleşme zincirde okunabildiği için hangi gün ne kadar token'ın açılacağı önceden hesaplanabilir; bunu derleyip yayımlayan siteler vardır. Takvimdeki ilk eşiğe [[cliff]] denir.

## Dikkat

Unlock ile [[mint|basımı]] karıştırma. Unlock var olan bir token'ın kilidini açar: [[total-supply|toplam arz]] değişmez, yalnızca [[circulating-supply|dolaşımdaki arz]] büyür. Basım ise yeni token yaratır ve toplam arzı da artırır. Bu ayrım, aynı gün açıklanan iki haberi doğru okumanı sağlar.

İkinci nokta: açılmak satılmak değildir. Kilidi açılan token cüzdanda bekleyebilir, tekrar stake edilebilir ya da hiç dokunulmayabilir. Açılış yalnızca hareket etme imkânının doğduğunu söyler; ne olacağını söylemez.
