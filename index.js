let todoInput
let errorInfo
let addBtn
let ulList
let newTodo //nowe zadanie
let popup
let popupInfo //tekst w popupie, jak się nie doda pusty tekst
let todoToEdit //edytowany Todo
let popupInput //input w popupie
let popupAddBtn //przycisk zatwierdź w popupie
let popupCloseBtn // przycisk anuluj w popupie

const main = () => {
	// wywoływanie poniższych funkcji
	prepareDOMEelements()
	prepareDOMEevents()
}

const prepareDOMEelements = () => {
	// pobieranie elementów
	todoInput = document.querySelector('.todo-input')
	errorInfo = document.querySelector('.error-info')
	addBtn = document.querySelector('.btn-add')
	ulList = document.querySelector('.todolist ul')
	popup = document.querySelector('.popup')
	popupInfo = document.querySelector('.popup-info')
	popupInput = document.querySelector('.popup-input')
	popupAddBtn = document.querySelector('.accept')
	popupCloseBtn = document.querySelector('.cancel')
}

const prepareDOMEevents = () => {
	// nasłuchiwanie
	addBtn.addEventListener('click', addNewTodo)
	ulList.addEventListener('click', checkClick)
	popupCloseBtn.addEventListener('click', closePopup)
	popupAddBtn.addEventListener('click', changeTodoText)
	todoInput.addEventListener('keyup', keyUpEnter)
}

// 1. tworzymy nowy element (li)
// 2. dodać nowy element do ul listy
// 3. funkcja odpalana na click w przycisku add
// 4. przychwytywanie nowej treści z inputa i umieszczenie jej w nowym li
// 5. funkcja nie doda do listy pustego todosa.

const addNewTodo = () => {
	if (todoInput.value !== '') {
		console.log('ok')
		newTodo = document.createElement('li')
		newTodo.textContent = todoInput.value
		console.log(newTodo)
		ulList.append(newTodo)
		createToolsArea()
		todoInput.value = ''
		errorInfo.textContent = ''
	} else {
		errorInfo.textContent = 'Wpisz treść zadania'
	}
}

const createToolsArea = () => {
	const toolsPanel = document.createElement('div')
	toolsPanel.classList.add('tools')
	newTodo.append(toolsPanel)

	const completeBtn = document.createElement('button')
	completeBtn.classList.add('complete')
	completeBtn.innerHTML = '<i class="fas fa-check"></i>'

	const editBtn = document.createElement('button')
	editBtn.classList.add('edit')
	editBtn.textContent = 'EDIT'

	const deleteBtn = document.createElement('button')
	deleteBtn.classList.add('delete')
	deleteBtn.innerHTML = '<i class="fas fa-times"></i>'

	toolsPanel.append(completeBtn, editBtn, deleteBtn)
}

const checkClick = e => {
	if (e.target.matches('.complete')) {
		e.target.closest('li').classList.toggle('completed')
		e.target.classList.toggle('completed')
	} else if (e.target.matches('.edit')) {
		editTodo(e)
	} else if (e.target.matches('.delete')) {
		deleteTodo(e)
	}
}

const editTodo = e => {
	todoToEdit = e.target.closest('li')
	popupInput.value = todoToEdit.firstChild.textContent
	console.log(todoToEdit.firstChild)
	popup.style.display = 'flex'
}

const closePopup = () => {
	popup.style.display = 'none'
popupInfo.textContent = ''
}

const changeTodoText = () => {
	if(popupInput.value !== '' ) {
		todoToEdit.firstChild.textContent = popupInput.value
		popup.style.display = 'none'
		popupInfo.textContent = ''
	} else {
		popupInfo.textContent = 'Musisz podać treść zadania'
	}
}


const deleteTodo = (e) => {
	e.target.closest('li').remove()
	const allTodos = ulList.querySelectorAll('li')
	if(allTodos.length === 0) {
		errorInfo.textContent = "Brak zadań do wykonania"
	}
}

const keyUpEnter = (e) => {
	if(e.key === 'Enter') {
		addNewTodo()
	}
}

document.addEventListener('DOMContentLoaded', main)
