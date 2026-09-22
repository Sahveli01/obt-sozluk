---
term: "Gas Griefing"
tr: ""
aliases: []
category: guvenlik
subcategory: "Sözleşme açıkları"
level: ileri
short: "İşlemi gönderen tarafın, içteki bir çağrıya yetmeyecek kadar gas bırakarak işin yarım kalmasına yol açması."
related: [griefing, gas, gas-limit, unchecked-external-call, relayer, call-low-level]
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

Gas griefing, [[griefing|griefing]]'in [[gas]] üzerinden yapılan hâlidir: saldırgan kendine bir kazanç sağlamaz, yalnızca bir işlemin **eksik** çalışmasına yol açar.

Kurgu, işlemi kullanıcı adına zincire ileten bir aracı olduğunda ortaya çıkar ([[relayer|relayer]]). Aracı, kullanıcının imzaladığı mesajı iletmek zorundadır ama işlemi kaç gas ile göndereceğine kendisi karar verir. İçteki çağrının tamamlanmasına yetmeyecek kadar gas bırakırsa dış çağrı düzgün biter, içteki çağrı gas yetersizliğinden geri alınır ve sonucu kimse kontrol etmiyorsa sistem işi yapılmış sayar.

Kullanıcı açısından sonuç garip bir durumdur: işlem zincire yazılmıştır, ücret ödenmiştir, imzası harcanmıştır — ama istediği şey olmamıştır.

## Nasıl çalışır?

EVM'de bir sözleşme başka bir sözleşmeyi çağırırken elindeki gas'in tamamını iletmez; küçük bir payı kendine ayırır. Bu kural, içteki çağrı gas yetersizliğinden geri alınsa bile dıştaki çağrının çalışmaya devam edecek kadar gas'i kalmasını sağlar. Faydalı bir kuraldır ama bir yan etkisi vardır: **içerideki başarısızlık dışarıyı otomatik olarak durdurmaz.**

Savunma katmanlıdır:

İçteki çağrının dönüş değerini kontrol et ve başarısızlıkta işlemi geri al ([[unchecked-external-call|kontrol edilmeyen dış çağrı]]). Bu tek başına saldırıların çoğunu anlamsız kılar, çünkü saldırgan artık hiçbir şey elde etmez.

Gönderenin gas seçimine güvenme. İşi yapmadan önce elde yeterli gas olduğunu `gasleft()` ile kontrol et ve yetmiyorsa baştan geri al.

Gas'e bağlı davranış kurma. "Yeterli gas varsa şunu da yap" biçimindeki mantık, sonucu gönderenin eline bırakır.

Aracı modellerinde aracının kötü niyetli olabileceğini varsay; aracıya güven gerektirmeyen bir tasarım her zaman daha sağlamdır.

## Dikkat

Gas griefing ile [[denial-of-service-dos|hizmet reddini]] karıştırma. Hizmet reddinde amaç sistemi bütünüyle çalışamaz hâle getirmektir; gas griefing'de amaç tek bir işlemi sakatlamaktır ve sistem çalışmaya devam eder.

Zincire ve zamana göre değişen [[gas-limit|gas sınırı]] varsayımları üzerine sabit sayılar yazma. "Bu çağrı şu kadar gas ile biter" biçiminde koda gömülmüş rakamlar, bir ağ yükseltmesiyle işlem maliyetleri değiştiğinde sessizce yanlışa döner ([[call-low-level|düşük seviyeli çağrılarda]] bu özellikle sık görülür).
