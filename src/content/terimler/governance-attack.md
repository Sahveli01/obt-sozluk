---
term: "Governance Attack"
tr: "Yönetişim Saldırısı"
aliases: []
category: guvenlik
subcategory: "Ekonomik ve protokol saldırıları"
level: orta
short: "Bir protokolün oylamasında geçici olarak çoğunluğu sağlayıp hazineyi ya da kuralları ele geçirme."
related: [governance-token, snapshot-token, timelock, token-weighted-voting, quorum, flash-loan-attack]
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

Bir protokolün hazinesi, parametreleri ve bazen sözleşmelerinin kendisi oylamayla yönetilir. **Yönetişim saldırısı**, bu oylamada geçici olarak yeterli gücü toplayıp kendi lehine bir kararı geçirmektir.

Rahatsız edici yanı da budur: hiçbir kural çiğnenmez. Öneri usulüne uygun açılır, süresi dolar, çoğunluk sağlanır, karar uygulanır. Ortaya çıkan sonuç, kuralların zaten izin verdiği bir sonuçtur — bu yüzden "hata" diye işaretlenecek bir satır da yoktur.

## Benzetme

Bir spor kulübünün kongresi gibi. Oy hakkı üyelerindir ama üyeler oylarını vekâletle başkasına kullandırabilir. Kongreden birkaç gün önce yeterince vekâlet toplayan bir grup salona girer, yönetimi değiştirir ve dağılır.

Salonda kimse kural çiğnemedi. Yalnızca "oy kullanan kişi, kulübün uzun vadeli çıkarını gözetir" varsayımı bir hafta boyunca doğru olmadı.

## Nasıl çalışır?

Açığın kaynağı, oy gücünün sahiplenmeyle değil **o anki bakiyeyle** ölçülmesidir. Bir [[governance-token|yönetişim token'ı]] satın alınabilir, kiralanabilir, hatta [[flash-loan-attack|tek bir işlem boyunca ödünç]] alınabilir. Sayım bakiyeye bakıyorsa, gücü geçici olarak eline geçirmek yeterlidir; sonrasında elde tutmak gerekmez.

İkinci kaynak katılımın düşüklüğüdür. Oyların çoğu hiç kullanılmıyorsa "çoğunluk", dolaşımdaki arzın küçük bir bölümü demektir ve gereken eşiğe göründüğünden çok daha ucuza ulaşılır. [[token-weighted-voting|Token ağırlıklı oylamanın]] bilinen zayıflığı burada en somut hâlini alır.

Sonuç her zaman hazineyi boşaltmak da değildir. Bir parametrenin sessizce değiştirilmesi, bir sözleşmenin yükseltme yetkisinin devredilmesi ya da bir teşvik akışının yönünün çevrilmesi de aynı kapıdan geçer.

## Dikkat

Protokol tarafında savunma, gücün ölçüldüğü **anı** ve kararın uygulandığı **anı** birbirinden ayırmaktır:

- Oy gücü, oylama açıldığında değil daha önce belirlenmiş geçmiş bir noktada ölçülsün ([[snapshot-token|anlık görüntü]]). Sonradan toplanan bakiye o oylamada sayılmaz.
- Kabul edilen karar hemen uygulanmasın; araya bir [[timelock|zaman kilidi]] girsin. Bu süre, kararı fark etmek ve gerekirse çıkmak için herkese zaman tanır.
- Geçerlilik için asgari bir katılım ([[quorum|yeter sayı]]) aransın ve hazineden tek seferde çekilebilecek tutar sınırlansın.

Kullanıcı tarafında yapılacak şey kısa: bir protokole para bırakırken "kod ne diyor" kadar "bu kodu kim, hangi eşikle ve ne kadar sürede değiştirebilir" sorusunu da sor. Bu üç sayı, o protokolün gerçek güvenlik sınırını çizer.
