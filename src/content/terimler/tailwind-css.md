---
term: "Tailwind CSS"
tr: ""
aliases: ["tailwind"]
category: web
subcategory: "Frontend"
level: orta
short: "Her biri tek bir işi yapan hazır sınıfları doğrudan HTML içine yazarak stil vermeye dayanan CSS aracı."
related: [css, design-token, html, component]
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

Tailwind CSS, [[css|CSS]] yazma biçimini değiştiren bir araçtır. Ayrı bir stil dosyasında sınıf tanımlayıp ona ad vermek yerine, her biri tek bir işi yapan hazır sınıfları doğrudan [[html|HTML]] içine yazarsın: `flex`, `gap-4`, `text-sm`.

Cevap verdiği sorun, projeler büyüdükçe stil dosyalarının kontrolden çıkmasıdır: kimsenin silmeye cesaret edemediği sınıflar, birbirini ezen kurallar ve her yeni parçada "bu sınıfın adı ne olsun" tartışması.

## Nasıl çalışır?

Sınıf adları rastgele değildir, bir ölçekten gelir: boşluklar, yazı boyutları ve renkler sınırlı bir kümeden seçilir. Bu yüzden Tailwind aynı zamanda bir [[design-token|token]] kümesi gibi davranır; ölçeğin kendisi proje ayarlarından değiştirilir.

Yayın çıktısı üretilirken kodda gerçekten kullanılan sınıflar taranır ve yalnızca onların karşılığı dosyaya yazılır. Etiketlerin uzun görünmesi ise tekrarın [[component|bileşen]] düzeyinde toplanmasıyla dengelenir: aynı sınıf dizisini beş yere yazmak yerine bileşeni bir kez yazarsın.

## Örnek

```html
<button class="rounded-md bg-slate-900 px-4 py-2 text-sm text-white">
  Kaydet
</button>
```

## Dikkat

Bu yaklaşım CSS bilmemeyi mümkün kılmaz. Sınıfların çoğu bir CSS özelliğinin kısa adıdır; altta ne olduğunu bilmeden yazıldığında sonuç tahmin edilemez hâle gelir ve hata nereden geldiği anlaşılamaz.

Ölçeğin dışına çıkmak da mümkündür, ama bu sık yapıldığında aracın getirdiği tek fayda — herkesin aynı sınırlı kümeden seçmesi — ortadan kalkar.
