---
term: "Trusted Setup"
tr: ""
aliases: []
category: kriptografi
subcategory: "Sıfır bilgi (ZK) ve ileri kriptografi"
level: orta
short: "Bazı ispat sistemlerinin başlangıçta ürettiği ve sonrasında yok edilmesi gereken gizli değere dayanan kurulum aşaması."
related: [zk-snark, zk-stark, groth16, plonk, kzg-commitment, zero-knowledge-proof-zkp]
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

Bazı [[zk-snark|SNARK]] sistemleri çalışmaya başlamadan önce bir dizi açık parametreye ihtiyaç duyar. Bu parametreler havadan üretilmez: arkalarında gizli bir rastgele sayı vardır ve parametreler bir kez hesaplandıktan sonra o sayının **yok edilmesi** gerekir.

Sayı yok edilmezse, onu elinde tutan kişi yanlış iddialar için geçerli görünen kanıtlar üretebilir. Doğrulayan taraf bu kanıtı sahtesinden ayırt edemez; kontrolden geçer, çünkü matematiksel olarak kusursuzdur. Sektörde bu gizli sayıya **toksik atık** denir.

Terim Türkçeye yerleşmiş bir karşılıkla çevrilmiyor; "trusted setup" diye kullanılıyor.

## Benzetme

Bir darphanede üretimi başlatmak için hazırlanan kalıp gibi. Kalıp işini gördükten sonra kırılmalıdır. Kırılmazsa, onu saklayan kişi istediği kadar para basar ve bastığı para sahte değildir — her kontrolden geçer, çünkü gerçeğiyle aynı kalıptan çıkmıştır. Tehlike kalıbın kullanılmasında değil, var olmaya devam etmesindedir.

## Nasıl çalışır?

Riski tek kişiye bırakmamak için parametreler bir **tören** (ceremony) ile üretilir. Yüzlerce, bazen binlerce katılımcı sırayla parametrelere kendi rastgeleliğini ekler ve kendi payını imha eder.

Kritik nokta şudur: toksik atığı geri elde etmek için **bütün** katılımcıların paylarını birleştirmesi gerekir. Yani tek bir katılımcı bile dürüst davranıp payını gerçekten sildiyse, kalanların hepsi anlaşsa dahi sahte kanıt üretemez. Güvenmen gereken şey "herkes dürüsttü" değil, "içlerinden en az biri dürüsttü" olur.

Kurulumlar ikiye ayrılır. [[groth16|Groth16]] gibi sistemler her devre için ayrı bir kurulum ister. [[plonk|PLONK]] gibi sistemler ise **evrensel** ve **güncellenebilir** bir kurulum kullanır: aynı kurulum birçok devreye hizmet eder ve sonradan yeni katılımcılar eklenerek güçlendirilebilir.

## Dikkat

Bir töreni dışarıdan denetleyemezsin. Katılımcının payını gerçekten sildiğini kanıtlayan bir yöntem yoktur; katılımın kaydı tutulur ama imhanın kaydı tutulamaz. Bu yüzden güvence matematiksel değil **usule ve katılımcı çeşitliliğine** dayanır.

İkinci ayrıntı sık karıştırılır: toksik atık ele geçse bile bu, geçmişte üretilmiş kanıtların gizliliğini bozmaz. Kırılan şey sağlamlıktır — yani sahte kanıt üretilebilir hâle gelir.

Kurulum varsayımını hiç istemeyen sistemler de vardır; [[zk-stark|STARK'ların]] en çok öne çıkan özelliği tam olarak budur.
