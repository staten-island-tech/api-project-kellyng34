import '../css/style.css'
import DOMSelectors from './dom'
import javascriptLogo from '../public/javascript.svg'
import viteLogo from '../public/vite.svg'
import { setupCounter } from './counter.js'

const URL = `https://api.spoonacular.com/recipes/random`;
const key = '24db390198bc4dd0865a2e9ddb27071c';
async function init(){
    let data = []
    function insert(data) {
        console.log(data)
        data.forEach((x) => {
            DOMSelectors.container.insertAdjacentHTML(
                "afterbegin",
                `<div class= "card" id="${x.id}">
        <h2 class= "title">${x.title}</h2>
        <img src="${x.image}" alt= "pic of ${x.title}"class="cardimg">
        <h3 class=" servings" >${x.servings + " servings"}</h3>
        <h3 class= "readyInMinutes" >${"Time to prepare: " + x.readyInMinutes + " minutes"}</h3>
        <button class="learn">Learn More</button>
        </div>`
            )
        })
    };
    //push the data into the data array
    // async goes before any function that grabs api
    async function getData(URL) {
        try {
            //requesting a response REST API's
            const response = await fetch(URL + "?" + new URLSearchParams({
                apiKey: key,
                number: 39
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
    await getData(URL).then(()=>{
        insert(data);
    })
    async function getData2(search, card) {
        const URL_2= `https://api.spoonacular.com/recipes/${search}/tasteWidget.json`
        try {
            //requesting a response REST API's
            const response = await fetch(URL_2 + "?" + new URLSearchParams({
                apiKey: key,
                number: 39
            }));
            if (response.status != 200) {
                throw new Error(response.statusText);
            }
            //convert reponse to json
            const info = await response.json();
            console.log(info);
            //insert info to card
            card.innerHTML = 
                `<h1> Taste </h1>
                <h3 class="sweetness" > ${info.sweetness + " sweetness level"}</h3>
                <h3 class="saltiness" > ${info.saltiness + " saltiness level"}</h3>
                <h3 class="bitterness" > ${info.bitterness + " bitterness level"}</h3>
                <h3 class="savoriness" > ${info.savoriness + " savoriness level"}</h3>
                <h3 class="spiciness" > ${info.spiciness + " spiciness level"}</h3>`  
        } catch (error) {
            console.log(error);
            document.querySelector("h1").textContent = "uh oh";
        }}
    let all = document.querySelectorAll(".learn")

    all.forEach((card) => card.addEventListener("click", function(event){
      let search = event.target.parentElement.id
        let parent = event.target.parentElement
        //make new API call with id
        getData2(search, parent)
    }))
}
init();