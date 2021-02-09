const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const todos = getSavedTodos()

ShowTodos(todos)
setItemCount(todos.length)
setUncheckedCount(todos)

function newTodo() {
  const todoText = prompt("Enter TODO");
  if (todoText === '') {
    alert('Empty? Nah')
    return
  }
  todos.push({
    text: todoText,
    complete: false,
  })
  addSingleTodo(todos[todos.length - 1])
  setItemCount(todos.length)
  setUncheckedCount(todos)
  saveTodos(todos)
}

function saveTodos(todos) {
  localStorage.setItem('todos', JSON.stringify(todos))
}

function getSavedTodos() {
  const todoJson = localStorage.getItem('todos')
  try {
    return todoJson ? JSON.parse(todoJson) : []
  } catch (e) {
    return []
  }
}

function setItemCount(value) {
  document.querySelector('#item-count').textContent = value
}

function setUncheckedCount(todos) {
  const filtered = todos.filter((todo) => !todo.complete)
  document.querySelector("#unchecked-count").textContent = filtered.length
}

function addSingleTodo(todo, index) {
  //setup the container
  const rootDiv = document.createElement('li')
  rootDiv.setAttribute('class', classNames.TODO_ITEM)

  //setup todo text 
  const todoText = document.createElement('span')
  todoText.textContent = todo.text
  todoText.setAttribute('class', classNames.TODO_TEXT)

  //setup check box
  const checkBox = document.createElement('input')
  checkBox.setAttribute('type', 'checkbox')
  checkBox.setAttribute('class', classNames.TODO_CHECKBOX)
  checkBox.checked = todo.complete
  checkBox.addEventListener('change', () => {
    todo.complete = !todo.complete
    setUncheckedCount(todos)
    saveTodos(todos)
  })
  //setup delete button
  const deleteButton = document.createElement('button')
  deleteButton.setAttribute('class', 'delete');
  deleteButton.setAttribute('class', classNames.TODO_DELETE)
  deleteButton.addEventListener('click', function () {
    rootDiv.remove()
    todos.splice(index, 1)
    setUncheckedCount(todos)
    setItemCount(todos.length)

    saveTodos(todos)
    // refreshPage(todos)
  })
  let deleteIcon = document.createElement('I');
  deleteIcon.setAttribute('class', 'fa fa-trash');

  const list = document.querySelector('#todo-list')
  list.appendChild(rootDiv)
  rootDiv.appendChild(todoText)
  rootDiv.appendChild(checkBox)
  deleteButton.appendChild(deleteIcon)
  todoText.appendChild(deleteButton)

}

function ShowTodos(todos) {

  for (let i = 0; i < todos.length; ++i) {
    addSingleTodo(todos[i], i)
  }
}

function refreshPage(todos) {
  //Don't do that,just don't
  location.reload()
}
