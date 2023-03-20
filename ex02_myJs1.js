let redBox = document.getElementById("redBox");
let blueBox = document.getElementById("blueBox");
let greenBox = document.getElementById("greenBox");
let grayBox = document.getElementById("grayBox");
let divList = document.querySelectorAll("div");
const moveFunc = ()=>{
    blueBox.style.marginLeft= "100px";
    greenBox.style.marginLeft= "200px";
    grayBox.style.marginLeft= "300px";
}
const roundFunc = ()=>{
    for (let i =0; i<divList.length; i++){
        divList[i].style.borderTopRightRadius="50%";
        divList[i].style.borderBottomLeftRadius="50%";
    }
}