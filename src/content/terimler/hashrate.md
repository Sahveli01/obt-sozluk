---
term: "Hashrate"
tr: "Hash gücü"
aliases: ["hash gücü", "hash oranı"]
category: konsensus
subcategory: "Madencilik"
level: orta
short: "Bir madencinin ya da ağın tamamının saniyede yaptığı özet deneme sayısı."
related: [mining, difficulty, miner, mining-pool, 51-attack, asic]
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

Hash gücü, [[mining|madencilik]] yapan bir cihazın ya da ağın tamamının saniyede kaç deneme yaptığını gösteren ölçüdür. Birimi saniyedeki özet sayısıdır; rakamlar çok büyük olduğu için pratikte hep katlarıyla konuşulur.

Tek bir [[miner|madenci]] için anlamı basittir: blok bulma ihtimali, ağın toplam hash gücü içindeki payına eşittir. Payını iki katına çıkarırsan uzun vadede bulduğun blok sayısı da iki katına çıkar. Kısa vadede ise hiçbir garanti yoktur — arama şansa bağlıdır, sıraya dizilmiş bir kuyruk değildir.

## Nasıl çalışır?

Ağın toplam hash gücü doğrudan ölçülebilen bir şey değildir. Ortada dünyadaki cihazları sayan bir merkez yoktur; rakam, geçerli [[difficulty|zorluktan]] ve blokların gerçekte ne kadar sürede geldiğinden geriye doğru tahmin edilir.

Bunun pratik bir sonucu var: kısa vadeli hash gücü grafikleri dalgalı görünür. Şans eseri arka arkaya hızlı gelen birkaç blok, sanki ağa yeni donanım katılmış gibi bir sıçrama yaratır; yavaş gelen birkaç blok da tersini gösterir. Anlamlı olan tek şey uzun dönemli eğilimdir.

## Dikkat

Hash gücü güvenliğin ölçüsüdür ama tek başına yeterli değildir. Asıl soru bu gücün kimlerin elinde toplandığıdır: aynı toplam rakam, binlerce bağımsız katılımcıya dağılmış da olabilir, birkaç [[mining-pool|havuzda]] toplanmış da. Toplam ikisini de aynı gösterir. Çoğunluğun tek elde toplanması hâlinde neyin yapılabildiği ve neyin yapılamadığı [[51-attack|%51 saldırısı]] maddesinde yazılıdır.

İkincisi: farklı zincirlerin hash gücü karşılaştırılamaz. İki ağ farklı özet fonksiyonu kullanıyorsa rakamları farklı işlerin sayısıdır; birbirine bölünmez, birbirinden büyük ya da küçük sayılmaz.
