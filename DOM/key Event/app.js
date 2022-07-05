let inputName = document.getElementById('name');

inputName.addEventListener('keypress', function() {
    console.log('you pressed a ker');
});
inputName.addEventListener('keydown', function() {
    console.log('down');
});
inputName.addEventListener('keyup', function() {
    console.log('up');
});
inputName.addEventListener('keyup', function() {
    console.log(inputName.value);
});