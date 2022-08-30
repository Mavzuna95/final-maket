const iconMenu = document.querySelector('.menu-icon');
if (iconMenu) {
   const menuBody = document.querySelector('.menu-body');
   iconMenu.addEventListener('click', function(e) {
    iconMenu.classList.toggle('active');
    menuBody.classList.toggle('active');
    document.body.classList.toggle('lock');
   })
}
const iconMenu2 = document.querySelector('.menu-icon-2');
if (iconMenu2) {
   const menuBody = document.querySelector('.menu-body');
   iconMenu2.addEventListener('click', function(e) {
    iconMenu2.classList.toggle('active');
    menuBody.classList.toggle('active');
    document.body.classList.toggle('lock');
   })
}