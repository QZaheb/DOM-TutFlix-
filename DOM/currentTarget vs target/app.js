//currentTarget vs Target

let btns = document.querySelectorAll('.btn');

// btns.forEach(function(btn) {
//     btn.addEventListener('click', function(e){
//         // console.log(e.currentTarget);
//         // e.currentTarget.style.color = 'green';
//         console.log('target', e.target);
//         console.log('curret', e.currentTarget);
//         e.target.style.color = ' green';
//     });
// });

btns.forEach(function (btn) {
    btn.addEventListener('click', function(e) {
        e.currentTarget.style.color = 'green';
        console.log('target', e.target);
        console.log('currentTarget', e.currentTarget);
    })
})