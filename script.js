// EMERGENCY KEY: c925c19773660b5fc3ff64625f8801b7
$('.carousel').carousel({
  interval: 4000
})


let request = new XMLHttpRequest();
function myFunction(){
  
let url = "https://www.food2fork.com/api/search?key=efff7d41ed24bbf9ed2e98e0ca7c2936";


request.open("GET", url, true);

// document.getElementById("ingredient").onclick = function();

request.onload = function() {
  let data = JSON.parse(this.response);
  console.log(data);
  let name = document.getElementById("name");
  let website = document.getElementById("website");
  let publisher = document.getElementById("publisher");
  let counter = document.getElementById("counter");
  // let foodimg = document.getElementById("foodimg")
  if (request.status >= 200 && request.status < 400) {
    // document.getElementById("ingredient");
    name.innerHTML = data.recipes[13].title;
    website.textContent = data.recipes[13].source_url;
    publisher.innerHTML = data.recipes[13].publisher_url;
    console.log(website);
    counter.innerHTML = "1/3";
    // foodimg.innerHTML = data.recipes[3].image_url;
  }
}
request.send();


}
function myFunction2(){
  
let url = "https://www.food2fork.com/api/search?key=efff7d41ed24bbf9ed2e98e0ca7c2936";


request.open("GET", url, true);

// document.getElementById("ingredient").onclick = function();

request.onload = function() {
  let data = JSON.parse(this.response);
  console.log(data);
  let name = document.getElementById("name");
  let website = document.getElementById("website");
  let publisher = document.getElementById("publisher");
  let counter = document.getElementById("counter");
  // let foodimg = document.getElementById("foodimg")
  if (request.status >= 200 && request.status < 400) {
    // document.getElementById("ingredient");
    name.innerHTML = data.recipes[3].title;
    website.textContent = data.recipes[3].source_url;
    publisher.innerHTML = data.recipes[3].publisher_url;
    counter.innerHTML = "2/3";
    console.log(website);
    // foodimg.innerHTML = data.recipes[3].image_url;
  }
}
request.send();
}

function myFunction3(){
  
let url = "https://www.food2fork.com/api/search?key=efff7d41ed24bbf9ed2e98e0ca7c2936";


request.open("GET", url, true);

// document.getElementById("ingredient").onclick = function();

request.onload = function() {
  let data = JSON.parse(this.response);
  console.log(data);
  let name = document.getElementById("name");
  let website = document.getElementById("website");
  let publisher = document.getElementById("publisher");
  let counter = document.getElementById("counter");
  // let foodimg = document.getElementById("foodimg")
  if (request.status >= 200 && request.status < 400) {
    // document.getElementById("ingredient");
    name.innerHTML = data.recipes[20].title;
    website.textContent = data.recipes[20].source_url;
    publisher.innerHTML = data.recipes[20].publisher_url;
    counter.innerHTML = "3/3";
    console.log(website);
    // foodimg.innerHTML = data.recipes[3].image_url;
  }
}
request.send();

}