---
term: "Staking Pool"
tr: "Stake havuzu"
aliases: []
category: konsensus
subcategory: "Staking ve validator'lar"
level: orta
short: "Tek başına asgari eşiği karşılayamayan katılımcıların stake'lerini birleştirip tek bir işletmeci üzerinden değerlendirdiği yapı."
related: [staking, validator, delegator, liquid-staking, solo-staking, slashing]
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

Staking pool, küçük miktarları bir araya getirip tek bir doğrulayıcı kümesi olarak işletmeye yarayan yapıdır. Ağın istediği asgari miktarı tek başına karşılayamayan ya da düğüm işletmek istemeyen kişiler payını havuza koyar; havuzu işleten taraf [[validator|doğrulayıcıları]] çalıştırır ve kazanılan ödülleri bir ücret keserek paylaştırır.

## Benzetme

Dolmuş gibi. Şehrin öbür ucuna tek başına taksi tutmak çoğu kişi için anlamsızdır; aynı yöne giden birkaç kişi aynı araca binince maliyet paylaşılır. Ama aracı süren sen değilsindir, rotayı da sen seçmezsin — payını verir ve yolculuğun sonucuna ortak olursun.

## Nasıl çalışır?

Katkılar toplanır, ağın istediği büyüklükteki doğrulayıcılara bölünür ve işletmeci bunları çalıştırır. Ödüller paylara göre dağıtılır; cezalar da öyle. Bir doğrulayıcı [[slashing|kesinti]] yerse zarar yalnızca o doğrulayıcının değil, havuzdaki herkesin payından çıkar.

Havuzlar anahtarları kimin tuttuğuna göre ayrışır. Bir kısmında yalnızca imza anahtarı havuzdadır, varlığı çekme yetkisi katılımcıda kalır. Bir kısmında ise iki anahtar da havuzdadır; orada havuz fiilen bir saklama hizmetine dönüşür ve soru "ödül ne kadar" olmaktan çıkıp "bu varlığı kim geri verebiliyor" hâline gelir. Payını devredilebilir bir token olarak alıyorsan konu [[liquid-staking|liquid staking]] başlığına geçer.

## Dikkat

Havuza girmek tek bir işlem kadar kolaydır ve tam da bu yüzden stake az sayıda büyük havuzda birikme eğilimindedir. Bu bir suçlama değil, yapısal bir gözlemdir: bir ağdaki kilitli varlığın büyük bölümü birkaç işletmecinin elinde toplandığında, o işletmecilerin yazılım tercihleri, sunucularını nerede tuttukları ve kesinti anındaki davranışları ağın tamamını ilgilendiren konular hâline gelir. [[solo-staking|Solo staking]] bu yoğunlaşmanın tersi yönde çalışır; karşılığında işletme yükünü sana bırakır.
