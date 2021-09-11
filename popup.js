console.log("I'm from popup")

let backgroundPort = chrome.runtime.connect({
  name: "popup",
});

let submitButton = document.getElementById("submit");
let printButton = document.getElementById("print");
var keyword;

submitButton.addEventListener("click", async () => {
  keyword = document.getElementById('input_text').value;
  console.log(keyword);
    backgroundPort.postMessage({
    type: "popup_intro",
    msg: keyword,
  });
});

printButton.addEventListener('click',async()=>{
  backgroundPort.postMessage({
    type:"print",
  })
})