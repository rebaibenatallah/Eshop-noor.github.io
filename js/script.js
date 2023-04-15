// start option search
let nice_select = document.querySelector('.nice-select');
let list_search = document.querySelector('.list');

nice_select.onclick = function(){
    nice_select.classList.toggle('active');
    list_search.classList.toggle('active');    
}
// end option search

// start menu
let button_menu = document.getElementById('button_menu');
let slicknav_nav = document.getElementById('menu');
button_menu.onclick = function(){
    slicknav_nav.classList.toggle('slicknav_hidden');
    console.log(4);
}
// $(function(){
//     $('#menu').slicknav();
// });
// end menu

// start search bar
let search_bar = document.getElementById('search-bar');
let search_top = document.querySelector('.search-top');
search_bar.onclick = function(){
    search_top.classList.toggle('active');
}
// end search bar