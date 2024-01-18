
window.onload = main;


function main() {
    var myelem = document.getElementById("spinner");
console.log(myelem)
myelem.addEventListener("click", function (event) {
        animate_spinner();
    });
}

function animate_spinner() {
    var spinner = document.getElementById("needle");

    var current_animations = spinner.getAnimations()

    //if multiple animations are applied to this element this if statement will not work correctly
    if (current_animations.length == 0) {
        const animation = spinner.animate({transform: "rotate(360deg)"}, 2000);
        animation.id = "spin_animation";
    }
    

    
}

function show_input_div() {
    var input_div = document.getElementById("input_div")
    
    input_div.style.display = "block"
    input_div.style.opacity = 0
    
    const animation = input_div.animate([
        {opacity: 0, offset: 0},
        {transform: "scale(150%)", offset:0.5},
        {opacity: 1, offset: 1},
        {transform: "scale(100%)", offset: 1}
    ], 500);
    
    input_div.style.opacity = 1

    console.log("hit")
}