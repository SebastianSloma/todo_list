let $todoInput;
let $alertInfo;
let $addBtn;
let $ulList;
let $newTask;

let $popup;
let $popupInfo;
let $editedTodo;
let $popupInput;
let $addpopupBtn;
let $closeTodoBtn;
let $idNumber = 0;
let $allTasks

const main = () => {
	prepareDOMElements();
	prepareDOMEvents();
};

// download elements
const prepareDOMElements = () => {
	$todoInput = document.querySelector('.todoInput');
	$alertInfo = document.querySelector('.alertInfo');
	$addBtn = document.querySelector('.addBtn');
	$ulList = document.querySelector('.todoList ul');

	$popup = document.querySelector('.popup');
	$popupInfo = document.querySelector('.popupInfo');
	$popupInput = document.querySelector('.popupInput');
	$addpopupBtn = document.querySelector('.accept');
	$closeTodoBtn = document.querySelector('.cancel');
    $allTasks = $ulList.getElementsByTagName('li')
};

// broadcasting listening
const prepareDOMEvents = () => {
	$addBtn.addEventListener('click', addNewTask);
	$ulList.addEventListener('click', checkClick);
	$closeTodoBtn.addEventListener('click', closePopup);
	$addpopupBtn.addEventListener('click', changeTodo);
};

// Add a new task
const addNewTask = () => {
	if ($todoInput.value !== '') {
		$idNumber++;
		$newTask = document.createElement('li');
		$newTask.innerText = $todoInput.value;
		$newTask.setAttribute('id', `todo-${$idNumber}`);
		$ulList.appendChild($newTask);

		$todoInput.value = '';
		$alertInfo.innerText = '';
		createToolsArea();
	} else {
		$alertInfo.innerText = 'Enter the content of the task...';
	}
};

// buttons: complete, edit, delete 
const createToolsArea = () => {
	const toolsPanel = document.createElement('div');
	toolsPanel.classList.add('tools');
	$newTask.appendChild(toolsPanel);

	const completeBtn = document.createElement('button');
	completeBtn.classList.add('complete');
	completeBtn.innerHTML = '<i class="fas fa-check"></i>';

	const editBtn = document.createElement('button');
	editBtn.classList.add('edit');
	editBtn.innerText = 'EDIT';

	const deleteBtn = document.createElement('button');
	deleteBtn.classList.add('delete');
	deleteBtn.innerHTML = '<i class="fas fa-times"></i>';

	toolsPanel.appendChild(completeBtn);
	toolsPanel.appendChild(editBtn);
	toolsPanel.appendChild(deleteBtn);
};

// managing button clicks
const checkClick = (e) => {
	if (e.target.closest('button').classList.contains('complete')) {
		e.target.closest('li').classList.toggle('completed');
		e.target.closest('button').classList.toggle('completed');
	} else if (e.target.closest('button').className === 'edit') {
		editTask(e);
	} else if (e.target.closest('button').className === 'delete') {
		deleteTask(e)
	}
};

// edition of a new task
const editTask = (e) => {
	const oldTodo = e.target.closest('li').id;
	$editedTodo = document.getElementById(oldTodo);
	$popupInput.value = $editedTodo.firstChild.textContent;

	$popup.style.display = 'flex';
};

// adding a new task content
const changeTodo = () => {
	if ($popupInput.value !== '') {
		$editedTodo.firstChild.textContent = $popupInput.value;
		$popup.style.display = 'none';
		$popupInfo.innerText = '';
	} else {
		$popupInfo.innerText = 'You have to provide some content!';
	}
};

const closePopup = () => {
	$popup.style.display = 'none';
	$popupInfo.innerText = '';
};

// task removal
const deleteTask = (e) => {
    const deleteTodo = e.target.closest('li')
    deleteTodo.remove()

    if($allTasks.length === 0){
        $alertInfo.innerText = 'No tasks on the list.'

    }
}

document.addEventListener('DOMContentLoaded', main);
