let $todoInput;
let $alertInfo;
let $addBtn;
let $ulList;
let $newTask;

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

const prepareDOMEvents = () => {
	$addBtn.addEventListener('click', addNewTask);
};

const addNewTask = () => {
	if ($todoInput.value !== '') {
		$newTask = document.createElement('li');
		$newTask.innerText = $todoInput.value;
		$ulList.appendChild($newTask);

        $todoInput.value = ''
        $alertInfo.innerText = ''
	} else {
		$alertInfo.innerText = 'Enter the content of the task...';
	}
};

document.addEventListener('DOMContentLoaded', main);
