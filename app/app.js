//declaring varibles...
let adviceNoHolder = document.getElementById("adviceID");
let adviceHolder = document.getElementById("quote");

let adviceNo;
let advice;

let randomButton = document.querySelector("#diceBox");


async function generateAdvice() {
    // fetch API...
    return await fetch("https://api.adviceslip.com/advice")

    .then((response)=>{
        return response.json();
    })

    .then((data)=>{
    // console.log(data); // displays one set of data in the console

    if(data.slip.id != adviceNo){
    adviceNo = data.slip.id;
    console.log("id = ", adviceNo)
    adviceNoHolder.innerText = adviceNo;

    advice = data.slip.advice;
    console.log("advice = ", advice)
    adviceHolder.innerText = "\"" + advice + "\"";
    }
    else{generateAdvice();}
    })

    .catch(err => console.log(err));
}

generateAdvice();

randomButton.addEventListener('click', () => {generateAdvice();})