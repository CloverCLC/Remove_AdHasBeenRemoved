// ==UserScript==
// @name         移除B站移除广告提示
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  自动移除B站首页的.adblock-tips元素
// @author       CloverCLC
// @match        https://www.bilibili.com/
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
    if (document.querySelector(".adblock-tips")) {
        // document.querySelector(".adblock-tips").style.display = "none";
        document.querySelector(".adblock-tips").remove()
    }
 
})();