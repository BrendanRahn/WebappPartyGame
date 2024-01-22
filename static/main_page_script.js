
window.onload = main;


function main() {
    var spinner = document.getElementById("spinner");
    spinner.addEventListener("click", function (event) {
            animate_spinner();
    });

    var close_buttons = document.getElementsByClassName("close_button");
    for(var i=0; i<close_buttons.length; i++) {
        close_buttons[i].addEventListener("click", function(event) {
            var ancestor_div = event.target.closest("div").id;
            close_window(ancestor_div);
        });
    }
    
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
    
    input_div.style.display = "block";
    input_div.style.opacity = 0;
    
    const animation = input_div.animate([
        {opacity: 0, offset: 0},
        {transform: "scale(150%)", offset:0.5},
        {opacity: 1, offset: 1},
        {transform: "scale(100%)", offset: 1}
    ], 300);
    
    input_div.style.opacity = 1;

}

function close_window(element_id) {
    var element = document.getElementById(element_id);

    element.style.display = "none";
}

function submit_song() {
    console.log("hit");
}