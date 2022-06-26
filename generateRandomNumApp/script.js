var number = document.querySelector(".number");
var generateNum = document.querySelector(".generateNumber");

generateNum.addEventListener("click", (e) => {
    if(e.target.classList.contains("generateNumber")){
        
        number.innerHTML =Math.floor(Math.random()*10);
    }
})