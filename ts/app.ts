

const menu = (document.querySelector( '.portfolio') as HTMLElement)
const desplegable  = (document.querySelector( '.submenu2')  as HTMLElement)

menu.addEventListener('click',() => {
    desplegable.classList.toggle('ver')
})
