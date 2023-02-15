let $todoInput;
let $alertInfo;
let $addBtn;
let $ulList;

const main = () => {
	prepareDOMElements();
	prepareDOMEvents();
};

const prepareDOMElements = () => {
	$todoInput = document.querySelector('.todoInput');
	$alertInfo = document.querySelector('.alertInfo');
	$addBtn = document.querySelector('.addBtn');
	$ulList = document.querySelector('.todoList ul');
};

const prepareDOMEvents = () => {};

document.addEventListener('DOMContentLoaded', main);
