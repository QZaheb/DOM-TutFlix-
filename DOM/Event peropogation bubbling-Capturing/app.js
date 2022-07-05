//Event peropogation bubbling-Capturing

let container = document.querySelector('.contianer');
let list = document.querySelectorAll('.list- items');
function showBubbling(e) {
    console.log('targer', e.target);
    // console.log('currentTarger', e.currentTarget);
    // if(e.target.classList.contains('link')) {
    //     console.log('you clicked the link');
    // }
}
function stopPropagation(e) {
    console.log('you clicked the list');
    e.stopPropagation();
}
container.addEventListener('click', showBubbling);
list.addEventListener('click', showBubbling);
document.addEventListener('click', showBubbling);
window.addEventListener('click', showBubbling);