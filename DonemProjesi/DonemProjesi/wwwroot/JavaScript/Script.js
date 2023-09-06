let OptionYears = document.querySelector(".year-input");
let OptionMonth = document.querySelector(".month-input");
let CardNumberInput = document.querySelector(".card-number-input");
let CardNumberBox = document.querySelector(".card-number-box");
let CardHolderInput = document.querySelector(".card-holder-input");
let CardHolderBox = document.querySelector(".card-holder-name");
let CardMonthBox = document.querySelector(".exp-month");
let CardYearBox = document.querySelector(".exp-year");
let CardYearInput = document.querySelector(".year-input");
let CardMonthInput = document.querySelector(".month-input");
let CardCvvInput = document.querySelector(".cvv-input");
let CardCvvBox = document.querySelector(".cvv-box");
function GetYear(){
    let thisYear = new Date().getFullYear();
    console.log(thisYear);
    months = "<option value='month' selected disabled>Month</option>";
    years = "<option value='year' selected disabled>Year</option>";
    for(let i=1 ; i<13 ; i++){
        if(i<10){
            months += `<option value="0${i}">0${i}</option>`;
        }else{
            months += `<option value="${i}">${i}</option>`;
        }
    }
    for(let i=thisYear ; i < thisYear + 10 ; i++){
        years += `<option value="${i}">${i}</option>`;
    }
    OptionMonth.innerHTML = months;
    OptionYears.innerHTML = years;

}
function InnerPlanAnimationBasic(){
    document.querySelector(".basic").classList.add("animation-inner-plan");
    document.querySelector(".recomended_plan").classList.remove("animation-inner-plan");
    document.querySelector(".plan-hexagone").classList.remove("animation-inner-plan");
    
}
function InnerPlanAnimationRecomend(){
    document.querySelector(".basic").classList.remove("animation-inner-plan");
    document.querySelector(".recomended_plan").classList.add("animation-inner-plan");
    document.querySelector(".plan-hexagone").classList.remove("animation-inner-plan");
    
}
function InnerPlanAnimationHexagone(){
    document.querySelector(".basic").classList.remove("animation-inner-plan");
    document.querySelector(".recomended_plan").classList.remove("animation-inner-plan");
    document.querySelector(".plan-hexagone").classList.add("animation-inner-plan");
    
}
GetYear();
CardNumberInput.oninput = () => {
    if(CardNumberInput.value.trim().length == 0){
        CardNumberBox.innerText = "XXXX XXXX XXXX XXXX";
    }else{
        CardNumberBox.innerText = CardNumberInput.value;
    }
    
}
CardHolderInput.oninput = () => {
    if(CardHolderInput.value.trim().length == 0){
        CardHolderBox.innerText = "Full Name";
    }else{
        CardHolderBox.innerText = CardHolderInput.value;
    }
}
function GetYearToCard(){
    CardYearBox.innerText = CardYearInput.value;
}
function GetMonthToCard(){
    CardMonthBox.innerText = CardMonthInput.value;
}
CardCvvInput.onmouseenter = () =>{
    document.querySelector(".front").style.transform = "perspective(1000px) rotateY(-180deg)";
    document.querySelector(".back").style.transform = "perspective(1000px) rotateY(0deg)";
}
CardCvvInput.onmouseleave = () =>{
    document.querySelector(".front").style.transform = "perspective(1000px) rotateY(0deg)";
    document.querySelector(".back").style.transform = "perspective(1000px) rotateY(180deg)";
}
CardCvvInput.oninput = () =>{
    CardCvvBox.innerText = CardCvvInput.value;
}
