window.addEventListener('load', function(){
    const btnScroll = document.querySelector('.btn-scroll')
    const imgSchool = document.querySelector('.experience__img')
    const clientHeightimgSchool = imgSchool.clientHeight
    const foneLink = document.querySelector('.experience__fone')
    foneLink.style.height = clientHeightimgSchool + 10 + 'px'

    btnScroll.addEventListener('click', function(){
        const header = document.querySelector('.header')
        const clientHeightHeader = header.clientHeight
        let time = 0
        const timer = setInterval(() =>{
            time = time + 150
            window.scrollTo(0,time)
            if(time>=700){
                clearInterval(timer)
            }
        },10)
    })

    const menu = document.querySelector('.menu__main')
    const newMenu = menu.cloneNode(true)
    newMenu.classList.add('newMenu')
    console.log(newMenu)

    const btnMenu = document.querySelector('.btnMenu')
	let activeMenu = false;
    const modalMenu = document.querySelector('.modal')
    const overlayMenu = document.querySelector('.overlay')
    modalMenu.insertAdjacentElement('afterbegin' , newMenu)
    btnMenu.addEventListener('click' , ()=>{
		
		overlayMenu.style.display = 'block'
		const btnMenu__lineTop = document.querySelector('.btnMenu__lineTop')
		const btnMenu__lineCenter = document.querySelector('.btnMenu__lineCenter')
		const btnMenu__lineBottom = document.querySelector('.btnMenu__lineBottom')

        overlayMenu.addEventListener('click', (e)=>{
            console.log(e.target.classList)
            let time = 100
            btnMenu__lineTop.classList.remove('activeTop')
			btnMenu__lineCenter.classList.remove('activeCenter')
			btnMenu__lineBottom.classList.remove('activeBottom')
            if(e.target.classList.contains('menu__link')){
                let timer = setInterval(()=>{
                    btnMenu.setAttribute('disabled' , 'disabled')
                    time--
                    overlayMenu.style.width = time + '%'
                    if(time <= 0){
                       
                        btnMenu.removeAttribute('disabled')
                        overlayMenu.style.display = 'none'
                        clearInterval(timer)
                    }
                },10)
                activeMenu = false
                return activeMenu
            }
        })
        
		if(!activeMenu){
            let time = 0
            overlayMenu.style.display = 'block'
			btnMenu__lineTop.classList.add('activeTop')
			btnMenu__lineCenter.classList.add('activeCenter')
			btnMenu__lineBottom.classList.add('activeBottom')
			activeMenu = true
            let timer = setInterval(()=>{
                btnMenu.setAttribute('disabled' , 'disabled')
                time++
                overlayMenu.style.width = time + '%'
                if(time >= 100){
                    btnMenu.removeAttribute('disabled')
                    
                    clearInterval(timer)
                }
            },10)
			return activeMenu
		}
		else{
            let time = 100
			btnMenu__lineTop.classList.remove('activeTop')
			btnMenu__lineCenter.classList.remove('activeCenter')
			btnMenu__lineBottom.classList.remove('activeBottom')
            let timer = setInterval(()=>{
                btnMenu.setAttribute('disabled' , 'disabled')
                time--
                overlayMenu.style.width = time + '%'
                if(time <= 0){
                   
                    btnMenu.removeAttribute('disabled')
                    overlayMenu.style.display = 'none'
                    clearInterval(timer)
                }
            },10)
			activeMenu = false
			return activeMenu
		}
        
	})
    
})