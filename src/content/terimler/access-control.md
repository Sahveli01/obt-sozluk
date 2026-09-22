---
term: "Access Control"
tr: "Erişim denetimi"
aliases: ["erişim denetimi"]
category: akilli-sozlesmeler
subcategory: "Tasarım kalıpları"
level: baslangic
short: "Bir sözleşmede hangi fonksiyonu kimin çağırabileceğini belirleyen kural kümesi."
related: [ownable, role-based-access-control-rbac, modifier, msg-sender, access-control-vulnerability]
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

Zincirdeki bir sözleşmenin `public` fonksiyonlarını, aksi yazılmadıkça **herkes** çağırabilir. Erişim denetimi, "bu fonksiyonu kim çağırabilir?" sorusunun koda yazılmış cevabıdır.

Uygulaması sandığından basittir: fonksiyonun ilk satırında çağıranın adresine, yani [[msg-sender|`msg.sender`]]'a bakılır. Adres listede yoksa işlem geri alınır, hiçbir şey değişmez. Bu kontrol her fonksiyonda tekrar yazılmasın diye genelde bir [[modifier|modifier]] içine konur.

En basit hâli tek bir sahip adresi tutan [[ownable|Ownable]]'dır. Yetki birden fazla kişiye ve birden fazla işe dağılacaksa rol tablosu kullanan [[role-based-access-control-rbac|RBAC]] tercih edilir.

## Benzetme

Bir WhatsApp grubu gibi. Gruptaki herkes mesaj yazar, herkes eski mesajları okur. Ama grubun adını değiştirmek, birini gruba eklemek ya da çıkarmak yalnızca yöneticinin elindedir. Aynı gruptasınız, yetkiniz aynı değil — ve yetkiyi belirleyen, kim olduğunu iddia etmen değil, listede yazıyor olman.

## Dikkat

Erişim denetimi **gizlilik değildir**. Zincirdeki veri herkese açıktır; denetim yalnızca kimin değişiklik yapabileceğini sınırlar. Bir değeri `private` yapmak onu kimsenin okuyamayacağı anlamına gelmez.

En pahalı sözleşme hataları da karmaşık matematikten değil, kontrolü unutulmuş tek bir fonksiyondan çıkar ([[access-control-vulnerability|erişim denetimi açığı]]).
