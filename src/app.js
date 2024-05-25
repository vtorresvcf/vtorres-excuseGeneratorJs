/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  function randomExcuse() {
    let who = ["The dog", "My grandma", "The mailman", "My bird"];
    let action = ["ate", "peed", "crushed", "broke"];
    let what = ["my homework", "my phone", "the car"];
    let when = [
      "before the class",
      "when I was sleeping",
      "while I was exercising",
      "during my lunch",
      "while I was praying"
    ];

    let whonumRandom = Math.floor(Math.random() * who.length);
    let actionnumRandom = Math.floor(Math.random() * action.length);
    let whatnumRandom = Math.floor(Math.random() * what.length);
    let whenumRandom = Math.floor(Math.random() * when.length);

    let textExcuse = `${who[whonumRandom]} ${action[actionnumRandom]} ${what[whatnumRandom]} ${when[whenumRandom]}   `;

    return textExcuse;
  }
  document.getElementById("excuse").innerHTML = randomExcuse();
};
