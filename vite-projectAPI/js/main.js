import '../css/style.css'
import javascriptLogo from '../public/javascript.svg'
import viteLogo from '../public/vite.svg'
import { setupCounter } from './counter.js'

const URL= `https://api.spoonacular.com/recipes/random`;
const key= 'ddc432ea9f6b4256ac7ec8f75ae3b67f';

const url=[]
// async goes before any function that grabs api
async function getData(URL){
    try{
        //requesting a response REST API's
        const response = await fetch(URL + "?" + new URLSearchParams({
            apiKey: key,
            number: 40
    
        }));
        if(response.status !=200){
            throw new Error(response.statusText);
        }
        //convert reponse to json
        const data= await response.json();
        console.log(data);
        url.push(data);
        //displays if there is error
    } catch (error){
        console.log(error);
        document.querySelector("h1").textContent = "uh oh";
    }
}
getData(URL);


function insert(url){
    url.forEach((data) => {
DOMSelectors.container_2.insertAdjacentHTML(
    "afterbegin",
    `<div class= "card">
    <h2 class= "title">${data.title}</h2>
    <img scr="${data.image}" class="cardimg">
    <h3 class=" cuisines" >${"cuisines"+ data.cuisines}</h3>
    <h3 class= "readyInMinutes" >${"Minutes"+data.readyInMinutes}</h3>
    </div>`
    )})};

insert(arr);

