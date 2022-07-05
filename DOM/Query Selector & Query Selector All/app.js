const result = document.querySelector('.special');
result.style.backgroundColor = 'yellow';
console.log(result);

const item = document.querySelector('#special');
item.style.backgroundColor = 'red';

const lastItem = document.querySelector('li:last-child');
// console.log(lastItem);

const list = document.querySelectorAll('.special');

list.forEach(function(item) {
    console.log(item);
    item.style.backgroundColor = 'white';
})