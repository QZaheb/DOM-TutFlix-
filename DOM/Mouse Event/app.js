//Mouse Event

let btn = document.querySelector('.btn');
let heading = document.querySelector('h2');

btn.addEventListener('click', function(){
    console.log('you clicked me');
});

btn.addEventListener('mousedown', function() {
    console.log('down');
});

btn.addEventListener('mouseup', function() {
    console.log('up');
})

btn.addEventListener('mouseenter', function() {
    heading.classList.add('title');
});

btn.addEventListener('mouseleave', function() {
    heading.classList.remove('title')
});