---
term: "Contract Deployment"
tr: "Sözleşme dağıtımı"
aliases: []
category: akilli-sozlesmeler
subcategory: "Dağıtım ve arayüz"
level: orta
short: "Bir sözleşmenin derlenmiş kodunu zincire kalıcı olarak yazan ve ona bir adres kazandıran özel işlem."
related: [smart-contract, bytecode, constructor, contract-address, contract-verification, factory-pattern]
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

Dağıtım, yazdığın [[smart-contract|akıllı sözleşmenin]] derlenmiş kodunu zincire yazan işlemdir. Bu işlemden önce sözleşme yalnızca senin bilgisayarındaki bir dosyadır; sonra ağdaki her düğümün kopyaladığı, kendi adresi olan bir şeye dönüşür.

## Nasıl çalışır?

Dağıtım, alıcısı boş bir işlemdir. Sıradan bir işlemde alıcı alanında bir adres bulunur; dağıtım işleminde o alan boştur ve verinin kendisi sözleşmenin **oluşturma kodudur** — derlenmiş [[bytecode|bytecode]]'un, [[constructor|constructor]]'ı ve constructor argümanlarını da içeren hâli.

EVM bu oluşturma kodunu çalıştırır. Kod, geriye bir bayt dizisi döndürür; zincire yerleşen ve bundan sonra her çağrıda çalışacak olan **runtime kodu** işte budur. Aynı anda [[contract-address|sözleşme adresi]] hesaplanır ve kod o adrese yazılır.

Fatura kabarıktır. Kod zincirde kalıcı yer kapladığı için dağıtım, sıradan bir transferden kat kat çok [[gas|gas]] yakar ve maliyet büyük ölçüde kodun uzunluğuna bağlıdır.

Dağıtımı bir insan yapmak zorunda da değildir: bir sözleşme de başka bir sözleşme dağıtabilir. [[factory-pattern|Fabrika kalıbı]] tam olarak bunu yapar.

## Dikkat

Zincire yazılan kod bir daha değişmez. "Hatayı düzeltip tekrar yüklemek" diye bir şey yoktur; yeni bir dağıtım yaparsın, yeni bir adres doğar, eski adres eski koduyla yerinde durmaya devam eder. Kullanıcıları ve entegre olmuş diğer sözleşmeleri yeni adrese taşımak başlı başına bir iştir — sonradan güncelleyebilmek isteyenlerin [[proxy-contract|proxy]] kurmasının sebebi budur.

İkincisi: her ağ ayrı bir dünyadır. [[testnet|Testnet]]'te dağıttığın sözleşme ana ağda yoktur, orada da ayrıca dağıtman gerekir. Aynı kodun her ağda aynı adrese düşeceğini de varsayma.
