---
term: "Quadratic Voting"
tr: ""
aliases: []
category: yonetisim
subcategory: ""
level: orta
short: "Aynı öneriye verilen her ek oyun bedelinin karesiyle arttığı, tercih şiddetini ölçmeyi amaçlayan oylama yöntemi."
related: [quadratic-funding, token-weighted-voting, sybil-attack, plutocracy, voting-power]
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

Quadratic voting, bir öneriye kaç oy vereceğine kendin karar verdiğin ama her ek oyun bir öncekinden pahalıya geldiği oylama yöntemidir. n oyun bedeli n²'dir: bir oy 1 birim, iki oy 4 birim, üç oy 9 birim, on oy 100 birim.

Amaç iki şeyi aynı anda tutabilmektir. Bir konuyu gerçekten önemseyen kişi bunu oy sayısıyla gösterebilmeli; buna karşılık bütçesi büyük olan tek başına sonucu belirleyememeli. Bedel kareyle arttığı için etki, harcamanın kareköküyle büyür: yüz kat bütçe yalnızca on kat oy demektir.

Türkçede yerleşmiş bir karşılığı yoktur; metinlerde İngilizce adıyla geçer.

## Nasıl çalışır?

Katılımcıya oy kullanmak için bir bütçe verilir: jeton, kredi ya da itibar puanı. Kişi bu bütçeyi öneriler arasında dağıtır ve her öneride harcadığı miktarın karekökü kadar oyu sayılır.

Sonuç, yığmayı pahalı, yaymayı ucuz yapar. Bütün bütçesini tek bir konuya gömen kişi az sayıda oy elde eder; aynı bütçeyi birçok konuya dağıtan kişi toplamda daha çok oy kullanır. Kazanan taraf, en çok parayı koyan değil, sayım sonunda en çok oyu toplayan taraftır.

## Örnek

100 birimlik bir bütçen olsun.

- Hepsini tek öneriye yığarsan: √100 = **10 oy**.
- Dört öneriye 25'er birim dağıtırsan: her birinde √25 = 5, toplam **20 oy**.

## Dikkat

Yöntemin bütün gücü tek bir varsayıma dayanır: kişi başına bir kimlik. Bu sağlanmazsa kareli maliyet caydırıcı olmaktan çıkıp ödüle döner. Aynı 100 birimi on ayrı cüzdana bölen kişi her cüzdanda √10 ≈ 3,16 oy alır; toplamı 31 oyu geçer, yani tek cüzdandaki 10 oyun üç katı. Burada [[sybil-attack|Sybil saldırısı]] yalnızca bir risk değil, doğrudan kârlı bir stratejidir.

Bu yüzden quadratic voting, gerçek kişileri ayırt edebilen bir kimlik katmanı olmadan zincir üstünde tek başına kullanılmaz. [[token-weighted-voting|Jeton ağırlıklı oylamada]] ise bölme hiçbir şey kazandırmaz — bakiyeyi kaç cüzdana yaydığın oy gücünü değiştirmez. Onun bedeli de başkadır: karar doğrudan servete bağlanır.
