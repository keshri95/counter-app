
const increment = document.querySelector('#incr');
const decrement = document.querySelector('#decr');
const reset = document.querySelector('#res');

const count = document.querySelector('#count');

var data=0;

increment.addEventListener('click', ()=> {
    data=data+1;
    count.innerHTML = data;
})

reset.addEventListener('click', ()=> {
    data=0;
    count.innerHTML = data;
})


decrement.addEventListener('click', ()=> {
    data=data-1;
    count.innerHTML = data;
})


