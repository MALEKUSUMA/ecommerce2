const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav= document.getElementById('navbar');

if (bar){
    bar.addeventListener('click',()=>{
     nav.classList.add('active')
    })
 }
 if (close){
    close.addeventListener('click',()=>{
     nav.classList.remove('active')
    })
 }