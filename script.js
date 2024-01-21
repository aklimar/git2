// let button = document.querySelector('.btn'); // Добавьте кавычки вокруг селектора '.btn'

// button.addEventListener('click', function clickButt() { // Используйте 'click' вместо onclick и исправьте ClassList на classList
//     button.classList.toggle('clicked');
//     console.log('rr');
// });
function sumTimesTables(tables, min, max){
    let x=0;
    for(let numbInt of tables){
      for(let i=min;i<=max;i++){
        x+=numbInt*i;
      }
    }
    return x;
  }
console.log(sumTimesTables([2,5],1,3))