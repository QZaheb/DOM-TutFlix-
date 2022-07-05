const result = document.getElementById('red');

const bodyDiv = document.createElement('div');
const text = document.createTextNode('a simple div');
bodyDiv.appendChild(text);
document.body.appendChild(bodyDiv);

const heading = document.createElement('h2');
const textNode = document.createTextNode('dynmne div');

heading.appendChild(textNode);
heading.classList.add('red');

result.appendChild(heading);

console.log(result.children);


