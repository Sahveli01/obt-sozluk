---
term: "Futures"
tr: "Vadeli İşlem"
aliases: []
category: piyasa
subcategory: "Borsa ve alım satım"
level: orta
short: "Bir varlığı ileri bir tarihte, bugünden belirlenen şartlarla alıp satmayı taahhüt eden türev sözleşme."
related: [derivatives, leverage, liquidation, perpetual-futures-perps, margin, spot-trading]
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

Futures, iki tarafın bir varlığı ileri bir tarihte, bugünden belirlenen şartlarla alıp satmak üzere yaptığı sözleşmedir. Türkçede "vadeli işlem" denir. Alınıp satılan şey varlığın kendisi değil, bu sözleşmedir; bu yüzden bir [[derivatives|türev]] üründür.

[[spot-trading|Spot işlemin]] aksine elinde bir varlık değil, bir taahhüt ve onun teminatı bulunur. Kripto piyasasında en yaygın biçimi, vade tarihi taşımayan [[perpetual-futures-perps|perpetual]] sözleşmelerdir.

## Nasıl çalışır?

Pozisyon açmak için sözleşmenin tam değeri kadar para yatırılmaz; [[margin|teminat]] adı verilen daha küçük bir tutar yatırılır. Sözleşmenin değeri teminattan büyük olduğu için burada [[leverage|kaldıraç]] vardır: fiyattaki küçük bir hareket, yatırılan teminat üzerinde çok daha büyük bir etki yapar. Bu etki iki yöne de aynı şekilde çalışır.

Teminat, sözleşmedeki zararı karşılayamayacak noktaya geldiğinde borsa pozisyonu kullanıcının onayını beklemeden kapatır; buna [[liquidation|likidasyon]] denir.

## Dikkat

Bu, sözlükteki en yüksek riskli araçlardan biridir. Kaldıraçla açılan bir pozisyonda yatırılan teminatın tamamı kaybedilebilir ve bunun için fiyatın uzun vadede ne yapacağı önemli değildir: kısa süreli bir hareket de teminatı tüketmeye yeter. Pozisyon kapandıktan sonra fiyat geri dönse bile kayıp kalıcıdır, çünkü pozisyon artık yoktur.

Ayrıca likidasyon anında piyasa hızlı hareket ediyorsa kapanış, hesaplanan seviyeden daha kötü bir fiyattan gerçekleşebilir. Vadeli piyasada kaybın teminatı aşması da mümkündür; bu durumun nasıl karşılandığı borsadan borsaya değişir.

Kısacası vadeli işlem, spot alım satımın hızlandırılmış hâli değil, ayrı riskleri olan ayrı bir üründür.
