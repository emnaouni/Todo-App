let inputs =document.querySelector("input");
let boutton=document.querySelector(".btn");
let text = ''




inputs.addEventListener('change', e=> {
     text = e.target.value;
});

boutton.addEventListener('click', e=>{
    let intxt= document.createElement('h5');
    let BTN=document.createElement('button');
    let BTN2=document.createElement('button');
    let li= document.createElement('li');
    intxt.innerHTML=text;
    BTN.innerHTML='Complete';
    BTN.className='complete btn btn-outline-success';
    // BTN.id='bb'
    BTN2.className='delete btn btn-outline-danger';
    BTN2.innerHTML='Delete';
li.appendChild(intxt);
li.appendChild(BTN);
li.appendChild(BTN2);

document.querySelector('#liste').appendChild(li);

BTN.addEventListener('click', function(){
        if(BTN.innerHTML === "Complete" ){
            BTN.innerHTML = 'Undo';
             BTN.previousElementSibling.className = 'mfas5a';
           
        }else{
            BTN.innerHTML= "Complete";
             BTN.previousElementSibling.className = '';
        }
    })


const deleteBtns = document.querySelectorAll('.delete')
deleteBtns.forEach(elm => {
    elm.addEventListener('click', function(){
        elm.parentElement.remove()
    })
})
}
)


// let Edt=document.getElementById("bb");
// let s=document.querySelector('li');
// console.log(Edt);
//  Edt.forEach( elm =>
//     {
//         elm.addEventListener('click' , e => {
//        console.log('hi')
//         elm.innerHTML='Undo';
//         elm.previousElementSibling.className='mfas5a';
//         document.getElementsByClassName('mfas5a');
    
//     })})


// BTN2.addEventListener ('click',e=>{
// li.remove();
// })