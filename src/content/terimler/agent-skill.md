---
term: "Agent Skill"
tr: ""
aliases: ["ajan becerisi"]
category: yapay-zeka
subcategory: "Ajanlar ve araçlar"
level: orta
short: "Bir ajana, gerektiğinde okuyup uygulayacağı talimat ve dosyalardan oluşan yeniden kullanılabilir yetenek paketi."
related: [ai-agent, agent-instructions-file-claude-md-agents-md, context-engineering, slash-command, prompt-engineering]
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

Agent skill, bir [[ai-agent|ajana]] gerektiğinde okuyup uygulayacağı, yeniden kullanılabilir bir talimat paketidir. İçinde ne zaman kullanılacağını anlatan kısa bir açıklama, adım adım yönerge ve gerekirse yardımcı dosyalar bulunur.

Terimin yerleşmiş bir Türkçe karşılığı yok; "beceri" diye çevrilebilir ama araçların belgelerinde İngilizcesi geçiyor.

## Nasıl çalışır?

Ajan açılışta becerilerin yalnızca adını ve tek cümlelik açıklamasını görür. Konu o beceriyle ilgili hâle geldiğinde dosyanın tamamını okur ve içindeki adımları izler. Böylece onlarca sayfalık kurum bilgisi [[context-window|bağlam penceresini]] sürekli işgal etmez, yalnızca gerektiğinde yüklenir.

Bu, [[context-engineering|bağlam mühendisliğinin]] tipik bir örneğidir: modele her şeyi baştan vermek yerine doğru anda doğru parçayı vermek.

## Örnek

"Yeni bir terim dosyası yazarken izlenecek adımlar" başlıklı bir beceri; içinde şablon, zorunlu alanlar ve bir kontrol listesi vardır. Ajan böyle bir dosya yazmaya başladığında beceriyi açar ve aynı işi her seferinde aynı biçimde yapar.

## Dikkat

Beceri modele yeni bir yetenek öğretmez. [[fine-tuning|İnce ayardan]] farklı olarak modelin ağırlıklarına dokunmaz; yalnızca doğru anda talimat verir. Modelin zaten yapamadığı bir şeyi beceri dosyası yazarak yaptıramazsın.

Açıklaması belirsiz yazılmış bir beceri ya hiç çağrılmaz ya da alakasız yerlerde çağrılır; bu yüzden en çok emek isteyen kısım genellikle o tek cümlelik açıklamadır. Dosya biçimi araçtan araca değişir, taşınabilir olan şey fikirdir.
