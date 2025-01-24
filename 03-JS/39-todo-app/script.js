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

//on click of add new task button
openTaskFormBtn.addEventListener("click",()=>{
    //we will use toggle to add or remove class
    taskForm.classList.toggle("hidden")
})