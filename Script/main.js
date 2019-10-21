document.querySelector('.menu__boton').addEventListener('click', () => {
    const header = document.querySelector('.header')
    const headerMenu = document.querySelector('.header__menu')

    // if(header.classList.contains('header--desplegado')){
    //   header.classList.remove('header--desplegado')
    // }else{
    //   header.classList.add('header--desplegado')
    // }
    header.classList.toggle('header--desplegado')
    headerMenu.classList.toggle('header__menu--opacity')
})