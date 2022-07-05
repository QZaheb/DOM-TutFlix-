//Local Storage with Multiple Values

// let freinds = ['Zia', 'halim', 'payes'];

// localStorage.setItem('freinds', JSON.stringify(freinds));

// let name = JSON.stringify(localStorage.getItem(freinds));
// console.log(name[2]);

// let friut;
// if(localStorage.getItem('friut')){
// friut = JSON.parse(localStorage.getItem('friut'));
// }else {
//    friut = [];
// }
// console.log(friut);
// friut.push('orange');
// friut.push('apple')
// localStorage.setItem('friut', JSON.stringify(friut))

let myFriends = ['payez', 'zia', 'milad'];
localStorage.setItem('friends', JSON.stringify(myFriends));

let name = JSON.stringify(localStorage.getItem(myFriends));
console.log(myFriends[2]);

let friut;
if(localStorage.getItem('friut')){
   friut = JSON.parse(localStorage.getItem('friut'))
}else{
   friut = [];
}
console.log(friut);
friut.push('banana');
localStorage.setItem('friut', JSON.stringify(friut));