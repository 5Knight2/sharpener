let form=document.querySelector('#addForm');
let ulist=document.querySelector('ul');
let filter=document.querySelector('#filter');

form.addEventListener('submit',addlist);
ulist.addEventListener('click',removelist);
filter.addEventListener('keyup',filterlist);

function addlist(e){
    e.preventDefault();
let txt =document.querySelector('#item');
let txt2 =document.querySelector('#description');


let li=document.createElement('li');
li.className='list-group-item';
li.appendChild(document.createTextNode(txt.value));
li.appendChild(document.createTextNode(' ('+txt2.value+')'));
let btn=document.createElement('button');
btn.className='btn btn-danger btn-sm float-right delete';
btn.appendChild(document.createTextNode('X'));
li.appendChild(btn);

let btn2=document.createElement('button');
btn2.className='btn btn-success btn-sm float-right delete ';
btn2.appendChild(document.createTextNode('edit'));
li.appendChild(btn2);

ulist.appendChild(li);  
}

function removelist(e){
    e.preventDefault();
    
if(e.target.classList.contains('delete')){
    if(confirm('Are you sure?')){
        ulist.removeChild(e.target.parentElement);
    }}
}


function filterlist(e){
    e.preventDefault();
    for(let i=0;i<ulist.children.length;i++){
        if(ulist.children[i].textContent.toLowerCase().indexOf(e.target.value.toLowerCase())==-1 ){
            ulist.children[i].style.display='none';
        }else ulist.children[i].style.display='block';
    }
console.log(ulist.children);
}