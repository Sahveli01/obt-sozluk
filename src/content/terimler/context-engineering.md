---
term: "Context Engineering"
tr: ""
aliases: []
category: yapay-zeka
subcategory: "Prompt ve kullanım"
level: ileri
short: "Modelin bir işi yaparken bağlam penceresinde tam olarak neyin bulunacağını tasarlama işi."
related: [prompt-engineering, context-window, retrieval-augmented-generation-rag, context-compaction, memory-ai, prompt-caching]
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

Üç kavram iç içe geçiyor, sınırı çizmekte fayda var: [[prompt]] modele giden metnin kendisidir; [[prompt-engineering|prompt engineering]] o metni iyileştirme uğraşıdır; context engineering ise modelin gördüğü **bütün** bağlamı tasarlama işidir. Sistem talimatı, araç tanımları, getirilen belgeler, önceki turlar, hatırlanan notlar, araç çıktıları — hepsi aynı pencereye girer ve hepsi birbiriyle yer için yarışır.

Türkçeye "bağlam mühendisliği" diye çevrilebiliyor ama alanda İngilizcesi kullanılıyor; burada da öyle bırakıldı.

## Benzetme

Ameliyat öncesi masaya hangi aletlerin konacağına karar vermek gibi. Hepsini yığmak hazırlıklı olmak değildir; cerrahın doğru aleti bulma süresini uzatır. Az ve yerinde olan, çok ve dağınık olandan iyidir.

## Nasıl çalışır?

[[context-window|Bağlam penceresi]] sınırlı, ücretli ve dikkatin dağıldığı bir alandır. Tasarım kararları hep aynı sorular etrafında döner:

- Ne sabit kalacak? Sabit ve başta duran kısım [[prompt-caching|önbelleğe]] girebilir, ucuzlar.
- Ne sorguya göre gelecek? İlgili belgeler çalışma anında getirilir ([[retrieval-augmented-generation-rag|RAG]]).
- Ne oturumlar arasında taşınacak? Kalıcı bilgiler ayrı tutulur ([[memory-ai|memory]]).
- Pencere dolunca ne atılacak? Eski turlar özetlenir ([[context-compaction|bağlam sıkıştırma]]).
- Hangi araçlar görünecek? Her araç tanımı yer kaplar ve seçimi zorlaştırır ([[tool-use-function-calling|tool use]]).

## Dikkat

"Ne kadar çok bağlam o kadar iyi" yanlıştır. İlgisiz metin modeli yanlış yöne çeker, uzun bağlamda ortada kalan bilgiler gözden kaçabilir ve her fazladan token gecikme ile maliyet yazar. Bir ajan beklenmedik biçimde davranıyorsa önce prompt'u değil, o an penceresinde ne olduğunu incele.
