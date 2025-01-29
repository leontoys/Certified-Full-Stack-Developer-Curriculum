const addBookmarkButton = document.getElementById("add-bookmark-button");
const categoryDropdown = document.getElementById("category-dropdown");
const categoryName = document.getElementsByClassName("category-name");
const closeFormButton = document.getElementById("close-form-button");
const addBookmarkButtonForm = document.getElementById("add-bookmark-button-form");
const viewCategoryButton = document.getElementById("view-category-button");
const nameInput = document.getElementById("name");
const url = document.getElementById("url");
const categoryList = document.getElementById("category-list");
const mainSection = document.getElementById("main-section")
const formSection = document.getElementById("form-section")
const bookmarkListSection = document.getElementById("bookmark-list-section")
const closeListButton = document.getElementById("close-list-button")
const deleteBookmarkButton = document.getElementById("delete-bookmark-button")

//getBookmarks function.
const getBookmarks = () => {
  //getBookmarks function should return an array.
  //getBookmarks function should return the bookmarks key from localStorage
  //local storage stores data as string so we need to parse
  const bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
  return bookmarks;
};

//a function named displayOrCloseForm
const displayOrCloseForm = () => {
  //displayOrCloseForm function should toggle the hidden class on #main-section and #form-section
  mainSection.classList.toggle("hidden");
  formSection.classList.toggle("hidden");
};

//When you click #add-bookmark-button
addBookmarkButton.addEventListener("click", () => {
  //update the inner text of .category-name to be //
  // the value of the selected option from #category-dropdown
  categoryName[0].innerText =
    categoryDropdown.options[categoryDropdown.selectedIndex].text;
  //call displayOrCloseForm to display the form section and hide the main section.
  displayOrCloseForm();
});

//When you click #close-form-button,
closeFormButton.addEventListener("click", () => {
  // call displayOrCloseForm to hide the form section and display the main section.
  displayOrCloseForm();
});

//When you click #add-bookmark-button-form,
addBookmarkButtonForm.addEventListener("click", () => {
  // The added object should have name set to the value of the #name input,
  // category set to the value of the selected option from the category dropdown,
  // and url set to the value of the #url input.
  const bookmark = {
    name: nameInput.value,
    category: categoryDropdown.value,
    url: url.value,
  };
  // update the bookmarks key stored in the local storage by adding an object to the end of the array.
  const bookmarks = getBookmarks();
  bookmarks.push(bookmark);
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  // you should reset the value of #name and #url to an empty string.
  nameInput.value = "";
  url.value = "";
  //you should run displayOrCloseForm to hide the form section and show the main sectio
  displayOrCloseForm();
});

//event listener for view category
const viewCategory = () => {
categoryList.innerHTML = ""
  //get selected category
  const category = categoryDropdown.value;
  //get bookmarks
  const bookmarks = getBookmarks();
  //filter based on category
  const bookmarksFiltered = bookmarks.filter(
    (bookmark) => bookmark.category === category
  );
  if (!bookmarksFiltered.length) {
    categoryList.innerHTML =  `<p>No Bookmarks Found</p>`;
    displayOrHideCategory()
  } 
  else {
    bookmarksFiltered.forEach(({name,category,url}) => {
      categoryList.innerHTML += `
            <div>
                <input type="radio" id="${name}" name="${category}" value="${name}"></input>
                <label><a href="${url}">${name}</a></label>
            </div>`;
    });
    displayOrHideCategory()
  }
}

// When you click #view-category-button,
viewCategoryButton.addEventListener("click", viewCategory );

const displayOrHideCategory = ()=>{
    mainSection.classList.toggle("hidden")
    bookmarkListSection.classList.toggle("hidden")
}

closeListButton.addEventListener("click",()=>{
    bookmarkListSection.classList.add("hidden")
    mainSection.classList.remove("hidden")
})

deleteBookmarkButton.addEventListener("click",(event)=>{
    const radio = document.querySelector('input[type="radio"]:checked')
    console.log(radio)
    //filter this out
    const bookmarks = getBookmarks()
    console.log(bookmarks)
    //filter
    const bookmarksFiltered = bookmarks.filter((
        bookmark)=>bookmark.name!==radio.value||bookmark.category!==radio.name)    
    console.log(bookmarksFiltered)
    //update local storage
    localStorage.setItem("bookmarks",JSON.stringify(bookmarksFiltered))
    //update view
    categoryList.innerHTML = ""
    if(!bookmarksFiltered.length){
        categoryList.innerHTML =  `<p>No Bookmarks Found</p>`;
    }
    else{
    bookmarksFiltered.forEach(({name,category,url}) => {
        categoryList.innerHTML += `
              <div>
                  <input type="radio" id="${name}" name="${category}" value="${name}"></input>
                  <label><a href="${url}">${name}</a></label>
              </div>`;
      });
    }  
})