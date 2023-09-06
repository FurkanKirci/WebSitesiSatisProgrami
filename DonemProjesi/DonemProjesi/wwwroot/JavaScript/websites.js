let iframe = document.querySelector(".website");
let navbarHeader = document.querySelector(".header-navbar-option");
let navbarColor = document.querySelector(".Navbar-color");
let navbarLinks = document.querySelector(".nbar-links-color");
let navbarBtnStyle = document.querySelector(".btn-navbar-select");
let navbarButton = document.querySelector(".btn-navbar-color");
let showcaseHeader = document.querySelector(".header-showcase-option");
let showcaseHeaderText = document.querySelector(".showcase-header");
let showcaseContentText = document.querySelector(".showcase-content");
let howitworksHeader = document.querySelector(".header-howitworks-option");
let howitworksIconColor = document.querySelector(".howitworks-icon-colors");
let featuresHeader = document.querySelector(".header-features-option");
let featuresInputHeader = document.querySelector("#features-header-input");
let featuresInputContent = document.querySelector("#features-content-input");
let featuresBtnStyle = document.querySelector(".btn-features-select");
let featuresBtnColor = document.querySelector(".features-btn-color");
let planHeader = document.querySelector(".header-plans-option");
let planClearBtn = document.querySelector(".clear-plans");
let planRemove = document.querySelector(".remove-plan");
let planAdd = document.querySelector(".add-plan");
let cardOptions = document.querySelector(".card-options");
let ccPlanFeatures = document.querySelector(".plan__features-websites");
let specialCardHeader = document.querySelector(".header-plans-option__card-option");
let countersHeader = document.querySelector(".header-counters-option");
let countersbg = document.getElementById("counter-bg");
let counterscolor = document.getElementById("counter-color");

