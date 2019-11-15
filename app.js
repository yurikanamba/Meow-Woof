let catPhoto = document.querySelector("#cat-result");
let dogPhoto = document.querySelector("#dog-result");
let catButton = document.querySelector("#cat_btn");
let dogButton = document.querySelector("#dog_btn");

catButton.addEventListener("click", getRandomCat);
dogButton.addEventListener("click", getRandomDog);

function getRandomCat() {
  fetch("https://aws.random.cat/meow")
    .then(res => res.json())
    .then(data => {
      catPhoto.innerHTML = `<img src="${data.file}"/>`;
    });
}

function getRandomDog() {
  fetch("https://random.dog/woof.json")
    .then(res => res.json())
    .then(data => {
      //if the url is an empty file rerun the function to get another picture
      if (data.url.includes(".mp4")) {
        getRandomDog();
      } else {
        dogPhoto.innerHTML = `<img src="${data.url}"/>`;
      }
    });
}
