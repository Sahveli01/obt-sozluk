---
term: "Gas Estimation"
tr: "Gas tahmini"
aliases: ["gas tahmini"]
category: akilli-sozlesmeler
subcategory: "Dış dünya ve verimlilik"
level: orta
short: "Bir işlemi göndermeden önce ne kadar gas harcayacağının, işlem o anki zincir durumunda denenerek hesaplanması."
related: [gas, gas-limit, gas-optimization, transaction, revert, rpc-node]
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

Bir [[transaction|işlem]] gönderirken, o işlemin harcamasına izin verdiğin üst sınırı da belirtirsin: [[gas-limit|gas limiti]]. Bu sayıyı elle yazmazsın, cüzdanın senin yerine tahmin eder. `eth_estimateGas` çağrısının yaptığı iş budur.

Sınır fazla düşük olursa işlem yarıda kalır; fazla yüksek olursa bir zararı olmaz, çünkü harcanmayan gas iade edilir. Yine de tahminin işe yaraması için yeterince yakın olması gerekir.

## Benzetme

Navigasyonun "varış 18:40" demesi gibi. Bu sayı takvimden değil, yolun o andaki hâlinden çıkar: mevcut trafik, mevcut hız. Yola çıktıktan sonra bir kaza olursa ya da sen başka bir güzergâha saparsan tahmin tutmaz. Yanlış olan hesap değildir; hesabın dayandığı durum değişmiştir.

## Nasıl çalışır?

Bir [[rpc-node|RPC node]]'u işlemi kendi kopyasında gerçekten çalıştırır: o anki zincir durumunu alır, işlemi üzerinde işletir, harcanan [[gas|gas]] miktarını ölçer ve sonucu zincire hiçbir şey yazmadan atar. Yani tahmin bir formül değil, bir provadır.

Provada işlem geri alınıyorsa ([[revert|revert]]) tahmin de başarısız olur. Cüzdanların işlem ekranında gösterdiği "bu işlem büyük olasılıkla başarısız olacak" uyarısı genellikle buradan gelir; imzalamadan önce hatayı görmüş olursun.

Cüzdanlar ve kütüphaneler çıkan sayıyı olduğu gibi kullanmaz, üstüne bir emniyet payı ekler; provanın yapıldığı an ile işlemin çalıştığı an aynı an değildir.

## Dikkat

Tahmin, adının söylediği şeydir: tahmin. Prova ile işlemin gerçekten çalıştığı an arasında zincirin durumu değişir; araya giren başka işlemler senin işlemini daha pahalı bir yola sokabilir. Klasik örnek, koda dallanma girmesidir: bir sayaç sıfırdan ilk kez yazılıyorsa güncellemekten çok daha pahalıdır, bir döngü daha uzun bir liste geziyorsa hesap büyür.

Böyle bir durumda işlem "out of gas" ile geri alınır — ve en can sıkıcı kısmı budur: işlem başarısız olsa da o ana kadar yapılan iş için harcanan gas geri gelmez. Ücreti ödersin, sonucu alamazsın.

Bir de karıştırılan ayrım: gas estimation bir işlemin ne kadar harcayacağını önceden kestirmeye çalışır, [[gas-optimization|gas optimization]] ise kodun harcadığı miktarı baştan azaltır. Kötü tahmin işlemi düşürür; iyi tahmin pahalı kodu ucuzlatmaz.
