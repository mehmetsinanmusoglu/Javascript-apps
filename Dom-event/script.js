//ilk bölüm---------------------------------------------------------
// let val;

// val = window.document;
// val = document.all;
// val = document.all.length;
// val = document.all[10];
// val = document.head;
// val = document.body;
// val = document.anchors;
// val = document.URL;
// val = document.domain;
// val = document.images;
// val = document.title;
// val = document.forms;
// val = document.forms[0];
// val = document.forms[0].id;
// val = document.forms[0].method;
// val = document.forms[0].action;
// val = document.scripts;
// val = document.scripts[2];
// val = document.scripts[2].getAttribute('src');


// console.log(val);
//ikinci bölüm---------------------------------------------------------

// Selecting Elements++++++++++++++++++++++++++++++++++++++++

// *** Single Elements
// document.getElementById********************

// let val;

// val = document.getElementById('header');
// val = document.getElementById('header').id;
// val = document.getElementById('header').className;

// val = document.getElementById('header');
// // val = val.id;
// // val = val.className;

// val.style.fontSize = '45px';
// val.style.color = 'red';
// val.style.fontWeight = 'bold';
// // val.style.display = 'none';
// document.getElementById('header').innerText = 'my ToDo App';
// document.getElementById('header').innerHTML = '<b>my ToDo App</b>';

// document.querySelector()**********************

// let val;
// val = document.querySelector('#header');
// val = document.querySelector('.card-header');
// document.querySelector('li').style.color='red';
// document.querySelector('li:last-child').style.color='blue';
// document.querySelector('li:nth-child(2)').style.color='yellow';
// document.querySelector('li:nth-child(3)').textContent='task item';

// // document.querySelector('li').className='list-group-item list-group-item-primary';

// document.querySelector('li').classList.add('active');


// console.log(val);

// *** Multiple Elements +++++++++++++++++++++++++++++++++++++++++

// class name
// document.getElementsByClassName()

// let val ;

// // val = document.getElementsByClassName('list-group-item');
// // // val = document.getElementsByClassName('list-group-item')[0];

// // val[1].style.color = 'blue';
// // val[1].style.fontSize='25px';
// // val[2].textContent='new item';

// // for(let i=0; i<val.length; i++){
// //     console.log(val[i].style.color = 'red');
// //     console.log(val[i].textContent='new item');
// // }

// // document.getElementsByTagName()

// // val = document.getElementsByTagName('li');
// // val = document.getElementById('task-list').getElementsByTagName('a');

// // val = document.querySelectorAll('li');
// // val.forEach(function(item, index){
// //     item.textContent = `${index} - hello`; 
// // });

// val = document.querySelectorAll('li:nth-child(even)');

// val.forEach(function(item){
//     item.style.background = '#ccc';
// });


// console.log(val);

// Üçüncü Bölüm --------------------------------------------
// Traversing the Dom
// let val;

// let list = document.querySelector('.list-group');

// val = list;

// val = list.childNodes;
// val = list.childNodes[0];
// val = list.childNodes[0].nodeName;
// val = list.childNodes[0].nodeType;// 3 text
// val = list.childNodes[1].nodeType;// 1 element

// val = list.children;
// val = list.children[0];
// val = list.children[2];

// val = list.children[2].textContent = 'new item';
// val = list.children[3].children;

// val = list.firstChild;
// val = list.firstElementChild;

// val = list.lastChild;
// val = list.lastElementChild;

// val = list.childElementCount;

// val = list.parentNode;
// val = list.parentElement;
// val = list.parentElement.parentElement;

// val = list.children[0].nextSibling;
// val = list.children[0].nextElementSibling;

// val = list.children[1].previousSibling;
// val = list.children[1].previousElementSibling;

// // val = list.children;

// console.log(val);

// for(let i=0; i<list.childNodes.length;i++){
//     if(list.childNodes[i].nodeType === 3){
//         console.log(list.childNodes[i]);
//     }
// }


// // Dördümcü Bölüm Creating Elements---------------------------------------------

// // create elemnt

// const li = document.createElement('li');

// //add class
// li.className='list-group-item list-group-item-secondary';
// // attribute
// li.setAttribute('title', 'new item');
// li.setAttribute('data-id', '5');

// //text node
// const text = document.createTextNode('new item');
// li.appendChild(text);

// const a = document.createElement('a');
// a.setAttribute('href','#');
// a.className='delete-item float-right';
// a.innerHTML='<i class="fas fa-times"></i>';
// //append a to li
// li.appendChild(a);

// //append li to ul

// document.querySelector('#task-list').appendChild(li);


// console.log(li);

// Ders Beş ---------------------------------------------------

// const taskList = document.querySelector('#task-list');

// ** removing element
// taskList.remove();
// taskList.childNodes[7].remove();
// taskList.children[3].remove();
// taskList.removeChild(taskList.children[3]);

// ** removing attribute
// taskList.children[0].removeAttribute('class'); 

// for(let i=0; i<taskList.children.length; i++){
//     taskList.children[i].removeAttribute('class');
// }

// ** Replacing Elemnts
// const cardHeader = document.querySelector('.card-header');

// // create element 
// const h2 = document.createElement('h2');
// h2.setAttribute('class','card-header');
// h2.appendChild(document.createTextNode('My List'));

// const parent = document.querySelector('.card');
// parent.replaceChild(h2,cardHeader);

// console.log(cardHeader);

// ** Classes
// let val;

// link = taskList.children[0].children[0];

// // val = link.className;
// // val = link.classList;
// // val = link.classList[0];
// // val = link.classList[1];

