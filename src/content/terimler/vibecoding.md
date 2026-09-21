---
term: "Vibecoding"
tr: ""
aliases: ["vibe coding", "vibe kodlama"]
category: yapay-zeka
subcategory: "Ajanlar ve araçlar"
level: baslangic
short: "Kodu satır satır yazmak yerine modele ne istediğini anlatıp çıkan sonucu deneyerek ilerleme biçimi."
related: [ai-pair-programming, coding-agent, prompt-engineering, technical-debt, code-review]
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

Vibecoding, kodu satır satır kendin yazmak yerine ne istediğini modele anlatıp çıkan sonucu çalıştırarak ilerlemektir. Çalıştıysa devam edersin, çalışmadıysa tarif edip yeniden istersin. Terimin Türkçe karşılığı yok; sektörde İngilizcesi kullanılıyor.

## Benzetme

Otomatik vitesli arabayla yola çıkmak gibi. Ehliyetin ilk haftasında bile gidersin ve bu gerçek bir kazançtır. Ama vitesin neye göre değiştiğini öğrenmezsin; yoldan bir ses geldiğinde neyin bozulduğunu anlamak için yine de motorun nasıl çalıştığını bilmen gerekir.

## Dikkat

Kazancı gerçektir: fikirden çalışan prototipe geçmeyi hızlandırır, tanımadığın bir teknolojiyi denemeyi ucuzlatır, başlama eşiğini düşürür.

Riski de gerçektir. Anlamadan kabul ettiğin kodun hatasını bulmak da değiştirmek de sana kalır. En çok güvenlik zarar görür: girdi doğrulama, yetkilendirme ve anahtarların nerede durduğu sorulmadıkça genellikle yazılmaz. Model var olmayan bir kütüphane ya da [[api|API]] uydurabilir. Biriken [[technical-debt|teknik borç]] ilk hafta görünmez, bakım gerektiğinde ödenir.

Orta yol basit: üretilen kodu çalıştırmadan önce oku, küçük parçalar hâlinde iste ve anlamadığın her satırı modele açıklattır. Öğrenmenin yerini almaz ama öğrenmeye girmenin iyi bir kapısıdır.
