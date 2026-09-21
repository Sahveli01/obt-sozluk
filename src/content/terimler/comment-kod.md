---
term: "Comment (Kod)"
tr: "Yorum satırı"
aliases: ["yorum satırı"]
category: programlama
subcategory: "Temel kavramlar"
level: baslangic
short: "Kodun içine yazılan, bilgisayarın çalıştırmadığı, yalnızca okuyan insan için duran açıklama."
related: [source-code, clean-code, documentation, syntax]
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

Yorum satırı, [[source-code|kaynak kodun]] içine yazılan ama çalıştırılmayan metindir. Bilgisayar o satırı görür ve atlar; orada ne yazdığı programın davranışını değiştirmez.

Kime yazıldığı önemli: yoruma bakacak olan, kodu sonradan okuyan insandır. Çoğu zaman bu insan, altı ay sonraki sensindir.

İyi bir yorum kodun ne yaptığını tekrarlamaz — onu zaten kodun kendisi söyler. Cevapladığı soru "neden"dir: bu değer neden üç saniye, bu kontrol neden burada duruyor, burası neden alışılmadık bir yolla yazılmış.

Her dilin kendi işareti vardır: Python'da `#`, JavaScript ve Solidity'de `//`.

## Benzetme

İkinci elden aldığın bir ders kitabının kenarındaki kurşun kalem notları gibi. Basılı metin herkes için aynıdır; kenardaki "hoca bunu her yıl soruyor" notu sınavda geçerli değildir, sayfanın anlamını da değiştirmez. Ama kitabı senden sonra okuyanın yarım saatini kurtarır.

## Örnek

```python
# Sunucu bazen gec cevap veriyor; 3 saniyenin altinda bosuna hata aliyorduk.
ZAMAN_ASIMI = 3
```

Yorum sayının kaç olduğunu değil, neden bu sayı olduğunu anlatıyor.

## Dikkat

Yorumun en büyük riski eskimesidir. Kod değişir, yorum yerinde kalır ve bir süre sonra yalan söylemeye başlar. Yanlış bir yorum, hiç yorum olmamasından daha çok zaman kaybettirir; kodu değiştirirken yanındaki yorumu da değiştir.

İkinci tuzak, çalışmayan kodu silmek yerine yorum satırına çevirip bırakmaktır. O kod orada birikir ve bir süre sonra kimse silmeye cesaret edemez. [[version-control|Sürüm kontrolü]] eski hâli zaten sakladığı için silmekten çekinme.
