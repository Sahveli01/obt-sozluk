---
term: "Governance Token"
tr: "Yönetişim token'ı"
aliases: []
category: tokenlar
subcategory: "Token türleri"
level: orta
short: "Sahibine bir protokolün kararlarında oy hakkı veren token; oy ağırlığı çoğunlukla tutulan miktara göre belirlenir."
related: [governance, token-weighted-voting, voting-power, utility-token, governance-attack, vote-escrowed-token-vetoken]
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

Governance token, sahibine bir protokolün kararlarında söz hakkı veren token'dır. Kural değişikliği, hazine harcaması, bir parametrenin güncellenmesi gibi konular [[governance-proposal|öneri]] hâline getirilir; token tutanlar oy verir. Ağırlık genellikle kişi başına değil miktara göre sayılır — buna [[token-weighted-voting|token ağırlıklı oylama]] denir.

## Benzetme

Kat malikleri toplantısı gibi. Binadaki herkesin söz hakkı vardır ama oylar kişiye göre değil paya göre sayılır: üç dairesi olanın üç oyu olur. Çatının yenilenmesine, aidatın artmasına, giriş kapısının değişmesine bu oylarla karar verilir. Bir de şu vardır: toplantıya kimse gelmezse karar, gelen birkaç kişinin oyuyla alınır.

## Nasıl çalışır?

Oy gücü çoğunlukla bir anlık görüntüyle ölçülür. Öneri açıldığı anda kimin ne kadar token tuttuğu [[snapshot-token|kaydedilir]] ve oylar bu kayda göre sayılır; böylece oylama sırasında token toplayıp ağırlığını şişirmek işe yaramaz.

Kararın geçmesi için genelde iki eşik aranır: yeterli katılım ([[quorum|yetersayı]]) ve yeterli evet oranı. Oy kullanmaya vakti olmayan ama ağırlığını boşa harcamak da istemeyen kişi oyunu başka bir adrese [[vote-delegation|devredebilir]]. Oylamanın sonucu doğrudan sözleşmeyi değiştirebilir ya da yalnızca bir niyet beyanı olabilir; bu, protokolün zincir üstünde mi zincir dışında mı yönetildiğine bağlıdır.

## Dikkat

Governance token ile [[utility-token]] sık karıştırılır: biri karar hakkı verir, diğeri ürüne erişim. Çoğu proje tek bir token'la ikisini birden iddia eder.

Oy gücünün miktara bağlı olmasının doğrudan bir sonucu vardır: yeterince token toplayan bir taraf sonucu tek başına belirleyebilir. [[governance-attack|Yönetişim saldırısı]] tam olarak budur ve kuralları çiğnemeyi gerektirmez — kurallar zaten buna izin verir.
