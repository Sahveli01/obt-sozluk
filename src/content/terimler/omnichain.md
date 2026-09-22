---
term: "Omnichain"
tr: ""
aliases: []
category: olceklenme
subcategory: "Köprüler ve zincirler arası"
level: orta
short: "Bir uygulamanın ya da tokenın birçok zincirde tek bir bütün gibi davrandığı iddiasını anlatan, pazarlama ağırlıklı terim."
related: [cross-chain, chain-abstraction, cross-chain-messaging, burn-and-mint, interoperability, blockchain-bridge]
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

Omnichain, "her zincir" anlamında kullanılan bir konumlandırma sözcüğüdür. İddia şudur: uygulama birçok zincire kurulmuştur ama parçaları birbirinden habersiz değildir; durum ve arz tek bir bütün gibi yönetilir.

Teknik bir standardın değil, bir hedefin adıdır. Altında her zaman aynı iki şey vardır: bir mesajlaşma katmanı ve o katmanın güven varsayımı. Türkçede karşılığı yok; İngilizce kullanılır.

## Nasıl çalışır?

Token tarafında tipik kurgu [[burn-and-mint]]'tir: her zincirde aynı token sözleşmesi bulunur, geçişte bir tarafta yakılır, diğerinde basılır. Böylece aynı varlığın birbirinin yerine geçmeyen sarmalanmış sürümleri çoğalmaz ve likidite tek parça kalır.

Uygulama tarafında bir zincirdeki eylem, [[cross-chain-messaging|zincirler arası mesajlaşma]] üzerinden diğer zincirlerdeki sözleşmelere iletilir. Bazı tasarımlar durumu tek bir merkez zincirde tutup diğerlerini uç nokta gibi kullanır; bazıları durumu dağıtıp mesajlarla eşitler.

"Multichain" ile farkı burada belirir: multichain'de aynı uygulamanın birbirinden bağımsız kopyaları vardır, omnichain iddiasında ise parçalar tek bir bütün gibi konuşur ([[cross-chain|cross-chain]]).

## Dikkat

Etiketin kendisi bir güvenlik seviyesi anlatmaz. Sorulacak sorular değişmez: mesajı kim doğruluyor, dışarıdan bir imzacı kümesi mi yoksa karşı zincirin konsensüsünü doğrulayan bir [[light-client|hafif istemci]] mi? Her zincirde basım yetkisi kimde ve sözleşmeler yükseltilebilir mi?

Tek bir mesajlaşma katmanına bağlanmak, o katmanı bütün zincirler için ortak bir arıza noktası yapar: yanlış bir mesaj geçerse hasar tek bir zincirle sınırlı kalmaz.

Kullanıcı açısından da sihir yoktur. Elindeki şeyin hangi zincirdeki sürüm olduğu ve geri dönüşün neye bağlı olduğu, etiket ne olursa olsun hâlâ sorulması gereken sorulardır.
