const burger = document.querySelector('.burger')
const nav = document.querySelector('nav')
const navItems = document.querySelectorAll('.nav-items')

// it works only size of screen is smaller than 768px
if(document.body.clientWidth < 768) {
    
    // navitagion toggle animation
    burger.addEventListener('click', () => {
        burger.classList.toggle('active')
        nav.classList.toggle('active')
    })
    burger.addEventListener('keypress', (e) => {
        e.code == 'Enter' ? burger.classList.toggle('active') : ''
        e.code == 'Enter' ? nav.classList.toggle('active') : ''
    })
    
    // sub menu animation
    navItems.forEach(item => {
        
        item.addEventListener('click', () => {
            
            // removes active classes in the ul.sub-menu if exists 
            navItems.forEach(item => {
                item.classList.remove('active')
                if(item.children[1]) {
                    item.children[1].classList.remove('active')
                    item.children[1].style.height = 0
                }
            })
            
            // sub menu toggle animation
            if(item.children[1]) {
                const length = item.children[1].children.length
                
                if(!item.children[1].classList.contains('active')) {
                    item.classList.add('active')
                    item.children[1].style.height = `${5 * length}rem`
                } else {
                    item.children[1].style.height = 0
                }
                item.children[1].classList.toggle('active')
            }
        })

        item.addEventListener('focus', () => {
            
            // removes active classes in the ul.sub-menu if exists 
            navItems.forEach(item => {
                item.classList.remove('active')
                if(item.children[1]) {
                    item.children[1].classList.remove('active')
                    item.children[1].style.height = 0
                }
            })
            
            // sub menu toggle animation
            if(item.children[1]) {
                const length = item.children[1].children.length
                
                if(!item.children[1].classList.contains('active')) {
                    item.classList.add('active')
                    item.children[1].style.height = `${5 * length}rem`
                } else {
                    item.children[1].style.height = 0
                }
                item.children[1].classList.toggle('active')
            }
        })
    })
}
