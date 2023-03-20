const num = document.getElementById("num");
const btnPlus = document.getElementById("btn-plus");
const btnMinus = document.getElementById("btn-minus");
const btnReset = document.getElementById("btn-reset");

const plusNumber = function(){
    let n = Number(num.textContent);
    n+=1;
    num.textContent=n;
}

const minusNumber = function(){
    let n = Number(num.textContent);
    if (n>0){
        n-=1;
    }
    num.textContent = n;
}

const reset = function(){
    let n = Number(num.textContent);
    if (n>0){
        n=0;
    }
    num.textContent = n;
}
// addEventListner -> 함수명만 사
// 다른 버튼에서 재사용가능.
btnPlus.addEventListener("click", plusNumber);
btnMinus.addEventListener("click", minusNumber);
btnReset.addEventListener("click", reset);