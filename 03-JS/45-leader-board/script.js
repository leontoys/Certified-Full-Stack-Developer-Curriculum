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
        //console.log("difference---minutes",differenceMinutes)
        return `${Math.floor(differenceMinutes)}m ago`
    }
    else if(differenceHours < 24){
        //console.log("difference---hours",differenceHours)
        return `${Math.floor(differenceHours)}h ago`
    }
    else{
        //console.log("difference---days",differenceDays)
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
    let str = ""
    const entries = Object.keys(allCategories)
    //console.log("id",id)
    const found = entries.find(entry=>entry==id)
    //console.log("found",found)
    if(found){
        str = '<a href="'+ forumCategoryUrl+ allCategories[found].className +"/"+id+
        '"   class="category '+allCategories[found].className+ '">' + 
        allCategories[found].category + "</a>"
    }
    else{
        str = '<a href="'+ forumCategoryUrl+ "general/"+id+
        '"   class="category general">General</a>'
    }
    //console.log("str",str)
    return str
}

const avatars = (posters,users)=>{
    //console.log("posters",posters)
    //console.log("users",users)
    const images = []
    posters.forEach(poster => {
    console.log("poster",poster)
    const user = users.find(user=>user.id==poster.user_id)
    console.log("user",user)
    const avatar_template = avatarUrl+user.avatar_template.replace("{size}",30)
    //console.log("avatar_template",avatar_template)
    const image = 
    `<img src="${avatar_template}" alt="${user.name}">`
    //console.log("image",image)
    images.push(image)
   });
   //console.log("images",images)
   return images.join("")
}

const showLatestPosts = (post)=>{
    const postsContainer = document.getElementById("posts-container")
    let str = ""
    //console.log("post",post)
    const {users,topic_list} = post
    //const {posters} = topic_list
    //console.log("users",users)
    //console.log("topic_list",topic_list)
    const topics = topic_list.topics
    console.log("topics",topics)
    topics.forEach(({slug,title,category_id,id,posters,posts_count,views,bumped_at}) => {
        //console.log("users",users)
        str += `
        <tr>
            <td><a class="post-title" href="${forumTopicUrl}${slug}/${id}">${title}</a>${forumCategory(category_id)}</td>
            <td><div class="avatar-container">${avatars(posters,users)}</div></td>
            <td>${posts_count-1}</td>
            <td>${viewCount(views)}</td>
            <td>${timeAgo(bumped_at)}</td>
        </tr>` 
    });
    //console.log("str",str)
    postsContainer.innerHTML = str
}

const data = {
    users: [
      {
        avatar_template:
          "/user_avatar/forum.freecodecamp.org/quincylarson/{size}/212400_2.png",
        id: 6,
        name: "Quincy Larson",
        username: "QuincyLarson",
      },
      {
        avatar_template:
          "/user_avatar/forum.freecodecamp.org/jwilkins.oboe/{size}/179497_2.png",
        id: 285941,
        name: "Jessica Wilkins",
        username: "jwilkins.oboe",
      },
      {
        avatar_template:
          "/user_avatar/forum.freecodecamp.org/ilenia/{size}/270648_2.png",
        id: 170865,
        name: "Ilenia",
        username: "ilenia",
      },
    ],
    topic_list: {
      topics: [
        {
          bumped_at: "2024-04-15T16:01:26.403Z",
          category_id: 1,
          id: 684569,
          posters: [ { user_id: 6 }, { user_id: 170865 }, { user_id: 285941 } ],
          posts_count: 8,
          slug: "the-freecodecamp-podcast-is-back-now-with-video",
          title: "The freeCodeCamp Podcast is back – now with video",
          views: 542,
        },
        {
          bumped_at: "2024-04-19T13:52:03.523Z",
          category_id: 421,
          id: 686149,
          posters: [ { user_id: 6 }, { user_id: 170865 }, { user_id: 285941 } ],
          posts_count: 1,
          slug: "problem-with-making-changes-to-styles-js",
          title: "Problem with making changes to styles. (JS)",
          views: 9,
        },
      ],
    },
  };
  

const fetchData = async ()=>{
/*     showLatestPosts(data)
     await fetch(forumLatest)
            .then(res=>res.json)
            .then(data=>showLatestPosts(data))
            .catch(error=>console.error('Error:',error))  */
  try {
    let response = await fetch(forumLatest)
    let data = await response.json()
    showLatestPosts(data)
  } catch (error) {
    console.error(error)
  }
}

fetchData()


