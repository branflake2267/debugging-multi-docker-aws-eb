
function _renderData(jsonData) {
  let responseEl = document.querySelector('#response');
  responseEl.innerHTML = jsonData.message;
}

function _fetchMessage() {
  fetch('/api/getMessage')
    .then(response => response.json())
    .then(_renderData);
}

let buttonEl = document.querySelector('input');
buttonEl.addEventListener('click', () => {
  _fetchMessage();
});

console.log("index.js loaded");