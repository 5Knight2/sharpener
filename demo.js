
let items=document.querySelector('#items');
let h=document.createElement('div');

let p1=document.createElement('li');
p1.className='list-group-item';
let txt=document.createTextNode('Hello');
let txt2=document.createTextNode('Hello');

p1.appendChild(txt);
h.appendChild(txt2);


let li=document.querySelector('ul');
li.parentElement.insertBefore(p1,li);

let h1=document.querySelector('h1');
h1.parentElement.insertBefore(h,h1);
