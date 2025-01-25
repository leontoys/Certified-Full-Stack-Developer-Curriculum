const taskForm = document.getElementById("task-form")
const confirmCloseDialog = document.getElementById("confirm-close-dialog")
const openTaskFormBtn = document.getElementById("open-task-form-btn")
const closeTaskFormBtn = document.getElementById("close-task-form-btn")
const addOrUpdateTaskBtn = document.getElementById("add-or-update-task-btn")
const cancelBtn = document.getElementById("cancel-btn")
const discardBtn = document.getElementById("discard-btn")
const tasksContainer = document.getElementById("tasks-container")
const titleInput = document.getElementById("title-input")
const dateInput = document.getElementById("date-input")
const descriptionInput = document.getElementById("description-input")

const taskData = JSON.parse(localStorage.getItem("data")) || []//to store all tasks - title,duedate,description - will be stored in localstorage

let currentTask = {}//track state while editing

//removing special characters
const removeSpecialChars = (input) => {
    return input.trim().replace(/[^A-Za-z0-9\-\s]/g, '')
  }

//refactoring add new task submit event listener
const addOrUpdateTask = ()=>{
    if(!titleInput.value.trim()){
        alert("Please provide a title")
        return
    }
    //check if the task already exists in the array
    const dataArrIndex = taskData.findIndex((item)=>item.id===currentTask.id)
    //for new task object
    const taskObj = {
        id: `${removeSpecialChars(titleInput.value).toLowerCase().split(" ").join("-")}-${Date.now()}`,
        title: removeSpecialChars(titleInput.value),
        date: removeSpecialChars(dateInput.value),
        description: removeSpecialChars(descriptionInput.value),
    }  
   // console.log(taskObj)
   //if new task
   if(dataArrIndex===-1){
    //add it to the beginning
    taskData.unshift(taskObj)
   } 
   else{
    taskData[dataArrIndex] = taskObj
   }
   //store
   localStorage.setItem("data",JSON.stringify(taskData))
   updateTaskContainer()
   reset()     
}

//updating html
const updateTaskContainer = ()=>{
    tasksContainer.innerHTML = ""
   //loop through tasks
   taskData.forEach(({id,title,date,description})=>{
    tasksContainer.innerHTML += `
    <div class="task" id="${id}">
        <p><strong>Title:</strong>${title}</p>
        <p><strong>Date:</strong>${date}</p>
        <p><strong>Description:</strong>${description}</p>
        <button type="button" class="btn" onclick="editTask(this)">Edit</button>
        <button type="button" class="btn" onclick="deleteTask(this)">Delete</button>
    </div>
    `
   }) 
}

//delete task
const deleteTask = (buttonEl)=>{
    const dataArrIndex = taskData.findIndex((item)=>item.id===buttonEl.parentElement.id)
    buttonEl.parentElement.remove()
    taskData.splice(dataArrIndex,1)
    localStorage.setItem("data",JSON.stringify(taskData))
}

//edit task
const editTask = (buttonEl)=>{
    const dataArrIndex = taskData.findIndex((item)=>item.id===buttonEl.parentElement.id)
    //get the task to be edited
    currentTask = taskData[dataArrIndex]
    //staging for editing
    titleInput.value = currentTask.title
    dateInput.value = currentTask.date
    descriptionInput.value = currentTask.description
    addOrUpdateTaskBtn.innerText = "Update Task"
    //open the form
    taskForm.classList.toggle("hidden")

}

const reset = ()=>{
    titleInput.value = ""
    dateInput.value = ""
    descriptionInput.value = ""
    taskForm.classList.toggle("hidden")
    currentTask = {}
    addOrUpdateTaskBtn.innerText = "Add Task"
}//to clear input fields

//show the tasks retrieved from local storage
if(taskData.length){
    updateTaskContainer()
}

//on click of add new task button
openTaskFormBtn.addEventListener("click",()=>{
    //we will use toggle to add or remove class
    taskForm.classList.toggle("hidden")
})

//there is a close button on top right on click of it show pop up
closeTaskFormBtn.addEventListener("click",()=>{
    //show cancel and discard button only if there is somethign entered by the user
    const formInputsContainValues = titleInput.value || dateInput.value || descriptionInput.value;
    //check if user changed anything
    const formInputValuesUpdated = titleInput.value !== currentTask.title || dateInput.value !== currentTask.date || descriptionInput.value !== currentTask.description
    if(formInputsContainValues && formInputValuesUpdated){
        confirmCloseDialog.showModal()
    }
    else{
        reset()
    }
})

//in the pop up there are two buttons - cancel and discard
cancelBtn.addEventListener("click",()=>{
    confirmCloseDialog.close()
})

//on click of discard close the confirm dialog as well as new task element
discardBtn.addEventListener("click",()=>{
    confirmCloseDialog.close()
    reset()
})

//once we open the task form, user enters the task info
//then wait for add task clik ie submit
taskForm.addEventListener("submit",(e)=>{
    e.preventDefault()
    addOrUpdateTask()
})

/* //tasks
const myTaskArr = [
    { task: "Walk the Dog", date: "22-04-2022" },
    { task: "Read some books", date: "02-11-2023" },
    { task: "Watch football", date: "10-08-2021" },
  ];
//add it to local storage - DON'T FORGET TO CONVERT TO STRING
localStorage.setItem("data",JSON.stringify(myTaskArr))
//get it from the local storage
const getTaskArr = localStorage.getItem("data")
console.log(typeof getTaskArr)
const getTaskArrObj = JSON.parse(localStorage.getItem("data"))
console.log(getTaskArrObj)
//remove
//localStorage.removeItem("data")
//clear
localStorage.clear() */