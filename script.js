



const btn1 =  document.querySelector('.button1')
const menu_bar =  document.querySelector('.menu-outline')




btn1.style.cursor ='pointer'
document.querySelector('.button1').addEventListener('click',()=>{
    alert('BTN1 clicked')
})


menu_bar.addEventListener('click',()=>{
 menu_bar.classList.toggle('fa-bars')
 menu_bar.classList.toggle('fa-window-close')
})