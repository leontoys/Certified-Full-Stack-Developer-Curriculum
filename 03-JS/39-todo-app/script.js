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

const taskData = []//to store all tasks - title,duedate,description - will be stored in localstorage

let currentTask = {}//track state while editing

const reset = ()=>{
    titleInput.value = ""
    dateInput.value = ""
    descriptionInput.value = ""
    taskForm.classList.toggle("hidden")
    currentTask = {}
}//to clear input fields

//on click of add new task button
openTaskFormBtn.addEventListener("click",()=>{
    //we will use toggle to add or remove class
    taskForm.classList.toggle("hidden")
})

//there is a close button on top right on click of it show pop up
closeTaskFormBtn.addEventListener("click",()=>{
    confirmCloseDialog.showModal()
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
    //check if the task already exists in the array
    const dataArrIndex = taskData.findIndex((item)=>item.id===currentTask.id)
    //for new task object
    const taskObj = {
        id: `${titleInput.value.toLowerCase().split(" ").join("-")}-${Date.now()}`,
        title: titleInput.value,
        date: dateInput.value,
        description: descriptionInput.value,
    }
   // console.log(taskObj)
   //if new task
   if(dataArrIndex===-1){
    //add it to the beginning
    taskData.unshift(taskObj)
   }
   //loop through tasks
   taskData.forEach(({id,title,date,description})=>{
    tasksContainer.innerHTML += `
    <div class="task" id="${id}">
        <p><strong>Title:</strong>${title}</p>
        <p><strong>Date:</strong>${date}</p>
        <p><strong>Description:</strong>${description}</p>
        <button type="button" class="btn">Edit</button>
        <button type="button" class="btn">Delete</button>
    </div>
    `
   }) 
   reset()
})