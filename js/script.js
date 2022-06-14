window.addEventListener('load', function(){
    const btnScroll = document.querySelector('.btn-scroll')

    btnScroll.addEventListener('click', function(){
        const header = document.querySelector('.header')
        const clientHeight = header.clientHeight
        let time = 0
        const timer = setInterval(() =>{
            time = time + 150
            window.scrollTo(0,time)
            if(time>=clientHeight-100){
                clearInterval(timer)
            }
        },10)
        console.log(clientHeight )
        
    })
})