---
term: "Contract Account"
tr: "Sözleşme hesabı"
aliases: ["sözleşme hesabı", "contract account"]
category: cuzdanlar
subcategory: "Hesap soyutlama"
level: orta
short: "Arkasında özel anahtar değil kod duran hesap: bakiye tutar, kendi deposu vardır, ama yalnızca çağrıldığında çalışır."
related: [externally-owned-account-eoa, smart-contract, contract-address, account-abstraction, smart-contract-wallet]
disambiguation: []
tags: []
status: taslak
reviewedBy: []
dateSensitive: false
sources: []
added: 2026-09-21
updated: 2026-09-21
---

## Nedir?

Sözleşme hesabı, arkasında bir özel anahtar değil bir program duran hesaptır. Adresi vardır, bakiye tutabilir, işlem alabilir; farkı, kendine ait kodu ve kalıcı bir deposu olmasıdır. Bir adrese bakarak karşındakinin insan mı program mı olduğunu adresin biçiminden anlayamazsın; ayrım, o adreste kod olup olmadığıdır. İki hesap türünün ayrıntılı karşılaştırması [[externally-owned-account-eoa|EOA]] sayfasındadır.

## Nasıl çalışır?

Sözleşme hesabı, bir [[smart-contract|akıllı sözleşme]] zincire dağıtıldığında oluşur. Dağıtım işlemi kodu zincire yazar ve hesaba kalıcı bir [[contract-address|sözleşme adresi]] verilir. Bu adres rastgele seçilmez, dağıtımın ayrıntılarından hesaplanır; yani doğru girdilerle işlem gönderilmeden önce bile bilinebilir.

Hesap oluştuktan sonra kodu kendi kendine çalışmaz. Çalışması için birinin o adrese çağrı yapması gerekir: ya bir kullanıcının imzaladığı işlem, ya da başka bir sözleşmenin çağrısı. Çağrı geldiğinde kod hesabın kendi deposu üzerinde çalışır ve kural olarak yalnızca kendi verisini değiştirebilir. Sözleşme başka bir adrese para yolluyorsa bile bu, birinin başlattığı zincirin devamıdır; kendiliğinden başlayan bir hareket değildir.

Bakiyeye dokunma kuralını da hesap kendi kodundan alır. "Bu parayı kim çekebilir?" sorusunun cevabı protokolde değil, sözleşmenin içinde yazar. [[smart-contract-wallet|Akıllı sözleşme cüzdanları]] ve [[account-abstraction|hesap soyutlama]] bu özelliğin üzerine kurulur: cüzdanın sahibi tek bir anahtar değil, bir kural kümesi olur.

## Dikkat

Sözleşme hesabına para göndermek her zaman güvenli değildir. Kod o parayı dışarı çıkarabilecek bir yol içermiyorsa para orada kalıcı olarak kilitlenir; kimsenin "geri gönder" diyebileceği bir merci yoktur.

Bir de hesabın kodu değişmez sanılır. Kodun kendisi değişmez ama sözleşme yükseltilebilir bir kalıpla yazıldıysa davranışı değişebilir; o yüzden asıl soru kodun değil, yükseltme yetkisinin kimde olduğudur.
