/*
    仕様サスペンス劇場
    毎週火曜日 午後9時より好評放送中(嘘)
    *** これはジョークプログラムです ***
    たかだか。 (@djtkdk_086969)
 */

"use strict";

var url = chrome.extension.getURL("resources/killed.mp3");
var snd = new Audio(url);

chrome.runtime.onMessage.addListener(
  (request, sender, sendResponse) => {
    console.log(request.body, sender.tab.id);
    switch(request.body) {
    case "play":
      snd.play();
      break;
    }
  }
);
