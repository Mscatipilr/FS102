let initializeToDoList = () => {
    if (!localStorage.getItem('toDoList')){
      let toDoList = [];
      localStorage.setItem('toDoList', JSON.stringify(toDoList));
    } else {
        populateToDoList();
    }
}

let addTask = (task) => {
    let toDoList = JSON.parse(localStorage.getItem('toDoList'));
    let taskID = toDoList.length ? toDoList[toDoList.length - 1].taskID + 1 : 1;
    let newTask = {
    taskName: task,
    taskID: taskID
  };
    toDoList.push(newTask);
    localStorage.setItem('toDoList', JSON.stringify(toDoList));
    populateToDoList();
  }
let populateToDoList = () => {
  let toDoList = JSON.parse(localStorage.getItem('toDoList'));
  const ul = document.getElementById('ul');
  ul.innerHTML = '';
  //console.log(ul);
  //console.log(toDoList);
  toDoList.forEach(task => {
    let listItem = document.createElement('li');
    listItem.setAttribute("id",task.taskID);
    listItem.textContent = task.taskName;
    listItem.addEventListener('click', () => removeItem(task.taskID))
    //ul.innerHTML = `<li class="task">${task.taskName}</li>`;
    ul.appendChild(listItem);
  });
};

  let removeItem = (taskID) => {
    let toDoList = JSON.parse(localStorage.getItem('toDoList'));
    toDoList = toDoList.filter(task => task.taskID !== taskID);
    localStorage.setItem('toDoList', JSON.stringify(toDoList));
    populateToDoList();
  }
  
  initializeToDoList();


  document.getElementById('newTaskForm').addEventListener('submit', function(event) {
      event.preventDefault();
      addTask(document.getElementById('newTask').value);
      document.getElementById('newTask').value = '';
  });


  