// ==UserScript==
// @name        知乎夜间模式
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  开启知乎夜间模式，并且跟随系统主题自动切换，切换后刷新网页不会出现闪白的情况
// @author       Starry
// @match        *://*.zhihu.com/*
// @grant        none
// @run-at document-end
// ==/UserScript==

;(function () {
  'use strict'
  const queryString = '(prefers-color-scheme: dark)'
  const nowSysTheme = () => window.matchMedia(queryString).matches
  const changeTheme = isDark => {
    if (isDark) {
      fetch('/?theme=dark')
      document
        .getElementsByTagName('html')[0]
        .setAttribute('data-theme', 'dark')
    } else {
      fetch('/?theme=light')
      var html = document.getElementsByTagName('html')[0]
      html.getAttribute('data-theme')
        ? html.setAttribute('data-theme', 'light')
        : null
    }
  }
  changeTheme(nowSysTheme())
  window.matchMedia(queryString).addEventListener('change', function (e) {
    changeTheme(e.matches)
  })
})()
