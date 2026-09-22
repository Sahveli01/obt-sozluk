---
term: "Smart Pointer"
tr: "Akıllı işaretçi"
aliases: ["akıllı işaretçi"]
category: programlama
subcategory: "Rust kavramları"
level: ileri
short: "Bir değeri gösterirken sahiplik, sayaç ya da erişim denetimi gibi fazladan bir sorumluluk da taşıyan tip."
related: [pointer, ownership, memory-management, reference, stack-and-heap]
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

Akıllı işaretçi, bir değeri göstermekle kalmayıp yanında bir sorumluluk da taşıyan tiptir. Sade bir [[pointer|işaretçi]] yalnızca adres tutar; akıllı olanı buna sahiplik, bir sayaç ya da erişim denetimi ekler ve kapsam bittiğinde gereken temizliği kendi yapar.

Rust'ta üçü sık geçer: `Box<T>` değeri [[stack-and-heap|heap]]'e koyar ve tek sahip olur; `Rc<T>` aynı değeri birden çok sahibe açar; `RefCell<T>` ödünç kontrolünü çalışma anına erteler.

## Benzetme

Daireyi paylaşan ev arkadaşları gibi. Ev tek bir kişiye değil, o an içeride yaşayanların hepsine bağlıdır; biri taşınınca ev boşalmaz. Yalnızca son çıkan kişi ışığı söndürür ve anahtarı teslim eder. Kimsenin "acaba içeride kalan var mı" diye kapı kapı dolaşması gerekmez; sayı zaten tutuluyordur.

## Nasıl çalışır?

`Rc`, Python'un referans saymasına çok benzer: her `Rc::clone` sayacı bir artırır, her düşüş bir azaltır, sıfıra inince değer temizlenir. Fark, CPython'da bunun her nesne için ve gizlice yapılması; Rust'ta ise yalnızca `Rc` yazdığın yerde, açıkça istediğin için olmasıdır.

`RefCell` ise [[borrowing-rust|ödünç alma]] kurallarını kaldırmaz, denetimini çalışma anına taşır. `borrow_mut()` çağırdığında kuralı çiğnersen program derlenir ama çalışırken panikler. Bu takas bilinçli yapılır: derleyiciye ispatlayamadığın ama doğru olduğunu bildiğin durumlarda kullanılır.

İş parçacıkları arasında `Rc` yerine sayacı güvenli biçimde artıran `Arc` kullanılır; karşılığında biraz daha yavaştır.

## Örnek

```rust
use std::cell::RefCell;
use std::rc::Rc;

fn main() {
    let kutu = Box::new(42);              // heap'te tek sahip
    println!("{}", *kutu);

    let paylasilan = Rc::new(RefCell::new(vec![1, 2]));
    let ikinci = Rc::clone(&paylasilan);  // sayaç 2 oldu
    ikinci.borrow_mut().push(3);          // kontrol çalışma anında
    println!("{:?} {}", paylasilan.borrow(), Rc::strong_count(&paylasilan)); // [1, 2, 3] 2
}
```

## Dikkat

Referans sayma döngüleri temizleyemez: iki nesne birbirini `Rc` ile tutuyorsa sayaç hiç sıfıra inmez ve bellek sızar. Çözüm, bağlardan birini sayacı artırmayan `Weak` ile kurmaktır. CPython'da bu sorunu ayrı bir döngü toplayıcısı üstlenir; Rust'ta sorumluluk sende.

`RefCell` kullanmak derleyiciyi ikna edememenin kestirme yolu değildir. Her `borrow_mut()` çağrısı bir panik ihtimalidir; tasarımı düzelterek çözülebilen bir sorunu buraya taşımak, derleme anındaki güvenceyi gönüllü olarak bırakmak demektir.
