
const increment = document.querySelector('#incr');
const decrement = document.querySelector('#decr');
const reset = document.querySelector('#res');

const count = document.querySelector('#count');

var data=0;

increment.addEventListener('click', ()=> {
    count.innerHTML = data++;
})

reset.addEventListener('click', ()=> {
    let counter = 0;
    count.innerHTML = `${counter}`;
})


decrement.addEventListener('click', ()=> {
    count.innerHTML = data--;
})


