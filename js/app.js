let btnTranslate = document.querySelector("#btn-translate");
let textInput = document.querySelector("#txt-input");
let outputMsg = document.querySelector("#output-msg");

var URL = "https://api.funtranslations.com/translate/draconic.json";

function constructUrl(txt) {
  return URL + "?" + "text=" + inputText;
}

function clickHandler() {
  var inputText = textInput.value;
  fetch(constructUrl(inputText))
    .then((response) => response.json())
    .then((json) => {
      outputMsg.innerText = json.contents.translated;
    })
}

btnTranslate.addEventListener("click", clickHandler);
