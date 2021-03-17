//Examine the document object
// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// document.title = 123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
//document.all[10].textContent = 'Hello';
// console.log(document.form);
// console.log(document.link);
// console.log(document.image);

// GETELEMENTBYID //
//console.log(document.getElementById('header-title'));
// const headerTitle = document.getElementById('header-title');
// const header = document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent = 'Hello';
// headerTitle.innerText = 'Goodbye';
// console.log(headerTitle.innerText);
// headerTitle.innerHTML = '<h3>Hello</h3>';
// headerTitle.style.borderBottom = 'solid 4px #ec4'; //How to change CSS style

//GETELEMENTBYCLASSNAME //
// const items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Happy';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'coral';

// //gives error
// //items.style.backgroundColor = 'blue';

// for(let i = 0; i < items.length; i++){
//   items[i].style.backgroundColor = 'brown';
// }

// GETELEMENTBYTAGNAME //
// const li = document.getElementsByTagName('li');
//  console.log(li);
//  console.log(li[1]);
//  li[1].textContent = 'Happy';
//  li[1].style.fontWeight = 'bold';
//  li[1].style.backgroundColor = 'blue';

//  //gives error
// // items.style.backgroundColor = 'blue';

// for(let i = 0; i < li.length; i++){
//   li[i].style.backgroundColor = 'yellow';
// }

//QUERY SELECTOR:This is used for only one item 
// let header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px yellow';

// let input = document.querySelector('input');
// input.value = 'Hello World';

// let submit = document.querySelector('input[type="submit"]');
// submit.value = 'SEND';

// let item = document.querySelector('.list-group-item');
// item.style.color = 'coral';

// const lastItem = document.querySelector
// ('.list-group-Item:last-child');

// lastItem.style.color = 'blue';

// const secondItem = document.querySelector
// ('.list-group-item:nth-child(2)');
// secondItem.style.color = 'blue';

//QUERYSELECTORALL: It grabs more than one element//

let titles = document.querySelectorAll('.title');
console.log(titles);
titles[0].textContent = 'Hello';

let odd = document.querySelectorAll('li:nth-child(odd)');
let even = document.querySelectorAll('li:nth-child(even)');

for(let i = 0; i < odd.length; i++){
  odd[i].style.backgroundColor = 'pink';
}

for(let i = 0; i < even.length; i++){
  even[i].style.backgroundColor = 'lavender';
}



