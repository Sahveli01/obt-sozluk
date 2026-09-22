---
term: "Storage Collision"
tr: "Depolama çakışması"
aliases: ["depolama çakışması", "storage çakışması"]
category: guvenlik
subcategory: "Sözleşme açıkları"
level: ileri
short: "Aynı depolama slotunun iki farklı anlamda kullanılması; zincirdeki veri yerinde durur, onu okuyan kod anlamını yanlış bilir."
related: [storage-slot, proxy-contract, upgradeable-contract, delegatecall, storage-evm, delegatecall-vulnerability]
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

Zincirdeki veri etiketsizdir. Bir [[storage-slot|slotun]] numarası vardır, tipi ya da anlamı yoktur; "3 numaralı slot bir bakiyedir" bilgisi yalnızca **kodun içinde** durur. İki farklı kod aynı slot için farklı şey düşünüyorsa ortada bir çakışma vardır ve kimse bunu hata olarak bildirmez: yazma başarılı olur, okuma bir değer döndürür, işlem geri alınmaz.

İki yerde çıkar.

**Yükseltme sırasında.** Yeni sürümde değişkenlerin sırası değişirse, araya bir değişken girerse ya da biri silinirse slot numaraları kayar — ama zincirdeki veri yerinde kalır. Yeni kod eski veriyi yanlış anlamda okumaya başlar: bir bakiye adres, bir adres sayı olur.

**Proxy ile mantık sözleşmesi arasında.** [[proxy-contract|Proxy]] kendi işi için de veri tutar (mantık sözleşmesinin adresi, yönetici). Bu değerler mantık sözleşmesinin değişkenleriyle aynı numaralara düşerse, [[delegatecall|`delegatecall`]] ile çalışan mantık kodu proxy'nin yönetici adresini sıradan bir değişken sanıp üzerine yazar.

## Nasıl çalışır?

Derleyicinin bu hatayı yakalaması mümkün değildir: iki sözleşme ayrı ayrı derlenir ve hiçbiri diğerinin düzenini görmez ([[storage-evm|storage]]).

Savunma bir disiplin meselesidir. Var olan değişkenlerin sırası, tipi ve boyutu asla değiştirilmez; artık kullanılmayan bir değişken silinmez, yerinde bırakılır. Yeni alanlar **yalnızca listenin sonuna** eklenir. İleride eklenecekler için baştan boşluk ayırmak (`uint256[50]` gibi bir dolgu dizisi) yerleşik bir kalıptır.

Proxy tarafında ise çözüm slot numaralarını sıradan almamaktır: mantık adresi ve yönetici, çarpışması pratikte imkânsız olacak biçimde hesaplanmış sabit slotlarda saklanır. Standart proxy kalıpları bunu zaten yapar. Son olarak, iki sürümün düzenini derleme zamanında karşılaştıran araçlar vardır ve yükseltme akışının parçası hâline getirilirler.

## Örnek

```solidity
// AÇIK: yükseltmede araya bir alan girdi, bakiye başka bir slota kaydı
contract V1 { address sahip; uint256 bakiye; }
contract V2 { address sahip; uint256 ucret; uint256 bakiye; }
```

```solidity
// DÜZELTİLMİŞ: yeni alan sona eklendi, eski slotlar yerinde kaldı
contract V1 { address sahip; uint256 bakiye; }
contract V2 { address sahip; uint256 bakiye; uint256 ucret; }
```

## Dikkat

En aldatıcı yanı, hatanın testlerde görünmemesidir. Yeni sürümü boş bir kurulumla dağıtıp denersen her şey doğru çalışır, çünkü kayan slotlarda henüz eski veri yoktur. Çakışma ancak **var olan veriyle** yükseltildiğinde ortaya çıkar; yani ilk kurbanı üretimdeki asıl sözleşmedir. Yükseltme provası, zincirdeki gerçek durumun bir kopyası üzerinde yapılır.

Aynı mekanizma [[delegatecall-vulnerability|delegatecall açığının]] da üçüncü biçimidir; oradaki fark, düzenin kazara değil kasten uyuşmamasıdır.
