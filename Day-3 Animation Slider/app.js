const panels = document.querySelectorAll(".box");

panels.forEach(panels =>{
    panels.addEventListener("click", () =>{
        removingActiveClass();
        panels.classList.add("active")
    })
})

function removingActiveClass() {
    panels.forEach(panels => {
        panels.classList.remove("active")
    })


}