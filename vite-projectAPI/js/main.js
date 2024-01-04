import '../css/style.css'
import DOMSelectors from './dom'
import javascriptLogo from '../public/javascript.svg'
import viteLogo from '../public/vite.svg'
import { setupCounter } from './counter.js'

const URL = `https://api.spoonacular.com/recipes/random`;
const key = 'ddc432ea9f6b4256ac7ec8f75ae3b67f';

let all = []
async function init(){
    let data = []
    function insert(data) {
        console.log(data)
        data.forEach((x) => { 
            const card= document.createElement("div")
            card.className="card"
            card.innerHTML=      
        `<h2 class= "title">${x.title}</h2>
        <img src="${x.image}" class="cardimg">
        <h3 class=" cuisines" >${x.cuisines}</h3>
        <h3 class= "readyInMinutes" >${"Time to prepare: " + x.readyInMinutes + " minutes"}</h3>`
            
        all.push(card)
        
        DOMSelectors.container.addEventListener("click", function(e){
            e.preventDefault;
            clear(DOMSelectors.card)
            const id = x.id;
            const URL_2= `https://api.spoonacular.com/recipes/${id}/tasteWidget.json`

            async function getDataa(URL_2) {
                try {
                    //requesting a response REST API's
                    const response = await fetch
            
                    if (response.status != 200) {
                        throw new Error(response.statusText);
                    }
                    //convert reponse to json
                    const info_2 = await response.json();
            
                } catch (error) {
                    console.log(error);
                    document.querySelector("h1").textContent = "uh fbroh";
                }}
                getDataa(URL_2)
        })
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
            const id = data.forEach((data)=> data.id);
            console.log(id);
    
        } catch (error) {
            console.log(error);
            document.querySelector("h1").textContent = "uhfgjhhg oh";
        }
    }
    await getData(URL).then(()=>{
        insert(data);
    })


    function clear(card){
       card="<div class=`card`></div>";
       console.log(card)
        card.innerHTML=
            `<h3 class= "sweetness" ></h3>
            <h3 class= "saltiness" ></h3>
            <h3 class= "bitterness" ></h3>
            <h3 class= "savoriness" ></h3>
            <h3 class= "spiciness" ></h3>`
            
    }
    
    all.forEach((card) => card.addEventListener("click",function(event){
        clear(card)
    }))
    document.addEventListener("DOMContentLoaded")

}

init();