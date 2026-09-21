---
term: "CI/CD"
tr: "Sürekli entegrasyon ve sürekli teslimat"
aliases: ["continuous integration", "continuous deployment", "surekli entegrasyon"]
category: araclar
subcategory: "Derleme ve dağıtım süreci"
level: orta
short: "Her kod değişikliğini otomatik olarak derleyip test eden, geçenleri otomatik olarak ortamlara taşıyan boru hattı."
related: [build, github-actions, unit-test, deployment, staging]
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

CI/CD iki alışkanlığın kısaltmasıdır. CI (continuous integration, sürekli entegrasyon) herkesin değişikliğini sık sık ortak dala getirmesi ve her getirişte [[build|build]] ile testlerin kendiliğinden çalışmasıdır. CD (continuous delivery ya da deployment, sürekli teslimat ya da dağıtım) testleri geçen çıktının elle uğraşmadan ortamlara taşınabilmesidir. Aradaki fark inceliklidir: teslimatta yayına çıkma kararını hâlâ bir insan verir, dağıtımda testleri geçen değişiklik kendiliğinden yayına gider.

## Benzetme

Dişçinin altı ayda bir gönderdiği hatırlatma mesajı gibi. Gitmeyi hatırlamaya kalsa aylar geçer; hatırlatma işi senin belleğinden alıp sistemin belleğine koyar. CI/CD'nin yaptığı da testleri çalıştırmayı birinin aklına gelmesine bağlı olmaktan çıkarmaktır — ve aklına gelmediği gün de çalışır.

## Nasıl çalışır?

Bir hat, depodaki olaylara (yeni commit, [[pull-request-pr|pull request]], etiket) bağlanan sıralı adımlardan oluşur: bağımlılıkları kur, [[linter|linter]] ve tip kontrolünü çalıştır, [[unit-test|birim testleri]] koştur, build al, çıkan [[build-artifact|artifact]]'ı sakla, sonra sırasıyla [[staging|staging]] ve [[production|üretim]] ortamına kur. Adımlardan biri kırmızı yanarsa hat durur, sonrakiler çalışmaz.

Bu işi [[github-actions|GitHub Actions]], GitLab CI, Jenkins gibi araçlar yapar. Hangisinin seçileceği genelde kodun zaten nerede durduğuna ve ekibin kendi sunucusunu işletmek isteyip istemediğine bağlıdır; kendi sunucunda çalıştırmak daha çok denetim, buna karşılık daha çok bakım demektir.

## Dikkat

Bir hat ancak testleri kadar iyidir; hiçbir şeyi ciddi biçimde kontrol etmeyen yeşil bir hat güven duygusu üretir, güvence üretmez. İkinci tuzak ara sıra sebepsiz kırılan testlerdir: ekip bir süre sonra kırmızıyı ciddiye almayı bırakır ve hat işlevsizleşir. Son olarak hat gizli anahtarlara erişir; dışarıdan gelen katkıların bu anahtarlara ulaşamaması gerekir.
