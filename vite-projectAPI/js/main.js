import '../css/style.css'
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

        data.recipes.forEach((recipes) => data.push(recipes));


    } catch (error) {
        console.log(error);
        document.querySelector("h1").textContent = "uh oh";
    }
}
getData(URL);

function insert(data) {
    data.forEach((x) => {
        DOMSelectors.container_2.insertAdjacentHTML(
            "beforebegin",
            `<div class= "card">
    <h2 class= "title">${x.title}</h2>
    <img scr="${x.image}" class="cardimg">
    <h3 class=" cuisines" >${"Cuisines" + x.cuisines}</h3>
    <h3 class= "readyInMinutes" >${"Minutes" + x.readyInMinutes}</h3>
    </div>`
        )
    })
};

insert(data);

