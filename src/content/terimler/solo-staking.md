---
term: "Solo Staking"
tr: ""
aliases: []
category: konsensus
subcategory: "Staking ve validator'lar"
level: orta
short: "Kendi donanımında kendi doğrulayıcını çalıştırarak, anahtarları ve işletim sorumluluğunu kimseye devretmeden stake etmek."
related: [staking, validator, staking-pool, delegator, slashing, consensus-client]
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

Solo staking, stake'i aracısız yapmaktır. Doğrulayıcı yazılımını kendi makinende çalıştırırsın, imza anahtarları sende durur, ödül doğrudan sana gelir ve kimseye komisyon ödemezsin. Karşılığında ağın istediği asgari miktarı tek başına karşılaman ve makinenin kesintisiz çalışmasını sağlaman gerekir.

Türkçede yerleşik bir karşılığı yok; "tek başına stake etmek" diye anlatılıyor ama terim İngilizce kullanılıyor.

## Nasıl çalışır?

Çoğu ağda bir düğüm iki parçadan oluşur: zincirin durumunu işleyen [[execution-client|execution client]] ve blok üretimiyle oylamayı yürüten [[consensus-client|consensus client]]. Doğrulayıcı anahtarın bu ikilinin üstünde çalışır ve senin adına imza atar.

Burada devredilen hiçbir şey yoktur, bu yüzden her şey sende kalır: donanım, internet bağlantısı, güncellemeler, yedekler ve anahtarların saklanması. [[staking-pool|Havuzda]] ya da [[delegator|delegasyonda]] bu yükü başkası taşır; solo staking'in ödediği bedel de tam olarak o yüktür.

## Dikkat

İşi zorlaştıran şey genellikle teknik bilgi değil, sürekliliktir. Makinenin kapalı kaldığı süre yapılmayan görevler yüzünden ödülü eksiltir; bu geri dönülebilir bir kayıptır.

Asıl dikkat edilecek nokta yedekleme alışkanlığındadır. Aynı doğrulayıcı anahtarını iki makinede birden çalıştırırsan ikisi de imza atar ve ağ bunu kasıtlı bir çifte imzadan ayırt edemez. Başka sistemlerde doğru olan "yedeği de açık tut" refleksi burada doğrudan [[slashing|kesinti]] sebebi üretir.

İkincisi anahtar ayrımıdır: imza atmaya yarayan anahtar ile varlığı çekmeye yarayan anahtar çoğu tasarımda ayrıdır. Sürekli çevrimiçi duran makinede yalnızca birincisinin bulunması, ikisini aynı yerde tutmaktan çok daha güvenlidir.
