---
term: "Async/Await"
tr: ""
aliases: ["asenkron programlama"]
category: programlama
subcategory: "Çalışma zamanı ve bellek"
level: orta
short: "Beklemeyi bloklamadan yapabilmek için dile eklenen söz dizimi: await yazılan noktada sıra bekleyen başka bir işe geçer."
related: [promise, event-loop, concurrency, callback, thread]
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

`async`/`await`, eşzamanlı kodu sıradan kod gibi okunur hâle getiren söz dizimidir. Bir fonksiyonu `async` diye işaretlersin, içinde beklemen gereken yere `await` yazarsın. O satıra gelindiğinde iş durur ama program durmaz: sıra bekleyen başka bir işe geçer, sonuç geldiğinde kaldığın yerden devam edilir.

İkisi de dilin anahtar kelimesi olduğu ve kodda aynen bu şekilde yazıldığı için çevrilmez; bu tarzın tamamına Türkçede "asenkron programlama" denir.

## Nasıl çalışır?

`await` gördüğün yer bir teslim noktasıdır: "burada bekleyeceğim, bu arada başkası çalışsın." Beklemeyi kimin devraldığı dile göre değişir — JavaScript'te [[event-loop|olay döngüsü]], Python'da `asyncio` döngüsü.

Bir `async` fonksiyonu çağırmak onu çalıştırıp bitirmez; geriye "sonra tamamlanacak" bir nesne verir (JavaScript'te [[promise|promise]], Python'da coroutine). O nesneyi `await` ettiğinde sonucu alırsın; etmezsen iş ya hiç başlamaz ya da sen farkında olmadan arka planda ilerler.

Kritik nokta şudur: `await` yalnızca gerçekten beklemeli işlerde kazanç sağlar — ağ isteği, dosya okuma, zamanlayıcı. Hesap yapan bir döngüyü `async` yapmak hiçbir şeyi hızlandırmaz, çünkü orada beklenen bir şey yoktur; aksine o döngü sırasını kimseye devretmediği için bütün akışı kilitler.

## Örnek

`async`/`await` Python'da da vardır, örnek de onunla:

```python
import asyncio

async def getir(ad: str) -> str:
    await asyncio.sleep(1)      # gerçek bir ağ isteğinin yerine
    return f"{ad} hazır"

async def main() -> None:
    sonuc = await asyncio.gather(getir("a"), getir("b"))
    print(sonuc)                # ['a hazır', 'b hazır']

asyncio.run(main())             # ikisi birlikte yaklaşık 1 saniye sürer
```

İki iş sırayla yapılsaydı iki saniye sürerdi; `await` sayesinde birinin beklemesi ötekinin işine ayrıldı.

## Dikkat

`async` yazmak kodu paralel yapmaz. Aksi söylenmedikçe her şey tek bir [[thread|iş parçacığı]] üstünde, sırayla ama iç içe çalışır ([[concurrency|eşzamanlılık]]).

Bir de `await` yazmayı unutmak sessiz bir hatadır: fonksiyon çağrılır, sonuç beklenmez ve elinde değer yerine tamamlanmamış bir nesne kalır. Diller bunun için uyarı verir, uyarıyı ciddiye al.
