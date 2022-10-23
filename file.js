var itemList=document.querySelector('#items');
console.log(itemList.parentNode);


//Parent Element
console.log(itemList.parentElement);

// Last child
console.log(itemList.lastChild);

//Last element child
console.log(itemList.lastElementChild);

// First Element child
console.log(itemList.firstElementChild);

//First child
console.log(itemList.firstChild)

//next sibling
console.log(itemList.nextSibling)

//next element sibling
console.log(itemList.nextElementSibling)

//previous sibling
console.log(itemList.previousSibling)

//previous element sibling
console.log(itemList.previousElementSibling)


//CREATING NEW ELEMENT 
var newDiv=document.createElement('div')
newDiv.setAttribute('title','Hello')

console.log(newDiv)

//adding text Node
var newDivText=document.createTextNode('HELLO')

//append 

newDiv.appendChild(newDivText)

//adding to DOM
var container=document.querySelector('header.container')
var h1=document.querySelector('header h1')
console.log(newDiv)


container.insertBefore(newDiv,h1);

