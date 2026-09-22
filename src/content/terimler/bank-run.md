---
term: "Bank Run"
tr: "Banka Hücumu"
aliases: []
category: piyasa
subcategory: "Borsa ve alım satım"
level: orta
short: "Bir kurumdaki para sahiplerinin aynı anda çekmeye çalışması ve kurumun bu talebi karşılayamaması durumu."
related: [proof-of-reserves, custody, stablecoin, depeg, liquidity]
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

Banka hücumu, bir kurumda parası olanların aynı anda paralarını çekmek istemesi ve kurumun bu talebi karşılayamaması durumudur. Klasik bankacılıkta ortaya çıkar, çünkü bankalar mevduatın tamamını hazır tutmaz; büyük bölümünü kredi olarak dağıtır ve yalnızca bir kısmını elinin altında bulundurur. Bu düzen, herkesin aynı gün gelmeyeceği varsayımına dayanır.

## Benzetme

Bir yolun kapasitesi gibi. Yol, sürücüler güne yayıldığında rahatça yeter. Ama "akşam yol kapanacak" haberi dolaşmaya başlarsa herkes aynı saatte yola çıkar ve yol gerçekten kilitlenir. Kilitlenmenin sebebi yolun bozuk olması değil, herkesin aynı anda hareket etmesidir. Üstelik haberin doğru olması da gerekmez; herkesin "diğerleri çıkacak" diye düşünmesi yeter.

## Nasıl çalışır?

Mekanizmanın özü beklentidir. Kurumun gerçekten sorunlu olup olmadığından bağımsız olarak, herkes diğerlerinin çekeceğini düşündüğü anda erken davranmak tek tek herkes için anlamlı hâle gelir. Talep, hazır tutulan miktarı aştığında kurum varlıklarını aceleyle satmak zorunda kalır; bu satış [[liquidity|likiditesi]] düşük varlıklarda değeri aşağı çeker ve sorunu büyütür.

Aynı zincir kriptoda da işleyebilir. Varlıkları kullanıcı adına tutan bir [[custody|saklama]] hizmetinde ya da rezerve dayanan bir [[stablecoin|stabil jetonda]], rezervin talebi karşılayamayacağı beklentisi doğduğunda benzer bir hareket başlar; stabil jetonlarda bu çoğu zaman [[depeg|sabit kurdan kopma]] biçiminde görünür.

## Dikkat

Hücumun başlaması için kurumun batmış olması gerekmez; beklentinin kendisi yeterlidir. Bu yüzden rezervlerin dışarıdan görülebilmesini amaçlayan [[proof-of-reserves|rezerv kanıtı]] gibi uygulamalar önem kazanır — ama borçları göstermeyen bir rezerv kanıtı tabloyu yarım bırakır.

Tersi de doğrudur: sağlam bir kurum da hücuma uğrayabilir ve hücum yeterince büyükse sağlamlık onu ayakta tutmaya yetmeyebilir.
