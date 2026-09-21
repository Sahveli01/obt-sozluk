---
term: "Memory (AI)"
tr: ""
aliases: []
category: yapay-zeka
subcategory: "Prompt ve kullanım"
level: orta
short: "Modelin tek bir konuşmanın ötesine taşınan, sonraki oturumlarda bağlama geri yüklenen bilgisi."
related: [context-window, context-compaction, retrieval-augmented-generation-rag, ai-agent, vector-database]
disambiguation: [memory-evm]
tags: []
status: taslak
reviewedBy: []
dateSensitive: false
sources: []
added: 2026-09-21
updated: 2026-09-22
---

## Nedir?

Dil modelleri varsayılan olarak unutkandır: her istek kendi içinde kapalıdır ve model yalnızca o istekte önüne konan metni görür. Dünkü konuşmayı hatırlıyormuş gibi davranıyorsa, birileri o konuşmayı saklayıp bugün ona geri vermiştir.

"Memory" işte bu düzeneğin adıdır. Uygulama, konuşmalardan kalıcı olması gerekeni ayrı bir yerde tutar ve yeni bir oturum başlarken ilgili kısmı bağlamın içine yerleştirir. Yani hatırlama modelin içinde değil, çevresinde gerçekleşir. Türkçede "hafıza" denebilirdi ama aynı kelime EVM'deki memory için de kullanılıyor; karışıklığı önlemek adına İngilizcesi tercih ediliyor.

## Benzetme

Veterinerdeki aşı karnesi gibi. Hayvan her gelişinde geçmişini anlatamaz; karne anlatır. Bilgi hayvanın kendisinde değil, dosyasındadır ve dosyayı masaya koyan başkasıdır.

## Nasıl çalışır?

Üç adımdan oluşur. Önce neyin saklanacağına karar verilir: tercihler, alınmış kararlar, değişmeyen olgular saklanır; o ana özgü ayrıntılar saklanmaz. Sonra bir yerde tutulur — düz bir dosya, bir [[database|veri tabanı]] ya da anlamsal arama gerekiyorsa bir [[vector-database|vektör veri tabanı]]. Son adımda ilgili parça geri yüklenir: ya her oturuma sabit bir not bloğu olarak konur, ya da soruya göre aranıp getirilir. İkinci yöntem mekanizma olarak [[retrieval-augmented-generation-rag|RAG]] ile aynıdır.

## Dikkat

Aynı kelime [[memory-evm|EVM]] tarafında tam tersini anlatır: orada memory, işlem bitince silinen geçici çalışma alanıdır — hatırlamanın değil, unutmanın adıdır.

Memory'yi [[context-compaction|bağlam sıkıştırma]] ile de karıştırma: biri neyin kalıcı olarak saklanacağına, diğeri dolan pencerede neyin atılacağına karar verir.

Yanlış kaydedilmiş bir not kalıcı bir hataya dönüşür ve modelin her cevabına sinsice sızar; kayıtlar görülebilir, düzeltilebilir ve silinebilir olmalı. Kişisel veri saklıyorsan rıza ve saklama süresi senin sorumluluğundur.
