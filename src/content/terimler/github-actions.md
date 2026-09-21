---
term: "GitHub Actions"
tr: ""
aliases: []
category: araclar
subcategory: "Git ve GitHub"
level: orta
short: "Depoda olan olaylara bağlı olarak iş akışlarını otomatik çalıştıran, GitHub'a gömülü otomasyon sistemi."
related: [ci-cd, github, yaml, pull-request-pr, release]
disambiguation: []
tags: []
status: taslak
reviewedBy: []
dateSensitive: true
sources: []
added: 2026-09-21
updated: 2026-09-22
---

## Nedir?

GitHub Actions, [[github|GitHub]] deposunda bir şey olduğunda otomatik olarak komut çalıştıran sistemdir. En yaygın kullanımı [[ci-cd|CI]]'dır: her gönderimde testleri koşturmak, kodu derlemek, biçim kurallarını denetlemek. Bir ürün adı olduğu için çevrilmez ve tek seçenek değildir; benzer işi yapan başka sistemler de vardır.

## Nasıl çalışır?

İş akışları deponun içinde `.github/workflows/` klasöründe [[yaml|YAML]] dosyaları olarak durur. Her dosyada üç şey tanımlanır: hangi olayda tetikleneceği, hangi işlerin koşacağı ve her işin adımları.

Tetikleyici bir gönderim, bir [[pull-request-pr|pull request]] açılması, bir etiket, zamanlanmış bir saat ya da elle başlatma olabilir. Tetiklendiğinde GitHub temiz bir sanal makine ayırır, depoyu oraya indirir ve adımları sırayla çalıştırır. Adımlar ya doğrudan komuttur ya da başkalarının hazırladığı hazır parçalardır.

## Örnek

```yaml
on: [push]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: npm ci
      - run: npm test
```

## Dikkat

İş akışları depoda saklanan sırlara erişebilir; bu sırların log çıktısına düşmemesine dikkat etmek gerekir. Yazıldığı tarih itibarıyla, dışarıdan gelen bir [[fork-git|fork]] pull request'inde depo sırları iş akışına varsayılan olarak verilmez — bu bir kısıtlama değil, yabancı kodun sırlarını okumasını engelleyen bir korumadır.

Başkasının yazdığı hazır adımları kullanırken sürümünü sabitlemek de önemlidir; güncellenen bir adım, senin deponda senin haberin olmadan çalışan koddur.
