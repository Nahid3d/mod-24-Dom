const mainContainer = document.getElementById('mainsection');
const section =document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'My facarate food'
section.appendChild(h1);

const ul = document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText = 'birinay'
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText = 'borhani'
ul.appendChild(li2);

const li3 = document.createElement('li');
li3.innerText = 'salad'
ul.appendChild(li3);

const li4 = document.createElement('li');
li4.innerText = 'ice'
ul.appendChild(li4); 

section.appendChild(ul);

mainContainer.appendChild(section)




// deffrent wey section add



const setDrees = document.createElement('section');
setDrees.innerHTML =`
<h1>my drees colectio </h1>
<ul>
<li>tshart</li>
<li>pant</li>
<li>lungi </li>
<li>pangabi</li>
</ul>
`
mainContainer.appendChild(setDrees);