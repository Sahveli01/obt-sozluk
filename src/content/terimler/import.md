---
term: "Import"
tr: "İçe aktarma"
aliases: ["içe aktarma", "içe aktarmak"]
category: programlama
subcategory: "Kod organizasyonu"
level: baslangic
short: "Başka bir dosyada ya da pakette tanımlı kodu, kendi dosyanda adıyla kullanılabilir hâle getiren işlem."
related: [module, package, scope-programlama, module-bundler, library-yazilim]
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

Import, başka bir yerde tanımlı kodu kendi dosyanda kullanılabilir hâle getirir. Yazdığın satır aslında şunu söyler: "şu [[module|modülü]] bul, çalıştır ve içindeki şu adı bana ver."

Kod kopyalanmaz. İçe aktarmak, o kodun bir kopyasını dosyanın içine yapıştırmak değildir; yalnızca ona bir ad üzerinden erişim açar ve o ad senin dosyanın [[scope-programlama|kapsamına]] girer.

Türkçede "içe aktarma" denir ama anahtar kelimenin kendisi hemen her dilde `import` olarak kalır.

## Benzetme

Bir yazıda kısaltma tanıtmak gibi. "Millî Eğitim Bakanlığı (MEB)" diye bir kez tanıtırsın, sonrasında yalnızca MEB yazarsın ve okuyan neyi kastettiğini bilir. Kısaltma bakanlığı yazının içine taşımaz, ona kısa bir adla işaret eder; tanıtmadan yazarsan da kimse anlamaz.

## Örnek

Python'da modülün tamamını ya da içinden tek bir adı alabilirsin:

```python
import math
from datetime import date

print(math.sqrt(144))          # 12.0
print(date(2026, 9, 22).year)  # 2026
```

JavaScript aynı işi `import { readFile } from "node:fs/promises";` biçiminde yazar; süslü parantez "modülün tamamını değil, içinden şu adı getir" demektir.

## Dikkat

Import bir dosyayı çalıştırır. Modülün en üstünde duran kod, sen o modülü içe aktardığın anda çalışır — dosya okuyorsa okur, ekrana yazıyorsa yazar. Bu yüzden modüllerin tepesine iş yapan satırlar koymak beklenmedik yan etkiler üretir.
