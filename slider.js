const sliderContainer = document.querySelector(".slider-container")
const sliderItem = document.querySelectorAll(".item-slider")
const dotItem = document.querySelectorAll(".dot")
const timeOut = 3000
let index = 0
let timer = setInterval(sliderRun, timeOut)

function sliderRun(){
    if(index === sliderItem.length) {
        index = 0
    }
    sliderItem.forEach(function(item){
        item.classList.remove("active")
    })
    sliderItem[index].classList.add("active")
    dotItem.forEach(function(dot){
        dot.classList.remove("active")
    })
    dotItem[index].classList.add("active")
    index++
}

sliderContainer.addEventListener("mouseover",function(){
    clearInterval(timer)
})
sliderContainer.addEventListener("mouseout",function(){
    timer = setInterval(sliderRun, timeOut)
})

dotItem.forEach(function(dot, indexDot){
    dot.addEventListener("click", function(){
        clearInterval(timer)
        sliderItem.forEach(function(item){
          item.classList.remove("active")
        })
        dotItem.forEach(function(item){
          item.classList.remove("active")
        })
        dotItem[indexDot].classList.add("active")
        sliderItem[indexDot].classList.add("active")
        index = indexDot
        timer = setInterval(sliderRun, timeOut)
    })
})