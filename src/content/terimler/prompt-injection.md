---
term: "Prompt Injection"
tr: ""
aliases: ["prompt injection", "prompt enjeksiyonu"]
category: yapay-zeka
subcategory: "Güvenlik ve değerlendirme"
level: ileri
short: "Modelin okuduğu veriye üçüncü bir tarafın talimat yerleştirmesi; model bunu kullanıcının isteğinden ayırt edemez."
related: [jailbreak, guardrails, ai-agent, tool-use-function-calling, human-in-the-loop, principle-of-least-privilege]
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

Bir dil modeline ulaşan her şey aynı türden bir şeydir: metin. Kullanıcının isteği de, modelin okuduğu web sayfası, belge, e-posta ya da araç çıktısı da aynı akışın içine girer. Prompt injection, bu akışa dışarıdan giren metnin talimat gibi işlem görmesidir. Modelin baktığı yerde "bunu kim söyledi" bilgisi yoktur; yalnızca kelimeler vardır.

Terimin yerleşik bir Türkçe karşılığı yok; metinlerde "prompt enjeksiyonu" diye geçiyor ama sektörde İngilizce hâliyle kullanılıyor.

## Benzetme

Gözleri kapalı çalışan bir asistan düşün: kimin konuştuğunu göremez, yalnızca cümleleri duyar. Yöneticisinin talimatı ile yan masadan gelen bir cümle kulağına tıpatıp aynı biçimde ulaşır. Sorun asistanın dikkatsizliği değil, duyduğu cümlelerin üstünde kimlik bilgisi olmamasıdır.

## Nasıl çalışır?

Kök neden mimaridedir: model için talimat ile veri ayrı kanallar değildir. [[system-prompt|Sistem promptu]], kullanıcı mesajı ve dışarıdan gelen içerik sonunda tek bir bağlamda birleşir. Model hangi bölümün otorite taşıdığını yalnızca eğitimden öğrendiği kadar tahmin eder; bu bir garanti değil, bir eğilimdir.

Tehlike, model yalnız metin ürettiğinde değil, eylem yapabildiğinde büyür. Dış veri okuyabilen ve [[tool-use-function-calling|araç çağırabilen]] bir [[ai-agent|ajan]], okuduğu içeriğin etkisiyle dosya silmek, veri dışarı yazmak ya da bir ödeme başlatmak gibi geri alınamaz sonuçlar doğurabilir. Doğru soru "model kandırılabilir mi" değil, "kandırıldığında eli nereye uzanıyor" sorusudur.

Savunma da bu yüzden katmanlıdır: ajanın yetkisini işinin gerektirdiği kadarla sınırlamak ([[principle-of-least-privilege|en az yetki ilkesi]]), dışarıdan gelen her içeriği güvenilmez kabul etmek, geri döndürülemez adımları [[human-in-the-loop|insan onayına]] bağlamak, araç çıktılarını ve model çıktılarını ayrı ayrı denetlemek, erişimi dosya ve ağ düzeyinde [[sandbox|kum havuzuna]] almak. Yazıldığı tarih itibarıyla sorunu tek başına bitiren bir çözüm yoktur; mimari, modelin kandırılabileceği varsayılarak kurulur.

## Dikkat

[[jailbreak|Jailbreak]] ile karıştırılır: jailbreak'te sınırı zorlayan kullanıcıdır, prompt injection'da kullanıcı genellikle zarar gören taraftır.

İkinci yaygın yanılgı, "modele daha iyi talimat vererek" sorunun çözüleceğini sanmaktır. Talimat da metindir; metnin üstüne her zaman başka metin gelebilir. Savunmanın taşıyıcısı modelin uyarılması değil, modelin etrafındaki yetki tasarımıdır.
