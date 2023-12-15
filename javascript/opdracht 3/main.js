const div = document.querySelector(".box");
const kip = document.querySelector(".run");
const btnChange = document.querySelector(".change")
let toggle = true;
const btn2 = document.querySelector


// btn.addEventListener("click", Function(){
//     const element = document.querySelector(".box")
//     element.classList.toggle("error")

// });



/*btn.addEventListener("click", function () {
    if (toggle) {
        div.classList.add("error");
    } else {
        div.classList.remove("error");
    }
    toggle = !toggle;
});








btn.addEventListener("click", function () {
    div.classList.add("error");

});

btnChange.addEventListener("click", function () {
    div.classList.remove("error");
});
*/

btn.addEventListener("click" , function(){
    if (animated) {
        div.classList.add("blinker");
    } else {
        div.classList.remove("blinker");
    }
});


const toggleButton = document.querySelector('.run');
const box = document.querySelector('.box');
 
toggleButton.addEventListener('click', function() {
  box.classList.toggle('error');
});
 
const box2 = document.querySelector('.box2');
const btn = document.querySelector('.animate')
 
btn.addEventListener('click', function() {
  box2.classList.toggle('blinker');
  box2.classList.add('font')
});