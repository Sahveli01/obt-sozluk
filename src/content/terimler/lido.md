---
term: "Lido"
tr: ""
aliases: ["lido finance"]
category: aglar
subcategory: ""
level: orta
short: "Kilitli stake pozisyonunu temsil eden devredilebilir bir jeton veren, düğüm işletme işini seçilmiş operatörlere bırakan likit staking protokolü."
related: [liquid-staking, liquid-staking-token-lst, staking, validator, slashing, decentralized-autonomous-organization-dao]
disambiguation: []
tags: []
status: taslak
reviewedBy: []
dateSensitive: true
sources: []
added: 2026-09-21
updated: 2026-09-22
---

## Nedir?

Lido bir [[liquid-staking|likit staking]] protokolüdür. Doğrudan [[staking|stake]] etmek, varlığını kilitlemek ve bir düğümü kesintisiz çalıştırmak demektir. Lido'da ise varlığını protokole yatırırsın, işletmeyi başkaları yapar ve elindeki kilitli payı temsil eden devredilebilir bir jeton alırsın; bu jeton başka protokollerde kullanılabilir.

## Nasıl çalışır?

Yatırılan varlıklar bir havuzda toplanır ve protokolün kabul ettiği düğüm operatörlerine dağıtılır; [[validator|doğrulayıcıları]] fiilen bu operatörler çalıştırır. Karşılığında verilen [[liquid-staking-token-lst|likit staking jetonu]] havuzdaki payını temsil eder ve stake ödülleri havuza aktıkça bu pay, temsil ettiği miktar bakımından büyür.

Operatör kümesinin kimlerden oluşacağı, protokol parametreleri ve kesinti durumunda ne yapılacağı bir [[decentralized-autonomous-organization-dao|DAO]] tarafından belirlenir. Yani "doğrulayıcıyı kim işletiyor" sorusunun cevabı açık uçlu değil, yönetişimin seçtiği bir listedir.

## Dikkat

Üç ayrı risk vardır. Birincisi kesinti: operatör hatalı davranırsa doğrulayıcının teminatı [[slashing|kesilebilir]] ve zarar havuza yansır. İkincisi sözleşme riski: varlığın, kusursuz çalışmak zorunda olan bir sözleşme kümesinde durur. Üçüncüsü jetonun kendisi: likit jetonun piyasadaki değeri temsil ettiği miktarla birebir olmak zorunda değildir, çekim kuyruğu uzadığında arada fark açılabilir.

Bir de mekanizma düzeyinde yoğunlaşma sorusu vardır. Tek bir protokol ağdaki teminatın büyük bölümünü yönlendirdiğinde, o protokolün operatör seçimi ve yönetişim kararları ağın doğrulayıcı dağılımını doğrudan etkiler. Yazıldığı tarih itibarıyla likit staking tartışmasının merkezinde bu başlık duruyor.
