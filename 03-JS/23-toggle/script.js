
const spans = document.querySelectorAll(".favorite-icon");

spans.forEach((span)=>{
    console.log(span);
    const toggle = event=>{
        if(event.target.getAttribute("class").includes("filled")){
            event.target.innerHTML = "&#9825;";
            event.target.setAttribute("class","favorite-icon")
        }
        else{
            console.log(event.target.getAttribute("class"),"this is not filled");
            event.target.innerHTML = "&#10084;";
            event.target.setAttribute("class","favorite-icon filled")
        }
    };

    span.addEventListener("click",toggle );
})