---
term: "Selfdestruct"
tr: ""
aliases: []
category: akilli-sozlesmeler
subcategory: "Düşük seviye çağrılar"
level: orta
short: "Bir sözleşmenin kendini zincirden silmesi ve bakiyesini başka bir adrese aktarması için konmuş, davranışı sonradan daraltılan komut."
related: [receive-function, access-control-vulnerability, create2, contract-address, smart-contract, upgradeable-contract]
disambiguation: []
tags: []
status: taslak
reviewedBy: []
dateSensitive: true
sources: []
added: 2026-09-21
updated: 2026-09-22
---

## Nedir?

`selfdestruct`, bir [[smart-contract|akıllı sözleşmenin]] kendisini zincirden silmesi için konmuş komuttur. Çağrıldığında sözleşmenin bütün ETH'i, parametre olarak verilen adrese aktarılır.

Yıllarca "sözleşmenin kapatma düğmesi" diye anlatıldı. Bugün durum daha dardır: komut çoğu durumda artık kodu silmez, yalnızca parayı gönderir. Bu yüzden yeni yazılan sözleşmelerde kullanılması önerilmez, derleyici de uyarı verir.

Bir anahtar kelime olduğu için çevrilmez.

## Benzetme

Kapanan bir ofisten çıkarken kasada kalan nakdi yan ofisin kapısının altından içeri atmak gibi. İki şey birden olur: senin kapın bir daha açılmaz, komşunun odasında ise kimsenin elini sürmediği, hiçbir deftere geçmemiş bir para belirir.

## Nasıl çalışır?

Yazıldığı tarih itibarıyla `selfdestruct` yalnızca tek bir durumda gerçekten siler: sözleşme hangi işlemde oluşturulduysa komut da aynı işlemin içinde çağrılmışsa. O zaman kod, depolama ve hesap ortadan kalkar. Diğer bütün durumlarda tek yaptığı şey bakiyeyi hedef adrese göndermektir; kod [[contract-address|adresinde]] durmaya ve çalışmaya devam eder. Bu daraltma protokole EIP-6780 ile girdi.

Gönderme biçimi de sıra dışıdır. ETH hedefe, hedefin kodu **hiç çalıştırılmadan** ulaşır: ne bir kontrol yapılır, ne bir olay yayımlanır, ne de alıcı sözleşme durumu fark eder. Yalnızca bakiye artar.

## Dikkat

Üç şey.

Birincisi, bir sözleşmeyi yok etmek ona bağlanmış herkesi kırar — üstelik sessizce. Kodu silinmiş bir adrese yapılan düşük seviye çağrı hata bile vermez, "başarılı" döner. Karşı taraf bir süre boşluğa konuştuğunu fark etmeyebilir.

İkincisi, bu komut yetkisiz bırakılmışsa sözleşmeyi herkes sildirebilir ([[access-control-vulnerability|erişim kontrolü açığı]]). Geçmişte, açık kalmış bir `selfdestruct` yüzünden büyük fonların erişilemez hâle geldiği olaylar yaşandı. Aynı sebeple, silinebilen bir sözleşme [[create2|`CREATE2`]] ile aynı adrese farklı bir kodla yeniden dağıtılabiliyordu; yukarıdaki daraltma bu yolu da büyük ölçüde kapattı.

Üçüncüsü ve en sık atlanan: bu yolla gelen ETH, alıcının hiçbir satırını çalıştırmadan bakiyeyi artırır. "Bakiyem tam olarak benim saydığım kadardır" varsayımına dayanan sözleşmeler bu yüzden kırılgandır. Gelen parayı [[receive-function|`receive`]] içinde sayıp o sayıya güvenmek yerine, bakiyeyi ayrı bir değişkende tutmak ve kararları o değişkene göre vermek gerekir.
