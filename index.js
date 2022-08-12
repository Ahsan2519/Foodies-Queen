const mob_nav = document.querySelector(".navbar-mobile-btn");
const nav_header = document.querySelector(".header");
const toggleNavbar= ()=>{
    nav_header.classList.toggle("active");
}
mob_nav.addEventListener("click", ()=> toggleNavbar());


$(document).ready(function(){
    $('.control .buttons').click(function(){
        $(this).addClass('button-active').siblings().removeClass('button-active');
        let filter =$(this).attr('data-filter');
        if (filter=='all'){
            $('.dish .image').show();
        }
        else{
            $('.dish .image').not('.'+filter).hide();
            $('.dish .image').filter('.'+filter).show();
        }
    });
});