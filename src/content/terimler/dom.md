---
term: "DOM"
tr: ""
aliases: ["document object model"]
category: web
subcategory: "Frontend"
level: orta
short: "Tarayıcının HTML'den kurduğu, JavaScript'in okuyup değiştirebildiği canlı sayfa ağacı."
related: [html, javascript, browser, virtual-dom, css]
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

[[browser|Tarayıcı]] bir [[html|HTML]] dosyasını okuduğunda onu metin olarak bırakmaz: iç içe geçmiş öğelerden oluşan bir ağaç kurar. Bu ağaca DOM denir. Ekranda gördüğün şey HTML dosyasının kendisi değil, bu ağaçtır.

Ağaç canlıdır. [[javascript|JavaScript]] içinden bir düğümü bulup yazısını değiştirdiğinde ekran o anda değişir, ama diskteki HTML dosyası olduğu gibi kalır. "Document Object Model" kısaltması olduğu ve kodda yazılan ad da DOM olduğu için Türkçeye çevrilmez.

## Nasıl çalışır?

Her etiket bir düğümdür ve ebeveyn–çocuk ilişkisiyle diğerlerine bağlıdır. Tarayıcı bu ağacı kullanarak neyin nerede duracağını hesaplar ve ekrana çizer.

JavaScript ağaca üç şekilde dokunur: bir düğümü seçer (`querySelector`), içeriğini ya da sınıfını değiştirir, veya bir olayı dinler (`addEventListener`). Her değişiklik tarayıcıyı yeniden ölçüm ve boyamaya zorlar. Yüzlerce küçük değişikliği tek tek yapmak bu yüzden pahalıdır; [[virtual-dom|sanal DOM]] gibi teknikler tam olarak bu maliyeti azaltmak için çıkmıştır.

## Örnek

```html
<p id="durum">Bekleniyor</p>
<button id="btn">Başlat</button>

<script>
  const dugme = document.querySelector('#btn');
  dugme.addEventListener('click', () => {
    document.querySelector('#durum').textContent = 'Başladı';
  });
</script>
```

## Dikkat

Tarayıcının "İncele" penceresinde gördüğün işaretleme kaynak HTML değil, DOM'un o anki hâlidir; JavaScript araya girdiyse ikisi birbirini tutmaz. Sayfayı yenilediğinde ağaç baştan kurulur ve kodla yaptığın bütün değişiklikler kaybolur — DOM kalıcı bir depolama yeri değildir.
