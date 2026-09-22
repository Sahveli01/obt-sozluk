---
term: "Distributed Denial of Service (DDoS)"
tr: "Dağıtık Hizmet Reddi Saldırısı"
aliases: []
category: guvenlik
subcategory: "Ekonomik ve protokol saldırıları"
level: baslangic
short: "Bir hizmeti binlerce farklı kaynaktan gelen sahte istekle boğup gerçek kullanıcılara kapatma."
related: [denial-of-service-dos, rpc-node, node, rate-limiting, peer-to-peer-p2p, phishing]
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

Her sunucunun bir kapasitesi vardır: saniyede şu kadar istek, şu kadar bağlantı. **DDoS**, o kapasiteyi kasten ve aynı anda binlerce farklı yerden gelen istekle doldurup hizmeti gerçek kullanıcılara kapatmaktır.

İçeri girilmez, veri çalınmaz, kod kırılmaz. Hedef erişimin kendisidir — çalışmayan bir hizmetin güvenli olması kimseyi teselli etmez.

"Dağıtık" kısmı asıl meseledir: tek yerden gelen istekler kapatılabilir, binlerce ayrı bağlantıdan geleni gerçek kullanıcıdan ayırmak zordur.

## Benzetme

Bir şehrin acil çağrı hattını düşün. Hat çalışıyor, görevliler yerinde. Ama aynı dakikada binlerce farklı numaradan asılsız ihbar gelirse, gerçekten yangın çıkan kişi hattı meşgul bulur.

Kimse santrali kırmadı; kapasitesi, ona ulaşması gereken kişiyi dışarıda bırakacak kadar doldu.

## Dikkat

Blok zincirinin kendisi görece dayanıklıdır: [[node|node]]'lar dünyaya dağılmıştır ve işlem göndermek [[gas|gas]] ödemeyi gerektirir. Kırılgan olan, önündeki altyapıdır — [[rpc-node|RPC sağlayıcıları]], web arayüzleri, API'ler. Zincir ayakta olsa bile senin kullandığın kapı kapanabilir.

Savunma katmanlıdır: isteklere üst sınır koymak ([[rate-limiting|hız sınırlama]]), trafiği birden çok sunucuya dağıtmak, anormal trafiği süzen bir servisin arkasına geçmek.

Karıştırma: sözleşme seviyesindeki [[denial-of-service-dos|hizmet reddi]] bir fonksiyonun kalıcı olarak kilitlenmesidir; DDoS ise altyapı seviyesinde kaba trafikle yapılır ve saldırı bittiğinde hizmet geri gelir.

Kullanıcı tarafında: bir uygulama açılmıyor diye telaşla alternatif arama. O anlarda sahte kopya siteler arama sonuçlarının başına çıkar ([[phishing|oltalama]]). Varlıkların zincirde duruyor, arayüz geri gelir.
