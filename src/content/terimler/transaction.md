---
term: "Transaction"
tr: "İşlem"
aliases: ["tx", "işlem"]
category: temeller
subcategory: "Bloklar ve işlemler"
level: baslangic
short: "Kullanıcının imzalayıp ağa gönderdiği, zincirin durumunu değiştirmesi istenen talimat."
related: [block, transaction-hash-txid, transaction-fee, mempool, digital-signature, state-transition]
disambiguation: []
tags: []
status: taslak
reviewedBy: []
dateSensitive: false
sources: []
added: 2026-09-21
updated: 2026-09-21
---

## Nedir?

İşlem, bir kullanıcının imzalayıp ağa gönderdiği talimattır. Zincirin durumunu değiştirebilen tek şey işlemlerdir: bir transfer, bir [[smart-contract|akıllı sözleşme]] çağrısı ya da yeni bir sözleşmenin kurulması, hepsi birer işlemdir.

Bir işlem tipik olarak gönderen, hedef, taşınan miktar, çağrılacak işleve ait veri, ücret ayarları ve bir sıra numarası içerir. Bunların tamamı gönderenin özel anahtarıyla imzalanır; [[digital-signature|dijital imza]] sayesinde ağ, talimatın gerçekten o hesaptan geldiğini kimseye şifre sormadan doğrulayabilir.

Gönderilen işlem önce bekleyenler havuzuna düşer, sonra bir [[block|bloğa]] alınır; etkisi ancak o zaman ortaya çıkar.

## Benzetme

İmzalı bir havale talimatı gibi. Talimatı yazıp imzaladığın anda para henüz gitmemiştir; yalnızca niyetini inkâr edilemez biçimde beyan etmişsindir. Gerçekleşmesi, onu sıraya alıp uygulayacak tarafa kalmıştır.

## Dikkat

İmzalamak göndermek değildir, göndermek de gerçekleşmek değildir. Havuzda bekleyen bir işlem hiç işlenmeyebilir; [[transaction-fee|ücreti]] düşük kaldıysa günlerce orada kalıp düşebilir.

Başarısız bir işlem de zincire yazılır. Sözleşme çağrısı hata verirse yaptığı değişiklikler geri alınır, ama işlemin kendisi ve harcadığı ücret kayıtta kalır. "Zincirde görünüyor" ile "istediğim oldu" aynı şey değildir.
