---
term: "Sharding"
tr: ""
aliases: []
category: olceklenme
subcategory: "Temeller"
level: orta
short: "Ağı parçalara bölüp her node'un yalnızca bir parçayla ilgilenmesini sağlayarak toplam kapasiteyi artırma yaklaşımı."
related: [danksharding, scalability, data-availability, validator, rollup, state-growth]
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

Sharding, bir ağı parçalara bölüp her [[node|node]]'un yalnızca bir parçayla ilgilenmesini sağlama fikridir. Klasik tasarımda her node her işlemi çalıştırır; bu hem güvenliğin kaynağıdır hem de kapasitenin tavanı. Bölünmüş bir ağda yük parçalara dağılır ve toplam kapasite parça sayısıyla birlikte artar.

Terim veritabanı dünyasından gelir; Türkçede yerleşmiş bir karşılığı yoktur, "parçalama" denildiği olur ama yaygın kullanım İngilizcesidir.

## Benzetme

Bütün işlerin tek bir merkez binada görüldüğü bir belediyenin her ilçeye şube açması gibi. Her şube yalnızca kendi ilçesine bakar, kimse şehrin tamamını takip etmek zorunda kalmaz. Buna karşılık iki ilçeyi birden ilgilendiren bir iş çıktığında şubelerin birbirine haber vermesi gerekir ve o iş tek bir masada bitmez.

## Nasıl çalışır?

İki tasarım sorusu belirleyicidir.

Birincisi güvenlik. Bir parçayı doğrulayan grup ağın tamamından küçüktür; dolayısıyla tek bir parçayı ele geçirmek bütün ağı ele geçirmekten ucuzdur. Standart çözüm, [[validator|doğrulayıcıları]] parçalara rastgele ve düzenli aralıklarla yeniden dağıtmaktır: kimse hangi parçaya düşeceğini önceden bilemezse hedefli saldırı kurmak zorlaşır.

İkincisi parçalar arası iletişim. Bir parçadaki işlem başka bir parçadaki veriye dokunuyorsa iş tek adımda bitmez; mesajlaşmaya ve beklemeye dönüşür. Uygulama geliştiricisi için asıl maliyet buradadır, çünkü aynı zincirin iki parçasındaki sözleşmeler artık birbirini tek işlemde çağıramaz.

## Dikkat

"Sharding" tek bir tasarımın adı değildir; neyin bölündüğü sonucu tamamen değiştirir. Yürütmeyi bölmek yukarıdaki iki sorunu da göze almak demektir. Yalnızca veriyi bölmek ise çok daha az karmaşıklıkla benzer bir kapasite kazancı verebilir; [[danksharding|danksharding]] bu ikinci yolu izler ve yürütmeyi [[rollup|rollup]]'lara bırakır.

Parçalamanın azalttığı yüklerden biri de [[state-growth|durum büyümesidir]]: her node yalnızca kendi parçasının durumunu tuttuğu için disk baskısı bölünür. Kazanılan kapasitenin karşılığı, tek bir zincirin sağladığı kesintisiz birleştirilebilirliktir.
