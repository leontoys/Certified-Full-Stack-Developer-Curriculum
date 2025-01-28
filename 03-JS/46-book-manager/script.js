const addBookmarkButton = document.getElementById("add-bookmark-button")
const categoryDropdown = document.getElementById("category-dropdown")  

//getBookmarks function.
const getBookmarks = () => {
  //getBookmarks function should return an array.
  //getBookmarks function should return the bookmarks key from localStorage
  //local storage stores data as string so we need to parse
  const bookmarks = JSON.parse(localStorage.getItem("bookmarks"))

  return bookmarks;
};

//a function named displayOrCloseForm
const displayOrCloseForm = ()=>{
    //displayOrCloseForm function should toggle the hidden class on #main-section and #form-section
    document.getElementById("main-section").classList.toggle("hidden")
    document.getElementById("form-section").classList.toggle("hidden")

}

//When you click #add-bookmark-button
addBookmarkButton.addEventListener("click",()=>{
//update the inner text of .category-name to be //
// the value of the selected option from #category-dropdown 
console.log(categoryDropdown) 
})