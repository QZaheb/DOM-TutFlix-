




let list = document.getElementById('first');
let div = document.getElementById('second');
let item = document.querySelector('.item')

console.log(div.textContent);
console.log(list.innerHTML);
console.log(list.textContent);

let ul = document.createElement('ul');
ul.innerHTML = `<ul id="first">
    <li class="item">list</li>
    <li>list item</li>
 </ul>`;
 document.body.appendChild(ul)


 div.textContent = `<ul id="first">
    <li class="item">${rondomVar}list</li>
    <li>list item</li>
 </ul>`;