// // link.classList.add('new');
// // link.classList.remove('new');

// // Attributes

// val = link.getAttribute('class');
// val = link.getAttribute('href');
// val = link.setAttribute('href', 'http://mehmetsinan.com');
// val = link.hasAttribute('data-val');


// console.log(val);

// Altıcı Ders-----------------------------------------------------------------
// const btn =  document.querySelector('#btnDeleteAll');
// const btn2 =  document.querySelector('#btnAddNewTask');

// btn.addEventListener('click',function(e){
//     let val;
//     val = e;
//     val = e.target;
//     val = e.target.id;
//     val = e.target.classList;
//     val = e.type;
//     console.log(val);
//     e.preventDefault();
// });


// btn.addEventListener('click',btnClick);
// btn.addEventListener('click',btnClick2);
// btn2.addEventListener('click',btnClick);

// function btnClick(){
//     console.log('btn click');
// }

// function btnClick2(){
//     console.log('btn 2 click');
// }

// Yedinci Ders --------------------------------------------------------------
// Mouse Events
// const btn = document.querySelector('#btnDeleteAll');
// const ul = document.querySelector('#task-list');

// btn.addEventListener('click', eventHandler);
// ul.addEventListener('click', eventHandler);

// double click
// btn.addEventListener('dblclick', eventHandler);

// // mouse down
// btn.addEventListener('mousedown', eventHandler);

// // mouse up
// btn.addEventListener('mouseup', eventHandler);

// //mouseenter
// ul.addEventListener('mouseenter', eventHandler);

// //mouseleave
// ul.addEventListener('mouseleave', eventHandler);

// //mouseovsr
// ul.addEventListener('mouseover', eventHandler);

// //mouseout
// ul.addEventListener('mouseout', eventHandler);


// mouse move
// const h5 = document.querySelector('h5');
// ul.addEventListener('mousemove', eventHandler);


// function eventHandler(event){
//     console.log(`event type : ${event.type}`);
//     event.preventDefault();
//     h5.textContent = `Mouse X : ${event.offsetX} Mouse Y : ${event.offsetY}`;
// }

//Sekizinci Ders----------------------------------------------------------
// Keyboard Events

// const input = document.querySelector('#txtTaskName');
// const form = document.querySelector('form');
// const select = document.querySelector('#select');

// // input.addEventListener('keydown', eventHandler);
// // input.addEventListener('keyup', eventHandler);
// // input.addEventListener('keypress', eventHandler);
// // input.addEventListener('focus', eventHandler);
// // input.addEventListener('blur', eventHandler);
// // input.addEventListener('cut', eventHandler);
// // input.addEventListener('paste', eventHandler);
// // input.addEventListener('select', eventHandler);

// // form.addEventListener('submit', eventHandler);
// select.addEventListener('change', eventHandler);

// function eventHandler(e){
//     console.log('event type : ' + e.type);
//     // console.log('key code : ' + e.keyCode);
//     console.log('value : ' + e.target.value);
    
//     // e.target.style.backgroundColor = 'yellow';
//     e.preventDefault();
// }

// Dokuzuncu Ders----------------------------------------------------------
// Event Bubbling

// const form = document.querySelector('form');
// const cardBody = document.querySelector('.card-body');
// const card = document.querySelector('.card');
// const container = document.querySelector('.container');


// form.addEventListener('click', function(e){
//     console.log('form');
//     e.stopPropagation();

// })

// cardBody.addEventListener('click', function(e){
//     console.log('card body');
//     e.stopPropagation();

// })

// card.addEventListener('click', function(e){
//     console.log('card');
//     e.stopPropagation();

// })

// container.addEventListener('click', function(e){
//     console.log('container');
//     e.stopPropagation();
// })


// form.addEventListener('click', function(e){
//     console.log('form');
//     // e.stopPropagation();

// },true);

// cardBody.addEventListener('click', function(e){
//     console.log('card body');
//     // e.stopPropagation();

// },true);

// card.addEventListener('click', function(e){
//     console.log('card');
//     // e.stopPropagation();

// },true);

// container.addEventListener('click', function(e){
//     console.log('container');
//     // e.stopPropagation();
// },true);

// const deleteItem = document.querySelectorAll('.fa-times');

// deleteItem.forEach(function(item){
//     item.addEventListener('click',function(e){
//         console.log(e.target);
//     })
// });

// const ul = document.querySelector('ul');

// ul.addEventListener('click', function(e){
//     // console.log(e.target);
//     if(e.target.className === 'fas fa-times'){
//         console.log(e.target);
//         e.target.parentElement.parentElement.remove();
//         e.preventDefault();
//     }
// });

// Onuncu Ders-------------------------------------------------------------
// LOCAL STORAGE
// let val;


// // set item
// const firstName = localStorage.setItem('firstName', 'Mehmet');
// const lastName = localStorage.setItem('lastName', 'Sinan');
// let hobies = ['sinema', 'araba', 'gezmek'];

// // get item
// val = localStorage.getItem('firstName');
// val = localStorage.getItem('lastName');

// // remove item
// // localStorage.removeItem('firstName');
// // localStorage.removeItem('lastName');

// // clear
// // localStorage.clear();

// //set array to storage
// localStorage.setItem('hobies', JSON.stringify(hobies));

// val = JSON.parse(localStorage.getItem('hobies'));

// console.log(val);
// console.log(localStorage);



// //SESSION STORAGE

// const city = sessionStorage.setItem('city', 'Adana');

// const country = sessionStorage.setItem('country', 'Türkiye');

// console.log(sessionStorage);
