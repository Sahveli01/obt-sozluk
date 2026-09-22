---
term: "Props"
tr: ""
aliases: ["prop"]
category: web
subcategory: "Frontend"
level: orta
short: "Bir bileşene dışarıdan, onu kullanan yerden verilen ve bileşenin kendi içinde değiştiremediği girdiler."
related: [component, state-frontend, react, javascript]
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

Props, bir [[component|bileşene]] dışarıdan verilen girdilerdir. Aynı bileşeni farklı props'larla çağırırsın, ekranda farklı şeyler çıkar: aynı rozet bileşeni bir yerde "Testnet", başka bir yerde "Yeni" yazar.

Kural tek cümledir: props'u bileşeni kullanan taraf verir, bileşen onu okur ama değiştirmez. İngilizce "properties" kelimesinin kısaltmasıdır; kodda yazılan ad da props olduğu için Türkçeye çevrilmez.

## Nasıl çalışır?

Bileşeni bir [[javascript|JavaScript]] fonksiyonu gibi düşün: props girdi, ekrana çizilen arayüz çıktıdır. Aynı props ile aynı sonuç çıkar; bileşen kendi girdisini içeriden değiştirmeye kalkarsa bu tahmin edilebilirlik bozulur.

Peki alt bileşen bir değerin değişmesini istiyorsa ne olur? Veriyi tutan taraf üsttedir, karar da orada verilir. Alt bileşene props olarak bir fonksiyon geçirilir; alt bileşen o fonksiyonu çağırıp "bir şey oldu" der, değeri üstteki değiştirir. Veri aşağı, haber yukarı akar.

## Örnek

```jsx
function Rozet({ etiket, renk }) {
  return <span className={`rozet rozet-${renk}`}>{etiket}</span>;
}

// kullanıldığı yer
<Rozet etiket="Testnet" renk="gri" />
<Rozet etiket="Yeni" renk="yesil" />
```

## Dikkat

Props ile [[state-frontend|state]] sık karıştırılır: props yukarıdan gelir ve bileşen açısından sabittir; state bileşenin kendi tuttuğu, zaman içinde değişen veridir. Bir değeri iki yerde birden tutmak — hem üstten props olarak geçirip hem alt bileşende kopyasını saklamak — ikisinin birbirinden sapmasına yol açan yaygın bir hatadır.