var PlanList = [];
var array;
var id = 2;
function liEkle(){
  document.querySelector(".plan__features-websites").innerHTML += `<li><input type="text" name="li" class="input-text-element" placeholder="Kart içinde verilecek hizmet"></li>`;
}
function liSil(){
  let liListe = document.querySelector(".plan__features-websites").querySelectorAll("li");
  liListe[liListe.length -1].remove();
}
function Vazgec(){
  document.querySelector(".plan-websites").style = "";
  document.querySelector(".cc").classList.remove("change-card");
  document.querySelector(".plan__features-websites").innerHTML = ``;
}
function Onayla(){
  let id = document.querySelector(".cc").querySelector(".idCard").textContent;
  let element = iframe.contentDocument || iframe.contentWindow.document;
  
  plan = element.getElementById(`${id}`);
  webplan = document.querySelector(".inner-plan-websites");
  if(webplan.querySelector("h2").querySelector("input").value.trim().length == 0){
    plan.querySelector(".inner-plan").querySelector("h2").innerText = webplan.querySelector("h2").querySelector("input").placeholder;
  }else{
    plan.querySelector(".inner-plan").querySelector("h2").innerText = webplan.querySelector("h2").querySelector("input").value;
  }
  if(webplan.querySelector("h3").querySelector("input").value.trim().length == 0){
    plan.querySelector(".inner-plan").querySelector("h3").innerText = webplan.querySelector("h3").querySelector("input").placeholder;
  }else{
    plan.querySelector(".inner-plan").querySelector("h3").innerText = webplan.querySelector("h3").querySelector("input").value;
  }
  
  let liList = webplan.querySelector(".plan__features-websites").querySelectorAll("li");
  let badge = ``;
  for(let i = 0 ;i < liList.length ; i++){
    if(liList[i].querySelector("input").value.trim().length == 0){
      badge += `<li>${liList[i].querySelector("input").placeholder}</li>`;
    }else{
      badge += `<li>${liList[i].querySelector("input").value}</li>`;
    }
    
  }
  plan.querySelector(".plan__features").innerHTML = badge;
  document.querySelector(".plan-websites").style = "";
  document.querySelector(".cc").classList.remove("change-card");
  document.querySelector(".plan__features-websites").innerHTML = ``;
}
function CardBilgisiDegistir(card){
  let badge = ``;
  let id = card.id;
  let element = iframe.contentDocument || iframe.contentWindow.document;
  let plan = element.querySelector(".inner-plan")
  let webplan = document.querySelector(".inner-plan-websites")
  console.log(id);
  document.querySelector(".plan-websites").style.top = "50%";
  document.querySelector(".cc").classList.add("change-card");
  document.querySelector(".h2").placeholder = element.getElementById(`${id}`).querySelector("h2").textContent;
  document.querySelector(".h3").placeholder = element.getElementById(`${id}`).querySelector("h3").textContent;
  let ulElements = element.getElementById(`${id}`).querySelectorAll("li");
  for(let i=0 ; i<ulElements.length ; i++){
    badge += `<li><input type="text" name="li" class="input-text-element" placeholder="${ulElements[i].textContent}"></li>`;
  }
  document.querySelector(".plan__features-websites").innerHTML += badge;
  document.querySelector(".cc").querySelector(".idCard").textContent = id;
  console.log(ulElements);
  console.log(element.getElementById(`${id}`).querySelector("h2").textContent);

}
function UpdateCardOptions(){
  document.querySelector(".Card-option-buttons").innerHTML = null;
  for(let i=0 ; i<PlanList.length ; i++){
    let plans = PlanList[i].querySelectorAll(".plan");
    if(!(plans[0].classList.contains("hide"))){
      let btn1 = `<button onclick="CardBilgisiDegistir(this)" id="${plans[0].id}">Card ${parseInt(plans[0].id) + 1}</button>`;
      document.querySelector(".Card-option-buttons").innerHTML += btn1;
    }
    if(!(plans[1].classList.contains("hide"))){
      let btn2 = `<button onclick="CardBilgisiDegistir(this)" id="${plans[1].id}">Card ${parseInt(plans[1].id) + 1}</button>`;
      document.querySelector(".Card-option-buttons").innerHTML += btn2;
    }
    if(!(plans[2].classList.contains("hide"))){
      let btn3 = `<button onclick="CardBilgisiDegistir(this)" id="${plans[2].id}">Card ${parseInt(plans[2].id) + 1}</button>`;
      document.querySelector(".Card-option-buttons").innerHTML += btn3;
    }
  }
}
function SwapIcons(){
  let element = iframe.contentDocument || iframe.contentWindow.document;
  iconBox1 = element.getElementById("icon-box1");
  iconBox2 = element.getElementById("icon-box2");
  iconBox3 = element.getElementById("icon-box3");

  iconBox1.style.transform = "translateX(100%)";
  iconBox2.style.transform = "translateX(0%)";
  iconBox3.style.transform = "translateX(-100%)";

  setTimeout(function() {
    var temp = iconBox1.innerHTML;
    iconBox1.innerHTML = iconBox2.innerHTML;
    iconBox2.innerHTML = iconBox3.innerHTML;
    iconBox3.innerHTML = temp;

    iconBox1.style.transform = "translateX(0)";
    iconBox2.style.transform = "translateX(0)";
    iconBox3.style.transform = "translateX(0)";
  }, 500);
}
function ChangeHowitworksHeaders(button){
  let text = button.value;
  let element = iframe.contentDocument || iframe.contentWindow.document;
  let radios = document.querySelector(".howitworks-option").querySelectorAll('input[type="radio"]');
  if(button.id == "iconbox-header-input"){
    if(radios[0].checked){
      element.getElementById("icon-box1").querySelector("h3").innerHTML = text;
    }else if(radios[1].checked){
      element.getElementById("icon-box2").querySelector("h3").innerHTML = text;
    }else{
      element.getElementById("icon-box3").querySelector("h3").innerHTML = text;
    }
  }else{
    if(radios[0].checked){
      element.getElementById("icon-box1").querySelector("p").innerHTML = text;
    }else if(radios[1].checked){
      element.getElementById("icon-box2").querySelector("p").innerHTML = text;
    }else{
      element.getElementById("icon-box3").querySelector("p").innerHTML = text;
    }
  }
  
}
function HowitworksRadioChecked(radio){
  
  let element = iframe.contentDocument || iframe.contentWindow.document;
  let input1 = document.getElementById("iconbox-header-input");
  let input2 = document.getElementById("iconbox-content-input");
  input1.value = "";
  input2.value = "";
  if(radio.id == "control-inputbox1"){
    input1.placeholder = element.getElementById("icon-box1").querySelector("h3").textContent.trim();
    input2.placeholder = element.getElementById("icon-box1").querySelector("p").textContent.trim();
  }else if(radio.id == "control-inputbox2"){
    input1.placeholder = element.getElementById("icon-box2").querySelector("h3").textContent.trim();
    input2.placeholder = element.getElementById("icon-box2").querySelector("p").textContent.trim();
  }else{
    input1.placeholder = element.getElementById("icon-box3").querySelector("h3").textContent.trim();
    input2.placeholder = element.getElementById("icon-box3").querySelector("p").textContent.trim();
  }
}
showcaseHeader.addEventListener("click", () => {
  if (
    document.querySelector(".option-showcase__items").classList[2] == "deactive"
  ) {
    document.querySelector(".header-showcase-option").style.animation =
      "Rainbow 10s alternate infinite, borderLighting 2s alternate infinite";
    document.getElementById("logo-showcase").style.animation =
      "rotate 1s forwards";
    document
      .querySelector(".option-showcase__items")
      .classList.remove("deactive");
  } else {
    document.querySelector(".header-showcase-option").style.animation = "";
    document.getElementById("logo-showcase").style.animation =
      "rotateBack 1s forwards";
    document.querySelector(".option-showcase__items").classList.add("deactive");
  }
});
navbarHeader.addEventListener("click", () => {
  if (
    document.querySelector(".option-navbar__items").classList[2] == "deactive"
  ) {
    document.querySelector(".header-navbar-option").style.animation =
      "Rainbow 10s alternate infinite, borderLighting 2s alternate infinite";
    document.getElementById("logo-navbar").style.animation =
      "rotate 1s forwards";
    document
      .querySelector(".option-navbar__items")
      .classList.remove("deactive");
  } else {
    document.querySelector(".header-navbar-option").style.animation = "";
    document.getElementById("logo-navbar").style.animation =
      "rotateBack 1s forwards";
    document.querySelector(".option-navbar__items").classList.add("deactive");
  }
});
howitworksHeader.addEventListener("click",()=>{
  if(document.querySelector(".option-howitworks__items").classList.contains("deactive")){
    howitworksHeader.style.animation = "Rainbow 10s alternate infinite, borderLighting 2s alternate infinite";
    document.getElementById("logo-howitworks").style.animation = "rotate 1s forwards";
    document.querySelector(".option-howitworks__items").classList.remove("deactive");
  }else{
    howitworksHeader.style.animation = "";
    document.getElementById("logo-howitworks").style.animation = "rotateBack 1s forwards";
    document.querySelector(".option-howitworks__items").classList.add("deactive");
  }
});
featuresHeader.addEventListener("click",()=>{
  var element = iframe.contentDocument || iframe.contentWindow.document;
  if(document.querySelector(".option-features__items").classList.contains("deactive")){
    featuresHeader.style.animation = "Rainbow 10s alternate infinite, borderLighting 2s alternate infinite";
    document.getElementById("logo-features").style.animation = "rotate 1s forwards";
    document.querySelector(".option-features__items").classList.remove("deactive");
  }else{
    featuresHeader.style.animation = "";
    document.getElementById("logo-features").style.animation = "rotateBack 1s forwards";
    document.querySelector(".option-features__items").classList.add("deactive");
  }
  featuresInputHeader.placeholder = element.querySelector(".features__right").querySelector("h3").textContent;
  featuresInputContent.placeholder = element.querySelector(".features__right").querySelector("p").textContent.trim();
});
countersHeader.addEventListener("click",()=>{
  if(document.querySelector(".option-counters__items").classList.contains("deactive")){
    countersHeader.style.animation = "Rainbow 10s alternate infinite, borderLighting 2s alternate infinite";
    document.getElementById("logo-counters").style.animation = "rotate 1s forwards";
    document.querySelector(".option-counters__items").classList.remove("deactive");
  }else{
    countersHeader.style.animation = "";
    document.getElementById("logo-counters").style.animation = "rotateBack 1s forwards";
    document.querySelector(".option-counters__items").classList.add("deactive");
  }
});
featuresInputHeader.addEventListener("input",()=>{
  var element = iframe.contentDocument || iframe.contentWindow.document;
  
  if(featuresInputHeader.value.trim().length == 0){
    element.querySelector(".features__right").querySelector("h3").innerHTML = "Watch all Movies & TV Shows once they get released!";
  }else{
    element.querySelector(".features__right").querySelector("h3").innerHTML = featuresInputHeader.value;
  }
});

