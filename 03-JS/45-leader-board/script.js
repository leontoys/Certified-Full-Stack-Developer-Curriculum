const forumLatest =
  'https://cdn.freecodecamp.org/curriculum/forum-latest/latest.json';
const forumTopicUrl = 'https://forum.freecodecamp.org/t/';
const forumCategoryUrl = 'https://forum.freecodecamp.org/c/';
const avatarUrl = 'https://sea1.discourse-cdn.com/freecodecamp';

const allCategories = {
  299: { category: 'Career Advice', className: 'career' },
  409: { category: 'Project Feedback', className: 'feedback' },
  417: { category: 'freeCodeCamp Support', className: 'support' },
  421: { category: 'JavaScript', className: 'javascript' },
  423: { category: 'HTML - CSS', className: 'html-css' },
  424: { category: 'Python', className: 'python' },
  432: { category: 'You Can Do This!', className: 'motivation' },
  560: { category: 'Backend Development', className: 'backend' }
};

const timeAgo = (timeISO)=>{//timestamp in the ISO 8601 format 
    const now = new Date()
    const time = new Date(timeISO)
    //console.log("now",typeof now)
    //console.log("time",typeof time)
    const difference = now - time
    //console.log("difference",difference)
    const differenceMinutes = ( difference ) / ( 1000 * 60 )
    const differenceHours = ( difference ) / ( 1000 * 60 * 60 )
    const differenceDays = ( difference ) / ( 1000 * 60 * 60 * 24 )

    if(differenceMinutes < 60){
        console.log("difference---minutes",differenceMinutes)
        return `${Math.floor(differenceMinutes)}m ago`
    }
    else if(differenceHours < 24){
        console.log("difference---hours",differenceHours)
        return `${Math.floor(differenceHours)}h ago`
    }
    else{
        console.log("difference---days",differenceDays)
        return `${Math.floor(differenceDays)}d ago`

    }
}

const viewCount = (views)=>{
    if(views >= 1000){
        return `${Math.floor(views/1000)}k`
    }
    else{
        return views
    }
}

const forumCategory = (id)=>{
    const entries = Object.keys(allCategories)
    console.log("id",id)
    const found = entries.find(entry=>entry===id)
    console.log("found",found)
    return found
}

/* const today = new Date("2025-01-31")
console.log("today",today)
timeAgo(today)
const yesterday = new Date("2025-01-30")
console.log("someday",yesterday)
timeAgo(yesterday)  */
//console.log(viewCount(597))
//console.log(viewCount(1000))
console.log(forumCategory(299))
console.log(forumCategory(200))  