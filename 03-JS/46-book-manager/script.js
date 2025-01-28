const addBookmarkButton = document.getElementById("add-bookmark-button")
const categoryDropdown = document.getElementById("category-dropdown")  
const categoryName = document.getElementsByClassName("category-name")
const closeFormButton = document.getElementById("close-form-button")
const addBookmarkButtonForm = document.getElementById("add-bookmark-button-form")
const name = document.getElementById("name")
const url = document.getElementById("url")

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
console.log(categoryDropdown.options[categoryDropdown.selectedIndex].text) 
categoryName[0].innerText = categoryDropdown.options[categoryDropdown.selectedIndex].text
//call displayOrCloseForm to display the form section and hide the main section.
displayOrCloseForm()
})

//When you click #close-form-button, 
closeFormButton.addEventListener("click",()=>{
// call displayOrCloseForm to hide the form section and display the main section.
displayOrCloseForm()
})

//When you click #add-bookmark-button-form, 
addBookmarkButtonForm.addEventListener("click",()=>{
// The added object should have name set to the value of the #name input, 
// category set to the value of the selected option from the category dropdown, 
// and url set to the value of the #url input.
    const bookmark = {
        name : name.value,
        category : "",
        url : url.value
    }
// update the bookmarks key stored in the local storage by adding an object to the end of the array. 
    const bookmarks = getBookmarks()
    bookmarks.push(bookmark)
    localStorage.setItem("bookmarks",JSON.stringify(bookmarks))

})
