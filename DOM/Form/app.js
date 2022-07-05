//Form

let form = document.getElementById('form');
let name = document.getElementById('name')
let password = document.getElementById('password');

form.addEventListener('submit', function (e) {
   e.preventDefault();
   console.log('form submited');
   console.log(name.value);
   console.log(password.value);
});