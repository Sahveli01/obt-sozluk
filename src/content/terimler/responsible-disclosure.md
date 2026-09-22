---
term: "Responsible Disclosure"
tr: "Sorumlu Açıklama"
aliases: ["sorumlu açıklama"]
category: guvenlik
subcategory: "Temel kavramlar"
level: orta
short: "Bulunan açığı önce sahibine bildirmek, düzeltilmesi için süre tanımak ve ayrıntıları ancak sonra yayımlamak."
related: [bug-bounty, whitehat, zero-day, vulnerability, cve]
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

Sorumlu açıklama, bir açık bulunduğunda izlenen sıradır: önce sahibine bildir, düzeltmesi için süre tanı, ayrıntıları ancak düzeltme kullanıcılara ulaştıktan sonra yayımla. [[bug-bounty|Ödül programı]] bu davranışın ödüllendirilmiş hâlidir; asıl mekanizma bu sıradır.

Sıranın amacı basit. Açık duyurulduğu anda hem savunma hem saldırı tarafı aynı bilgiyi alır. Savunmanın o bilgiyle bir şey yapabilmesi için önden zamana ihtiyacı vardır.

## Nasıl çalışır?

**Bildirim.** Projenin ilan ettiği kanal kullanılır — güvenlik e-postası, program sayfası, bazen kaynak deposundaki bir `SECURITY.md` dosyası. Bildirim, karşı tarafın sorunu kendi başına yeniden üretebileceği kadar açık olmalıdır.

**Doğrulama ve süre.** Ekip sorunu doğrular, iki taraf yayımlama tarihi üzerinde anlaşır. Süre baştan konuşulur ve yazıya geçer; "düzeltilene kadar" gibi açık uçlu bir söz, açığın yıllarca kapalı kalmasına da yol açabilir.

**Düzeltme ve dağıtım.** Klasik yazılımda bu bir sürüm yayımlamaktır. Zincirde iş daha zordur: sözleşme değiştirilemiyorsa fonların taşınması, kullanıcıların verdiği onayların iptal edilmesi ya da bir yükseltmenin koordine edilmesi gerekebilir. Bu yüzden zamanlama daha kritiktir.

**Yayımlama.** Düzeltme yayıldıktan sonra olay yazılır: neydi, nasıl bulundu, nasıl kapatıldı. Bilinen açıklar ayrıca ortak bir kimlikle kayda geçebilir ([[cve|CVE]]).

## Dikkat

Erken yayımlamak kullanıcıyı korumaz; hazır olmayan tarafı savunmasız yakalar. Ama hiç yayımlamamak da bir çözüm değildir: aynı hatayı yapan başka ekipler o hatayı hiç öğrenemez, kullanıcılar da riske girip girmediklerini bilemez.

Karşı taraf cevap vermezse ne olacağı baştan konuşulmalıdır. Sessizlik bir açığın kendiliğinden kapandığı anlamına gelmez; kapanmadığı sürece o açık hâlâ bir [[zero-day|zero-day]] olarak durur.

Bildirim yapmak, izinsiz test yapmayı geçerli kılmaz. Sıranın ilk adımı bulmak değil, nerede test edebileceğini öğrenmektir.
