/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};


// 監聽伺服器發送到 Service Worker
self.addEventListener("push", function (event) {
  const data = JSON.parse(event.data.text());
  event.waitUntil(registration.showNotification(data.title, {
    body: data.message,
    icon: "/images/icon/icons-192.png"
  }));
});

// 監聽使用者點擊
self.addEventListener("notificationclick", function (event) {
  event.notification.close();
  event.waitUntil(clients.matchAll({
    type: "window",
    includeUncontrolled: true
  }).then(function (clientList) {
    if (clientList.length > 0) {
      let client = clientList[0];
      for (let i = 0; i < clientList.length; i++) {
        if (clientList[i].focused) {
          client = clientList[i];
        }
      }
      return client.focus();
    }
    return clients.openWindow("/");
  }));
});
/******/ })()
;