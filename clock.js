const stop = document.querySelector('.stopbtn')
const cu1 = document.querySelector('.count1')
const cu2 = document.querySelector('.count2')
const cu3 = document.querySelector('.count3')
const cu4 = document.querySelector('.count4')


const day = setInterval(() => {
    const date = new Date()
    // console.log(date)
    const dy = date.getDate()
    cu1.innerText = `${dy}`
}, 1000)

stop.addEventListener('click', () => {
    clearInterval(day)
})





const hours = setInterval(() => {
    const date = new Date()
    // console.log(date)
    const hrs = date.getHours()
    console.log(hrs);
    // console.log(hrs % 12);
    cu2.innerText = `${hrs % 12}`
    //cu2.innerText = `${hrs}`

}, 1000)

stop.addEventListener('click', () => {
    clearInterval(hours)
})




const min = setInterval(() => {
    const date = new Date()
    console.log(date)
    const min = date.getMinutes()
    cu3.innerText = `${min}`
}, 1000)

stop.addEventListener('click', () => {
    clearInterval(min)
})


const sec = setInterval(() => {
    const date = new Date()
    const sec = date.getSeconds()
    cu4.innerText = `${sec}`
}, 50)

stop.addEventListener('click', () => {
    clearInterval(sec)
})