let header=document.getElementById('header-title');
header.style.borderBottom='3px solid';

let titles=document.getElementsByClassName('title');
titles[0].style.color='green';
titles[0].style.fontWeight='bold';

let items=document.getElementsByClassName('list-group-item');
for(let i=0;i<items.length;i++)items[i].style.fontWeight='bold';
items[2].style.backgroundColor='green';