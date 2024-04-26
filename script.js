let searchBtn = document.querySelector(".searchBtn");
let result = document.querySelector(".result");
let sound = document.querySelector("#sound");

searchBtn.addEventListener("click", async () => {
  let usrInput = document.querySelector(".input").value;
  let urlApi = "https://api.dictionaryapi.dev/api/v2/entries/en/";
  let fetchData = await fetch(`${urlApi}${usrInput}`);
  let apiData = await fetchData.json();
  result.innerHTML = `
<div class="result-container">
            <h1>${apiData[0].word}</h1>
            <button class="bb" onclick="playSound()">
            <i class="fa-solid fa-volume-high ss"></i>
          </button>
          </div>
          <p class="example">${apiData[0].meanings[2].definitions[0].example}</p>
          <p class="defination">
           ${apiData[0].meanings[0].definitions[0].definition}
          </p>
          <p class="detailed-info">
          ${apiData[0].meanings[1].definitions[0].definition}
          </p>
`;
  sound.setAttribute("src", `${apiData[0].phonetics[1].audio}`);
});

function playSound() {
  sound.play();
};
