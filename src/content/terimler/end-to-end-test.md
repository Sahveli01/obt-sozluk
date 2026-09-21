---
term: "End-to-End Test"
tr: "Uçtan uca test"
aliases: ["uçtan uca test", "e2e test"]
category: araclar
subcategory: "Test ve kalite"
level: orta
short: "Sistemi gerçek bir kullanıcının yaptığı gibi baştan sona çalıştırarak deneyen test."
related: [software-testing, integration-test, unit-test, staging, ci-cd]
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

Uçtan uca test, sistemi gerçek bir kullanıcının yaptığı gibi baştan sona dener. Tarayıcı açılır, forma yazı girilir, düğmeye tıklanır; arka planda arayüz, sunucu ve veritabanı gerçek hâlleriyle çalışır. Kontrol edilen şey tek bir parça değil, kullanıcının ekranda gördüğü sonuçtur.

Bu, [[software-testing|test piramidinin]] en tepesidir: en gerçekçi, en yavaş ve en pahalı basamak. Bir uçtan uca test geçtiğinde "bu akış baştan sona gerçekten çalışıyor" diyebilirsin; [[integration-test|entegrasyon testi]] bile bu güveni tek başına vermez.

## Nasıl çalışır?

Bir tarayıcı otomasyon aracı (Playwright, Cypress, Selenium gibi) gerçek bir tarayıcıyı programla sürer: sayfaya git, şu alana şunu yaz, şu düğmeye tıkla, şu yazı ekranda belirene kadar bekle. Uygulama bunun için genelde [[staging|staging]] gibi üretime benzeyen bir ortama kurulur ve testler [[ci-cd|CI]] üzerinde, her küçük değişiklikte değil belirli aralıklarla çalıştırılır.

En kritik nokta beklemedir. Sayfa hazır olmadan yapılan tıklama testi düşürür; sabit süre beklemek ise testi hem yavaşlatır hem de yavaş bir günde yine düşürür. Bu yüzden araçlar "şu öğe görünene kadar bekle" biçiminde koşullu beklemeler sunar ve doğru kullanım budur.

## Örnek

Playwright sözdizimiyle bir giriş akışı:

```js
import { test, expect } from '@playwright/test';

test('kullanıcı giriş yapabiliyor', async ({ page }) => {
  await page.goto('https://ornek.test/giris');
  await page.fill('#eposta', 'ayse@ornek.test');
  await page.fill('#parola', 'gizli-parola');
  await page.click('button[type="submit"]');
  await expect(page.locator('h1')).toHaveText('Panel');
});
```

## Dikkat

Uçtan uca testler kolayca "flaky" olur: kodda hiçbir şey değişmediği hâlde bazen geçer, bazen kalır. Ağ gecikmesi, animasyon, her seferinde farklı sıralanan veri bunun tipik sebepleridir. Güvenilmez bir test bir süre sonra görmezden gelinmeye başlar ve o andan itibaren hiçbir işe yaramaz — üstelik gerçek bir hatayı da gizler. Bu yüzden uçtan uca testler az sayıda tutulur ve yalnızca gerçekten kritik akışlar için yazılır.
