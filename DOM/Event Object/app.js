//Key Object
let heading = document.querySelector('h1');
let btn = document.querySelector('.btn');

heading.addEventListener('click', function(ido) {
    console.log(ido.currentTarget);
    console.log(this);
});

btn.addEventListener('click', function(event) {
    event.currentTarget.classList.add('title');
    console.log(event.type);
});

function someFunc(e) {
    e.preventDefault();
}