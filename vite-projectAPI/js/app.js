const URL= `https://api.spoonacular.com/recipes/random`;
const key= 'ddc432ea9f6b4256ac7ec8f75ae3b67f';
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
        console.log (data);
        //displays if there is error
    } catch (error){
        console.log(error);
        document.querySelector("h1").textContent = "uh oh";
    }
}
getData(URL);
