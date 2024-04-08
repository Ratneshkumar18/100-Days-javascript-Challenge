const btn = document.querySelector("button");
const body = document.querySelector("body");
const color = ['pink', 'red', 'yellow', 'Orange', 'black'];

btn.addEventListener("click", function() {
    const index = parseInt(Math.random() * color.length);
    body.style.backgroundColor = color[index]
});
body.style.backgroundColor='pink';