//Click Event

let btn = document.querySelector('.btn');
let heading = document.querySelector('h2');
btn.addEventListener('click', function() {
    console.log('hello world');
})

btn.addEventListener('click', function() {
    heading.classList.add('title')
});