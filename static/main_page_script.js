
function add_animation_class() {
    var element = document.getElementById("spinner");

    var current_animations = element.getAnimations()

    //if multiple animations are applied to this element this will not work correctly
    if (current_animations.length == 0) {
        const anim = element.animate({transform: "rotate(360deg)"}, 2000);
        anim.id = "spin_animation"
    }
    

    
}