let count = document.querySelector(".count");
let plus_btn = document.querySelector(".plus");
let minus_btn = document.querySelector(".minus");

plus_btn.addEventListener("click", function() {
    let value = parseInt(count.innerText);
    value = value + 1;
    count.innerText = value;
})
minus_btn.addEventListener("click", function() {
    let value = parseInt(count.innerText);
    value = value - 1;
    count.innerText = value;
})