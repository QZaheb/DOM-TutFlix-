//Local Storage

// localStorage.setItem('name', 'john');
// sessionStorage.stItem('name', 'john');

localStorage.setItem('name', 'qais');
localStorage.setItem('job', 'developer');
localStorage.setItem('series', 'game of throns');

let name = localStorage.getItem('name');
console.log(name);

localStorage.removeItem('name');

let anotherName = localStorage.getItem('name');
console.log(anotherName);

// localStorage.clear();