const mblNav = document.getElementById('mbl-nav');
const navBtn = document.getElementById('check');
const b = document.body;


navBtn.addEventListener('click', ()=> {
    if (mblNav.style.display === 'block') {
        mblNav.style.display = 'none'
        b.style.overflow =''
    } else {
        mblNav.style.display = 'block'
        b.style.overflow ='hidden'
    }
})