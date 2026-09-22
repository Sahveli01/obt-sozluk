---
term: "Design Token"
tr: "Tasarım token'ı"
aliases: []
category: web
subcategory: "Frontend"
level: orta
short: "Bir tasarım kararının koda geçmiş, adlandırılmış hâli: rengi ya da boşluğu değeriyle değil adıyla kullanmak."
related: [design-system, css, tailwind-css, responsive-design]
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

Tasarım token'ı, bir tasarım kararına verilmiş addır. Kodun içine `#1b1b1b` ya da `12px` yazmak yerine `--renk-metin`, `--bosluk-2` gibi adlar tanımlanır ve her yerde bu adlar kullanılır. Değerin kendisi tek bir yerde durur.

[[design-system|Tasarım sisteminden]] farkı ölçektir: sistem kararların ve bileşenlerin bütünüdür, token o kararların koddaki en küçük birimi.

## Nasıl çalışır?

Web'de token'lar çoğunlukla [[css|CSS]] değişkeni olarak tanımlanır. Bunun pratik sonucu şudur: koyu temaya geçmek için aynı adlara farklı değerler vermek yeter, bileşenlerin tek satırı değişmez. Aynı şey [[responsive-design|dar ekranda]] boşlukları daraltmak için de geçerlidir.

Adlandırma iki türlü yapılır. Ham değer adları (`--mavi-500`) paleti tarif eder; işlev adları (`--renk-bag`) o değerin nerede kullanıldığını söyler. İkincisi daha dayanıklıdır, çünkü bağlantı rengi maviden başka bir şeye dönerse ad hâlâ doğrudur. Çoğu sistemde ikisi katmanlanır: işlev adları ham adlara işaret eder.

## Örnek

```css
:root {
  --renk-metin: #1b1b1b;
  --bosluk-2: 0.75rem;
}

.kart {
  color: var(--renk-metin);
  padding: var(--bosluk-2);
}
```

## Dikkat

Token'ın faydası tutarlılık değil, tutarlılığı ucuzlatmaktır: karar tek yerden değişir.

Yarısı token, yarısı elle yazılmış değerlerden oluşan bir kod tabanı ise iki yaklaşımın da dezavantajını taşır — ne tek yerden değiştirilebilir, ne de bir değerin nereden geldiği okunurken bellidir. [[tailwind-css|Tailwind]] gibi araçlar da altta böyle bir ölçeğe dayanır; oradaki sınıf adları aslında aynı kararların başka bir yazımıdır.
