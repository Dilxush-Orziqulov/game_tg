let heading = document.querySelector('h1');
let btn = document.querySelector('.btn');
let reset_btn = document.querySelector('.reset-btn');

btn.addEventListener('click', ()=>{
    ++heading.textContent
});

reset_btn.addEventListener('click', ()=>{
    heading.textContent = '0'
});

