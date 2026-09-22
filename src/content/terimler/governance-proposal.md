---
term: "Governance Proposal"
tr: "Yönetişim önerisi"
aliases: []
category: yonetisim
subcategory: ""
level: orta
short: "Tartışması olgunlaşmış bir fikrin, oylanabilir ve doğrudan yürütülebilir hâle getirilmiş somut metni."
related: [governance-forum, temperature-check, quorum, governor-contract, improvement-proposal-eip-bip]
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

Yönetişim önerisi, bir fikrin "şu değişsin" diye oylanabilecek hâle getirilmiş biçimidir. Fikir ile öneri arasındaki fark somutluktur: öneri, tam olarak neyin hangi değere, hangi adreste değişeceğini yazar. Oy veren kişinin "evet" derken neye evet dediğini tahmin etmesi gerekmez.

Öneri, sürecin başı değil ortasıdır. Öncesinde [[governance-forum|forumda]] tartışma ve çoğu zaman bir [[temperature-check|ön yoklama]] vardır; öneri, o aşamalardan çıkmış metindir.

## Nasıl çalışır?

Olgun bir öneri şunları ayrı ayrı içerir: hangi sorunun çözüldüğü, seçeneklerin neden elendiği, değişikliğin tam teknik karşılığı, beklenen etkisi ve riskleri.

Zincir üstünde oylanacaksa metnin yanında bir de çağrı listesi bulunur: hedef adresler, gönderilecek tutarlar ve çağrılacak fonksiyonlar. Oylanan asıl şey bu listedir; başlık ve gerekçe yalnızca insanlar içindir.

Öneri açmak genelde serbest değildir. Oylamayı gereksiz metinlerle tıkamayı önlemek için açan taraftan asgari bir oy gücü ya da belirli sayıda destekçi istenir. Kayıttan sonra kısa bir bekleme, ardından oy penceresi gelir; pencere kapandığında sonuç [[quorum|yeter sayıya]] ve evet oranına göre belirlenir.

## Dikkat

Metnin anlattığı ile kodladığı işlem her zaman aynı olmayabilir. Zincir üstü bir önerinin asıl içeriği [[calldata|çağrı verisidir]] ve onu okumak başlığı okumaktan zordur. Bu yüzden bir [[governor-contract|governor sözleşmesine]] kaydedilmiş öneriyi bağımsız bir gözün satır satır kontrol etmesi, sürecin en değerli adımlarından biridir.

Bir de kapsam karışıklığı var: yönetişim önerisi bir protokolün kendi parametrelerini ve kasasını ilgilendirir. Ağ katmanındaki değişiklikler oylamayla değil, [[improvement-proposal-eip-bip|iyileştirme önerisi]] süreciyle yürür.
