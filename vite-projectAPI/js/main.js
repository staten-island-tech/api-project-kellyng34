import '../css/style.css'
import DOMSelectors from './dom'
import javascriptLogo from '../public/javascript.svg'
import viteLogo from '../public/vite.svg'
import { setupCounter } from './counter.js'

const URL = `https://api.spoonacular.com/recipes/random`;
const key = 'ddc432ea9f6b4256ac7ec8f75ae3b67f';

let data = []
//push the data into the data array
// async goes before any function that grabs api
async function getData(URL) {
    try {
        //requesting a response REST API's
        const response = await fetch(URL + "?" + new URLSearchParams({
            apiKey: key,
            number: 40

        }));
        if (response.status != 200) {
            throw new Error(response.statusText);
        }
        //convert reponse to json
        const info = await response.json();
        console.log(info);

        info.recipes.forEach((recipes) => data.push(recipes));


    } catch (error) {
        console.log(error);
        document.querySelector("h1").textContent = "uh oh";
    }
}
getData(URL).then(()=>{
    insert(data);
})



function insert(data) {
    console.log(data)
    data.forEach((x) => {
        DOMSelectors.container.insertAdjacentHTML(
            "beforebegin",
            `<div class= "card">
    <h2 class= "title">${x.title}</h2>
    <img src="${x.image}" class="cardimg">
    <h3 class=" cuisines" >${x.cuisines}</h3>
    <h3 class= "readyInMinutes" >${"Time to prepare: " + x.readyInMinutes + " minutes"}</h3>
    </div>`
        )
    })
};

function clearfield(){
    DOMSelectors.container.innerHTML="";
}

DOMSelectors.form.addEventListener("click", function(event){
    clearfield()
    const URL_2= `https://api.spoonacular.com/recipes/{id}/tasteWidget.json`;
    let id= 
})

async function getData(tasteWidget) {
    try {
        //requesting a response REST API's
        const response = await fetch(URL + "?" + new URLSearchParams({
            apiKey: key,

        }));
        if (response.status != 200) {
            throw new Error(response.statusText);
        }
        //convert reponse to json
        const info = await response.json();


    } catch (error) {
        console.log(error);
        document.querySelector("h1").textContent = "uh oh";
    }
}
