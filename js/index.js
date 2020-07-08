let keysDown = {}
document.addEventListener('keydown',(e) => {
    keysDown[e.key] = true
    if (e.key === 'a'){
        document.querySelector('header').style.background = 'blue'
        setTimeout(()=>{
            document.querySelector('header').style.background = 'white'
        },2000)
    }
})
document.addEventListener('keyup',(e) => {
    keysDown[e.key] = null
})
let NavAs = document.querySelectorAll('header nav a')
for (let i = 0; i < NavAs.length; i++){
    NavAs[i].addEventListener('mouseover',(e) => {
        NavAs[i].style['font-weight'] = '1000'
    })
    NavAs[i].addEventListener('mouseout',(e) => {
        NavAs[i].style['font-weight'] = '500'
    })
    NavAs[i].addEventListener('click',(e) => {
        e.preventDefault()
    })
}
let firstH2 = document.querySelector('.container .intro h2')
let firstH2Debounce = true
firstH2.addEventListener('click',(e) => {
    e.stopImmediatePropagation()
    if (!firstH2Debounce){
        return
    }
    firstH2Debounce = false
    firstH2.style.transition = 'all 1s ease'
    firstH2.style['padding-left'] = '5%'
    setTimeout(()=>{
        firstH2.style.transition = 'all .25s ease'
        firstH2.style['padding-left'] = '0'
        setTimeout(()=>{firstH2Debounce = true},500)
    },1000)
})
let firstP = document.querySelector('.container .intro p')
firstP.addEventListener('mousedown',(e) => {
    e.stopImmediatePropagation()
    firstP.style.color = 'grey'
})
firstP.addEventListener('mouseup',(e) => {
    firstP.style.color = 'black'
})
let secondH2 = document.querySelector('.container .content-section h2')
secondH2.addEventListener('dblclick',(e) => {
    secondH2.style.color = 'purple'
})
let secondP = document.querySelector('.container .content-section p')
secondP.addEventListener('mouseenter',(e) => {
    secondP.style.color = 'grey'
})
secondP.addEventListener('mouseleave',() => {
    secondP.style.color = 'black'
})
document.addEventListener('click',()=>{
    console.log('docClick')
})
document.addEventListener('mousedown',() => {
    console.log('docDown')
})
let tl = gsap.timeline({defaults:{duration: 1}})
tl.from('body',{y: -100})
tl.from('img',{duration: 1, opacity: 0, y: -30, ease: 'bounce.out'})