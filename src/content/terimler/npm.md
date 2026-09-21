---
term: "npm"
tr: ""
aliases: ["node package manager"]
category: araclar
subcategory: "Geliştirme ortamı"
level: orta
short: "Node.js ile birlikte kurulan JavaScript paket yöneticisi ve paketlerin yayımlandığı genel kayıt defteri."
related: [package-manager, pnpm, node-js, package, semantic-versioning]
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

npm, JavaScript dünyasının [[package-manager|paket yöneticisidir]] ve [[node-js|Node.js]] ile birlikte kurulur. Aynı isim iki şeyi anlatır: komut satırı aracı ve paketlerin yayımlandığı genel kayıt defteri (registry). Adı Node Package Manager'dan gelse de bugün tarayıcı projelerinde de kullanılır, o yüzden isim tam olarak kapsamı anlatmaz.

## Nasıl çalışır?

Bir projede iki dosya işi yürütür. `package.json` projenin kimliğidir: adı, çalıştırılabilir betikleri ve kullandığı paketlerin sürüm aralıkları burada yazar. `package-lock.json` ise o aralıkların bu kurulumda tam olarak hangi sürümlere karşılık geldiğini kaydeder; aynı proje başka bir bilgisayarda birebir aynı paketlerle kurulsun diye. Bu yüzden lock dosyası depoya eklenir, silinmez.

Paketler `node_modules` klasörüne açılır. Bu klasör hızla büyür ama yeniden üretilebilir bir çıktıdır; sürüm kontrolüne eklenmez, `.gitignore` içine yazılır.

Üç komut günlük işin çoğunu görür: `npm install` bağımlılıkları kurar, `npm run <ad>` `package.json` içindeki bir betiği çalıştırır, `npx <ad>` ise bir aracı kalıcı kurmadan bir kerelik çalıştırır.

## Örnek

```
npm install
npm run dev
```

İkisi de PowerShell'de ve bash'te aynı yazılır; npm her iki ortamda da aynı programdır, kabuk farkı komutu değiştirmez.

## Dikkat

`npm install <paket>` varsayılan olarak bir sürüm aralığı yazar, sabit bir sürüm değil. Ekipteki herkesin aynı kurulumu almasını sağlayan şey bu satır değil, lock dosyasıdır.

`npm install` ile `npm ci` de aynı şey değildir: `ci` lock dosyasına birebir uyar ve `node_modules` klasörünü sıfırdan kurar. Otomatik derleme ortamlarında tercih edilen budur.
