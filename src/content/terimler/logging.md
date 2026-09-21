---
term: "Logging"
tr: "Loglama"
aliases: ["loglama", "günlük kaydı"]
category: araclar
subcategory: "Test ve kalite"
level: baslangic
short: "Programın çalışırken ne yaptığını, sonradan okunabilsin diye zaman damgasıyla yazması."
related: [monitoring, debugging, stack-trace, production, debugger]
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

Logging, programın çalışırken ne yaptığını sonradan okunabilecek şekilde yazmasıdır. Her kayıtta genelde zaman damgası, bir önem seviyesi (debug, info, warn, error) ve olayla ilgili bilgiler bulunur.

Neden gerekli olduğu [[production|üretim]] ortamında belli olur: sunucuda çalışan bir programın başında durup ekranı izleyemezsin. Bir kullanıcı "ödemem geçmedi" dediğinde elindeki tek kanıt, o dakikada yazılmış kayıtlardır.

İyi kaydın anahtarı yapılandırılmış olmasıdır. Düz bir cümle yerine alanları belli bir kayıt (JSON gibi) yazılırsa kayıtlar makineyle aranabilir, filtrelenebilir ve sayılabilir hâle gelir.

## Benzetme

Uçağın kara kutusu gibi. Uçuş boyunca kimse onu okumaz; her şey yolunda giderse hiç açılmaz bile. Bir sorun çıktığındaysa elde olan tek şey odur — ve kaydın gerçekten tutulmuş olmasının değeri tam o anda anlaşılır.

## Örnek

Yapılandırılmış tek satırlık bir kayıt:

```js
console.info(JSON.stringify({
  seviye: 'info',
  olay: 'odeme_alindi',
  siparisId: 1042,
  tutarKurus: 24900,
  zaman: new Date().toISOString(),
}));
```

## Dikkat

Log'a ne yazdığına dikkat et: parola, özel anahtar, oturum bilgisi ya da kişisel veri kayda düştüğü anda kayıtları okuyabilen herkese açılmış olur.

Her şeyi yazmak da hiçbir şey yazmamaya yakındır; gürültünün içinde önemli satır kaybolur ve kayıtları saklamak para tutar. Seviyeleri bu yüzden kullan: hata gerçekten hatayken yazılsın.

Son olarak kayıt üretmek ile o kayıtları izleyip alarm üretmek ayrı işlerdir. Log dosyası kimse bakmadıkça sessizdir; ona bakıp bir şey ters gittiğinde insanı uyandırmak [[monitoring|monitoring]]'in konusudur.
