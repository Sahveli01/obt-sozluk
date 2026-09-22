---
term: "TON"
tr: ""
aliases: ["The Open Network"]
category: aglar
subcategory: ""
level: orta
short: "Bir mesajlaşma uygulaması üzerinden yaygınlaşan, zincirleri yük arttıkça bölünecek biçimde tasarlanmış blockchain ağı."
related: [sharding, embedded-wallet, smart-contract, scalability, proof-of-stake-pos]
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

TON, çok sayıda gündelik kullanıcıyı taşıyabilecek bir ağ kurma hedefiyle tasarlandı ve dağıtım kanalı olarak bir mesajlaşma uygulamasını kullandı: kullanıcı ayrı bir uygulama indirip cüzdan kurmak yerine zaten kullandığı sohbet arayüzünün içinden işlem yapar. Bu, ağın teknik tercihlerini de belirleyen bir seçimdir — beklenen yük, az sayıda büyük işlem değil çok sayıda küçük işlemdir.

## Nasıl çalışır?

Mimari tek bir zincir değildir. Bir ana zincir ağın kimliğini ve doğrulayıcı kümesini tutar; onun altında iş zincirleri, onların altında da yük arttıkça kendiliğinden bölünen parça zincirler bulunur. Yani [[sharding|sharding]] sonradan eklenen bir yama değil, en baştan varsayılan durumdur. Blok üretimi [[proof-of-stake-pos|proof of stake]] ile yapılır.

Bunun doğrudan sonucu, [[smart-contract|sözleşmeler]] arası iletişimin asenkron olmasıdır: bir sözleşme başka bir sözleşmeyi çağırdığında cevabı aynı anda almaz, mesaj gönderir ve yanıt sonra gelir.

## Dikkat

Asenkron model, tek bir işlemde birden çok adımı atomik olarak yapmaya alışmış geliştirici için ciddi bir zihin değişikliğidir. Bir adım başarısız olduğunda öncekileri geri almak protokolün değil uygulamanın işidir ve bu, yeni bir hata sınıfı doğurur.

Dağıtım kolaylığının bedeli de vardır: kullanıcıların büyük bölümü anahtarlarını [[embedded-wallet|gömülü cüzdanlar]] üzerinden yönetir. Yazıldığı tarih itibarıyla bu, kullanım kolaylığı ile anahtarın gerçekten kimde durduğu sorusu arasındaki dengeyi kullanıcı aleyhine kaydırabilen bir tercihtir.
