---
term: "Timelock"
tr: "Zaman kilidi"
aliases: ["time-lock"]
category: yonetisim
subcategory: ""
level: orta
short: "Kabul edilen bir kararın hemen değil, önceden belirlenmiş bir bekleme süresi dolduktan sonra yürürlüğe girmesini sağlayan sözleşme."
related: [governor-contract, on-chain-governance, governance-attack, multisig, upgradeable-contract]
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

Zaman kilidi, kabul edilen bir kararla o kararın yürürlüğe girmesi arasına zorunlu bir bekleme süresi koyan sözleşmedir. Oylama biter, sonuç bellidir, ama işlem hemen çalışmaz: kuyruğa alınır ve ancak süresi dolduğunda çalıştırılabilir hâle gelir.

Çoğu protokolde sözleşmelerin ve hazinenin asıl sahibi budur. [[governor-contract|Governor sözleşmesi]] yalnızca zaman kilidine emir verebilen taraftır; yetkinin durduğu yer zaman kilididir.

## Nasıl çalışır?

Kabul edilen öneri, çalıştırılacak çağrılarla birlikte kuyruğa yazılır. Böylece zincirde iki şey görünür hâle gelir: ne yapılacağı ve en erken ne zaman yapılabileceği. Süre dolduğunda yürütme çağrısını çoğu tasarımda herhangi biri yapabilir; yine çoğu tasarımda, süre dolmadan kuyruğu iptal edebilen ayrı bir yetki de tanımlıdır.

Beklemenin kime ne kazandırdığı açıktır. Kararı beğenmeyen itiraz etmeye, hatta karşı bir öneri açmaya vakit bulur. Protokole para bırakmış olan, değişiklik yürürlüğe girmeden çıkabilir. Protokole bağlanmış ekipler kodlarını yeni parametreye hazırlayabilir.

Bu yüzden zaman kilidi, [[governance-attack|yönetişim saldırısının]] en pratik panzehirlerindendir: saldıran taraf [[on-chain-governance|oylamayı]] kazansa bile sonucu anında alamaz ve o süre boyunca ne olacağını herkes okuyabilir.

## Dikkat

Bedeli aciliyettir. Aktif olarak sömürülen bir açık varsa, kilit yamayı da aynı süre bekletir. Protokoller bunu çözmek için acil durum yolu bırakır — genelde küçük bir [[multisig|çoklu imza]] grubunun durdurma ya da hızlı [[upgradeable-contract|yükseltme]] yetkisi. Bu yol süreyi kısaltır ama yeni bir güven varsayımı ekler. "Zaman kilidi var" cümlesi bu nedenle tek başına yeterli bilgi değildir; süreyi ve istisnalarını da sormak gerekir.

Son olarak, zaman kilidi kötü bir kararı engellemez, yalnızca geciktirir. Koruma, o süre boyunca birilerinin kuyruğa gerçekten bakıyor olmasına bağlıdır.
