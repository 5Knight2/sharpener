let form=document.querySelector('#addForm');
let ulist=document.querySelector('ul');


form.addEventListener('submit',addlist);
ulist.addEventListener('click',removelist);

function addlist(e){
    e.preventDefault();
let txt =document.querySelector('#item');
let li=document.createElement('li');
li.className='list-group-item';
li.appendChild(document.createTextNode(txt.value));
let btn=document.createElement('button');
btn.className='btn btn-danger btn-sm float-right delete';
btn.appendChild(document.createTextNode('X'));
li.appendChild(btn);

let btn2=document.createElement('button');
btn2.className='btn btn-success btn-sm float-right delete';
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
