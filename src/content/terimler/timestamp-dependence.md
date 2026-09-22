---
term: "Timestamp Dependence"
tr: "Zaman damgası bağımlılığı"
aliases: ["zaman damgası bağımlılığı"]
category: guvenlik
subcategory: "Sözleşme açıkları"
level: orta
short: "Kritik bir kararı blok zaman damgasına dayandırmak; o değeri yazan taraf onu dar bir aralıkta oynatabilir."
related: [block-timestamp, weak-randomness, block-time, commit-reveal-scheme, oracle]
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

Bir sözleşmenin elindeki tek saat, içinde bulunduğu bloğun zaman damgasıdır. Bu değer ağdan okunan tarafsız bir ölçüm değil, bloğu üreten tarafın **yazdığı** bir sayıdır ([[block-timestamp|blok zaman damgası]]). Gerçeğe yakın olmak zorundadır ama saniyesi saniyesine doğru değildir.

Zaman damgası bağımlılığı, bir kararın sonucunun tam da bu belirsizlik aralığında değişmesidir. "Şu saniyeden önce gelen kazanır", "bu aralıkta kapanan pozisyona ceza yok", "süre dolduysa ödül benim" gibi kurallar, sonucu yazana bırakılmış kurallardır.

Kural gün ölçeğinde işliyorsa sorun yoktur: bir haftalık kilidin birkaç saniye erken ya da geç açılmasının hükmü yoktur. Sorun, kararın çözünürlüğü ile üreticinin oynatabildiği aralık birbirine yaklaştığında başlar.

## Nasıl çalışır?

Ağ zaman damgasını iki kuralla sınırlar: bir önceki bloktan büyük olmalı ve diğer düğümlerin reddedeceği kadar ileri olmamalıdır. Bu sınırların arasında üreticinin bir miktar serbestliği kalır. Üstelik bazı ağlarda bir sonraki bloğu kimin üreteceği önceden bellidir; kazanç yeterince büyükse o blokta zamanı sınırın ucuna çekmek akıl dışı bir hamle değildir.

Savunma, bağımlılığı azaltmaktır:

Eşikleri saniye değil saat ya da gün ölçeğinde kur; tasarımı birkaç saniyelik kaymaya duyarsız hâle getir.

Süre ve sıra için blok numarası da kullanılabilir ama blok süresi ağdan ağa değişir ve sabit varsayılamaz ([[block-time|blok süresi]]).

Rastgelelik için zaman damgasını **hiç** kullanma; öngörülebilir bir kaynaktır ([[weak-randomness|zayıf rastgelelik]]).

Sıralamanın kendisi kritikse zamanı hakem yapmak yerine katılımı iki aşamaya böl ([[commit-reveal-scheme|commit-reveal]]).

Gerçekten kesin bir zamana ihtiyacın varsa onu zincirin dışından, imzalı bir kaynaktan al ([[oracle|oracle]]).

## Dikkat

"Zaman damgası saldırganın elindedir" demek abartıdır ve yanlış bir güvenlik hissi yaratır; doğru cümle "dar bir aralıkta oynatılabilir"dir. Tasarımını bu aralığa göre yap, kötü niyetli bir saate göre değil.

Aralığın genişliği zincire göre değişir. Bir ağda güvenli olan bir eşik, blok süresi ve üretici kuralları farklı olan başka bir ağda güvenli olmayabilir; sözleşmeni başka bir zincire taşırken bu varsayımı yeniden kontrol et.
