// var images =[
//     'room2.jpg',
//     'room1.jpg',
//     'room3.jpg',
//     'bvd.jpg'
// ];

var bard = document.getElementById('bars');
var clls = document.getElementById('clooss');
var bg = document.querySelector('.li-con');


// var row = document.querySelector('.slide-row');
// var dots = document.getElementsByClassName('dot');
// var prev = document.querySelector('.prev');
// var next = document.querySelector('.next');
// var imge = document.getElementById('ff');
// var she = document.querySelector('.she');
// var cap = document.querySelector('.cap');
// var sharebtn = document.getElementById('share-btn');
// var shareop = document.querySelector('.share-op');


// var ee = slide.length;

// var i =0;
// var c=0;

// next.addEventListener('click', ()=>{
//     c++;
//     if(c >= images.length){
//         c=3;
//     }
//     imge.src=images[c];
//     cap.innerHTML=(c +1) +'/4';
// }) 


if(bard){
    bard.addEventListener('click', () => {
        bg.classList.add('activer');
        bard.classList.add('vgt');
        // alert('let');
        
    })
}
if(clls){
    clls.addEventListener('click', () => {
        bg.classList.remove('activer');
        bard.classList.remove('vgt');
    })
}

// prev.addEventListener('click', ()=>{
//     c--;
//     if(c <=i){
//         c=0;
//     }
//     imge.src=images[c];
//     cap.innerHTML=(c +1) +'/4';
// })


// she.addEventListener('click', ()=>{
//     shareop.classList.toggle('active');
// })


// console.log(vfg);

// whas.addEventListener('click',()=>{
//     window.open(url = whasApi, target='blank')
// })


