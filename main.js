
$('.mobile-btn').on('click', function () {
    $('.mobile-btn').toggleClass('show-mobile-btn');
    $('.nav__list').toggleClass('show-menu')
});

$('.nav__list li').on('click', function () {
    $('.mobile-btn').removeClass('show-mobile-btn');
    $('.nav__list').removeClass('show-menu')
});




const section = document.getElementById('section')
const container = document.createElement('div')
container.className = 'container'
const products = document.createElement('h1')
products.textContent = 'Our Products'
const button1 = document.createElement('button')
button1.textContent = 'ICE CREAM'
const button2 = document.createElement('button')
button2.addEventListener('click',()=>{
    window.location.href = '#section3'
})
button2.textContent = 'CAYENNE CHOCOLATE'
const button3 = document.createElement('button')
button3.addEventListener('click',()=>{
    window.location.href = '#section1'
})
button3.textContent = 'CAKE BATTER'
const button4 = document.createElement('button')
const button5 = document.createElement('button')
button5.addEventListener('click',()=>{
    window.location.href = '#section2'
})
button5.textContent = 'CANDY CANE'
const button6 = document.createElement('button')
button6.addEventListener('click',()=>{
    window.location.href = '#section4'
})
button6.textContent = 'PLATTERS'
const button7 = document.createElement('button')
button7.textContent = 'DESSERT'
section.append(container)
container.append(products , button1 , button2 , button3 , button4 , button5 , button6 , button7)

section.style.cssText=`
display: flex;
`
container.style.cssText=`
text-align: center;
margin-top: 50px;
font-size: 25px;
`
button1.style.cssText=`
margin-top:50px;
margin-right: 100px;
background-color: white;
font-family: 'Fredoka One'
`
button2.style.cssText=`
margin-right: 100px;
background-color: white;
font-family: 'Fredoka One'
`
button3.style.cssText=`
margin-right:80px;
background-color: white;
font-family: 'Fredoka One'
`
button5.style.cssText=`
margin-right: 100px;
background-color: white;
font-family: 'Fredoka One'
`
button6.style.cssText=`
margin-right:100px;
background-color: white;
font-family: 'Fredoka One'
`
button7.style.cssText=`
background-color: white;
font-family: 'Fredoka One'
`
const section1 = document.getElementById('section1')
const global1 = document.createElement('div')
global1.className = 'global'
const cont = document.createElement('div')
cont.className = 'container-wrap'
const ice1 = document.createElement('div')
ice1.className = 'col-6'
const img1 = document.createElement('img')
img1.className = 'img1'
img1.src = './ice.png'
const description = document.createElement('div')
description.className = 'col-6'
const ice2 = document.createElement('h2')
ice2.textContent = 'Brown bread'
const p1 = document.createElement('p')
p1.textContent = 'Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.'
const price1 = document.createElement('h2')
price1.textContent = '19.55$'
const btn = document.createElement('button')
btn.addEventListener('click',()=>{
    window.location.href = 'http://fresco.kg/ru#ex3'
})
btn.textContent = 'BUY NOW'
section1.append(global1)
global1.append( cont , ice1 , description )
cont.append(ice1 , description)
ice1.append(img1)
description.append(ice2 , p1 , price1 , btn)

global1.style.cssText=`
max-width: 1240px;
margin: 0 auto;
`
cont.style.cssText=`
display: flex;
`
img1.style.cssText=`
margin-top: 100px;
magin-right: 25px;
`
ice2.style.cssText=`
margin-top: 210px;
font-size: 25px;
font-family: 'Fredoka One'
`
p1.style.cssText=`
font-size: 14px;
margin-top: 25px;
font-family: 'Fredoka One'
`
price1.style.cssText=`
margin-top: 25px;
font-family: 'Fredoka One'
`
btn.style.cssText=`
margin-top: 10px;
height: 49px;
width: 165px;
background-color: #D23166;
border-radius: 5px;
color: white;
font-family: 'Courgette'
`

const section2 = document.getElementById('section2')
const global2 = document.createElement('div')
global2.className='global1'
const cont2 = document.createElement('div')
cont2.className = 'container-wrap-wrap'
const box1 = document.createElement('div')
box1.className = 'box'
const description2 = document.createElement('div')
description2.className = 'col-6'
const ice3 = document.createElement('h2')
ice3.textContent = 'Cayenne chocolate'
const p2 = document.createElement('p')
p2.textContent = 'Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.'
const price2 = document.createElement('p')
price2.textContent = '19.55$'
const btn2 = document.createElement('button')
btn2.addEventListener('click',()=>{
    window.location.href = 'http://fresco.kg/ru#ex3'
})
btn2.textContent = 'BUY NOW'
const box2 = document.createElement('div')
box2.className = 'box-wrap'
const img2 = document.createElement('img')
img2.src = './mango.png'
section2.append(global2)
global2.append(box1 , box2)
box1.append(description2 , ice3 , p2 , price2 ,  btn2)
box2.append(img2)

