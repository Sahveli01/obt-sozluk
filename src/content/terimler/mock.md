---
term: "Mock"
tr: ""
aliases: ["mocking", "mocklamak"]
category: araclar
subcategory: "Test ve kalite"
level: orta
short: "Testte gerçek bir bağımlılığın yerine geçen, önceden söylendiği gibi davranan sahte parça."
related: [fixture, unit-test, integration-test, software-testing, dependency]
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

Mock, bir testte gerçek bir bağımlılığın yerine geçen ve önceden söylendiği gibi davranan sahte bir parçadır. Gerçek ödeme servisini çağırmak yerine "her zaman başarılı döner" diyen bir mock koyarsın; test artık o servisin ayakta olmasına bağlı olmaz, hızlanır ve her seferinde aynı sonucu verir.

Mock'un iki işi vardır: yerine geçtiği şeyin davranışını taklit etmek ve kendisine nasıl seslenildiğini kaydetmek. İkincisi çoğu zaman testin asıl sorusudur — "kayıt tamamlandığında e-posta gönderme fonksiyonu doğru adresle çağrıldı mı?"

Terimin yerleşmiş bir Türkçe karşılığı yok; Türkçe konuşurken de "mock" deniyor, fiil hâli "mocklamak" biçiminde kullanılıyor.

## Benzetme

Dublör gibi. Sahnede gerçek oyuncunun yapması gereken hareketi, gerçek oyuncu gibi görünerek o yapar. Filmin tamamını taşıyamaz, tek bir replik bile söyleyemez; ama o sahne için gereken davranışı tam olarak verir — ve zaten ondan istenen de budur.

## Nasıl çalışır?

Test kütüphaneleri bunun için hazır araçlar sunar. Vitest'te `vi.fn()`, Jest'te `jest.fn()` boş bir sahte fonksiyon üretir. Ona "çağrıldığında şunu döndür" denir, test bittiğinde de "kaç kez ve hangi argümanlarla çağrıldın" diye sorulur.

Mock koymayı kolaylaştıran şey tasarımdır. Bağımlılık koda dışarıdan veriliyorsa (parametre ya da yapılandırma yoluyla) yerine sahtesini koymak tek satırlık iştir. Kod bağımlılığı kendi içinde sabit olarak yaratıyorsa araya girmek zorlaşır. Bu yüzden test yazmak çoğu zaman [[dependency|bağımlılıkların]] nasıl bağlandığını da düzeltir.

## Örnek

Vitest sözdizimiyle, e-posta gönderiminin çağrıldığını doğrulayan bir test:

```js
import { it, expect, vi } from 'vitest';
import { kayitOl } from './kayit.js';

it('kayıttan sonra e-posta gönderir', async () => {
  const epostaGonder = vi.fn().mockResolvedValue(true);

  await kayitOl({ eposta: 'ayse@ornek.test' }, epostaGonder);

  expect(epostaGonder).toHaveBeenCalledTimes(1);
  expect(epostaGonder).toHaveBeenCalledWith('ayse@ornek.test');
});
```

## Dikkat

Mock'u [[fixture|fixture]] ile karıştırma: mock sahte **davranıştır** (çağrılınca bir şey yapar), fixture hazır **veridir** (öylece durur).

Asıl risk aşırıya kaçmaktır. Her şeyi mock'larsan testin doğruladığı şey gerçek kod değil, senin kurduğun sahte dünya olur. Gerçek bağımlılığın davranışı bir gün değiştiğinde mock'un eski hâliyle kalır; test yeşil yanmaya devam eder, uygulama çalışmaz.
