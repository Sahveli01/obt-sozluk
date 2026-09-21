---
term: "Tool Use (Function Calling)"
tr: "Araç kullanımı"
aliases: ["function calling"]
category: yapay-zeka
subcategory: "Prompt ve kullanım"
level: orta
short: "Modele kullanabileceği fonksiyonları tanıtıp hangisini hangi argümanlarla çağıracağını söyletmek."
related: [ai-agent, structured-output, llm-api, model-context-protocol-mcp, human-in-the-loop, prompt-injection]
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

Bir dil modeli tek başına veri tabanına bakamaz, dosya okuyamaz, e-posta gönderemez; yalnızca metin üretir. Tool use, ona "elinin altında şu işleri yapan şu fonksiyonlar var" diye bir liste vermektir. Model işi kendisi yapmaz — hangi fonksiyonun hangi argümanlarla çağrılması gerektiğini söyler. Çağrıyı senin kodun çalıştırır, sonucu konuşmaya geri koyar, model cevabını ona göre yazar. [[ai-agent|AI ajanlarını]] sohbet botundan ayıran temel mekanizma budur.

## Nasıl çalışır?

Döngü şöyle işler: araç tanımları (ad, ne işe yaradığı, parametre şeması) kullanıcı isteğiyle birlikte modele gider → model bir araç çağrısı üretir → kodun aracı çalıştırır → sonuç modele döner → model ya yeni bir çağrı ister ya da nihai cevabı yazar.

Araç tanımları prompt'un parçasıdır. Bu yüzden açıklama metni, kodun içindeki bir yorum satırı değil, modelin okuyacağı kullanım kılavuzudur: ne zaman kullanılacağını ve ne zaman kullanılmayacağını yazmak isabeti ciddi biçimde artırır.

## Örnek

Bir araç tanımı, sağlayıcıdan bağımsız olarak kabaca şu bilgileri taşır:

```json
{
  "name": "siparis_durumu",
  "description": "Sipariş numarasına göre kargo durumunu döndürür.",
  "parameters": {
    "type": "object",
    "properties": {
      "siparis_no": { "type": "string" }
    },
    "required": ["siparis_no"]
  }
}
```

## Dikkat

Model yanlış aracı seçebilir ya da uydurma bir argüman üretebilir; gelen her çağrıyı kendi tarafında doğrula ve yetkilendir ([[structured-output|şema doğrulaması]] burada da geçerlidir). Silme, ödeme, dışarıya mesaj gönderme gibi geri alınamaz işlere [[human-in-the-loop|insan onayı]] koy.

Araç sayısı arttıkça hem seçim zorlaşır hem tanımlar bağlamda yer kaplar. Ayrıca bir aracın döndürdüğü metin de modele girdi olur: dışarıdan gelen içerik [[prompt-injection]] taşıyabilir.