global2.style.cssText=`
display: flex;
`
cont2.style.cssText=`
max-width: 1240px;
margin: 0 auto;
`
box1.style.cssText=`
margin-top: 190px;
margin-left: 250px;
`
ice3.style.cssText=`
font-family: 'Fredoka One'
`
p2.style.cssText=`
margin-top: 25px;
font-family: 'Fredoka One'
`
box2.style.cssText=`
margin-top: 40px;
margin-right: 100px;
font-size: 18px;
`
price2.style.cssText=`
margin-top: 15px;
font-size: 25px;
font-family: 'Fredoka One'
`
btn2.style.cssText=`
margin-top: 10px;
height: 49px;
width: 165px;
background-color: #D23166;
border-radius: 5px;
color: white;
font-family: 'Courgette'
`
const section3 = document.getElementById('section3')
const global3 = document.createElement('div')
const cont3 = document.createElement('div')
cont3.className = 'container-wrap3'
const box3 = document.createElement('div')
box3.className = 'box3'
const imgg = document.createElement('div')
imgg.className = 'col-6'
const img3 = document.createElement('img')
img3.src = './chocolate.png'
const box4 = document.createElement('div')
box4.className = 'box4'
const des = document.createElement('div')
des.className = 'col-6'
const description3 = document.createElement('h2')
description3.textContent = 'Sweet corn'
const p3 = document.createElement('p')
p3.textContent = 'Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.'
const price3 = document.createElement('p')
price3.textContent = '19.55$'
const btn3 = document.createElement('button')
btn3.addEventListener('click',()=>{
    window.location.href = 'http://fresco.kg/ru#ex3'
})
btn3.textContent = 'BUY NOW'
section3.append(global3)
global3.append(cont3)
cont3.append(box3 , box4)
box3.append(imgg)
imgg.append(img3)
box4.append(des , description3 , p3 , price3 , btn3)

global3.style.cssText=`
display: flex;
`
cont3.style.cssText=`
display: flex;
max-width: 1160px;
margin: 0 auto;
`
img3.style.cssText=`
margin-top:40px;
`
description3.style.cssText=`
margin-top:170px;
font-size: 25px;
font-family: 'Fredoka One';
`
box4.style.cssText=`
margin-left: 40px;
`
p3.style.cssText=`
margin-top: 40px;
font-family: 'Fredoka One';
`
price3.style.cssText=`
margin-top: 15px;
font-size: 25px;
font-family: 'Fredoka One';
`
btn3.style.cssText=`
margin-top: 10px;
height: 49px;
width: 165px;
background-color: #D23166;
border-radius: 5px;
color: white;
font-family: 'Courgette';
`

// const global4 = document.createElement('div')
// global4.className = 'global4'
// const cont4 = document.createElement('div')
// cont4.className = 'container-final-one'
// const box5 = document.createElement('div')
// box5.className = 'box5'
// const box6 = document.createElement('div')
// box6.className = 'box6'
// const scrol = document.createElement('div')
// scrol.className = 'col-6'
// const arrow1 = document.createElement('img')
// arrow1.src = './ellise.png'
// const coment = document.createElement('h2')
// coment.textContent = 'Adele A. McNeill'
// const country = document.createElement('p')
// country.textContent = 'AMERICAN'
// const p4 = document.createElement('p')
// p4.textContent = 'Thanks a lot for the prompt service. Really appreciate. Excellence taste in Every Bite.Add a joy of best Taste. Foodie Moments.'
// const scrol2 = document.createElement('img')
// scrol2.src = './scrol1.png'
// const man1 = document.createElement('img')
// man1.src = './ellise.png'
// const man2 = document.createElement('img')
// man2.src = './ellise.png'
// const man3 = documentc.createElement('img')
// man3.src = './ellise.png'
// const scrol3 = documentc.createElement('img')
// scrol3.src = './scrol2.png'
// const delisious = document.createElement('div')
// delisious.className = 'col-6'
// const creams = document.createElement('img')
// creams.src = './deliscious.png'

// document.body.append(global4)
// global4.append(cont4)
// cont4.append(box5, box6 )
// box5.append(scrol , arrow1 , coment , country , p4 , scrol2 , man1 , man2 , man3 , scrol3)
// box6.append(delisious , creams)

const section4 = document.getElementById('section4')
const global5 = document.createElement('div')
const boxx = document.createElement('div')
boxx.className = 'container'
const col = document.createElement('div')
col.className = 'col-6'
const woman = document.createElement('img')
woman.src = './ellise.png'
const comm = document.createElement('h2')
comm.textContent = 'Adele A. McNeill'
const pas = document.createElement('p')
pas.textContent = 'AMIRICAN'
const description4 = document.createElement('p')
description4.textContent = 'Thanks a lot for the prompt service. Really appreciate. Excellence taste in Every Bite.Add a joy of best Taste. Foodie Moments.'
const coments = document.createElement('div')
const arrow = document.createElement('img')
arrow.src = './scrol1.png'
const man1 = document.createElement('img')
man1.src = './ellise.png'
const man2 = document.createElement('img')
man2.src = './ellise.png'
const man3 = document.createElement('img')
man3.src = './ellise.png'
const arrow2 = document.createElement('img')
arrow2.src = './scrol2.png'
const del = document.createElement('div')
del.className = 'container-ice-wrap'
const deliscious = document.createElement('img')
deliscious.src = './deliscious.png'
section4.append(global5)
global5.append(boxx)
boxx.append(col , del)
col.append(woman , comm , pas , description4 , coments)
coments.append(arrow , man1 , man2 , man3 , arrow2)
del.append(deliscious)

boxx.style.cssText=`
display: flex;
`
woman.style.cssText=`
margin-top: 150px;
`
deliscious.style.cssText=`
margin-top: 50px;
`
comm.style.cssText=`
font-family: 'Fredoka One';
`
pas.style.cssText=`
margin-top: 10px;
font-family: 'Fredoka One';
`
description4.style.cssText=`
font-family: 'Fredoka One';
margin-top: 10px;
`
coments.style.cssText=`
margin-top: 20px;
padding-left: 5px;
`
man1.style.cssText=`
width: 45px;
height: 45px;
`
man3.style.cssText=`
width: 45px;
height: 45px;
`








































