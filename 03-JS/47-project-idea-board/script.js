//object
const projectStatus = {
    PENDING:{
        description : "Pending Execution"
    }, 
    SUCCESS:{
        description : "Executed Successfully"
    },
    FAILURE:{
        description : "Execution Failed"
    }
}

//class
class ProjectIdea {
    //constructor
    constructor(title,description){
        this.title = title
        this.description = description
        this.status = projectStatus.PENDING
    }
    //method
    updateProjectStatus(newStatus){
        this.status = newStatus
    }
}

//idea
class ProjectIdeaBoard{
    constructor(title){
        this.title = title
        this.ideas = []
    }
    //methods
    pin(idea){//instance of project idea
        this.ideas.push(idea)
    }
    unpin(idea){
        return this.ideas.filter((element)=>element.title!==idea.title)
    }
    count(){
        return this.ideas.length
    }
    formatToString(){
        let str = `${this.title} has ${this.count()} idea(s)\n`
        this.ideas.forEach((idea) => {
            console.log(idea)
            //str += `${title} ${projectStatus[status]} - ${description}\n`
        });
        return str
    }
}

//testing
const idea = new ProjectIdea("Smart Window Locks", "An automation project allowing users to lock, unlock windows automatically based on weather conditions.")
idea.updateProjectStatus(projectStatus.SUCCESS)
idea.updateProjectStatus(projectStatus.FAILURE)
idea.updateProjectStatus(projectStatus.SUCCESS)
console.log(idea.status)
const emptyBoard = new ProjectIdeaBoard("Empty Board")
console.log(emptyBoard.formatToString())
const techProjects = new ProjectIdeaBoard("Tech Projects Board")
techProjects.pin(("Smart Home System", "An integrated system to control lighting, temperature, and security devices remotely."))
console.log(techProjects)
console.log(techProjects.formatToString())