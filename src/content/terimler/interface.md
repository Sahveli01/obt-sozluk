---
term: "Interface"
tr: "Arayüz"
aliases: []
category: programlama
subcategory: "Paradigmalar ve tasarım"
level: orta
short: "Bir tipin hangi işlemleri sunmak zorunda olduğunu söyleyen, bu işlemlerin nasıl yapıldığını söylemeyen tanım."
related: [polymorphism, inheritance, class, abstract-contract, application-binary-interface-abi]
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

Arayüz, bir tipin hangi işlemleri sunmak zorunda olduğunu söyleyen ama bu işlemlerin nasıl yapılacağına karışmayan tanımdır. İçinde gövde yoktur; yalnızca metot adları, aldıkları değerler ve döndürdükleri tipler bulunur.

Faydası şudur: kodunun geri kalanı somut bir [[class|sınıfa]] değil, bu listeye dayanır. "Bana `ode` metodu olan bir şey ver" dersin; karşıya kredi kartı da gelse, cüzdan da gelse kodun değişmez. Yeni bir ödeme yolu eklemek, var olan kodu açmayı gerektirmez.

## Benzetme

İş ilanındaki "aranan nitelikler" listesi gibi. İlan kimin işe alınacağını söylemez; yalnızca gelecek kişinin şu üç işi yapabiliyor olması gerektiğini söyler. Kim gelirse gelsin, hangi okuldan mezun olursa olsun, listedeki işleri yapabildiği sürece ekibin geri kalanı çalışma biçimini değiştirmez. Listedeki bir maddeyi karşılamayan aday ise görüşmeye hiç gelmeden elenir.

## Nasıl çalışır?

Bir sınıf arayüzü "uyguladığını" bildirir ve listedeki bütün metotları yazmak zorunda kalır. Eksik bırakırsa kod derlenmez; yani hata, program çalışmadan önce ortaya çıkar. Bir sınıf tek bir üst sınıftan türeyebilirken birden çok arayüzü aynı anda uygulayabilir.

Aşağıdaki örnek TypeScript ile yazıldı, çünkü Python'da `interface` diye bir anahtar kelime yoktur; Python'da aynı iş `Protocol` ya da soyut sınıflarla, çoğu zaman da hiç bildirim yapılmadan yürütülür.

## Örnek

```ts
interface Odeyici {
  ode(tutar: number): string;
}

class Kart implements Odeyici {
  ode(tutar: number) { return `${tutar} TL karttan`; }
}

function tahsil(yol: Odeyici) {
  return yol.ode(100);
}

console.log(tahsil(new Kart()));   // 100 TL karttan
```

## Dikkat

Üç ayrı şey aynı kelimeyi paylaşıyor. Buradaki arayüz bir tip tanımıdır. Kullanıcı arayüzü (UI) ekranda gördüğün şeydir. [[application-binary-interface-abi|ABI]] ise bir sözleşmenin fonksiyonlarının dışarıdan nasıl çağrılacağını anlatan makine okunur tanımdır — Solidity'de `interface` anahtar kelimesiyle yazılan sözleşme tanımı ile ABI birbirine çok karıştırılır: ilki kaynak koddur, ikincisi derlemeden çıkan JSON.

Bir de her yere arayüz koymak bedelsiz değildir. Tek bir uygulaması olan ve yakında ikincisi gelmeyecek bir arayüz, okuyana fazladan bir dosya ve fazladan bir sıçrama olarak döner.
