---
term: "HD Wallet (BIP-32)"
tr: "Hiyerarşik deterministik cüzdan"
aliases: ["hd wallet", "bip-32", "hiyerarşik deterministik cüzdan"]
category: cuzdanlar
subcategory: "Anahtarlar ve adresler"
level: orta
short: "Bütün anahtarlarını tek bir tohum değerinden, dallanan ve tekrarlanabilir bir düzenle türeten cüzdan yapısı."
related: [seed-phrase, bip-39, derivation-path, private-key, public-key, watch-only-wallet]
disambiguation: []
tags: []
status: taslak
reviewedBy: []
dateSensitive: false
sources: []
added: 2026-09-21
updated: 2026-09-21
---

## Nedir?

HD cüzdan (hierarchical deterministic, hiyerarşik deterministik), bütün anahtarlarını tek bir tohum değerinden türeten cüzdandır. "Deterministik", aynı tohumdan her seferinde aynı anahtarların çıkması demektir; "hiyerarşik" ise anahtarların düz bir liste değil, dallanan bir yapı oluşturması. Bu yapıyı tanımlayan standart BIP-32'dir.

Öncesinde cüzdanlar birbirinden bağımsız anahtarlar üretiyordu ve her yeni anahtarın ayrıca yedeklenmesi gerekiyordu. HD cüzdanda yedeklenecek tek şey tohumdur; [[seed-phrase|kelimeler]] de zaten o tohumu temsil eder.

## Benzetme

Dağdaki tek bir kaynaktan çıkan su gibi. Su dallana dallana yüzlerce dereye ayrılır; dereler birbirini tanımaz, ayrı ayrı akar. Kaynağı bilen bütün dereleri bulabilir; ama tek bir derenin kenarında durup kaynağın yerini bulamazsın.

## Nasıl çalışır?

Tohumdan önce bir ana anahtar çifti üretilir. Her anahtar, kendisine verilen bir sıra numarasıyla kendi alt anahtarlarını türetebilir; alt anahtarlar da kendi altlarını. Böylece istediğin kadar hesap ve adres, hiçbiri ayrıca saklanmadan, gerektiğinde yeniden üretilir. Hangi dalın nerede olduğunu [[derivation-path|türetme yolu]] yazar.

Yapının pratik bir sonucu daha var: bir dala ait genişletilmiş [[public-key|açık anahtar]] paylaşılarak, özel anahtarlara hiç dokunmadan o dalın adresleri önceden üretilebilir. Her ödemeye yeni adres veren sistemler ve [[watch-only-wallet|izleyen cüzdanlar]] bu sayede çalışır.

Bazı dallar "sertleştirilmiş" (hardened) türetilir. Bu dalların çocukları açık anahtardan üretilemez; yalnızca özel anahtarı bilen türetebilir.

## Dikkat

Tohum bütün ağacın kökü olduğu için riski de tek noktada toplar: onu ele geçiren, anahtarları tek tek çalmak zorunda kalmaz. [[key-management|Anahtar yönetimi]] bu yüzden HD cüzdanlarda tohumun etrafında döner.

Genişletilmiş açık anahtar da masum değildir. Paylaşan kişi para harcatmış olmaz ama o daldaki bütün adresleri ve geçmiş hareketleri görünür kılar.
