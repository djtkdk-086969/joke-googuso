/*
    仕様サスペンス劇場
    毎週火曜日 午後9時より好評放送中(嘘)
    *** これはジョークプログラムです ***
    たかだか。 (@djtkdk_086969)
 */

"use strict";

var snd = null;

var missingElem = document.querySelectorAll("div.TXwUJf");

/*
実際に表示されている (offsetWidth/offsetHeight が 0 ではない)
「未指定」: があるか？
(動的書き換えへの対応)
*/

if([].slice.call(missingElem).some( (e) => {
  return e.offsetWidth > 0 || e.offsetHeight > 0;
} )) {
  console.log("検索語句が殺されたようだ！");
  chrome.runtime.sendMessage({
    body: "play",
  });
}
