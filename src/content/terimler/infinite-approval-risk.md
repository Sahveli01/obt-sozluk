---
term: "Infinite Approval Risk"
tr: "Sınırsız onay riski"
aliases: ["sınırsız onay"]
category: guvenlik
subcategory: "Kullanıcıyı hedef alan dolandırıcılıklar"
level: orta
short: "Sınırsız harcama izninin, sen iptal edene kadar o token'ın tamamı üzerinde açık kalan bir kapı bırakması."
related: [approve, allowance, erc-20, erc-2612-permit, wallet-drainer, upgradeable-contract]
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

Bir uygulamanın token'ına dokunabilmesi için ona [[approve|onay]] vermen gerekir. Çoğu arayüz, her işlemde tekrar sormamak için mümkün olan en yüksek tutarı önerir. Sınırsız onay riski, bu kolaylığın bedelidir.

Risk tek bir cümleyle özetlenebilir: onay verdiğin gün ne kadar token'ın olduğu önemli değildir, çekimin yapıldığı gün ne kadar olduğu önemlidir.

## Nasıl çalışır?

Üç özellik bir araya gelince ortaya çıkar.

**İzin zaman aşımına uğramaz.** Bir yıl önce tek bir takas için verdiğin onay hâlâ oradadır ve kendiliğinden kapanmaz. Onu kapatmanın tek yolu, veren cüzdanla yeni bir işlem göndermektir.

**Tavan bakiyene bakmaz.** [[allowance|İzin]] bir tutar değil, bir üst sınırdır. Bugün cüzdanında o token'dan 20 birim varsa ve yarın 2.000 olursa, sınırsız izin ikisini de kapsar. Aradan geçen sürede biriktirdiğin her şey aynı kapının arkasındadır.

**Onayladığın sözleşme sabit kalmayabilir.** [[upgradeable-contract|Yükseltilebilir bir sözleşmede]] bugün okuduğun kod yarın başka bir kod olabilir; yetkileri elinde tutan taraf değişebilir ya da ele geçirilebilir. İzni verdiğin şey bir kod değil, bir adrestir.

Bu üçü, [[wallet-drainer|cüzdan boşaltıcılarının]] neden transfer değil onay istediğini de açıklar.

## Dikkat

İzin iptal etmek zahmetli olduğu için ertelenir; bu yüzden en uzun ömürlü izinler "sonra bakarım" denenlerdir.

- Verdiğin izinleri arada bir toplu olarak gözden geçir. Cüzdanının ya da blok gezgininin onay yönetimi ekranı hangi adrese neyi açtığını listeler.
- Bir uygulamayı bir daha kullanmayacaksan iznini sıfırla. İptal de bir işlemdir ve ücreti vardır; bu yüzden tek tek değil, dönem dönem hepsini birden yapmak daha ucuzdur.
- Arayüz izin veriyorsa, sınırsız yerine işini görecek tutarı yaz.
- Token [[erc-2612-permit|permit]] destekliyorsa süreli imzayı tercih et; kendiliğinden biten bir izin, unutulan bir izinden iyidir.
- İzni yalnızca onu veren cüzdan kapatabilir. Varlıkları başka cüzdana taşımak eski izni kapatmaz, yalnızca kapsamını boşaltır ([[erc-20|ERC-20]] izinleri adrese yazılıdır).
