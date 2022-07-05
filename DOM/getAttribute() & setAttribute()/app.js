const first = document.querySelector('.first');
const next = first.getAttribute('id');
console.log(next);

const link = document.getElementById('link');
const getIt = link.getAttribute('href');
console.log(getIt);

const last = link.nextElementSibling;
last.setAttribute('class', 'lastt');
last.textContent = "i also have some attribute"
console.log(last);