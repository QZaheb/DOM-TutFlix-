const first = document.getElementById('first');
const second = document.getElementById('second');
const third = document.getElementById('third');

const classValue = third.className;
console.log(classValue);

second.className = 'colors text';
console.log(second);

third.classList.add('color');
const next = third.classList;
console.log(next);

let result = third.classList.contains('color');
if(result) {
    console.log("hello qais")
}else {
    console.log("hello zaheb")
}
//next

// third.classList.remove('color');

// let resultt = third.classList.contains('color');
// if(resultt) {
//     console.log("hello qais")
// }else {
//     console.log("hello zaheb")
// }

const name = third.className;
console.log(name);