// ==UserScript==
// @name         WhatsApp Web window closer.
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Closes unnecessary WhatsApp Web windows.
// @author       Misha Saidov
// @match        https://*.whatsapp.com/*
// @grant        window.close
// ==/UserScript==

(function() {
    'use strict';
    const linkToChat = document.querySelector("._8ibw a")
    if (linkToChat) {
        setTimeout(() => {
            location.href = linkToChat.href
        }, 100)
    }
    else {
        setInterval(() => {
            const el = document.querySelector("._2fuxX")
            if (el && /^Приложение WhatsApp|^WhatsApp is open in another/.test(el.innerText)) {
                window.close()
            }
        }, 2000)
    }
})();