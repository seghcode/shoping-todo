/*
// let button = document.getElementsByTagName("button")[0]

// button.addEventListener("mouseleave", function () {
//     console.log("Click!!!");
// })

 
*/
let button = document.getElementById('enter');
let input = document.getElementById('userInput');
let ul = document.querySelector('ul');
let li = document.getElementsByTagName('li');


liEvent();
buttonListElement();


function inputLength() {
    return input.value.length       
}

function createListElement() {
    let li = document.createElement('li');
    let button = document.createElement('button');
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    li.appendChild(button);
    button.innerHTML = "delete";
    input.value = '';

    liEvent();
    buttonListElement();
}

function addListAfterClick() {
    if(inputLength() > 0){
        createListElement();
    }
}

function addListAfterKeypress(e) {
    if(inputLength() > 0 && e.keyCode === 13){
        createListElement()
    }
}

function liEvent(){
	for(let i=0; i<li.length; i++){
	li[i].addEventListener('click', changeClass)
    }
    
}

function changeClass(){
	this.classList.toggle('done');
}

function buttonListElement(){
	var button = document.querySelectorAll('li button');
	for(let i=0; i<button.length; i++){
	button[i].addEventListener('click', clearElement)
	}
}

function clearElement(){
	for(let i=0; i<li.length; i++){
		this.parentNode.remove()
	}
}

button.addEventListener('click', addListAfterClick
);

input.addEventListener('keypress', addListAfterKeypress);
