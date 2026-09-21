---
term: "Zero-shot Prompting"
tr: ""
aliases: ["zero shot"]
category: yapay-zeka
subcategory: "Prompt ve kullanım"
level: orta
short: "Modelden tek bir örnek bile vermeden, yalnızca görevi tarif ederek iş istemek."
related: [prompt, few-shot-prompting, role-prompting, instruction-tuning]
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

Zero-shot prompting, modele hiçbir çözülmüş örnek göstermeden sadece ne istediğini yazmaktır. "Bu metni üç maddede özetle" ya da "Bu hata mesajının olası sebeplerini sırala" birer zero-shot [[prompt]]'tur. Bugün varsayılan yöntem budur: modellerin talimat takip etmeyi öğrendiği bir eğitim aşamasından geçmesi ([[instruction-tuning|instruction tuning]]), yaygın görevleri örneksiz yapabilmelerini sağlar. Türkçede "sıfır örnekli" gibi karşılıklar yerleşmediği için terim İngilizce kullanılır.

## Nasıl çalışır?

Model, senin tarifini eğitim sırasında gördüğü benzer görev kalıplarına oturtur. Bu yüzden zero-shot'ın gücü doğrudan tarifin netliğine bağlıdır: görev tanıdık ve çıktı biçimi serbestse çok iyi çalışır. Sana özel, alışılmadık bir çıktı biçimi istiyorsan model kendi alışkanlığına kayar — işte o noktada tarif etmek yetmez, göstermek gerekir.

Pratik bir sıralama: önce zero-shot dene. Çıktı içerik olarak doğru ama biçim olarak dağınıksa biçimi şemaya bağla. Model görevin kendisini yanlış anlıyorsa örnek ekle.

## Dikkat

Zero-shot "modelin kendi başına düşünmesi" demek değildir; yalnızca örnek vermediğin anlamına gelir. Başarısız olduğunda ilk refleks örnek eklemek olmasın: çoğu zaman sorun, görevin belirsiz tarif edilmiş olmasıdır.

Zero-shot, [[few-shot-prompting|few-shot]] ve [[role-prompting|role prompting]] arasındaki karşılaştırmayı tekrar etmemek için tek yerde topladık: few-shot maddesine bak.
