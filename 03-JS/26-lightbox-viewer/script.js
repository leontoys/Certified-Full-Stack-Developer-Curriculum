const galleryItems = document.querySelectorAll(".gallery-item");
const lightBox = document.querySelector(".lightbox");
const lightBoxImage = document.getElementById("lightbox-image");
const closeButton = document.getElementById("close");

const itemClick = (event) => {
  const imageThumbnail = event.target.src;
  lightBox.style.display = "flex";
  const image = imageThumbnail.replace("-thumbnail", "");
  lightBoxImage.src = image;
 // event.stopPropagation();
};

galleryItems.forEach((galleryItem) => {
  galleryItem.addEventListener("click", itemClick);
});

//document.addEventListener("click", (e) => {
closeButton.addEventListener("click", (e) => {
    if (lightBox.style.display == "flex") {
    if (e.target.id !== "lightbox-image") {
      lightBox.style.display = "none";
    }
  }
});
