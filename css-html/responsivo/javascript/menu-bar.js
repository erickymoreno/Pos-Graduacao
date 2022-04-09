let status = false
let menu = document.querySelector('#menu')
let iconeMenu = document.querySelector('#icone-menu')


function mostarMenu(){

    if(status){
        menu.style.display = 'none'
        iconeMenu.style.display = 'inline-block'
        status = false
    } else{
        menu.style.display = 'block'
        iconeMenu.style.display = 'none'
        status = true
    }
}