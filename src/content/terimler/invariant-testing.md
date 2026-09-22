---
term: "Invariant Testing"
tr: ""
aliases: []
category: guvenlik
subcategory: "Güvenlik test yöntemleri"
level: ileri
short: "Sistemde her zaman doğru kalması gereken koşulları yazıp rastgele işlem dizileriyle bunları zorlayan test yöntemi."
related: [fuzzing, echidna, forge, formal-verification, smart-contract-audit]
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

Değişmez (invariant), sistem ne yaparsa yapsın bozulmaması gereken bir cümledir: "toplam arz, bütün bakiyelerin toplamına eşit kalmalı", "kasanın varlığı, kullanıcılara olan borcundan az olamaz". Değişmez testi de bu cümleyi yazıp aracı onu bozmaya kışkırtmaktır.

[[fuzzing|Fuzzing]] ile farkı kapsamıdır. Fuzz testi tek bir işlevi rastgele argümanlarla çağırır; değişmez testi rastgele işlem **dizileri** üretir — yatır, çek, devret, tekrar yatır — ve her adımdan sonra cümlenin hâlâ doğru olup olmadığına bakar. Gerçek açıkların çoğu tek bir çağrıda değil, çağrıların sırasında saklanır.

İngilizcesi kullanılıyor; "değişmez testi" diye anıldığı olsa da yerleşik bir Türkçe karşılığı yok.

## Benzetme

Dükkânın gün sonu kasa sayımı gibi. Gün boyunca ne satıldığı, kaç iade alındığı, kimin vardiya devrettiği tek tek izlenmez; akşam tek bir cümle kontrol edilir: kasadaki para, devreden artı satışlar eksi iadelere eşit olmalı. Tutmuyorsa bir yerde bir şey olmuştur ve aramaya değer. İşin zor tarafı sayım değil, o cümleyi doğru kurmaktır — iadeleri formüle koymayı unutan bir dükkân her akşam boşuna alarm verir.

## Nasıl çalışır?

Değişmezi koda yazarsın: doğru/yanlış döndüren bir işlev ya da `assert` içeren bir kontrol. Araç sözleşmenin dışa açık işlevlerini rastgele sırayla, rastgele argümanlarla ve rastgele adresler adına çağırır; her çağrıdan sonra değişmezi sınar. Bir ihlal bulduğunda diziyi küçültür ve aynı ihlali üreten en kısa çağrı sırasını verir.

Ham rastgelelik çoğu zaman verimsizdir: çağrıların büyük kısmı ilk satırda geri döner ve sistem hiç ilginç bir duruma girmez. Bu yüzden araç genellikle doğrudan sözleşmeye değil, çağrıları makul aralıklara oturtan bir ara katmana yöneltilir ([[echidna|Echidna]], [[forge|Forge]]).

## Örnek

```solidity
contract Degismez {
    uint256 public toplamArz;
    address[] internal sahipler;
    mapping(address => uint256) public bakiye;

    // Hangi işlem dizisi koşarsa koşsun bu doğru kalmalı:
    function invariant_arzBakiyelereEsit() public view returns (bool) {
        uint256 toplam;
        for (uint256 i = 0; i < sahipler.length; i++) {
            toplam += bakiye[sahipler[i]];
        }
        return toplam == toplamArz;
    }
}
```

## Dikkat

Bu yöntemde riski taşıyan şey araç değil, senin yazdığın cümledir. Fazla gevşek bir değişmez — "toplam arz sıfırdan büyük olmalı" — milyonlarca koşuda hiç bozulmaz ve sana bozulmadığını her seferinde söyler. Yeşil rapor birikir, kapsanan şey hiçbir şeydir.

Aynı tehlike ara katmanda da var. Çağrıları daraltırken saldırının ihtiyaç duyduğu yolu kapatırsan — o işlevi hiç çağırmaz, o adresi hiç kullanmazsan — araç aradığın hatayı tanımı gereği bulamaz. Testin gücü, ulaşabildiği durumlar kadardır.

Bir değişmezin geçmesi kanıt değildir; yalnızca denenen dizilerde bozulmadığını gösterir. Kanıt istiyorsan yöntem değişir ([[formal-verification|biçimsel doğrulama]]).
