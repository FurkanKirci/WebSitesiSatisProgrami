let he1 = document.querySelector(".hexagon-element-1");
let he2 = document.querySelector(".hexagon-element-2");
let he3 = document.querySelector(".hexagon-element-3");
let he4 = document.querySelector(".hexagon-element-4");
let he5 = document.querySelector(".hexagon-element-5");
let he6 = document.querySelector(".hexagon-element-6");
let he7 = document.querySelector(".hexagon-element-7");
he1.addEventListener("click", () => {
    if(he1.classList[2] == "he1-deactive"){
        he1.classList.remove("he1-deactive");
        he1.classList.add("hexagon-element-1-clicked")
        he1.classList.remove("hexagon-element-1");
        he1.classList.add("he1-active");
    }else{
        he1.classList.remove("he1-active");
        he1.classList.add("hexagon-element-1")
        he1.classList.remove("hexagon-element-1-clicked");
        he1.classList.add("he1-deactive");
    }
});
he2.addEventListener("click", () => {
    if(he2.classList[2] == "he1-deactive"){
        he2.classList.remove("he1-deactive");
        he2.classList.add("hexagon-element-2-clicked")
        he2.classList.remove("hexagon-element-2");
        he2.classList.add("he1-active");
    }else{
        he2.classList.remove("he1-active");
        he2.classList.add("hexagon-element-2")
        he2.classList.remove("hexagon-element-2-clicked");
        he2.classList.add("he1-deactive");
    }
});
he3.addEventListener("click", () => {
    if(he3.classList[2] == "he1-deactive"){
        he3.classList.remove("he1-deactive");
        he3.classList.add("hexagon-element-3-clicked")
        he3.classList.remove("hexagon-element-3");
        he3.classList.add("he1-active");
    }else{
        he3.classList.remove("he1-active");
        he3.classList.add("hexagon-element-3")
        he3.classList.remove("hexagon-element-3-clicked");
        he3.classList.add("he1-deactive");
    }

});
he4.addEventListener("click", () => {
    if(he4.classList[2] == "he1-deactive"){
        he4.classList.remove("he1-deactive");
        he4.classList.add("hexagon-element-4-clicked")
        he4.classList.remove("hexagon-element-4");
        he4.classList.add("he1-active");
    }else{
        he4.classList.remove("he1-active");
        he4.classList.add("hexagon-element-4")
        he4.classList.remove("hexagon-element-4-clicked");
        he4.classList.add("he1-deactive");
    }

});
he5.addEventListener("click", () => {
    if(he5.classList[2] == "he1-deactive"){
        he5.classList.remove("he1-deactive");
        he5.classList.add("hexagon-element-5-clicked")
        he5.classList.remove("hexagon-element-5");
        he5.classList.add("he1-active");
    }else{
        he5.classList.remove("he1-active");
        he5.classList.add("hexagon-element-5")
        he5.classList.remove("hexagon-element-5-clicked");
        he5.classList.add("he1-deactive");
    }
});
he6.addEventListener("click", () => {
    if(he6.classList[2] == "he1-deactive"){
        he6.classList.remove("he1-deactive");
        he6.classList.add("hexagon-element-6-clicked")
        he6.classList.remove("hexagon-element-6");
        he6.classList.add("he1-active");
    }else{
        he6.classList.remove("he1-active");
        he6.classList.add("hexagon-element-6")
        he6.classList.remove("hexagon-element-6-clicked");
        he6.classList.add("he1-deactive");
    }
});
he7.addEventListener("click", () => {
    if(he7.classList[2] == "he1-deactive"){
        he7.classList.remove("he1-deactive");
        he7.classList.add("hexagon-element-7-clicked")
        he7.classList.remove("hexagon-element-7");
        he7.classList.add("he1-active");
    }else{
        he7.classList.remove("he1-active");
        he7.classList.add("hexagon-element-7")
        he7.classList.remove("hexagon-element-7-clicked");
        he7.classList.add("he1-deactive");
    }
});
