const featuredImage = document.getElementById("featured-image")
const featuredTitle = document.getElementById("featured-title")
const featuredDescription = document.getElementById("featured-description")
const featuredContainer = document.querySelector(".featured-container");

let currentIndex = 0;


const featuredDishes = [
    {
        Image: "/photos/steakjpg.jpg",
        title: "Grilled ribeye steak",
        description: "Premium dry-aged beef grilled to perfection."
    },
    {
        Image: "/photos/salmon.jpg",
        title: "Grilled Salmon",
        description: "Fresh Atlantic salmon with seasonal vegetables."
    },
    {
        Image: "/photos/chocolatelava.jpg",
        title: "Chocolate Lava Cake",
        description: "Rich chocolate cake with a molten center."
    }






]


function updatedFeatured() {

featuredContainer.classList.add("fade-out")
   

    setTimeout(() => {

        featuredImage.src = featuredDishes[currentIndex].Image;
        featuredTitle.textContent = featuredDishes[currentIndex].title
        featuredDescription.textContent = featuredDishes[currentIndex].description

        featuredContainer.classList.remove("fade-out")
    }, 500)

}

setInterval(() => {
    currentIndex++

    if (currentIndex === featuredDishes.length) {
        currentIndex = 0;
    }

    updatedFeatured();

}, 5000)


const reservationForm = document.querySelector(".reservation-form");

reservationForm.addEventListener("submit", function (event) {
    event.preventDefault();

    alert("Your reservation request has been received!");
});


