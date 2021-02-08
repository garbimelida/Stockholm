

const portfolio = (document.querySelector( '.portfolio') as HTMLElement)
const submenu  = (document.querySelector( '.submenu2')  as HTMLElement)

portfolio.addEventListener('click',() => {
    submenu.classList.toggle('ver')
})
