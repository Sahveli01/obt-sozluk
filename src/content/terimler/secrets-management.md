---
term: "Secrets Management"
tr: "Sır Yönetimi"
aliases: ["sır yönetimi"]
category: guvenlik
subcategory: "Temel kavramlar"
level: orta
short: "Özel anahtar, API anahtarı ve parola gibi gizli değerleri koddan ayrı tutma ve erişimini sınırlama disiplini."
related: [environment-variable, gitignore, key-rotation, api-key, private-key, deployment-script]
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

Sır yönetimi, bir projedeki gizli değerlerin — [[private-key|özel anahtar]], [[api-key|API anahtarı]], veritabanı parolası — nerede durduğu, kimin erişebildiği ve sızdığında ne olacağı sorularının cevabıdır. Tek bir araç değil, birkaç alışkanlığın toplamıdır.

## Nasıl çalışır?

**Sır koda yazılmaz.** Kod paylaşılır, kopyalanır, geçmişi tutulur; sır bunların hiçbirine uygun değildir. Değer çalışma anında dışarıdan okunur: küçük projelerde [[environment-variable|ortam değişkeni]] olarak, büyüklerde bunun için yapılmış bir sır deposundan.

**Depoya gitmeyecek dosyalar ilk gün dışlanır.** `.env` ve anahtar dosyaları [[gitignore|.gitignore]] içine projenin ilk gününde yazılır; sonradan temizlemek çok daha pahalıdır.

**Her ortamın kendi sırrı olur.** Test ortamının anahtarıyla canlı ortamın anahtarı aynı olmamalıdır; aksi hâlde en zayıf ortam bütün sistemin güvenlik seviyesini belirler.

**Erişim daraltılır ve kaydedilir.** Kimin hangi sırra ulaşabildiği bilinir; ayrılan kişinin erişimi kapatılır.

**Sızan sır silinmez, değiştirilir.** Bir değer bir kez dışarı çıktıysa geri alınamaz; yapılacak tek şey onu geçersiz kılmaktır ([[key-rotation|anahtar değişimi]]).

## Dikkat

En sık yapılan iki hata şunlar: özel anahtarı doğrudan koda gömmek ve `.env` dosyasını depoya göndermek. İkincisinde şu tuzak var — dosyayı fark edip silmek ve "düzelttim" demek. Silinmez: değer sürüm geçmişinde durur, dal kopyalarında durur, birinin bilgisayarındaki klonda durur. O anahtar artık yanmıştır ve tek doğru hamle değiştirmektir. Dağıtım komutlarına anahtarı elle yapıştırmak da aynı kapıya çıkar, çünkü terminal geçmişine düşer ([[deployment-script|dağıtım script'i]]).

Üçüncü hata zincire özgüdür ve daha az bilinir: **zincire yazılan hiçbir şey gizli değildir.** Bir değişkeni `private` yapmak onu diğer sözleşmelerden gizler, insanlardan değil; depolama alanı herkes tarafından okunabilir ([[visibility|görünürlük]]). Gizli kalması gereken bir değer zincire yazılmaz.
