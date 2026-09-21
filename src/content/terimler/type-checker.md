---
term: "Type Checker"
tr: ""
aliases: ["tip denetleyici", "type checking"]
category: araclar
subcategory: "Test ve kalite"
level: orta
short: "Kodu çalıştırmadan, değerlerin türlerinin birbirine uyup uymadığını kontrol eden araç."
related: [typescript, static-typing, type-safety, linter, compiler]
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

Tip denetleyicisi, kodu çalıştırmadan önce değerlerin türlerinin birbirine uyup uymadığını kontrol eden araçtır. Bir fonksiyon metin bekliyor da sen ona sayı veriyorsan, program hiç çalışmadan bunu söyler.

[[static-typing|Statik tipli]] dillerde bu iş genelde [[compiler|derleyicinin]] içindedir ve ayrı bir adım değildir. [[dynamic-typing|Dinamik tipli]] dillerde ise sonradan eklenen bir araç olarak gelir: JavaScript için [[typescript|TypeScript]] derleyicisi (`tsc`), Python için mypy gibi.

"Type checker" için yerleşik bir Türkçe karşılık yok; "tip denetleyicisi" ya da "tip kontrolü" dendiği oluyor ama araç adı olarak İngilizcesi kullanılıyor.

## Benzetme

Fizik probleminde birim kontrolü gibi. Hesabın sonunda metreyle kilogramı toplamış olduğunu görürsen, sayıları hiç hesaplamadan bir yerde hata yaptığını bilirsin. Tip denetleyicisi de değerlerin *kaç* olduğuna değil, *ne cinsten* olduğuna bakar — ve yanlış cinsleri bir araya getirdiğin yeri gösterir.

## Nasıl çalışır?

Araç kodun tamamını okuyup her ifadenin tipini belirler. Bir kısmını sen açıkça yazmışsındır, geri kalanını çıkarımla bulur: `const n = 5` yazdığında kimse ona "bu bir sayıdır" demez, kendisi anlar. Sonra bu bilgiyi kullanıp uyumsuzlukları listeler.

Kontrol yalnızca yazım anında yapılır. TypeScript dosyaları JavaScript'e çevrilirken tipler silinir; çalışma anında bu bilginin çoğu artık yoktur.

Bunun doğrudan sonucu şudur: dışarıdan gelen veri tip denetleyicisinin kör noktasıdır. Bir API cevabına "bu şu tiptedir" dediğinde araç sana inanır; cevap gerçekten öyle gelmezse program çalışırken patlar. Bu yüzden sınırlarda veri gerçekten doğrulanır.

## Örnek

TypeScript ile, hiç çalıştırmadan yakalanan bir hata:

```ts
function selamla(ad: string): string {
  return `Merhaba ${ad}`;
}

selamla('Ayşe'); // sorun yok
selamla(42);     // Hata: 'number' tipi 'string' parametresine atanamaz
```

## Dikkat

Tip denetleyicisi [[linter|linter]] değildir: linter riskli alışkanlıkları kural listesine göre işaretler, tip denetleyicisi ise dilin tip sistemine göre uyumsuzluk arar.

Daha önemlisi, "tip hatası yok" demek "kod doğru çalışıyor" demek değildir. Tipleri kusursuz ama mantığı baştan sona yanlış bir fonksiyon denetimden sorunsuz geçer. [[type-safety|Tip güvenliği]] bütün hata sınıflarından birini kapatır, hepsini değil.
