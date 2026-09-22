---
term: "Hook (React)"
tr: ""
aliases: ["react hook"]
category: web
subcategory: "Frontend"
level: orta
short: "React'ta bir bileşene state tutma ve yan etki çalıştırma gibi yetenekleri bağlayan, adı use ile başlayan fonksiyon."
related: [react, state-frontend, component, function]
disambiguation: [hook-ai-agent]
tags: []
status: taslak
reviewedBy: []
dateSensitive: false
sources: []
added: 2026-09-21
updated: 2026-09-22
---

## Nedir?

Hook, bir [[react|React]] bileşenine kendi başına sahip olmadığı yetenekleri bağlayan fonksiyondur: [[state-frontend|state]] tutmak, dışarıdaki bir şeye abone olmak, ekran çizildikten sonra bir iş çalıştırmak. Adları `use` ile başlar — `useState`, `useEffect` gibi.

Yerleşmiş bir Türkçe karşılığı olmadığı ve kodda yazılan adın kendisi de `use...` olduğu için İngilizce adıyla kullanılır.

## Nasıl çalışır?

Bir [[component|bileşen]] her yeniden çalıştığında içindeki hook'lar baştan çağrılır. React hangi çağrının hangi veriye karşılık geldiğini çağrıların sırasına bakarak bilir; hook'un kendisi "kaçıncı hook olduğunu" bilmez.

Kuralı buradan çıkar: hook'lar koşulun, döngünün ya da erken `return`'ün içine konmaz. Bileşenin en üstünde, her çalışmada aynı sırayla çağrılırlar. Sıra bozulursa React bir çağrının verisini başka bir çağrıya verir.

Kendi hook'unu da yazabilirsin: adı `use` ile başlayan ve içinde başka hook'lar çağıran sıradan bir [[function|fonksiyon]]. Tekrar eden mantığı — bir veriyi çekip beklemek, bir cüzdan bağlantısını izlemek — bileşenlerden çıkarıp tek yerde toplamanın yolu budur.

## Örnek

```jsx
import { useState } from 'react';

function Sayac() {
  const [sayi, setSayi] = useState(0);

  return <button onClick={() => setSayi(sayi + 1)}>Tıklandı: {sayi}</button>;
}
```

## Dikkat

`useEffect` en çok yanlış kullanılan hook'tur: içinde state güncellenip o state yeniden çalışmayı tetiklediğinde sonsuz bir döngü kurulur. Hangi değerler değişince çalışacağını bildiren listeyi doğru yazmak bu yüzden önemlidir.

Yapay zekâ araçlarındaki [[hook-ai-agent|hook]] ile aynı adı taşırlar ama farklıdırlar: orada belirli bir olay anında dışarıdan çalışan bir komut vardır, burada bileşenin kendi içinde çağırdığı bir fonksiyon.
