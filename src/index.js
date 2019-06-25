document.addEventListener("DOMContentLoaded", () => {
  // your code here

  const formTag = document.querySelector('#create-task-form');
  formTag.addEventListener('submit', function(e) {
  e.preventDefault();
  const newTask = document.querySelector('input#new-task-description').value;
  const li = document.createElement("li");
  li.id = newTask;
  const textnode = document.createTextNode(newTask);
  const newButton = document.createElement("button");
  new_button.innerHTML = "x";
  li.appendChild(textnode);
  li.appendChild(new_button);
  document.getElementById('tasks').appendChild(li);
  formTag.reset();
  })

})