featuresInputContent.addEventListener("input",()=>{
  var element = iframe.contentDocument || iframe.contentWindow.document;
  
  if(featuresInputContent.value.trim().length == 0){
    element.querySelector(".features__right").querySelector("p").innerHTML =" Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate aperiam deserunt quaerat? Doloremque expedita repellendus adipisci eligendi nobis illum! Perferendis ab blanditiis eius iste incidunt esse numquam asperiores hic suscipit.";
  }else{
    element.querySelector(".features__right").querySelector("p").innerHTML = featuresInputContent.value;
  }
});
featuresBtnStyle.addEventListener("input",()=>{
  let element = iframe.contentDocument || iframe.contentWindow.document;
  element.getElementById("features-btn").classList.remove("btn-outline-secondary");
  element.getElementById("features-btn").classList.remove("btn-outline-primary");
  element.getElementById("features-btn").classList.remove("btn-primary");
  element.getElementById("features-btn").classList.remove("btn-secondary");
  element.getElementById("features-btn").classList.remove("bg-features-btn");
  element.getElementById("features-btn").classList.add(featuresBtnStyle.value);
});
featuresBtnColor.addEventListener("input",()=>{
  let element = iframe.contentDocument || iframe.contentWindow.document;
  let style = element.createElement("style");
  style.innerHTML = `.bg-features-btn {background-color: ${featuresBtnColor.value}}`;
  element.head.appendChild(style);
  element.getElementById("features-btn").classList.add("bg-features-btn");
});
planHeader.addEventListener("click", () => {
  if (
    document.querySelector(".option-plan__items").classList[2] == "deactive"
  ) {
    document.querySelector(".header-plans-option").style.animation =
      "Rainbow 10s alternate infinite, borderLighting 2s alternate infinite";
    document.getElementById("logo-plan").style.animation = "rotate 1s forwards";
    document.querySelector(".option-plan__items").classList.remove("deactive");
  } else {
    document.querySelector(".header-plans-option").style.animation = "";
    document.getElementById("logo-plan").style.animation =
      "rotateBack 1s forwards";
    document.querySelector(".option-plan__items").classList.add("deactive");
  }
});
navbarColor.addEventListener("input", () => {
  var element = iframe.contentDocument || iframe.contentWindow.document;
  console.log(
    (element.querySelector(".main-header").style.backgroundColor =
      navbarColor.value)
  );
});
navbarLinks.addEventListener("input", () => {
  var element = iframe.contentDocument || iframe.contentWindow.document;
  var links = element.querySelectorAll(".navbar-link");
  console.log(links);
  links.forEach((links) => {
    links.style.color = navbarLinks.value;
  });
});
navbarBtnStyle.addEventListener("input", () => {
  var element = iframe.contentDocument || iframe.contentWindow.document;
  element.querySelector(".btn-navbar").classList.remove("bg");
  element.querySelector(".btn-navbar").classList.remove("bg");
  element
    .querySelector(".btn-navbar")
    .classList.remove(element.querySelector(".btn-navbar").classList[2]);

  element.querySelector(".btn-navbar").classList.add(navbarBtnStyle.value);
  var secondClass = element.querySelector(".btn-navbar").classList[2];
  if (secondClass == "btn-primary") {
    navbarButton.value = "#fc997c";
  } else if (secondClass == "btn-secondary") {
    navbarButton.value = "#2e4c6d";
  } else if (secondClass == "btn-outline-primary") {
    navbarButton.value = "#ffffff";
  } else {
    navbarButton.value = "#ffffff";
  }
  // element.querySelector(`.${secondClass}`).style.backgroundColor = navbarButton.value;
});
navbarButton.addEventListener("input", () => {
  let element = iframe.contentDocument || iframe.contentWindow.document;
  let style = element.createElement("style");
  style.innerHTML = `.bg {background-color: ${navbarButton.value}}`;
  element.head.appendChild(style);
  element.querySelector(".btn-navbar").classList.remove("none");
  element.querySelector(".btn-navbar").classList.add("bg");
});
showcaseHeaderText.addEventListener("input", () => {
  if (showcaseHeaderText.value.trim().length == 0) {
    let element = iframe.contentDocument || iframe.contentWindow.document;
    element.querySelector(".content__header").innerText = "Welcome to MovieApp";
  } else {
    let element = iframe.contentDocument || iframe.contentWindow.document;
    element.querySelector(".content__header").innerText =
      showcaseHeaderText.value;
  }
});
showcaseContentText.addEventListener("input", () => {
  if (showcaseContentText.value.trim().length == 0) {
    let element = iframe.contentDocument || iframe.contentWindow.document;
    element.querySelector(".content__main").innerText =
      "Millions of movies, TV showes and people to discover. Explore Now";
  } else {
    let element = iframe.contentDocument || iframe.contentWindow.document;
    element.querySelector(".content__main").innerText =
      showcaseContentText.value;
  }
});
planClearBtn.addEventListener("click", () => {
  for(let i=0 ; i<PlanList.length ; i++){
    PlanList[i].remove();
  }
  PlanList = [];
  array = Array.prototype.slice.call(PlanList);
  id = -1;
  UpdateCardOptions();
});
planRemove.addEventListener("click",()=>{
  let element = iframe.contentDocument || iframe.contentWindow.document;
  let SonRow = PlanList[PlanList.length -1];
  let planlar = SonRow.querySelectorAll(".plan");
  if(planlar[2].classList.contains('hide')){
    if(planlar[0].classList.contains('hide')){
      let son = array.length;
      let bottomrow = element.querySelector("#plans").querySelector(".container").querySelectorAll(".row")[son - 1];
      bottomrow.remove();
      PlanList = element.querySelector("#plans").querySelector(".container").querySelectorAll(".row");
      array = Array.prototype.slice.call(PlanList);
      id = id-3;
    }else{
      planlar[0].classList.add("hide");
    }
  }else{
    planlar[2].classList.add("hide");
  }
  UpdateCardOptions();
});
planAdd.addEventListener("click",()=>{
  let element = iframe.contentDocument || iframe.contentWindow.document;
  let row = `
  <div class="row">
            <div class="col-3 plan hide" id = "${id + 1}">
              <div class="inner-plan">
                <h2>Free</h2>
                <h3>0/month</h3>
                <ul class="plan__features">
                  <li>HD available</li>
                  <li>Unlimited Movies and TC Shows</li>
                  <li>Watch on your phone & tablet</li>
                  <li>Download and watch offline</li>
                  <li>Screens you can watch</li>
                  <li>First month free</li>
                </ul>
                <div>
                  <button class="btn btn-primary">Choose Plan</button>
                </div>
              </div>
            </div>
            <div class="col-3 plan plan--featured" id = "${id + 2}">
              <div class="inner-plan">
                <h2>Basic</h2>
                <h3>$9.99/month</h3>
                <ul class="plan__features">
                  <li>HD available</li>
                  <li>Unlimited Movies and TC Shows</li>
                  <li>Watch on your phone & tablet</li>
                  <li>Download and watch offline</li>
                  <li>Screens you can watch</li>
                  <li>First month free</li>
                </ul>
                <div>
                  <button class="btn btn-primary">Choose Plan</button>
                </div>
              </div>
            </div>
            <div class="col-3 plan hide" id = "${id + 3}">
              <div class="inner-plan">
                <h2>Premium</h2>
                <h3>$19.99/month</h3>
                <ul class="plan__features">
                  <li>HD available</li>
                  <li>Unlimited Movies and TC Shows</li>
                  <li>Watch on your phone & tablet</li>
                  <li>Download and watch offline</li>
                  <li>Screens you can watch</li>
                  <li>First month free</li>
                </ul>
                <div>
                  <button class="btn btn-primary">Choose Plan</button>
                </div>
              </div>
            </div>
          </div>
  `;
  if(PlanList.length == 0){
    let container = element.querySelector("#plans").querySelector(".container");
    container.innerHTML = row;
    id = id+3;
  }else{
    let sonRowPlans = PlanList[PlanList.length - 1].querySelectorAll(".plan");
    if(sonRowPlans[0].classList.contains("hide")){
      sonRowPlans[0].classList.remove("hide");
    }else if(sonRowPlans[2].classList.contains("hide")){
      sonRowPlans[2].classList.remove("hide");
    }else{
      let container = element.querySelector("#plans").querySelector(".container");
      container.innerHTML += row;
      id = id+3;
    }
  }
  PlanList = element.querySelector("#plans").querySelector(".container").querySelectorAll(".row");
  array = Array.prototype.slice.call(PlanList);
  UpdateCardOptions();
});
specialCardHeader.addEventListener("click",() => {
  if(document.querySelector(".Card-option-buttons").classList.contains("deactive")){
    document.getElementById("logo-card-plan-option").style.animation = "rotate 1s forwards";
    document.querySelector(".Card-option-buttons").classList.remove("deactive");
  }else{
    document.getElementById("logo-card-plan-option").style.animation = "rotateBack 1s forwards";
    document.querySelector(".Card-option-buttons").classList.add("deactive");
  }
});
countersbg.addEventListener("input",()=>{
  let element = iframe.contentDocument || iframe.contentWindow.document;
  element.getElementById("counters").querySelector(".row").style.backgroundColor = countersbg.value;
});
counterscolor.addEventListener("input",()=>{
  let element = iframe.contentDocument || iframe.contentWindow.document;
  let spans = element.querySelectorAll(".counter__item");
  let headers = element.getElementById("counters").querySelectorAll("h4");
  for(let i=0 ; i<spans.length ; i++){
    spans[i].style.color = counterscolor.value;
    headers[i].style.color = counterscolor.value;
  }
});
howitworksIconColor.addEventListener("input",()=>{
  let element = iframe.contentDocument || iframe.contentWindow.document;
  let icons = element.getElementById("how-it-works").querySelectorAll(".icon-box");
  for(let i=0 ; i<icons.length ; i++){
    icons[i].querySelector("i").style.color = howitworksIconColor.value;
  }
});
document.addEventListener("DOMContentLoaded", function () {
  iframe.addEventListener("load", () => {
    let element = iframe.contentDocument || iframe.contentWindow.document;
    let plan = element.querySelector("#plans").querySelector(".container");
    PlanList = plan.querySelectorAll(".row");
    array = Array.prototype.slice.call(PlanList);
  });
});