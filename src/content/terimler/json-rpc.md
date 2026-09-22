---
term: "JSON-RPC"
tr: ""
aliases: ["jsonrpc"]
category: web
subcategory: "API'ler"
level: orta
short: "Uzaktaki bir programda çalıştırılacak metodu ve parametrelerini JSON olarak yollayan basit çağrı protokolü."
related: [rpc-node, rpc-provider, json, endpoint, websocket, dapp]
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

JSON-RPC, "şu metodu şu parametrelerle çalıştır" demenin çok sade bir yoludur. İstek de cevap da birer [[json|JSON]] nesnesidir; adresin içinde ne istendiğini anlatan bir yapı yoktur, her şey gövdede yazar.

Blockchain geliştiricisi için önemi şudur: cüzdanların, [[dapp|dApp]]'lerin ve kütüphanelerin bir [[rpc-node|düğüm]] ile konuşma biçimi budur. `eth_blockNumber`, `eth_call`, `eth_getBalance` gibi tanıdık adlar birer JSON-RPC metodudur.

## Nasıl çalışır?

Bir istek dört alandan oluşur: protokol sürümü (`jsonrpc`), çağrılacak metot adı (`method`), parametreler (`params`) ve isteği cevabıyla eşleştirmeye yarayan bir kimlik (`id`). Cevapta aynı `id` ile birlikte ya `result` ya da `error` döner.

Aynı adrese onlarca farklı metot gönderilebildiği için [[rest-api|REST]]'in aksine tek bir [[endpoint|uç nokta]] yeter. Pratikte bu adresi ya bir [[rpc-provider|RPC sağlayıcısı]] verir ya da kendi düğümünü çalıştırıp kendin üretirsin.

Protokol taşıyıcıdan bağımsızdır: aynı istek HTTP üzerinden tek seferlik gönderilebileceği gibi, açık kalan bir [[websocket|WebSocket]] bağlantısı üzerinden de yollanabilir.

## Örnek

```json
{
  "jsonrpc": "2.0",
  "method": "eth_blockNumber",
  "params": [],
  "id": 1
}
```

Cevaptaki `result` alanı blok numarasını onaltılık (hex) bir metin olarak taşır, `"0x12c4f1"` gibi. Sayıya çevirme işini kütüphaneler genelde senin yerine yapar; ham istek atıyorsan bu dönüşümü atlamamak gerekir.

## Dikkat

Metot adları protokolün değil, ağın işidir. `eth_` ile başlayanlar Ethereum ve onunla uyumlu ağların sözlüğüdür; başka ağların kendi metot adları vardır. "JSON-RPC destekliyor" cümlesi "aynı metotları destekliyor" demek değildir.

Ayrıca her düğüm her metodu açmaz: eski blokların verisini isteyen ya da ağır çalışan metotlar herkese açık adreslerin çoğunda kapalıdır. Bir çağrının "desteklenmiyor" demesi, metodun var olmadığı anlamına gelmez; o adreste kapalı olduğu anlamına gelir.
