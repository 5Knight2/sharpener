let header=document.getElementById('header-title');
header.style.borderBottom='3px solid';

let titles=document.getElementsByClassName('title');
titles[0].style.color='green';
titles[0].style.fontWeight='bold';

//let item2=document.querySelector('.list-group-item:nth-child(2)');
//item2.style.backgroundColor='green';

//let item3=document.querySelector('.list-group-item:nth-child(3)');
//item3.style.visibility='hidden';

let items=document.querySelectorAll('.list-group-item');
items[1].style.color='green';

for(let i=0;i<items.length;i++){
    if(i%2==1){items[i].style.backgroundColor='green';}
}
