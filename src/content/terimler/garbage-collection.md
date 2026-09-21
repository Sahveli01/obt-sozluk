---
term: "Garbage Collection"
tr: "Çöp toplama"
aliases: ["çöp toplama", "çöp toplayıcı"]
category: programlama
subcategory: "Çalışma zamanı ve bellek"
level: orta
short: "Programın artık erişemediği bellek bölgelerinin dil tarafından kendiliğinden bulunup geri kazanılması."
related: [memory-management, stack-and-heap, runtime, gas]
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

Çöp toplama, bir programın artık erişemediği belleği dilin kendiliğinden bulup geri kazanmasıdır. "Çöp" burada bozulmuş veri değil, *ulaşılamaz* veridir: hiçbir değişkenin, hiçbir yapının göstermediği bir nesne artık kimsenin işine yaramaz, dolayısıyla yeri boşaltılabilir. Programcı hiçbir şey yazmaz; [[memory-management|bellek yönetimi]] bu dillerde [[runtime|çalışma zamanının]] işidir.

## Benzetme

Bir otelin kat hizmetleri gibi. Görevli odalara tek tek bakar; misafiri çıkmış odayı toplar, geride bırakılanları alır, odayı yeniden verilebilir hâle getirir. Ölçüsü "bu eşya değerli mi" değildir, "bu odanın sahibi var mı"dır. Toplama kısa sürer ama o sırada oda kullanılamaz — ve görevlinin ne zaman geleceğine misafir karar vermez.

## Nasıl çalışır?

Ayrıntılar dilden dile epey değişir, ama temel fikir ortaktır: toplayıcı bilinen köklerden başlar — o an çalışan fonksiyonların yerel değişkenleri, genel değişkenler — ve bunlardan zincirleme ulaşılabilen her şeyi işaretler. Geriye kalan, tanımı gereği ulaşılamaz olandır; yeri boşa çıkarılır.

Bunun bedeli hız değil, zamanlamadır. Toplama çalışırken program tamamen ya da kısmen durur. Süre çoğu uygulamada fark bile edilmez; ama her isteğe milisaniye cinsinden söz vermiş bir sistemde, ne zaman geleceğini bilmediğin bir duraklama ciddi bir tasarım sorunudur.

## Dikkat

Çöp toplayıcı sızıntıyı bitirmez. Hâlâ erişilebilir olduğu için toplanmayan ama bir daha kullanılmayacak nesneler birikmeye devam eder: unutulmuş bir listeye eklenip duran kayıtlar, kapatılmayan bir aboneliğin tuttuğu nesneler. Toplayıcının ölçütü "gerekli mi" değil, "ulaşılabilir mi"dir.

Akıllı sözleşme çalıştıran ortamlarda ise çöp toplayıcı hiç bulunmaz ve bu bir eksiklik değil, tercihtir. Zincirde harcanan her iş [[gas|gas]] olarak ölçülür ve bütün düğümlerin aynı sonucu alması gerekir; "toplayıcı bu sefer devreye girdi, işlem biraz uzun sürdü" diyebileceğin bir yer yoktur. Bu yüzden ortam belleği ikiye ayırır: işlem boyunca yaşayıp sonunda toptan atılan [[memory-evm|geçici bellek]] ve açıkça yazman gereken kalıcı [[storage-evm|depolama]].
