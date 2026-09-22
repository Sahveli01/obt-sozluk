---
term: "Client (Web)"
tr: "İstemci"
aliases: []
category: web
subcategory: "Frontend"
level: orta
short: "Bir sunucudan içerik ya da hizmet isteyen taraf; web'de bu çoğunlukla kullanıcının cihazında çalışan tarayıcıdır."
related: [server, frontend, browser, dapp, http-request]
disambiguation: [client-blockchain]
tags: []
status: taslak
reviewedBy: []
dateSensitive: false
sources: []
added: 2026-09-21
updated: 2026-09-22
---

## Nedir?

İstemci, bir [[server|sunucudan]] bir şey isteyen taraftır. Web'de bu taraf genellikle kullanıcının cihazındaki [[browser|tarayıcıdır]]: bir [[http-request|istek]] gönderir, gelen cevabı ekranda gösterir.

İstemci ve sunucu donanım değil, rol adlarıdır. Aynı bilgisayar bir işte istemci, başka bir işte sunucu olabilir. "İstemci tarafı" dendiğinde kastedilen şey nerede çalıştığıdır: kullanıcının makinesinde, senin kontrolündeki bir makinede değil.

## Nasıl çalışır?

İstemcide çalışan kod kullanıcıya teslim edilmiştir. İndirilebilir, okunabilir, durdurulabilir, değiştirilebilir. Bu yüzden istemciden gelen hiçbir bilgi olduğu gibi doğru kabul edilmez: formdaki "yaşınız" alanını tarayıcıda denetlemek kullanıcıya kolaylık sağlar, güvenlik sağlamaz. Aynı denetim sunucuda tekrar yapılır.

Blockchain tarafında bu ayrımın sık atlanan bir sonucu vardır. Bir [[dapp|dApp]]'in arayüzü çoğu zaman sıradan bir web sitesidir: bir sunucuda durur, oradan servis edilir ve oradan değiştirilebilir. Arka planda akıllı sözleşmelerle konuşuyor olması siteyi merkeziyetsiz yapmaz; zincirdeki kurallar yerinde dururken kullanıcının karşısına çıkan arayüz bambaşka bir şey gösterebilir.

## Dikkat

Aynı kelime blockchain'de başka bir şeyi anlatır: [[client-blockchain|zincir istemcisi]] bir sunucudan hizmet isteyen taraf değil, protokolün kurallarını baştan sona kendi uygulayan yazılımdır.
