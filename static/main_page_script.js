
window.onload = main;


function main() {
    var myelem = document.getElementById("spinner");
console.log(myelem)
myelem.addEventListener("click", function (event) {
        animate_spinner();
    });
}

function animate_spinner() {
    var element = document.getElementById("needle");

    var current_animations = element.getAnimations()

    //if multiple animations are applied to this element this if statement will not work correctly
    if (current_animations.length == 0) {
        const anim = element.animate({transform: "rotate(360deg)"}, 2000);
        anim.id = "spin_animation"
    }
    

    
}