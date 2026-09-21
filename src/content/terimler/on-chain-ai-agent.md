---
term: "On-chain AI Agent"
tr: ""
aliases: ["on chain ai agent", "zincir ustu ai ajani"]
category: yapay-zeka
subcategory: "Yapay zekâ ve blockchain"
level: orta
short: "Kararlarını zincir dışında veren, ama sonucu kendi cüzdanından işlem göndererek zincire yazan yapay zekâ ajanı."
related: [ai-agent, decentralized-ai, ai-oracle, off-chain, smart-contract, verifiable-inference]
disambiguation: []
tags: []
status: taslak
reviewedBy: []
dateSensitive: true
sources: []
added: 2026-09-21
updated: 2026-09-22
---

## Nedir?

Zincir üstü AI ajanı, bir blockchain üzerinde kendi adına işlem gönderebilen bir [[ai-agent|AI ajanıdır]]: kendi [[private-key|özel anahtarı]] ve cüzdanı vardır, bir hedefi vardır ve o hedefe ulaşmak için ne zaman işlem göndereceğine kendi karar verir.

Adındaki "zincir üstü" kısmı yanıltıcıdır. Ajanın düşünen parçası, yani modelin kendisi, zincirde çalışmaz. Yazıldığı tarih itibarıyla bir dil modelinin çıkarımını akıllı sözleşme içinde çalıştırmak pratikte mümkün değildir; blockchain'ler bu iş için tasarlanmamıştır ve gereken hesap gücü oraya sığmaz.

## Benzetme

Müzayede salonunda telefonla teklif veren bir alıcıyı düşün. Düşünme, hesap ve karar telefonun öbür ucundadır; salonda görünen tek şey tekliflerin sırayla kayda geçmesidir. Zincir de ajanın düşüncesini değil, yalnızca gönderdiği işlemi görür.

## Nasıl çalışır?

Kurulum ikiye ayrılır. Model ve karar mantığı [[off-chain|zincir dışında]], sıradan bir sunucuda çalışır. Zincirde duran şey ajanın cüzdanı ve etkileşime girdiği [[smart-contract|akıllı sözleşmelerdir]].

Ajan zincirden veri okur — bakiye, fiyat, bir oylamanın durumu — buna göre bir karar üretir, işlemi imzalar ve ağa yollar. İşlem bir kez yazıldığında herkes görebilir ve geri alınamaz.

Zincirin ajana katabileceği şey karar değil, sınırdır: cüzdana harcama limiti konabilir, yalnızca belirli sözleşmelere izin verilebilir ya da büyük işlemler için ikinci bir imza şartı aranabilir. Böylece ajan yine kötü bir karar verebilir, ama verebileceği zararın tavanı önceden bellidir.

## Dikkat

En sık yapılan hata, ifadeyi "model zincirde çalışıyor" diye okumaktır. Çalışmıyor; zincirde olan tek şey ajanın imzasıdır. Bir çıktının gerçekten o modelden geldiğini göstermek ayrı bir problemdir ve [[verifiable-inference|doğrulanabilir çıkarım]] başlığında ele alınır.

İkinci nokta sorumluluktur. Zincirdeki işlem geri alınamadığı için ajanın hatalı kararı da düzeltilemez; bu, [[decentralized-ai|merkeziyetsiz yapay zekâ]] tartışmasının en somut riskidir.

Terimin yerleşik bir Türkçe karşılığı yok: "zincir üstü" kısmı Türkçeleşmiş olsa da "AI agent" sektörde İngilizce kullanılıyor.
