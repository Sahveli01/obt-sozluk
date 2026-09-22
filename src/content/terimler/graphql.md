---
term: "GraphQL"
tr: ""
aliases: []
category: web
subcategory: "API'ler"
level: orta
short: "İsteği yapan tarafın hangi alanları istediğini tek bir sorguda tarif ettiği, cevabın da tam o biçimde döndüğü API sorgu dili."
related: [api, rest-api, endpoint, subgraph, indexer, query]
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

GraphQL, [[api|API]]'ler için bir sorgu dilidir. [[rest-api|REST]]'te her adresin neyi döndüreceğine sunucu önceden karar verir; GraphQL'de bu kararı isteği yapan taraf verir. İstemci — yani kullanıcının önündeki program — hangi alanları istediğini yazar, sunucu tam o alanları döndürür, fazlasını değil.

Facebook içinde geliştirildi ve 2015'te açık kaynak olarak yayımlandı.

## Nasıl çalışır?

Bir GraphQL servisinin tek bir [[endpoint|uç noktası]] vardır; ne istendiği adreste değil, isteğin gövdesindeki sorguda yazar.

Servis bir şema yayımlar: hangi tipler var, her tipin hangi alanları var, alanlar hangi tipte. Sorgu bu şemaya göre doğrulanır, yani yanlış yazılmış bir alan daha sunucuya iş yaptırmadan hata verir. Şema aynı zamanda belge yerine de geçer.

Kazanç iki yerde görünür: gereksiz alan gelmediği için az veri, ilişkili veriler tek sorguda toplanabildiği için az istek. Bedeli sunucu tarafındaki karmaşıklıktır — çok derin ya da çok pahalı bir sorgu sunucuyu zorlayabileceği için sorgu derinliği ve maliyeti sınırlanır.

Blockchain tarafında tanıdık gelecektir: zincir verisini okunabilir hâle getiren [[subgraph|subgraph]] ve benzeri [[indexer|indeksleyici]] servisleri sorgularını genellikle GraphQL ile sunar.

## Örnek

```graphql
query {
  transfers(first: 5, orderBy: timestamp) {
    id
    from
    value
  }
}
```

Cevap sorgunun şeklini birebir taşır: beş transfer, her birinde yalnızca istenen üç alan. `to` alanını istemediğin için cevapta yer almaz.

## Dikkat

"REST mi GraphQL mi daha iyi" sorusunun cevabı yok; doğru soru "ne zaman hangisi". Verinin ekranda çok farklı bileşimlerle kullanıldığı arayüzlerde GraphQL istek sayısını belirgin biçimde düşürür. Az sayıda, basit kaynağı olan bir servis ise REST ile daha az parça ve daha az bakımla yürür.

Tek uç nokta ve gövdeye yazılan [[query|sorgu]], adrese göre çalışan önbelleklemeyi de zorlaştırır; GraphQL kullanan projeler önbelleği çoğunlukla istemci tarafındaki kütüphanelere bırakır.
