const URL= `https://api.algobook.info/v1/dogs/all`;
// async goes before any function that grabs api
async function getData(URL){
    try{
        //requesting a response REST API's
        const response = await fetch(URL);
        if(response.stauts !=200){
            throw new Error(response.statusText);
        }
        //convert reponse to json
        const data= await response.json();
        document.querySelector("h1").textContent = data.name;
        //displays if there is error
    } catch (error){
        console.log(error, "uh on");
        document.querySelector("h1").textContent = "uh oh";
    }
}
getData(URL);