const URL= `http://makeup-api.herokuapp.com/`;

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
        document.querySelector("h1").textContent = data.Content;
        //displays if there is error
    } catch (error){
        conslone.log(error, "uh on");
        document.querySelector("h1").textContent = "uh oh"
    }
}
getData(URL);
