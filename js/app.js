// --==Cached element references==--
const todoBox = document.getElementById('todo-box')  
const submitBtn = document.getElementById('submit-button')
const todoList = document.getElementById('todo-list')
const resetBtn = document.getElementById('reset-button')



// Add to do's
submitBtn.addEventListener('click', function(event){
  if(todoBox === "") return
  const newTodo = document.createElement('li')
  newTodo.textContent = todoBox.value
  todoList.appendChild(newTodo)
  todoBox.value = ''
})

// Remove to do's
todoList.addEventListener('click', function(event){
  const remove = event.target.remove
  remove.removeChild(event.target)
})

// Reset to do's
resetBtn.addEventListener('click', function(event){
  todoList.innerHTML = ''
  todoList.value = ''
})