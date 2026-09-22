---
term: "Rarity"
tr: "Nadirlik"
aliases: []
category: nft
subcategory: ""
level: orta
short: "Bir NFT'nin özelliklerinin koleksiyon içinde ne kadar seyrek göründüğünü anlatan, hesaplanmış bir sayı."
related: [trait-nft, nft-collection, generative-art, nft-metadata, edition, one-of-one-1-1]
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

Nadirlik, bir parçanın taşıdığı özelliklerin koleksiyonun tamamı içinde ne sıklıkta göründüğünün ölçüsüdür. Kaynağı tek bir yerdir: bütün parçaların [[nft-metadata|metadata]] dosyalarındaki özellik listeleri toplanır, her seçeneğin kaç parçada geçtiği sayılır ve buradan parça başına bir skor çıkarılır.

Şunu baştan söylemek gerekir: nadirlik bir özelliğin dağılımından çıkarılan bir sayıdır, bir fiyat tahmini değildir. Bir seçeneğin kaç parçada geçtiğini söyler; başka bir şey söylemez.

## Nasıl çalışır?

Hesabın çekirdeği basittir. Bir seçeneğin sıklığı, o seçeneği taşıyan parça sayısının toplam parça sayısına bölümüdür. Diyelim ki bin parçalık bir [[nft-collection|koleksiyonda]] "mavi arka plan" üç yüz parçada geçiyor; sıklığı 0,3'tür.

Parçanın skoru genellikle özelliklerinin sıklıklarının tersleri toplanarak bulunur: seyrek geçen bir seçenek skoru çok, sık geçen bir seçenek az yükseltir. Ayrıntı ise hesaplayana göre değişir. Kimi hesap parçanın kaç özelliği olduğunu da katar, kimi iki seçeneğin birlikte görülme sıklığına bakar, kimi belirli özellikleri hiç saymaz. Bu yüzden aynı parçanın sırası, hangi tabloya baktığına göre değişir.

Kolayca gözden kaçan bir nokta var: bir özelliğin **yokluğu** da bir seçenektir. Parçaların çoğunda şapka varsa şapkasız olmak seyrek bir durumdur, ama çoğu hesap bunu ancak metadata'da açıkça `"Şapka": "Yok"` yazıyorsa görebilir.

## Dikkat

Nadirlik sıralaması bir ölçüm değil, bir yorumdur. Hangi özelliklerin sayılacağına ve nasıl ağırlıklandırılacağına karar veren kişi sonucu da belirlemiş olur; iki farklı araç aynı koleksiyon için farklı sıralamalar verebilir.

Üstelik sıklıklar keşfedilen değerler değildir. [[generative-art|Üretken]] bir koleksiyonda oranları koleksiyonu üreten taraf baştan yazar — yani nadirlik bulunan değil, tasarlanan bir şeydir. Bir [[trait-nft|trait]]'in seyrek olması, o parça hakkında bu sayının ötesinde hiçbir şey garanti etmez.
