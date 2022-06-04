
var url = 'https://www.breakingbadapi.com/api/characters?limit=10&offset=0';

async function getCharacters() {

var cardBodyArr = document.getElementsByClassName('card-body');
var cardBody = cardBodyArr[0];
cardBody.innerHTML = ' ';

   await fetch(url, {
        method: 'GET',
    }).then((result) => result.json())
    .then((data) => {
        data.forEach((body) => {
        cardBody.innerHTML += `<div class="character-card">
        <img src=${body.img} alt="">
        <h4 onclick='singleCharacter(${body.char_id})'>${body.name}</h4>
        <h5>${body.nickname}</h5>
    </div>`;
        });
    })
    .catch((error) => {
        console.log(error);
    });
}


function singleCharacter(id) {

let singleCharUrl = `https://www.breakingbadapi.com/api/characters/${id}`;

var cardBodyArr = document.getElementsByClassName('card-body');
var cardBody = cardBodyArr[0];

cardBody.innerHTML = ' ';

fetch(singleCharUrl).then((result) => result.json())
.then((data) => {
    let singleData = data[0];
    cardBody.innerHTML = `<div class="single-character">
    <img src=${singleData.img} alt="">
    <div class="char-info">
      <h4>Name: ${singleData.name}</h4>
      <h4>Nickname: ${singleData.nickname}</h4>
      <h4>Birthday: ${singleData.birthday}</h4>
      <h4>Occupation : ${singleData.occupation}</h4>
      <h4>Portrayed by: ${singleData.portrayed}</h4>
      <h4>Status: ${singleData.status}</h4>
    </div>
  </div>`;
})
.catch((error) => console.log(error));

}

function search() {

    // -----------capitalize search term

    let userInput = document.getElementsByClassName('search');
    let searchTerm = userInput[0].value;
    searchTerm = searchTerm.split(' ');
    let capitalizedSearch = [];
    searchTerm.forEach((word) => {
      capitalizedSearch.push(word[0].toUpperCase() + word.slice(1, word.length));
    });
    // console.log(capitalizedSearch);

    let inputFinal = capitalizedSearch.toString();
    inputFinal = inputFinal.split(',').join('+');
    // console.log(inputFinal);


    // --------------fetch process starts


    var cardBodyArr = document.getElementsByClassName('card-body');
    var cardBody = cardBodyArr[0];

    cardBody.innerHTML = ' '; 

    let searchUrl = `https://www.breakingbadapi.com/api/characters?name=${inputFinal}`;

    fetch(searchUrl).then((result) => result.json())
    .then((data) => {
        let searchCharData = data[0];
        cardBody.innerHTML = `<div class="single-character">
        <img src=${searchCharData.img} alt="">
        <div class="char-info">
          <h4>Name: ${searchCharData.name}</h4>
          <h4>Nickname: ${searchCharData.nickname}</h4>
          <h4>Birthday: ${searchCharData.birthday}</h4>
          <h4>Occupation : ${searchCharData.occupation}</h4>
          <h4>Portrayed by: ${searchCharData.portrayed}</h4>
          <h4>Status: ${searchCharData.status}</h4>
        </div>
      </div>`;

    })
    .catch((error) => {
         console.log(error);
         alert('Check your search term spelling & try again');
    });

}