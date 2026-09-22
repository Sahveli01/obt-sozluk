---
term: "Responsive Design"
tr: "Duyarlı tasarım"
aliases: []
category: web
subcategory: "Frontend"
level: baslangic
short: "Aynı sayfanın telefondan geniş ekrana kadar her boyutta okunabilir ve kullanılabilir kalması için yerleşimin uyarlanması."
related: [css, design-token, accessibility-a11y, frontend]
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

Aynı site telefonda, tablette ve geniş bir ekranda açılır. Duyarlı tasarım, genişlik ne olursa olsun içeriğin okunabilir ve kullanılabilir kalmasıdır: yan yana duran üç sütun dar ekranda alt alta iner, boşluklar ve yazı boyutu ekrana göre ayarlanır.

Ayrı bir "mobil site" yapmak yerine tek bir sayfanın kendini uyarlaması esastır. [[css|CSS]] tarafında bu iş esnek yerleşimler ve belirli genişliklerde devreye giren kurallarla yapılır.

## Benzetme

Ölçü alınarak dikilmiş bir takım elbise ile esnek kumaştan bir tişört arasındaki fark gibi. Takım yalnızca ölçüsü alınan kişide düzgün durur; bir beden şaştığında ya sıkar ya sarkar. Esnek kumaş aynı kalıpla birçok bedene oturur, çünkü şeklini üstüne geçtiği yere göre alır.

## Örnek

```css
.kartlar {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

@media (min-width: 40rem) {
  .kartlar { grid-template-columns: repeat(3, 1fr); }
}
```

Önce dar ekranın kuralı yazılır; geniş ekran bir istisna olarak eklenir.

## Dikkat

Tarayıcı penceresini daraltarak bakmak test yerine geçmez. Dokunmatik ekranda parmak fare imlecinden çok daha kalındır: düğmelerin yeterince büyük ve birbirinden yeterince uzak olması da duyarlı tasarımın parçasıdır. Kullanıcının yazı boyutunu büyütmüş olabileceğini unutmamak da öyle — [[accessibility-a11y|erişilebilirlik]] ile bu yüzden iç içedir.
