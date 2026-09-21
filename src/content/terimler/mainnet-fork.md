---
term: "Mainnet Fork"
tr: ""
aliases: ["mainnet forklama"]
category: araclar
subcategory: "Blockchain geliştirici araçları"
level: orta
short: "Gerçek ağın belirli bir andaki durumunu yerel zincire kopyalayıp orada serbestçe deneme yapma yöntemi."
related: [local-blockchain, anvil, mainnet, integration-test, tenderly, rpc-provider]
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

Mainnet fork, [[mainnet|ana ağın]] belirli bir andaki durumunu kendi makinendeki zincire yansıtarak çalışma yöntemidir. Böylece gerçekten yayında olan sözleşmelerle — bir borsayla, bir ödünç protokolüyle, bir fiyat kaynağıyla — uydurma taklitleri değil, gerçek kodlarıyla denemeler yaparsın. Harcadığın para sahtedir, dokunduğun sözleşmeler gerçektir.

Adındaki "fork" kelimesi burada bir ağ bölünmesini değil, kopyalamayı anlatır; bu yüzden [[fork-blockchain|çatallanma]] ile karıştırılmamalıdır ve Türkçede yerleşmiş bir karşılığı olmadığı için İngilizce hâliyle kullanılır.

## Nasıl çalışır?

Yerel düğüme bir [[rpc-provider|RPC adresi]] ve istersen bir blok numarası verirsin. Düğüm bütün zinciri indirmez; bir bakiyeye, bir sözleşme koduna ya da bir depolama alanına ilk kez ihtiyaç duyduğunda o parçayı uzaktaki düğümden ister ve yanında saklar. Bu yüzden ilk çağrılar yavaş, sonrakiler hızlıdır.

Yazdığın her şey yerelde kalır: sen bakiye değiştirdiğinde, işlem gönderdiğinde ya da zinciri sıfırladığında gerçek ağda hiçbir şey olmaz.

Tipik kullanımlar: gerçek protokollerle [[integration-test|bütünleşme testi]] yazmak, geçmişte olmuş bir saldırıyı olduğu bloktan yeniden canlandırmak, bir yükseltmenin mevcut durum üzerinde ne yapacağını görmek.

## Dikkat

Kopya dondurulmuş bir andır. Gerçek ağdaki diğer aktörler senin işlemine tepki vermez: fiyat kaynağı güncellenmez, tasfiye botları çalışmaz, sıralamada kimse seni geçmez. Fork üzerinde kârlı görünen bir strateji gerçek ağda aynı sonucu vermeyebilir.

Eski bir bloktan fork almak, karşı tarafta o bloğun durumunu hâlâ tutan bir düğüm gerektirir; sıradan bir uç nokta bunu veremeyebilir. Ayrıca her fork, ücretini birinin ödediği bir RPC hizmetine çok sayıda istek gönderir.
