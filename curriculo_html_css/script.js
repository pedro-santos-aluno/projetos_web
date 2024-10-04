//========================= VARIÁVEIS DO MENU ===================================
var iconeMenu = document.querySelector('.celular');
var listaMenu = document.querySelector('.opcoes');
//monitora o icone menu, se esta tendo um click
iconeMenu.addEventListener('click',function(){
    alert('teste')
    listaMenu.classList.toggle('mostrarMenu');
});